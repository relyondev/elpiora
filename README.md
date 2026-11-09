# ELPIORA — Physiotherapy and Wellness

*restore function · renew life*

Single-page marketing site for ELPIORA, written in Bahasa Indonesia (`id-ID`). It introduces the clinic and routes enquiries to WhatsApp or a booking link, without medical overclaims or invented facts.

**Stack:** Next.js 15 (App Router, static export-compatible) · TypeScript · Tailwind CSS v4 · `next/font` (Cormorant Garamond, Montserrat, Satisfy). No animation library: motion is CSS plus one small IntersectionObserver.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build && npm start
```

## Configure before launch

All business facts live in **`src/config/site.ts`**. Search the repo for `TODO_CONFIRM`.

Environment variables (set in Vercel → Project → Settings → Environment Variables, or `.env.local`):

| Variable | Example | Effect |
|---|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `6281234567890` (international digits) | Activates every booking CTA as a `wa.me` link with a prefilled message |
| `NEXT_PUBLIC_BOOKING_URL` | `https://…` | Used when no WhatsApp number is set |
| `NEXT_PUBLIC_SITE_URL` | `https://elpiora.id` | Canonical URL, Open Graph URL, sitemap, robots |

Without a booking channel, CTAs scroll to the contact section, which says the channel is being prepared. The final CTA is shown disabled with an explanation, so there are no dead links.

### Placeholder checklist
| Item | Where | Current state |
|---|---|---|
| Official logo SVG (primary + reversed) | `public/brand/`, `siteConfig.brand.logo` | Temporary typeset text "ELPIORA". **Not** the logo. |
| Favicon | `src/app/icon.svg` | Neutral temporary icon |
| Photography (hero, about, 3 × clinic) | `public/images/`, `siteConfig.images` | Illustrated placeholder plates, each with a shot brief |
| WhatsApp / phone / email | env + `siteConfig.contact` | Not set |
| Address, city, maps link, hours, access/parking | `siteConfig.location` | Not set; no branch or area (BSD, Tangerang Selatan, Jakarta) is claimed |
| Service list & wording | `siteConfig.services` | From the brief; **Dry Needling** flagged unconfirmed |
| Team (names, verified credentials, portraits, consent) | `siteConfig.team` | Empty, so the section is hidden |
| Social accounts | `siteConfig.social` | Empty |
| OG image (1200×630) | `public/og.jpg` + `layout.tsx` | Not set |
| Structured data | `siteConfig.structuredDataVerified` | `false`, so no JSON-LD is published |

When everything is confirmed, set `showPlaceholderMarkers: false`.

## Project structure

```
src/
  app/            layout (fonts, metadata), page, robots, sitemap, icon, globals.css (design tokens)
  config/site.ts  every business fact + TODO_CONFIRM markers
  lib/            booking link resolution, structured data builder
  components/     Header, Hero, ValueProps, ServiceGrid, CareJourney, About,
                  Location, Team, Faq, FinalCta, Footer
  components/ui/  Button, Icon, Logo, ImagePlate, Ornaments, Reveal, SectionIntro, CurrentYear
docs/
  brand/          brand guidelines + reference slides (style references only, not clinic photos)
  design-critique.md, research-plan.md, screenshots/
```

## Design system

Tokens are defined once in `src/app/globals.css` and exposed to Tailwind (`bg-deep`, `text-teal-text`, `bg-mint-100`, …). Values come from the brand guidelines. Two **derived** tokens exist only for WCAG AA:

| Token | Value | Why |
|---|---|---|
| `teal-text` | `#1D7279` | Brand teal `#2C98A0` is 3.27:1 on the surface color, too low for small text. This is 5.35:1 on surface and 4.82:1 on pale mint. |
| `muted-text` | `#3D6F6D` | `#4A7E7C` is 4.38:1 on the surface color. This is 5.41:1. |

Gold `#CBAF7F` is decorative, and appears as text only on deep teal (5.49:1).

## Verification (actually run)

- `npm run lint`, `npx tsc --noEmit` and `npm run build` all pass.
- axe-core 4.10 (WCAG 2.0/2.1/2.2 A+AA + best-practice): **0 violations** at 1440px and 390px.
- No horizontal overflow at 1440px or 390px.
- Configured-state build (test WhatsApp number + site URL): `wa.me` links with prefilled messages, canonical, sitemap and robots verified. JSON-LD correctly withheld.
- Lighthouse was **not** run.

Analytics hooks are **not** implemented. If needed, add click tracking on the CTA components in `src/components/ui/Button.tsx`.

## Deploy

Push to GitHub and import the repo in Vercel (framework auto-detected), or run `vercel deploy`. Set the environment variables above for Production.
