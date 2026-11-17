# Worked Test — Document Review of Baku Metro Sign Drawings

**Mode:** `document-review` · **Evidence cut-off:** 2026-11-16 · **Language:** EN (AZ source terms quoted)

> **Status of this assessment.** This is a review of design-intent documents for four sign types. It is **not** a station audit: the drawings show no station, no sign locations and no passenger routes. No station score is given. Ratings are an assessment aid and not certification or proof of compliance.

## 1. What was supplied vs what was expected

| Expected in brief | Received | Consequence |
|---|---|---|
| DC-L3-1.pdf (illuminated ceiling directional) | **Not received** | Only user-reported values (USR-01). No directional-sign findings can be made. |
| IA-T.pdf | Received (2 pp) | Reviewed |
| — | ID-EXT-PM_3.pdf (4 pp) | Reviewed (additional) |
| — | SN-C-L-2.pdf (2 pp) | Reviewed (additional) |
| — | SN-C-XL-2.pdf (6 pp) | Reviewed (additional) |

Note: the brief summarised IA-T as "3 mm aluminium sheet … UV printing with protective lacquer". That is correct for the **fabrication sheet (p2)**, but the **specification table (p1)** of the same file says "2mm Thick Aluminium Plate" and "printed vinyl". The skill records both and flags the conflict rather than picking one.

## 2. Evidence index

| ID | File / page | Content |
|---|---|---|
| DWG-IAT-01 | IA-T.pdf p1 | Spec table, views, layout example (A3, 1:20, 2026-08-04, NOT FOR CONSTRUCTION) |
| DWG-IAT-02 | IA-T.pdf p2 | Exploded fabrication sheet (AZ labels) |
| DWG-SNL-01 | SN-C-L-2.pdf p1 | Spec table, views (A3, 1:10, 2026-08-04) |
| DWG-SNL-02 | SN-C-L-2.pdf p2 | Fabrication / ceiling fixing sheet |
| DWG-SNXL-01…05 | SN-C-XL-2.pdf p1–5 | Spec, illumination detail, exploded and mounting views, beam/illumination detail (A2, 1:10, 2026-11-04) |
| DWG-SNXL-06 | SN-C-XL-2.pdf p6 | "E KATEQORİYASI" fabrication sheet |
| DWG-IDEXT-01 | ID-EXT-PM_3.pdf p1 | Spec, 3D, layout (A3, 1:10, 2026-08-04) |
| DWG-IDEXT-02 | ID-EXT-PM_3.pdf p2 | Alt_ID-EXT-PM façade mounting (1:50) |
| DWG-IDEXT-03 / -04 | ID-EXT-PM_3.pdf p3 / p4 | Two versions of the fabrication sheet |
| USR-01 | Brief text | DC-L3-1 values (source not supplied) |

Processing note: `pdftotext` captured only the Azerbaijani annotation labels; every spec table, title block and dimension was outlined vector art and had to be read from rendered pages. This is why the intake procedure requires rendering.

The full extracted register is in `references/reference-drawings-baku-metro.md`.

## 3. Sign classification

| Code | Category | Sub-type | Notes |
|---|---|---|---|
| IA-T | C Informational | C4 Information totem | Floor-standing, non-illuminated, 3×A3 + 3×A4 poster layout (example) |
| SN-C-L-2 | B Identification | B1 Station name, ceiling-suspended, 2-sided | Illuminated |
| SN-S-XL-2 | B Identification + A Directional | B1 + A5 exit directions | Spans between columns, exit numbers + street names, illuminated arrows |
| ID-EXT-PM | B Identification | B3 Exterior entrance ID, pole/façade | Outdoor, illuminated, line code M3, entrance number, accessibility pictogram |
| DC-L3-1 | A Directional | A1 Ceiling directional | Not received |

## 4. Positive observations (professional observation)
- Coherent sign family across types: common colour, R20/R22 radii, 100 mm depth, common LED module and fixing approach — a good basis for network standardisation.
- Bilingual AZ/EN messaging with Azerbaijani first; exit numbers paired with street names on SN-S-XL-2 — supports stage 11–12 of the journey.
- Line identity uses code + colour (M3 badge), not colour alone — colour-blind-safe principle.
- Overhead signs specified at 2300 mm to underside; totem foot reaches the floor (cane-detectable footprint) — to be verified against the adopted headroom/protrusion criteria.
- SN-S-XL-2 explicitly requires that internal beams never block illuminated zones (DWG-SNXL-05) and that wiring is not visible.
- ID-EXT-PM provides drainage holes (DWG-IDEXT-03) and an alternative façade mounting where municipal permits fail (DWG-IDEXT-02).

## 5. Gap register (document level)

Severity follows the scoring framework; documentation gaps are rated by the worst consequence that cannot yet be ruled out.

