/**
 * Long-form page content from the ELPIORA content blueprint (v1.0, 10 Nov 2026), sections D and E.
 *
 * Editorial rules (blueprint sections J and antislop):
 * - General, educational physiotherapy information. Not a diagnosis, not a promise of results.
 * - "dapat / umumnya / sesuai kebutuhan" instead of guaranteed outcomes. No prices, session counts, success
 *   rates, statistics, named staff or credentials.
 * - Every item here still needs review by ELPIORA's physiotherapists before final publication
 *   (blueprint J.2). Detail pages show a visible review note until that is done.
 */

export type Faq = { q: string; a: string };

export type Block = {
  id: string;
  /** [plain part, emphasised part]. The second part is rendered in the accent colour. */
  title: [string, string?];
  intro?: string;
  items: { title: string; body?: string }[];
  note?: string;
  tone?: "surface" | "paper" | "mint";
  /** "checklist" (default) shows ticks; "steps" shows numbered stages. */
  layout?: "checklist" | "steps";
};

export type RedFlag = { title: string; intro: string; items: string[]; outro?: string };

export type Detail = {
  slug: string;
  /** Breadcrumb, menu and footer label. */
  navTitle: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  /** [plain part, emphasised part] */
  h1: [string, string?];
  lead: string;
  blocks: Block[];
  redFlag?: RedFlag;
  faq: Faq[];
  related: { label: string; href: string }[];
  cta: string;
  /** Shown as a visible tag while the availability or qualification is unconfirmed. */
  unconfirmed?: boolean;
};

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export const serviceDetails: Record<string, Detail> = {
  "musculoskeletal-physiotherapy": {
    slug: "musculoskeletal-physiotherapy",
    navTitle: "Pain & Movement",
    summary: "Nyeri leher, bahu, punggung, pinggang, lutut, pinggul, kekakuan sendi, pemulihan cedera dan operasi ortopedi.",
    seoTitle: "Fisioterapi Nyeri Punggung, Leher & Sendi | ELPIORA",
    seoDescription:
      "Fisioterapi untuk nyeri punggung, leher, bahu, lutut, dan sendi di ELPIORA: penilaian gerak, program latihan, dan pemantauan kemajuan.",
    h1: ["Move with Less Limitation.", "Live with More Confidence."],
    lead: "Keluhan pada otot, sendi, dan tulang belakang dapat memengaruhi pekerjaan, istirahat, olahraga, serta aktivitas harian. Layanan Pain & Movement ELPIORA berfokus pada penilaian gerak, pengelolaan keluhan, dan peningkatan kapasitas fungsional sesuai kondisi individu.",
    blocks: [
      {
        id: "kondisi",
        title: ["Untuk kondisi dan ", "keluhan berikut"],
        items: [
          { title: "Nyeri leher, bahu, punggung, dan pinggang" },
          { title: "Nyeri lutut atau pinggul" },
          { title: "Kekakuan dan keterbatasan rentang gerak" },
          { title: "Cedera jaringan lunak" },
          { title: "Masalah gerak setelah imobilisasi" },
          { title: "Rehabilitasi ortopedi pascaoperasi", body: "Dengan rujukan atau izin medis sesuai kebutuhan." },
        ],
      },
      {
        id: "dinilai",
        title: ["Yang kami ", "nilai"],
        tone: "paper",
        items: [
          { title: "Lokasi dan pola keluhan" },
          { title: "Pemicu aktivitas" },
          { title: "Kekuatan dan mobilitas" },
          { title: "Kontrol gerak" },
          { title: "Fungsi dan tujuan Anda" },
          { title: "Tanda yang memerlukan rujukan medis" },
        ],
      },
      {
        id: "program",
        title: ["Yang mungkin masuk ", "dalam program"],
        items: [
          { title: "Edukasi tentang keluhan" },
          { title: "Penyesuaian aktivitas" },
          { title: "Latihan mobilitas" },
          { title: "Penguatan" },
          { title: "Latihan keseimbangan dan koordinasi bila perlu" },
          { title: "Terapi manual sebagai pendamping bila relevan" },
          { title: "Program latihan mandiri" },
        ],
      },
      {
        id: "tujuan",
        title: ["Tujuan yang sering ", "dibawa pasien"],
        tone: "mint",
        items: [
          { title: "Lebih nyaman saat bekerja" },
          { title: "Lebih mudah naik tangga" },
          { title: "Meningkatkan toleransi berjalan" },
          { title: "Kembali pada aktivitas pilihan" },
        ],
        note: "Hasil bervariasi antar individu.",
      },
      {
        id: "alur",
        title: ["Alur ", "layanan"],
        layout: "steps",
        items: [
          { title: "Assessment", body: "Mendengarkan keluhan, lalu menilai gerak dan fungsi." },
          { title: "Personalised plan", body: "Menyusun tujuan dan rencana yang sesuai kebutuhan." },
          { title: "Exercise & treatment", body: "Latihan dan penanganan sesuai indikasi, dengan pemantauan toleransi." },
          { title: "Progress review", body: "Menilai perubahan dan menyesuaikan program." },
        ],
      },
    ],
    redFlag: {
      title: "Kapan perlu evaluasi medis segera?",
      intro: "Cari pertolongan medis darurat bila nyeri punggung disertai:",
      items: ["Kelemahan yang memburuk", "Mati rasa di area selangkangan", "Gangguan kontrol berkemih atau BAB yang baru terjadi"],
    },
    faq: [
      {
        q: "Apakah semua nyeri punggung perlu dipijat?",
        a: "Tidak. Penyebab dan faktor yang memengaruhi nyeri bervariasi. Asesmen membantu menentukan penanganan yang sesuai.",
      },
      {
        q: "Berapa sesi yang dibutuhkan?",
        a: "Jumlah sesi ditentukan oleh kondisi, tujuan, dan respons Anda terhadap terapi setelah evaluasi.",
      },
      {
        q: "Apakah nyeri saat latihan itu normal?",
        a: "Tingkat ketidaknyamanan yang dapat ditoleransi dan respons setelah latihan perlu didiskusikan dengan fisioterapis, agar program dapat disesuaikan.",
      },
      {
        q: "Kapan perlu dokter segera?",
        a: "Misalnya bila nyeri punggung disertai kelemahan yang memburuk, mati rasa di area selangkangan, atau gangguan kontrol berkemih atau BAB yang baru terjadi. Cari pertolongan medis darurat.",
      },
    ],
    related: [
      { label: "Nyeri Punggung & Leher", href: "/conditions/back-neck-pain" },
      { label: "Nyeri Lutut & Sendi", href: "/conditions/knee-joint-pain" },
      { label: "Rehabilitasi Pascaoperasi", href: "/programs/post-operative-rehabilitation" },
      { label: "Home Visit", href: "/home-visit" },
    ],
    cta: "Konsultasikan Keluhan Gerak Anda",
  },

  "sports-rehabilitation": {
    slug: "sports-rehabilitation",
    navTitle: "Sports Rehabilitation",
    summary: "Penilaian cedera olahraga, latihan pemulihan, penguatan, kontrol gerak, pencegahan cedera berulang, dan return-to-sport.",
    seoTitle: "Fisioterapi Cedera Olahraga & Sports Rehabilitation | ELPIORA",
    seoDescription:
      "Rehabilitasi cedera olahraga di ELPIORA: penilaian cedera, latihan pemulihan, penguatan, dan tahapan kembali berolahraga yang terarah.",
    h1: ["Recover with Purpose.", "Return with Confidence."],
    lead: "Cedera olahraga membutuhkan lebih dari berhenti berlatih. ELPIORA membantu menilai cedera, memulihkan fungsi, membangun kembali kekuatan, dan menyiapkan tahapan kembali beraktivitas sesuai kapasitas serta kebutuhan olahraga Anda.",
    blocks: [
      {
        id: "kondisi",
        title: ["Kondisi yang ", "relevan"],
        items: [
          { title: "Keseleo pergelangan kaki" },
          { title: "Cedera lutut" },
          { title: "Keluhan hamstring atau betis" },
          { title: "Nyeri bahu pada olahraga raket" },
          { title: "Cedera akibat penggunaan berulang" },
          { title: "Rehabilitasi pascaoperasi ACL", body: "Sesuai fase dan arahan medis." },
        ],
      },
      {
        id: "tahapan",
        title: ["Tahapan ", "rehabilitasi"],
        layout: "steps",
        tone: "paper",
        items: [
          { title: "Pemeriksaan dan keselamatan" },
          { title: "Kontrol keluhan dan toleransi beban" },
          { title: "Mobility, strength, endurance" },
          { title: "Balance, agility, neuromuscular control" },
          { title: "Pengujian kesiapan return to sport" },
          { title: "Strategi mencegah cedera berulang" },
        ],
      },
      {
        id: "aktivitas",
        title: ["Aktivitas yang ", "sering dijalani pasien"],
        items: [
          { title: "Padel" },
          { title: "Badminton" },
          { title: "Golf" },
          { title: "Mini soccer atau sepak bola" },
          { title: "Lari" },
          { title: "Gym dan olahraga rekreasi" },
        ],
        note: "Daftar ini menunjukkan jenis aktivitas yang sering dijalani pasien. Ini bukan klaim spesialisasi untuk tiap olahraga.",
      },
      {
        id: "dipantau",
        title: ["Hasil yang ", "dipantau"],
        tone: "mint",
        items: [
          { title: "Aktivitas fungsional" },
          { title: "Rentang gerak" },
          { title: "Kekuatan" },
          { title: "Toleransi beban" },
          { title: "Tugas khusus olahraga" },
          { title: "Kebutuhan kompetisi" },
        ],
      },
    ],
    redFlag: {
      title: "Kapan perlu evaluasi medis?",
      intro: "Hentikan aktivitas yang memperburuk keluhan dan minta penilaian sesuai tingkat keparahan bila Anda mengalami:",
      items: ["Nyeri tajam", "Bengkak", "Sulit menumpu berat badan", "Sendi terasa tidak stabil"],
    },
    faq: [
      {
        q: "Kapan boleh olahraga lagi?",
        a: "Bergantung pada diagnosis, asesmen, izin medis, dan kriteria fungsi, bukan hanya lamanya waktu.",
      },
      {
        q: "Haruskah MRI?",
        a: "Tidak selalu. Kebutuhan pemeriksaan penunjang ditentukan oleh dokter dan hasil asesmen. Fisioterapis akan menyarankan rujukan bila diperlukan.",
      },
      {
        q: "Apakah latihan setelah operasi berbeda?",
        a: "Ya. Latihan mengikuti prosedur yang dilakukan, instruksi dokter, dan fase penyembuhan, dengan izin medis yang sesuai.",
      },
      {
        q: "Bisakah dilakukan di rumah?",
        a: "Dapat dipertimbangkan, bergantung pada kebutuhan, keselamatan, dan area layanan Home Visit yang sedang dikonfirmasi.",
      },
    ],
    related: [
      { label: "Cedera Olahraga", href: "/conditions/sports-injuries" },
      { label: "Rehabilitasi Pascaoperasi", href: "/programs/post-operative-rehabilitation" },
      { label: "Event Physiotherapy", href: "/event-physiotherapy" },
      { label: "Home Visit", href: "/home-visit" },
    ],
    cta: "Mulai Sports Rehabilitation",
  },

  "workplace-ergonomics": {
    slug: "workplace-ergonomics",
    navTitle: "Workplace Health & Ergonomics",
    summary: "Evaluasi workstation, edukasi posisi kerja, strategi bergerak, latihan kekuatan dan mobilitas bagi pekerja.",
    seoTitle: "Fisioterapi Ergonomi Kerja & Nyeri Akibat Duduk | ELPIORA",
    seoDescription:
      "Layanan fisioterapi untuk keluhan akibat aktivitas kerja: evaluasi workstation, edukasi posisi kerja, strategi bergerak, dan latihan.",
    h1: ["Work Comfortably.", "Move Confidently."],
    lead: "Aktivitas kerja berulang, posisi yang dipertahankan terlalu lama, serta kurangnya variasi gerak dapat berkontribusi terhadap keluhan tubuh. Program Workplace Health & Ergonomics ELPIORA membantu mengevaluasi kebutuhan individu dan lingkungan kerja untuk mengembangkan kebiasaan bergerak yang lebih nyaman.",
    blocks: [
      {
        id: "layanan",
        title: ["Yang termasuk ", "dalam layanan ini"],
        items: [
          { title: "Ergonomic & workstation assessment" },
          { title: "Desk setup review" },
          { title: "Program untuk keluhan leher, bahu, dan punggung" },
          { title: "Edukasi postur dan gerak" },
          { title: "Latihan mobilitas dan kekuatan" },
          { title: "Strategi microbreak" },
          { title: "Workshop kelompok di tempat kerja" },
          { title: "Asesmen korporat di lokasi", body: "Menunggu konfirmasi kesiapan." },
        ],
      },
      {
        id: "prinsip",
        title: ["Prinsip ", "yang kami pegang"],
        tone: "mint",
        items: [
          {
            title: "Tidak ada satu postur sempurna untuk semua orang",
            body: "Fokus kami pada variasi posisi, kapasitas tubuh, ergonomi yang sesuai, dan perubahan yang praktis.",
          },
        ],
      },
      {
        id: "untuk",
        title: ["Untuk ", "siapa"],
        tone: "paper",
        items: [
          { title: "Pekerja kantor" },
          { title: "Pekerja jarak jauh (remote)" },
          { title: "Pekerja dengan gerakan berulang" },
          { title: "Perusahaan yang ingin mengadakan workshop kebugaran kerja", body: "Lihat halaman Corporate Wellness." },
        ],
      },
    ],
    faq: [
      {
        q: "Apakah ada postur duduk yang paling benar?",
        a: "Tidak ada satu postur sempurna untuk semua orang. Variasi posisi dan jeda bergerak biasanya lebih berarti daripada mempertahankan satu posisi.",
      },
      {
        q: "Apakah saya perlu membawa foto area kerja?",
        a: "Foto atau video singkat posisi kerja Anda dapat membantu fisioterapis memberi saran yang lebih tepat.",
      },
      {
        q: "Apakah ada layanan untuk perusahaan?",
        a: "Program korporat sedang dipersiapkan. Ajukan pertanyaan melalui halaman Corporate Wellness.",
      },
    ],
    related: [
      { label: "Corporate Wellness", href: "/corporate-wellness" },
      { label: "Nyeri Punggung & Leher", href: "/conditions/back-neck-pain" },
      { label: "Pain & Movement", href: "/services/musculoskeletal-physiotherapy" },
    ],
    cta: "Konsultasi Keluhan Akibat Kerja",
  },

  "dry-needling": {
    slug: "dry-needling",
    navTitle: "Dry Needling Therapy",
    unconfirmed: true,
    summary: "Teknik dengan jarum halus untuk indikasi muskuloskeletal terpilih, berdasarkan asesmen, persetujuan, dan kompetensi klinisi.",
    seoTitle: "Dry Needling Fisioterapi | Informasi & Konsultasi ELPIORA",
    seoDescription:
      "Informasi tentang dry needling dalam fisioterapi: tujuan, keterbatasan, risiko, dan pertimbangan keamanan. Ketersediaan di ELPIORA sedang dikonfirmasi.",
    h1: ["Dry Needling:", "A Targeted Approach, When Appropriate."],
    lead: "Dry needling adalah teknik penggunaan jarum halus pada jaringan tertentu untuk indikasi muskuloskeletal terpilih. Teknik ini dapat dipertimbangkan sebagai bagian dari program yang lebih luas dan bukan solusi tunggal untuk semua jenis nyeri. Keputusan terapi bergantung pada asesmen klinis, skrining keamanan, informed consent, dan kompetensi tenaga yang melakukan tindakan.",
    blocks: [
      {
        id: "ketahui",
        title: ["Yang perlu Anda ", "ketahui"],
        items: [
          { title: "Tujuan dan keterbatasan", body: "Dapat menjadi bagian dari program yang lebih luas. Teknik ini bukan solusi tunggal untuk semua jenis nyeri." },
          { title: "Berbeda dari akupunktur secara umum", body: "Teknik dan pendekatannya tidak identik." },
          { title: "Asesmen menentukan kebutuhan", body: "Keputusan bergantung pada asesmen klinis dan skrining keamanan." },
          { title: "Kemungkinan efek", body: "Rasa tidak nyaman atau nyeri sementara dan memar dapat terjadi." },
          { title: "Risiko", body: "Klinisi menjelaskan risiko, termasuk risiko yang jarang tetapi serius di area anatomi tertentu." },
          { title: "Skrining khusus", body: "Sebagian orang memerlukan skrining tambahan sebelum tindakan." },
          { title: "Kapan tidak dianjurkan", body: "Ada kondisi yang membuat teknik ini tidak dianjurkan. Klinisi akan menjelaskannya." },
        ],
      },
      {
        id: "wajib",
        title: ["Yang wajib ada ", "sebelum tindakan"],
        tone: "mint",
        items: [
          { title: "Kualifikasi dan kewenangan terapis" },
          { title: "Kebersihan dan sterilitas" },
          { title: "Persetujuan tindakan (informed consent)" },
          { title: "Skrining obat yang memengaruhi perdarahan dan kondisi medis lainnya" },
          { title: "Prosedur penanganan insiden" },
        ],
        note: "ELPIORA tidak akan menyatakan layanan ini tersedia sebelum seluruh hal di atas terverifikasi.",
      },
    ],
    faq: [
      {
        q: "Apakah dry needling sama dengan akupunktur?",
        a: "Tidak identik. Keduanya menggunakan jarum halus, tetapi teknik dan pendekatannya berbeda. Klinisi dapat menjelaskan perbedaannya saat konsultasi.",
      },
      {
        q: "Apakah terasa sakit?",
        a: "Sebagian orang merasakan rasa tidak nyaman sementara. Sampaikan toleransi Anda kepada klinisi, dan memar dapat terjadi.",
      },
      {
        q: "Apakah semua nyeri bahu cocok untuk dry needling?",
        a: "Tidak. Kecocokan ditentukan oleh asesmen klinis dan skrining keamanan.",
      },
      {
        q: "Dapatkah dilakukan sebagai sesi tunggal?",
        a: "Umumnya teknik ini dipertimbangkan sebagai bagian dari program yang lebih luas. Klinisi akan menjelaskan rencana yang sesuai setelah asesmen.",
      },
    ],
    related: [
      { label: "Pain & Movement", href: "/services/musculoskeletal-physiotherapy" },
      { label: "Sports Rehabilitation", href: "/services/sports-rehabilitation" },
    ],
    cta: "Tanyakan Kelayakan Dry Needling",
  },

  "wellness-movement": {
    slug: "wellness-movement",
    navTitle: "Wellness & Movement Optimisation",
    summary: "Movement screening, mobility, strength, balance, active aging, dan program preventive physiotherapy.",
    seoTitle: "Wellness, Mobility & Strength Training | ELPIORA",
    seoDescription:
      "Program wellness dan optimalisasi gerak dari fisioterapis ELPIORA: mobilitas, kekuatan, keseimbangan, dan active aging.",
    h1: ["Move Well Today.", "Stay Active Tomorrow."],
    lead: "Wellness & Movement Optimisation dirancang untuk individu yang ingin meningkatkan mobilitas, kekuatan, keseimbangan, dan kebiasaan gerak, termasuk saat tidak sedang mengalami cedera akut. Program disesuaikan dengan kondisi fisik, tujuan aktivitas, dan kebutuhan kesehatan masing-masing.",
    blocks: [
      {
        id: "layanan",
        title: ["Layanan yang ", "direncanakan"],
        items: [
          { title: "Functional movement screening" },
          { title: "Program mobilitas dan fleksibilitas" },
          { title: "Strength & conditioning" },
          { title: "Balance & fall prevention" },
          { title: "Kesadaran postur" },
          { title: "Active aging" },
          { title: "Edukasi aktivitas fisik" },
        ],
        note: "Therapeutic Pilates serta fisioterapi pre dan postnatal hanya akan ditawarkan bila kompetensi tenaga, peralatan, dan cakupan layanan sudah terkonfirmasi.",
      },
      {
        id: "untuk",
        title: ["Untuk ", "siapa"],
        tone: "paper",
        items: [
          { title: "Pekerja yang ingin lebih aktif" },
          { title: "Dewasa yang ingin memulai latihan" },
          { title: "Lansia yang ingin menjaga kemandirian" },
          { title: "Orang yang ingin kembali rutin berolahraga setelah periode tidak aktif" },
        ],
      },
      {
        id: "alur",
        title: ["Alur ", "program"],
        layout: "steps",
        items: [
          { title: "Baseline mobility & strength", body: "Menilai kondisi awal." },
          { title: "Goals", body: "Menetapkan tujuan bersama." },
          { title: "Progressive exercise", body: "Latihan yang ditingkatkan bertahap." },
          { title: "Review & self-management", body: "Evaluasi dan strategi mandiri." },
        ],
      },
    ],
    faq: [
      {
        q: "Apakah saya harus sedang sakit untuk mengikuti program ini?",
        a: "Tidak. Program ini juga ditujukan untuk meningkatkan kapasitas gerak dan mengelola risiko sebelum muncul keluhan.",
      },
      {
        q: "Apa bedanya fisioterapi dengan personal trainer?",
        a: "Program fisioterapi disusun dari asesmen gerak dan kondisi kesehatan Anda, termasuk riwayat keluhan. Tujuannya menyesuaikan latihan dengan kapasitas dan keselamatan Anda.",
      },
      { q: "Apakah lansia bisa mengikuti?", a: "Bisa. Program disesuaikan dengan kondisi dan kemampuan masing-masing." },
      {
        q: "Apakah latihan disesuaikan bila ada kondisi medis?",
        a: "Ya. Informasikan kondisi medis Anda agar program disusun dengan mempertimbangkannya, dan berkoordinasi dengan dokter bila perlu.",
      },
    ],
    related: [
      { label: "Healthy Aging & Balance", href: "/programs/healthy-aging" },
      { label: "Pain & Movement", href: "/services/musculoskeletal-physiotherapy" },
      { label: "Workplace Health & Ergonomics", href: "/services/workplace-ergonomics" },
    ],
    cta: "Mulai Movement & Wellness Assessment",
  },

  "neurological-rehabilitation": {
    slug: "neurological-rehabilitation",
    navTitle: "Neurological & Functional Rehabilitation",
    unconfirmed: true,
    summary:
      "Latihan setelah stroke, Parkinson, multiple sclerosis, gangguan keseimbangan, pola berjalan, kelemahan otot, kontrol motorik, dan fungsi harian.",
    seoTitle: "Fisioterapi Stroke, Parkinson & Gangguan Berjalan | ELPIORA",
    seoDescription:
      "Rehabilitasi neurologis dan fungsional di ELPIORA untuk pascastroke, Parkinson, gangguan keseimbangan, dan pola berjalan. Ketersediaan sedang dikonfirmasi.",
    h1: ["Rediscover Movement.", "Build Everyday Independence."],
    lead: "Kondisi neurologis dapat memengaruhi kemampuan berdiri, berjalan, mengatur gerakan, dan beraktivitas sehari-hari. Program Neurological Physiotherapy ELPIORA berfokus pada latihan kemampuan fungsional sesuai kebutuhan, kapasitas, dan keselamatan pasien serta keluarga.",
    blocks: [
      {
        id: "kondisi",
        title: ["Kondisi yang ", "dapat dibahas"],
        items: [
          { title: "Rehabilitasi pascastroke" },
          { title: "Parkinson" },
          { title: "Multiple sclerosis (MS)" },
          { title: "Gangguan keseimbangan dan koordinasi" },
          { title: "Kelemahan otot" },
          { title: "Gangguan pola berjalan" },
          { title: "Spastisitas atau peningkatan tonus otot" },
          { title: "Gangguan kontrol motorik" },
          { title: "Keterbatasan aktivitas sehari-hari" },
        ],
        note: "Tidak semua kondisi cocok ditangani dengan protokol yang sama.",
      },
      {
        id: "komponen",
        title: ["Komponen ", "terapi"],
        tone: "paper",
        items: [
          { title: "Motor relearning" },
          { title: "Task-specific training" },
          { title: "Functional strengthening" },
          { title: "Sitting dan standing balance" },
          { title: "Gait & transfer training" },
          { title: "Trunk control" },
          { title: "Mobilitas" },
          { title: "Edukasi pencegahan jatuh" },
          { title: "Latihan di rumah" },
          { title: "Pelatihan caregiver dan rujukan multidisiplin sesuai kebutuhan" },
        ],
      },
      {
        id: "tujuan",
        title: ["Contoh ", "tujuan"],
        items: [
          { title: "Berpindah dari tempat tidur ke kursi" },
          { title: "Berdiri lebih stabil" },
          { title: "Berjalan dengan alat bantu secara lebih aman" },
          { title: "Melakukan tugas harian dengan bantuan yang sesuai" },
          { title: "Menjaga kemampuan yang tersedia" },
        ],
        note: "Kami tidak menjanjikan kemandirian penuh. Tujuan disusun realistis bersama Anda dan keluarga.",
      },
      {
        id: "keluarga",
        title: ["Untuk ", "keluarga"],
        tone: "mint",
        items: [
          { title: "Peran caregiver" },
          { title: "Tujuan yang realistis" },
          { title: "Latihan yang aman" },
          { title: "Penjadwalan" },
          { title: "Akses Home Visit", body: "Bila layanan tersedia di area Anda." },
        ],
      },
    ],
    redFlag: {
      title: "Kapan perlu penanganan medis, bukan booking rutin?",
      intro: "Hal berikut memerlukan penanganan medis segera:",
      items: ["Gejala stroke yang muncul mendadak", "Gangguan kesadaran", "Perubahan kondisi medis yang signifikan", "Kasus baru atau tidak stabil"],
    },
    faq: [
      {
        q: "Kapan fisioterapi dimulai setelah stroke?",
        a: "Bergantung pada kondisi medis dan penilaian klinis. Program perlu dikoordinasikan dengan dokter yang merawat bila relevan.",
      },
      {
        q: "Apakah pasien dengan alat bantu jalan dapat dilatih?",
        a: "Dapat dipertimbangkan setelah penilaian kondisi dan keselamatan.",
      },
      {
        q: "Apakah keluarga perlu mendampingi?",
        a: "Pendamping sangat membantu pada sebagian kondisi, baik untuk keselamatan maupun untuk memahami latihan yang dilakukan di rumah.",
      },
      {
        q: "Berapa lama pemulihannya?",
        a: "Berbeda untuk setiap orang dan bergantung pada kondisi medis serta penilaian klinis. Fisioterapis akan menjelaskan perkiraan setelah asesmen.",
      },
    ],
    related: [
      { label: "Rehabilitasi Pascastroke", href: "/conditions/stroke-rehabilitation" },
      { label: "Healthy Aging & Balance", href: "/programs/healthy-aging" },
      { label: "Home Visit", href: "/home-visit" },
    ],
    cta: "Konsultasi Rehabilitasi Neurologis",
  },
};

