# Figma Design Build Log — Quanta Surgical Lasers

## Section 1 — Header & Hero (Figma Node `47:3579` Frame 8)

### Design Spec Table

| Element | Node ID | Dimensions (px) | Position (px) | Radius | Fill / Stroke | Typography / Details |
|---|---|---|---|---|---|---|
| Section Canvas | `47:3579` | 1440×810 | x0, y0..810 | 0 | `linear-gradient(180deg, #139ec1 0%, #139ec1 30%, #dcf5fb 100%)` | relative, overflow: hidden, gradient starts at y=243px (30%) |
| Logo Title | `47:3606` | 162×23 | inside logo | — | `#ffffff` | Manrope Medium 24px, lh 96%, ls -4% |
| Logo Subtitle | `47:3607` | 162×10 | inside logo | — | `#ffffff` | Manrope Medium 10px, lh 96%, ls 19%, UPPERCASE |
| Header Menu | `47:3609` | 633×42 | inside header | — | — | flex row, gap: 5px |
| Menu Pills (5) | `47:3610..`| dynamic×42 | inside menu | 60px | gradient `linear-gradient(180deg, rgba(74,218,252,0.3) 0%, rgba(100,225,255,0.3) 100%)`, stroke: `1px solid rgba(255,255,255,0.11)`, backdrop-filter: `blur(15.2px)` | Manrope Bold 11px, UPPERCASE, pad: 8px 25px |
| Header Right | `47:3620` | 407×42 | inside header | — | — | flex row, gap: 24px, align-items: center |
| Header Phone | `47:3621` | 184×23 | inside right | — | `#ffffff` | Manrope Medium 24px, lh 96%, ls -4% |
| Header CTA Button | `47:3622` | 199×42 | inside right | 999px | `#ffffff` | Manrope Bold 11px, text `#149ec1`, UPPERCASE, pad: 0 18px |
| Hero Text Block | `47:3584` | 680×443 | x40, y156 | — | — | flex col, gap: 63px |
| Subtitle Badge | `47:3586` | 680×26 | inside text | — | `#ffffff` | Manrope SemiBold 14px, lh 26px |
| Hero Main Title | `47:3587` | 680×276 | inside text | — | `#ffffff` | Manrope Regular 96px, lh 96%, ls -4% |
| Hero Description| `47:3588` | 548×78 | inside text | — | `#ffffff` | Manrope Medium 20px, lh 26px |
| Segmented Switcher | `47:3599`| 397.4×62.3 | x40, y693 | — | — | flex row, gap: 10px |
| Switcher Btn 1 | `47:3600` | 210.4×62.3 | inside switcher | 9999px | `#9b5094` | Manrope Bold 15px, text `#ffffff`, UPPERCASE, pad: 0 37px |
| Switcher Btn 2 | `47:3602` | 177.0×62.3 | inside switcher | 9999px | `#ffffff`, stroke `#eef2ef` | Manrope SemiBold 15px, text `#149ec1`, UPPERCASE, pad: 0 37px |
| Laser Machine Asset| `47:3581`| 516×677 | x761, y133 | — | `assets/hero-laser.webp` | 2x WebP export from Figma 47:3581 |
| Metrics Cards Wrap | `47:3589`| 246.4×417.3 | x1153.6, y355 | — | — | flex col, gap: 9.5px |
| Metric Card 1 | `47:3590` | 246.4×132.7| inside cards | 23.9px | `rgba(10,132,162,0.3)`, backdrop-filter: `blur(15.2px)` | "40+" (35.8px SemiBold) / "клиник в России" (16.7px Med) |
| Metric Card 2 | `47:3593` | 246.4×132.7| inside cards | 23.9px | `rgba(10,132,162,0.3)`, backdrop-filter: `blur(15.2px)` | "24 ч" (35.8px SemiBold) / "выезд инженера" (16.7px Med) |
| Metric Card 3 | `47:3596` | 246.4×132.7| inside cards | 23.9px | `rgba(10,132,162,0.3)`, backdrop-filter: `blur(15.2px)` | "с 1985" (35.8px SemiBold) / "Quanta System, Милан" (16.7px Med) |

