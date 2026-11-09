import Link from "next/link";
import type { FaqItem } from "@/components/Faq";
import { BOOKING_PATH, siteConfig } from "@/config/site";

/** FAQ content per page. Safe, general guidance only — no triage or outcome promises. */

const linkCls = "underline decoration-gold underline-offset-4";

export const generalFaq: FaqItem[] = [
  {
    q: "Bagaimana cara membuat janji?",
    a: (
      <p>
        Isi <Link href={BOOKING_PATH} className={linkCls}>formulir permintaan janji</Link> di halaman Kontak. Tim kami akan menghubungi Anda
        untuk mengonfirmasi jadwal yang tersedia.
      </p>
    ),
  },
  {
    q: "Apa yang perlu dipersiapkan sebelum sesi?",
    a: (
      <p>
        Kenakan pakaian yang nyaman dan memudahkan bergerak. Jika ada, bawa hasil pemeriksaan, catatan medis, atau rujukan sebelumnya yang
        berkaitan dengan keluhan Anda. Datang beberapa menit lebih awal juga membantu sesi berjalan lebih tenang.
      </p>
    ),
  },
  {
    q: "Apakah perlu konsultasi terlebih dahulu?",
    a: (
      <p>
        Sesi pertama umumnya diawali dengan konsultasi dan asesmen, agar fisioterapis dapat memahami kondisi Anda sebelum menyusun program.
        Untuk pertanyaan seputar kebutuhan rujukan, silakan hubungi tim kami.
      </p>
    ),
  },
  {
    q: "Bagaimana mengetahui layanan yang sesuai?",
    a: (
      <p>
        Anda tidak perlu menentukannya sendiri — pilih &ldquo;Belum yakin&rdquo; pada formulir. Ceritakan keluhan dan tujuan Anda saat
        konsultasi, dan fisioterapis akan membantu menjelaskan pilihan yang tersedia. Bila keluhan terasa berat, muncul tiba-tiba, atau Anda
        ragu, sebaiknya konsultasikan juga dengan dokter.
      </p>
    ),
  },
  {
    q: "Di mana lokasi ELPIORA?",
    a: siteConfig.location.address ? (
      <p>{siteConfig.location.address}</p>
    ) : (
      <p>Informasi alamat dan lokasi klinik sedang kami siapkan dan akan diumumkan di halaman Kontak.</p>
    ),
  },
];

export const servicesFaq: FaqItem[] = [
  {
    q: "Apakah saya memerlukan rujukan untuk fisioterapi?",
    a: <p>Kebutuhan rujukan dapat berbeda untuk tiap kondisi. Tim kami akan membantu menjelaskan saat Anda menghubungi kami.</p>,
  },
  {
    q: "Berapa banyak sesi yang saya butuhkan?",
    a: (
      <p>
        Jumlah sesi berbeda untuk setiap orang, tergantung kondisi, tujuan, dan perkembangan Anda. Fisioterapis akan mendiskusikan perkiraan
        program setelah asesmen.
      </p>
    ),
  },
  {
    q: "Apakah fisioterapi sesuai untuk lansia?",
    a: (
      <p>
        Fisioterapi dapat disesuaikan untuk berbagai usia. Program untuk lansia disusun dengan memperhatikan kondisi kesehatan secara keseluruhan
        — termasuk arahan dari dokter yang merawat.
      </p>
    ),
  },
];

export const homeVisitFaq: FaqItem[] = [
  {
    q: "Peralatan apa yang dibawa saat home visit?",
    a: (
      <p>
        Fisioterapis akan menginformasikan kebutuhan peralatan sebelum kunjungan. Umumnya sesi memanfaatkan peralatan latihan portabel yang
        disesuaikan dengan program Anda.
      </p>
    ),
  },
  {
    q: "Berapa lama satu sesi home visit?",
    a: <p>Durasi sesi akan dikonfirmasi oleh tim saat penjadwalan, sesuai kebutuhan program Anda.</p>,
  },
  {
    q: "Area mana saja yang dilayani?",
    a: siteConfig.homeVisit.coverageAreas.length ? (
      <p>Saat ini: {siteConfig.homeVisit.coverageAreas.join(", ")}. Silakan konfirmasi alamat Anda dengan tim kami.</p>
    ) : (
      <p>Area layanan home visit sedang kami konfirmasi dan akan diumumkan di halaman ini.</p>
    ),
  },
];

export const contactFaq: FaqItem[] = [
  {
    q: "Apakah permintaan dari formulir langsung menjadi janji?",
    a: <p>Belum. Formulir adalah permintaan janji — tim kami akan menghubungi Anda untuk mengonfirmasi tanggal dan waktu yang tersedia.</p>,
  },
  {
    q: "Apa yang sebaiknya saya tulis di kolom catatan?",
    a: (
      <p>
        Cukup gambaran singkat, misalnya keluhan utama dan tujuan Anda. Detail medis lengkap akan dibahas langsung bersama fisioterapis saat
        konsultasi.
      </p>
    ),
  },
  generalFaq[1],
  {
    q: "Bisakah saya meminta home visit?",
    a: (
      <p>
        Bisa diajukan dengan memilih &ldquo;Kunjungan ke rumah&rdquo; pada formulir. Ketersediaan dan area layanan akan dikonfirmasi oleh tim
        ELPIORA.
      </p>
    ),
  },
];
