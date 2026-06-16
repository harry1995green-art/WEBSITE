"""
evening_tissue_v4.py — Composite Probability Tissue Generator
=============================================================
Replaces pure RPR softmax with a composite score model.

Composite score per horse:
  base     = RPR (or pseudo-RPR for debutants)
  x trainer course factor  (from Racing API trainer course analysis)
  x jockey course factor   (from Racing API jockey course analysis)
  x form factor            (recent wins/places)
  x freshness factor       (days since last run)
  x class factor           (OR relative to field median)

Softmax on composite scores -> win probabilities -> tissue prices.
No post-hoc calibration multiplier needed.

Run nightly at 9pm. Covers GB/IRE jumps and flat.
Saves: tissue_jumps_YYYY-MM-DD.csv and tissue_flat_YYYY-MM-DD.csv
"""

import os, re, csv, time, math, requests, numpy as np
from datetime import datetime, date

# ── Config ─────────────────────────────────────────────────────────────────────
API_USER  = "JVTsmaCzSGIk4V9cA3JCGtTc"
API_PW    = "JQa1A0ng1HDO9wfei5DA1CCC"
BASE_URL  = "https://api.theracingapi.com/v1"
AUTH      = (API_USER, API_PW)

_home      = os.path.expanduser("~")
OUTPUT_DIR = _home

MIN_RPR    = 40
MIN_FIELD  = 2

# ── Softmax temperature by field size ─────────────────────────────────────────
# Higher temp = flatter distribution = less certainty
# Calibrated so composite softmax produces realistic market-like prices
JUMPS_TEMPS = {14: 15.0, 10: 18.0, 6: 22.0, 0: 30.0}
FLAT_TEMPS  = {28: 35.0, 24: 30.0, 20: 25.0, 16: 18.0, 14: 12.0, 10: 13.0, 6: 14.0, 0: 16.0}
# Temperatures calibrated by field size:
# 6-runner Group 1: temp=14 (was 9) — enough spread so 2nd/3rd aren't crushed
# 10-14 runners: temp=12-13
# 16+: temp=18, 20+: temp=25, 24+: temp=30, 28+: temp=35

MAX_TISSUE_PRICE = 150.0  # floor — outsiders capped at 150/1 in display

# RPR exponent by race class — higher class = raw ability matters more
# Class 1, Class 2, Listed, Group races: exp=1.1
# Everything else: exp=1.0
HIGH_CLASS_IDENTIFIERS = ["class 1", "class 2", "listed", "group 1", "group 2", "group 3", "g1", "g2", "g3"]

def get_rpr_exponent(race_class):
    if not race_class:
        return 1.0
    rc = str(race_class).strip().lower()
    for identifier in HIGH_CLASS_IDENTIFIERS:
        if identifier in rc:
            return 1.1
    return 1.0

# Temperature adjustments for high class races (slightly higher = less extreme)
HIGH_CLASS_FLAT_TEMPS = {28: 35.0, 24: 30.0, 20: 25.0, 16: 18.0, 14: 14.0, 10: 14.0, 6: 14.0, 0: 16.0}

def get_temp(field_size, temps):
    for t in sorted(temps.keys(), reverse=True):
        if field_size >= t:
            return temps[t]
    return list(temps.values())[-1]


# ── Factor functions ───────────────────────────────────────────────────────────

def trainer_course_factor(ae):
    """
    A/E ratio at this course.
    >1.0 = outperforms expectations = shorter tissue (more likely to win)
    <1.0 = underperforms = longer tissue
    Floored at 0.75 AE, ceilinged at 1.15 AE to prevent overcorrection.
    """
    if ae is None or ae <= 0:
        ae = 1.0
    ae = max(0.75, min(1.15, ae))  # floor 0.75, ceiling 1.15
    return round(1.0 + (ae - 1.0) * 0.25, 3)


def jockey_course_factor(ae):
    """Same as trainer but smaller influence."""
    ae = max(0.75, ae)  # floor: bad trainer AE capped at 0.75
    if ae is None or ae <= 0:
        return 1.0
    return round(1.0 + (ae - 1.0) * 0.15, 3)