## Section 2 — Equipment Catalog & Switcher (Figma Node `50:4045` Frame 116)

MAIN FRAME (`47:3566`) is a vertical auto-layout with `itemSpacing: 120`, so every section sits exactly 120px below the previous one — the 120px `margin-top` on each section element comes from there, not from a measured gap.

| Element | Node ID | Dimensions (px) | Position (px) | Radius | Fill / Stroke | Typography / Details |
|---|---|---|---|---|---|---|
| Section Wrapper | `50:4045` | 1360×1315 | x40, y930 | — | — | header 52 + 41 gap + Frame 113 (1222) |
| Header row | Frame 115 | 1280×52 | y0 | — | — | flex row, gap 351 |
| Section title | — | 326×46 | x0 | — | `#1e1e1e` | Manrope Regular 48 / lh 96% / ls −2% |
| Subtitle | — | 533×52 | x677 | — | `#1e1e1e` | 20 Medium / lh 26, two lines |
| Showcase frame | `50:4041` (Frame 113) | 1360×1222 | y93 | — | — | card starts 30px into it |
| Showcase card | `49:4013` (Rectangle 20) | 1360×1192 | x0, y123 | 51 | `#ffffff`, 9px stroke `#E8F2F4` | stroke drawn as an inset ring so children keep frame coordinates |
| Machine photo | `47:3920` | 361×642 | x163, y280 | — | `assets/model-cyber-tm-large.webp` | — |
| Model title | — | 413×35 | x680, y207 | — | `#1e1e1e` | Manrope Regular 36 / lh 96% / ls −2% |
| Badges | — | 185 + 107 + 96 × 38 | y269, gap 10 | 23 | `#d9f4fa`, text `#42859b` | 20 Medium / lh 26, padding 0 16 |
| Lead + body | — | 533 | y353 | — | `#1e1e1e` | 18 Medium / lh 26, gaps 22 |
| Features box | — | 520.55×363 | y605 | 34 | `#f8faf9` | padding 35/30, gap 22, 4 items, icon 27.5 |
| CTA button | — | 203.4×62.33 | x680, y1202 | pill | `#9b5094` | Manrope Bold 15, ls 1, UPPER |
| Switcher row | `47:3919` (Frame 81) | 509×226.94 | x89, y1007 | — | — | three cards, gap 11.35 |
| Switcher card | — | 162.1×226.94 | — | 22.69 | active `linear-gradient(180deg, rgba(139,67,202,.14), rgba(162,205,222,.14))`, others `rgba(143,194,218,.14)` | padding 16.21, gap 29.18; title 16.21 Medium, price 11.347 SemiBold; thumbs `47:3629`, `47:3903`, `47:3904` at 59.88×106.35, no opacity fade |

### Model switcher (`assets/equipment.js`)

The three cards are `<button data-model="0|1|2">` with `aria-pressed`; a click swaps the photo and the specs column. No autoplay.

| Model | Photo | Thumb | Badges | Copy |
|---|---|---|---|---|
| Cyber TM 200 | `model-cyber-tm-large.webp` (722×1284) | `thumb-cyber-tm.webp` | Твердотельный · 2010 нм · 200 Вт | Figma frame |
| Litho 35 / EVO | `model-litho-large.webp` (722×1151, cropped to alpha bbox) | `thumb-litho-35.webp` | Гольмиевый · 2100 нм · 35 Вт | `docs/01` and `docs/11` of the `quantasystem` prototype |
| Fiber Dust PRO | `model-fiber-dust-large.webp` (722×1121, cropped to alpha bbox) | `thumb-fiber-dust.webp` | Волоконный · 1940 нм · 2500 Гц | same |

