import { TopicGrid } from "@/components/ContentSections";
import { FinalCta } from "@/components/FinalCta";
import { PageHero } from "@/components/PageHero";
import { LinkButton } from "@/components/ui/Button";
import { AssessmentIcon, HomeIcon, MovementIcon, NeuroIcon, ProgressIcon, SpineIcon, SportIcon, WellnessIcon } from "@/components/ui/Icon";
import { PlaceholderTag } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { siteConfig } from "@/config/site";
import { bookingHref } from "@/lib/booking";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "Kondisi dan Program Rehabilitasi | ELPIORA",
  "Temukan penjelasan fisioterapi untuk nyeri punggung dan leher, nyeri lutut dan sendi, cedera olahraga, pascastroke, dan rehabilitasi setelah operasi.",
  "/conditions",
);

const conditions = [
  { title: "Nyeri Punggung & Leher", body: "Kaku, pegal, atau nyeri saat duduk, berdiri, mengangkat benda, atau bekerja.", Icon: SpineIcon, href: "/conditions/back-neck-pain" },
  { title: "Nyeri Lutut & Sendi", body: "Keluhan lutut, bahu, atau sendi lain yang memengaruhi gerak harian.", Icon: MovementIcon, href: "/conditions/knee-joint-pain" },
  { title: "Cedera Olahraga", body: "Tanda yang perlu diperhatikan, kapan perlu evaluasi medis, dan tahapan pemulihan.", Icon: SportIcon, href: "/conditions/sports-injuries" },
  { title: "Rehabilitasi Pascastroke", body: "Melatih kembali keseimbangan, kekuatan, berjalan, dan aktivitas sehari-hari.", Icon: NeuroIcon, href: "/conditions/stroke-rehabilitation" },
];

const programs = [
  { title: "Rehabilitasi Pascaoperasi", body: "Program bertahap sesuai prosedur, instruksi dokter, dan toleransi latihan.", Icon: ProgressIcon, href: "/programs/post-operative-rehabilitation" },
  { title: "Healthy Aging & Balance", body: "Menjaga kekuatan, keseimbangan, dan kemandirian seiring bertambahnya usia.", Icon: WellnessIcon, href: "/programs/healthy-aging" },
];

const planned = ["Keseleo pergelangan kaki", "Parkinson", "Keseimbangan dan berjalan", "Keluhan akibat pekerjaan kantor", "Nyeri menetap", "Keterbatasan mobilitas"];

export default function ConditionsPage() {
  return (
    <main id="konten">
      <PageHero
        eyebrow="Conditions"
        title={
          <>
            Find Care for the <span className="accent">Condition You&apos;re Facing.</span>
          </>
        }
        lead={
          <p>
            Tidak harus mengetahui istilah medis untuk mendapatkan arahan awal. Pilih keluhan atau kebutuhan pemulihan Anda untuk mengetahui bagaimana
            fisioterapi dapat berperan, kapan memerlukan pemeriksaan dokter, dan langkah konsultasi yang tersedia.
          </p>
        }
        actions={
          <>
            <LinkButton href={bookingHref("lainnya")} variant="champagne">
              Konsultasi &amp; Booking
            </LinkButton>
            <LinkButton href="/services" variant="secondary-on-dark">
              Lihat Layanan
            </LinkButton>
          </>
        }
        image={siteConfig.images.servicesHero}
        imageVariant="studio"
        note={{ label: "Bukan diagnosis", text: "Penjelasan umum, penilaian dilakukan fisioterapis", Icon: AssessmentIcon }}
      />

      <TopicGrid
        eyebrow="Keluhan"
        titleId="conditions-title"
        title={
          <>
            Kondisi yang <span className="accent">sering dibahas</span>
          </>
        }
        intro="Setiap halaman menjelaskan apa yang mungkin Anda rasakan, kapan harus segera ke dokter, dan bagaimana fisioterapi dapat membantu."
        items={conditions}
      />

      <TopicGrid
        eyebrow="Program"
        titleId="programs-title"
        title={
          <>
            Program <span className="accent">rehabilitasi</span>
          </>
        }
        items={programs}
      />

      <section aria-labelledby="planned-title" className="bg-paper py-20 md:py-24">
        <div className="shell">
          <Reveal className="max-w-3xl">
            <SectionIntro eyebrow="Akan ditambahkan" titleId="planned-title" title={<>Topik yang <span className="accent">sedang disiapkan</span></>} />
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-body">
              Halaman berikut akan terbit setelah ditinjau fisioterapis ELPIORA. Sementara itu, Anda tetap dapat menceritakan keluhan ini lewat formulir.
            </p>
          </Reveal>
          <ul className="mt-8 flex flex-wrap gap-3">
            {planned.map((t) => (
              <li key={t} className="inline-flex min-h-11 items-center gap-3 rounded-full border border-dashed border-deep/25 bg-surface px-5 text-sm text-body">
                {t}
                <PlaceholderTag>Dalam persiapan</PlaceholderTag>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-center gap-3 text-sm text-body">
            <HomeIcon className="size-5 text-teal-text" aria-hidden="true" />
            Butuh terapi di rumah? Lihat halaman Home Visit.
          </p>
        </div>
      </section>

      <FinalCta primaryHref={bookingHref("lainnya")} primaryLabel="Konsultasi & Booking" secondaryLabel="Lihat FAQ" secondaryHref="/faq" />
    </main>
  );
}
