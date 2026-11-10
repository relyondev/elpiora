import { FinalCta } from "@/components/FinalCta";
import { ChecklistSection } from "@/components/ContentSections";
import { ClinicMosaic, ContactCard } from "@/components/Location";
import { PageHero } from "@/components/PageHero";
import { LinkButton } from "@/components/ui/Button";
import { ImagePlate } from "@/components/ui/ImagePlate";
import { PlaceholderTag } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { BOOKING_PATH, siteConfig } from "@/config/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "Fasilitas",
  "Suasana klinik ELPIORA yang tenang dan hangat, dirancang agar Anda dapat fokus pada pemulihan.",
  "/fasilitas",
);

const spaces = [
  { title: "Ruang Konsultasi", body: "Ruang yang privat untuk menceritakan keluhan dan tujuan Anda dengan nyaman." },
  { title: "Area Terapi & Latihan", body: "Tempat sesi fisioterapi dan latihan gerak berlangsung." },
  { title: "Area Tunggu", body: "Ruang yang tenang sebelum dan sesudah sesi Anda." },
];

export default function FasilitasPage() {
  return (
    <main id="konten">
      <PageHero
        eyebrow="Fasilitas"
        title={
          <>
            Ruang yang Tenang untuk <span className="accent">Fokus Pulih.</span>
          </>
        }
        lead={<p>Suasana ELPIORA dirancang hangat dan menenangkan, dengan material alami dan cahaya lembut.</p>}
        actions={<LinkButton href={BOOKING_PATH}>Buat Janji</LinkButton>}
        image={siteConfig.images.clinicReception}
        imageVariant="reception"
      />

      <section aria-labelledby="ruang-title" className="py-24 md:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ClinicMosaic />
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <SectionIntro index="01" eyebrow="Ruang Kami" titleId="ruang-title" title={<>Apa yang Dapat <span className="accent">Anda Harapkan.</span></>} />
              <PlaceholderTag className="mt-6">Detail fasilitas menunggu konfirmasi</PlaceholderTag>
            </Reveal>
            <Reveal as="ul" delay={100} className="mt-8 divide-y divide-line border-y border-line">
              {spaces.map((s, i) => (
                <li key={s.title} className="flex gap-5 py-5">
                  <span className="font-serif text-lg text-teal-text" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="font-serif text-xl font-semibold text-deep">{s.title}</p>
                    <p className="mt-1 text-[0.9375rem] leading-relaxed text-body">{s.body}</p>
                  </div>
                </li>
              ))}
            </Reveal>
            <Reveal delay={160} className="mt-8">
              <ImagePlate
                image={siteConfig.images.clinicExercise}
                variant="studio"
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="aspect-[16/10] w-full rounded-[24px]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <ChecklistSection
        eyebrow="Kunjungan Pertama"
        titleId="pertama-title"
        tone="paper"
        title={
          <>
            Agar Kunjungan Pertama <span className="accent">Terasa Tenang.</span>
          </>
        }
        intro="Persiapan kecil yang membantu sesi pertama Anda berjalan lancar."
        items={[
          { title: "Datang 10–15 menit lebih awal", body: "Memberi waktu untuk registrasi dan bersantai sebelum sesi." },
          { title: "Kenakan pakaian yang nyaman", body: "Pakaian olahraga atau yang longgar memudahkan asesmen gerak." },
          { title: "Bawa catatan kesehatan", body: "Hasil pemeriksaan, rujukan, atau catatan dokter yang berkaitan, bila ada." },
          { title: "Siapkan pertanyaan Anda", body: "Catat hal-hal yang ingin Anda tanyakan agar tidak terlewat." },
        ]}
      />

      <section aria-labelledby="lokasi-title" className="bg-mint-100 py-24 md:py-32">
        <div className="shell grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionIntro index="02" eyebrow="Lokasi" titleId="lokasi-title" title={<>Kunjungi <span className="accent">ELPIORA.</span></>} />
            <p className="t-lead mt-6">Alamat, jam operasional, serta informasi akses dan parkir akan diumumkan di sini setelah dikonfirmasi.</p>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-7">
            <ContactCard headingLevel="h3" />
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </main>
  );
}
