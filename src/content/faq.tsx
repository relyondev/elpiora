import Link from "next/link";
import type { FaqItem } from "@/components/Faq";

/**
 * FAQ content from the blueprint (page 27). Answers that depend on operational facts the clinic has not
 * confirmed (prices, policies, insurance, packages) say so plainly instead of inventing a policy.
 */

const link = "font-semibold underline decoration-gold underline-offset-4";
const pending = (what: string) => (
  <p>
    {what} sedang kami konfirmasi dan akan diperbarui di halaman ini. Untuk informasi terbaru, hubungi tim lewat halaman{" "}
    <Link href="/contact" className={link}>
      Contact
    </Link>
    .
  </p>
);

export type FaqCategory = { id: string; title: string; intro: string; items: FaqItem[] };

const aboutPhysio: FaqItem[] = [
  {
    q: "Apa itu fisioterapi?",
    a: <p>Fisioterapi adalah pelayanan kesehatan yang membantu menilai dan meningkatkan gerak, fungsi, serta kemampuan beraktivitas melalui pendekatan yang disesuaikan dengan kondisi Anda.</p>,
  },
  {
    q: "Apakah harus sakit terlebih dahulu?",
    a: <p>Tidak selalu. Sebagian layanan bertujuan meningkatkan kapasitas gerak atau mengelola risiko sebelum muncul keluhan.</p>,
  },
  {
    q: "Apakah perlu rujukan dokter untuk fisioterapi?",
    a: <p>Bergantung pada kondisi, jalur layanan, dan persyaratan operasional atau klinis yang berlaku. Tim kami akan membantu menjelaskannya.</p>,
  },
  {
    q: "Apakah sesi pertama langsung terapi?",
    a: <p>Umumnya diawali penilaian lebih dulu. Tindakan bergantung pada hasil pemeriksaan dan keselamatan Anda.</p>,
  },
  {
    q: "Berapa sesi yang dibutuhkan?",
    a: <p>Berbeda untuk setiap pasien. Jumlah sesi ditentukan setelah asesmen dan evaluasi perkembangan.</p>,
  },
  {
    q: "Apakah terapi selalu menyakitkan?",
    a: <p>Tidak. Respons dan toleransi Anda terhadap latihan atau teknik perlu dikomunikasikan kepada fisioterapis agar program dapat disesuaikan.</p>,
  },
  {
    q: "Apakah semua pasien cocok untuk dry needling?",
    a: (
      <p>
        Tidak. Ada indikasi dan risiko yang perlu diskrining. Baca penjelasannya di halaman{" "}
        <Link href="/services/dry-needling" className={link}>
          Dry Needling Therapy
        </Link>
        .
      </p>
    ),
  },
];

const homeVisit: FaqItem[] = [
  {
    q: "Apakah bisa terapi di rumah?",
    a: (
      <p>
        Layanan Home Visit direncanakan untuk wilayah yang ditentukan dan bergantung pada ketersediaan tim. Lihat{" "}
        <Link href="/home-visit" className={link}>
          halaman Home Visit
        </Link>
        .
      </p>
    ),
  },
  {
    q: "Apa persiapan di rumah?",
    a: <p>Siapkan tempat yang aman, ruang gerak yang cukup, pakaian yang nyaman, dan informasi medis yang relevan.</p>,
  },
  {
    q: "Apakah lansia dan pasien stroke bisa mendapat Home Visit?",
    a: <p>Dapat dipertimbangkan berdasarkan kondisi dan penilaian keselamatan oleh fisioterapis.</p>,
  },
  { q: "Apakah ada biaya transport?", a: pending("Kebijakan biaya perjalanan per zona") },
];

const booking: FaqItem[] = [
  {
    q: "Bagaimana memilih layanan yang sesuai?",
    a: (
      <p>
        Anda tidak perlu menentukannya sendiri. Hubungi tim atau pilih &ldquo;Belum yakin&rdquo; di{" "}
        <Link href="/booking" className={link}>
          formulir booking
        </Link>
        . Pemilihan akhir didasarkan pada asesmen.
      </p>
    ),
  },
  { q: "Bisakah mengubah jadwal (reschedule)?", a: pending("Kebijakan perubahan jadwal") },
  { q: "Apa metode pembayarannya?", a: pending("Informasi metode pembayaran") },
  { q: "Apakah menerima asuransi?", a: pending("Informasi penerimaan asuransi") },
  { q: "Apakah tersedia paket?", a: pending("Informasi paket layanan") },
];

const safety: FaqItem[] = [
  {
    q: "Bagaimana bila kondisi saya darurat?",
    a: <p>Website dan WhatsApp ELPIORA tidak untuk keadaan darurat. Hubungi layanan darurat 119 atau segera menuju IGD terdekat.</p>,
  },
  {
    q: "Bagaimana privasi informasi kesehatan saya?",
    a: (
      <p>
        Data yang Anda kirim digunakan untuk menghubungi Anda terkait permintaan janji. Penjelasan lengkap tersedia di{" "}
        <Link href="/privacy-policy" className={link}>
          kebijakan privasi
        </Link>
        .
      </p>
    ),
  },
];

export const faqCategories: FaqCategory[] = [
  { id: "fisioterapi", title: "Tentang fisioterapi", intro: "Pengenalan singkat tentang fisioterapi.", items: aboutPhysio },
  { id: "home-visit", title: "Home Visit", intro: "Fisioterapi di rumah: persiapan dan area layanan.", items: homeVisit },
  { id: "booking", title: "Booking dan pembayaran", intro: "Memilih layanan, jadwal, dan pembayaran.", items: booking },
  { id: "keamanan", title: "Keamanan dan rujukan", intro: "Kondisi darurat dan perlindungan data.", items: safety },
];

/** Five questions for the home page (blueprint, home section 09). */
export const homeFaq: FaqItem[] = [
  aboutPhysio[2],
  {
    q: "Apakah konsultasi awal termasuk asesmen?",
    a: <p>Umumnya sesi pertama diawali penilaian. Tindakan bergantung pada hasil pemeriksaan dan keselamatan Anda.</p>,
  },
  {
    q: "Berapa kali sesi fisioterapi biasanya diperlukan?",
    a: <p>Berbeda untuk setiap pasien. Jumlah sesi ditentukan setelah asesmen dan evaluasi perkembangan.</p>,
  },
  homeVisit[0],
  booking[0],
];
