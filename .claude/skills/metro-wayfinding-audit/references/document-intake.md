# Document Intake & Evidence Handling

Purpose: turn every uploaded file into traceable evidence before any judgement is made.

## 1. Evidence IDs

| Prefix | Evidence type | Example |
|---|---|---|
| `DWG-` | Fabrication / design drawing sheet | `DWG-IA-T-02` (sign code + sheet) |
| `SPEC-` | Written specification, datasheet, BoQ | `SPEC-LED-01` |
| `PLN-` | Architectural plan, section, sign location plan | `PLN-B04-CONC-01` |
| `PH-` | Photograph | `PH-014` (+ location, date, direction of view) |
| `INV-` | Signage inventory row | `INV-B04-0123` |
| `SITE-` | Site observation / survey note | `SITE-2026-11-20-07` |
| `STD-` | Standard / guideline / client design manual | `STD-ISO21542` |
| `USR-` | Information stated by the user but not backed by a document | `USR-01` |

Values only reported in the chat (e.g. a spec summary for a file that was not uploaded) are `USR-` evidence with status `USER-REPORTED` until the source file is supplied.

## 2. Processing by file type

### PDF drawings and specifications
1. `pdfinfo` → page count, page size (A3/A2 etc.).
2. `pdftotext -layout file.pdf -` → captures annotation labels; **often misses** spec tables, title blocks and dimensions that are outlined vector art.
3. `pdftoppm -r 150 -png file.pdf out/prefix` → render every page; crop spec tables / title blocks at 200 dpi and read them visually.
4. Record per sheet: title, sign code, sheet descriptor, size, scale, date, author, revision, status stamp, language.
5. Extract every value into the Specification Extraction Register **verbatim** (keep original Azerbaijani/English), then an English rendering.
6. Cross-check within the document: spec table ↔ dimensioned views ↔ fabrication/exploded sheet ↔ layout example ↔ title. Record each conflict as a discrepancy.
7. Note what a complete fabrication package would normally contain and is absent (see §5).

### Photographs
- Record: location, level, direction of view, date/time if known, lighting condition, crowd condition.
- Identify each visible sign, its apparent function and category.
- Assess: visibility from the camera position, obstructions (columns, beams, equipment, advertising, crowds), glare/reflections, illumination state, damage, graphic consistency, missing directional information at visible decision points.
- **Do not** state heights, distances, letter sizes or angles unless a known dimension in frame provides scale (state which). Use relative language: "appears to be partially obscured by…".
- A single photo rarely proves absence of a sign — absence findings from photos are `POTENTIAL` unless the photo set covers the full decision point.

### Station plans / sections / sign location plans
- Confirm scale bar or dimension strings before scaling anything.
- Trace routes: entrance → concourse → fare line → vertical circulation → platform → train direction; transfers; exits → street.
- Mark decision points (DP-xx) wherever a passenger chooses between ≥2 routes.
- Overlay sign locations (from plan or inventory); identify uncovered DPs and sign sequences with breaks.

### Signage inventories (XLSX/CSV)
- Normalise to the inventory fields in `signage-taxonomy.md` §3.
- Check for duplicate IDs, missing locations, sign types not in the drawing set, inconsistent messages.

### Standards / client manuals
- Record instrument number, edition/year, jurisdiction and whether it is contractually adopted for the project. Without adoption evidence it is `BEST PRACTICE`, not `MANDATORY`.

## 3. Value status labels

| Status | Meaning |
|---|---|
| `VERIFIED-IN-SOURCE` | Read directly from an uploaded document (cite sheet) |
| `USER-REPORTED` | Stated by the user; source not supplied |
| `AMBIGUOUS` | Present in source but notation/meaning unclear — needs confirmation |
| `CONFLICTING` | Two sources give different values — list both |
| `NOT SPECIFIED` | Expected but absent |
| `ASSUMED` | Used only for a clearly labelled scenario; never in findings |

## 4. Document control checks
- Status stamp (e.g. *NOT FOR CONSTRUCTION*, *EXAMPLE ONLY*): design-intent documents cannot prove as-built condition.
- Revision index present? Two sheets of the same sign with different values and no revision marker = document-control finding.
- Sign code consistency between file name, sheet title and title block.
- Sheet titles that classify wayfinding as advertising (e.g. "REKLAM LÖVHƏSİ") — note procurement/approval classification risk; confirm intent.

## 5. Completeness checklist for a sign fabrication package
Mark each item Present / Partial / Absent:
- Overall and component dimensions, tolerances
- Materials with grades/thickness; fire reaction class of each non-metallic material (critical underground)
- Finishes: paint system, colour reference in unambiguous notation (system + code), gloss level
- Graphic production method, typeface, letter/cap heights, arrow and pictogram artwork source, colour values
- Face luminance (cd/m²) and uniformity for illuminated signs; LED module count, layout, driver type & location, total load
- Enclosure IP rating (distinct from LED module IP), electrical class, earthing, cable route, emergency power status
- Fixings: anchor type, size, quantity, embedment, substrate, load verification; secondary retention for overhead signs
- Structural/wind/vibration/seismic verification where relevant
- Access for maintenance: how faces open, how LEDs/drivers are replaced, how content is updated
- Installation tolerances, setting-out, coordination with ceilings/cladding/services
- Revision history and approval signatures

## 6. Confirm before interpreting
Typical ambiguities to raise, never resolve silently:
- Colour notations without system name (RAL Classic 4-digit vs RAL Design `HHH LL CC`).
- "Organic glass" (*orqanik şüşə*) — usually PMMA/acrylic, while spec tables may say "acrylic/polycarbonate".
- Module performance data (lm/W, IP, TM-21) presented as if it were the whole sign's performance.
- Template text carried over between sign types (e.g. "arrows backlit" on a sign with no arrows).
- Typographical errors in labels that change meaning (e.g. *Asthma tavan* → *Asma tavan*, suspended ceiling).
