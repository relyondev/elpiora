# ELPIORA — Site Structure & Routing (v3)

## Step 1 — Analysis
The original single page held hero, approach, services, process, about, location, FAQ and CTA in one scroll. v2 split it into seven routes. v3 completes the structure:
- **A dedicated page per service** (`/layanan/[id]`), so each service has room for long-form content and its own FAQ.
- **A standalone `/faq`**, grouped by topic.
- **Expanded content on every page:** educational sections, checklists and commitments.
- **A universal navbar and footer** that link every page.

## Routes

```
/                         Beranda       hero · approach · services · when to consult · care journey · home visit + testimonials · FAQ · CTA
/tentang                  Tentang       hero · story · mission/vision · 5 brand traits · philosophy (tagline) · why ELPIORA · commitments · team · testimonials · CTA
/layanan                  Layanan       hero · catalogue (7) · how to choose · care process · programmes · FAQ · CTA
/layanan/[id]             (7 pages)     hero · breadcrumb · overview · suitable for / goals · session may include · programme stages · FAQ · related services · CTA
  ├─ pain-movement
  ├─ sports-rehabilitation
  ├─ workplace-ergonomics
  ├─ wellness-movement
  ├─ neurological-rehabilitation   (unconfirmed)
  ├─ dry-needling                  (unconfirmed)
  └─ home-visit                    (unconfirmed)
/home-visit               Home Visit    hero · who it's for · needs · process · benefits · coverage · preparation · FAQ · CTA
/fasilitas                Fasilitas     hero · atmosphere mosaic · spaces · first-visit checklist · location & contact · CTA
/testimoni                Testimoni     hero · consented testimonials · publishing policy · share your story · CTA
/faq                      FAQ           hero · topic index · 6 topic sections (24 Q&As) · CTA
/kontak                   Kontak        hero · booking form + contact card + emergency note · booking steps · FAQ · corporate enquiry
/api/booking              (POST)        booking request → webhook / WhatsApp fallback
/sitemap.xml /robots.txt  (when NEXT_PUBLIC_SITE_URL is set)
```

## Navigation
- **Navbar:** Beranda · Tentang · Layanan ▾ (all 7 services) · Home Visit · Fasilitas · Testimoni · FAQ · Kontak, plus the "Buat Janji" button. The full bar shows from 1280px; below that, a mobile menu.
- **Footer:** official reversed logo, tagline, CTA · Jelajahi (all pages) · Layanan (all 7 service pages) · Kontak & Lokasi · Ikuti Kami (Instagram, TikTok).
- **Breadcrumbs** on service detail pages.

## Directory

```
src/
  app/
    layout.tsx               fonts, metadata, Header + Footer
    page.tsx                 /
    tentang/ layanan/ layanan/[id]/ home-visit/ fasilitas/ testimoni/ faq/ kontak/
    api/booking/route.ts
    not-found.tsx  sitemap.ts  robots.ts  icon.png  apple-icon.png
  config/site.ts             every business fact (TODO_CONFIRM)
  content/
    services.ts              long-form copy per service
    faq.tsx                  per-page FAQs + categorised /faq
  components/                page sections (Hero, PageHero, ServiceGrid, CareJourney, ContentSections, Faq, …)
  components/ui/             Logo, Button, Icon, Ornaments, ImagePlate, Reveal, SectionIntro
  lib/                       booking, booking-request (validation), meta, structured-data
public/brand/                official logo files (web-optimised)
docs/brand/                  originals: logo SVG, reversed logo, poster, guidelines, mockups
```

## Content principles
All copy is Bahasa Indonesia and editable in `src/content/*` and `src/config/site.ts`.
- **Wording:** general and educational ("dapat", "umumnya", "sesuai kebutuhan"). No diagnoses, outcome promises, prices, session counts, statistics, invented staff or invented testimonials.
- **Unconfirmed items** stay visible but flagged "menunggu konfirmasi".
