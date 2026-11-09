## Accessibility Audit: ELPIORA multi-page site (7 routes + booking form)
**Standard:** WCAG 2.2 AA | **Date:** 2026-11-09 | **Build:** production (`next build && next start`)

### Method
1. **Automated:** axe-core 4.10.2 (wcag2a, wcag2aa, wcag21aa, wcag22aa, best-practice) on all 7 routes at 1440px and 390px, with reduced motion emulated.
2. **Keyboard:** Playwright-driven checks of the skip link, header dropdown, mobile menu, FAQ accordion and booking form.
3. **Contrast:** computed WCAG ratios for every text/background token pair.
4. **Reflow:** 640px CSS viewport (≈200% zoom at 1280px) on `/`, `/kontak`, `/layanan`.
5. **Not done:** manual screen-reader passes (VoiceOver/NVDA) and real-device testing. These are recommended before launch.

### Summary
**Issues found:** 3 | **Fixed:** 3 | **Open:** 0 from automated and keyboard testing. Final axe run: **0 violations on 14/14 page × viewport combinations.**

### Findings (all fixed)
| # | Issue | WCAG | Severity | Fix |
|---|---|---|---|---|
| 1 | Form field borders `#E8EDE9` on white = 1.19:1 | 1.4.11 Non-text contrast | 🟡 Major | New `--elpiora-field-border` `#7C9495` (3.22:1) |
| 2 | Contact `<aside>` nested inside `<main>` | best-practice (landmarks) | 🟢 Minor | Changed to a plain `<div>` |
| 3 | Teal small text on pale mint `#217E85` = 4.1:1 (v1) | 1.4.3 Contrast | 🟡 Major | Derived token `#1D7279` (4.82:1) |

### Color contrast check
| Element | Foreground | Background | Ratio | Required | Pass |
|---|---|---|---|---|---|
| Body text | `#33484A` | `#F7FAF8` / `#DFF2E7` | 9.22 / 8.30 | 4.5 | ✅ |
| Secondary text | `#52676A` | `#F7FAF8` / `#DFF2E7` | 5.70 / 5.13 | 4.5 | ✅ |
| Headings | `#123F43` | `#F7FAF8` | 10.99 | 4.5 | ✅ |
| Eyebrow labels | `#1E4F52` | `#F7FAF8` | 8.71 | 4.5 | ✅ |
| Italic accent (≥24px only) | `#268A92` | `#F7FAF8` / `#DFF2E7` | 3.89 / 3.51 | 3.0 (large) | ✅ |
| Small teal links/icons | `#1D7279` | `#FFFFFF` / `#DFF2E7` | 5.62 / 4.82 | 4.5 | ✅ |
| Error text | `#A63A2B` | `#FFFFFF` | 6.44 | 4.5 | ✅ |
| Gold on deep teal | `#CBAF7F` | `#123F43` | 5.49 | 4.5 | ✅ |
| Mint text on deep teal | `#BBDCC6` | `#123F43` | 7.79 | 4.5 | ✅ |
| Primary button | `#FFFFFF` | `#123F43` | 11.55 | 4.5 | ✅ |
| Field boundary | `#7C9495` | `#FFFFFF` | 3.22 | 3.0 | ✅ |
| Focus ring | `#1D7279` | `#FFFFFF` | 5.62 | 3.0 | ✅ |

### Keyboard navigation (verified)
| Element | Tab order | Enter/Space | Escape | Notes |
|---|---|---|---|---|
| Skip link | 1st | Jumps to `#konten` | — | Visible on focus |
| Layanan dropdown | In nav order | Opens/closes (`aria-expanded`) | Closes, focus returns to button | Tab moves into the menu items |
| Mobile menu | Button | Opens; focus on first link | Closes, focus returns to button | Tab is trapped inside while open; scroll locked |
| FAQ items | Sequential | Toggles (`aria-expanded`, `aria-controls`) | — | Collapsed answers are `inert` |
| Booking form | Logical, top to bottom | Submit | — | Invalid submit focuses the first invalid field; result panel receives focus |

### Screen reader (by markup inspection, not tested with AT)
| Element | Expected announcement |
|---|---|
| Form errors | Field `aria-invalid` + `aria-describedby` error text. Summary `role="alert"` ("Ada 5 isian yang perlu diperbaiki.") |
| Submit result | `role="status"`, `aria-live="polite"`, focused |
| Placeholder images | `role="img"` "Placeholder foto: …" |
| External links | "(membuka di tab baru)" appended |
| Required fields | Native `required`; the visual `*` is `aria-hidden`, and "(opsional)" marks optional fields |

### Other checks
- **Reflow (1.4.10):** no horizontal overflow at 640px or 390px.
- **Target size (2.5.8):** no interactive element under 44px tall on mobile `/kontak` (checkboxes and radios sit inside ≥44px labels).
- **Motion (2.3.3):** `prefers-reduced-motion` removes reveals, line animations and smooth scroll.
- **Language:** `<html lang="id-ID">`.

### Priority recommendations
1. Run VoiceOver (iOS) and NVDA (Windows) passes on the booking form before launch.
2. When real photos arrive, write specific alt text. The current alt strings describe the intended shot.
3. Retest contrast if official brand colours differ from the reference-derived palette.
