import type { ReactNode } from "react";
import { siteConfig } from "@/config/site";
import { formatWhatsApp, whatsappHref } from "@/lib/booking";
import { LinkButton } from "./ui/Button";
import { ChatIcon, ClockIcon, MailIcon, PhoneIcon, PinIcon, RouteIcon } from "./ui/Icon";
import { ImagePlate } from "./ui/ImagePlate";
import { PlaceholderTag } from "./ui/Logo";
import { Reveal } from "./ui/Reveal";

function InfoRow({ icon, label, children, pending }: { icon: ReactNode; label: string; children: ReactNode; pending?: boolean }) {
  return (
    <div className="relative border-t border-line py-5 pl-14 first:border-t-0">
      <dt className="text-sm font-semibold text-muted-text">
        <span aria-hidden="true" className="absolute top-5 left-0 inline-flex size-10 items-center justify-center rounded-full bg-mint-100 text-teal-text">
          {icon}
        </span>
        {label}
      </dt>
      <dd className={`mt-1.5 text-[0.9375rem] leading-relaxed ${pending ? "text-muted-text italic" : "text-deep"}`}>{children}</dd>
    </div>
  );
}

/** Contact & visit details — every value from siteConfig, honest pending states otherwise. */
export function ContactCard({ title = "Hubungi & Kunjungi", headingLevel = "h2" }: { title?: string; headingLevel?: "h2" | "h3" }) {
  const { location, contact } = siteConfig;
  const pendingNote = "Menunggu konfirmasi";
  const wa = whatsappHref();
  const Heading = headingLevel;

  return (
    <div className="flex h-full flex-col rounded-[24px] bg-paper p-7 shadow-[0_1px_0_var(--elpiora-line)] md:p-9">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Heading className="t-h3">{location.branchName ?? title}</Heading>
        {!location.address ? <PlaceholderTag>Info kontak menyusul</PlaceholderTag> : null}
      </div>

      <dl className="mt-6">
        <InfoRow icon={<PhoneIcon className="size-5" />} label="Telepon" pending={!contact.phone}>
          {contact.phone ? (
            <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`} className="underline decoration-gold underline-offset-4">
              {contact.phone}
            </a>
          ) : (
            pendingNote
          )}
        </InfoRow>
        <InfoRow icon={<ChatIcon className="size-5" />} label="WhatsApp" pending={!contact.whatsappNumber}>
          {contact.whatsappNumber && wa ? (
            <a href={wa} target="_blank" rel="noopener noreferrer" className="underline decoration-gold underline-offset-4">
              {formatWhatsApp(contact.whatsappNumber)}
              <span className="sr-only"> (membuka WhatsApp di tab baru)</span>
            </a>
          ) : (
            "Kanal WhatsApp sedang disiapkan."
          )}
        </InfoRow>
        <InfoRow icon={<MailIcon className="size-5" />} label="Email" pending={!contact.email}>
          {contact.email ? (
            <a href={`mailto:${contact.email}`} className="underline decoration-gold underline-offset-4">
              {contact.email}
            </a>
          ) : (
            pendingNote
          )}
        </InfoRow>
        <InfoRow icon={<PinIcon className="size-5" />} label="Alamat klinik" pending={!location.address}>
          {location.address ?? "Alamat klinik akan diumumkan di halaman ini."}
        </InfoRow>
        <InfoRow icon={<ClockIcon className="size-5" />} label="Jam operasional" pending={!location.hours}>
          {location.hours ? (
            <ul>
              {location.hours.map((h) => (
                <li key={h.days}>
                  {h.days}: {h.hours}
                </li>
              ))}
            </ul>
          ) : (
            pendingNote
          )}
        </InfoRow>
        <InfoRow icon={<RouteIcon className="size-5" />} label="Akses & parkir" pending={!location.access}>
          {location.access ?? "Informasi akses dan parkir menyusul."}
        </InfoRow>
      </dl>

      {location.mapsUrl ? (
        <div className="mt-auto pt-6">
          <LinkButton href={location.mapsUrl} external variant="secondary" arrow={false}>
            Buka di Google Maps
          </LinkButton>
        </div>
      ) : null}
    </div>
  );
}

/** Clinic atmosphere mosaic — placeholders are never presented as photos of a real branch. */
export function ClinicMosaic() {
  const { images } = siteConfig;
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 lg:gap-5">
        <Reveal className="col-span-2">
          <ImagePlate image={images.clinicReception} variant="reception" sizes="(min-width: 1024px) 55vw, 100vw" className="aspect-[16/9] w-full rounded-[24px]" />
        </Reveal>
        <Reveal delay={80}>
          <ImagePlate image={images.clinicTreatment} variant="treatment" sizes="(min-width: 1024px) 27vw, 50vw" className="aspect-square w-full rounded-[24px]" />
        </Reveal>
        <Reveal delay={140}>
          <ImagePlate
            image={images.clinicDetail}
            variant="detail"
            sizes="(min-width: 1024px) 27vw, 50vw"
            className="aspect-square w-full rounded-t-[999px] rounded-b-[24px]"
          />
        </Reveal>
      </div>
      <p className="mt-4 text-xs text-muted-text">
        Ilustrasi suasana bersifat sementara dan bukan foto cabang ELPIORA. Foto klinik asli akan ditampilkan setelah tersedia.
      </p>
    </div>
  );
}