def form_factor(wins, places, runs):
    """
    Recent form boosts probability.
    2+ wins in last 6 = significant boost.
    0 wins 0 places = slight penalty.
    """
    if runs == 0:
        return 1.0
    win_rate   = wins / runs
    place_rate = places / runs
    # Boost: each win in last 6 = +4%, each place = +2%
    boost = 1.0 + (wins * 0.04) + (places * 0.02)
    return round(min(1.20, max(0.90, boost)), 3)


def freshness_factor(days_since_last_run):
    """
    Days since last run.
    7-21 days = peak freshness
    <7 days = slight concern (quick turnaround)
    >60 days = layoff uncertainty
    >180 days = major uncertainty — rarely wins first time back
    >300 days = very extended absence — significant penalty
    """
    d = int(days_since_last_run or 30)
    if d == 0:
        return 1.0   # debutant handled separately
    elif d <= 6:
        return 0.97  # very quick turnaround
    elif d <= 21:
        return 1.04  # peak freshness
    elif d <= 45:
        return 1.0   # normal
    elif d <= 90:
        return 0.95  # short layoff
    elif d <= 180:
        return 0.90  # longer layoff
    elif d <= 300:
        return 0.84  # extended absence — significant penalty
    else:
        return 0.78  # very long absence — major penalty


def class_factor(runner_or, median_or):
    """
    How does the horse's OR compare to the field median?
    Well above median = shorter tissue (well handicapped or class horse)
    Well below median = longer tissue
    """
    if not runner_or or not median_or or median_or == 0:
        return 1.0
    ratio = runner_or / median_or
    # ratio=1.2 (20% above median) -> factor=1.05
    # ratio=0.8 (20% below median) -> factor=0.95
    return round(1.0 + (ratio - 1.0) * 0.25, 3)


def trainer_14day_factor(trainer_pct):
    """Recent 14-day trainer form."""
    if trainer_pct is None:
        return 1.0
    pct = float(trainer_pct)
    if pct >= 30:   return 1.08
    elif pct >= 20: return 1.04
    elif pct >= 10: return 1.0
    elif pct == 0:  return 0.94
    return 1.0


def rpr_ofr_gap_factor(rpr, ofr, is_handicap):
    """
    RPR vs Official Rating gap — handicap specific signal.
    If RPR significantly exceeds OFR, horse is well handicapped on paper
    and could be exploiting a good mark. Boosts their composite.
    If OFR exceeds RPR, horse may be poorly handicapped — small penalty.
    Only meaningful in handicaps. In conditions/Group races OFR is less relevant.

    Examples:
      RPR=105, OFR=95  -> gap=+10 -> well handicapped -> boost
      RPR=95,  OFR=100 -> gap=-5  -> poorly handicapped -> penalty
      RPR=100, OFR=100 -> gap=0   -> fairly handicapped -> neutral
    """
    if not is_handicap or not rpr or not ofr or ofr == 0:
        return 1.0
    gap = rpr - ofr  # positive = well handicapped
    # Each point of gap = 0.5% boost/penalty, capped at +10%/-8%
    factor = 1.0 + (gap * 0.005)
    return round(min(1.10, max(0.92, factor)), 3)


# Jockey tier rankings — used for handicap booking signal
# Tier 1: Elite — always trying on their best rides
# Tier 2: Very good — significant booking in handicaps
# Tier 3: Good — solid but not a major signal
# Tier 4: Unknown/apprentice — no boost
JOCKEY_TIERS = {
    # Tier 1
    "ryan moore": 1, "frankie dettori": 1, "william buick": 1,
    "james mcdonald": 1, "oisin murphy": 1, "james doyle": 1,
    "tom marquand": 1, "rossa ryan": 1, "colin keane": 1,
    "seamie heffernan": 1, "wayne lordan": 1, "christophe soumillon": 1,
    "mickael barzalona": 1, "pierre-charles boudot": 1,
    # Tier 2
    "hector crouch": 2, "daniel tudhope": 2, "david egan": 2,
    "kieran shoemark": 2, "jason watson": 2, "billy loughnane": 2,
    "cieren fallon": 2, "sean levey": 2, "pat cosgrave": 2,
    "robert havlin": 2, "jamie spencer": 2, "richard kingscote": 2,
    "p j mcdonald": 2, "clifford lee": 2, "jack mitchell": 2,
    "franny norton": 2, "adam kirby": 2, "silvestre de sousa": 2,
}

