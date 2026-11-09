import Link from "next/link";
import { siteConfig } from "@/config/site";
import { bookingHref, formatWhatsApp } from "@/lib/booking";
import { CurrentYear } from "./ui/CurrentYear";
import { Logo } from "./ui/Logo";
import { BotanicalSprig, WaveRibbons } from "./ui/Ornaments";

function SocialGlyph({ icon }: { icon: "instagram" | "tiktok" | "facebook" }) {
  const common = { viewBox: "0 0 24 24", className: "size-5", "aria-hidden": true as const };
  if (icon === "instagram")
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth={1.7}>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    );
  if (icon === "tiktok")
    return (
      <svg {...common} fill="currentColor">
        <path d="M16.6 3c.3 2.2 1.6 3.6 3.9 3.8v3a7 7 0 0 1-3.9-1.2v6.3a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v3.1a2.6 2.6 0 1 0 1.8 2.4V3h2.9Z" />
      </svg>
    );
  return (
    <svg {...common} fill="currentColor">
      <path d="M13.5 21v-7.5h2.6l.4-3h-3v-1.9c0-.9.3-1.5 1.6-1.5h1.6V4.4a21 21 0 0 0-2.4-.1c-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1Z" />
    </svg>
  );
}

const colHead = "text-sm font-semibold text-gold-light";
const footLink = "inline-flex min-h-10 items-center text-[0.9375rem] text-mint-100 transition-colors hover:text-paper";

/**
 * Footer (blueprint section B): services, Home Visit, verified location, navigation, verified contact,
 * legal links, social accounts and the brand line. Pages that are still gated are not linked.
 */
export function Footer() {
  const { brand, contact, location, social, services, team, testimonials, publish } = siteConfig;
  const pending = "text-mint-200/90 italic";

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About ELPIORA", href: "/about" },
    { label: "Our Approach", href: "/about/our-approach" },
    ...(team.length ? [{ label: "Our Team", href: "/about/our-team" }] : []),
    { label: "Conditions", href: "/conditions" },
    { label: "Home Visit", href: "/home-visit" },
    { label: "Corporate Wellness", href: "/corporate-wellness" },
    { label: "Event Physiotherapy", href: "/event-physiotherapy" },
    ...(publish.facilities ? [{ label: "Facilities", href: "/facilities" }] : []),
    ...(testimonials.length ? [{ label: "Patient Stories", href: "/patient-stories" }] : []),
    ...(publish.education ? [{ label: "Education", href: "/education" }] : []),
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="on-dark relative isolate mt-16 overflow-hidden bg-deep pt-16 pb-24 text-mint-100 md:mt-20 md:pt-24 md:pb-10">
      <WaveRibbons tone="dark" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-28 w-full -scale-y-100" />
      <BotanicalSprig className="pointer-events-none absolute -right-6 bottom-0 -z-10 h-64 text-gold/20" />
      <div className="shell">
        <div className="grid gap-12 border-b border-mint-100/15 pb-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" aria-label="ELPIORA, kembali ke Beranda" className="inline-block">
              <Logo tone="on-dark" className="h-14 md:h-16" />
            </Link>
            <p className="t-script mt-6 -rotate-2 text-2xl text-gold-light">{brand.tagline}</p>
            <p className="mt-5 max-w-[34ch] text-sm leading-relaxed text-mint-200">
              Fisioterapi dan kesehatan gerak yang personal, untuk membantu Anda bergerak lebih nyaman dan menjalani hidup lebih penuh.
            </p>
            <Link
              href={bookingHref()}
              className="mt-7 inline-flex min-h-11 items-center rounded-full bg-[image:var(--elpiora-champagne)] px-6 text-sm font-semibold text-cocoa transition hover:brightness-105"
            >
              Konsultasi &amp; Booking
            </Link>
          </div>

          <nav aria-label="Navigasi footer" className="lg:col-span-3">
            <p className={colHead}>Navigasi</p>
            <ul className="mt-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={footLink}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Layanan" className="lg:col-span-2">
            <p className={colHead}>Layanan</p>
            <ul className="mt-3">
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={`/services/${s.id}`} className={footLink}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className={colHead}>Kontak &amp; lokasi</p>
            <ul className="mt-3 space-y-3 text-[0.9375rem]">
              <li>{location.address ?? <span className={pending}>Alamat menunggu konfirmasi</span>}</li>
              <li>{contact.phone ?? <span className={pending}>Telepon menunggu konfirmasi</span>}</li>
              <li>
                {contact.whatsappNumber ? <>WhatsApp {formatWhatsApp(contact.whatsappNumber)}</> : <span className={pending}>WhatsApp segera tersedia</span>}
              </li>
              <li>
                {contact.email ? (
                  <a href={`mailto:${contact.email}`} className="underline decoration-gold underline-offset-4">
                    {contact.email}
                  </a>
                ) : (
                  <span className={pending}>Email menunggu konfirmasi</span>
                )}
              </li>
            </ul>
            {social.length > 0 ? (
              <>
                <p className={`${colHead} mt-8`}>Ikuti kami</p>
                <ul className="mt-2 flex flex-col gap-1" aria-label="Media sosial ELPIORA">
                  {social.map((s) => (
                    <li key={s.href}>
                      <a href={s.href} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-11 items-center gap-3 text-[0.9375rem] text-mint-100 hover:text-paper">
                        <span className="inline-flex size-9 items-center justify-center rounded-full bg-mint-100/10 text-gold-light transition-colors group-hover:bg-mint-100/20">
                          <SocialGlyph icon={s.icon} />
                        </span>
                        <span>
                          <span className="sr-only">{s.label} </span>
                          {s.handle}
                        </span>
                        <span className="sr-only"> (membuka di tab baru)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-xs leading-relaxed text-mint-200">
          <ul className="flex flex-wrap gap-x-6" aria-label="Informasi hukum">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms", href: "/terms" },
              { label: "Medical Disclaimer", href: "/medical-disclaimer" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-10 items-center text-sm text-mint-100 underline decoration-gold/60 underline-offset-4 hover:text-paper">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-12">
            <p className="max-w-[70ch]">
              Informasi di situs ini bersifat edukasi umum dan tidak menggantikan diagnosis, pemeriksaan, atau rencana penanganan individual dari tenaga
              kesehatan. Untuk kondisi darurat, hubungi layanan medis darurat atau fasilitas kesehatan terdekat.
            </p>
            <p className="shrink-0">
              © <CurrentYear /> {brand.name}. {brand.descriptor}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
