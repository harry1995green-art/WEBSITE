"""
morning_flags.py — Morning Overlay Detector (FLAT + JUMPS)
===========================================================
Reads tissue_flat_{date}.csv and tissue_jumps_{date}.csv
Pulls live bookmaker prices once from Racing API
Flags value overlays for both flat and jumps
Generates tissue_display_{date}.csv with market-anchored prices for website upload

Run each morning at 8:45-9am.
"""

import requests
import numpy as np
from datetime import datetime
import csv
import os
import re
import time

# ── Config ─────────────────────────────────────────────────────────────────────
RACING_API_USERNAME = "JVTsmaCzSGIk4V9cA3JCGtTc"
RACING_API_PASSWORD = "JQa1A0ng1HDO9wfei5DA1CCC"

MAX_TISSUE_PRICE  = 30.0
MAX_PRICE         = 41.0
MIN_PRICE         = 1.5
MAX_FIELD_SIZE    = 12
HARD_FIELD_MAX    = 16
MIN_RPR_RANK      = 4
MAX_RPR_RANK      = 6
GAP_BANDS         = [(20, 60), (80, 200)]
MIN_GAP_PCT       = 20
EXCLUDE_COLD_TRAINERS = True
MIN_TRAINER_PCT   = 1

_home      = os.path.expanduser("~")
TISSUE_DIR = _home  # tissue files saved to home directory by evening_tissue_v4.py

EXCLUDE_FROM_BEST = ["Betfair Exchange", "Betfair SP", "Betfair Starting Price"]

JUMPS_KEYWORDS = ["hurdle", "chase", "nh flat", "bumper", "novices", "national hunt"]
AW_SURFACES    = ["tapeta", "polytrack", "fibresand", "all weather"]

EXCLUDED_TRACKS = [
    "goodwood", "sandown", "fairyhouse", "killarney",
    "listowel", "musselburgh", "ffos las", "salisbury"
]

TRACK_RECORD_FILE = os.path.join(_home, "Downloads", "oddsfather_track_record.csv")
TRACK_RECORD_FIELDS = [
    "date", "model", "time", "course", "horse", "horse_id",
    "jockey", "trainer", "class", "distance", "going",
    "rpr_rank", "field_size", "tissue", "morning_price", "best_book",
    "gap_pct", "confidence", "confidence_band",
    "bfsp", "won", "place", "result_fetched"
]


# ── Helpers ────────────────────────────────────────────────────────────────────
def normalise(name):
    return re.sub(r'\s+', ' ', name.strip().lower())


def confidence_score(gap_pct, rpr_rank, best_price, field_size,
                     going_match, course_match,
                     going_category=None, cd_multiplier=1.0, draw_multiplier=1.0):
    pts = 0
    if gap_pct >= 35:   pts += 30
    elif gap_pct >= 20: pts += 15
    rank_pts = {1: 25, 2: 18, 3: 12, 4: 6, 5: 6}
    pts += rank_pts.get(rpr_rank, 0)
    if 5.0 <= best_price <= 9.0:                               pts += 20
    elif 3.0 <= best_price < 5.0 or 9.0 < best_price <= 12.0: pts += 10
    if 6 <= field_size <= 10:    pts += 15
    elif 11 <= field_size <= 14: pts += 8
    elif field_size <= 5:        pts += 5
    else:                        pts += 3
    if going_category == "proven":      pts += 10
    elif going_category == "untested":  pts += 5
    elif going_category == "poor":      pts += 0
    else:
        if going_match is True:   pts += 10
        elif going_match is None: pts += 5
    if cd_multiplier >= 1.04:    pts += 10
    elif cd_multiplier >= 1.02:  pts += 6
    elif cd_multiplier >= 1.015: pts += 3
    else:
        if course_match is True:   pts += 5
        elif course_match is None: pts += 2
    if draw_multiplier >= 1.06:   pts += 10
    elif draw_multiplier >= 1.03: pts += 5
    elif draw_multiplier <= 0.95: pts -= 5
    return min(100, max(0, round((pts / 140) * 100)))


def confidence_band(score):
    if score >= 70:   return "HIGH"
    elif score >= 40: return "MEDIUM"
    return "LOW"


