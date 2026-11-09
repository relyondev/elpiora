import Link from "next/link";
import { BOOKING_PATH, navigation, siteConfig } from "@/config/site";
import { formatWhatsApp } from "@/lib/booking";
import { CurrentYear } from "./ui/CurrentYear";
import { Logo } from "./ui/Logo";
import { BotanicalSprig } from "./ui/Ornaments";

/** Deep-teal footer band (after the mockups) — contact facts only when configured. */
export function Footer() {
  const { brand, contact, location, social } = siteConfig;
  const pending = "text-mint-200/90 italic";

  return (
    <footer className="on-dark relative isolate mt-20 overflow-hidden bg-deep pt-16 pb-10 text-mint-100 md:mt-28 md:pt-20">
      <BotanicalSprig className="pointer-events-none absolute -right-6 bottom-0 -z-10 h-64 text-gold/20" />
      <div className="shell">
        <div className="grid gap-12 border-b border-mint-100/15 pb-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo tone="on-dark" showDescriptor />
            <p className="t-script mt-6 text-2xl text-gold">{brand.tagline}</p>
            <Link
              href={BOOKING_PATH}
              className="mt-8 inline-flex min-h-11 items-center rounded-full bg-mint-100 px-6 text-sm font-semibold text-deep transition-colors hover:bg-paper"
            >
              Buat Janji
            </Link>
          </div>

          <nav aria-label="Navigasi footer" className="md:col-span-3 md:col-start-6">
            <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Jelajahi</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 md:grid-cols-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex min-h-11 items-center text-[0.9375rem] text-mint-100 transition-colors hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Kontak & Lokasi</p>
            <ul className="mt-4 space-y-3 text-[0.9375rem]">
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
              <ul className="mt-6 flex flex-wrap gap-x-5" aria-label="Media sosial">
                {social.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-sm font-semibold underline decoration-gold underline-offset-4">
                      {s.label}
                      <span className="sr-only"> (membuka di tab baru)</span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs leading-relaxed text-mint-200 md:flex-row md:items-start md:justify-between md:gap-12">
          <p className="max-w-[70ch]">
            Informasi di situs ini bersifat umum dan tidak menggantikan asesmen, diagnosis, atau saran dari tenaga kesehatan profesional secara
            individual.
          </p>
          <p className="shrink-0">
            © <CurrentYear /> {brand.name}. {brand.descriptor}.
          </p>
        </div>
      </div>
    </footer>
  );
}