def handicap_jockey_factor(jockey, is_handicap):
    """
    In handicaps, top jockey bookings are a strong positive signal.
    Apprentices and unknown jockeys are a mild negative signal.
    No effect in conditions/Group races where all jockeys ride their best.
    
    Tier 1 (elite): +6%
    Tier 2 (very good): +3%
    Tier 3/unknown: neutral
    Apprentice (7lb+): -4%
    """
    if not is_handicap:
        return 1.0
    if not jockey:
        return 1.0
    j = jockey.strip().lower()
    # Check for apprentice claim in name (e.g. "Jack Nicholls(5)" or "Hope Regan(7)")
    import re
    claim_match = re.search(r'[(](\d+)[)]', jockey)
    if claim_match:
        claim = int(claim_match.group(1))
        if claim >= 5:
            return 0.96  # 5/7lb claimer — likely not stable's main hope
        elif claim >= 3:
            return 0.98  # 3lb claimer — mild penalty
    tier = JOCKEY_TIERS.get(j, 3)
    if tier == 1: return 1.06
    if tier == 2: return 1.03
    return 1.0


def same_trainer_jockey_factor(runner, all_runners):
    """Disabled — was producing overcorrections. Returns 1.0 (no adjustment)."""
    return 1.0


def weight_factor(horse_lbs, median_lbs, is_handicap):
    """
    In handicaps, weight carried relative to field median matters.
    Top weights are penalised, low weights get a boost.
    Only applied in handicap races — irrelevant in conditions/Group races.
    Effect is deliberately modest: 1lb = ~0.4% difference in factor.
    """
    if not is_handicap or not horse_lbs or not median_lbs or median_lbs == 0:
        return 1.0
    diff = median_lbs - horse_lbs  # positive = carrying less than median (advantage)
    factor = 1.0 + (diff * 0.004)
    return round(min(1.08, max(0.92, factor)), 3)


def topspeed_factor(ts, rpr):
    """
    Topspeed rating as a secondary signal.
    If TS significantly exceeds RPR, horse may be ahead of official mark.
    If TS lags RPR, horse may be below form.
    Only a minor adjustment — RPR remains the primary signal.
    """
    if not ts or not rpr or rpr == 0:
        return 1.0
    ratio = float(ts) / float(rpr)
    if ratio >= 1.1:   return 1.03   # TS well ahead of RPR — positive
    elif ratio >= 1.0: return 1.01
    elif ratio >= 0.9: return 1.0
    elif ratio >= 0.8: return 0.99
    else:              return 0.97   # TS well behind RPR — negative


# ── API helpers ────────────────────────────────────────────────────────────────

def api_get(url, params=None):
    try:
        r = requests.get(url, params=params, auth=AUTH, timeout=30)
        if r.status_code == 200:
            return r.json()
    except:
        pass
    return None


def get_ae_at_course(entity_id, entity_type, course):
    """Get A/E ratio for trainer or jockey at specific course."""
    if not entity_id:
        return 1.0
    url = f"{BASE_URL}/{entity_type}/{entity_id}/analysis/courses"
    data = api_get(url)
    if not data:
        return 1.0
    course_norm = course.strip().lower()
    for c in data.get("courses", []):
        if c.get("course","").strip().lower() == course_norm:
            runners = int(c.get("runners", 0) or 0)
            if runners < 15:
                return 1.0  # insufficient sample
            ae = float(c.get("a/e", 1.0) or 1.0)
            return ae
    return 1.0


def get_horse_last_run(horse_id):
    """Get days since last run from results."""
    url = f"{BASE_URL}/horses/{horse_id}/results"
    data = api_get(url, params={"limit": 1})
    if not data:
        return 30
    results = data.get("results", [])
    if not results:
        return 999  # debutant
    try:
        last_date = results[0].get("date","")
        if last_date:
            d = datetime.strptime(last_date, "%Y-%m-%d").date()
            return (date.today() - d).days
    except:
        pass
    return 30


