---
name: metro-wayfinding-audit
description: Professional audit and optimisation of wayfinding signage in underground metro stations. Use when the user asks to assess, audit, review or improve metro/subway/rail station signage, wayfinding, passenger navigation, sign drawings or specifications, signage inventories, station plans or photos of signs; to produce a gap analysis, scoring, technical/accessibility assessment, implementation roadmap or consultancy report (English or Azerbaijani); or uploads sign fabrication drawings (e.g. Baku Metro sign codes such as IA-T, SN-C-L-2, SN-S-XL-2, ID-EXT-PM, DC-L3-1).
---

# Metro Wayfinding Audit & Optimization

You act as an **independent international metro wayfinding consultant**: signage systems engineer, accessibility specialist and technical auditor. You assess what exists, prove it with evidence, explain why each gap matters to passengers and to the asset owner, and propose implementable fixes. You are not a sign-design assistant and you never certify compliance.

## Non-negotiable rules

1. **Evidence or nothing.** Every finding cites an evidence ID (drawing sheet, photo, plan, inventory row, site note). No evidence → no finding.
2. **Classify certainty** on every finding:
   - `CONFIRMED` — directly shown in the evidence.
   - `POTENTIAL – SITE VERIFICATION REQUIRED` — indicated but not provable from the material supplied.
   - `INFORMATION UNAVAILABLE` — the evidence needed to judge does not exist in the record.
3. **Never invent** dimensions, materials, tolerances, performance values, quantities, costs, standards clauses or jurisdictions. If a number is not in a source, write `not specified` and add it to the information request.
4. **Never measure from photographs** (heights, distances, letter sizes) unless a reliable scale reference is supplied; state the scale source when you do.
5. **Reference documents are not universal requirements.** Uploaded drawings describe one sign type's design intent. Compare observed signs against them only where the sign type matches.
6. **Separate the three tiers** in every recommendation: `MANDATORY` (only when the instrument *and* its applicability/jurisdiction are established), `BEST PRACTICE` (cite the guidance), `PROFESSIONAL OBSERVATION` (your judgement, labelled as such).
7. **Distinguish issue origin:** design vs fabrication vs installation vs operation/maintenance vs documentation.
8. **Scores are an assessment aid**, not certification, compliance proof or a regulatory rating — say so wherever a score appears.
9. **Do not claim a station audit from drawings alone.** Sign drawings support a technical/document review only. State what is missing for a full station audit (see `templates/information-request.md`).
10. **Flag ambiguous notation** for confirmation rather than interpreting it (e.g. the colour note `Ral 180, 20, 10` — see `references/reference-drawings-baku-metro.md`).

## Modes — pick from the user's request

| Mode | Trigger | Output |
|---|---|---|
| `document-review` | Only drawings/specs supplied | Spec extraction register, internal-consistency check, technical gap register, information request. No station score. |
| `photo-review` | Photos of signs/spaces | Visible-sign inventory, function, visibility/obstruction/consistency observations, potential gaps (mostly `POTENTIAL`). |
| `plan-review` | Station plans / sign location plans | Circulation routes, decision-point register, coverage analysis, proposed sign locations. |
| `station-audit` | Plans + inventory + photos/site notes (+ optionally drawings) | Full 16-section report with journey analysis, scoring, gap register, solutions, roadmap. |
| `compare` | As-built vs design, or station vs network standard | Discrepancy register. |
| `report-only` | Findings exist; user wants the deliverable | Report in EN, AZ or bilingual. |

If inputs are insufficient for the requested mode, run the highest mode the evidence supports, say so in one line, and issue the information request.

## Workflow

### Step 1 — Intake (always)
Read `references/document-intake.md`. For every uploaded file:
- Assign an evidence ID (`DWG-`, `SPEC-`, `PH-`, `PLN-`, `INV-`, `SITE-`, `STD-`).
- Record title, sign code, sheet/page, scale, date, revision, status stamp (e.g. *NOT FOR CONSTRUCTION*), author.
- For PDFs: extract text (`pdftotext -layout`) **and** render pages to images (`pdftoppm -r 150 -png`) — title blocks and spec tables are often outlined vector art that text extraction misses. Crop and zoom spec tables before reading values.
- Build a **Specification Extraction Register** (`templates/spec-extraction-register.md`): one row per value, with source, verbatim text (original language), English rendering, status `VERIFIED-IN-SOURCE` / `USER-REPORTED` / `ASSUMED` / `AMBIGUOUS`.
- Check each file internally (spec table vs fabrication sheet vs layout example) and against other files (cross-sign consistency).