# ── Load tissue ────────────────────────────────────────────────────────────────
def load_tissue(date_str, suffix):
    """Load tissue CSV for given suffix (flat or jumps)."""
    filename = os.path.join(TISSUE_DIR, f"tissue_{suffix}_{date_str}.csv")
    tissue_map = {}
    if not os.path.exists(filename):
        print(f"  WARNING: tissue_{suffix}_{date_str}.csv not found — skipping {suffix}")
        return {}
    with open(filename, "r") as f:
        reader = csv.DictReader(f)
        for row in reader:
            try:
                key = (
                    normalise(row["course"]),
                    row["time"].strip().replace(":", "").lstrip("0"),
                    normalise(row["horse"])
                )
                tissue = float(row["tissue"])
                try:
                    rpr = float(row.get("rpr") or row.get("or") or 0)
                except:
                    rpr = 0.0
                tissue_map[key] = {
                    "horse_id":        row.get("horse_id", ""),
                    "tissue":          tissue,
                    "prob_pct":        round(1.0/tissue*100, 4) if tissue > 0 else 0,
                    "rpr":             rpr,
                    "rpr_rank":        int(row["rpr_rank"]) if row.get("rpr_rank") else 99,
                    "field_size":      int(row.get("field_size", 0) or 0),
                    "jockey":          row.get("jockey", ""),
                    "trainer":         row.get("trainer", ""),
                    "class":           row.get("class", row.get("race_class", "")),
                    "distance":        row.get("distance", ""),
                    "going":           row.get("going", ""),
                    "headgear":        row.get("headgear", ""),
                    "going_category":  row.get("going_category", ""),
                    "cd_multiplier":   float(row.get("cd_multiplier", 1.0) or 1.0),
                    "draw_multiplier": float(row.get("draw_multiplier", 1.0) or 1.0),
                    "is_debutant":     row.get("is_debutant", "False") == "True",
                    "proxy_method":    row.get("proxy_method", ""),
                    "composite_score": float(row.get("composite_score") or tissue),
                    "trainer_pct_14":  row.get("trainer_pct_14", ""),
                }
            except Exception as e:
                continue
    print(f"  Loaded {len(tissue_map)} runners from tissue_{suffix}_{date_str}.csv")
    return tissue_map


# ── Racing API ─────────────────────────────────────────────────────────────────
class RacingAPI:
    BASE = "https://api.theracingapi.com/v1"

    def __init__(self, username, password):
        self.session = requests.Session()
        self.session.auth = (username, password)
        self.session.headers.update({
            "Content-Type": "application/json",
            "Accept": "application/json"
        })

    def get_live_prices(self):
        print("  [Racing API] Fetching live prices...")
        try:
            r = self.session.get(
                f"{self.BASE}/racecards/standard",
                params={"day": "today", "region_codes": ["gb", "ire"]},
                timeout=60
            )
            r.raise_for_status()
            data = r.json()
        except requests.exceptions.RequestException as e:
            print(f"  [Racing API] Error: {e}")
            return []
        if not data or "racecards" not in data:
            print("  [Racing API] No races found")
            return []
        races = []
        for race in data["racecards"]:
            runners = []
            for runner in race.get("runners", []):
                prices = []
                for entry in runner.get("odds", []):
                    if entry.get("bookmaker", "") in EXCLUDE_FROM_BEST:
                        continue
                    try:
                        p = float(entry.get("decimal", 0))
                        if p > 1.0:
                            prices.append((p, entry.get("bookmaker", "")))
                    except (ValueError, TypeError):
                        continue
                best = best_book = median = None
                if prices:
                    prices.sort(reverse=True)
                    best      = prices[0][0]
                    best_book = prices[0][1]
                    median    = float(np.median([p for p, _ in prices]))
                runners.append({
                    "horse":      runner.get("horse", ""),
                    "horse_id":   runner.get("horse_id", ""),
                    "best_price": best,
                    "best_book":  best_book,
                    "median":     median,
                })
            races.append({
                "course":    race.get("course", ""),
                "time":      race.get("off_time", ""),
                "going_live":race.get("going", ""),
                "type":      race.get("type", ""),
                "runners":   runners,
            })
        print(f"  [Racing API] {len(races)} races returned")
        return races

    def get_horse_form(self, horse_id, going, course):
        if not horse_id:
            return None, None
        try:
            r = self.session.get(
                f"{self.BASE}/horses/{horse_id}/results",
                params={"limit": 10},
                timeout=20
            )
            if r.status_code != 200:
                return None, None
            data = r.json()
            results = data.get("results", [])
            going_match = course_match = None
            for res in results:
                if going and res.get("going", "").lower() == going.lower():
                    going_match = True
                if course and res.get("course", "").lower() == course.lower():
                    course_match = True
            return going_match, course_match
        except:
            return None, None


