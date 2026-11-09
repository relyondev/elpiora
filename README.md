# ELPIORA — Physiotherapy and Wellness

*restore function · renew life*

A multi-page website in Bahasa Indonesia (`id-ID`) with an on-site booking form. The layout follows the page mockups in `docs/brand/mockup-0*.webp`; facts come only from `src/config/site.ts`.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · `next/font` (Cormorant Garamond, Montserrat, Satisfy). No UI or animation libraries.

## Pages

| Route | Content |
|---|---|
| `/` Beranda | Hero, approach, services, care journey, home visit + testimonials, FAQ, CTA |
| `/tentang` | Story, mission & vision (draft), brand traits, why ELPIORA, team, testimonials |
| `/layanan` | Full service catalogue (anchors `#<service-id>`), care process, programmes, FAQ |
| `/home-visit` | Who it's for, needs, process, benefits, coverage area, FAQ |
| `/fasilitas` | Atmosphere mosaic, spaces, location & contact |
| `/testimoni` | Consented testimonials + publishing policy |
| `/kontak` | **Booking form** (`#formulir`), contact card, booking steps, FAQ, corporate enquiry |

Every "Buat Janji" CTA goes to `/kontak#formulir`. Service links use `/kontak?layanan=<id>#formulir` to pre-select the service.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint && npx tsc --noEmit
npm run build && npm start
```

## Booking form delivery

The form validates on the client and again on the server (`src/app/api/booking/route.ts`). Where the request goes depends on configuration:

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
| Official logo SVG + favicon | `brand.logo`, `src/app/icon.svg` | Temporary text / neutral icon |
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
- axe-core 4.10 (WCAG 2.0–2.2 A/AA + best-practice): **0 violations** on all 7 pages at 1440px and 390px.
- Keyboard: skip link, dropdown (Enter/Tab/Escape), mobile menu focus trap, accordion and form focus management.
- No horizontal overflow at 390px, 640px (≈200% zoom) or 1440px.
- Booking end to end (Playwright): validation, service pre-selection, and all three delivery outcomes, including a real webhook POST to a local receiver with the secret header.
- **Not run:** Lighthouse, screen readers, real devices.

## Deploy
Import the repo into Vercel and set the environment variables above. `/api/booking` runs as a Vercel Function; every other page is static.