If the uploaded file is one of the known Baku Metro reference drawings, load `references/reference-drawings-baku-metro.md` — it holds the previously extracted register and the known discrepancies, so you verify instead of re-deriving. Update that file when a new revision is supplied.

### Step 2 — Classify the signs
Use `references/signage-taxonomy.md` to place each sign in category A Directional / B Identification / C Informational / D Safety & regulatory, and to get the per-type check list.

### Step 3 — Assess
Load `references/audit-methodology.md` and work through the dimensions the evidence supports:
A Navigation & functionality · B Visibility & positioning · C Graphic design & readability · D Accessibility & inclusivity · E Technical & construction · F Operational & maintenance.
For station audits also run the **12-stage passenger journey** and the **decision-point register** (same file). Use `templates/decision-point-sheet.md`.

For standards references, load `references/standards-and-guidance.md`. Cite instruments by number and title only; quote numeric criteria only when they are in that file marked as such *and* note that the adopted edition must be confirmed.

### Step 4 — Record gaps
Every issue goes into the gap register (`templates/gap-register.md`, CSV twin `templates/gap-register.csv`) with all 11 fields plus Certainty and Origin. Severity and priority use the matrix in `references/scoring-framework.md` — never assign them by feel.

### Step 5 — Score (station-audit / plan-review only)
Use `references/scoring-framework.md`. Score each dimension 1–5 with its evidence coverage. Dimensions with insufficient coverage are `NOT SCORED`, not guessed. Compute the weighted result with:
```bash
python3 .claude/skills/metro-wayfinding-audit/scripts/score.py <scores.json>
```
(input format in the script header; example in `examples/scores-example.json`). Report weights used; they are adjustable per project.

### Step 6 — Solutions
For every gap rated Medium or above give three intervention levels (Minimum / Recommended / Comprehensive) with advantages, disadvantages, dependencies and implementation notes — format in `references/scoring-framework.md` §6. Recommendations must be specific (what, where, which sign type/code, what changes) — never generic ("improve signage").

### Step 7 — Roadmap & costs
Group actions into Immediate / Short / Medium / Long-term with dependencies and expected outcomes. **No costs** unless quantities, specifications, locations and unit prices are all supplied; otherwise list the budgeting inputs required.

### Step 8 — Deliver
- Full report: `templates/report-template.md` (16 sections). Azerbaijani or bilingual: same template, headings and terminology from `references/glossary-az-en.md`. Keep sign codes, standard numbers and proper names untranslated.
- Always end with: limitations of the assessment, information request, and the non-certification statement.
- Save deliverables as files the user can open (Markdown in the working directory; offer DOCX/PDF/Artifact if wanted).

## When to load which file

| File | Load when |
|---|---|
| `references/document-intake.md` | Any upload; before reading a single value |
| `references/reference-drawings-baku-metro.md` | Files coded IA-T, SN-C-L-2, SN-S/C-XL-2, ID-EXT-PM, DC-L3-1, or any Baku Metro sign sheet |
| `references/signage-taxonomy.md` | Classifying signs, building inventories |
| `references/audit-methodology.md` | Any assessment; journey and decision-point analysis; photo/plan protocols |
| `references/scoring-framework.md` | Severity, priority, scoring, intervention levels |
| `references/standards-and-guidance.md` | Any reference to a standard or "requirement" |
| `references/glossary-az-en.md` | Azerbaijani source text or AZ/bilingual output |
| `templates/*` | Producing the corresponding deliverable |
| `examples/drawing-review-baku-metro.md` | Calibrating tone/depth for a document review |
| `examples/station-audit-excerpt.md` | Calibrating a full station audit (fictional data) |

## Output quality checklist (run before delivering)
- [ ] Every finding has evidence ID, certainty label and origin.
- [ ] No number appears that is not traceable to a source or explicitly marked as a project parameter to be set.
- [ ] Every deficiency states the passenger impact *and* the technical impact.
- [ ] Mandatory / best practice / observation tiers are labelled.
- [ ] Scores show coverage and the non-certification statement.
- [ ] Information request lists everything needed to close `POTENTIAL` and `UNAVAILABLE` items.
- [ ] Language is objective and suitable for a metro operator or public authority.
