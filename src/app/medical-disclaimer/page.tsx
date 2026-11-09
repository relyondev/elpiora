import { LegalPage } from "@/components/LegalPage";
import { PlaceholderTag } from "@/components/ui/Logo";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("Medical Disclaimer | ELPIORA", "Informasi di situs ELPIORA bersifat edukasi umum dan tidak menggantikan pemeriksaan tenaga kesehatan.", "/medical-disclaimer");

export default function MedicalDisclaimerPage() {
  return (
    <LegalPage
      title="Medical Disclaimer"
      lead="Informasi dalam situs ini bertujuan untuk edukasi umum."
      sections={[
        {
          title: "Pernyataan",
          body: (
            <p>
              Informasi dalam website ini bertujuan untuk edukasi umum dan tidak menggantikan diagnosis, pemeriksaan, atau rencana penanganan individual dari
              tenaga kesehatan. Kelayakan dan hasil fisioterapi bergantung pada kondisi setiap pasien. Untuk kondisi darurat, segera hubungi layanan medis
              darurat atau fasilitas kesehatan terdekat.
            </p>
          ),
        },
        {
          title: "Kondisi yang memerlukan penanganan medis segera",
          body: (
            <p>
              Gejala neurologis akut, kelemahan mendadak, nyeri dada, sesak berat, cedera berat setelah trauma, dan gangguan kontrol BAK atau BAB yang baru
              terjadi disertai gejala neurologis harus diarahkan ke layanan medis segera. Hubungi 119 atau menuju IGD terdekat. Jangan menunggu jadwal fisioterapi.
            </p>
          ),
        },
        {
          title: "Home Visit",
          body: <p>Home Visit bukan pengganti penanganan darurat, pemeriksaan medis lengkap, atau fasilitas yang memerlukan pemantauan intensif.</p>,
        },
        {
          title: "Hasil bervariasi",
          body: <p>Pengalaman dan hasil setiap orang dapat berbeda. Cerita atau contoh yang ditampilkan bukan jaminan hasil bagi pasien lain.</p>,
        },
        {
          title: "Tinjauan konten",
          body: (
            <>
              <p>Konten kesehatan di situs ini akan ditinjau oleh fisioterapis ELPIORA sebelum dipublikasikan secara final, dengan tanggal pembaruan yang dicantumkan.</p>
              <PlaceholderTag>Tinjauan klinis menunggu konfirmasi</PlaceholderTag>
            </>
          ),
        },
      ]}
    />
  );
}