- All three photos share the 361×642 slot at x163 y280, `object-fit: contain` + `object-position: center bottom`, so the machines stand on one floor line; sources are exported at 2× (722px wide).
- Every specs column is 1057.33 tall with the CTA on `margin-top: auto`, so the button stays at Figma's y1202 whatever the copy length and the card stays 1192.
- Transition: column `model-specs-in` 320ms fade + 8px rise, photo `opacity` 300ms; `prefers-reduced-motion` drops the column animation.
- Deviation from the frame: the paragraph under the features box repeats the body copy in Figma. It now carries a commercial note per model instead (morcellator economics, one-machine coverage, optics compatibility).

## Section 3 — Bento Comparison + Directions + Why Surgeons (Figma Node `50:4040` Frame 112)

| Element | Node ID | Dimensions (px) | Position (px) | Radius | Fill / Stroke | Typography / Details |
|---|---|---|---|---|---|---|
| Section Wrapper | `50:4040` (Frame 112) | 1440×2889 | y2654 | — | — | 3 blocks with 130px gaps; 139px from card bottom |
| Background | `47:3571` (Rectangle 16) | 1440×1415 | y688 (in F112) | top 53 | `assets/sec3-bg.svg` — `#159EC1` + purple gradient | Full-bleed, top corners only |
| Bento Grid | `50:4038` (Frame 110) | 1360×1093 | x40 | — | — | 2×680px cards, no gap |
| Card «Клиникам» | `50:4036` (Frame 108) | 680×912 | left, y181 | 56 | `#ffffff`, 10px stroke `#32ABC9`→`#A5DDEA` @30% (0→703px) | padding 86/77/72/67 **inside** stroke; title 48/400/−2%; steps 32 + 18/26, gaps 20/19; CTA 65 `#9b5094` |
| Card «Пациентам» | `50:4037` (Frame 109) | 680×912 | right, y0 | 56 | `#A7DEEB`→`#149EC1` (0→697px) | padding 86/77/74/67; features 32 + 18/26, gaps 46/19; CTA 65 white |
| Directions Block | `47:3705` (Frame 57) | 1360×546 | y1223 | — | — | header 96 + 59 gap + 4 rows 94 with 5px gaps |
| Direction Row | `47:3710..` | 1360×94 | y1378+ | 59 | `#ffffff` | padding 0 33; name 24/400/−2% width 372; desc 18/26; arrow Onest 20 `#159ec1` |
| Why Surgeons Card| `47:3731` (Container) | 680×890 | x720, y100 | 55 | `rgba(10,132,162,0.9)`→`0.39`, `blur(15.2px)` | padding 72/74, gap 50; title 48 max-w 499; stats 2×235.3, value 40/64 |
| Surgeon Background| `47:3730` (Rectangle 17) | 1440×808 | y0 | 64 | `assets/why-surgeons-bg.webp` | full-bleed operating-room photo |

## Section 4 — Surgical Videos (Figma Node `50:4032` Frame 104)

| Element | Node ID | Dimensions (px) | Position (px) | Radius | Fill / Stroke | Typography / Details |
|---|---|---|---|---|---|---|
| Section Wrapper | `50:4032` (Frame 104) | 1360×507 | y5673 | — | — | header 86 + 46 gap + cards 375 |
| Header row | `47:3761` (Frame 103) | 1336×86 | x40 | — | — | title block left, link right, bottom-aligned |
| Title / subtitle | `47:3762` / `47:3763` | 502×46 / 502×26 | header | — | `#1e1e1e` | 48px Regular, lh 96%, ls −2%; subtitle 18px/26, gap 14 |
| «Вся видеотека» | `47:3764` | 134×20 | right edge 1400 | — | `#159ec1` | Figma draws a plain 15px Bold uppercase link; client asked for the news pill, so `.videos-all-link` shares `.news-all-btn` (52px, r9999, 1px `#eef2ef`, 14px Bold) |
| Video card | `47:3765..` | 428×352 (375 for 3-line title) | gap 38 | — | — | thumb 225 + 19 gap + info (12 gaps) |
| Thumb | `47:3766` | 428×225 | top | 34 | `assets/video-thumb-N.webp` | play ring + timecode are baked into the export |
| Tag / title / author | `47:3779` etc. | — | info | — | tag `#149ec1`, rest `#1e1e1e` / `#4a5450` | tag 11px Bold ls 3 UPPER; title 24px Regular lh 96% max-w 360; author 14px/22.4 |

