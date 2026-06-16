"""
backtest.py — Backtester for the Horse Racing Tissue Model
===========================================================
Loops over a date range, fetches historical racecards from the Racing API,
runs the composite tissue model (imported from evening_tissue_v4.py — NOT
copy-pasted), fetches historical results, matches runners, and outputs a
per-runner CSV with summary statistics.

Usage:
    python backtest.py --start 2026-01-01 --end 2026-06-15 --mode both
    python backtest.py --start 2026-05-01 --end 2026-06-15 --mode flat
"""

import os, re, csv, time, math, sys, argparse, logging
import requests
import numpy as np
from datetime import datetime, date, timedelta

# ── Import tissue model (DO NOT copy-paste — import to keep logic identical) ───
from evening_tissue_v4 import (
    generate_composite_tissue,
    parse_form,
    get_temp,
    JUMPS_TEMPS,
    FLAT_TEMPS,
    HIGH_CLASS_FLAT_TEMPS,
    HIGH_CLASS_IDENTIFIERS,
    MIN_RPR,
    MIN_FIELD,
)

# ── Config ─────────────────────────────────────────────────────────────────────
API_USER = "JVTsmaCzSGIk4V9cA3JCGtTc"
API_PW   = "JQa1A0ng1HDO9wfei5DA1CCC"
BASE_URL = "https://api.theracingapi.com/v1"
AUTH     = (API_USER, API_PW)

REQUEST_TIMEOUT = 30   # seconds
SLEEP_BETWEEN   = 0.5  # seconds between API calls

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s  %(levelname)s  %(message)s",
    datefmt="%H:%M:%S",
)
log = logging.getLogger("backtest")


# ── API helpers ────────────────────────────────────────────────────────────────

def api_get(url, params=None):
    """Single GET with one retry on timeout/failure."""
    for attempt in (1, 2):
        try:
            r = requests.get(url, params=params, auth=AUTH, timeout=REQUEST_TIMEOUT)
            if r.status_code == 200:
                return r.json()
            log.warning(f"  HTTP {r.status_code} on {url} (params={params})")
        except requests.exceptions.Timeout:
            log.warning(f"  Timeout on attempt {attempt}: {url}")
        except Exception as e:
            log.warning(f"  Error on attempt {attempt}: {e}")
        if attempt == 1:
            time.sleep(1.0)
    return None


# ── Racecard parsing (mirrors evening_tissue_v4.run_tissue) ───────────────────

