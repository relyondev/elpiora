import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { StepsBlock } from "@/components/DetailPage";
import { PageHero } from "@/components/PageHero";
import { LinkButton } from "@/components/ui/Button";
import { AssessmentIcon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";
import { bookingHref } from "@/lib/booking";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "Pendekatan Rehabilitasi Personal | ELPIORA",
  "Cara ELPIORA bekerja: percakapan awal, asesmen gerak dan fungsi, rencana bersama, latihan aktif, program rumah, dan pemantauan kemajuan.",
  "/about/our-approach",
);

const steps = [
  { title: "Initial conversation", body: "Keluhan utama, riwayat yang relevan, aktivitas, tujuan, serta informasi medis yang perlu diketahui." },
  { title: "Movement & functional assessment", body: "Gerak, kekuatan, keseimbangan, kapasitas berjalan, dan toleransi aktivitas, sesuai kondisi dan kelayakan." },
  { title: "Shared care plan", body: "Tujuan jangka pendek dan panjang, pilihan intervensi, dan estimasi evaluasi ulang. Estimasi bukan jaminan." },
  { title: "Active treatment", body: "Latihan terapeutik, edukasi, strategi pengelolaan aktivitas, dan teknik fisik bila sesuai indikasi." },
  { title: "Home programme", body: "Instruksi yang realistis untuk membantu kemajuan di luar sesi." },
  { title: "Outcome monitoring", body: "Menilai perubahan keluhan, kemampuan fungsi, dan target pasien pada kunjungan lanjutan." },
];

export default function OurApproachPage() {
  return (
    <main id="konten">
      <PageHero
        eyebrow="Our Approach"
        parents={[{ label: "About", href: "/about" }]}
        title={
          <>
            Your Recovery, <span className="accent">Your Journey.</span>
          </>
        }
        lead={
          <p>
            Tidak ada satu program fisioterapi yang sama untuk semua orang. Kami menyesuaikan pendekatan berdasarkan hasil asesmen, kondisi kesehatan,
            kebutuhan aktivitas, dan tujuan yang penting bagi pasien.
          </p>
        }
        actions={
          <>
            <LinkButton href={bookingHref()} variant="champagne">
              Konsultasi &amp; Booking
            </LinkButton>
            <LinkButton href="/services" variant="secondary-on-dark">
              Lihat Layanan
            </LinkButton>
          </>
        }
        image={siteConfig.images.about}
        note={{ label: "Enam tahap", text: "Dari percakapan awal sampai pemantauan hasil", Icon: AssessmentIcon }}
      />

      <StepsBlock block={{ id: "tahap", title: ["Dari percakapan awal ", "sampai pemantauan"], items: steps }} pid="approach-steps" />

      <Faq
        tone="paper"
        titleId="approach-faq"
        title={
          <>
            Pertanyaan <span className="accent">umum.</span>
          </>
        }
        items={[
          { q: "Apakah semua sesi sama?", a: <p>Tidak. Isi sesi menyesuaikan hasil asesmen, respons Anda terhadap latihan, dan tujuan yang disepakati.</p> },
          { q: "Apakah latihan di rumah perlu?", a: <p>Umumnya membantu. Program rumah yang realistis mendukung kemajuan di antara sesi, dan fisioterapis akan menyesuaikannya dengan kemampuan Anda.</p> },
          { q: "Kapan saya perlu ke dokter?", a: <p>Bila muncul tanda yang memerlukan pemeriksaan medis, fisioterapis akan menyarankan rujukan. Untuk kondisi darurat, hubungi 119 atau segera ke IGD.</p> },
          { q: "Bagaimana kemajuan diukur?", a: <p>Lewat perubahan keluhan, kemampuan fungsi, dan target yang Anda tetapkan, yang ditinjau kembali pada kunjungan lanjutan.</p> },
        ]}
      />

      <FinalCta />
    </main>
  );
}
