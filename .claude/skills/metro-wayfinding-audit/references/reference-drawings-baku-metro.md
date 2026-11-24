# Baku Metro Reference Drawing Register

Baseline extraction from the sign drawings supplied with the skill brief (received 2026-11-16). These are **design-intent documents** — every sheet with a title block is stamped *NOT FOR CONSTRUCTION* and layouts are stamped *EXAMPLE ONLY – NOT FOR PRINTING*. They describe sign types, not any station's as-built condition.

Use: when a user uploads one of these (or a later revision), verify the values below against the new file, record changes, and update this register. When auditing installed signs of these types, compare observed construction against the values here — without treating them as universal requirements.

Status key: `V` verified in source · `U` user-reported, source not supplied · `A` ambiguous · `C` conflicting · `NS` not specified.

---

## Common to all sheets

| Item | Value (verbatim) | Status | Note |
|---|---|---|---|
| Client line in title block | Baku Metro | V | |
| Author | AmMo | V | ID-EXT-PM sheet 1 also carries "MIJKSENAAR" footer |
| Sheet title family | "… REKLAM LÖVHƏ(Sİ/LƏRİ)NİN FUNKSİONAL DİZAYNI" ("functional design of the advertising board(s)") | V / A | Wayfinding signs titled as *advertising boards* — confirm intended classification (approval/procurement risk) |
| Revision index | none on any sheet | NS | No revision letters, approval signatures or change notes |
| LED module data panel | Luminous Efficacy 178 Lm/W · Wattage per Module 0.36W / 0.6 W / 0.8 W · Lifetime TM21 >60.000 Hours · Warranty 5 Years · Ingress Protection IP 67 · Packaging 50 Modules | V | **Module** datasheet values. Not the sign enclosure IP, not face luminance. Module variant, module count, Lxx basis of TM-21 and test temperature: NS |
| Paint | "Mat avtomobil boyası, Ral 180, 20, 10" (matte automotive paint) | A | Notation resembles **RAL Design System** (hue 180 / lightness 20 / chroma 10 → dark blue-green, consistent with renderings) but the system is not named; it is not a RAL Classic code. Confirm system, code and gloss level. Spec tables say "Powder Coated/Painted" — process conflict |
| Face construction | 4 mm "orqanik şüşə" (organic glass) + "UV çap + qoruyucu lak (vintlər bağlandıqdan sonra montaj olunur)" — UV print + protective lacquer, installed after screws are fastened | V / A | Spec tables say "Plastic (Acrylic/Polycarbonate) with printed vinyl" → material and print process conflict. Note implies the graphic layer covers the screws → how is the face opened for maintenance? |
| Face fixing | "4 mm orqanik şüşəyə metal vintin bağlantı detalı"; IA-T & ID-EXT: "Vintlərin üzəri məcunla bağlandıqdan sonra üzəri hamarlanacaqdır" (screw heads filled with putty and smoothed) | V | Permanent-looking closure; maintainability concern |
| Fire performance of plastics/PVC/vinyl/lacquer | — | NS | Underground use — critical information gap |
| Typeface, letter heights, colour values of graphics, pictogram source | — | NS | Layouts are examples only |

## DC-L3-1 — Illuminated ceiling-mounted directional sign

