# ELPIORA — Site Structure & Routing (v4, Content Blueprint)

English URL slugs, Bahasa Indonesia copy. Pages that need real data stay gated (404, unlinked) until it exists.

```
/                              Home
/about                         About ELPIORA
/about/our-approach            Our Approach
/about/our-team                GATED (needs team data)
/services                      All services
/services/[slug]               musculoskeletal-physiotherapy · sports-rehabilitation · workplace-ergonomics
                               dry-needling (unconfirmed) · wellness-movement · neurological-rehabilitation (unconfirmed)
/conditions                    Conditions hub
/conditions/[slug]             back-neck-pain · stroke-rehabilitation · knee-joint-pain · sports-injuries
/programs/[slug]               post-operative-rehabilitation · healthy-aging
/home-visit
/corporate-wellness            lead form -> /api/enquiry
/event-physiotherapy           lead form -> /api/enquiry
/booking                       booking form -> /api/booking
/contact  /faq  /pricing(noindex)
/privacy-policy  /terms  /medical-disclaimer
/facilities  /patient-stories  /education     GATED
```

## Navigation
Home · About ▾ (About ELPIORA, Our Approach, Our Team if data) · Services ▾ (All + 6) · Conditions · Home Visit · Corporate & Events ▾ · Education (if published) · CTA "Konsultasi & Booking". Full bar from 1280px, mobile menu below. A sticky mobile CTA (WhatsApp if configured, Booking) appears after the banner and hides on `/booking`, `/contact` and near the footer.

## Redirects
`/tentang→/about`, `/layanan→/services`, `/layanan/pain-movement→/services/musculoskeletal-physiotherapy`, `/layanan/home-visit→/home-visit`, `/layanan/:slug→/services/:slug`, `/kontak→/contact`, `/fasilitas→/facilities`, `/testimoni→/patient-stories`.

## Content principles
No em dashes. No invented prices, statistics, staff or testimonials. Unconfirmed facts live in `src/config/site.ts` (`TODO_CONFIRM`). Page copy in `src/content/details.ts`, `faq.tsx`, `education.ts`.