| ID | Sign | Identified gap | Passenger impact | Technical impact | Sev. | Certainty | Origin | Evidence | Priority |
|---|---|---|---|---|---|---|---|---|---|
| GAP-001 | All | No reaction-to-fire classification for acrylic/polycarbonate, PVC "dekota", vinyl, lacquer or paint | In a fire, burning or dripping plastics and smoke from many signs could affect escape routes underground | Material may be unacceptable for underground use; possible re-specification of every sign type | High | INFO UNAVAILABLE | Documentation | DWG-*-01 spec tables; DWG-IDEXT-03 | Short-term (obtain info) |
| GAP-002 | SN-C-L-2 | Overhead suspended sign: one 10×120 anchor per tube shown; anchor type, embedment, load verification and **secondary retention** not specified; vibration/piston-effect/seismic criteria absent | Falling-object risk above passengers if a fixing fails | Fixing design unverified; retrofitting safety cables later costs more | High | INFO UNAVAILABLE | Design / Documentation | DWG-SNL-01, -02 | Short-term (obtain info) |
| GAP-003 | SN-S-XL-2 | Span between columns, final pole section ("approx. 50 mm… definitive sizing with supplier") and bracket/cladding interface not defined | As GAP-002 for a 29 kg sign over the platform/concourse | Structural adequacy cannot be checked; cladding damage | High | INFO UNAVAILABLE | Design | DWG-SNXL-01, -06 | Short-term |
| GAP-004 | ID-EXT-PM | Outdoor illuminated sign: pole diameter, foundation, wind design, enclosure IP, UV resistance, earthing/electrical protection not specified ("sufficiently anchored … applicable safety standards") | Public-realm safety (pedestrian area) | Corrosion, water ingress, electrical risk, UV yellowing | High | INFO UNAVAILABLE | Design | DWG-IDEXT-01, -03 | Short-term |
| GAP-005 | All illuminated | LED data is module-level (178 lm/W, IP67, TM-21 >60,000 h); module variant, count, driver, total load, **face luminance and uniformity**, TM-21 Lxx basis not stated | Uneven or over-/under-bright faces reduce legibility; competition with advertising lightboxes cannot be controlled | Power, heat and maintenance cannot be planned; IP67 module ≠ IP-rated enclosure | Medium | INFO UNAVAILABLE | Documentation | Module panels on DWG-SNL-02, -SNXL-06, -IDEXT-03 | Medium-term |
| GAP-006 | IA-T, SN-C-L-2, SN-S-XL-2 | Frame/sheet thickness 2 mm (spec table) vs 3 mm (fabrication sheet) | None directly | Procurement ambiguity; weight/stiffness differences; dispute risk at acceptance | Medium | CONFIRMED (conflict) | Documentation | DWG-IAT-01/02, SNL-01/02, SNXL-01/06 | Medium-term |
| GAP-007 | All | Face: "Acrylic/Polycarbonate with printed vinyl" vs "4 mm organic glass + UV print + protective lacquer"; finish: "Powder coated/painted" vs "matte automotive paint" | Print method affects durability/legibility over time | Different products; inspection/acceptance criteria unclear | Medium | CONFIRMED (conflict) | Documentation | as GAP-006 | Medium-term |
| GAP-008 | All | Colour "Ral 180, 20, 10" without colour system; gloss level of "matte" undefined | Inconsistent colour across suppliers weakens the visual system; uncontrolled gloss causes glare | Colour mismatch at procurement | Medium | AMBIGUOUS | Documentation | all fabrication sheets | Medium-term |
| GAP-009 | All illuminated + IA-T | Graphic layer applied after face screws fastened; screw heads filled and smoothed — **no documented way to open the face** for LED/driver replacement or content change | Failed illumination / outdated information stays in service longer | Faces may need destructive removal; IA-T poster fields (3×A3, 3×A4) imply changeable content but no insert mechanism | High | POTENTIAL – CONFIRM WITH DESIGNER | Design | DWG-IAT-02, SNL-02, SNXL-06, IDEXT-03 | Short-term |
| GAP-010 | SN-S-XL-2 | 2-sided sign with left/right exit arrows; reverse face not drawn. Mirrored geometry requires exits ①② and ③④ to swap sides and arrows to reverse | If copied, the reverse face would send passengers the wrong way — a wrong-direction exit sign | Artwork error at production | **Critical** | POTENTIAL – VERIFY ARTWORK | Design | DWG-SNXL-01, -02 | Immediate (verify) |
| GAP-011 | ID-EXT-PM | Example layout pairs wheelchair symbol with "walking down stairs" pictogram for Entrance 1 | Wheelchair users may be sent to an entrance with stairs only | Symbol policy must be tied to verified step-free status per entrance | High | POTENTIAL – SITE VERIFICATION | Design (content) | DWG-IDEXT-01, -03 | Short-term |
| GAP-012 | ID-EXT-PM | Mounting height 2300 mm (pole) vs 2500 mm (alternative façade) | Inconsistent sightline/visibility between entrances | Network standard unclear | Low | CONFIRMED (conflict) | Documentation | DWG-IDEXT-01, -02 | Long-term |
| GAP-013 | ID-EXT-PM | Two fabrication sheets: caps 3 mm vs 2 mm; "Mat" omitted; drainage-hole label missing on p4; no revision marker | None directly | Wrong version may be fabricated; loss of drainage in outdoor box | Medium | CONFIRMED (conflict) | Documentation | DWG-IDEXT-03, -04 | Medium-term |
| GAP-014 | SN-XL-2 | Sign code SN-C-XL-2 (file/sheet title) vs SN-S-XL-2 (title block); sheet 6 titled "E KATEQORİYASI" without definition | None directly | Inventory/ordering errors | Low | CONFIRMED (conflict) | Documentation | DWG-SNXL-01…06 | Long-term |
| GAP-015 | SN-C-L-2 | Lighting zones "Arrows, Station Name" on a sign with no arrows (template carry-over); second face not drawn | — | Fabricator interpretation risk | Low | CONFIRMED | Documentation | DWG-SNL-01 | Long-term |
| GAP-016 | All | Typeface, cap/x-heights, graphic colour values, arrow and pictogram artwork source not specified; layouts are "EXAMPLE ONLY" | Legibility at viewing distance cannot be assessed | Inconsistent artwork across suppliers | Medium | INFO UNAVAILABLE | Documentation | all p1 sheets | Medium-term |
| GAP-017 | All | Sheet titles call wayfinding signs "REKLAM LÖVHƏLƏRİ" (advertising boards); no revision index or approvals; all "NOT FOR CONSTRUCTION" | — | Wrong approval/procurement route; drawings cannot be used as acceptance basis | Low | CONFIRMED | Documentation | all sheets | Long-term |
| GAP-018 | SN-C-L-2 | "B04 Station" vs "B4 Station"; AZ label typos ("Asthma tavan", "Fayans", "Rarı") | Nomenclature inconsistency confuses if propagated to signs | Minor | Low | CONFIRMED | Documentation | DWG-SNL-01/02, IDEXT-03 | Long-term |

