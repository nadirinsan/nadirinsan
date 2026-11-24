#!/usr/bin/env python3
"""Weighted wayfinding assessment score calculator.

Usage:  python3 score.py scores.json [--no-cap] [--md]

Input JSON:
{
  "station": "Example Station",
  "weights": {"A": 25, "B": 20, "C": 15, "D": 15, "E": 15, "F": 10},   # optional, defaults below
  "dimensions": {
    "A": {"score": 3, "coverage": "Partial"},     # score 1-5, or null -> not scored
    "E": {"score": null, "coverage": "Insufficient"}
  },
  "open_confirmed_critical": 1,                    # count of CONFIRMED Critical gaps still open
  "cap_value": 2.0                                 # optional, default 2.0
}

Dimensions with coverage "Insufficient" or score null are excluded and the
remaining weights re-normalised. Output is an assessment aid, not certification.
"""
import json
import sys

NAMES = {
    "A": "Navigation & functionality",
    "B": "Visibility & positioning",
    "C": "Graphic design & readability",
    "D": "Accessibility & inclusivity",
    "E": "Technical & construction",
    "F": "Operational & maintenance",
}
DEFAULT_WEIGHTS = {"A": 25, "B": 20, "C": 15, "D": 15, "E": 15, "F": 10}
BANDS = [(4.5, "Excellent"), (3.5, "Good"), (2.5, "Acceptable - requires improvement"),
         (1.5, "Poor"), (0.0, "Very poor")]


def band(x):
    for lo, name in BANDS:
        if x >= lo:
            return name
    return "Very poor"


def compute(data, apply_cap=True):
    weights = {**DEFAULT_WEIGHTS, **data.get("weights", {})}
    dims = data.get("dimensions", {})
    rows, num, den = [], 0.0, 0.0
    for k in NAMES:
        d = dims.get(k, {})
        s, cov = d.get("score"), d.get("coverage", "Insufficient")
        if s is not None and not (1 <= s <= 5):
            raise ValueError(f"Dimension {k}: score must be 1-5 or null, got {s}")
        scored = s is not None and cov != "Insufficient"
        if scored:
            num += s * weights[k]
            den += weights[k]
        rows.append((k, NAMES[k], weights[k], s if scored else "NS", cov))
    if den == 0:
        return rows, None, None, False
    raw = round(num / den, 2)
    capped = False
    final = raw
    cap_value = data.get("cap_value", 2.0)
    if apply_cap and data.get("open_confirmed_critical", 0) > 0 and raw > cap_value:
        final, capped = cap_value, True
    return rows, raw, final, capped


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    if not args:
        print(__doc__)
        sys.exit(1)
    with open(args[0], encoding="utf-8") as f:
        data = json.load(f)
    rows, raw, final, capped = compute(data, apply_cap="--no-cap" not in sys.argv)
    print(f"Station: {data.get('station', '-')}")
    print("| Dim | Dimension | Weight | Score | Coverage |")
    print("|---|---|---|---|---|")
    for r in rows:
        print(f"| {r[0]} | {r[1]} | {r[2]} | {r[3]} | {r[4]} |")
    if raw is None:
        print("\nOverall: NOT SCORED - no dimension has sufficient evidence coverage.")
    else:
        scored_w = sum(r[2] for r in rows if r[3] != "NS")
        print(f"\nWeighted score (scored dimensions, weight base {scored_w}): {raw} - {band(raw)}")
        if capped:
            print(f"Critical cap applied: reported overall {final} - {band(final)} "
                  f"({data.get('open_confirmed_critical')} confirmed Critical gap(s) open)")
        excluded = [r[0] for r in rows if r[3] == "NS"]
        if excluded:
            print(f"Not scored (insufficient evidence): {', '.join(excluded)}")
    print("\nNote: assessment aid only - not regulatory certification or proof of compliance.")


if __name__ == "__main__":
    main()