**Source file still not received** (values from the user's brief only, status U). A related sheet, DC-S1-1, was received on 2026-11-16 — see below. Whether DC-L3-1 is a separate family member (e.g. large / 3-sided) is unconfirmed.

## DC-S1-1 — Directional, Ceiling Mounted, 1-sided (received 2026-11-16)

File `DC-S1-1.pdf`, 2 pp, A4 landscape. Title block: Size A3 · Scale 1:10 · Date 2026-08-04 · **no NOT FOR CONSTRUCTION stamp**.

| Item | Value | Source | Status |
|---|---|---|---|
| Sign code | File/page title "DC-S1-1"; title block "D-C-S1-1" | p1 | **C** |
| Size | Title block "1250x350 1-sided"; front view 1250 (1254) × **250** (254) × 100 mm | p1 | **C** — 350 vs 250 mm height |
| Front panel / frame | Plastic (Acrylic/Polycarbonate) with printed vinyl / 2mm aluminium plate | p1 | V / **C** vs p2 (4 mm organic glass, UV print, 3 mm aluminium sheet) |
| Mounting | Ceiling aluminium tubes, 200 mm from edges, ±50 mm, max Ø30 mm (producer to decide) | p1 | V; p2 shows D=20 mm tube |
| Lighting zones | Arrows only backlit | p1 | V |
| Position | Bottom **2100 mm** from floor | p1 | V — differs from 2300 mm for SN-C-L-2 / SN-S-XL-2 |
| Weight | 14.5 kg (estimate based on typical illuminated signs) | p1 | V — near-identical to SN-C-L-2 (1800 mm, 2-sided, 15 kg): estimate unreliable |
| Fabrication sheet | Same as SN-C-L-2 p2 (concrete soffit, anchor 10x120, flange, 2 screws Ø6×15, suspended ceiling, cable entry/exit, 40x20 box profile, LED module panel, RAL 180,20,10) | p2 | V |
| Layout example | "← ① ② Çıxış Exit / Həsən Əliyev küç." | p1 | Example only; reverse face of a 1-sided sign is undefined |

## ID-W-S / ID-W-M / ID-W-L — Identification, Wall Mounted, 1250 / 1500 / 1800 × 200 mm (received 2026-11-16)

Files `ID-W-S.pdf`, `ID-W-M.pdf`, `ID-W-L.pdf`, 2 pp each. Title blocks: A3 · 1:10 · 2026-08-04. NOT FOR CONSTRUCTION stamp on S and M; **absent on L**. Sheet 2 (fabrication) is **identical in all three files**.

| Item | Value | Source | Status |
|---|---|---|---|
| Front panel / frame | Plastic (Acrylic/Polycarbonate) with printed vinyl / 2mm aluminium plate, powder coated/painted | p1 | V / **C** vs p2 |
| Mounting / position | Wall mounted (invisible mounting); top 2400 mm from FFL | p1 | V |
| Use / illumination / data | Indoor / No / No | p1 | V |
| Weight | S 4.5 kg · M 4.5 kg · L 5.5 kg | p1 | V — S and M identical despite size difference |
| Dimensions | S 1250 (1254) × 200 (204) · M 1500 (1504) × 200 (204) · L 1800 × 200 (204), **top view of L reads 1504** · depth 10 mm (top view) | p1 | **C** for L |
| Build-up (p2) | 10 mm Aluminium Frame (Powder Coated/Painted) · "Germetik slikon yapışdırma" (silicone sealant bonding) · 6 mm Polycarbonate · 4 mm Acrylic · UV print + lacquer applied after screws | p2 | V — total ≥ 20 mm vs 10 mm depth on p1: **C** |
| Fixing | "Bağlantı yeri" — 2 × stainless screws Ø12 × 70 mm through the panel; heads filled and smoothed | p2 | V — same 2 screws for all three lengths; substrate/plug type NS |
| Layout / content | none | — | NS — what the sign identifies is not defined |
| Colour | not stated on p2 | — | NS |

## IA-T — Information Area Totem 900 × 1600 mm

File `IA-T.pdf`, 2 pages, A4 portrait. Sheet 1 title block: Size A3 · Scale 1:20 · Date 2026-08-04.

| Item | Value | Source | Status |
|---|---|---|---|
| Front panel | Plastic (Acrylic/Polycarbonate) with printed vinyl | p1 spec | V / **C** vs p2 "4 mm organik şüşə" + UV print |
| Frame | 2mm Thick Aluminium Plate – Powder Coated/Painted | p1 spec | V / **C** vs p2 "3 mm aluminium list", matte automotive paint |
| Mounting | Floor Mounted Totem – top at 2000 mm above finished floor; mounting hidden under final flooring layer, coordinated by producer and stakeholders | p1 | V |
| Fixing | Anker bolt 10x120 mm ilə bağlama | p2 | V; quantity, type, embedment, floor build-up depth NS |
| Use / Illumination / Data | Indoor only / No / No | p1 | V |
| Weight | 48 kg (not incl. foot and mounting material) | p1 | V; total weight and overturning check NS |
| Panel | 900 × 1600 mm; overall 904 × 1604; depth 100 mm | p1 views | V |
| Foot | 650 mm wide × 400 mm high | p1 | V (1600 + 400 = 2000 top height — consistent) |
| Radii | R 20 / R 22 mm corners; R 60 mm foot transition | p1 | V |
| Internal structure | 40x20 aluminium profile; argon welding; internal welding; filler putty at joints | p2 | V; profile wall thickness NS |
| Layout example | "Məlumat / Information" header; 3 × A3 + 3 × A4 poster fields | p1 | Example only — **no insert/update mechanism shown** for changeable posters behind a screwed, sealed face |

## SN-C-L-2 — Station Name Sign, Ceiling Mounted, Large, 2-sided, 1800 × 250 mm

File `SN-C-L-2.pdf`, 2 pages, A4 landscape. Title block: Size A3 · Scale 1:10 · Date 2026-08-04.

| Item | Value | Source | Status |
|---|---|---|---|
| Front panel / Frame | Plastic (Acrylic/Polycarbonate) with printed vinyl / 2mm aluminium plate, powder coated/painted | p1 | V / **C** vs p2 (4 mm organic glass, UV print, 3 mm aluminium sheet) |
| Mounting | Ceiling mounted aluminium tubes, powder coated/painted, 200 mm from sign edges; ±50 mm variance permitted, to be communicated to Baku Metro and standardised on first sign; max diameter 30 mm, final diameter by producer | p1 | V |
| Tube | D=20 mm aluminium boru | p2 | V (within 30 mm max); wall thickness, drop length NS |
| Lighting zones | "The indicated areas (Arrows, Station Name) are intended to be backlit" | p1 | V / **A** — layout has no arrows (template carry-over?) |
| Position | Bottom 2300 mm from floor | p1 | V |
| Illumination | Yes – wiring should not be visible | p1 | V; cable route shown through tube (Elektrik kabelinin girişi/çıxışı); driver location, circuit, emergency supply NS |
| Weight | 15 kg (excl. mounting hardware; estimate) | p1 | V |
| Dimensions | 1800 (1804 overall) × 250 (254) × 100 mm; R20/R22 | p1 | V |
| Ceiling fixing | Beton tavan (concrete soffit); Anker bolt 10x120 mm; flange joint ("Fayans birləşmə" — likely *flyans*); 2 metal screws Ø6 × 15 mm; passes through "Asthma tavan" (= *asma tavan*, suspended ceiling) | p2 | V / A (typos) — one anchor per tube shown; anchor type/verification and **secondary retention** NS |
| Internal | 40x20 mm aluminium box profile; argon welding; LED lighting | p2 | V |
| Faces | 2-sided per title | p1 | Second face construction/graphics not shown — NS |
| Layout example | "B04 Station" (layout) vs "B4 Station" (mounting-height sketch) | p1 | **C** — naming convention |

## SN-C-XL-2 / SN-S-XL-2 — Station Name, Side Mounted, Extra Large (with directional), 2-sided, 3400 × 250 mm

File `SN-C-XL-2.pdf`, 6 pages, A4 landscape. Title blocks: Size A2 · Scale 1:10 · Date 2026-11-04.

| Item | Value | Source | Status |
|---|---|---|---|
| Sign code | File/page title "SN-C-XL-2"; title block "SN-S-XL-2" | p1–5 | **C** |
| Front panel / Frame | Plastic (Acrylic/Polycarbonate) / 2mm aluminium plate | p1 | V / **C** vs p6 (3 mm aluminium sheet, 4 mm organic glass) |
| Mounting | Mounted to the sides of columns in the station | p1 | V |
| Poles | In line with top and bottom of frame; approx. 50 mm thick, same depth as sign; definitive sizing with supplier; cladding may be used ("If needed – smaller tubes can be used in a cladding") | p1 | V; final section NS |
| Lighting zones | Arrows and station name backlit; beams must not block illuminated parts; beam heights 40–45 / 25–30 (mm) | p1, p2, p5 | V |
| Position | Bottom 2300 mm from floor | p1 | V |
| Illumination / Use / Weight | Yes, wiring not visible / Indoor / 29 kg excl. mounting | p1 | V |
| Dimensions | 3400 (3404) × 250 (254) × 100 mm; R20/R22; 50 mm pole dims | p1 | V; column spacing (span) NS |
| Fixing | Beton; Anker bolt 10x120 mm (4 shown); Bağlayıcı detal (connecting bracket); Divar kaplaması (wall cladding) | p6 | V; cladding type/thickness, bracket design NS |
| Internal | 40x20x2 mm aluminium box profile; aluminium profile; LED | p6 | V |
| Sheet 6 title | "E KATEQORİYASI ÜZRƏ REKLAM LÖVHƏLƏRİNİN FUNKSİONAL DİZAYNI" | p6 | Category "E" not defined elsewhere — clarify |
| Layout | ← ① ② Çıxış Exit / Həsən Əliyev küç. · station name ("B04 Station" / "20 Sentyabr") · Çıxış Exit ③ ④ / Hənifə Ələsgərov küç. → | p1, p2 | Example. **Reverse face arrow/exit arrangement not shown** for a 2-sided sign |

## ID-EXT-PM — Exterior Identification, Pole Mounted, 300 × 1200 mm (+ Alt_ID-EXT-PM)

File `ID-EXT-PM_3.pdf`, 4 pages, A4 portrait. Title blocks: Size A3 · Scale 1:10 (alt 1:50) · Date 2026-08-04.

| Item | Value | Source | Status |
|---|---|---|---|
| Sign panel | Plastic (Acrylic/Polycarbonate) | p1 | V / **C** vs p3–4 (4 mm organic glass) |
| Lighting | Whole sign intended as evenly lit light box; if not feasible, indicated zones must be backlit (yellow-dashed zones, legend "Rarı çizgi…" = *sarı*, yellow) | p1, p3 | V |
| Mounting | Bottom 2300 mm from finished floor level; round pole; "sufficiently anchored … in connection with any applicable safety standards for objects in public spaces" | p1 | V; pole diameter, foundation, wind/structural design NS |
| Alternative mounting | For B04, façade-mounted support structure if municipal pole permit not feasible; must not compromise façade integrity/weatherproofing; dimension shown **2500 mm** | p2 | V / **C** vs 2300 mm |
| Rounding | Cross-section corners R 20 mm | p1 | V |
| Use / Illumination / Data / Weight | Outdoor only / Yes / No / 18 kg excl. mounting | p1 | V |
| Dimensions | 300 × 300 × 1200 mm | p1 | V |
| Structure | 40x40x2 mm aluminium profile frame; 3 mm aluminium; 5 mm PVC "dekota" LED carrier; flanges F=150 (upper/lower); 4 × metal screws Ø12 × 30 mm per connection | p3, p4 | V |
| Top/bottom caps | **3 mm** (p3) vs **2 mm** (p4) aluminium | p3/p4 | **C** — two versions, no revision marker |
| Cap paint | "Mat avtomobil boyası" (p3) vs "Avtomobil boyası" (p4, matte omitted) | p3/p4 | **C** |
| Drainage | "Drenaj təxliyyə dəlikləri" on bottom cap | p3 only | Label absent on p4 — confirm retained |
| Layout | Network logo; M3 line badge; wheelchair symbol; "1 Giriş / Entry"; walking-down-stairs pictogram; identical on 4 faces | p1, p3 | Example — wheelchair + stairs pictogram combination must reflect the actual entrance (step-free or not) |
| Enclosure IP, UV/thermal resistance, electrical protection/earthing | — | NS | Outdoor illuminated product — critical information |

## Known discrepancy list (quick reference)
1. Frame/sheet thickness 2 mm (spec tables) vs 3 mm (fabrication sheets) — IA-T, SN-C-L-2, SN-XL-2.
2. Face: acrylic/polycarbonate + printed vinyl vs 4 mm organic glass + UV print + lacquer — all.
3. Finish: powder coated/painted vs matte automotive paint — all.
4. Colour notation "Ral 180, 20, 10" — system not stated — all.
5. ID-EXT-PM caps 3 mm vs 2 mm; matte vs non-matte; drainage label missing on p4.
6. ID-EXT-PM mounting height 2300 mm vs 2500 mm (alternative).
7. SN-XL-2 sign code C vs S.
8. SN-C-L-2 "arrows backlit" but no arrows.
9. "B04 Station" vs "B4 Station".
10. Module data presented without module count, driver, face luminance, enclosure IP.
11. No fire reaction classification for any non-metallic material.
12. No revision control; most sheets "NOT FOR CONSTRUCTION" but DC-S1-1 and ID-W-L carry no stamp.
13. DC-S1-1 height 350 (title) vs 250 mm (drawing); code D-C-S1-1 vs DC-S1-1; bottom 2100 mm vs 2300 mm for other overhead signs.
14. ID-W-L top view 1504 mm vs 1800 mm; ID-W build-up ≥20 mm vs 10 mm depth; one fixing detail (2 screws) for all three lengths.

## Revision log
| Date received | File | Change vs previous | Note |
|---|---|---|---|
| 2026-11-17 | ID-EXT-PM_3_1.pdf | None (byte-identical to ID-EXT-PM_3.pdf) | All ID-EXT-PM items open |
| 2026-11-17 | SN-C-L-2_2.pdf | Drawing unchanged; 2 PDF comments by Amar Mohindra: lighting to be in the middle (station name) zone, not at the edges as on DC signs | Fabrication sheet p2 is identical to DC-S1-1 p2 |
| 2026-11-17 | SN-C-XL-2_2.pdf | Drawing unchanged; 3 PDF comments: sign type is SN-S-XL-2; dark green casing must enclose internal profiles flush with all faces; add covering elements visible between wall cladding | Confirms code conflict |