## 6. Intervention levels — example for GAP-002 (overhead fixing)

1. **Minimum** — Request the producer's anchor product data and a fixing calculation for 15 kg + safety factor; add a secondary retention cable to each sign.
   + Fast, low cost. − Does not address vibration/seismic criteria. ⚙ Needs ceiling void access; coordinate with suspended-ceiling contractor.
2. **Recommended** — Issue a fixing specification for all overhead types (SN-C-L-2, DC-L3-1, SN-S-XL-2): approved anchor type for cracked concrete, embedment, number of anchors per hanger, secondary retention, vibration and seismic criteria from Baku Metro; first-article pull-out test.
   + Network-wide consistency, verifiable at acceptance. − Requires engineering input and client criteria. ⚙ Dependency: client's structural/seismic requirements (information request items 14, 19).
3. **Comprehensive** — Standard suspension kit (tube, flange, anchor, retention, cable gland) designed and type-tested once, used for every overhead sign in the network, with a periodic inspection regime.
   + Lowest lifecycle risk, simplified maintenance. − Longer lead time, redesign of hanger detail. ⚙ Fits a network signage standard update.

**Recommended choice:** level 2 now, migrating to level 3 at the next standard revision. Budgeting inputs: number of overhead signs per station, anchor/retention unit costs, access method and possession times.

## 7. Example for GAP-010 (reverse-face arrows) — Immediate
1. **Minimum** — Check both faces' artwork for every 2-sided directional sign before production; record approval of each face.
2. **Recommended** — Add "Face A / Face B" artwork sheets to the drawing set showing mirrored exit order and arrow direction, keyed to the station plan orientation.
3. **Comprehensive** — Message schedule per sign location generated from the station plan (one row per face), used for artwork, inventory and maintenance.

## 8. Scoring
**Not scored.** Dimensions A, B, D require station plans, sign locations and site evidence. Dimension E (design intent) could be scored only for the documents, not for a station; a document-level rating would be "3 – acceptable, requires improvement: coherent construction concept, incomplete safety-relevant specification", reported as a professional observation, not a station score.

## 9. What is required for a complete station audit
These four drawings describe how four sign *types* are meant to be built. They cannot tell us:
- **Where** signs are, and whether every decision point is covered → station plans, RCPs, sign location plans, inventory.
- **What passengers see** → photographs from each approach, site survey of sightlines, obstructions, lighting, advertising.
- **Whether journeys work** → exit list, vertical circulation, transfer routes, step-free status, passenger flows.
- **What the rules are** → Baku Metro design manual and the adopted accessibility, fire, electrical and seismic instruments.
- **Whether built signs match design** → as-built inspection, revision-controlled construction drawings, product data (incl. DC-L3-1 and safety/map signs).

Full checklist: `templates/information-request.md`.