def parse_form(form_str):
    """
    Extract wins and places from form string, respecting season separators.
    Only counts runs from the current season (after the last '-' or '/').
    e.g. "10/29-31" -> current season is "31" (2 runs), not "1029-31" (6 runs)
    e.g. "211-41"   -> current season is "41" (2 runs)
    e.g. "12131"    -> no separator, use last 6 chars as before
    """
    if not form_str:
        return 0, 0, 0
    s = str(form_str)
    # Split on season separators; take only the most recent season's runs
    # '-' separates seasons, '/' separates years within a career
    parts = re.split(r'[-/]', s)
    current_season = parts[-1] if parts else s
    # Trailing '-' or '/' means a new season started but no runs yet.
    # Do NOT fall back to last season — those wins belong to a different campaign.
    if not current_season:
        return 0, 0, 0
    digits = re.findall(r'[0-9PFU]', current_season)[-6:]
    wins   = sum(1 for d in digits if d == '1')
    places = sum(1 for d in digits if d in ('2', '3'))
    return wins, places, len(digits)


def rpr_staleness_factor(last_run_days, is_handicap, is_conditions=False):
    """
    RPR is based on a horse's best recent performance.
    If a horse hasn't run for a long time, their RPR may be stale.

    Full penalty in handicaps (mark staleness most dangerous).
    Lighter penalty in conditions/Listed races (RPR is still relevant but
    class horses can bounce back from absences more reliably).
    No effect in sprint/maiden conditions for horses absent <180 days.
    """
    d = int(last_run_days or 30)
    if is_handicap:
        if d <= 90:    return 1.0
        elif d <= 180: return 0.97
        elif d <= 300: return 0.93
        else:          return 0.88
    elif is_conditions:
        # Lighter version for conditions/Listed — RPR still broadly valid
        if d <= 180:   return 1.0
        elif d <= 300: return 0.96
        else:          return 0.92
    return 1.0


def form_recency_factor(form_str):
    """
    Penalty/boost based on actual finishing positions, not just win rate.
    Weights recent runs more heavily than older ones.
    
    A horse finishing 7th, 8th, 9th repeatedly is NOT the same as one
    finishing 2nd, 3rd regularly — even if win count is identical (zero).
    
    Position scoring (last 6 runs, most recent = highest weight):
      1st = +1.0, 2nd = +0.6, 3rd = +0.3, 4th = +0.1
      5th-7th = -0.1, 8th+ = -0.3, P/F/U = -0.5
    
    Weights by recency: [0.35, 0.25, 0.18, 0.12, 0.07, 0.03]
    Most recent run = 35% of score, oldest = 3%.
    """
    if not form_str:
        return 1.0
    # Extract last 6 results
    chars = re.findall(r'[0-9PFUpfu]', str(form_str))[-6:]
    if not chars:
        return 1.0
    
    weights = [0.35, 0.25, 0.18, 0.12, 0.07, 0.03]
    # Pad to 6 with neutral if fewer runs
    while len(chars) < 6:
        chars.insert(0, '0')  # neutral for unknown
    
    score = 0.0
    for i, (c, w) in enumerate(zip(reversed(chars), weights)):
        c = str(c).upper()
        if c == '1':   pos_score = 1.0
        elif c == '2': pos_score = 0.6
        elif c == '3': pos_score = 0.3
        elif c == '4': pos_score = 0.1
        elif c == '5': pos_score = -0.05
        elif c == '6': pos_score = -0.1
        elif c == '7': pos_score = -0.15
        elif c in ('8','9'): pos_score = -0.25
        elif c == '0': pos_score = 0.0   # unknown
        else:          pos_score = -0.4  # P/F/U/pulled up
        score += pos_score * w
    
    # Convert score to factor: range roughly -0.5 to +1.0
    # Map to factor range 0.88 to 1.12
    factor = 1.0 + (score * 0.15)
    return round(min(1.12, max(0.88, factor)), 3)


