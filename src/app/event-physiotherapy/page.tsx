import { LeadForm } from "@/components/booking/LeadForm";
import { ChecklistSection } from "@/components/ContentSections";
import { FinalCta } from "@/components/FinalCta";
import { PageHero } from "@/components/PageHero";
import { LinkButton } from "@/components/ui/Button";
import { SportIcon } from "@/components/ui/Icon";
import { PlaceholderTag } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { siteConfig } from "@/config/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "Fisioterapi untuk Event Olahraga | ELPIORA",
  "Dukungan fisioterapi on-site untuk komunitas olahraga dan penyelenggara event: edukasi pencegahan cedera, penilaian awal, dan jalur rujukan. Dalam konsep.",
  "/event-physiotherapy",
);

export default function EventPhysiotherapyPage() {
  return (
    <main id="konten">
      <PageHero
        eyebrow="Event Physiotherapy"
        parents={[{ label: "Corporate & Events" }]}
        title={
          <>
            Physiotherapy Support <span className="accent">Where the Action Happens.</span>
          </>
        }
        lead={
          <>
            <p>
              Untuk komunitas olahraga dan penyelenggara event, ELPIORA mengembangkan dukungan fisioterapi on-site yang dapat membantu peserta memahami
              keluhan gerak, mendapatkan edukasi pencegahan cedera, dan memperoleh penilaian awal sesuai kapasitas tenaga serta fasilitas yang tersedia.
            </p>
            <PlaceholderTag className="mt-4">Layanan dalam konsep, menunggu konfirmasi kesiapan</PlaceholderTag>
          </>
        }
        actions={
          <>
            <LinkButton href="#kolaborasi" variant="champagne">
              Ajukan Kolaborasi Event
            </LinkButton>
            <LinkButton href="/services/sports-rehabilitation" variant="secondary-on-dark">
              Sports Rehabilitation
            </LinkButton>
          </>
        }
        image={siteConfig.images.eventHero}
        note={{ label: "Bukan tim medis darurat", text: "Melengkapi, tidak menggantikan tim medis acara", Icon: SportIcon }}
      />

      <ChecklistSection
        titleId="event-activities"
        title={<>Potensi <span className="accent">aktivitas</span></>}
        intro="Bentuk layanan ditentukan oleh kapasitas tenaga, fasilitas, dan kebutuhan acara."
        items={[
          { title: "Musculoskeletal screening" },
          { title: "Konsultasi cedera olahraga" },
          { title: "Edukasi pemanasan dan pemulihan" },
          { title: "Saran gerak dan mobilitas" },
          { title: "Taping", body: "Bila kompetensi dan indikasi memadai." },
          { title: "Jalur rujukan untuk cedera yang memerlukan penanganan medis" },
          { title: "Event recovery station" },
        ]}
        footnote={<p className="max-w-3xl text-sm leading-relaxed text-muted-text">Layanan ini tidak menggantikan tim medis darurat acara.</p>}
      />

      <ChecklistSection
        titleId="event-categories"
        tone="paper"
        title={<>Kategori <span className="accent">acara</span></>}
        items={[
          { title: "Padel" },
          { title: "Badminton" },
          { title: "Golf" },
          { title: "Mini soccer" },
          { title: "Fun run" },
          { title: "Komunitas olahraga" },
          { title: "Corporate sports day" },
        ]}
        footnote={<p className="max-w-3xl text-sm leading-relaxed text-muted-text">Daftar ini menunjukkan jenis acara yang dapat dibahas. Kerjasama dengan acara tertentu baru diumumkan setelah benar-benar terjadi.</p>}
      />

      <section id="kolaborasi" aria-labelledby="event-form-title" className="scroll-mt-[var(--header-h)] bg-mint-100 py-20 md:py-28">
        <div className="shell max-w-4xl">
          <Reveal>
            <SectionIntro eyebrow="Formulir" titleId="event-form-title" title={<>Ajukan <span className="accent">Kolaborasi Event</span></>} />
            <p className="mt-5 max-w-[56ch] text-[0.9375rem] leading-relaxed text-body">Isi data acara Anda. Tim kami akan menghubungi untuk membahas kebutuhan dan kesiapan.</p>
          </Reveal>
          <div className="mt-8">
            <LeadForm kind="event" />
          </div>
        </div>
      </section>

      <FinalCta
        title={<>Dukungan fisioterapi untuk <span className="accent">acara Anda.</span></>}
        lead="Ceritakan jenis acara, jumlah peserta, dan kebutuhan Anda."
        primaryLabel="Ajukan Kolaborasi Event"
        primaryHref="#kolaborasi"
        secondaryLabel="Corporate Wellness"
        secondaryHref="/corporate-wellness"
      />
    </main>
  );
}
