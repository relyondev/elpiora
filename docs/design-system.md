# ELPIORA Design System (v2)

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