def fetch_racecards(date_str, mode):
    """
    Fetch pro racecards for date_str. Return (jumps_races, flat_races).
    Each race is a dict with 'runners' list matching the schema expected by
    generate_composite_tissue().
    Returns (None, None) on fetch failure.
    """
    data = api_get(f"{BASE_URL}/racecards/pro", params={"date": date_str})
    time.sleep(SLEEP_BETWEEN)
    if not data:
        return None, None

    cards = data.get("racecards", [])
    # GB / IRE only
    cards = [c for c in cards if c.get("region") in ("GB", "IRE")]

    jumps_races = []
    flat_races  = []

    for card in cards:
        rcode = card.get("type", "")
        # No All Weather
        if rcode == "All Weather":
            continue

        course     = card.get("course", "")
        race_class = card.get("race_class", "")
        going      = card.get("going", "")
        distance_f = float(card.get("distance_f", 0) or 0)
        is_jumps   = rcode in ("Chase", "Hurdle", "NH Flat", "National Hunt")

        # Mode filter
        if mode == "flat" and is_jumps:
            continue
        if mode == "jumps" and not is_jumps:
            continue

        race_name   = card.get("race_name", "")
        is_handicap = ("handicap" in race_name.lower() or
                       "h'cap" in race_name.lower())

        runners = []
        for r in card.get("runners", []):
            try:
                rpr_raw = r.get("rpr") or r.get("ofr") or 0
                rpr = int(rpr_raw) if rpr_raw else None
            except Exception:
                rpr = None
            if rpr and rpr < MIN_RPR:
                rpr = None

            try:
                t14 = r.get("trainer_14_days", {}) or {}
                trainer_sr = int(t14.get("percent", 10) or 10) / 100
            except Exception:
                trainer_sr = 0.10

            wins, places, runs = parse_form(r.get("form", ""))

            try:
                lbs = int(r.get("lbs") or 0)
            except Exception:
                lbs = 0
            try:
                ofr = int(r.get("ofr") or 0)
            except Exception:
                ofr = 0
            try:
                ts = int(r.get("ts") or 0)
            except Exception:
                ts = 0
            try:
                last_run = int(r.get("last_run") or 30)
            except Exception:
                last_run = 30
            try:
                age = int(r.get("age") or 0)
            except Exception:
                age = 0
            try:
                perf_rating = int(r.get("performance_rating") or 0)
            except Exception:
                perf_rating = 0

            runners.append({
                "horse_id":    r.get("horse_id", ""),
                "horse":       r.get("horse", ""),
                "jockey":      r.get("jockey", ""),
                "jockey_id":   r.get("jockey_id", ""),
                "trainer":     r.get("trainer", ""),
                "trainer_id":  r.get("trainer_id", ""),
                "trainer_sr":  trainer_sr,
                "rpr":         rpr,
                "perf_rating": perf_rating,
                "ofr":         ofr,
                "lbs":         lbs,
                "ts":          ts,
                "age":         age,
                "form":        r.get("form", ""),
                "form_wins":   wins,
                "form_places": places,
                "form_runs":   runs,
                "headgear":    r.get("headgear", ""),
                "draw":        r.get("draw", ""),
                "is_debutant": rpr is None,
                "last_run_days": last_run,
                # defaults
                "tissue": None, "prob_pct": None, "rpr_rank": None,
                "field_size": None, "composite_score": None,
                "trainer_course_ae": 1.0, "jockey_course_ae": 1.0,
                "form_factor": 1.0, "freshness_factor": 1.0,
                "class_factor": 1.0, "trainer_ae_factor": 1.0,
                "jockey_ae_factor": 1.0,
            })

        if len(runners) >= MIN_FIELD:
            race = {
                "course":       course,
                "class":        race_class,
                "going":        going,
                "distance":     distance_f,
                "time":         card.get("off_time", ""),
                "race_name":    race_name,
                "is_handicap":  is_handicap,
                "race_type":    rcode,
                "runners":      runners,
                "date":         date_str,
            }
            if is_jumps:
                jumps_races.append(race)
            else:
                flat_races.append(race)

    return jumps_races, flat_races


# ── Results fetching ───────────────────────────────────────────────────────────

def fetch_results(date_str):
    """
    Fetch historical results for a single date.
    Returns a dict keyed by (course_norm, horse_norm) -> result_dict with keys:
        position (int), bsp (float|None), horse_id (str)
    Also stores by horse_id for secondary matching.
    """
    data = api_get(
        f"{BASE_URL}/results",
        params={
            "start_date": date_str,
            "end_date":   date_str,
            "region":     ["gb", "ire"],
        },
    )
    time.sleep(SLEEP_BETWEEN)
    if not data:
        return {}, {}

    by_name   = {}  # (course_norm, horse_norm) -> result_dict
    by_id     = {}  # horse_id -> result_dict

    for race in data.get("results", []):
        course_norm = _norm(race.get("course", ""))
        for runner in race.get("runners", []):
            horse_norm = _norm(runner.get("horse", ""))
            try:
                pos = int(runner.get("position") or 0)
            except Exception:
                pos = 0
            try:
                bsp_raw = runner.get("bsp")
                bsp = float(bsp_raw) if bsp_raw not in (None, "", "N/A") else None
            except Exception:
                bsp = None

            result = {
                "position": pos,
                "bsp":      bsp,
                "horse_id": runner.get("horse_id", ""),
                "horse":    runner.get("horse", ""),
                "course":   race.get("course", ""),
            }
            key = (course_norm, horse_norm)
            by_name[key]   = result
            h_id = runner.get("horse_id", "")
            if h_id:
                by_id[h_id] = result

    return by_name, by_id


def _norm(name):
    """Normalise for matching: lowercase, collapse whitespace, strip."""
    return re.sub(r"\s+", " ", str(name).strip().lower())


