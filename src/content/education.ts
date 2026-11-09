/**
 * Education hub plan (blueprint section H). The hub stays closed (siteConfig.publish.education = false)
 * until clinically reviewed articles exist. Titles are the blueprint's priority list; none is published.
 */
export const educationCategories: { title: string; articles: string[] }[] = [
  {
    title: "Pain & Movement",
    articles: [
      "Nyeri Punggung: Penyebab Umum dan Kapan Perlu Diperiksa",
      "Nyeri Leher Setelah Bekerja: Faktor yang Bisa Berperan",
      "Nyeri Lutut Saat Naik Tangga: Apa yang Perlu Diperhatikan?",
      "Apakah Postur Harus Selalu Tegak?",
    ],
  },
  {
    title: "Sports Rehabilitation",
    articles: [
      "Cedera Olahraga: Kenali Tanda Awal dan Langkah Berikutnya",
      "Keseleo Pergelangan Kaki: Dari Fase Awal Hingga Kembali Bergerak",
      "Mengapa Return to Sport Tidak Cukup Berdasarkan Hilangnya Nyeri",
      "Gerak Pemanasan untuk Padel, Badminton, dan Sepak Bola: Prinsip Umum",
    ],
  },
  {
    title: "Neurological Care",
    articles: [
      "Peran Fisioterapi dalam Rehabilitasi Setelah Stroke",
      "Latihan Keseimbangan: Mengapa Penting pada Lansia?",
      "Parkinson dan Mobilitas: Apa yang Dapat Dilatih?",
      "Panduan Pendamping Pascastroke di Rumah: Aspek Keselamatan Dasar",
    ],
  },
  {
    title: "Workplace Ergonomics",
    articles: [
      "Duduk Lama dan Pegal: Apa yang Sebenarnya Berperan?",
      "Menata Meja Kerja untuk Kenyamanan dan Variasi Gerak",
      "Jeda Aktif di Kantor: Cara Memulainya",
      "Mengelola Keluhan Leher dan Bahu Saat Kerja Komputer",
    ],
  },
  {
    title: "Wellness",
    articles: [
      "Mobility vs Flexibility: Apa Bedanya?",
      "Strength Training untuk Usia Dewasa dan Lansia",
      "Memulai Aktivitas Fisik Setelah Lama Tidak Berolahraga",
      "Keseimbangan, Kekuatan, dan Kemandirian Saat Menua",
    ],
  },
  {
    title: "Home Visit & Services",
    articles: [
      "Apa Itu Home Visit Physiotherapy?",
      "Siapa yang Mungkin Membutuhkan Fisioterapi di Rumah?",
      "Apa yang Terjadi Saat Asesmen Fisioterapi Pertama?",
      "Dry Needling: Indikasi, Keterbatasan, dan Pertimbangan Keamanan",
    ],
  },
];
