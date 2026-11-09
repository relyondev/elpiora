import { notFound } from "next/navigation";
import { FinalCta } from "@/components/FinalCta";
import { ClinicMosaic, ContactCard } from "@/components/Location";
import { PageHero } from "@/components/PageHero";
import { LinkButton } from "@/components/ui/Button";
import { PinIcon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";
import { bookingHref } from "@/lib/booking";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("Fasilitas Klinik | ELPIORA", "Ruang asesmen, area latihan, dan fasilitas klinik ELPIORA.", "/facilities");

// Blueprint page 22: publish only once a real location and real photos exist (set publish.facilities in siteConfig).
export default function FacilitiesPage() {
  if (!siteConfig.publish.facilities) notFound();
  return (
    <main id="konten">
      <PageHero
        eyebrow="Facilities"
        title={
          <>
            A Space Designed for <span className="accent">Comfortable Movement.</span>
          </>
        }
        lead={<p>Ruang asesmen, area latihan, ruang tunggu, dan fasilitas pendukung di klinik ELPIORA.</p>}
        actions={
          <LinkButton href={bookingHref("", "clinic")} variant="champagne">
            Konsultasi &amp; Booking
          </LinkButton>
        }
        image={siteConfig.images.clinicReception}
        imageVariant="reception"
        note={{ label: "Lokasi terverifikasi", text: "Foto dan fasilitas asli klinik", Icon: PinIcon }}
      />
      <section className="py-24">
        <div className="shell grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ClinicMosaic />
          </div>
          <div className="lg:col-span-5">
            <ContactCard headingLevel="h2" />
          </div>
        </div>
      </section>
      <FinalCta />
    </main>
  );
}
