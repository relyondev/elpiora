# ELPIORA Design System (v3.1)

> **v3.1 (banner reference + Garamond headlines):** every page now opens with the same **Banner** (rounded deep-teal gradient panel, floating header bar, glass information cards), following the supplied reference image. Headlines use **EB Garamond Bold**.
>
> **Font note:** "Apple Garamond" is Apple's proprietary typeface and is not licensed for web use. EB Garamond (open licence, Google Fonts) is the closest available match. To use a licensed Apple or ITC Garamond webfont instead, change only `--font-garamond` in `src/app/layout.tsx`.

## v3.1 banner
| Piece | Where | Notes |
|---|---|---|
| `Banner` | `src/components/Banner.tsx` | Rounded panel (28px mobile, 36px desktop) inset 12px from the viewport; background `--banner-bg`: deep `#062F34 → #0B4248 → #12636F → #1B8590` with turquoise light behind the visual |
| `GlassCard` | same file | 80% deep-teal fill, 1px white/20 border, background blur (the only blurred element per banner). Holds one short true statement, never a figure. White text keeps at least 4.5:1 even over the light image plate |
| Header bar | `Header.tsx` | Floating inside the banner: 45% deep tint with the reversed logo and light links, turning into a solid light bar with the full-colour logo after 24px of scroll or when the mobile menu opens |
| Banner text | `globals.css` `.banner.on-dark` | White H1/H2, gold-light emphasis, mint-100 lead |
| Buttons in banners | `Button.tsx` | `champagne` (primary) and `secondary-on-dark` (outline) |
| Benefits strip | `Hero.tsx` | Takes the reference's logo-strip position. It carries the poster's four benefit lines because no real partner logos exist |

Contrast was measured on the rendered pixels under every text box (text hidden, background sampled, worst pixel against the text colour): **91 text boxes on 6 banner views, 0 below WCAG AA**.

## v3.1 typography (supersedes the v3 table)
| Role | Font | Notes |
|---|---|---|
| H1 / H2 / H3, card titles | **EB Garamond 700** | Upright bold. The emphasis phrase (`.accent`) is the same face in teal, or gold-light on dark |
| Body / UI | Montserrat | |
| Tagline | Kaushan Script | Tagline only |


> **v3 (official assets):** visual direction now follows the **official logo** (`docs/brand/LOGO-ELPIORA-4-official.svg`, `logo-official-reversed.webp`) and the **#ELPIORAINSIDE poster** (`docs/brand/poster-elpiora-inside.webp`). Layout and component positions are unchanged from v2.

## v3 tokens (supersede the v2 table below where they differ)

| Tailwind | Value | Source | Use | Contrast |
|---|---|---|---|---|
| `deep` | `#0B4248` | Poster headline "Move Better." | Headings, primary buttons, dark bands, lead copy | 10.59:1 on surface |
| `accent` / `.accent` | `#0D899D` | Poster "Live Better." | Bold-italic display emphasis, ≥24px only | 3.93:1 surface, 3.54:1 mint (AA large) |
| `teal-text` | `#146F7D` | Poster bold teal | Small links, icons, `<strong>` in lead | 5.55:1 |
| `body` | `#4E6466` | Poster grey list | Body copy | 5.99:1 surface, 5.39:1 mint |
| `muted-text` | `#5B6E70` | — | Captions, meta | 5.11:1 |
| `gold` / `gold-light` / gold-deep | `#E3B36F` / `#EEBF7B` / `#D29C52` | Official logo gold | Hairlines, rules, ornaments; text only on `deep` | — |
| `gold-text` | `#8C6428` | Poster hashtag pill (darkened) | Pill text on cream | 5.04:1 |
| amber gradient | `#FFD54A → #F5B50A` | Poster icon circles | `.icon-amber` (decorative, white glyph) | n/a (decorative) |
| champagne gradient | `#F3D9B1 → #D9B07A` + `cocoa #3A2E1F` | Poster "Baca Selengkapnya" | `variant="champagne"` secondary button | 7.2:1+ |
| surface | `#F8FBFA` | Poster background | Page background | — |

## v3 typography
| Role | Font | Notes |
|---|---|---|
| Display / H1 / H2 | **Playfair Display** 600 *italic* | Matches the poster headline; `.accent` = 700 italic in `#0D899D` |
| H3 | Playfair Display 600 upright | |
| Body / UI | **Montserrat** | Lead copy 500 in deep teal, like the poster |
| Script | **Kaushan Script** | Brush script like the poster's "Restore Movement"; tagline only, rotated −2° to −3° with a gold `BrushUnderline` |
| Logotype | Official image only | Never typeset |

