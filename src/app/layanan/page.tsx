import { CareJourney } from "@/components/CareJourney";
import { ChecklistSection } from "@/components/ContentSections";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { PageHero } from "@/components/PageHero";
import { ServiceCatalog } from "@/components/ServiceGrid";
import { LinkButton } from "@/components/ui/Button";
import { PlaceholderTag } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { BOOKING_PATH, siteConfig } from "@/config/site";
import { servicesFaq } from "@/content/faq";
import { bookingHref } from "@/lib/booking";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "Layanan",
  "Layanan fisioterapi ELPIORA: Pain & Movement, Sports Rehabilitation, Workplace Health & Ergonomics, Wellness & Movement, dan lainnya.",
  "/layanan",
);

const process = [
  { title: "Asesmen", body: "Evaluasi menyeluruh untuk memahami kondisi, tujuan, dan gaya hidup Anda." },
  { title: "Rencana", body: "Rencana perawatan disusun sesuai kebutuhan, target pemulihan, dan aktivitas harian." },
  { title: "Terapi", body: "Sesi fisioterapi dengan latihan dan penanganan yang disesuaikan untuk fungsi gerak Anda." },
  { title: "Pemulihan", body: "Membangun kemandirian dan ketahanan agar Anda kembali ke aktivitas yang Anda cintai." },
];

export default function LayananPage() {
  return (
    <main id="konten">
      <PageHero
        eyebrow="Layanan"
        title={
          <>
            Layanan <span className="accent">Kami.</span>
          </>
        }
        lead={<p>Perawatan fisioterapi dan kesehatan gerak yang personal — untuk membantu Anda bergerak lebih baik, pulih lebih kuat, dan hidup lebih penuh.</p>}
        actions={
          <>
            <LinkButton href={BOOKING_PATH}>Buat Janji</LinkButton>
            <LinkButton href={bookingHref("lainnya")} variant="secondary" arrow={false}>
              Bantu Saya Memilih
            </LinkButton>
          </>
        }
        image={siteConfig.images.servicesHero}
        imageVariant="studio"
      />

      <ServiceCatalog />

      <ChecklistSection
        eyebrow="Panduan Memilih"
        titleId="memilih-title"
        tone="paper"
        title={
          <>
            Belum Yakin Layanan <span className="accent">Mana yang Tepat?</span>
          </>
        }
        intro="Anda tidak perlu menentukannya sendiri. Gunakan panduan singkat ini, atau pilih “Belum yakin” pada formulir."
        items={[
          { title: "Ada nyeri atau kaku pada otot dan sendi", body: "Mulai dari Pain & Movement — asesmen akan membantu memahami penyebabnya." },
          { title: "Cedera saat berolahraga", body: "Sports Rehabilitation membantu Anda kembali berlatih secara bertahap." },
          { title: "Keluhan muncul karena pekerjaan", body: "Workplace Health & Ergonomics berfokus pada kebiasaan dan pengaturan kerja." },
          { title: "Ingin tetap bugar dan seimbang", body: "Wellness & Movement untuk menjaga kekuatan, kelenturan, dan keseimbangan." },
          { title: "Sulit bepergian ke klinik", body: "Home Visit membawa sesi fisioterapi ke rumah Anda (area menunggu konfirmasi)." },
        ]}
      />

      <CareJourney
        index="02"
        eyebrow="Proses Perawatan"
        title={
          <>
            Pendekatan yang <span className="accent">Personal & Terarah.</span>
          </>
        }
        intro="Gambaran umum proses perawatan. Tahapan dapat disesuaikan dengan kondisi dan kebutuhan masing-masing."
        steps={process}
        titleId="proses-title"
      />

      <section aria-labelledby="program-title" className="py-24 md:py-32">
        <div className="shell">
          <div className="grid-12 gap-y-8">
            <Reveal className="col-span-4 md:col-span-8 lg:col-span-6">
              <SectionIntro index="03" eyebrow="Program Khusus" titleId="program-title" title={<>Program untuk <span className="accent">Kebutuhan Spesifik.</span></>} />
            </Reveal>
            <Reveal delay={100} className="col-span-4 self-end md:col-span-8 lg:col-span-5 lg:col-start-8">
              <div className="flex flex-col items-start gap-3">
                <PlaceholderTag>Ketersediaan program menunggu konfirmasi</PlaceholderTag>
                <p className="text-[0.9375rem] leading-relaxed text-body">
                  Program berikut sedang dipersiapkan. Tanyakan kepada tim kami untuk informasi ketersediaannya.
                </p>
              </div>
            </Reveal>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.programs.map((p, i) => (
              <Reveal as="li" key={p.id} delay={i * 60}>
                <div className="flex h-full flex-col rounded-[22px] border border-dashed border-deep/25 bg-surface p-6">
                  <span className="font-serif text-lg text-teal-text" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="t-h3 mt-4 !text-[1.4rem]">{p.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-body">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Faq
        items={servicesFaq}
        index="04"
        title={
          <>
            Pertanyaan Seputar <span className="accent">Layanan.</span>
          </>
        }
      />

      <FinalCta title="Jadwalkan Konsultasi Anda Hari Ini." lead="Asesmen personal untuk menemukan rencana perawatan yang sesuai dengan kebutuhan Anda." secondaryLabel="Lihat FAQ" secondaryHref="#faq" />
    </main>
  );
}
