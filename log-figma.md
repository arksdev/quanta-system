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

| Element | Node ID | Dimensions (px) | Position (px) | Radius | Fill / Stroke | Typography / Details |
|---|---|---|---|---|---|---|
| Section Wrapper | `50:4045` | 1360×1594 | x40, y930 | — | — | margin-top: 120px, flex col, gap: 41px |
| Header Block | `50:4044` | 1280×158 | inside section | — | — | title + clinical direction tabs |
| Section Title | `47:3626` | 326×46 | inside header | — | `#1e1e1e` | Manrope SemiBold 36px |
| Clinical Tabs | `47:3633` | 603×60 | inside header | 999px | `#ffffff`, stroke `#ecf0ed` | 3 pills: Аденома простаты, МКБ, Нейрохирургия |
| Models Grid (4) | `47:3919` | 842×255 | top of card | 28px | `#8fc2da` / active gradient | 4 cards of 200×255px (Cyber TM 200, Litho 35, Fiber Dust, Litho DK) |
| Main Card Box | `49:4013` | 1360×1192 | inside section | 51px | `#ffffff`, stroke `#e8f2f4` | showcase container for selected laser |
| Machine Photo | `47:3920` | 361×642 | left column | — | `assets/model-cyber-tm-large.webp` | 2x WebP export |
| Model Title | `49:3921` | 413×35 | right column | — | `#1e1e1e` | Manrope SemiBold 36px |
| Badges Row | `49:3933` | 413×38 | below title | 23px | `#d9f4fa`, text `#42859b` | Твердотельный, 2010 нм, 200 Вт |
| Features Box | `49:4003` | 520.5×363 | right column | 34px | `#f8faf9` | 4 items with `assets/feature-diamond.svg` |
| CTA Button | `49:4006` | 203.4×62.3| right column | 9999px | `#9b5094` | "ЗАПРОСИТЬ КП", text `#ffffff` |

## Section 3 — Bento Comparison + Directions + Why Surgeons (Figma Node `50:4040` Frame 112)

| Element | Node ID | Dimensions (px) | Position (px) | Radius | Fill / Stroke | Typography / Details |
|---|---|---|---|---|---|---|
| Section Wrapper | `50:4040` | 1440×2889 | y2654 | — | — | margin-top: 130px, flex col, gap: 130px |
| Bento Grid | `50:4038` | 1360×1093 | inside section | — | — | 2 columns of 680×912px |
| Card Пациентам | `50:4037` | 680×912 | left column | 40px | gradient `#a7deeb` to `#149ec1` | text white, 3 advantages, CTA button |
| Card Клиникам | `50:4036` | 680×912 | right column | 40px | `#ffffff`, stroke `#e8f2f4` | text dark, 4 stages, purple CTA button |
| Directions Block | `47:3705` | 1360×546 | middle | — | — | 4 interactive rows (Урология, Нейрохирургия...) |
| Why Surgeons Card| `47:3731` | 680×890 | bottom | 40px | `rgba(10,132,162,0.88)`, blur | 4 key stats (0.1-0.2 мм, 4 г/мин, 1500 мкс, 150 мкм) |
| Surgeon Background| `47:3730` | 1440×808 | bottom | 40px | `assets/why-surgeons-bg.webp` | modern OR photo background |

## Section 4 — Surgical Videos (Figma Node `50:4032` Frame 104)

| Element | Node ID | Dimensions (px) | Position (px) | Radius | Fill / Stroke | Typography / Details |
|---|---|---|---|---|---|---|
| Section Wrapper | `50:4032` | 1360×507 | y5673 | — | — | margin-top: 130px |
| Video Cards (3) | `47:3765..`| 428×375 | inside grid | 20px | `#ffffff` | thumbs `assets/video-thumb-1..3.webp`, play icon, duration badge |

## Section 5 — News & Events (Figma Node `50:4027` Frame 100)

| Element | Node ID | Dimensions (px) | Position (px) | Radius | Fill / Stroke | Typography / Details |
|---|---|---|---|---|---|---|
| Section Wrapper | `50:4027` | 1360×747 | y6310 | — | — | margin-top: 130px, 2 columns |
| Featured Article| `47:3823` | 680×498 | left column | 24px | `assets/news-featured.webp` | photo 680×390px, РОУ конгресс |
| Side News List | `47:3831` | 588×519 | right column | — | — | 4 articles with dates and categories |

## Section 6 — CTA Proposal & Mega Footer (Figma Node `50:4046` Frame 117)

| Element | Node ID | Dimensions (px) | Position (px) | Radius | Fill / Stroke | Typography / Details |
|---|---|---|---|---|---|---|
| CTA Proposal | `50:4024` | 1440×540 | top banner | 40px | gradient `#1b93b1` / `#9b5094` | laser photo `assets/cta-laser.webp`, phone, CTA button |
| Mega Footer | `50:4023` | 1440×556 | bottom footer | 40px 40px 0 0 | `#135b6e` | 5 navigation columns, disclaimer, legal links |
| Outline Watermark | `57:4108` | 1360×136 | bottom | — | `assets/footer-watermark.svg` | Quanta System large outline vector |
| Partner Logos | `47:3906` | 93×37 | bottom | — | `assets/footer-partner.svg` | gasfort & partners SVG |