## v3 objects
- `.pill-hashtag`: cream pill with gold border, uppercase gold-text (hero and page eyebrows), like the poster's `#ELPIORAINSIDE`.
- `.pill-teal`: teal gradient pill with white text, like the poster's `MEETELPIORA`.
- `.icon-amber`: amber gradient circle with a white line icon (benefit lists, service icons).
- `.gold-rule`: short gold gradient bar under headlines.
- `WaveRibbons`: translucent mint/teal waves with gold hairlines (hero, page heroes, CTA, footer).
- `BrushUnderline`: gold brush stroke under the script tagline.
- `Logo`: `on-light` (full colour) or `on-dark` (reversed); `variant="full"` includes the tagline.

---

## v2 reference (historical)

Tokens live in `src/app/globals.css` (`:root` → Tailwind `@theme`). Components live in `src/components`. Palette values come from the brand guidelines (reference-derived, pending the official kit). Values marked *derived* exist to meet WCAG AA.

## Colour tokens

| Tailwind | CSS var | Value | Use |
|---|---|---|---|
| `deep` | `--elpiora-deep` | `#123F43` | Headings, primary buttons, dark bands |
| `ink` | `--elpiora-ink` | `#1E4F52` | Eyebrow labels, button hover |
| `body` | `--elpiora-body` | `#33484A` | **v2** body copy (neutral slate) |
| `muted-text` | `--elpiora-muted-text` | `#52676A` | **v2** secondary copy, captions |
| `accent` / `.accent` | `--elpiora-accent` | `#268A92` | **v2** italic serif accents, ≥24px only |
| `teal-text` | `--elpiora-teal-text` | `#1D7279` | *derived* small teal text, icons, focus ring |
| `teal-500/400/300` | | `#2C98A0` `#389FA6` `#5FB7B8` | Brand teals for decoration and gradients, not small text |
| `mint-100/200`, `sage` | | `#DFF2E7` `#BBDCC6` `#8DB9A3` | Section and panel backgrounds |
| `gold` | `--elpiora-gold-400` | `#CBAF7F` | Hairlines and ornaments; text only on `deep` |
| `surface`, `paper`, `line` | | `#F7FAF8` `#FFFFFF` `#E8EDE9` | Page, cards, dividers |
| `field` | `--elpiora-field-border` | `#7C9495` | *derived* form field borders (3.22:1) |
| `error` | `--elpiora-error` | `#A63A2B` | Validation only (not a brand colour) |

### v2 font-colour change (from the page mockups)
| Role | v1 | v2 |
|---|---|---|
| Body text | `#1E4F52` (teal ink) | `#33484A` (neutral slate) |
| Secondary text | `#3D6F6D` | `#52676A` |
| Italic accent | `#1D7279` | `#268A92` (brighter, closer to brand teal) |
| Eyebrow | `#1D7279` | `#1E4F52` |

## Typography
- **Serif:** Cormorant Garamond 400/500/600 + italic. Classes `t-display`, `t-h2`, `t-h3`; `.accent` for the italic phrase.
- **Sans:** Montserrat for body, UI and labels (`t-eyebrow`, `t-lead`).
- **Script:** Satisfy, only for the tagline `restore function · renew life`.

## Components
| Component | Purpose | Notes |
|---|---|---|
| `Header` | Sticky nav, Layanan dropdown, CTA | Full nav ≥1280px; mobile menu with focus trap |
| `PageHero` | Inner-page banner | Title + lead + actions + bleeding image plate |
| `Hero` | Home hero | Line-rise headline, arched plate, tagline pill |
| `SectionIntro` | "01 — EYEBROW" + heading | `as="h1"` available |
| `ServicePreview` / `ServiceCatalog` | Home strip / full list | Unconfirmed services get dashed cards + badge |
| `CareJourney` | Deep-teal numbered steps | Props: `steps`, `title`, `intro`; 3 or 4 columns |
| `IconCards` | Value, benefit or audience cards | 3/4/5 columns |
| `Faq` | Accessible accordion | Content per page in `src/content/faq.tsx` |
| `TestimonialList` | Consented quotes only | Honest empty state |
| `Team` | Real team or placeholder | `showPlaceholder` on /tentang only |
| `ContactCard`, `ClinicMosaic` | Contact facts, atmosphere | Pending states from config |
| `BookingForm` | Appointment request | See below |
| `FinalCta` | Closing deep panel | Props for copy and links |
| `ImagePlate` | Photo or labelled placeholder | `captionClassName` positions the placeholder label |

## Pattern: booking form
- **Fields:** name*, phone/WhatsApp*, email (optional), service* (pre-selectable via `?layanan=<id>`), session location* (clinic / home visit), date* (≥ today, WIB), time*, notes (≤500), consent*, plus a honeypot.
- **Validation:** shared `src/lib/booking-request.ts`, run on the client and again in `/api/booking`.
- **Outcomes:**
  - Webhook delivered → "Permintaan terkirim".
  - WhatsApp configured → "Lanjutkan ke WhatsApp" with the prefilled summary.
  - Neither → "Kanal pemesanan belum aktif. Data tidak terkirim."
- **States:** default, focus (teal ring), error (border + message + summary alert), submitting ("Mengirim…"), result.
