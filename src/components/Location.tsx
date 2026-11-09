import type { ReactNode } from "react";
import { siteConfig } from "@/config/site";
import { formatWhatsApp, getBookingAction } from "@/lib/booking";
import { DisabledButton, LinkButton } from "./ui/Button";
import { ChatIcon, ClockIcon, MailIcon, PhoneIcon, PinIcon, RouteIcon } from "./ui/Icon";
import { ImagePlate } from "./ui/ImagePlate";
import { PlaceholderTag } from "./ui/Logo";
import { Reveal } from "./ui/Reveal";
import { SectionIntro } from "./ui/SectionIntro";

function InfoRow({ icon, label, children, pending }: { icon: ReactNode; label: string; children: ReactNode; pending?: boolean }) {
  return (
    <div className="relative border-t border-line py-5 pl-14 first:border-t-0">
      <dt className="text-xs font-semibold tracking-[0.12em] text-muted-text uppercase">
        <span aria-hidden="true" className="absolute top-5 left-0 inline-flex size-10 items-center justify-center rounded-full bg-mint-100 text-teal-text">
          {icon}
        </span>
        {label}
      </dt>
      <dd className={`mt-1.5 text-[0.9375rem] leading-relaxed ${pending ? "text-muted-text italic" : "text-deep"}`}>{children}</dd>
    </div>
  );
}

/**
 * Clinic, space & contact. Atmosphere is shown with placeholder plates
 * (never presented as photos of a real branch); every fact comes from
 * siteConfig and shows an honest pending state when it is not yet confirmed.
 */
export function Location() {
  const { location, contact, images } = siteConfig;
  const booking = getBookingAction();
  const pendingNote = "Menunggu konfirmasi";

  return (
    <section id="kontak" tabIndex={-1} aria-labelledby="kontak-title" className="py-24 outline-none md:py-36">
      <div className="shell">
        <Reveal className="max-w-3xl">
          <SectionIntro index="05" eyebrow="Klinik & Kontak" titleId="kontak-title" title="Ruang yang Tenang untuk Fokus pada Pemulihan." />
          <p className="t-lead mt-6 max-w-[38rem]">
            Suasana ELPIORA dirancang hangat dan menenangkan — material alami, cahaya lembut, dan ruang yang memberi Anda waktu untuk bergerak
            dengan nyaman.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:mt-20 lg:grid-cols-12">
          {/* mosaic */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-7 lg:gap-5">
            <Reveal className="col-span-2">
              <ImagePlate
                image={images.clinicReception}
                variant="reception"
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="aspect-[16/10] w-full rounded-[24px]"
              />
            </Reveal>
            <Reveal delay={80}>
              <ImagePlate image={images.clinicTreatment} variant="treatment" sizes="(min-width: 1024px) 27vw, 50vw" className="aspect-square w-full rounded-[24px]" />
            </Reveal>
            <Reveal delay={140}>
              <ImagePlate image={images.clinicDetail} variant="detail" sizes="(min-width: 1024px) 27vw, 50vw" className="aspect-square w-full rounded-t-[999px] rounded-b-[24px]" />
            </Reveal>
          </div>

          {/* visit & contact card */}
          <Reveal delay={100} className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-[24px] bg-paper p-7 shadow-[0_1px_0_var(--elpiora-line)] md:p-9">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="t-h3">{location.branchName ?? "Kunjungi ELPIORA"}</h3>
                {!location.address ? <PlaceholderTag>Info lokasi menyusul</PlaceholderTag> : null}
              </div>

              <dl className="mt-6">
                <InfoRow icon={<PinIcon className="size-5" />} label="Alamat" pending={!location.address}>
                  {location.address ?? "Alamat klinik akan diumumkan di halaman ini."}
                </InfoRow>
                <InfoRow icon={<ClockIcon className="size-5" />} label="Jam Operasional" pending={!location.hours}>
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
                <InfoRow icon={<RouteIcon className="size-5" />} label="Akses & Parkir" pending={!location.access}>
                  {location.access ?? "Informasi akses dan parkir menyusul."}
                </InfoRow>
                <InfoRow icon={<ChatIcon className="size-5" />} label="WhatsApp" pending={!contact.whatsappNumber}>
                  {contact.whatsappNumber ? formatWhatsApp(contact.whatsappNumber) : "Kanal WhatsApp sedang disiapkan."}
                </InfoRow>
                <InfoRow icon={<PhoneIcon className="size-5" />} label="Telepon" pending={!contact.phone}>
                  {contact.phone ? <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`} className="underline decoration-gold underline-offset-4">{contact.phone}</a> : pendingNote}
                </InfoRow>
                <InfoRow icon={<MailIcon className="size-5" />} label="Email" pending={!contact.email}>
                  {contact.email ? <a href={`mailto:${contact.email}`} className="underline decoration-gold underline-offset-4">{contact.email}</a> : pendingNote}
                </InfoRow>
              </dl>

              <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
                {booking.configured ? (
                  <LinkButton href={booking.href} external className="flex-1">
                    {booking.channel === "whatsapp" ? "Chat via WhatsApp" : "Buat Janji Online"}
                  </LinkButton>
                ) : (
                  <DisabledButton describedBy="booking-pending" className="flex-1">
                    Pemesanan segera tersedia
                  </DisabledButton>
                )}
                {location.mapsUrl ? (
                  <LinkButton href={location.mapsUrl} external variant="secondary" arrow={false}>
                    Buka Peta
                  </LinkButton>
                ) : null}
              </div>
              {!booking.configured ? (
                <p id="booking-pending" className="mt-3 text-sm text-muted-text">
                  Kanal pemesanan sedang disiapkan. Informasi kontak lengkap akan segera tersedia di halaman ini.
                </p>
              ) : null}
            </div>
          </Reveal>
        </div>

        <p className="mt-6 text-xs text-muted-text">
          Ilustrasi suasana bersifat sementara dan bukan foto cabang ELPIORA. Foto klinik asli akan ditampilkan setelah tersedia.
        </p>
      </div>
    </section>
  );
}