def lookup_result(runner, course, results_by_name, results_by_id):
    """
    Try horse_id first, then (course, horse_name).
    Returns (position, bsp) or (0, None).
    """
    h_id = runner.get("horse_id", "")
    if h_id and h_id in results_by_id:
        r = results_by_id[h_id]
        return r["position"], r["bsp"]

    key = (_norm(course), _norm(runner.get("horse", "")))
    if key in results_by_name:
        r = results_by_name[key]
        return r["position"], r["bsp"]

    return 0, None


# ── Race-type classification ───────────────────────────────────────────────────

def classify_race_type(race):
    """
    Map race to one of: Group1, Group2, Group3, Listed, Handicap, Conditions, NH
    """
    rc = str(race.get("class", "")).lower()
    rn = str(race.get("race_name", "")).lower()
    rt = str(race.get("race_type", "")).lower()

    if "group 1" in rc or "g1" in rc or "group 1" in rn:
        return "Group1"
    if "group 2" in rc or "g2" in rc or "group 2" in rn:
        return "Group2"
    if "group 3" in rc or "g3" in rc or "group 3" in rn:
        return "Group3"
    if "listed" in rc or "listed" in rn:
        return "Listed"
    if race.get("is_handicap"):
        return "Handicap"
    if rt in ("chase", "hurdle", "nh flat", "national hunt"):
        return "NH"
    return "Conditions"


def field_size_bucket(n):
    if n < 8:
        return "<8"
    elif n <= 12:
        return "8-12"
    elif n <= 16:
        return "13-16"
    else:
        return "17+"


TISSUE_BUCKETS = [
    (1.0,  2.0,  "1-2"),
    (2.0,  3.0,  "2-3"),
    (3.0,  5.0,  "3-5"),
    (5.0,  8.0,  "5-8"),
    (8.0,  13.0, "8-13"),
    (13.0, 20.0, "13-20"),
    (20.0, 9999, "20+"),
]

def tissue_bucket(tissue):
    for lo, hi, label in TISSUE_BUCKETS:
        if lo <= tissue < hi:
            return label
    return "20+"


# ── Core backtest loop ─────────────────────────────────────────────────────────

def run_backtest(start_str, end_str, mode, output_dir="."):
    start_dt = datetime.strptime(start_str, "%Y-%m-%d").date()
    end_dt   = datetime.strptime(end_str,   "%Y-%m-%d").date()

    log.info("=" * 70)
    log.info(f"  BACKTEST  {start_str} -> {end_str}  mode={mode}")
    log.info("=" * 70)

    all_rows    = []
    skipped_dates = []

    cur = start_dt
    while cur <= end_dt:
        date_str = cur.strftime("%Y-%m-%d")
        log.info(f"\n── {date_str} ─────────────────────────────")

        # 1. Fetch racecards
        jumps_races, flat_races = fetch_racecards(date_str, mode)
        if jumps_races is None and flat_races is None:
            log.warning(f"  SKIP {date_str}: racecard fetch failed")
            skipped_dates.append(date_str)
            cur += timedelta(days=1)
            continue

        # 2. Fetch results
        results_by_name, results_by_id = fetch_results(date_str)
        if not results_by_name and not results_by_id:
            log.warning(f"  No results for {date_str} — positions will be 0")

        # 3. Run tissue model on each race set, collect rows
        if mode in ("both", "jumps") and jumps_races:
            rows = _process_races(jumps_races, "jumps", JUMPS_TEMPS,
                                  date_str, results_by_name, results_by_id)
            all_rows.extend(rows)

        if mode in ("both", "flat") and flat_races:
            rows = _process_races(flat_races, "flat", FLAT_TEMPS,
                                  date_str, results_by_name, results_by_id)
            all_rows.extend(rows)

        cur += timedelta(days=1)

    # 4. Write CSV
    csv_name = os.path.join(
        output_dir,
        f"backtest_results_{start_str}_{end_str}.csv"
    )
    _write_csv(all_rows, csv_name)

    # 5. Summary statistics
    summary = _compute_summary(all_rows)
    summary_path = os.path.join(output_dir, "backtest_summary.txt")
    _print_and_save_summary(summary, summary_path, start_str, end_str,
                            mode, skipped_dates)

    log.info(f"\n  CSV  -> {csv_name}")
    log.info(f"  Summary -> {summary_path}")
    if skipped_dates:
        log.warning(f"  Skipped {len(skipped_dates)} dates: {skipped_dates}")
    return all_rows


