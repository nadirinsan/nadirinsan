# Audit Methodology

Six assessment dimensions, a 12-stage passenger journey, and a decision-point protocol. Each check lists the **question**, the **evidence** that can answer it, and the **typical gap**.

## Part 1 — Assessment dimensions

### A. Passenger navigation & functionality (weight default 25 %)
| # | Check | Evidence | Typical gap |
|---|---|---|---|
| A.1 | Every decision point has a sign that resolves the choice | Plan + DP register + inventory | DP with no sign; sign after the DP |
| A.2 | Directions are logical and consistent along a route (no contradictory arrows) | Plan + photos | Arrow on one face correct, reverse face not mirrored |
| A.3 | Journey continuity: once a destination is announced, it is repeated until reached | Sign sequence | "Orphan" destination that disappears mid-route |
| A.4 | Advance information: sign is visible before the decision must be made | Sightlines on plan/photos | Sign only readable at the junction |
| A.5 | Transfers: line identity and direction clear end-to-end | Transfer route trace | Transfer shown at platform but not at intermediate DPs |
| A.6 | Layout-induced confusion addressed (symmetry, multiple identical exits, split levels) | Plan | Symmetric concourse with no orientation cue |
| A.7 | Nomenclature consistent: station, exit, line, street names match maps and other signs | Inventory, maps | "B04 Station" vs "B4 Station" |

### B. Visibility & positioning (20 %)
| # | Check | Evidence | Typical gap |
|---|---|---|---|
| B.1 | Mounting position and height suit the sign type and crowd conditions | Drawings, site measurement | Wall sign hidden by queues |
| B.2 | Visible from the normal approach directions | Plan sightlines, photos | Sign parallel to flow |
| B.3 | Obstructions: columns, beams, ducts, CCTV, lighting, PIDs, advertising, crowds | Photos, site | Sign behind downstand beam |
| B.4 | Viewing angles acceptable | Plan, photos | Read at oblique angle only |
| B.5 | Commercial advertising does not compete with wayfinding (distance, luminance, colour) | Photos | Lightbox ad brighter and adjacent to directional sign |
| B.6 | Legibility distance adequate for letter height *(project parameter; see standards file)* | Drawings + plan distances | Letter height not specified |
| B.7 | Ambient lighting, glare, reflections, contrast with background | Site, photos | Glossy face reflecting downlights |
| B.8 | Correct choice of ceiling vs wall vs floor-standing mounting for the location | Plan, section | Ceiling sign where ceiling is cluttered |

### C. Graphic design & readability (15 %)
Typography (typeface specified and consistent) · letter/cap height vs viewing distance · colour contrast (LRV / luminance contrast, both normal and illuminated states) · arrow design and placement · pictogram clarity and standard source · text hierarchy · information density (number of messages per panel) · multilingual order and consistency (AZ/EN) · consistency across sign families.

### D. Accessibility & inclusivity (15 %)
Visual impairment (contrast, size, glare, tactile/Braille where applicable, audible information) · step-free routes signed end-to-end · lift locations and destinations · wheelchair symbol only where the route is genuinely step-free · reading heights for seated users and children for close-read information · cane-detectable obstacles (protruding signs, totems) · colour-blind safety (line colour always paired with code/name) · plain language and pictograms for elderly, visitors, non-local language readers.

### E. Technical & construction (15 %)
Materials & fabrication · fire performance of non-metallic materials (underground) · structural stability and fixings · secondary retention for overhead items · vibration/airflow · seismic considerations where applicable · electrical (cable route, protection, earthing, emergency supply) · LED performance (module vs face luminance, uniformity, lifetime basis) · enclosure IP · maintenance access · cleaning and durability · installation quality · safety risks · fit with architectural environment (ceilings, cladding, column finishes).

### F. Operational & maintenance (10 %)
Damaged/outdated signs · inconsistent information · ease of replacing faces, LEDs, drivers · content update process (temporary changes, service disruptions) · lighting failures and monitoring · standardisation of parts across the network · access equipment needed (scaffold vs ladder vs possession) · lifecycle and spares.

## Part 2 — Passenger journey (12 stages)

For each stage complete: **Required signage → Existing signage → Missing information → Potential confusion → Recommended intervention → Evidence IDs**.

| Stage | Required signage (typical) |
|---|---|
| 1 Approaching the station | Exterior identification (pole/pylon/façade), visible from main approach streets; network symbol |
| 2 Identifying the entrance | Entrance ID with exit/entrance number, line code(s), step-free status, opening hours if restricted |
| 3 Entering | Station name confirmation, orientation map, route to fare line |
| 4 Ticketing & fare control | Ticket machines/office ID, fare info, help point, accessible gate ID |
| 5 Ticket gates | Gate status, wide-gate for wheelchairs/luggage, direction to platforms after gates |
| 6 Escalators / lifts / stairs | Destination of each vertical element; lift as step-free route |
| 7 Reaching the platform | Platform/direction signs at each split |
| 8 Correct train direction | Terminus/direction name, stations served, line code/colour |
| 9 Transfers / interchanges | Line identity + direction continuous to the other platform |
| 10 Station facilities | Toilets, help, lost property, retail — without distracting from primary flows |
| 11 Exiting | Exit numbers + street names from the platform onward; station map at platform exit points |
| 12 Street-level destinations & connections | Local area map, bus/tram/taxi, landmarks, onward accessibility |

Run the journey for at least these personas: first-time visitor (non-AZ reader), regular commuter, wheelchair user, blind/partially sighted passenger, elderly passenger with luggage. Run it in **both** directions (entry and exit) and for each transfer.

## Part 3 — Decision-point protocol
1. Identify every DP on the plan (≥2 route choices): stair/escalator heads and feet, concourse splits, fare-line exits, platform access points, transfer corridors, exit corridors.
2. For each DP list destinations reachable and which must be signed.
3. Record the **advance sign** (seen before the DP), **DP sign** (at the DP) and **confirmation sign** (after the choice).
4. Rate: Resolved / Partially resolved / Unresolved.
5. Unresolved DPs on primary flows are High or Critical (see scoring framework).
Template: `templates/decision-point-sheet.md`.

## Part 4 — What each evidence set can support

| Evidence available | Dimensions assessable | Journey analysis | Station score |
|---|---|---|---|
| Sign drawings only | E (design intent), C (partly, from layout examples), F (maintainability of design) | No | No |
| + Station plans | + A, B (geometric), D (route level) | Partial (geometry) | Provisional |
| + Inventory + photos | + B, C, F (as-built) | Yes (desk) | Yes (desk-based) |
| + Site survey (measurements, lighting, crowd observation, accessibility walk-through) | All | Yes (verified) | Yes (verified) |

## Part 5 — Origin classification
- **Design**: the drawing/standard itself is deficient.
- **Fabrication**: product differs from approved design.
- **Installation**: position, height, alignment, fixing differ from design or are unsafe.
- **Operation/Maintenance**: damage, outages, outdated content, ad encroachment.
- **Documentation**: missing/conflicting information preventing verification.