# ── Market-anchored softmax ────────────────────────────────────────────────────
def market_anchored_rebalance(runners, tissue_map, temp=16.0, max_price=200.0):
    """
    For a single race, pin horses where market is much shorter than model tissue
    to their market probability, then reprice the whole field correctly.
    Anchor condition: market < tissue/3 AND market < 15.0

    Returns dict of normalised_horse_name -> (display_tissue, was_anchored)
    """
    horses = []
    for runner in runners:
        horse_n = normalise(runner.get("horse", ""))
        course  = normalise(runner.get("course", ""))
        time_s  = runner.get("time", "").strip().replace(":", "").lstrip("0")
        key = (course, time_s, horse_n)
        t = tissue_map.get(key)
        if not t or not t.get("tissue"):
            continue
        horses.append({
            "name":         horse_n,
            "composite":    float(t.get("composite_score") or t["tissue"]),
            "tissue":       float(t["tissue"]),
            "market_price": runner.get("best_price"),
        })

    if len(horses) < 2:
        return {}

    # Initial model softmax
    comps = np.array([h["composite"] for h in horses])
    comps_n = comps - comps.max()
    model_probs = np.exp(comps_n / temp)
    model_probs = model_probs / model_probs.sum()
    model_tissues = 1.0 / model_probs

    # Identify anchored horses
    anchored_idx, free_idx = [], []
    for i, h in enumerate(horses):
        mp = h.get("market_price") or 0
        mt = model_tissues[i]
        if mp and mp > 1.0 and mp < (mt / 3.0) and mp < 15.0:
            anchored_idx.append(i)
        else:
            free_idx.append(i)

    if not anchored_idx:
        # No anchoring — standard softmax with outsider cap
        probs = np.maximum(model_probs, 1.0/max_price)
        probs = probs / probs.sum()
        result = {}
        for i, h in enumerate(horses):
            t_adj = round(float(1.0/probs[i]), 2)
            mp = h.get("market_price") or 0
            if mp >= 67 and h["tissue"] < mp * 0.5: t_adj = min(t_adj, 67.0)
            elif mp >= 34 and h["tissue"] < mp * 0.5: t_adj = min(t_adj, 40.0)
            elif mp >= 21 and h["tissue"] < mp * 0.5: t_adj = min(t_adj, 25.0)
            result[h["name"]] = (t_adj, False)
        return result

    # Pin anchored horses to market probability
    final_probs = np.zeros(len(horses))
    anchored_total = 0.0
    for i in anchored_idx:
        mp = horses[i]["market_price"]
        p = 1.0 / mp
        final_probs[i] = p
        anchored_total += p

    # Remaining probability for free horses
    remaining = max(0.05, 1.0 - anchored_total)
    if free_idx:
        free_comps = np.array([horses[i]["composite"] for i in free_idx])
        free_comps = free_comps - free_comps.max()
        free_exps = np.exp(free_comps / temp)
        free_probs = (free_exps / free_exps.sum()) * remaining
        for j, i in enumerate(free_idx):
            final_probs[i] = free_probs[j]

    # Floor and renormalise
    final_probs = np.maximum(final_probs, 1.0/max_price)
    final_probs = final_probs / final_probs.sum()

    result = {}
    for i, h in enumerate(horses):
        t_adj = round(float(1.0/final_probs[i]), 2)
        was_anchored = i in anchored_idx
        if not was_anchored:
            mp = h.get("market_price") or 0
            if mp >= 67 and t_adj > 67.0: t_adj = 67.0
            elif mp >= 34 and t_adj > 40.0: t_adj = 40.0
            elif mp >= 21 and t_adj > 25.0: t_adj = 25.0
        result[h["name"]] = (t_adj, was_anchored)
    return result


