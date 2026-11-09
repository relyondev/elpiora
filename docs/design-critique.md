# Design Critique: ELPIORA Landing Page

Reviewed against `docs/brand/ELPIORA_BRAND_GUIDELINES.md` and the build brief, using desktop (1440px) and mobile (390px) renders of the production build. Stage: working prototype with real copy, placeholder imagery, and pending business facts.

### Overall impression
On first load the page reads as calm, premium and clearly physiotherapy-led. The oversized Cormorant headline, the arched image and the gold movement line carry the brand without a real logo or photos. The biggest remaining opportunity is **authentic photography**. Until it arrives, the illustrated placeholder plates keep the page at "beautiful concept" rather than "trustworthy clinic."

### Usability
| Finding | Severity | Status / Recommendation |
|---|---|---|
| A bottom sticky mobile CTA duplicated the header's "Buat Janji" button and covered FAQ content | 🟡 Moderate | **Fixed:** removed. The header CTA stays visible on every screen size. |
| Booking CTAs have no live channel until WhatsApp is configured | 🟡 Moderate | **By design:** hero and header CTAs scroll to Kontak, which states the channel is being prepared. Final-CTA buttons are visibly disabled with an explanation, so there are no dead links. Set `NEXT_PUBLIC_WHATSAPP_NUMBER` to activate them. |
| Mobile menu links could fail to scroll while body scroll was locked | 🟡 Moderate | **Fixed:** the menu closes first, then scrolls. Focus moves into the menu, Escape closes it, and Tab stays inside it. |
| Service cards ask "Tanyakan Layanan Ini" rather than linking to service pages that don't exist | 🟢 Minor | Add per-service detail pages later if wanted. The cards pre-fill a service-specific WhatsApp message once configured. |

### Visual hierarchy
- **What draws the eye first:** the H1 "Bergerak *Lebih Nyaman.*". That's correct: the promise comes before the brand chrome.
- **Reading flow:** H1 → lead → primary CTA → arched visual → tagline pill → trust row. The single gold curve guides the eye from the CTAs toward the image.
- **Emphasis:** one italic teal phrase per headline creates rhythm without visual noise. Section rhythm deliberately alternates: light editorial, mint bento, deep-teal journey, white about, light contact, mint FAQ, deep CTA panel.

### Consistency
| Element | Issue | Status |
|---|---|---|
| Color | Some plate art used raw hex values | **Fixed:** all colors come from `globals.css` tokens. |
| Contrast token | `#217E85` teal text measured 4.1:1 on pale mint | **Fixed:** the derived token is now `#1D7279` (4.82:1 on mint, 5.35:1 on surface). |
| Ornaments | The final CTA had both a gold rule and dots, and the dots were distorted | **Fixed:** a single, correctly proportioned spine-dot motif. |
| Feature service card | Large empty dark field | **Fixed:** movement curve and spine motif added. |
| Wide service cards | Text stops at about 46ch, leaving the right side airy on large screens | 🟢 Accepted as whitespace. Revisit once real service imagery exists. |

### Accessibility
- **Color contrast:** axe-core (WCAG 2.0/2.1/2.2 A & AA, plus best-practice) reports **0 violations** at both 1440px and 390px. Gold is used as text only on deep teal (5.49:1). Primary buttons are white on `#123F43` (11.55:1).
- **Touch targets:** nav links, menu button, FAQ triggers and CTAs are all at least 44px.
- **Readability:** body text is 16–17px fluid with 1.7 line-height. The script face appears only on the tagline.
- **Other:** skip link, semantic landmarks, `aria-expanded`/`aria-controls` on the menu and accordion, `inert` on collapsed answers, `prefers-reduced-motion` honored, and placeholder plates carry `role="img"` with descriptive labels.

### What works well
- Typography carries the premium feel on its own, which fits the "typography is 90%" principle and the brand's editorial serif.
- Honesty is designed in rather than bolted on: placeholder markers, a "Menunggu konfirmasi" state for every fact, a dashed card for the unconfirmed Dry Needling service, and no fabricated numbers.
- The care journey's dotted line reinterprets the logomark's vertebra detail as a path of progress without copying the logo.

### Priority recommendations
1. **Commission real photography.** Each slot in `siteConfig.images` includes a shot brief. Use a session with real hands-on assessment, the reception, the treatment room, and a material detail. This is the single largest trust gain.
2. **Supply the official logo SVGs** (primary + reversed) and favicon, and set them in `siteConfig.brand.logo`.
3. **Confirm the facts:** WhatsApp number, address, hours, service availability (especially Dry Needling qualifications), then set `showPlaceholderMarkers: false` and `structuredDataVerified: true`.