def _process_races(races, model_type, temps, date_str,
                   results_by_name, results_by_id):
    """
    Run generate_composite_tissue on each race, match results, return rows.
    """
    rows = []
    for race in races:
        course     = race["course"]
        race_class = race.get("class", "")
        is_handicap = race.get("is_handicap", False)

        # Choose temperature table (mirrors evening_tissue_v4.process_and_save)
        is_high_class = any(
            i in str(race_class).lower() for i in HIGH_CLASS_IDENTIFIERS
        )
        effective_temps = (
            HIGH_CLASS_FLAT_TEMPS
            if (is_high_class and model_type == "flat")
            else temps
        )

        # IMPORTANT: generate_composite_tissue mutates and returns runners
        race["runners"] = generate_composite_tissue(
            race["runners"],
            course,
            effective_temps,
            is_jumps=(model_type == "jumps"),
            race_class=race_class,
            is_handicap=is_handicap,
        )

        field_size  = len(race["runners"])
        race_type   = classify_race_type(race)

        for runner in race["runners"]:
            tissue = runner.get("tissue")
            # Only include runners that received a tissue price
            if not tissue or tissue == "":
                continue
            try:
                tissue = float(tissue)
            except Exception:
                continue

            # Match result
            position, bsp = lookup_result(
                runner, course, results_by_name, results_by_id
            )

            won    = 1 if position == 1 else 0
            placed = 1 if (position > 0 and position <= 3) else 0

            # Overlay calculations (BSP-based, only if BSP available)
            gap_pct_vs_bsp    = ""
            was_overlay_20pct = ""
            was_overlay_35pct = ""
            if bsp is not None and bsp > 0 and tissue > 0:
                gap_pct_vs_bsp    = round((bsp / tissue - 1) * 100, 2)
                was_overlay_20pct = 1 if gap_pct_vs_bsp >= 20 else 0
                was_overlay_35pct = 1 if gap_pct_vs_bsp >= 35 else 0

            rows.append({
                "date":               date_str,
                "time":               race.get("time", ""),
                "course":             course,
                "class":              race_class,
                "distance":           race.get("distance", ""),
                "going":              race.get("going", ""),
                "race_type":          race_type,
                "horse_id":           runner.get("horse_id", ""),
                "horse":              runner.get("horse", ""),
                "jockey":             runner.get("jockey", ""),
                "trainer":            runner.get("trainer", ""),
                "rpr":                runner.get("rpr", ""),
                "rpr_rank":           runner.get("rpr_rank", ""),
                "field_size":         field_size,
                "tissue":             tissue,
                "prob_pct":           runner.get("prob_pct", ""),
                "composite_score":    runner.get("composite_score", ""),
                "position":           position,
                "bsp":                bsp if bsp is not None else "",
                "won":                won,
                "placed":             placed,
                "gap_pct_vs_bsp":     gap_pct_vs_bsp,
                "was_overlay_20pct":  was_overlay_20pct,
                "was_overlay_35pct":  was_overlay_35pct,
                "model_type":         model_type,
            })

    return rows


# ── CSV output ─────────────────────────────────────────────────────────────────

CSV_FIELDS = [
    "date", "time", "course", "class", "distance", "going", "race_type",
    "horse_id", "horse", "jockey", "trainer",
    "rpr", "rpr_rank", "field_size",
    "tissue", "prob_pct", "composite_score",
    "position", "bsp", "won", "placed",
    "gap_pct_vs_bsp", "was_overlay_20pct", "was_overlay_35pct",
    "model_type",
]

def _write_csv(rows, path):
    with open(path, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=CSV_FIELDS, extrasaction="ignore")
        w.writeheader()
        w.writerows(rows)
    log.info(f"  Wrote {len(rows)} rows -> {path}")


