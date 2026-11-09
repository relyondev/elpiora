import { navigation, siteConfig } from "@/config/site";
import { formatWhatsApp } from "@/lib/booking";
import { CurrentYear } from "./ui/CurrentYear";
import { Logo } from "./ui/Logo";

export function Footer() {
  const { brand, contact, location, social } = siteConfig;

  return (
    <footer className="pt-20 pb-12 md:pt-28">
      <div className="shell">
        <div className="grid gap-12 border-b border-line pb-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo showDescriptor />
            <p className="t-script mt-6 text-2xl text-teal-text">{brand.tagline}</p>
          </div>

          <nav aria-label="Navigasi footer" className="md:col-span-3">
            <p className="text-xs font-semibold tracking-[0.14em] text-muted-text uppercase">Jelajahi</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 md:grid-cols-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="inline-flex min-h-11 items-center text-[0.9375rem] text-deep transition-colors hover:text-teal-text">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold tracking-[0.14em] text-muted-text uppercase">Kontak & Lokasi</p>
            <ul className="mt-4 space-y-3 text-[0.9375rem] text-deep">
              <li>{location.address ?? <span className="text-muted-text italic">Alamat menunggu konfirmasi</span>}</li>
              <li>
                {contact.whatsappNumber ? (
                  <>WhatsApp {formatWhatsApp(contact.whatsappNumber)}</>
                ) : (
                  <span className="text-muted-text italic">WhatsApp segera tersedia</span>
                )}
              </li>
              {contact.email ? (
                <li>
                  <a href={`mailto:${contact.email}`} className="underline decoration-gold underline-offset-4">
                    {contact.email}
                  </a>
                </li>
              ) : null}
            </ul>
            {social.length > 0 ? (
              <ul className="mt-6 flex flex-wrap gap-x-5" aria-label="Media sosial">
                {social.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-sm font-semibold text-deep underline decoration-gold underline-offset-4">
                      {s.label}
                      <span className="sr-only"> (membuka di tab baru)</span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs leading-relaxed text-muted-text md:flex-row md:items-start md:justify-between md:gap-12">
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