## Section 5 — News & Events (Figma Node `50:4027` Frame 100)

| Element | Node ID | Dimensions (px) | Position (px) | Radius | Fill / Stroke | Typography / Details |
|---|---|---|---|---|---|---|
| Section Wrapper | `50:4027` (Frame 100) | 1360×629 | y6310 | — | — | header 65 + 45 gap + content 519 |
| Header | `50:4026` (Frame 99) | 1360×65 | top | — | — | title 48px Regular lh 96% ls −2%, top-aligned |
| «Все новости» | `47:3690` | 194×65 | right, x1167 | 9999 | `#ffffff` + 1.2px `#24a9cb` | 15px Bold, ls 1px, UPPER, `#29a1bf`, padding 0 37 |
| Featured article | `47:3823` | 680×498 (content 483) | left column | 40 (image) | `assets/news-featured.webp` | image 680×390 + 12 gap; category 14/22.4 `#9b5094`; title 24/0.96 max-w 624 |
| Side news list | `47:3831` | 588×519 | x772 | — | items 1px `#dde1de` bottom | gap 27; item gap 14 + padding-bottom 20; title 24/0.96 max-w 480, last item no border |

## Section 6 — CTA Proposal & Mega Footer (Figma Node `50:4046` Frame 117)

| Element | Node ID | Dimensions (px) | Position (px) | Radius | Fill / Stroke | Typography / Details |
|---|---|---|---|---|---|---|
| CTA Proposal (Frame 97) | `50:4024` | 1440×540, full-bleed | top banner | 0 | `assets/cta-bg.svg` (`#1B93B1` + two radial `#29A0BD` @30% + purple `#9B5094` overlay), `preserveAspectRatio="none"` so the gradient stretches past 1440 | children absolutely positioned in a 1440 inner layer, so nothing moves with the viewport |
| · Laser | `47:3569` | 631×476 | x421 y64 | — | `assets/cta-laser.webp` (2× export) | — |
| · Heading | `47:3852` | 544 wide, Manrope 48/400, lh 96%, ls −2% | x40 y77 | — | `#ffffff` | «Коммерческое предложение», two lines |
| · Subheading | `47:3853` | 348 wide, 20/25 | x40 y203 | — | `#ffffff` | trailing period |
| · Button «Запросить КП» | `47:3899` | 199×42 | x40 y431 | 999 | `#ffffff`, text `#149ec1` | Manrope Bold 11px, ls 1.54 |
| · Phone pill | `47:3854` | 421×75.67 | x979 y409 | pill | `rgba(255,255,255,.04)` + `backdrop-filter: blur(24.94px)` | 46.058/400, ls −4% |
| Mega Footer (Frame 96) | `50:4023` | 1440×556 | bottom, y540 | 0 | vertical gradient `#135B6E` → `#2FC1E6` (Figma stacks two fills; the top one is hidden and the visible ramp is this one) | children on frame coordinates inside a 1440 inner layer |
| · Watermark | `57:4108` | 1360×136 (198px vector clipped by the frame) | x40 y0 | — | `assets/footer-watermark.svg` | top edge, letters cut by the frame |
| · Nav columns | `47:3856`…`47:3885` | 209.6 / 209.6 / 141 / 152 / 174 | x40 / 346 / 626 / 917 / 1211, headings ink y216 | — | headings `#eef2ef`, links `#ffffff` | 16 SemiBold + 14 Regular, lh 22.4, 23px line pitch, 16px heading gap, column 1 carries 4px extra |
| · Company | `47:3896` | 223×56 | x40 y406 | — | `#ffffff` | 12/22.4 then 12/15, 3px between paragraphs |
| · Legal links | `47:3893` | 389×46 | x720 y406 | — | `#ffffff` | 12/22.4, two lines |
| · Partner logos | `47:3906` | 93×37 | x1307 y410 | — | `assets/footer-partner.svg` | gasfort & partners |
| · Disclaimer | `47:3892` | 1360×64 | x40 y500 | — | `rgba(255,255,255,.25)` | Bebas Neue 32/32, ls 0.26, UPPER, justified; the second line is clipped by the frame |

