# Scoring, Severity, Priority & Intervention Framework

> Scores are a structured professional assessment aid. They are **not** regulatory certification, compliance proof or a safety rating.

## 1. Rating scale (all dimensions)

| Score | Label | General descriptor |
|---|---|---|
| 5 | Excellent | Meets or exceeds best practice consistently; no deficiencies above Low |
| 4 | Good | Works reliably; isolated Low/Medium issues |
| 3 | Acceptable – requires improvement | Generally usable; recurring Medium or isolated High issues |
| 2 | Poor | Frequent failures; multiple High issues or one Critical |
| 1 | Very poor | System fails passengers; multiple Critical issues |
| NS | Not scored | Evidence coverage insufficient |

### Dimension anchors (examples for 1 / 3 / 5)
| Dimension | 1 | 3 | 5 |
|---|---|---|---|
| A Navigation | Multiple primary DPs unresolved; contradictory directions | Primary DPs resolved, secondary gaps; some discontinuities | All DPs resolved with advance + confirmation signs; continuous journeys |
| B Visibility | Key signs obstructed or invisible from approach | Most visible; some obstructions/ad competition | Clear sightlines, appropriate mounting throughout |
| C Graphics | Inconsistent typography/arrows; poor contrast | Consistent family, some density/contrast issues | Coherent system, clear hierarchy, consistent bilingual layout |
| D Accessibility | No step-free signage; misleading accessibility symbols | Step-free route signed with gaps; partial tactile provision | End-to-end accessible information across all personas |
| E Technical | Safety-relevant fixing/electrical/fire issues | Sound but incomplete specifications or minor defects | Fully specified, verified, robust installation |
| F Operations | Widespread outages/damage; no update process | Maintainable with effort; some outdated content | Modular, easy replacement, managed content, monitored lighting |

## 2. Evidence coverage
Each score carries a coverage tag: **Full** (verified on site/as-built) · **Partial** (desk-based, plans + photos) · **Insufficient** → `NS`.
A dimension with Insufficient coverage is excluded from the weighted total and the remaining weights are re-normalised; the report must state this.

## 3. Weights (default — adjustable per project; always report the set used)

| Dimension | Default weight |
|---|---|
| A Navigation & functionality | 25 % |
| B Visibility & positioning | 20 % |
| C Graphic design & readability | 15 % |
| D Accessibility & inclusivity | 15 % |
| E Technical & construction | 15 % |
| F Operational & maintenance | 10 % |

Weighted score = Σ(score × weight) / Σ(weights of scored dimensions).

**Critical cap (default ON):** if any `CONFIRMED` Critical deficiency is open, the overall result is reported as *capped at 2.0* regardless of the arithmetic, and the uncapped value is shown alongside. Overall bands: ≥4.5 Excellent · 3.5–4.49 Good · 2.5–3.49 Acceptable/requires improvement · 1.5–2.49 Poor · <1.5 Very poor.

Use `scripts/score.py` to compute and to keep the arithmetic auditable.

## 4. Severity

| Severity | Definition |
|---|---|
| **Critical** | Safety or life-safety risk (falling object, electrical hazard, misleading/absent emergency route information, fire-performance unknown for large quantities underground), or a navigation failure on a primary flow that cannot be resolved by passengers |
| **High** | Significant navigation failure, accessibility barrier, or technical defect affecting function/durability across multiple signs |
| **Medium** | Degrades efficiency/comfort/consistency; workaround exists |
| **Low** | Cosmetic, editorial or minor consistency issue |

Documentation gaps are rated by the **worst plausible consequence that cannot be ruled out** (e.g. unknown fire class of acrylic/PVC used throughout underground stations → High until verified), and labelled `INFORMATION UNAVAILABLE` — never `CONFIRMED`.

## 5. Priority (derived from severity × certainty)

| | CONFIRMED | POTENTIAL | INFO UNAVAILABLE |
|---|---|---|---|
| Critical | Immediate | Immediate (verify) | Immediate (obtain info) |
| High | Short-term | Short-term (verify) | Short-term (obtain info) |
| Medium | Medium-term | Medium-term | Medium-term |
| Low | Long-term | Long-term | Long-term |

Definitions: **Immediate** — safety-critical or serious navigation failure; act/verify now. **Short-term** — high-impact functional corrections. **Medium-term** — standardisation and design improvements. **Long-term** — system upgrades and modernisation.
Time horizons (e.g. 0–1 month, 1–6, 6–18, >18) are project parameters agreed with the client — not defaults to state as fact.

## 6. Intervention levels (for each gap ≥ Medium)

```
GAP-xx — <title>
1. Minimum intervention — <cost-effective correction>
   + Advantages  − Disadvantages  ⚙ Implementation (dependencies, access, possessions, approvals)
2. Recommended intervention — <optimal functional solution>
   + / − / ⚙
3. Comprehensive intervention — <full improvement or redesign>
   + / − / ⚙
Recommended choice and rationale: …
Budgeting inputs required: quantities, unit rates, access method, … (no cost figures unless supplied)
```