# ── Summary statistics ─────────────────────────────────────────────────────────

def _compute_summary(rows):
    """
    Returns a nested dict:
      summary["overall"] = stats_dict
      summary["by_race_type"][rt] = stats_dict
      summary["by_field_bucket"][b] = stats_dict
    """
    return {
        "overall":        _stats(rows),
        "by_race_type":   _group_stats(rows, "race_type"),
        "by_field_bucket": _group_stats(rows, "_field_bucket"),
    }


def _field_bucket_key(row):
    try:
        return field_size_bucket(int(row["field_size"]))
    except Exception:
        return "?"


def _group_stats(rows, field):
    groups = {}
    for row in rows:
        if field == "_field_bucket":
            key = _field_bucket_key(row)
        else:
            key = row.get(field, "?")
        groups.setdefault(key, []).append(row)
    return {k: _stats(v) for k, v in sorted(groups.items())}


def _stats(rows):
    """Compute stats dict for a list of row dicts."""
    if not rows:
        return {}

    n_runners = len(rows)

    # Unique races by (date, course, time)
    races = set((r["date"], r["course"], r["time"]) for r in rows)
    n_races = len(races)

    # Calibration by tissue bucket
    calib = {label: {"n": 0, "wins": 0} for _, _, label in TISSUE_BUCKETS}
    for row in rows:
        try:
            t = float(row["tissue"])
        except Exception:
            continue
        b = tissue_bucket(t)
        calib[b]["n"] += 1
        calib[b]["wins"] += int(row.get("won", 0))

    # Overlay ROI (only rows where BSP is available)
    bsp_rows = [r for r in rows if r.get("bsp") not in ("", None)]

    def roi_at(threshold_field):
        bets = [r for r in bsp_rows if r.get(threshold_field) == 1]
        if not bets:
            return None, 0
        returns = sum(
            float(r["bsp"]) if r["won"] == 1 else 0.0
            for r in bets
        )
        roi = (returns - len(bets)) / len(bets) * 100
        return round(roi, 2), len(bets)

    roi_20, n_20 = roi_at("was_overlay_20pct")
    roi_35, n_35 = roi_at("was_overlay_35pct")

    # Critical error rate: abs(tissue - bsp) / bsp > 2.0
    critical_errs = 0
    for r in bsp_rows:
        try:
            t = float(r["tissue"])
            b = float(r["bsp"])
            if b > 0 and abs(t - b) / b > 2.0:
                critical_errs += 1
        except Exception:
            pass
    crit_rate = round(critical_errs / len(bsp_rows) * 100, 2) if bsp_rows else None

    # Mean log-loss: mean(log(1/tissue) - log(1/bsp)) per runner
    log_losses = []
    for r in bsp_rows:
        try:
            t = float(r["tissue"])
            b = float(r["bsp"])
            if t > 0 and b > 0:
                log_losses.append(math.log(1.0 / t) - math.log(1.0 / b))
        except Exception:
            pass
    mean_log_loss = round(float(np.mean(log_losses)), 4) if log_losses else None

    return {
        "n_runners":      n_runners,
        "n_races":        n_races,
        "n_bsp_rows":     len(bsp_rows),
        "calib":          calib,
        "roi_20pct":      roi_20,
        "n_bets_20pct":   n_20,
        "roi_35pct":      roi_35,
        "n_bets_35pct":   n_35,
        "critical_err_rate": crit_rate,
        "mean_log_loss":  mean_log_loss,
    }


