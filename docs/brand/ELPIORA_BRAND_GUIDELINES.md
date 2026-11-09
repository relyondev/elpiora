# ELPIORA — Brand Identity & Digital Visual Guidelines

**Version:** 1.0 — Digital implementation reference  
**Purpose:** Attachment for AI website builders, designers, and developers  
**Brand:** ELPIORA  
**Descriptor:** Physiotherapy and Wellness  
**Tagline:** *restore function · renew life*

> **Source integrity:** This guide synthesizes the two ELPIORA brand-identity reference images and the five subsequently generated 16:9 guidelines slides. Color values shown in the slides are **reference-derived / proposed**, not independently verified from an official vector brand kit. Suggested font matches, spacing values, responsive rules, and accessibility rules are **implementation recommendations**, not historical corporate standards. If official assets or brand documentation conflict, official assets win.

## 1. Brand DNA

### 1.1 Observed identity
- **Category:** Physiotherapy, rehabilitation, movement health, and wellness.
- **Positioning:** Premium, calm, clinically credible, personal, restorative—not a mass-market fitness brand or a purely indulgent spa.
- **Visual character:** Elegant editorial serif typography, a distinctive movement/spine-inspired human motif integrated into the wordmark, deep teal to light mint gradients, muted botanical elements, soft lighting, natural textures, and restrained champagne-gold accents.
- **Core promise / tagline:** `restore function · renew life` (preserve wording and punctuation).
- **Brand traits:** Restorative, Elegant, Holistic, Precise, Uplifting (language from generated identity slides).
- **Communication personality:** Warm, expert, reassuring, evidence-oriented, refined, approachable.

### 1.2 Brand essence
Help people restore movement and everyday function through personalized physiotherapy and supportive wellness care. Present treatment as clinical and compassionate, never as miraculous or guaranteed.

### 1.3 Key visual tension
Balance **clinical precision** with **natural serenity** and **modern luxury**. The design should look like a premium healthcare experience, not a generic hospital dashboard, sports supplement ad, beauty spa, or tech startup.

## 2. Logo system

### 2.1 Logo elements supported by references
1. **ELPIORA** editorial, high-contrast serif wordmark.
2. Dynamic **human / spine / flowing-curve** symbol incorporated into the wordmark; warm gold/beige mark details.
3. Descriptor: `Physiotherapy and Wellness`.
4. Tagline: `restore function · renew life`.

### 2.2 Acceptable conceptual variants
- Primary horizontal logo with descriptor and, where legible, tagline.
- Centered / stacked lockup for vertically oriented placements.
- Monogram / icon-only version for favicons and small spaces **only if a clean approved icon asset exists**.
- Single-color dark and reversed-white versions, where supplied as authentic source assets.

### 2.3 Logo usage rules
- **Use supplied SVG/PNG logo files**; never reconstruct the letterforms or emblem with a generative tool or plain typed text and pretend it is the original logo.
- Preserve aspect ratio, spacing, symbol shape, and color fidelity. Do not stretch, rotate, re-color arbitrarily, add bevels, shadows, or glow.
- Prefer the full wordmark in the navbar, with a compact logo variant for small screens.
- Use high-contrast logo variants on light and dark backgrounds.
- A generated slide proposes clear space equal to height of the `E` and a minimum width of **25 mm print / 120 px digital**, but these are **illustrative recommendations**, not verified official engineering specs. For web, use optical testing and avoid rendering tiny taglines.
- If logo asset is missing, use an explicitly temporary text placeholder and ask for the real asset; **do not fabricate a replacement logo**.

## 3. Color system

### 3.1 Reference-derived palette
The following HEX values appear in the generated visual-guidelines slides and closely reflect the uploaded references. Treat as a **working palette pending official brand approval**.

| Token | Name | HEX | RGB | Recommended role |
|---|---|---|---|---|
| `--elpiora-teal-500` | Primary Teal | `#2C98A0` | `44, 152, 160` | Brand CTA, highlights, large accent surfaces |
| `--elpiora-teal-400` | Core Teal | `#389FA6` | `56, 159, 166` | Hover/supporting accents |
| `--elpiora-teal-300` | Soft Teal | `#5FB7B8` | `95, 183, 184` | Secondary panels, gradient midtone |
| `--elpiora-sage-400` | Sage Green | `#8DB9A3` | `141, 185, 163` | Wellness/botanical accent |
| `--elpiora-mint-200` | Mint | `#BBDCC6` | `187, 220, 198` | Light panel backgrounds |
| `--elpiora-mint-100` | Pale Mint | `#DFF2E7` | `223, 242, 231` | Light page surfaces |
| `--elpiora-gold-400` | Champagne Gold | `#CBAF7F` | `203, 175, 127` | Fine details, decorative accents (not body copy) |

