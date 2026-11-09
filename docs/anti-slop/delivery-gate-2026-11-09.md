# antislop Delivery Gate: ELPIORA website

Skill: [miqdadbadjuber/anti-slop](https://github.com/miqdadbadjuber/anti-slop), mode **DURING** (session choice, 2026-11-09).
Build: `next build` (production), served with `next start`, checked with Playwright and axe-core 4.10.

## Design Read (R-37, Part 3)

> Reading this as: a multi-page physiotherapy clinic website for adults in Indonesia looking for care, in a warm-editorial style from the official ELPIORA logo and the #ELPIORAINSIDE poster. Dial **ENERGY 2 / RHYTHM 2 / MOTION 2**.

- **Direction sources:** `docs/brand/ELPIORA_BRAND_GUIDELINES.md`, the official logo files, and `docs/brand/poster-elpiora-inside.webp`.
- **ENERGY 2:** a confident serif voice and gold accents, but calm, because the audience may be in pain or anxious.
- **RHYTHM 2:** one deep-teal anchor band per page, a light/mint alternation, and a few deliberate breaks (staggered value columns, a feature service card).
- **MOTION 2:** a one-time hero entrance and a gold line that draws itself, plus short scroll reveals. Nothing loops. Everything stops under `prefers-reduced-motion`.

## Decision log (R-31: one line each)

| Decision | Reason |
|---|---|
| Palette: deep teal `#0B4248`, accent teal `#0D899D`, logo gold | Sampled from the official logo and poster. Teal is the brand; gold is its single accent. |
| Amber icon circles and champagne secondary button | Objects taken directly from the owner's poster, used as gold-family variants rather than new colours. |
| Playfair Display bold italic headlines | Matches the poster headline "Move Better. Live Better." |
| Montserrat body | Named in the brand guidelines and used for the poster body copy. Highly legible for Indonesian text. |
| Kaushan Script, tagline only | The closest open brush script to the poster's "Restore Movement". Kept to the tagline so it stays an accent. |
| Light theme only (R-21) | The guidelines specify ivory and pale-mint pages with deep-teal anchor sections, for a calm healthcare context. No toggle is shipped, so nothing can break in a second theme. |
| Wave ribbons and gold hairlines (R-07 / R-01) | The poster's own bottom-wave motif and the identity gesture repeated across the site. Not a generic background pattern. |
| Mint radial field behind the hero image only | The guidelines call for a "calm mint overlay" on the hero. Every other radial orb was removed. |
| Ribbed lines inside the reception placeholder | They represent the ribbed teal wall from the brand photography. They appear only inside that one image placeholder. |
| Botanical line art | The guidelines list "fine botanical line illustrations" as a brand motif. |
| Custom line icons | Each icon is drawn for its physiotherapy topic (spine, runner, desk posture, lotus, home). No generic sparkle or magic glyphs. |
| Arrows only on the champagne button | This is the poster's "Baca Selengkapnya ›" gesture, so it marks the secondary path and appears nowhere else (R-08). |
| Pill buttons, cards at 22–28px, tags and inputs 6–12px | Pills follow the poster. Other radii vary by element role (R-11). |
| Identical cards in the service catalogue, topic grid and value grid | These are peers the reader compares side by side, so equal weight is intended. Hierarchy comes from the feature card on the home page and from dashed borders on unconfirmed services (R-14). |
| `#ELPIORAINSIDE` pill above the home H1 | The owner's campaign hashtag from the poster. It does not repeat the headline (R-09). Inner pages use a working breadcrumb instead. |
| Shadows only on the hero image, the tagline card and the sticky header | Each marks a real overlap or layer (R-12). |
| Header blur | The only glass element. It keeps the sticky nav readable over content (R-10). |

## Owner direction that collides with a rule (R-37: please decide)

1. **About headline** "Bukan Sekadar Mengurangi Keluhan. Kami Mendukung Anda Kembali Bergerak." comes from the original brief, but it is the *negative parallelism* pattern from the copywriting rules ("not just X, Y"). **Kept as written, pending your decision.** If you drop it, a suggested replacement is "Kami Mendampingi Anda Kembali Bergerak."
2. **Hero benefit "Mengurangi nyeri aktivitas"** is your own poster claim. Kept as owner messaging; it is not shown as a statistic.

## Changes made in this pass

- **R-02:** removed every em dash from visible text and metadata. There were 60 across copy, titles and alt text, each rewritten by hand.
- **R-18 / R-38:** the testimonials page, nav item, home column, About section and sitemap entry now appear only when `siteConfig.testimonials` has real, consented entries. With no data, `/testimoni` returns 404 and is linked nowhere. The empty team frames were removed.
- **R-36:** removed the "praktik berbasis bukti" commitment, because the site has no evidence to show for it.
- **R-39:** `cursor: pointer` on every enabled control and `not-allowed` on disabled ones, plus a pressed state. The infinite ambient drift animation was removed.
- **R-08:** arrows removed from primary buttons, text links and cards.
- **R-09:** inner-page pills that repeated the H1 were replaced with a working breadcrumb. Status tags are now plain labels without a decorative dot.
- **R-06:** wide-tracked uppercase labels are now sentence case (section labels, footer headings, card sub-labels). The "01 / 02" section counters were removed.
- **R-05:** the numbered-circle process now appears on Beranda and Home Visit only. It was removed from Layanan and Kontak, where it duplicated Beranda. Service pages show stages as a plain ordered list.
- **R-13 / R-10 / R-01 / R-07:** removed the glow on icon circles, the blur on two non-nav elements, three radial orbs, and the vertical line pattern in the dark band.
- **R-15:** "Jelajahi Layanan", "Selengkapnya", "Pelajari …" and "Lihat Topik" became specific labels ("Lihat Daftar Layanan", "Detail layanan", "Cara Kerja Home Visit", "Pilih Topik Pertanyaan").
- **Copy:** replaced two formula headlines of mine ("Tubuh Memberi Tanda, …" and "Dua Langkah, Satu Tujuan.") with plain statements.

## Block 1: Hard Gate (all must be "no")

| Rule | Result | Evidence |
|---|---|---|
| R-02 em dash | PASS | `innerText` scan of 14 routes × 2 viewports found 0 em dashes. The only ones left are in source comments. |
| R-03 mobile | PASS | 390px: horizontal overflow 0 on all 14 routes. All tap targets ≥44px (checked earlier on `/kontak`). |
| R-17 statistics | PASS | No numbers or statistics anywhere. The mockup figures (10+, 5,000+) were never used. |
| R-18 testimonials | PASS | None exist, so the section, nav item and page are hidden (`/testimoni` returns 404; no nav or footer link). |
| R-23 assets | PASS | The logo files are the owner's. The favicon is cropped from the official logo, not drawn (flagged to the owner). Photos are labelled "Foto menyusul" placeholders. |
| R-24 navigation | PASS | Every nav and footer href was fetched: 35 internal targets returned 200 with existing anchors. Testimoni is conditional. |
| R-25 contrast | PASS | axe: 0 violations on 28 page × viewport runs. Token ratios are in `docs/design-system.md`. |
| R-26 interactive | PASS | Every control navigates, toggles or submits (click-through below). No dead buttons. |
| R-27 states | PASS | Form: validation error, submitting ("Mengirim…"), success, "channel not active", and network error. Testimonial list has an empty state. |
| R-28 FAQ | PASS | All 24 questions are specific to physiotherapy, booking, home visit, cost and data at ELPIORA. |
| R-32 keyboard | PASS | Dropdown: Enter opens, Tab enters, Esc closes and returns focus. Mobile menu traps focus and Esc closes it. Accordion toggles on Enter. 2px visible focus ring. |
| R-33 patch scripts | PASS | All changes are in source. The one-off copy-edit helper lives outside the repo; nothing patches CSS at runtime. |
| R-34 themes | PASS | Single light theme, with no toggle shipped. |
| R-35 run & click-through | PASS | Production build run; 0 console errors across 28 page loads; click-through recorded below. |
| R-36 claims | PASS | No compliance, performance or outcome claims. The "evidence-based" commitment was removed. |
| R-37 direction | PASS | Direction comes from the brand guidelines, logo and poster. The Design Read is declared above. |
| R-38 real content | PASS | Unknown facts show as "Menunggu konfirmasi". Mission and vision are labelled "Draf". |
| R-39 semantics & affordances | PASS | Pointer cursor on all controls (0 misses); every page has `lang`, a title, landmarks and one h1; no infinite animations; reduced motion honoured. |
| R-40 performance mechanisms | PASS | Logos are `next/image` with width and height. Hero images use `priority`, which sets fetchpriority high once real photos exist. No third-party scripts. Lighthouse and Web Vitals: **not measured**. |

## Block 2: Purpose-Gate

R-01, R-04, R-06, R-07, R-08, R-09, R-10, R-12, R-13, R-14, R-19 and R-22 all **PASS**, each with a written reason in the decision log above.

## Block 3: Liveliness

| Check | Result |
|---|---|
| Dials declared | PASS (ENERGY 2 / RHYTHM 2 / MOTION 2) |
| Output matches the dials | PASS. Sections vary (staggered values, feature card, dark band, split FAQ, booking split) with a few deliberate breaks, and motion is limited to an entrance plus reveals. |
| One focal point per screen | PASS. The serif H1 in heroes, the H2 in each section. |
| Structural whitespace | PASS |
| One deliberate accent | PASS. The gold family (logo gold, brush tagline, amber icons, champagne CTA). |
| Identity motif | PASS. The gold movement curve with spine dots, the wave ribbons and the brush tagline, all from the logo and poster. |
| Design Read declared | PASS |

## Block 4: Craftsmanship & Quality Locks

C-1 to C-5, R-05, R-11, R-15, R-16, R-20, R-21, R-29, R-30 and R-31 all **PASS**. The one open item is the About headline (owner decision above). It is owner copy, so it does not fail the gate.

## Click-through (R-35)

- **Navbar:** Beranda, Tentang, Home Visit, Fasilitas, FAQ and Kontak each open a page that returns 200.
- **Layanan dropdown:** Enter opens it, Tab moves to "Semua Layanan", Esc closes it and returns focus to the button, and choosing an item opens `/layanan`.
- **Mobile menu:** opens with focus on "Beranda" and closes on Esc with focus back on the menu button. Tapping "Kontak" opens `/kontak`, closes the menu and unlocks body scroll.
- **Service page:** the "Layanan" breadcrumb opens `/layanan`. "Ajukan janji" opens `/kontak?layanan=pain-movement#formulir` with Pain & Movement already selected.
- **FAQ topic links:** "Biaya & Privasi" scrolls to that section, which sits 168px from the top (the header offset), and the URL hash updates.
- **FAQ accordion:** clicking item 2 sets `aria-expanded` from false to true, and Enter toggles it back.
- **Booking form, empty submit:** shows "Ada 5 isian yang perlu diperbaiki.", focuses Nama, and marks 5 fields invalid.
- **Booking form, valid submit:** with no channel configured, shows "Kanal pemesanan belum aktif" with focus on the status panel. The WhatsApp and webhook paths were verified in an earlier session.
- **Footer:** all 14 internal links return 200. Instagram and TikTok open external profiles (URLs not yet verified by the owner).
- **`/sitemap.xml`:** empty until `NEXT_PUBLIC_SITE_URL` is set, which is intended.
