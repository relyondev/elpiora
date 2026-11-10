/**
 * Long-form content for each service detail page (/layanan/[id]).
 *
 * Editorial rules (brand guidelines §8):
 * - General, educational physiotherapy information — not a diagnosis, not a promise.
 * - "dapat / umumnya / sesuai kebutuhan" instead of guaranteed outcomes.
 * - No prices, durations, session counts, success rates or named staff.
 * - Wording is editable — TODO_CONFIRM with ELPIORA's physiotherapists before launch.
 */

export type ServiceDetail = {
  id: string;
  /** Short headline used on the detail page hero. */
  headline: string;
  /** 2–3 paragraph overview. */
  overview: string[];
  /** Who typically considers this service. */
  suitableFor: string[];
  /** Common goals people bring. */
  goals: string[];
  /** What a session may include — subject to assessment. */
  sessionMayInclude: { title: string; body: string }[];
  /** How the programme typically progresses. */
  journey: { title: string; body: string }[];
  /** Service-specific FAQ. */
  faq: { q: string; a: string }[];
  /** Related service ids. */
  related: string[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "pain-movement": {
    id: "pain-movement",
    headline: "Memahami nyeri, memulihkan gerak sehari-hari.",
    overview: [
      "Nyeri leher, punggung, bahu, lutut, atau sendi lainnya sering kali bukan sekadar soal satu titik yang terasa sakit. Pola gerak, postur, kebiasaan harian, beban kerja, hingga kualitas istirahat dapat ikut berperan.",
      "Layanan Pain & Movement berfokus pada pemahaman menyeluruh terhadap keluhan muskuloskeletal Anda. Fisioterapis akan menilai bagaimana tubuh Anda bergerak, lalu menyusun program yang membantu mengembalikan mobilitas, kekuatan, dan kepercayaan diri untuk beraktivitas.",
      "Tujuannya bukan hanya meredakan rasa tidak nyaman sesaat, tetapi membantu Anda memahami tubuh dan memiliki strategi yang dapat dijalankan dalam keseharian.",
    ],
    suitableFor: [
      "Nyeri punggung bawah atau leher yang mengganggu aktivitas",
      "Kaku atau nyeri pada bahu, siku, pergelangan, lutut, atau pergelangan kaki",
      "Keluhan yang muncul karena posisi atau gerakan berulang",
      "Rasa tidak nyaman yang membuat Anda menghindari aktivitas tertentu",
      "Anda yang ingin memahami penyebab keluhan dan cara mengelolanya",
    ],
    goals: [
      "Bergerak lebih leluasa dalam aktivitas sehari-hari",
      "Memahami faktor yang memicu atau memperberat keluhan",
      "Membangun kekuatan dan kontrol gerak yang mendukung sendi",
      "Kembali ke aktivitas yang sempat dihindari secara bertahap",
    ],
    sessionMayInclude: [
      { title: "Asesmen gerak", body: "Pemeriksaan postur, rentang gerak, kekuatan, dan pola gerak yang berkaitan dengan keluhan Anda." },
      { title: "Edukasi", body: "Penjelasan tentang kondisi Anda dan hal-hal yang dapat Anda lakukan untuk mengelolanya." },
      { title: "Terapi latihan", body: "Latihan mobilitas, penguatan, dan kontrol gerak yang disesuaikan dengan kemampuan Anda." },
      { title: "Terapi manual", body: "Teknik hands-on oleh fisioterapis bila dinilai sesuai dengan kondisi Anda." },
      { title: "Program mandiri", body: "Latihan sederhana yang dapat Anda lakukan di rumah di antara sesi." },
    ],
    journey: [
      { title: "Pahami", body: "Mengidentifikasi keluhan, pemicu, dan tujuan Anda." },
      { title: "Redakan & gerakkan", body: "Mengurangi hambatan gerak dengan latihan dan penanganan yang sesuai." },
      { title: "Perkuat", body: "Membangun kekuatan dan ketahanan untuk aktivitas harian." },
      { title: "Mandiri", body: "Menjaga hasil dengan strategi yang bisa Anda jalankan sendiri." },
    ],
    faq: [
      { q: "Apakah saya perlu pemeriksaan penunjang seperti rontgen terlebih dahulu?", a: "Tidak selalu. Bila Anda sudah memiliki hasil pemeriksaan, bawa saat konsultasi. Fisioterapis akan menyarankan pemeriksaan lanjutan atau rujukan ke dokter bila diperlukan." },
      { q: "Apakah latihan akan terasa sakit?", a: "Latihan disesuaikan dengan kondisi dan toleransi Anda. Sampaikan kepada fisioterapis bila ada gerakan yang terasa tidak nyaman agar program dapat disesuaikan." },
    ],
    related: ["sports-rehabilitation", "workplace-ergonomics", "wellness-movement"],
  },

  "sports-rehabilitation": {
    id: "sports-rehabilitation",
    headline: "Kembali ke lapangan dengan langkah yang terarah.",
    overview: [
      "Cedera saat berolahraga, baik bagi atlet maupun penggemar olahraga rekreasi, sering kali membutuhkan lebih dari sekadar istirahat. Kembali terlalu cepat dapat meningkatkan risiko cedera berulang, sementara terlalu lama berhenti dapat menurunkan kebugaran.",
      "Sports Rehabilitation di ELPIORA membantu Anda menjalani pemulihan secara bertahap: dari mengembalikan gerak dasar, membangun kekuatan dan stabilitas, hingga latihan yang semakin mendekati tuntutan olahraga Anda.",
      "Program disusun bersama Anda, dengan mempertimbangkan jenis olahraga, target, dan jadwal yang realistis.",
    ],
    suitableFor: [
      "Pemulihan setelah cedera otot, ligamen, atau sendi akibat olahraga",
      "Rasa tidak stabil atau kurang percaya diri saat kembali berolahraga",
      "Keluhan yang muncul berulang saat berlari, melompat, atau berganti arah",
      "Pemulihan pasca-operasi terkait cedera olahraga, sesuai arahan dokter",
      "Anda yang ingin kembali aktif dengan program yang terstruktur",
    ],
    goals: [
      "Memulihkan rentang gerak, kekuatan, dan stabilitas",
      "Melatih kembali pola gerak yang spesifik untuk olahraga Anda",
      "Membangun kepercayaan diri sebelum kembali bertanding atau berlatih penuh",
      "Memahami cara menjaga tubuh agar tetap siap berolahraga",
    ],
    sessionMayInclude: [
      { title: "Asesmen fungsional", body: "Penilaian gerak dan kemampuan yang berkaitan dengan olahraga yang Anda tekuni." },
      { title: "Latihan progresif", body: "Latihan bertahap dari dasar hingga gerakan yang lebih dinamis." },
      { title: "Latihan keseimbangan & kontrol", body: "Membangun stabilitas dan koordinasi untuk gerakan cepat dan berganti arah." },
      { title: "Perencanaan kembali beraktivitas", body: "Tahapan kembali berlatih yang disepakati bersama." },
    ],
    journey: [
      { title: "Lindungi", body: "Mengelola fase awal cedera dengan aman." },
      { title: "Pulihkan", body: "Mengembalikan gerak dan kekuatan dasar." },
      { title: "Latih ulang", body: "Gerakan spesifik olahraga secara bertahap." },
      { title: "Kembali", body: "Kembali berlatih dan bertanding dengan rencana yang jelas." },
    ],
    faq: [
      { q: "Kapan saya boleh kembali berolahraga?", a: "Waktu kembali berbeda untuk setiap orang dan jenis cedera. Fisioterapis akan membantu menentukan tahapan berdasarkan perkembangan dan kemampuan Anda, berkoordinasi dengan dokter bila diperlukan." },
      { q: "Apakah layanan ini hanya untuk atlet?", a: "Tidak. Layanan ini terbuka untuk siapa pun yang ingin kembali aktif setelah cedera, termasuk pelari rekreasi, pemain futsal, pegolf, pesepeda, dan lainnya." },
    ],
    related: ["pain-movement", "wellness-movement"],
  },

  "workplace-ergonomics": {
    id: "workplace-ergonomics",
    headline: "Bekerja lebih nyaman, dari meja hingga lapangan.",
    overview: [
      "Duduk berjam-jam di depan layar, mengangkat beban, atau melakukan gerakan berulang dapat memengaruhi kenyamanan tubuh dari waktu ke waktu. Keluhan yang awalnya ringan bisa berkembang bila kebiasaan kerja tidak diperhatikan.",
      "Layanan Workplace Health & Ergonomics membantu menilai kebutuhan gerak dan pengaturan aktivitas kerja Anda: posisi duduk dan layar, cara mengangkat, hingga jeda dan latihan singkat yang dapat dilakukan di sela pekerjaan.",
      "Layanan ini dapat dijalankan secara individual. Untuk kebutuhan perusahaan atau komunitas, program korporat sedang dipersiapkan.",
    ],
    suitableFor: [
      "Pekerja kantor dengan keluhan leher, bahu, atau punggung",
      "Pekerjaan dengan gerakan berulang atau mengangkat beban",
      "Anda yang bekerja dari rumah dengan pengaturan ruang kerja seadanya",
      "Perusahaan yang ingin mendukung kesehatan gerak karyawan (program korporat, menunggu konfirmasi)",
    ],
    goals: [
      "Mengurangi beban berlebih pada tubuh selama bekerja",
      "Menemukan pengaturan kerja yang lebih nyaman",
      "Membangun kebiasaan bergerak di sela pekerjaan",
      "Memperkuat tubuh agar lebih siap menghadapi tuntutan kerja",
    ],
    sessionMayInclude: [
      { title: "Asesmen postur & tugas kerja", body: "Memahami aktivitas kerja harian dan posisi tubuh yang paling sering Anda gunakan." },
      { title: "Rekomendasi ergonomi", body: "Saran pengaturan kursi, meja, layar, dan alat kerja sesuai kebutuhan Anda." },
      { title: "Latihan kerja singkat", body: "Rangkaian latihan ringan yang dapat dilakukan di sela pekerjaan." },
      { title: "Penanganan keluhan", body: "Program fisioterapi bila sudah ada keluhan yang mengganggu." },
    ],
    journey: [
      { title: "Amati", body: "Menilai kebiasaan dan lingkungan kerja." },
      { title: "Sesuaikan", body: "Menyusun perubahan sederhana yang realistis." },
      { title: "Latih", body: "Membangun kekuatan dan mobilitas pendukung." },
      { title: "Pertahankan", body: "Menjadikan kebiasaan baik sebagai rutinitas." },
    ],
    faq: [
      { q: "Apakah perlu membawa foto ruang kerja?", a: "Sangat membantu. Foto atau video singkat posisi kerja Anda dapat membantu fisioterapis memberikan saran yang lebih tepat." },
      { q: "Apakah tersedia program untuk perusahaan?", a: "Program korporat sedang dipersiapkan. Ajukan pertanyaan melalui formulir dengan memilih “Program korporat / event”." },
    ],
    related: ["pain-movement", "wellness-movement"],
  },

  "wellness-movement": {
    id: "wellness-movement",
    headline: "Menjaga tubuh tetap aktif, seimbang, dan siap bergerak.",
    overview: [
      "Kesehatan gerak tidak hanya dibutuhkan saat ada keluhan. Menjaga kekuatan, kelenturan, dan keseimbangan membantu tubuh tetap siap menghadapi aktivitas sehari-hari, di usia berapa pun.",
      "Wellness & Movement adalah program kebugaran fungsional yang dipandu fisioterapis. Latihan dirancang sesuai kondisi tubuh, tujuan, dan gaya hidup Anda, dengan perhatian pada teknik gerak yang aman.",
      "Program ini juga dapat menjadi lanjutan setelah Anda menyelesaikan program pemulihan, agar hasil yang sudah dicapai dapat terjaga.",
    ],
    suitableFor: [
      "Anda yang ingin mulai aktif kembali dengan panduan yang aman",
      "Dewasa dan lansia yang ingin menjaga keseimbangan dan kekuatan",
      "Lanjutan setelah program pemulihan selesai",
      "Anda yang ingin memperbaiki postur dan kualitas gerak",
    ],
    goals: [
      "Meningkatkan kekuatan dan kelenturan fungsional",
      "Melatih keseimbangan dan koordinasi",
      "Membangun rutinitas gerak yang berkelanjutan",
      "Merasa lebih percaya diri dalam bergerak",
    ],
    sessionMayInclude: [
      { title: "Asesmen kebugaran fungsional", body: "Menilai kekuatan, kelenturan, keseimbangan, dan pola gerak dasar." },
      { title: "Latihan terpandu", body: "Latihan yang disesuaikan dengan kemampuan dan ditingkatkan secara bertahap." },
      { title: "Edukasi gerak", body: "Tips teknik dan kebiasaan bergerak yang mendukung kesehatan jangka panjang." },
    ],
    journey: [
      { title: "Kenali", body: "Memahami kondisi dan tujuan tubuh Anda." },
      { title: "Bangun", body: "Latihan dasar untuk kekuatan dan keseimbangan." },
      { title: "Tingkatkan", body: "Progres bertahap sesuai kemampuan." },
      { title: "Jaga", body: "Rutinitas yang dapat dijalankan jangka panjang." },
    ],
    faq: [
      { q: "Apa bedanya dengan latihan di pusat kebugaran?", a: "Program dipandu fisioterapis dan disusun berdasarkan asesmen gerak Anda, sehingga memperhatikan kondisi kesehatan, riwayat keluhan, dan teknik gerak yang aman." },
      { q: "Apakah cocok untuk lansia?", a: "Program dapat disesuaikan untuk berbagai usia, dengan memperhatikan kondisi kesehatan secara keseluruhan dan arahan dokter yang merawat." },
    ],
    related: ["pain-movement", "sports-rehabilitation"],
  },

  "neurological-rehabilitation": {
    id: "neurological-rehabilitation",
    headline: "Mendukung kemandirian gerak setelah kondisi neurologis.",
    overview: [
      "Kondisi neurologis, seperti setelah stroke atau kondisi lain yang memengaruhi sistem saraf, dapat berdampak pada kekuatan, keseimbangan, koordinasi, dan kemandirian dalam aktivitas sehari-hari.",
      "Rehabilitasi neurologis berfokus pada latihan gerak yang bertujuan, berulang, dan bermakna untuk mendukung kemampuan fungsional pasien. Program disusun bersama keluarga dan tim medis yang merawat.",
      "Ketersediaan layanan ini sedang dikonfirmasi. Silakan hubungi tim kami untuk informasi lebih lanjut.",
    ],
    suitableFor: [
      "Pemulihan gerak setelah stroke, sesuai arahan dokter",
      "Kesulitan keseimbangan, berjalan, atau berpindah posisi",
      "Keluarga yang ingin memahami cara mendampingi latihan di rumah",
    ],
    goals: [
      "Mendukung kemampuan berpindah, berdiri, dan berjalan",
      "Melatih keseimbangan dan koordinasi",
      "Meningkatkan kemandirian dalam aktivitas sehari-hari",
      "Membekali keluarga dengan cara pendampingan yang aman",
    ],
    sessionMayInclude: [
      { title: "Asesmen fungsional", body: "Penilaian kemampuan gerak, keseimbangan, dan aktivitas sehari-hari." },
      { title: "Latihan berorientasi tugas", body: "Latihan yang meniru aktivitas nyata seperti berdiri, berjalan, atau meraih." },
      { title: "Edukasi keluarga", body: "Panduan pendampingan dan latihan yang aman di rumah." },
    ],
    journey: [
      { title: "Nilai", body: "Memahami kemampuan dan kebutuhan saat ini." },
      { title: "Latih", body: "Latihan bertujuan dan berulang." },
      { title: "Terapkan", body: "Membawa kemampuan ke aktivitas sehari-hari." },
      { title: "Dampingi", body: "Melibatkan keluarga dalam proses." },
    ],
    faq: [
      { q: "Apakah layanan ini sudah tersedia?", a: "Ketersediaan layanan ini sedang dikonfirmasi. Ajukan pertanyaan melalui formulir, dan tim kami akan menginformasikan perkembangannya." },
      { q: "Apakah perlu rujukan dokter?", a: "Untuk kondisi neurologis, koordinasi dengan dokter yang merawat sangat dianjurkan. Tim kami akan membantu menjelaskan kebutuhannya." },
    ],
    related: ["home-visit", "wellness-movement"],
  },

  "dry-needling": {
    id: "dry-needling",
    headline: "Informasi layanan sedang disiapkan.",
    overview: [
      "Dry needling adalah teknik yang dalam praktik fisioterapi dapat digunakan sebagai bagian dari program penanganan keluhan otot, dan hanya dilakukan oleh tenaga yang memiliki kualifikasi sesuai.",
      "Informasi lengkap mengenai layanan ini, termasuk kualifikasi terapis dan ketersediaannya di ELPIORA, sedang dikonfirmasi dan akan diperbarui di halaman ini.",
    ],
    suitableFor: ["Kesesuaian teknik ini dinilai oleh fisioterapis setelah asesmen. Tidak setiap keluhan memerlukan dry needling."],
    goals: ["Informasi akan diperbarui setelah layanan dikonfirmasi."],
    sessionMayInclude: [
      { title: "Asesmen terlebih dahulu", body: "Setiap teknik dipertimbangkan berdasarkan hasil asesmen dan persetujuan Anda." },
    ],
    journey: [],
    faq: [
      { q: "Apakah dry needling tersedia di ELPIORA?", a: "Ketersediaan layanan ini sedang dikonfirmasi. Ajukan pertanyaan melalui formulir untuk mendapatkan informasi terbaru." },
    ],
    related: ["pain-movement", "sports-rehabilitation"],
  },

  "home-visit": {
    id: "home-visit",
    headline: "Perawatan fisioterapi di kenyamanan rumah Anda.",
    overview: [
      "Bagi sebagian orang, datang ke klinik bukan hal yang mudah karena mobilitas terbatas, masa pemulihan setelah operasi, usia, atau jadwal yang padat.",
      "Layanan Home Visit membawa sesi fisioterapi ke rumah Anda. Latihan dilakukan di lingkungan yang familiar, sehingga program dapat langsung disesuaikan dengan aktivitas dan kondisi rumah sehari-hari.",
      "Area layanan dan ketersediaan jadwal sedang dikonfirmasi. Ajukan permintaan Anda, dan tim kami akan memastikan apakah alamat Anda dapat dilayani.",
    ],
    suitableFor: [
      "Lansia atau anggota keluarga dengan mobilitas terbatas",
      "Masa pemulihan setelah operasi, sesuai arahan dokter",
      "Pemulihan setelah kondisi neurologis",
      "Anda yang sulit meluangkan waktu untuk perjalanan ke klinik",
    ],
    goals: [
      "Menjalankan program pemulihan tanpa harus bepergian",
      "Latihan yang relevan dengan aktivitas di rumah",
      "Melibatkan keluarga dalam proses pemulihan",
    ],
    sessionMayInclude: [
      { title: "Asesmen di rumah", body: "Menilai kondisi dan lingkungan rumah yang berkaitan dengan aktivitas harian." },
      { title: "Latihan terpandu", body: "Latihan dengan peralatan portabel sesuai kebutuhan program." },
      { title: "Saran keamanan rumah", body: "Masukan sederhana untuk mendukung aktivitas yang lebih aman." },
    ],
    journey: [
      { title: "Ajukan", body: "Isi formulir dan pilih kunjungan ke rumah." },
      { title: "Konfirmasi", body: "Tim memastikan jadwal dan area layanan." },
      { title: "Sesi", body: "Fisioterapis datang ke rumah Anda." },
      { title: "Tindak lanjut", body: "Catatan dan latihan untuk di antara sesi." },
    ],
    faq: [
      { q: "Apa yang perlu disiapkan di rumah?", a: "Ruang yang cukup untuk bergerak dengan aman, pakaian yang nyaman, serta catatan medis atau hasil pemeriksaan bila ada." },
    ],
    related: ["neurological-rehabilitation", "pain-movement"],
  },
};