### 3.2 Proposed functional neutrals
| Token | HEX | Role |
|---|---|---|
| `--elpiora-deep` | `#123F43` | Primary readable headings, dark panels |
| `--elpiora-ink` | `#1E4F52` | Secondary text/dark teal surfaces |
| `--elpiora-muted` | `#4A7E7C` | Muted labels, dividers (verify contrast) |
| `--elpiora-surface` | `#F7FAF8` | Warm light backgrounds |
| `--elpiora-white` | `#FFFFFF` | Cards, contrast surfaces |
| `--elpiora-line` | `#E8EDE9` | Borders and separators |

### 3.3 Usage guidance
- **Default page:** Light ivory/near-white (`#F7FAF8`) and pale mint surfaces, deep teal text.
- **Strong anchor sections:** Deep teal (`#123F43` or `#1E4F52`) with near-white text.
- **Primary CTA:** Dark teal, or teal `#2C98A0` only with a sufficiently contrasting foreground. Check the actual button combination for WCAG AA.
- **Gold:** Deliberate luxury accent—tiny rule, illustration stroke, premium detail. Avoid gold for low-contrast body text.
- **Gradients:** Controlled teal-to-mint e.g. `linear-gradient(110deg, #2C98A0 0%, #5FB7B8 42%, #DFF2E7 100%)`; do not gradient-fill every element.
- **Approximate color distribution:** Primary/supporting 60%, neutral backgrounds 25%, secondary accents 10%, gold 5% is a *visual proposal shown in generated slides*, not an enforced quantitative rule. In a text-heavy website favor more neutral background for readability.
- Do not introduce electric neon green, harsh blue, hot pink, saturated purple, or unrelated metallic colors.

### 3.4 Starter CSS variables
```css
:root {
  --elpiora-teal-500: #2C98A0;
  --elpiora-teal-400: #389FA6;
  --elpiora-teal-300: #5FB7B8;
  --elpiora-sage-400: #8DB9A3;
  --elpiora-mint-200: #BBDCC6;
  --elpiora-mint-100: #DFF2E7;
  --elpiora-gold-400: #CBAF7F;
  --elpiora-deep: #123F43;
  --elpiora-ink: #1E4F52;
  --elpiora-surface: #F7FAF8;
  --elpiora-white: #FFFFFF;
  --elpiora-line: #E8EDE9;
  --elpiora-gradient: linear-gradient(110deg, #2C98A0 0%, #5FB7B8 42%, #DFF2E7 100%);
}
```

## 4. Typography

> **These are recommended font matches from visual observation; exact font identification for the original custom ELPIORA wordmark is not verified. Do not recreate the logotype using a downloaded font.**

| Role | Recommended family | Weight/style | Notes |
|---|---|---|---|
| Display / editorial headlines | **Cormorant Garamond** | 400–600 | Refined, high-contrast serif; use selectively |
| Navigation / body / labels | **Montserrat** | 400–600 | Clean modern geometric sans; prioritize readability |
| Accent / tagline | **Satisfy** or comparable script | Regular | Only for brief decorative accent; never for body or accessibility-critical UI |

### Proposed web hierarchy
- H1: `clamp(3rem, 6.2vw, 6.5rem)`; Cormorant Garamond; line-height 0.95–1.05.
- H2: `clamp(2.25rem, 4vw, 4.25rem)`; Cormorant Garamond; line-height 1.05–1.15.
- H3: `clamp(1.35rem, 2vw, 2rem)`; serif or medium sans depending on context.
- Body: 16–18px Montserrat, line-height 1.55–1.8.
- Eyebrow/label: 11–13px Montserrat, tracking 0.08–0.16em; uppercase selectively.
- Avoid more than three typefaces and avoid script in navigation or buttons.
- Support Indonesian diacritics, punctuation, and graceful fallback fonts.

## 5. Graphic language

### 5.1 Observed motifs
- Graceful, sweeping **movement curves** inspired by body posture and the logo emblem.
- A subtle **dotted spine-like line** inspired by the logomark.
- **Fine botanical line illustrations** (leaves, natural growth).
- Soft, organic contours and editorial gold line details.
- Calm teal-to-mint fields and restrained gradient overlays.

### 5.2 Proposed practical rules
- Favor large whitespace and asymmetrical-but-balanced editorial compositions.
- Use softly rounded image containers (proposed 16–28px radius), while typographic sections remain crisp and structured.
- Use thin 1px borders and restrained shadows; avoid repeated glassmorphism, thick strokes, and excessive blur.
- Suggested spacing system: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128px.
- Suggested site width: max 1200–1320px, 24–40px desktop gutters, 20px mobile gutters.
- Aim for generous vertical rhythm; each major section must have a clear storytelling purpose.
- Icon family: elegant 1.5–2px line icons, consistent size/corners. Prefer physiotherapy-specific iconography over random spa imagery.

## 6. Photography direction

