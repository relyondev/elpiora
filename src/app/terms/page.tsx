import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { PlaceholderTag } from "@/components/ui/Logo";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("Syarat Penggunaan | ELPIORA", "Ketentuan penggunaan situs ELPIORA Physiotherapy & Wellness.", "/terms");

export default function TermsPage() {
  return (
    <LegalPage
      title="Syarat Penggunaan"
      draft
      lead="Ketentuan dasar untuk menggunakan situs ini. Hal yang bergantung pada kebijakan operasional ELPIORA ditandai sampai dikonfirmasi."
      sections={[
        {
          title: "Informasi di situs",
          body: (
            <p>
              Isi situs ini bersifat edukasi umum. Informasi tersebut tidak menggantikan diagnosis, pemeriksaan, atau rencana penanganan individual dari tenaga
              kesehatan. Selengkapnya ada di{" "}
              <Link href="/medical-disclaimer" className="font-semibold underline decoration-gold underline-offset-4">
                Medical Disclaimer
              </Link>
              .
            </p>
          ),
        },
        {
          title: "Permintaan janji",
          body: <p>Mengirim formulir booking berarti mengajukan permintaan, bukan membuat janji yang pasti. Jadwal baru berlaku setelah tim ELPIORA menghubungi Anda dan mengonfirmasinya.</p>,
        },
        {
          title: "Tarif, pembatalan, dan pembayaran",
          body: (
            <>
              <p>Tarif, kebijakan pembatalan, perubahan jadwal, dan metode pembayaran akan dijelaskan sebelum Anda mengonfirmasi layanan.</p>
              <PlaceholderTag>Ketentuan menunggu konfirmasi</PlaceholderTag>
            </>
          ),
        },
        {
          title: "Kondisi darurat",
          body: <p>Situs dan WhatsApp ELPIORA tidak untuk keadaan darurat. Hubungi 119 atau segera menuju IGD terdekat.</p>,
        },
        {
          title: "Konten dan merek",
          body: <p>Nama, logo, teks, dan materi visual ELPIORA di situs ini dilindungi. Mohon tidak menggunakannya tanpa izin tertulis.</p>,
        },
        {
          title: "Batasan tanggung jawab dan hukum yang berlaku",
          body: (
            <>
              <p>Ketentuan mengenai batasan tanggung jawab dan hukum yang berlaku akan dirumuskan bersama konsultan hukum ELPIORA.</p>
              <PlaceholderTag>Menunggu tinjauan hukum</PlaceholderTag>
            </>
          ),
        },
      ]}
    />
  );
}