# ── Find overlays ──────────────────────────────────────────────────────────────
def find_overlays(races, tissue_map, api, is_jumps=False):
    flags = []
    skipped_type = skipped_tissue = skipped_price = 0
    skipped_rank = skipped_gap = skipped_cold = skipped_field = 0
    total_matched = total_flags = 0

    for race in races:
        race_type = race.get("type", "").lower()
        course    = race.get("course", "").lower()

        if course in EXCLUDED_TRACKS:
            continue

        # Route to correct model
        is_jumps_race = any(k in race_type for k in JUMPS_KEYWORDS)
        is_aw         = any(s in race_type for s in AW_SURFACES)

        if is_jumps and not is_jumps_race:
            skipped_type += 1; continue
        if not is_jumps and (is_jumps_race or is_aw):
            skipped_type += 1; continue

        for runner in race.get("runners", []):
            best      = runner.get("best_price")
            best_book = runner.get("best_book", "")
            median    = runner.get("median")
            if not best:
                continue

            horse_name = normalise(runner.get("horse", ""))
            time_str   = race.get("time", "").strip().replace(":", "").lstrip("0")
            key = (normalise(race["course"]), time_str, horse_name)
            t = tissue_map.get(key)
            if not t:
                continue

            total_matched += 1
            tissue = t["tissue"]

            if tissue > MAX_TISSUE_PRICE:
                skipped_tissue += 1; continue
            if t.get("is_debutant", False):
                skipped_tissue += 1; continue

            # Cold trainer filter
            if EXCLUDE_COLD_TRAINERS:
                tpct = t.get("trainer_pct_14")
                try:
                    if tpct is not None and tpct != "" and float(tpct) < MIN_TRAINER_PCT:
                        skipped_cold += 1; continue
                except: pass

            if best > MAX_PRICE or best < MIN_PRICE:
                skipped_price += 1; continue
            if t["field_size"] > MAX_FIELD_SIZE:
                skipped_field += 1; continue
            if t["rpr_rank"] < MIN_RPR_RANK or t["rpr_rank"] > MAX_RPR_RANK:
                skipped_rank += 1; continue

            gap_raw = round((best / tissue - 1) * 100, 1)
            in_band = any(lo <= gap_raw <= hi for lo, hi in GAP_BANDS)
            if not in_band:
                skipped_gap += 1; continue

            total_flags += 1
            going_category  = t.get("going_category", "")
            cd_multiplier   = t.get("cd_multiplier", 1.0)
            draw_multiplier = t.get("draw_multiplier", 1.0)

            if going_category:
                going_match  = going_category == "proven"
                course_match = cd_multiplier >= 1.02
            else:
                going_match, course_match = api.get_horse_form(
                    t.get("horse_id", ""), race.get("going_live", t["going"]), race["course"])
                time.sleep(0.3)

            score = confidence_score(
                gap_pct=gap_raw, rpr_rank=t["rpr_rank"], best_price=best,
                field_size=t["field_size"], going_match=going_match,
                course_match=course_match, going_category=going_category,
                cd_multiplier=cd_multiplier, draw_multiplier=draw_multiplier,
            )
            band = confidence_band(score)
            rank_suffix = {1:"st",2:"nd",3:"rd"}.get(t["rpr_rank"], "th")
            flags.append({
                "time": race["time"], "course": race["course"],
                "horse": runner["horse"], "horse_id": t.get("horse_id", ""),
                "jockey": t["jockey"], "trainer": t["trainer"],
                "class": t["class"], "distance": t["distance"],
                "going": race.get("going_live", t["going"]),
                "headgear": t["headgear"], "rpr": t["rpr"],
                "rpr_rank": t["rpr_rank"], "rpr_suffix": rank_suffix,
                "field_size": t["field_size"], "tissue": tissue,
                "best_price": round(best, 2), "best_book": best_book,
                "median": round(median, 2) if median else "?",
                "gap_pct": gap_raw, "going_category": going_category,
                "going_match": going_match, "cd_multiplier": cd_multiplier,
                "draw_multiplier": draw_multiplier, "course_match": course_match,
                "is_debutant": t.get("is_debutant", False),
                "confidence": score, "confidence_band": band,
                "model": "jumps" if is_jumps else "flat",
            })

    label = "JUMPS" if is_jumps else "FLAT"
    print(f"\n  --- {label} SUMMARY ---")
    print(f"  Matched:     {total_matched}  |  Flags: {total_flags}")
    print(f"  Skipped — type:{skipped_type}  tissue:{skipped_tissue}  "
          f"cold:{skipped_cold}  field:{skipped_field}  "
          f"price:{skipped_price}  rank:{skipped_rank}  gap:{skipped_gap}")
    return flags


