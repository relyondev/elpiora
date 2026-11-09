# ELPIORA — Physiotherapy and Wellness

*restore function · renew life*

A multi-page website in Bahasa Indonesia (`id-ID`) with an on-site booking form. The layout follows the page mockups in `docs/brand/mockup-0*.webp`; facts come only from `src/config/site.ts`.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · `next/font` (EB Garamond Bold headlines, Montserrat, Kaushan Script). No UI or animation libraries.

**Visual direction (v3):** the official ELPIORA logo plus the #ELPIORAINSIDE poster. See `docs/design-system.md`.

## Pages

Structure follows the Content Blueprint. URLs are English, copy is Bahasa Indonesia.

| Route | Content |
|---|---|
| `/` | Hero, benefits, condition navigator, 6 services, care steps, home visit, corporate and events, about teaser, FAQ, CTA |
| `/about`, `/about/our-approach` | Story, mission and vision (draft), values, approach |
| `/about/our-team` | **Gated**: 404 until `team` in `site.ts` has real entries |
| `/services`, `/services/[slug]` | Catalogue and 6 service detail pages (Dry Needling and Neurological flagged "menunggu konfirmasi") |
| `/conditions`, `/conditions/[slug]` | Condition guides with red-flag box |
| `/programs/[slug]` | Post-operative rehabilitation, healthy aging |
| `/home-visit` | Home Visit service, process, coverage, form entry |
| `/corporate-wellness`, `/event-physiotherapy` | Enquiry pages with lead form (`/api/enquiry`) |
| `/booking` | Booking form (`?service=&type=clinic\|home` preselects) |
| `/contact`, `/faq`, `/pricing` (noindex) | Contact, 18 Q&As in 4 groups, pricing placeholders |
| `/privacy-policy`, `/terms`, `/medical-disclaimer` | Legal pages (privacy and terms are drafts for legal review) |
| `/facilities`, `/patient-stories`, `/education` | **Gated**: 404 until `publish.*` flags / testimonials exist |

Old Indonesian URLs (`/tentang`, `/layanan/...`, `/kontak`, ...) redirect permanently. Full map: `docs/site-structure.md`.

CTAs use `bookingHref(service?, type?)` from `src/lib/booking.ts`.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint && npx tsc --noEmit
npm run build && npm start
```

## Booking form delivery

`/api/enquiry` (corporate and event forms) works the same way. The booking form validates on the client and again on the server (`src/app/api/booking/route.ts`). Where the request goes depends on configuration:

| Configured | Result shown to the visitor |
|---|---|
| `BOOKING_WEBHOOK_URL` | Request POSTed as JSON to your endpoint → "Permintaan terkirim" |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` (no webhook) | "Lanjutkan ke WhatsApp" with the request prefilled as a message |
| Neither | Honest notice: the channel isn't active and the data was **not** sent |

The webhook can be any HTTPS endpoint, for example Make/Zapier, Google Apps Script writing to a Sheet, a CRM, or a function that sends email. If `BOOKING_WEBHOOK_SECRET` is set, it's sent as the `X-Elpiora-Secret` header. The payload includes every field plus a readable `summary`. Request bodies are never logged.

## Environment variables

| Variable | Example | Effect |
|---|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `6281234567890` | WhatsApp links + form fallback (build time) |
| `BOOKING_WEBHOOK_URL` | `https://hook.example/…` | Server-side form delivery (runtime) |
| `BOOKING_WEBHOOK_SECRET` | random string | Shared secret header for the webhook |
| `NEXT_PUBLIC_SITE_URL` | `https://elpiora.id` | Canonical/OG URLs, sitemap, robots |

## Before launch: `TODO_CONFIRM`

All facts live in **`src/config/site.ts`**. The mockups' phone number, address, email, statistics, team and testimonials are AI-generated examples and were **not** copied.

| Item | Config | State |
|---|---|---|
| Official logo | `public/brand/*`, `brand.logo` | ✅ In use (from the supplied SVG and reversed artwork) |
| Favicon | `src/app/icon.png` | ✅ Cropped from the official logo (E + figure). Replace if an official icon file exists |
| Social accounts | `social` | Instagram + TikTok `@elpioraphysio` from the poster. Verify URLs; Facebook URL still needed |
| Photography (10 slots, with shot briefs) | `images` | Labelled placeholder plates |
| Phone, email, WhatsApp | `contact` + env | Not set |
| Address, maps, hours, access | `location` | Not set |
| Mission & vision | `brand.mission`, `brand.vision` | Draft, marked "menunggu persetujuan" |
| Neurological Rehab, Dry Needling, Home Visit | `services[].availability` | `unconfirmed` (badge shown) |
| Programmes, corporate | `programs` | Flagged pending |
| Home visit areas | `homeVisit` | Empty |
| Team / testimonials | `team`, `testimonials` | Empty (consent required) |
| Structured data | `structuredDataVerified` | `false` |

When all of these are resolved, set `showPlaceholderMarkers: false`.

## Docs
- `docs/design-system.md`: tokens (including the v2 font-colour change), components, booking form pattern
- `docs/accessibility-audit.md`: WCAG 2.2 AA audit and contrast table
- `docs/design-critique.md`: critique against the mockups, with deliberate departures
- `docs/research-plan.md`: user research plan
- `docs/brand/`: guidelines, identity slides, page mockups (style references only)
- `docs/screenshots/`: renders of every page

## Verification (actually run)
- `npm run lint`, `npx tsc --noEmit` and `npm run build` pass (7 static pages + 1 API route).
- axe-core 4.10 (WCAG 2.0–2.2 A/AA + best-practice): **0 violations** on 10 routes (incl. service detail pages and /faq) at 1440px and 390px.
- Keyboard: skip link, dropdown (Enter/Tab/Escape), mobile menu focus trap, accordion and form focus management.
- No horizontal overflow at 390px, 640px (≈200% zoom) or 1440px.
- Booking end to end (Playwright): validation, service pre-selection, and all three delivery outcomes, including a real webhook POST to a local receiver with the secret header.
- **Not run:** Lighthouse, screen readers, real devices.

## Deploy
Import the repo into Vercel and set the environment variables above. `/api/booking` runs as a Vercel Function; every other page is static.
