import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { PlaceholderTag } from "@/components/ui/Logo";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("Kebijakan Privasi | ELPIORA", "Cara ELPIORA menggunakan data yang Anda kirim melalui formulir di situs ini.", "/privacy-policy");

const pend = (t: string) => <PlaceholderTag>{t}</PlaceholderTag>;

// Draft based on what the site actually does (blueprint section J.5). Operational details the clinic has not
// confirmed are marked, not invented. Needs legal review before launch.
export default function PrivacyPage() {
  return (
    <LegalPage
      title="Kebijakan Privasi"
      draft
      lead="Halaman ini menjelaskan data apa yang kami minta lewat situs, untuk apa digunakan, dan apa yang belum dapat kami nyatakan karena masih dikonfirmasi."
      sections={[
        {
          title: "Data yang kami minta",
          body: (
            <>
              <p>
                Formulir booking meminta nama, nomor telepon, kanal kontak yang Anda pilih, layanan yang diminati, jenis kunjungan (klinik atau Home
                Visit), area umum, preferensi tanggal dan waktu, serta catatan singkat yang bersifat opsional. Email diminta bila Anda memilih dihubungi lewat email.
              </p>
              <p>Formulir proposal korporat dan formulir kolaborasi event meminta data perusahaan atau acara, nama penanggung jawab, telepon, dan email.</p>
            </>
          ),
        },
        {
          title: "Untuk apa data digunakan",
          body: <p>Data digunakan untuk menghubungi Anda dan memproses permintaan yang Anda ajukan, misalnya mencocokkan layanan, area, dan jadwal. Data tidak digunakan untuk hal lain tanpa persetujuan Anda.</p>,
        },
        {
          title: "Data kesehatan",
          body: (
            <p>
              Mohon tidak menuliskan detail medis rinci atau dokumen sensitif di formulir. Cukup gambaran singkat keluhan. Informasi kesehatan dibahas langsung
              bersama fisioterapis saat konsultasi. Informasi catatan keluhan tidak disertakan dalam tautan WhatsApp yang disiapkan oleh formulir.
            </p>
          ),
        },
        {
          title: "Cara data dikirim",
          body: (
            <>
              <p>
                Bergantung pada konfigurasi, permintaan Anda dikirim ke sistem penerimaan yang dikelola ELPIORA atau Anda diarahkan mengirimnya lewat WhatsApp.
                Bila belum ada kanal yang aktif, formulir akan menyatakan bahwa data tidak terkirim.
              </p>
              <p>{pend("Sistem penerimaan dan penyedia layanan menunggu konfirmasi")}</p>
            </>
          ),
        },
        {
          title: "Penyimpanan dan keamanan",
          body: (
            <>
              <p>Masa penyimpanan, pihak yang dapat mengakses data, dan langkah pengamanan akan dijelaskan di sini setelah dikonfirmasi oleh ELPIORA.</p>
              <p>{pend("Masa retensi dan kebijakan akses menunggu konfirmasi")}</p>
            </>
          ),
        },
        {
          title: "Hak Anda",
          body: (
            <>
              <p>Anda dapat meminta akses, koreksi, atau penghapusan data yang Anda kirim. Kontak untuk permintaan tersebut akan dicantumkan di sini.</p>
              <p>{pend("Kontak permintaan data menunggu konfirmasi")}</p>
            </>
          ),
        },
        {
          title: "Pelacakan dan cookie",
          body: <p>Saat ini situs ini tidak memasang alat analitik atau pelacakan pihak ketiga. Bila hal itu berubah, kebijakan ini akan diperbarui sebelum alat tersebut aktif.</p>,
        },
        {
          title: "Perubahan kebijakan",
          body: (
            <p>
              Kebijakan ini dapat diperbarui. Tanggal pembaruan akan ditampilkan di halaman ini. Pertanyaan dapat disampaikan lewat halaman{" "}
              <Link href="/contact" className="font-semibold underline decoration-gold underline-offset-4">
                Contact
              </Link>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