# ── Save flags ─────────────────────────────────────────────────────────────────
def save_flags(flags, report_date):
    if not flags:
        print("  No flags to save.")
        return
    filename = os.path.join(TISSUE_DIR, f"flags_{report_date}.csv")
    fields = [
        "time", "course", "horse", "horse_id", "jockey", "trainer",
        "class", "distance", "going", "headgear",
        "rpr", "rpr_rank", "field_size", "model",
        "tissue", "median", "best_price", "best_book", "gap_pct",
        "going_category", "going_match", "cd_multiplier", "draw_multiplier",
        "course_match", "is_debutant", "confidence", "confidence_band"
    ]
    with open(filename, "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        writer.writeheader()
        writer.writerows(flags)
    print(f"  Flags saved -> {filename}")
    log_to_track_record(flags, report_date)


# ── Track record ───────────────────────────────────────────────────────────────
def log_to_track_record(flags, report_date):
    file_exists = os.path.exists(TRACK_RECORD_FILE)
    with open(TRACK_RECORD_FILE, "a", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=TRACK_RECORD_FIELDS, extrasaction="ignore")
        if not file_exists:
            writer.writeheader()
        for flag in flags:
            writer.writerow({
                "date":            report_date,
                "model":           flag.get("model", "flat"),
                "time":            flag["time"],
                "course":          flag["course"],
                "horse":           flag["horse"],
                "horse_id":        flag.get("horse_id", ""),
                "jockey":          flag.get("jockey", ""),
                "trainer":         flag.get("trainer", ""),
                "class":           flag.get("class", ""),
                "distance":        flag.get("distance", ""),
                "going":           flag.get("going", ""),
                "rpr_rank":        flag.get("rpr_rank", ""),
                "field_size":      flag.get("field_size", ""),
                "tissue":          flag.get("tissue", ""),
                "morning_price":   flag.get("best_price", ""),
                "best_book":       flag.get("best_book", ""),
                "gap_pct":         flag.get("gap_pct", ""),
                "confidence":      flag.get("confidence", ""),
                "confidence_band": flag.get("confidence_band", ""),
                "bfsp": "", "won": "", "place": "", "result_fetched": "N",
            })
    print(f"  Track record updated -> {TRACK_RECORD_FILE}")


# ── Display tissue CSV ─────────────────────────────────────────────────────────
def save_display_tissue(races, tissue_flat, tissue_jumps, report_date):
    """
    Generate tissue_display_{date}.csv with market-anchored prices.
    Combines flat and jumps into one file for website upload.
    For each race, anchors horses where market << model to market probability,
    then reprices the whole field correctly.
    """
    filename = os.path.join(TISSUE_DIR, f"tissue_display_{report_date}.csv")
    fields = [
        "date", "time", "course", "class", "distance", "going",
        "horse_id", "horse", "jockey", "trainer",
        "rpr", "rpr_rank", "field_size", "headgear",
        "tissue", "tissue_raw", "prob_pct", "morning_price", "best_book",
        "going_category", "cd_multiplier", "draw_multiplier",
        "tissue_confidence", "is_debutant", "proxy_method",
        "composite_score", "market_adjusted", "model"
    ]

    rows = []
    processed_races = 0
    total_anchored = 0

    for race in races:
        race_type = race.get("type", "").lower()
        is_jumps_race = any(k in race_type for k in JUMPS_KEYWORDS)
        tissue_map = tissue_jumps if is_jumps_race else tissue_flat

        if not tissue_map:
            continue

        # Inject course/time into runners for lookup
        for runner in race.get("runners", []):
            runner["course"] = race.get("course", "")
            runner["time"]   = race.get("time", "")

        # Market-anchored rebalance for whole race
        adjusted_map = market_anchored_rebalance(race.get("runners", []), tissue_map)
        if not adjusted_map:
            continue

        processed_races += 1
        for runner in race.get("runners", []):
            horse_n = normalise(runner.get("horse", ""))
            course  = normalise(race.get("course", ""))
            time_s  = race.get("time", "").strip().replace(":", "").lstrip("0")
            key = (course, time_s, horse_n)
            t = tissue_map.get(key)
            if not t or not t.get("tissue"):
                continue

            raw_tissue   = float(t["tissue"])
            market_price = runner.get("best_price")
            adj = adjusted_map.get(horse_n)
            if adj:
                display_tissue, was_anchored = adj
                if was_anchored:
                    total_anchored += 1
            else:
                display_tissue, was_anchored = raw_tissue, False

            rows.append({
                "date":             report_date,
                "time":             race.get("time", ""),
                "course":           race.get("course", ""),
                "class":            t.get("class", ""),
                "distance":         t.get("distance", ""),
                "going":            race.get("going_live", t.get("going", "")),
                "horse_id":         t.get("horse_id", ""),
                "horse":            runner.get("horse", ""),
                "jockey":           t.get("jockey", ""),
                "trainer":          t.get("trainer", ""),
                "rpr":              t.get("rpr", ""),
                "rpr_rank":         t.get("rpr_rank", ""),
                "field_size":       t.get("field_size", ""),
                "headgear":         t.get("headgear", ""),
                "tissue":           round(display_tissue, 2),
                "tissue_raw":       round(raw_tissue, 2),
                "prob_pct":         round(1.0/display_tissue*100, 2) if display_tissue else "",
                "morning_price":    round(market_price, 2) if market_price else "",
                "best_book":        runner.get("best_book", ""),
                "going_category":   t.get("going_category", ""),
                "cd_multiplier":    t.get("cd_multiplier", ""),
                "draw_multiplier":  t.get("draw_multiplier", ""),
                "tissue_confidence":"MEDIUM",
                "is_debutant":      t.get("is_debutant", False),
                "proxy_method":     t.get("proxy_method", ""),
                "composite_score":  t.get("composite_score", ""),
                "market_adjusted":  "Y" if was_anchored else "N",
                "model":            "jumps" if is_jumps_race else "flat",
            })

    if not rows:
        print("  No display tissue rows to save.")
        return

    with open(filename, "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        writer.writeheader()
        writer.writerows(rows)

    print(f"\n  Display tissue saved -> {filename}")
    print(f"  {len(rows)} runners across {processed_races} races")
    print(f"  {total_anchored} horses market-anchored")


# ── Main ───────────────────────────────────────────────────────────────────────
def main():
    report_date = datetime.now().strftime("%Y-%m-%d")
    print("=" * 75)
    print("  MORNING FLAGS — FLAT + JUMPS")
    print(f"  Date: {report_date}")
    print("=" * 75)

    # Load both tissue files
    print("\n[1/4] Loading tissue files...")
    tissue_flat  = load_tissue(report_date, "flat")
    tissue_jumps = load_tissue(report_date, "jumps")

    if not tissue_flat and not tissue_jumps:
        print("  ERROR: No tissue files found. Run evening_tissue_v4.py first.")
        return

    # Pull live prices once
    print("\n[2/4] Pulling live bookmaker prices...")
    api   = RacingAPI(RACING_API_USERNAME, RACING_API_PASSWORD)
    races = api.get_live_prices()
    if not races:
        print("  ERROR: No races returned from API.")
        return

    # Find overlays for flat and jumps
    print("\n[3/4] Finding overlays...")
    flat_flags  = find_overlays(races, tissue_flat,  api, is_jumps=False) if tissue_flat  else []
    jumps_flags = find_overlays(races, tissue_jumps, api, is_jumps=True)  if tissue_jumps else []
    all_flags   = flat_flags + jumps_flags

    # Best per race
    seen_races = {}
    for flag in all_flags:
        race_key = (flag["course"], flag["time"])
        if race_key not in seen_races or flag["gap_pct"] > seen_races[race_key]["gap_pct"]:
            seen_races[race_key] = flag
    best_flags = sorted(seen_races.values(), key=lambda x: x["confidence"], reverse=True)

    print(f"\n  {len(flat_flags)} flat flags + {len(jumps_flags)} jumps flags")
    print(f"  {len(best_flags)} after best-per-race filter")

    # Save
    print("\n[4/4] Saving...")
    save_flags(best_flags, report_date)
    save_display_tissue(races, tissue_flat, tissue_jumps, report_date)

    print(f"\n{'='*75}")
    print(f"  Done. Upload tissue_display_{report_date}.csv to the website.")
    print(f"{'='*75}")


if __name__ == "__main__":
    main()