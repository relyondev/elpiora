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
        Anda tidak perlu menentukannya sendiri. Pilih &ldquo;Belum yakin&rdquo; pada formulir. Ceritakan keluhan dan tujuan Anda saat
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
        Fisioterapi dapat disesuaikan untuk berbagai usia. Program untuk lansia disusun dengan memperhatikan kondisi kesehatan secara
        keseluruhan, termasuk arahan dari dokter yang merawat.
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
    a: <p>Belum. Formulir adalah permintaan janji. Tim kami akan menghubungi Anda untuk mengonfirmasi tanggal dan waktu yang tersedia.</p>,
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

/** Full FAQ (/faq), grouped by topic. General guidance only; facts come from siteConfig. */
export type FaqCategory = { id: string; title: string; intro: string; items: FaqItem[] };

export const faqCategories: FaqCategory[] = [
  {
    id: "umum",
    title: "Tentang Fisioterapi",
    intro: "Pengenalan singkat tentang fisioterapi dan pendekatan ELPIORA.",
    items: [
      {
        q: "Apa itu fisioterapi?",
        a: (
          <p>
            Fisioterapi adalah layanan kesehatan yang berfokus pada gerak dan fungsi tubuh. Fisioterapis menilai cara tubuh Anda bergerak, lalu
            menggunakan latihan, edukasi, dan penanganan lain yang sesuai untuk membantu Anda bergerak lebih nyaman dan menjalani aktivitas
            sehari-hari.
          </p>
        ),
      },
      {
        q: "Keluhan apa saja yang umumnya ditangani fisioterapis?",
        a: (
          <p>
            Contohnya keluhan otot dan sendi (seperti nyeri punggung, leher, bahu, atau lutut), pemulihan cedera olahraga, pemulihan setelah
            operasi, keluhan terkait postur dan pekerjaan, serta gangguan keseimbangan. Kesesuaian untuk kondisi Anda akan dinilai saat asesmen.
          </p>
        ),
      },
      {
        q: "Apa yang membedakan pendekatan ELPIORA?",
        a: (
          <p>
            Kami memulai dengan mendengarkan, menjelaskan setiap langkah dengan jelas, dan menyusun program yang personal sesuai tujuan Anda, dalam
            suasana yang tenang dan nyaman. Selengkapnya di halaman{" "}
            <Link href="/tentang" className={linkCls}>
              Tentang
            </Link>
            .
          </p>
        ),
      },
      generalFaq[3],
    ],
  },
  {
    id: "janji",
    title: "Janji & Jadwal",
    intro: "Cara membuat, mengubah, dan menyiapkan janji temu.",
    items: [
      generalFaq[0],
      contactFaq[0],
      {
        q: "Bagaimana jika saya perlu mengubah atau membatalkan jadwal?",
        a: <p>Silakan hubungi tim kami sesegera mungkin. Kebijakan perubahan jadwal akan diinformasikan saat konfirmasi janji.</p>,
      },
      {
        q: "Berapa lama satu sesi berlangsung?",
        a: <p>Durasi sesi dapat berbeda sesuai jenis layanan dan kebutuhan program. Tim kami akan menginformasikannya saat konfirmasi jadwal.</p>,
      },
      generalFaq[4],
    ],
  },
  {
    id: "sesi-pertama",
    title: "Sesi Pertama",
    intro: "Apa yang perlu disiapkan dan apa yang akan terjadi.",
    items: [
      generalFaq[1],
      generalFaq[2],
      {
        q: "Apa yang terjadi pada sesi pertama?",
        a: (
          <p>
            Umumnya diawali dengan percakapan tentang keluhan, riwayat, dan tujuan Anda, dilanjutkan asesmen gerak. Setelah itu fisioterapis akan
            menjelaskan temuan dan mendiskusikan rencana perawatan bersama Anda.
          </p>
        ),
      },
      contactFaq[1],
      {
        q: "Bolehkah saya ditemani keluarga?",
        a: <p>Tentu. Pendamping dapat membantu, terutama bila Anda membutuhkan bantuan bergerak atau ingin keluarga ikut memahami program latihan.</p>,
      },
    ],
  },
  {
    id: "layanan",
    title: "Layanan & Program",
    intro: "Memilih layanan dan memahami program perawatan.",
    items: [
      ...servicesFaq,
      {
        q: "Apakah saya harus menyelesaikan seluruh program?",
        a: (
          <p>
            Program disusun bersama dan dapat ditinjau ulang kapan saja. Fisioterapis akan menjelaskan perkembangan Anda agar keputusan dapat diambil
            dengan jelas.
          </p>
        ),
      },
    ],
  },
  {
    id: "home-visit",
    title: "Home Visit",
    intro: "Persiapan dan area layanan fisioterapi di rumah.",
    items: [...homeVisitFaq, contactFaq[3]],
  },
  {
    id: "biaya-privasi",
    title: "Biaya & Privasi",
    intro: "Informasi biaya, pembayaran, dan perlindungan data Anda.",
    items: [
      {
        q: "Berapa biaya layanan di ELPIORA?",
        a: (
          <p>
            Informasi biaya akan disampaikan oleh tim kami saat Anda menghubungi atau mengonfirmasi janji, sesuai layanan yang Anda pilih. Kami tidak
            mencantumkan harga di situs sampai informasinya dikonfirmasi.
          </p>
        ),
      },
      {
        q: "Apakah biaya dapat ditanggung asuransi?",
        a: <p>Ketentuan asuransi berbeda untuk setiap penyedia dan polis. Silakan tanyakan kepada tim kami serta penyedia asuransi Anda.</p>,
      },
      {
        q: "Bagaimana data saya digunakan?",
        a: (
          <p>
            Data yang Anda kirim melalui formulir digunakan untuk menghubungi Anda terkait permintaan janji. Hindari mencantumkan detail medis yang
            tidak diperlukan di formulir. Informasi kesehatan akan dibahas langsung bersama fisioterapis.
          </p>
        ),
      },
    ],
  },
];