def _format_stats(stats, indent=""):
    lines = []
    n  = stats.get("n_runners", 0)
    nr = stats.get("n_races", 0)
    nb = stats.get("n_bsp_rows", 0)
    lines.append(f"{indent}Runners priced : {n}")
    lines.append(f"{indent}Races          : {nr}")
    lines.append(f"{indent}Rows with BSP  : {nb}")

    lines.append(f"")
    lines.append(f"{indent}Calibration (tissue bucket vs actual win rate):")
    lines.append(f"{indent}  {'Bucket':<8}  {'N':>5}  {'Wins':>5}  {'WinRate%':>9}  {'ImpliedWin%':>12}")
    for lo, hi, label in TISSUE_BUCKETS:
        c = stats.get("calib", {}).get(label, {"n": 0, "wins": 0})
        n_b = c["n"]
        w_b = c["wins"]
        win_rate = round(w_b / n_b * 100, 1) if n_b else 0.0
        mid = (lo + hi) / 2 if hi < 9999 else lo * 1.5
        implied  = round(1.0 / mid * 100, 1)
        lines.append(
            f"{indent}  {label:<8}  {n_b:>5}  {w_b:>5}  {win_rate:>8.1f}%  {implied:>11.1f}%"
        )

    lines.append("")
    lines.append(f"{indent}Overlay ROI (to BSP):")
    roi_20 = stats.get("roi_20pct")
    n_20   = stats.get("n_bets_20pct", 0)
    roi_35 = stats.get("roi_35pct")
    n_35   = stats.get("n_bets_35pct", 0)
    lines.append(
        f"{indent}  20%+ gap: {roi_20:+.2f}% ROI  ({n_20} bets)"
        if roi_20 is not None else f"{indent}  20%+ gap: N/A (no qualifying bets)"
    )
    lines.append(
        f"{indent}  35%+ gap: {roi_35:+.2f}% ROI  ({n_35} bets)"
        if roi_35 is not None else f"{indent}  35%+ gap: N/A (no qualifying bets)"
    )

    lines.append("")
    ce = stats.get("critical_err_rate")
    ll = stats.get("mean_log_loss")
    lines.append(
        f"{indent}Critical error rate  (|tissue-bsp|/bsp > 2): "
        f"{ce:.2f}%" if ce is not None else f"{indent}Critical error rate: N/A"
    )
    lines.append(
        f"{indent}Mean log-loss  (log(1/tissue) - log(1/bsp)): "
        f"{ll:+.4f}" if ll is not None else f"{indent}Mean log-loss: N/A"
    )
    return lines


def _print_and_save_summary(summary, path, start_str, end_str,
                            mode, skipped_dates):
    lines = []
    lines.append("=" * 75)
    lines.append(f"  BACKTEST SUMMARY  {start_str} -> {end_str}  mode={mode}")
    lines.append("=" * 75)

    if skipped_dates:
        lines.append(f"\nSkipped dates ({len(skipped_dates)}):")
        for d in skipped_dates:
            lines.append(f"  {d}")

    lines.append("\n── OVERALL ──────────────────────────────────────────────────────────")
    lines.extend(_format_stats(summary["overall"], "  "))

    lines.append("\n── BY RACE TYPE ─────────────────────────────────────────────────────")
    for rt, st in summary["by_race_type"].items():
        lines.append(f"\n  {rt}")
        lines.extend(_format_stats(st, "    "))

    lines.append("\n── BY FIELD SIZE BUCKET ─────────────────────────────────────────────")
    for b, st in summary["by_field_bucket"].items():
        lines.append(f"\n  Field size {b}")
        lines.extend(_format_stats(st, "    "))

    text = "\n".join(lines)
    print(text)

    with open(path, "w", encoding="utf-8") as f:
        f.write(text + "\n")
    log.info(f"  Summary saved -> {path}")


# ── CLI ────────────────────────────────────────────────────────────────────────

def main():
    p = argparse.ArgumentParser(
        description="Backtest the horse racing tissue model over a date range."
    )
    p.add_argument("--start", required=True,
                   help="Start date YYYY-MM-DD (inclusive)")
    p.add_argument("--end",   required=True,
                   help="End date YYYY-MM-DD (inclusive)")
    p.add_argument("--mode",  choices=["both", "flat", "jumps"], default="both",
                   help="Which model to run (default: both)")
    p.add_argument("--output-dir", default=".",
                   help="Directory for CSV and summary output (default: cwd)")
    args = p.parse_args()

    os.makedirs(args.output_dir, exist_ok=True)

    run_backtest(
        start_str  = args.start,
        end_str    = args.end,
        mode       = args.mode,
        output_dir = args.output_dir,
    )


if __name__ == "__main__":
    main()