### Observed references
- Premium physiotherapy treatment rooms and welcoming receptions; ribbed deep-teal walls, warm concealed lighting, natural materials, plants.
- Genuine hands-on physiotherapy (e.g., knee assessment / movement work) and human-centered recovery imagery.
- Calm mobility/stretching imagery with understated movement cues.
- Wellness still lifes: folded towels, natural stones, candlelight, botanical elements.

### Digital photography recommendations
- Prioritize **authentic clinic/team/session photography** over AI-generated medical claims or generic stock photos.
- Show professional, respectful therapist-patient interactions, functional movement, and real treatment contexts.
- Soft daylight and warm interior lighting; realistic skin tones; subtle, consistent teal/sage treatment.
- Avoid exaggerated anatomical glowing-spine effects as literal clinical evidence, implausible poses, sensational pain imagery, and spa-only visuals that obscure the physiotherapy purpose.
- All images require meaningful alt text; decorative images use empty alt text.

## 7. Website-specific UI patterns — proposed

### 7.1 Navigation
- Sticky, slim navbar with official logo at left, sparse links, and one clear booking CTA.
- Transparent/soft overlay at top only if text contrast is preserved; turn into a light or dark solid surface when scrolling.
- Mobile: simple accessible menu, obvious CTA, 44px minimum touch targets.

### 7.2 Buttons and links
- Primary: solid deep teal or verified-contrast brand teal, 12–16px radius, bold legible text.
- Secondary: outline deep teal on light surface, or soft pale mint filled button.
- Gold should decorate, not convey the only interactive signal.
- Hover: subtle arrow shift and 150–250ms transition; support reduced motion.

### 7.3 Cards and content panels
- Alternating airy white/pale-mint backgrounds and occasional deep-teal statement panel.
- Elegant portrait/landscape photographs, restrained borders, no carousel dependency for important information.
- Use accordions only for genuinely secondary details such as FAQ.

### 7.4 Motion principles
- Scroll reveal: understated opacity/translate (6–16px, 250–500ms).
- Hero ambient motion: barely perceptible gradient / curve drift only if it does not affect speed or accessibility.
- No splash loaders, no parallax jank, no perpetual distracting animation.

## 8. Accessibility & content integrity
- Aim for **WCAG 2.2 AA**: contrast >= 4.5:1 for normal text, >= 3:1 for large text and UI boundaries where applicable; keyboard support and visible focus states.
- Do not assume a color combination passes contrast solely because a generated slide labels it AA/AAA; calculate and test.
- Semantic heading order, forms with real labels, reduced-motion support, and mobile-first responsive behavior.
- Do not invent licenses, physiotherapist credentials, clinical outcomes, efficacy percentages, testimonials, star ratings, addresses, treatment fees, service availability, or booking integration.
- No guaranteed cures, universal relief promises, or fabricated clinical research references.
- Use placeholders for information not supplied and keep it in a central editable data structure.

## 9. Suggested section-by-section mood
| Section | Mood | Styling |
|---|---|---|
| Hero | Premium, assured, welcoming | Large serif headline, right-side authentic hero photo, delicate curve, restrained gold |
| Trust & value | Clear, credible | Clean factual icon rows, no fabricated numerical claims |
| Services | Professional, personal | Airy image cards, deep teal headings, minimal outlines |
| Method / experience | Reassuring, structured | 3–4 step linear storytelling, line icons |
| About / team | Human, transparent | Real therapist portraits/credentials when supplied |
| Clinic & location | Convenient, honest | Authentic photos, verified address/maps only |
| FAQ | Practical | Minimal accordion on white/mint |
| Final CTA | Calm urgency | Deep teal field with pale mint typography, strong booking action |

## 10. Don't / Do checklist
**DO:** Preserve the wordmark and tagline; show credible care; use teal/mint/ivory with restrained gold; keep content readable; use authentic images; design responsively.

**DON'T:** Rebuild the logo from scratch; use a generic tech/neon palette; overuse glassmorphism; show unverified medical promises; fabricate prices/testimonials/staff; cover every surface in a gradient; use illegible gold-on-white copy.

## 11. Delivery priorities for design / development
1. Request official ELPIORA logo SVG + favicon, genuine clinic imagery, accurate services, contact and location before production launch.
2. Treat this `.md` file as the **visual source of truth** for a working prototype, subject to verification against official brand files.
3. Maintain reusable design tokens and components, responsive layouts, and accessibility checks.
4. If business facts are unknown, use clearly visible, easy-to-replace placeholders—never invented facts.

---

**Reference provenance:** Two supplied ELPIORA brand boards plus the generated slides: *The Brand Identity*, *The Logo System*, *The Visual Foundations*, *The Design Language*, and *The Brand in Action*. Generated mockups and technical diagrams are visual proposals, not proof of existing clinic facilities or official specifications.
