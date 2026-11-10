import type { Metadata } from "next";
import { CareJourney } from "@/components/CareJourney";
import { TopicGrid } from "@/components/ContentSections";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Hero } from "@/components/Hero";
import { HomeVisitAndVoices } from "@/components/HomeVisitTeaser";
import { ServicePreview } from "@/components/ServiceGrid";
import { ValueProps } from "@/components/ValueProps";
import { HomeIcon, MovementIcon, ProgressIcon, SpineIcon, SportIcon, WorkplaceIcon } from "@/components/ui/Icon";
import { generalFaq } from "@/content/faq";
import { siteConfig } from "@/config/site";
import { buildClinicJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  alternates: siteConfig.siteUrl ? { canonical: "/" } : undefined,
};

/** Common reasons people consult a physiotherapist — general education, assessed individually. */
const whenToConsult = [
  { title: "Nyeri punggung & leher", body: "Keluhan yang membuat duduk, bekerja, atau tidur terasa tidak nyaman.", Icon: SpineIcon, href: "/layanan/pain-movement" },
  { title: "Cedera saat berolahraga", body: "Ingin kembali berlatih dengan tahapan yang aman dan terarah.", Icon: SportIcon, href: "/layanan/sports-rehabilitation" },
  { title: "Keluhan karena pekerjaan", body: "Pegal atau nyeri akibat posisi kerja dan gerakan berulang.", Icon: WorkplaceIcon, href: "/layanan/workplace-ergonomics" },
  { title: "Pemulihan setelah operasi", body: "Mengembalikan gerak dan kekuatan sesuai arahan dokter Anda.", Icon: ProgressIcon, href: "/layanan/pain-movement" },
  { title: "Keseimbangan & mobilitas", body: "Merasa kurang stabil saat berjalan atau berpindah posisi.", Icon: MovementIcon, href: "/layanan/wellness-movement" },
  { title: "Sulit datang ke klinik", body: "Membutuhkan sesi di rumah karena mobilitas atau kondisi tertentu.", Icon: HomeIcon, href: "/home-visit" },
];

export default function Home() {
  const jsonLd = buildClinicJsonLd();

  return (
    <>
      <main id="konten">
        <Hero />
        <ValueProps />
        <ServicePreview />
        <TopicGrid
          index="03"
          eyebrow="Alasan umum berkonsultasi"
          titleId="kapan-title"
          title={
            <>
              Kapan Sebaiknya <span className="accent">Berkonsultasi?</span>
            </>
          }
          intro="Beberapa alasan umum orang berkonsultasi dengan fisioterapis. Bila salah satunya terasa dekat dengan keseharian Anda, konsultasi awal dapat menjadi langkah pertama."
          items={whenToConsult}
          note="Informasi ini bersifat umum. Kesesuaian layanan ditentukan setelah asesmen. Untuk keluhan berat, mendadak, atau disertai gejala yang mengkhawatirkan, segera periksakan diri ke dokter atau IGD terdekat."
        />
        <CareJourney index="04" />
        <HomeVisitAndVoices />
        <Faq items={generalFaq} index="05" />
        <FinalCta />
      </main>
      {jsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      ) : null}
    </>
  );
}
