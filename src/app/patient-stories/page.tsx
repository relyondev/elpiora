import { notFound } from "next/navigation";
import { FinalCta } from "@/components/FinalCta";
import { PageHero } from "@/components/PageHero";
import { TestimonialList } from "@/components/Testimonials";
import { LinkButton } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";
import { bookingHref } from "@/lib/booking";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("Cerita Pasien | ELPIORA", "Pengalaman pasien ELPIORA yang dibagikan dengan izin tertulis.", "/patient-stories");

// antislop R-18 / blueprint page 23: only real stories with specific written permission. No data, no page.
export default function PatientStoriesPage() {
  if (siteConfig.testimonials.length === 0) notFound();
  return (
    <main id="konten">
      <PageHero
        eyebrow="Patient Stories"
        title={
          <>
            Every Movement Journey <span className="accent">Is Different.</span>
          </>
        }
        lead={<p>Setiap orang memiliki tujuan dan pengalaman pemulihan sendiri. Cerita yang dibagikan di sini merupakan pengalaman individual dan tidak menjadi jaminan hasil bagi pasien lain.</p>}
        actions={
          <LinkButton href={bookingHref()} variant="champagne">
            Konsultasi &amp; Booking
          </LinkButton>
        }
        image={siteConfig.images.about}
        note={{ label: "Dengan izin tertulis", text: "Cerita nyata, bukan jaminan hasil", Icon: CheckIcon }}
      />
      <section className="py-24">
        <div className="shell">
          <TestimonialList />
        </div>
      </section>
      <FinalCta />
    </main>
  );
}
