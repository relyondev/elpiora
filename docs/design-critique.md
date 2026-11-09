# Design Critique: ELPIORA multi-page site (v2)

Reviewed against the five page mockups (`docs/brand/mockup-0*.webp`) and `docs/brand/ELPIORA_BRAND_GUIDELINES.md`, using desktop (1440px) and mobile (390px) renders of the production build. Stage: working prototype. Real copy, illustrated placeholder imagery, pending business facts.

### Overall impression
The site now has the structure of the mockups: a sticky nav with a Layanan dropdown, banner heroes, service grids, a process strip, home visit, testimonials, a booking page, and a deep-teal footer. It also keeps v1's editorial typography. The biggest gap against the mockups is still **photography**. The mockups are carried by warm photos of therapists, and until real images replace the placeholder plates, pages read calmer and emptier than the references.

### Deliberate departures from the mockups
| Mockup shows | Built instead | Why |
|---|---|---|
| Phone `+62 812-3456-7890`, address "Ruko The Breeze BSD…", `care@elpiora.id`, opening hours, map pin | "Menunggu konfirmasi" states driven by `siteConfig` | These are AI-generated placeholder facts. Publishing them would send patients to a wrong number or address. |
| "10+ Years", "5,000+ Patients", "8 Service Types" | Removed. Brand traits from the identity slides are used instead | Unverifiable statistics (brand guidelines §8) |
| Named testimonials with star ratings | Consent-based testimonial component with an honest empty state | No fabricated reviews |
| Named therapists (e.g., "Dr. Rika Andini, PT, DPT") | Team section with placeholder frames | No invented people or credentials |
| Home visit coverage "BSD, Tangerang Selatan, Jakarta" | Coverage list in config, empty until confirmed | Brief: don't claim service areas until verified |
| English copy | Bahasa Indonesia (service names stay in English) | Original brief: `id-ID` |
| Neurological Rehab, Home Visit, programmes, corporate | Included, visibly flagged "menunggu konfirmasi" | Present in the mockups, but availability isn't confirmed |

### Usability
| Finding | Severity | Status / Recommendation |
|---|---|---|
| Every "book" CTA used to depend on an unconfigured WhatsApp number | 🔴 Critical (v1) | **Fixed:** every CTA leads to the on-site form (`/kontak#formulir`). A service link pre-selects that service. |
| Form submission can't reach anyone until a channel is set | 🟡 Moderate | **By design:** honest "data not sent" state. Configure `BOOKING_WEBHOOK_URL` and/or `NEXT_PUBLIC_WHATSAPP_NUMBER`. |
| Seven nav items plus the CTA don't fit at 1024–1279px | 🟡 Moderate | **Handled:** the full nav shows from 1280px; below that, the menu button. |
| The emergency disclaimer could be missed | 🟢 Minor | **Done:** a "Butuh penanganan segera?" card next to the form points to 119 / IGD. |
| Many "menunggu konfirmasi" badges on /layanan | 🟢 Minor | Remove them as each service is confirmed (`availability: "listed"`). |

### Visual hierarchy
- **What draws the eye first:** the serif H1 with its italic accent, matching the mockups' typographic hero.
- **Reading flow:** banner hero → numbered sections (01, 02, …) with gold hairlines → one deep-teal process band per page as an anchor → closing CTA panel → deep footer.
- **Font colour refinement (requested):** headings stay deep `#123F43`. Italic accents move to a brighter teal `#268A92`, closer to the mockups and used only at display sizes. Body copy is a neutral slate `#33484A`, secondary text a grey `#52676A`, and eyebrows deep ink `#1E4F52`. All meet AA (see `docs/design-system.md`).

### Consistency
| Element | Issue | Status |
|---|---|---|
| Inner-page heroes | Needed one shared pattern | **Done:** `PageHero` on all six inner pages. |
| Placeholder captions | Clipped by curved image masks | **Fixed:** caption position is configurable per plate. |
| Home service cards | Small cards looked empty next to the feature card | **Fixed:** descriptions added (clamped to 3 lines). |
| Form field borders | `#E8EDE9` was too faint (1.19:1) | **Fixed:** new `field` token `#7C9495` (3.22:1). |

### What works well
- One booking path site-wide, with service pre-selection, a summary that doubles as the WhatsApp message, and three honest delivery outcomes.
- Mockup structure without mockup fiction: every fact traces back to `src/config/site.ts`.
- A cohesive rhythm across pages: alternating surface, mint and deep-teal sections, plus reused components (`CareJourney`, `Faq`, `IconCards`, `FinalCta`).

### Priority recommendations
1. **Real photography and the official logo SVG.** Each image slot includes a shot brief, and this closes most of the gap with the mockups.
2. **Connect a booking channel** (webhook and/or WhatsApp) and test one real submission end to end.
3. **Confirm the facts:** services, home visit areas, contact details, hours, team. Then switch off `showPlaceholderMarkers`.
