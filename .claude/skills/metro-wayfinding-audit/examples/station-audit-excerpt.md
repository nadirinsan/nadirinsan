# Example Station Audit Excerpt — "Station X" (FICTIONAL)

> **All data in this file is invented to illustrate format, depth and tone.** It describes no real station. Do not cite it as evidence.

Assessment type: desk-based station audit (plans + inventory + photos; no site survey) · Coverage: Partial

## 6. Passenger Journey Assessment (extract)

| Stage | Required signage | Existing signage | Missing information | Potential confusion | Recommended intervention | Evidence |
|---|---|---|---|---|---|---|
| 7 Reaching the platform | Platform/direction sign at foot of escalator ES-2 (DP-07) | Wall sign W-14 on left wall, parallel to flow | Direction (terminus) names not visible on approach | Passengers stop at escalator foot to look around; conflicts with alighting flow | Add ceiling directional (DC-L3-1 type) perpendicular to flow before DP-07 | PLN-X-02, PH-031, PH-032, INV-X-0114 |
| 11 Exiting | Exit numbers + street names from platform to street | Exits ①② on platform name sign; absent at concourse split DP-03 | Exit ③ not signed at DP-03 | Passengers for Exit ③ follow ①② flow and backtrack | Add exit directional at DP-03 with all four exits; confirmation at stair head | PLN-X-01, PH-012, INV-X-0042 |

## Decision-point extract

| DP | Location | Choices | Advance | DP sign | Confirmation | Result | GAP |
|---|---|---|---|---|---|---|---|
| DP-03 | Concourse, gridline C/4 | Exits ①②, ③, ④ | none | INV-X-0042 (①② only) | none | Unresolved | GAP-X-004 |
| DP-07 | Foot of ES-2 | Platforms 1 / 2 | none | W-14 (parallel to flow) | P-1 platform sign | Partial | GAP-X-009 |

## Gap register extract

| Field | GAP-X-004 |
|---|---|
| Location | Concourse level, DP-03, gridline C/4 |
| Sign type | A5 Exit directional (ceiling) |
| Existing condition | Ceiling sign INV-X-0042 shows "← ① ② Çıxış Exit" only |
| Identified gap | Exit ③ (step-free exit with lift L-2) not signed at the split |
| Passenger impact | Wheelchair users and passengers with luggage are led towards stair-only exits ①②; backtracking against flow |
| Technical impact | Existing sign can be re-faced if the face is openable (see GAP-009 in drawing review); otherwise replacement |
| Severity | High — unresolved primary DP affecting step-free route |
| Certainty | CONFIRMED (plan + photo PH-012 covers DP from both approaches) |
| Origin | Design (message schedule) |
| Evidence | PLN-X-01, PH-012, PH-013, INV-X-0042 |
| Basis | BEST PRACTICE — continuous step-free route information (ISO 21542, edition to be confirmed); PROFESSIONAL OBSERVATION for placement |
| Recommended solution | Re-face INV-X-0042 to show ①② and ③ (with lift pictogram) and add confirmation sign at corridor entrance to Exit ③ |
| Priority | Short-term |
| To close | Confirm face is openable; confirm L-2 serves street level |

## 15. Overall assessment (extract)

Computed with `scripts/score.py examples/scores-example.json`:

| Dim | Weight | Score | Coverage |
|---|---|---|---|
| A Navigation | 25 | 2 | Partial |
| B Visibility | 20 | 3 | Partial |
| C Graphics | 15 | 4 | Partial |
| D Accessibility | 15 | 2 | Partial |
| E Technical | 15 | 3 | Partial |
| F Operations | 10 | NS | Insufficient |

Weighted score on scored dimensions (base 90): **2.72 — Acceptable, requires improvement**. One confirmed Critical deficiency is open (GAP-X-001, emergency exit sign obscured by advertising lightbox at DP-02), so the overall result is **reported as capped at 2.0 — Poor** until it is closed. Dimension F was not scored: no maintenance records or site inspection were available.

*Assessment aid only — not regulatory certification or proof of compliance.*