/* ------------------------------------------------------------------ */
/* Conditions                                                          */
/* ------------------------------------------------------------------ */

export const conditionDetails: Record<string, Detail> = {
  "back-neck-pain": {
    slug: "back-neck-pain",
    navTitle: "Nyeri Punggung & Leher",
    summary: "Kaku, pegal, atau nyeri saat duduk, berdiri, mengangkat benda, atau bekerja.",
    seoTitle: "Fisioterapi Nyeri Punggung & Leher | ELPIORA",
    seoDescription:
      "Kenali faktor yang dapat berperan pada nyeri punggung dan leher, kapan perlu segera ke dokter, dan bagaimana fisioterapi dapat membantu.",
    h1: ["Nyeri Punggung atau Leher", "Mengganggu Aktivitas?"],
    lead: "Nyeri punggung dan leher bisa terasa saat duduk, berdiri, mengangkat benda, bekerja, maupun beristirahat. Keluhan tidak selalu disebabkan oleh satu posisi tubuh. Aktivitas, kebugaran, stres, kualitas tidur, kondisi medis, dan faktor lainnya dapat berperan. Penilaian yang tepat membantu menentukan langkah selanjutnya.",
    blocks: [
      {
        id: "gejala",
        title: ["Gejala yang ", "umum"],
        items: [{ title: "Kaku" }, { title: "Pegal" }, { title: "Keterbatasan gerak" }, { title: "Nyeri saat beraktivitas" }],
        note: "Nyeri yang menjalar perlu dievaluasi.",
      },
      {
        id: "faktor",
        title: ["Faktor yang ", "mungkin berperan"],
        tone: "paper",
        items: [
          { title: "Aktivitas dan posisi kerja" },
          { title: "Tingkat kebugaran" },
          { title: "Stres" },
          { title: "Kualitas tidur" },
          { title: "Kondisi medis" },
        ],
        note: "Penyebabnya tidak selalu satu, sehingga penilaian membantu menentukan langkah berikutnya.",
      },
      {
        id: "fisioterapi",
        title: ["Fisioterapi dapat ", "meliputi"],
        items: [
          { title: "Asesmen fungsi" },
          { title: "Edukasi" },
          { title: "Progressive activity" },
          { title: "Latihan penguatan atau mobilitas" },
          { title: "Strategi pengaturan beban" },
          { title: "Teknik lain bila sesuai indikasi" },
        ],
      },
    ],
    redFlag: {
      title: "Kapan harus segera ke dokter atau IGD",
      intro: "Jangan menunggu jadwal fisioterapi. Menuju IGD bila Anda mengalami:",
      items: [
        "Mati rasa di area selangkangan",
        "Gangguan BAK atau BAB yang baru terjadi",
        "Kelemahan berat atau progresif pada kedua kaki",
        "Gejala neurologis yang muncul mendadak",
        "Trauma berat",
      ],
    },
    faq: [
      {
        q: "Apakah semua nyeri punggung perlu dipijat?",
        a: "Tidak. Penyebab dan faktor yang memengaruhi nyeri bervariasi, dan asesmen membantu menentukan penanganan.",
      },
      {
        q: "Apakah saya perlu rontgen lebih dulu?",
        a: "Tidak selalu. Kebutuhan pemeriksaan penunjang ditentukan oleh dokter dan hasil asesmen. Bila Anda sudah memilikinya, bawa saat konsultasi.",
      },
    ],
    related: [
      { label: "Pain & Movement", href: "/services/musculoskeletal-physiotherapy" },
      { label: "Workplace Health & Ergonomics", href: "/services/workplace-ergonomics" },
      { label: "Home Visit", href: "/home-visit" },
    ],
    cta: "Konsultasi Nyeri Punggung & Leher",
  },

  "stroke-rehabilitation": {
    slug: "stroke-rehabilitation",
    navTitle: "Rehabilitasi Pascastroke",
    unconfirmed: true,
    summary: "Melatih kembali keseimbangan, kekuatan, koordinasi, berjalan, dan aktivitas sehari-hari setelah stroke.",
    seoTitle: "Rehabilitasi Pascastroke & Fisioterapi Home Visit | ELPIORA",
    seoDescription:
      "Rehabilitasi pascastroke: fokus latihan, peran keluarga, dan kapan perlu evaluasi medis segera. Ketersediaan layanan di ELPIORA sedang dikonfirmasi.",
    h1: ["Kembali Melatih Gerak", "Setelah Stroke."],
    lead: "Setiap orang yang mengalami stroke memiliki kebutuhan rehabilitasi berbeda. Sebagian perlu melatih keseimbangan, kekuatan, koordinasi, kemampuan berjalan, atau aktivitas sehari-hari. Program disusun setelah memahami kondisi medis, kemampuan saat ini, serta tujuan pasien dan keluarga.",
    blocks: [
      {
        id: "fokus",
        title: ["Fokus ", "latihan"],
        items: [
          { title: "Duduk dan berdiri" },
          { title: "Transfer" },
          { title: "Gait training" },
          { title: "Gerak lengan dan tungkai" },
          { title: "Balance" },
          { title: "Motor control" },
          { title: "Manajemen risiko jatuh" },
          { title: "Edukasi caregiver" },
        ],
      },
      {
        id: "keluarga",
        title: ["Peran ", "keluarga"],
        tone: "mint",
        items: [
          { title: "Pendampingan yang aman" },
          { title: "Latihan sesuai arahan" },
          { title: "Pengaturan lingkungan" },
          { title: "Dukungan aktivitas yang bermakna" },
        ],
      },
      {
        id: "alur",
        title: ["Alur ", "rehabilitasi"],
        layout: "steps",
        items: [
          { title: "Assessment & medical clearance", body: "Bila diperlukan." },
          { title: "Functional goal setting", body: "Menetapkan tujuan fungsional bersama pasien dan keluarga." },
          { title: "Supervised therapy", body: "Terapi dengan pendampingan fisioterapis." },
          { title: "Home programme & reassessment", body: "Program rumah dan penilaian ulang." },
        ],
      },
    ],
    redFlag: {
      title: "Kapan perlu evaluasi medis segera",
      intro: "Cari bantuan medis darurat bila muncul:",
      items: ["Wajah mencong yang baru terjadi", "Kelemahan mendadak pada satu sisi tubuh", "Sulit bicara secara tiba-tiba", "Penurunan kesadaran atau tanda neurologis akut"],
    },
    faq: [
      {
        q: "Kapan rehabilitasi bisa dimulai setelah stroke?",
        a: "Bergantung pada kondisi medis dan penilaian klinis. Koordinasi dengan dokter yang merawat dianjurkan.",
      },
      {
        q: "Apakah rehabilitasi bisa dilakukan di rumah?",
        a: "Dapat dipertimbangkan setelah penilaian kondisi dan keselamatan, bila layanan Home Visit tersedia di area Anda.",
      },
    ],
    related: [
      { label: "Neurological & Functional Rehabilitation", href: "/services/neurological-rehabilitation" },
      { label: "Home Visit", href: "/home-visit" },
      { label: "Healthy Aging & Balance", href: "/programs/healthy-aging" },
    ],
    cta: "Bicarakan Program Rehabilitasi Pascastroke",
  },

  "knee-joint-pain": {
    slug: "knee-joint-pain",
    navTitle: "Nyeri Lutut & Sendi",
    summary: "Keluhan lutut, bahu, atau sendi lain yang memengaruhi berjalan, naik turun tangga, bekerja, dan olahraga.",
    seoTitle: "Fisioterapi Nyeri Lutut & Sendi | ELPIORA",
    seoDescription:
      "Keluhan lutut, bahu, dan sendi lain: topik yang sering dibahas, kapan perlu diperiksa dokter, dan bagaimana fisioterapi membantu.",
    h1: ["Nyeri Lutut dan Sendi:", "Bergerak Sesuai Kemampuan."],
    lead: "Keluhan lutut, bahu, atau sendi lain dapat memengaruhi berjalan, naik turun tangga, bekerja, dan olahraga. Penanganan dimulai dari mengidentifikasi pola keluhan, kemampuan bergerak, kekuatan, dan kebutuhan aktivitas.",
    blocks: [
      {
        id: "topik",
        title: ["Topik yang ", "sering dibahas"],
        items: [
          { title: "Nyeri lutut saat naik tangga" },
          { title: "Nyeri bahu" },
          { title: "Kekakuan pinggul" },
          { title: "Pemulihan setelah cedera" },
        ],
        note: "Diagnosis medis dapat diperlukan untuk sebagian keluhan sendi.",
      },
      {
        id: "dinilai",
        title: ["Yang kami ", "nilai"],
        tone: "paper",
        items: [{ title: "Pola keluhan" }, { title: "Kemampuan bergerak" }, { title: "Kekuatan" }, { title: "Kebutuhan aktivitas Anda" }],
      },
    ],
    redFlag: {
      title: "Kapan perlu diperiksa dokter",
      intro: "Periksakan diri ke dokter bila Anda mengalami:",
      items: [
        "Bengkak mendadak disertai panas atau kemerahan",
        "Tidak dapat menumpu berat badan setelah cedera",
        "Sendi terkunci atau tampak berubah bentuk",
        "Demam disertai nyeri sendi",
      ],
    },
    faq: [
      {
        q: "Apakah nyeri lutut saat naik tangga selalu berarti ada kerusakan?",
        a: "Tidak selalu. Penyebabnya beragam. Asesmen gerak dan kekuatan membantu menentukan langkah berikutnya, dan dokter dapat dilibatkan bila perlu.",
      },
    ],
    related: [
      { label: "Pain & Movement", href: "/services/musculoskeletal-physiotherapy" },
      { label: "Rehabilitasi Pascaoperasi", href: "/programs/post-operative-rehabilitation" },
      { label: "Sports Rehabilitation", href: "/services/sports-rehabilitation" },
    ],
    cta: "Pemeriksaan Keluhan Sendi",
  },

  "sports-injuries": {
    slug: "sports-injuries",
    navTitle: "Cedera Olahraga",
    summary: "Nyeri tajam, bengkak, sulit menumpu berat badan, atau sendi terasa tidak stabil setelah olahraga.",
    seoTitle: "Cedera Olahraga: Langkah Pemulihan | ELPIORA",
    seoDescription:
      "Tanda cedera olahraga yang perlu diperhatikan, kapan perlu evaluasi medis, tahapan rehabilitasi, dan mengapa kembali berolahraga tidak hanya soal hilangnya nyeri.",
    h1: ["Cedera Olahraga?", "Pilih Langkah Pemulihan yang Tepat."],
    lead: "Nyeri tajam, bengkak, sulit menumpu berat badan, atau ketidakstabilan sendi setelah olahraga merupakan alasan untuk menghentikan aktivitas yang memperburuk keluhan dan mencari penilaian sesuai tingkat keparahan.",
    blocks: [
      {
        id: "awal",
        title: ["Langkah awal yang ", "aman"],
        items: [
          { title: "Hentikan aktivitas yang memperburuk keluhan" },
          { title: "Istirahatkan area yang cedera" },
          { title: "Minta penilaian sesuai tingkat keparahan" },
        ],
      },
      {
        id: "tahapan",
        title: ["Tahapan ", "rehabilitasi"],
        layout: "steps",
        tone: "paper",
        items: [
          { title: "Pemeriksaan dan keselamatan" },
          { title: "Kontrol keluhan dan toleransi beban" },
          { title: "Mobility, strength, endurance" },
          { title: "Balance, agility, neuromuscular control" },
          { title: "Pengujian kesiapan return to sport" },
          { title: "Strategi mencegah cedera berulang" },
        ],
        note: "Kembali berolahraga tidak hanya ditentukan oleh hilangnya nyeri. Risiko cedera berulang tetap perlu dikelola.",
      },
    ],
    redFlag: {
      title: "Kriteria untuk evaluasi medis",
      intro: "Segera minta penilaian medis bila Anda mengalami:",
      items: ["Nyeri tajam yang berat", "Bengkak yang cepat membesar", "Tidak bisa menumpu berat badan", "Sendi terasa tidak stabil atau terkunci"],
    },
    faq: [
      {
        q: "Kapan saya boleh berolahraga lagi?",
        a: "Bergantung pada diagnosis, asesmen, izin medis, dan kriteria fungsi, bukan hanya lamanya waktu.",
      },
    ],
    related: [
      { label: "Sports Rehabilitation", href: "/services/sports-rehabilitation" },
      { label: "Event Physiotherapy", href: "/event-physiotherapy" },
    ],
    cta: "Sports Injury Assessment",
  },
};

