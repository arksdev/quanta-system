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
