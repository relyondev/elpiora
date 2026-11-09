import { ChecklistSection } from "@/components/ContentSections";
import { FinalCta } from "@/components/FinalCta";
import { PageHero } from "@/components/PageHero";
import { LinkButton } from "@/components/ui/Button";
import { PlanIcon } from "@/components/ui/Icon";
import { PlaceholderTag } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { siteConfig } from "@/config/site";
import { bookingHref, whatsappHref } from "@/lib/booking";
import { pageMeta } from "@/lib/meta";

// Kept out of search results until real prices are confirmed (blueprint section G, page 24).
export const metadata = pageMeta(
  "Harga Fisioterapi & Home Visit ELPIORA | Info Booking",
  "Struktur tarif fisioterapi dan Home Visit ELPIORA. Tarif sedang dikonfirmasi dan akan ditampilkan di halaman ini.",
  "/pricing",
  { index: false },
);

const rows = [
  { name: "Initial Assessment", note: "Konsultasi awal dan asesmen" },
  { name: "Subsequent Physiotherapy Session", note: "Sesi fisioterapi lanjutan" },
  { name: "Home Visit Assessment", note: "Tarif layanan ditambah biaya perjalanan" },
  { name: "Home Visit Follow-up", note: "Tarif layanan ditambah biaya perjalanan" },
  { name: "Sports Rehabilitation", note: "Program rehabilitasi olahraga" },
  { name: "Dry Needling", note: "Bila layanan tersedia" },
  { name: "Corporate dan Event", note: "Penawaran khusus sesuai kebutuhan", custom: true },
];

export default function PricingPage() {
  const wa = whatsappHref();
  return (
    <main id="konten">
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Transparent Care, <span className="accent">Clear Expectations.</span>
          </>
        }
        lead={
          <>
            <p>
              Kami ingin membantu Anda memahami kebutuhan layanan sebelum membuat keputusan. Harga mengikuti jenis sesi, lokasi layanan, durasi, dan
              kebutuhan khusus bila relevan.
            </p>
            <PlaceholderTag className="mt-4">Tarif menunggu konfirmasi</PlaceholderTag>
          </>
        }
        actions={
          <LinkButton href={wa ?? bookingHref()} external={Boolean(wa)} variant="champagne">
            Tanya Harga &amp; Jadwal
          </LinkButton>
        }
        image={siteConfig.images.servicesHero}
        imageVariant="studio"
        note={{ label: "Tarif akan ditampilkan", text: "Setelah dikonfirmasi, bukan perkiraan", Icon: PlanIcon }}
      />

      <section aria-labelledby="price-title" className="py-24 md:py-28">
        <div className="shell">
          <Reveal className="max-w-3xl">
            <SectionIntro eyebrow="Struktur tarif" titleId="price-title" title={<>Layanan dan <span className="accent">tarifnya</span></>} />
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-body">
              Tabel di bawah menunjukkan struktur yang akan dipakai. Kami tidak menampilkan angka sebelum tarif resmi dikonfirmasi.
            </p>
          </Reveal>
          <Reveal className="mt-10">
            <table className="w-full table-fixed border-collapse overflow-hidden rounded-[20px] bg-paper text-left">
              <caption className="sr-only">Struktur tarif layanan ELPIORA. Tarif menunggu konfirmasi.</caption>
              <thead>
                <tr className="border-b border-line bg-mint-100/60 text-sm text-deep">
                  <th scope="col" className="px-4 py-3 font-semibold md:px-6">
                    Layanan
                  </th>
                  <th scope="col" className="w-[42%] px-4 py-3 font-semibold md:px-6">
                    Tarif
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.name} className="border-b border-line last:border-b-0">
                    <th scope="row" className="px-4 py-4 align-top md:px-6">
                      <span className="block font-semibold text-deep">{r.name}</span>
                      <span className="mt-0.5 block text-sm font-normal text-muted-text">{r.note}</span>
                    </th>
                    <td className="px-4 py-4 align-top text-[0.9375rem] text-body md:px-6">{r.custom ? "Penawaran khusus" : "Menunggu konfirmasi"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <ChecklistSection
        titleId="price-info"
        tone="paper"
        title={<>Informasi yang akan <span className="accent">ditampilkan</span></>}
        intro="Sebelum Anda booking, halaman ini akan memuat informasi berikut."
        items={[
          { title: "Durasi standar sesi" },
          { title: "Apa yang termasuk dalam tarif" },
          { title: "Biaya perjalanan Home Visit" },
          { title: "Metode pembayaran" },
          { title: "Kebijakan keterlambatan, pembatalan, dan reschedule" },
          { title: "Paket dan masa berlakunya" },
          { title: "Ketentuan rujukan" },
          { title: "Faktur dan administrasi" },
          { title: "Asuransi", body: "Hanya bila benar-benar diterima." },
        ]}
        footnote={<PlaceholderTag>Seluruh informasi ini menunggu konfirmasi</PlaceholderTag>}
      />

      <FinalCta primaryLabel="Tanya Harga & Jadwal" primaryHref={wa ?? bookingHref()} primaryExternal={Boolean(wa)} secondaryLabel="Lihat FAQ" secondaryHref="/faq" />
    </main>
  );
}
