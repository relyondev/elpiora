import Link from "next/link";
import { FinalCta } from "@/components/FinalCta";
import { ContactCard } from "@/components/Location";
import { PageHero } from "@/components/PageHero";
import { LinkButton } from "@/components/ui/Button";
import { ChatIcon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { siteConfig } from "@/config/site";
import { bookingHref, whatsappHref } from "@/lib/booking";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "Kontak & Lokasi ELPIORA",
  "Hubungi ELPIORA Physiotherapy & Wellness: WhatsApp, telepon, email, lokasi klinik, jam layanan, dan area Home Visit.",
  "/contact",
);

export default function ContactPage() {
  const wa = whatsappHref();
  const { location } = siteConfig;
  return (
    <main id="konten">
      <PageHero
        eyebrow="Contact"
        title={
          <>
            We&apos;d Love to Help <span className="accent">You Move Better.</span>
          </>
        }
        lead={<p>Hubungi tim ELPIORA untuk bertanya tentang layanan, jadwal, area Home Visit, atau kerja sama. Untuk membuat janji, gunakan formulir booking.</p>}
        actions={
          <>
            {wa ? (
              <LinkButton href={wa} external variant="champagne">
                WhatsApp ELPIORA
              </LinkButton>
            ) : (
              <LinkButton href={bookingHref()} variant="champagne">
                Konsultasi &amp; Booking
              </LinkButton>
            )}
            <LinkButton href="/home-visit" variant="secondary-on-dark">
              Cek Area Home Visit
            </LinkButton>
          </>
        }
        image={siteConfig.images.contactHero}
        imageVariant="studio"
        note={{ label: "Kanal resmi", text: "Hanya kontak yang sudah terverifikasi ditampilkan", Icon: ChatIcon }}
      />

      <section aria-labelledby="contact-title" className="bg-mint-100 py-20 md:py-28">
        <div className="shell grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionIntro eyebrow="Hubungi kami" titleId="contact-title" title={<>Kontak &amp; <span className="accent">lokasi</span></>} />
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-body">
              Alamat, nomor telepon, jam layanan, dan akses akan ditampilkan setelah dikonfirmasi. Kami tidak menampilkan alamat atau status buka sebelum
              klinik benar-benar beroperasi di lokasi tersebut.
            </p>
            {location.mapsUrl ? (
              <LinkButton href={location.mapsUrl} external variant="secondary" className="mt-6">
                Lihat Arah ke Klinik
              </LinkButton>
            ) : null}
            <div className="mt-8 rounded-[24px] border border-gold/50 bg-surface p-6">
              <p className="font-serif text-xl font-bold text-deep">Butuh penanganan segera?</p>
              <p className="mt-2 text-sm leading-relaxed text-body">
                Website dan WhatsApp tidak untuk keadaan darurat. Hubungi <strong className="text-deep">119</strong> atau segera ke IGD terdekat.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-7">
            <ContactCard headingLevel="h3" title="Hubungi & kunjungi" />
          </Reveal>
        </div>
      </section>

      <section aria-label="Kerja sama" className="py-16">
        <div className="shell flex flex-wrap items-center gap-x-8 gap-y-3 text-[0.9375rem] text-body">
          <p>Untuk perusahaan atau penyelenggara acara:</p>
          <Link href="/corporate-wellness" className="inline-flex min-h-11 items-center font-semibold text-deep underline decoration-gold underline-offset-[6px]">
            Corporate Wellness
          </Link>
          <Link href="/event-physiotherapy" className="inline-flex min-h-11 items-center font-semibold text-deep underline decoration-gold underline-offset-[6px]">
            Event Physiotherapy
          </Link>
        </div>
      </section>

      <FinalCta />
    </main>
  );
}