## Fonts

| Family | File | Notes |
|---|---|---|
| Manrope | `assets/fonts/Manrope-Variable.ttf` | variable 100–900, `--font-main` |
| Onest | `assets/fonts/Onest-Variable.ttf` | variable, arrow glyphs, `--font-onest` |
| Bebas Neue | `assets/fonts/BebasNeue-Regular.ttf` | 2014 cut by Fontfabric: the Google Fonts 2019 file has no Cyrillic and silently falls back to Manrope |

## Hero effects (`assets/hero-fx.js`)

| Effect | Implementation | Notes |
|---|---|---|
| Light rays | CSS port of Magic UI "Light Rays", the effect used on aurapass.me: seven blurred beams (blur 30px, white 45%) plus two radial glows at 40%, `mix-blend-mode: screen` | Intensity stays low on purpose — the rays are atmosphere and the headline has to read. `.hero-rays` is a `z-index: 0` sibling of `.hero-container`, so text, cards and the machine stay above it; each beam pulses and swings on its own 9–15s period (peak `--ray-intensity` 0.4–0.75), so the fan never repeats; on this light hero the beam holds its brightness halfway down before fading, otherwise it reads as a blob at the top edge |
| Machine carousel | three `.hero-laser-img` stacked in `.hero-laser-wrap`, one marked `is-current`, swapped every 10s | `hero-laser.webp` (Cyber TM), `hero-laser-litho.webp`, `hero-laser-quanta.webp` — all 1354px tall, so `object-fit: contain` in the 516×677 slot draws them at the same scale and baseline |
| Pixel swap | 900ms canvas mosaic: the buffer is drawn at 1:1, blocks grow to 14 CSS px and shrink back while the two images crossfade | `imageSmoothingEnabled = false` on the upscale; block size is scaled by the device pixel ratio so the mosaic is the same size on retina |

## Responsiveness

Desktop ≥1440 is the Figma frame, untouched (page 7846). Below it the 1360 containers go fluid and every absolute composition returns to flow. Breakpoints follow the `HR` project: 1439 / 1199 / 1023 / 767.

| Breakpoint | What changes |
|---|---|
| ≤1439 | Containers `width: 100%` with `clamp(20px, 3.6vw, 40px)` side padding. Hero becomes a grid (header / text+switcher \| machine / metrics). Equipment card becomes a two-column grid (photo + selector \| specs). CTA banner and footer drop their 1440 absolute layers for grids. Type, radii and gaps clamp down. `.sec3-bg` is rebuilt as a CSS gradient: the SVG ignores `background-size` and stays 1440×1415 |
| ≤1199 | Header nav collapses into a burger (`assets/nav.js`), the phone is hidden and the panel drops under the logo |
| ≤1023 | One column: hero, equipment (photo → selector → specs), bento, news, CTA. The band starts at 25% of the section so the directions block still lands on colour |
| ≤767 | Phone type scale, full-width buttons, compact selector cards, direction rows stack with the arrow pinned top-right, footer nav two columns, meta one column |

- Every absolute block that returned to flow had its `top`/`left` reset to `auto`; a `position: relative` element keeps those offsets and shifts the whole block.
- The three model photos share one 361×642 slot with `object-fit: contain` + `object-position: center bottom`. All three are cropped to their alpha bbox, so the systems stand on one floor line.
- The selector thumbnails were swapped: the design file had the cabinet under `thumb-litho-35` and the cart under `thumb-fiber-dust`, which is the other way round from the machines.
