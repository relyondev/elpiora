import { CareJourney, type Step } from "@/components/CareJourney";
import { TopicGrid } from "@/components/ContentSections";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Hero } from "@/components/Hero";
import { AboutTeaser, BeyondClinic } from "@/components/HomeSections";
import { ServiceCards } from "@/components/ServiceGrid";
import { LinkButton, TextLink } from "@/components/ui/Button";
import { HomeIcon, NeuroIcon, ProgressIcon, SpineIcon, SportIcon, WorkplaceIcon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { homeFaq } from "@/content/faq";
import { bookingHref, whatsappHref } from "@/lib/booking";
import { pageMeta } from "@/lib/meta";
import { buildClinicJsonLd } from "@/lib/structured-data";

export const metadata = pageMeta(
  "Fisioterapi & Rehabilitasi | ELPIORA Physiotherapy & Wellness",
  "Kenali ELPIORA Physiotherapy & Wellness: layanan fisioterapi nyeri otot dan sendi, cedera olahraga, rehabilitasi neurologis, serta Home Visit sesuai area layanan.",
  "/",
);

/** Home section 02: Quick Need Navigator (blueprint copy). */
const needs = [
  { title: "Nyeri Punggung, Leher, atau Sendi", body: "Penilaian fungsi gerak dan program penanganan keluhan muskuloskeletal.", Icon: SpineIcon, href: "/services/musculoskeletal-physiotherapy" },
  { title: "Cedera Setelah Olahraga", body: "Rehabilitasi untuk pemulihan dan kembali berolahraga secara bertahap.", Icon: SportIcon, href: "/services/sports-rehabilitation" },
  { title: "Kesulitan Berjalan atau Keseimbangan", body: "Latihan fungsional berdasarkan kondisi neurologis dan kapasitas pasien.", Icon: NeuroIcon, href: "/services/neurological-rehabilitation" },
  { title: "Pemulihan Setelah Operasi", body: "Program gerak dan penguatan sesuai arahan medis dan fase pemulihan.", Icon: ProgressIcon, href: "/programs/post-operative-rehabilitation" },
  { title: "Keluhan Akibat Aktivitas Kerja", body: "Asesmen ergonomi, variasi aktivitas, dan latihan terarah.", Icon: WorkplaceIcon, href: "/services/workplace-ergonomics" },
  { title: "Ingin Terapi di Rumah", body: "Home Visit untuk kebutuhan mobilitas dan rehabilitasi tertentu.", Icon: HomeIcon, href: "/home-visit" },
];

/** Home section 04: The ELPIORA Approach (blueprint copy). */
const approach: Step[] = [
  { title: "Assess", body: "Mendengarkan keluhan, mengevaluasi fungsi, dan mengidentifikasi faktor terkait." },
  { title: "Plan", body: "Menyusun tujuan serta rencana terapi berdasarkan kebutuhan." },
  { title: "Treat & Train", body: "Intervensi yang sesuai indikasi, latihan gerak, edukasi, dan pemantauan toleransi." },
  { title: "Progress", body: "Menilai perkembangan dan menyesuaikan program bila diperlukan." },
];

export default function Home() {
  const jsonLd = buildClinicJsonLd();
  const wa = whatsappHref();

  return (
    <>
      <main id="konten">
        <Hero />

        <TopicGrid
          eyebrow="Mulai dari kebutuhan Anda"
          titleId="needs-title"
          title={
            <>
              Apa yang Ingin Anda Bantu <span className="accent">Pulihkan?</span>
            </>
          }
          intro="Pilih keluhan atau tujuan yang paling dekat dengan Anda. Setiap kartu mengarah ke penjelasan layanan yang relevan."
          items={needs}
        />

        <section aria-labelledby="services-title" className="bg-mint-100 py-24 md:py-32">
          <div className="shell">
            <div className="grid-12 gap-y-8">
              <Reveal className="col-span-4 md:col-span-8 lg:col-span-7">
                <SectionIntro
                  eyebrow="Layanan kami"
                  titleId="services-title"
                  title={
                    <>
                      Comprehensive Care for Your <span className="accent">Movement &amp; Wellness</span>
                    </>
                  }
                />
              </Reveal>
              <Reveal delay={100} className="col-span-4 self-end md:col-span-8 lg:col-span-4 lg:col-start-9">
                <p className="text-[0.9375rem] leading-relaxed text-body">
                  Kebutuhan setiap tubuh berbeda. Temukan layanan yang sesuai dengan keluhan, tujuan, dan aktivitas Anda.
                </p>
              </Reveal>
            </div>
            <div className="mt-12">
              <ServiceCards />
            </div>
            <div className="mt-10">
              <LinkButton href="/services" variant="secondary">
                Lihat Seluruh Layanan
              </LinkButton>
            </div>
          </div>
        </section>

        <CareJourney
          eyebrow="Pendekatan ELPIORA"
          titleId="approach-title"
          title={
            <>
              Personalised Care. <span className="accent">Meaningful Progress.</span>
            </>
          }
          intro="Hasil fisioterapi ditentukan juga oleh apa yang terjadi sebelum dan sesudah sesi. Kami memulai dari memahami kondisi Anda, menetapkan tujuan yang realistis, dan membantu membangun kemampuan bergerak untuk kehidupan sehari-hari."
          steps={approach}
        />

        <AboutTeaser />
        <BeyondClinic />

        <Faq
          items={homeFaq}
          eyebrow="Pertanyaan umum"
          title={
            <>
              Hal yang sering <span className="accent">ditanyakan.</span>
            </>
          }
          footer={<TextLink href="/faq">Lihat semua pertanyaan di halaman FAQ</TextLink>}
        />

        <FinalCta
          title={
            <>
              Start with <span className="accent">Better Movement.</span>
            </>
          }
          lead="Ceritakan kebutuhan Anda. Tim ELPIORA akan membantu menjelaskan pilihan layanan dan proses booking yang sesuai."
          primaryLabel="Konsultasi & Booking"
          primaryHref={wa ?? bookingHref()}
          primaryExternal={Boolean(wa)}
          secondaryLabel="Lihat Daftar Layanan"
          secondaryHref="/services"
        />
      </main>
      {jsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /> : null}
    </>
  );
}