# ── Main tissue generation ─────────────────────────────────────────────────────

def generate_composite_tissue(runners, course, temps, is_jumps, race_class="", is_handicap=False):
    """
    Build composite score for each rated runner and run softmax.
    Returns runners with tissue prices added.
    """
    field_size = len(runners)

    # Exclude 20+ runner flat handicaps — too many unknowns (trainer intent,
    # fitness, weights). Model temp would need to be ~50 which signals uncertainty.
    # Better to publish no price than a misleading one.
    if is_handicap and not is_jumps and field_size >= 20:
        for i in range(len(runners)):
            runners[i]["tissue"] = ""
            runners[i]["skip_reason"] = f"20+ runner flat handicap ({field_size} runners) — excluded"
        print(f"  SKIP: {field_size}-runner flat handicap — too large to price reliably")
        return runners

    rated = [(i, r) for i, r in enumerate(runners)
             if r.get("rpr") and r["rpr"] >= MIN_RPR and not r.get("is_debutant")]

    if len(rated) < MIN_FIELD:
        return runners

    # GUARD: if too few of the field are rated, the softmax collapses
    # probability onto the rated few, producing tissues that are far too short.
    # Require at least 70% of the field rated, else skip (don't publish a price).
    MIN_RATED_FRACTION = 0.70
    if field_size > 0 and (len(rated) / field_size) < MIN_RATED_FRACTION:
        for i in range(len(runners)):
            runners[i]["tissue"] = ""
            runners[i]["skip_reason"] = f"only {len(rated)}/{field_size} rated"
        return runners

    temp = get_temp(field_size, temps)

    # Field median OR for class factor
    ors = [r["rpr"] for _, r in rated]
    median_or = sorted(ors)[len(ors)//2]

    # Field median weight for handicap weight factor
    lbs_list = [r.get("lbs", 0) for _, r in rated if r.get("lbs", 0) > 0]
    median_lbs = sorted(lbs_list)[len(lbs_list)//2] if lbs_list else 0

    composite_scores = []
    for i, runner in rated:
        rpr = runner["rpr"]

        # Fetch trainer/jockey course AE
        trainer_ae = get_ae_at_course(runner.get("trainer_id",""), "trainers", course)
        time.sleep(0.15)
        jockey_ae  = get_ae_at_course(runner.get("jockey_id",""), "jockeys", course)
        time.sleep(0.15)

        # Get last run days — pulled directly from racecard, no extra API call needed
        days_since = runner.get("last_run_days") or 30

        # Parse form
        form_str = runner.get("form","")
        wins, places, runs = parse_form(form_str)

        # Get trainer 14-day %
        t14 = runner.get("trainer_sr", 0.10)
        trainer_pct = t14 * 100 if t14 <= 1 else t14

        # Base factors used in all race types
        tf   = trainer_course_factor(trainer_ae)
        jf   = jockey_course_factor(jockey_ae)
        t14f = trainer_14day_factor(trainer_pct)
        cf   = class_factor(rpr, median_or)
        sjf  = same_trainer_jockey_factor(runner, runners)
        rpr_exp = get_rpr_exponent(race_class)

        is_group_listed = rpr_exp > 1.0  # Group 1/2/3, Listed, Class 1/2

        # Exclude horses absent 400+ days — RPR is too stale to be meaningful,
        # perf_rating will be missing, and the market routinely ignores them.
        # Flag as INSUFFICIENT_DATA rather than pricing them at the 150/1 floor.
        if days_since >= 400:
            runner["tissue"] = ""
            runner["skip_reason"] = f"absent {days_since} days — insufficient data"
            print(f"    {runner['horse']:<25} SKIP: absent {days_since} days")
            continue

        if is_group_listed and not is_handicap:
            # ── GROUP / LISTED / CLASS 1 CONDITIONS RACES ──────────────────
            # Blend performance_rating (most recent run) 70% + career-best RPR 30%.
            # Recent form is the dominant signal in Group/Listed races.
            perf_rating = runner.get("perf_rating", 0)
            if perf_rating and perf_rating >= MIN_RPR:
                effective_rpr = (perf_rating * 0.70) + (rpr * 0.30)
            else:
                effective_rpr = rpr
            ff   = min(form_factor(wins, places, runs), 1.04)
            frf  = freshness_factor(days_since)
            frcf = form_recency_factor(form_str)
            frcf = 1.0 + (frcf - 1.0) * 0.3  # dampen to 30% of calculated effect
            stf  = rpr_staleness_factor(days_since, is_handicap=False, is_conditions=True)
            composite = (effective_rpr ** rpr_exp) * tf * jf * ff * frf * frcf * cf * t14f * sjf * stf

        elif is_handicap:
            # ── HANDICAP RACES ──────────────────────────────────────────────
            # Use 50/50 blend of perf_rating and career-best RPR.
            # A horse with RPR=100 (2 years ago) and perf_rating=88 (last run)
            # should be priced closer to 88 ability, not 100.
            perf_rating = runner.get("perf_rating", 0)
            if perf_rating and perf_rating >= MIN_RPR:
                effective_rpr = (perf_rating * 0.50) + (rpr * 0.50)
            else:
                effective_rpr = rpr
            ff   = form_factor(wins, places, runs)
            frf  = freshness_factor(days_since)
            frcf = form_recency_factor(form_str)
            stf  = rpr_staleness_factor(days_since, is_handicap=True)
            wf   = weight_factor(runner.get("lbs", 0), median_lbs, True)
            tsf  = topspeed_factor(runner.get("ts", 0), rpr)
            gapf = rpr_ofr_gap_factor(rpr, runner.get("ofr", 0), True)
            hjf  = handicap_jockey_factor(runner.get("jockey", ""), True)
            composite = (effective_rpr ** rpr_exp) * tf * jf * ff * frf * frcf * cf * t14f * sjf * wf * tsf * gapf * hjf * stf

        else:
            # ── CONDITIONS RACES CLASS 3-6 ──────────────────────────────────
            ff   = form_factor(wins, places, runs)
            frf  = freshness_factor(days_since)
            frcf = form_recency_factor(form_str)
            tsf  = topspeed_factor(runner.get("ts", 0), rpr)
            stf  = rpr_staleness_factor(days_since, is_handicap=False, is_conditions=True)
            composite = (rpr ** rpr_exp) * tf * jf * ff * frf * frcf * cf * t14f * sjf * tsf * stf

        # Store defaults for unused factors so CSV columns stay consistent
        wf   = wf   if is_handicap else 1.0
        tsf  = tsf  if (is_handicap or not is_group_listed) else 1.0
        gapf = gapf if is_handicap else 1.0
        hjf  = hjf  if is_handicap else 1.0
        stf  = locals().get('stf', 1.0)
        frcf = locals().get('frcf', 1.0)
        ff   = locals().get('ff', 1.0)
        frf  = locals().get('frf', 1.0)

        # Store factors for transparency
        runner["trainer_course_ae"] = round(trainer_ae, 2)
        runner["jockey_course_ae"]  = round(jockey_ae, 2)
        runner["form_factor"]       = ff
        runner["freshness_factor"]  = frf
        runner["class_factor"]      = cf
        runner["trainer_ae_factor"] = tf
        runner["jockey_ae_factor"]  = jf
        runner["composite_score"]   = round(composite, 1)
        runner["last_run_days"]     = days_since
        runner["trainer_pct_14"]    = round(trainer_pct, 1)
        runner["or_rank"]           = 0  # set after softmax

        composite_scores.append((i, composite))

        print(f"    {runner['horse']:<25} RPR={rpr:>3}  "
              f"Form={ff:.2f}/{frcf:.2f}  Fresh={frf:.2f}  Stale={stf:.2f}  "
              f"Wt={wf:.2f}  Gap={gapf:.2f}  HJock={hjf:.2f}  "
              f"Composite={composite:.1f}")

    if len(composite_scores) < MIN_FIELD:
        return runners

    # Softmax on composite scores
    scores = np.array([s for _, s in composite_scores])
    scores = scores - scores.max()  # normalise
    exps   = np.exp(scores / temp)
    probs  = exps / exps.sum()

    # Apply max price floor — no horse longer than MAX_TISSUE_PRICE
    # Renormalise so probabilities still sum to 1
    min_prob = 1.0 / MAX_TISSUE_PRICE
    probs = np.maximum(probs, min_prob)
    probs = probs / probs.sum()

    tissue_prices = 1.0 / probs
    rpr_ranks = (len(scores) + 1) - np.argsort(np.argsort(scores))

    for j, (orig_idx, _) in enumerate(composite_scores):
        runners[orig_idx]["tissue"]    = round(float(tissue_prices[j]), 2)
        runners[orig_idx]["prob_pct"]  = round(float(probs[j]) * 100, 2)
        runners[orig_idx]["rpr_rank"]  = int(rpr_ranks[j])
        runners[orig_idx]["or_rank"]   = int(rpr_ranks[j])
        runners[orig_idx]["field_size"]= field_size

    return runners


def run_tissue(mode="both"):
    today = date.today().strftime("%Y-%m-%d")
    print("=" * 65)
    print(f"  EVENING TISSUE v4 — COMPOSITE PROBABILITY MODEL")
    print(f"  Date: {today}")
    print(f"  Signals: RPR + trainer course AE + jockey course AE")
    print(f"           + form + freshness + class + trainer 14-day")
    print("=" * 65)

    # Fetch racecards
    print("\nFetching racecards...")
    data = api_get(f"{BASE_URL}/racecards/pro", params={"date": today})
    if not data:
        print("ERROR: Could not fetch racecards")
        return
    cards = data.get("racecards", [])
    print(f"  {len(cards)} races")

    jumps_races = []
    flat_races  = []

    cards = [c for c in cards if c.get("region") in ("GB", "IRE")]
    print(f"  {len(cards)} GB/IRE races")

    for card in cards:
        rcode = card.get("type","")
        if rcode == "All Weather":
            continue

        course     = card.get("course","")
        race_class = card.get("race_class","")
        going      = card.get("going","")
        distance_f = float(card.get("distance_f",0) or 0)
        is_jumps   = rcode in ("Chase", "Hurdle", "NH Flat", "National Hunt")

        runners = []
        for r in card.get("runners",[]):
            try:
                rpr_raw = r.get("rpr") or r.get("ofr") or 0
                rpr = int(rpr_raw) if rpr_raw else None
            except:
                rpr = None
            if rpr and rpr < MIN_RPR:
                rpr = None

            try:
                t14 = r.get("trainer_14_days",{}) or {}
                trainer_sr = int(t14.get("percent",10) or 10) / 100
            except:
                trainer_sr = 0.10

            wins, places, runs = parse_form(r.get("form",""))

            # Extract lbs, ofr, ts, last_run directly from racecard
            try:
                lbs = int(r.get("lbs") or 0)
            except:
                lbs = 0
            try:
                ofr = int(r.get("ofr") or 0)
            except:
                ofr = 0
            try:
                ts = int(r.get("ts") or 0)
            except:
                ts = 0
            try:
                last_run = int(r.get("last_run") or 30)
            except:
                last_run = 30
            try:
                age = int(r.get("age") or 0)
            except:
                age = 0
            try:
                perf_rating = int(r.get("performance_rating") or 0)
            except:
                perf_rating = 0

            runners.append({
                "horse_id":   r.get("horse_id",""),
                "horse":      r.get("horse",""),
                "jockey":     r.get("jockey",""),
                "jockey_id":  r.get("jockey_id",""),
                "trainer":    r.get("trainer",""),
                "trainer_id": r.get("trainer_id",""),
                "trainer_sr": trainer_sr,
                "rpr":        rpr,
                "perf_rating":perf_rating,  # RPR from most recent run
                "ofr":        ofr,
                "lbs":        lbs,
                "ts":         ts,
                "age":        age,
                "form":       r.get("form",""),
                "form_wins":  wins,
                "form_places":places,
                "form_runs":  runs,
                "headgear":   r.get("headgear",""),
                "draw":       r.get("draw",""),
                "is_debutant":rpr is None,
                "last_run_days": last_run,  # use racecard value directly
                # defaults
                "tissue": None, "prob_pct": None, "rpr_rank": None,
                "field_size": None, "composite_score": None,
                "trainer_course_ae": 1.0, "jockey_course_ae": 1.0,
                "form_factor": 1.0, "freshness_factor": 1.0,
                "class_factor": 1.0, "trainer_ae_factor": 1.0,
                "jockey_ae_factor": 1.0,
            })

        if len(runners) >= MIN_FIELD:
            off_time = card.get("off_time","")
            is_handicap = "handicap" in card.get("race_name","").lower() or "h'cap" in card.get("race_name","").lower()
            race = {
                "course": course, "class": race_class,
                "going": going, "distance": distance_f,
                "time": off_time,
                "is_handicap": is_handicap,
                "runners": runners,
            }
            if is_jumps:
                jumps_races.append(race)
            else:
                flat_races.append(race)

    def process_and_save(races, label, temps, suffix):
        if not races:
            print(f"\nNo {label} races today.")
            return
        print(f"\n{'─'*65}")
        print(f"  {label.upper()} — {len(races)} races")
        print(f"{'─'*65}")
        for race in races:
            course = race["course"]
            n = len(race["runners"])
            rated = sum(1 for r in race["runners"] if not r["is_debutant"])
            print(f"\n  {course} — {n} runners ({rated} rated)")
            rc = race.get("class","")
            is_high_class = any(i in str(rc).lower() for i in HIGH_CLASS_IDENTIFIERS)
            effective_temps = HIGH_CLASS_FLAT_TEMPS if (is_high_class and label=="flat") else temps
            race["runners"] = generate_composite_tissue(
                race["runners"], course, effective_temps, label=="jumps",
                race_class=rc, is_handicap=race.get("is_handicap", False))

        # Save
        filename = os.path.join(OUTPUT_DIR, f"tissue_{suffix}_{today}.csv")
        fields = [
            "date","time","course","class","distance","going",
            "horse_id","horse","jockey","trainer",
            "rpr","rpr_rank","field_size","headgear",
            "tissue","prob_pct","median",
            "going_category","cd_multiplier","draw_multiplier",
            "class_multiplier","tissue_confidence","num_runs",
            "is_debutant","proxy_method",
            "composite_score","trainer_course_ae","jockey_course_ae",
            "form_factor","freshness_factor","last_run_days",
            "trainer_pct_14","or_rank",
        ]
        rows = []
        for race in races:
            for r in race["runners"]:
                if r.get("tissue"):
                    row = {f: r.get(f,"") for f in fields}
                    row["course"]         = race["course"]
                    row["class"]          = race["class"]
                    row["going"]          = race["going"]
                    row["distance"]       = race["distance"]
                    row["date"]           = today
                    row["time"]           = race.get("time","")
                    row["median"]         = ""
                    row["going_category"] = r.get("going_category","proven")
                    row["cd_multiplier"]  = r.get("cd_multiplier",1.0)
                    row["draw_multiplier"]= r.get("draw_multiplier",1.0)
                    row["class_multiplier"]= r.get("class_multiplier",1.0)
                    row["tissue_confidence"]= "MEDIUM"
                    row["num_runs"]       = r.get("form_runs",0)
                    row["proxy_method"]   = "composite_v4"
                    rows.append(row)

        with open(filename, "w", newline="") as f:
            w = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
            w.writeheader()
            w.writerows(rows)
        print(f"\n  Saved {len(rows)} runners -> {filename}")

    if mode in ("both","jumps"):
        process_and_save(jumps_races, "jumps", JUMPS_TEMPS, "jumps")
    if mode in ("both","flat"):
        process_and_save(flat_races,  "flat",  FLAT_TEMPS,  "flat")

    print(f"\n{'='*65}")
    print(f"  Done. Run morning_flags at 8:45am.")
    print(f"{'='*65}")


if __name__ == "__main__":
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument("--mode", choices=["both","jumps","flat"], default="both")
    run_tissue(p.parse_args().mode)