/* ------------------------------------------------------------------ */
/* Programs                                                            */
/* ------------------------------------------------------------------ */

export const programDetails: Record<string, Detail> = {
  "post-operative-rehabilitation": {
    slug: "post-operative-rehabilitation",
    navTitle: "Rehabilitasi Pascaoperasi",
    summary: "Program gerak dan penguatan sesuai arahan medis dan fase pemulihan setelah operasi ortopedi.",
    seoTitle: "Rehabilitasi Pascaoperasi Ortopedi | ELPIORA",
    seoDescription:
      "Rehabilitasi setelah operasi ortopedi: program bertahap sesuai prosedur, instruksi dokter, dan toleransi latihan Anda.",
    h1: ["Recover Function After Surgery,", "Step by Step."],
    lead: "Setelah operasi ortopedi, rehabilitasi perlu mengikuti prosedur yang dilakukan, instruksi dokter, batasan beban, penyembuhan jaringan, dan toleransi latihan pasien. Program bertujuan mengembalikan fungsi secara bertahap dan aman.",
    blocks: [
      {
        id: "isi",
        title: ["Isi ", "program"],
        items: [
          { title: "Asesmen status medis" },
          { title: "Latihan sesuai fase" },
          { title: "Mobilitas sendi" },
          { title: "Strengthening bertahap" },
          { title: "Gait training" },
          { title: "Program rumah" },
          { title: "Komunikasi dengan dokter bedah atau rehabilitasi bila dibutuhkan" },
        ],
      },
      {
        id: "menentukan",
        title: ["Yang menentukan ", "program"],
        tone: "paper",
        items: [
          { title: "Prosedur yang dilakukan" },
          { title: "Instruksi dokter" },
          { title: "Batasan beban" },
          { title: "Penyembuhan jaringan" },
          { title: "Toleransi latihan Anda" },
        ],
      },
    ],
    faq: [
      {
        q: "Apakah saya perlu izin dokter sebelum mulai?",
        a: "Untuk rehabilitasi setelah operasi, instruksi dan izin dokter sangat penting. Bawa catatan operasi dan instruksi dokter saat konsultasi.",
      },
      {
        q: "Apakah bisa dilakukan di rumah?",
        a: "Dapat dipertimbangkan sesuai kondisi, keselamatan, dan area layanan Home Visit yang sedang dikonfirmasi.",
      },
    ],
    related: [
      { label: "Pain & Movement", href: "/services/musculoskeletal-physiotherapy" },
      { label: "Sports Rehabilitation", href: "/services/sports-rehabilitation" },
      { label: "Home Visit", href: "/home-visit" },
    ],
    cta: "Tanya Program Rehabilitasi Pascaoperasi",
  },

  "healthy-aging": {
    slug: "healthy-aging",
    navTitle: "Healthy Aging & Balance",
    summary: "Latihan yang disesuaikan untuk menjaga kekuatan, keseimbangan, kemampuan berjalan, dan kemandirian.",
    seoTitle: "Active Aging: Keseimbangan & Kemandirian | ELPIORA",
    seoDescription:
      "Program active aging dari fisioterapis: latihan berdiri, gerak fungsional, penilaian risiko jatuh, dan edukasi caregiver.",
    h1: ["Stay Active, Independent,", "and Confident with Age."],
    lead: "Menua tidak berarti harus berhenti bergerak. Latihan yang disesuaikan dapat membantu mempertahankan kekuatan, keseimbangan, kemampuan berjalan, dan partisipasi dalam aktivitas sehari-hari.",
    blocks: [
      {
        id: "isi",
        title: ["Isi ", "program"],
        items: [
          { title: "Latihan berdiri" },
          { title: "Gerak fungsional" },
          { title: "Fall-risk assessment" },
          { title: "Gait training" },
          { title: "Kesadaran terhadap lingkungan rumah" },
          { title: "Edukasi caregiver" },
        ],
      },
    ],
    faq: [
      { q: "Apakah lansia dengan kondisi medis bisa mengikuti?", a: "Bisa, dengan program yang disesuaikan. Informasikan kondisi medis dan obat yang dikonsumsi, dan koordinasi dengan dokter dapat diperlukan." },
      { q: "Apakah perlu didampingi keluarga?", a: "Pendamping dapat membantu keselamatan dan membantu keluarga memahami latihan yang dapat dilakukan di rumah." },
    ],
    related: [
      { label: "Wellness & Movement Optimisation", href: "/services/wellness-movement" },
      { label: "Neurological & Functional Rehabilitation", href: "/services/neurological-rehabilitation" },
      { label: "Home Visit", href: "/home-visit" },
    ],
    cta: "Konsultasi Program Active Aging",
  },
};

export const allConditionSlugs = Object.keys(conditionDetails);
export const allProgramSlugs = Object.keys(programDetails);

/** Which service a condition or programme page pre-selects in the booking form. */
export const bookingServiceFor: Record<string, string> = {
  "back-neck-pain": "musculoskeletal-physiotherapy",
  "knee-joint-pain": "musculoskeletal-physiotherapy",
  "sports-injuries": "sports-rehabilitation",
  "stroke-rehabilitation": "neurological-rehabilitation",
  "post-operative-rehabilitation": "musculoskeletal-physiotherapy",
  "healthy-aging": "wellness-movement",
};
