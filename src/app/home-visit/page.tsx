import { CareJourney } from "@/components/CareJourney";
import { ChecklistSection } from "@/components/ContentSections";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { IconCards } from "@/components/IconCards";
import { PageHero } from "@/components/PageHero";
import { LinkButton } from "@/components/ui/Button";
import { CheckIcon, HeartHandIcon, HomeIcon, MovementIcon, PinIcon, ProgressIcon, SportIcon, WellnessIcon, NeuroIcon } from "@/components/ui/Icon";
import { PlaceholderTag } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { siteConfig } from "@/config/site";
import { homeVisitFaq } from "@/content/faq";
import { bookingHref } from "@/lib/booking";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "Home Visit: Fisioterapi di Rumah",
  "Layanan fisioterapi di rumah dari ELPIORA untuk Anda yang sulit bepergian. Area dan ketersediaan dikonfirmasi oleh tim.",
  "/home-visit",
);

const audiences = [
  { title: "Lansia", body: "Sesi di lingkungan rumah yang familiar, tanpa perlu perjalanan ke klinik.", Icon: HeartHandIcon },
  { title: "Pemulihan Pasca-Operasi", body: "Pendampingan latihan sesuai arahan dokter pada masa pemulihan.", Icon: ProgressIcon },
  { title: "Keterbatasan Mobilitas", body: "Untuk Anda yang kesulitan berjalan atau berpindah tempat.", Icon: MovementIcon },
  { title: "Kondisi Jangka Panjang", body: "Program berkelanjutan untuk menjaga fungsi gerak sehari-hari.", Icon: WellnessIcon },
];

const needs = [
  { title: "Pemulihan setelah operasi", note: "misalnya lutut, panggul, atau bahu", Icon: ProgressIcon },
  { title: "Gangguan gerak & keseimbangan", note: "misalnya kesulitan berjalan", Icon: MovementIcon },
  { title: "Latihan pasca-stroke", note: "gerak, kekuatan, dan fungsi", Icon: NeuroIcon },
  { title: "Pemulihan cedera", note: "olahraga atau aktivitas harian", Icon: SportIcon },
  { title: "Keluhan otot & sendi", note: "misalnya nyeri punggung bawah atau leher", Icon: WellnessIcon },
  { title: "Kondisi kronis", note: "misalnya osteoartritis", Icon: HeartHandIcon },
];

const steps = [
  { title: "Ajukan Kunjungan", body: "Isi formulir dan pilih “Kunjungan ke rumah”, lengkap dengan tanggal dan waktu yang Anda inginkan." },
  { title: "Konfirmasi & Persiapan", body: "Tim kami menghubungi Anda untuk mengonfirmasi jadwal, alamat, dan kebutuhan sesi." },
  { title: "Sesi di Rumah", body: "Fisioterapis datang ke rumah Anda dan menjalankan sesi sesuai rencana perawatan." },
  { title: "Tindak Lanjut", body: "Catatan latihan dan rekomendasi untuk mendukung kemajuan Anda di antara sesi." },
];

const benefits = [
  { title: "Nyaman", body: "Tanpa perjalanan dan waktu tunggu, cocok untuk jadwal padat atau mobilitas terbatas.", Icon: HomeIcon },
  { title: "Familiar", body: "Latihan di lingkungan sehari-hari Anda, sehingga lebih mudah diterapkan.", Icon: HeartHandIcon },
  { title: "Personal", body: "Program menyesuaikan kondisi, kebutuhan, dan situasi di rumah Anda.", Icon: CheckIcon },
  { title: "Berkelanjutan", body: "Pemantauan perkembangan agar perawatan tetap konsisten.", Icon: ProgressIcon },
];

export default function HomeVisitPage() {
  const { homeVisit } = siteConfig;

  return (
    <main id="konten">
      <PageHero
        note={{ label: "Area layanan", text: "Dikonfirmasi tim saat Anda mengajukan", Icon: PinIcon }}
        eyebrow="Home Visit"
        title={
          <>
            Fisioterapi Profesional <span className="accent">di Rumah Anda.</span>
          </>
        }
        lead={
          <>
            <p>
              Membawa perawatan fisioterapi ke kenyamanan rumah Anda, untuk Anda atau orang tersayang yang sulit bepergian ke klinik.
            </p>
            {!homeVisit.confirmed ? <PlaceholderTag className="mt-4">Area & ketersediaan menunggu konfirmasi</PlaceholderTag> : null}
          </>
        }
        actions={
          <>
            <LinkButton variant="champagne" href={bookingHref("home-visit")}>Ajukan Home Visit</LinkButton>
            <LinkButton variant="secondary-on-dark" href="#cara-kerja">
              Cara Kerjanya
            </LinkButton>
          </>
        }
        image={siteConfig.images.homeVisitHero}
      />

      <section aria-labelledby="untuk-title" className="py-24 md:py-32">
        <div className="shell">
          <div className="grid-12 gap-y-8">
            <Reveal className="col-span-4 md:col-span-8 lg:col-span-6">
              <SectionIntro index="01" eyebrow="Untuk Siapa" titleId="untuk-title" title={<>Ideal bagi yang Membutuhkan <span className="accent">Perawatan di Rumah.</span></>} />
            </Reveal>
          </div>
          <div className="mt-12">
            <IconCards items={audiences} />
          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <h2 className="t-h3 !text-[clamp(1.75rem,1.4rem+1vw,2.4rem)]">
                Kebutuhan yang Dapat <span className="accent">Dikonsultasikan</span>
              </h2>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-body">
                Contoh kebutuhan yang umum. Kesesuaian layanan untuk kondisi Anda akan dinilai oleh fisioterapis.
              </p>
            </Reveal>
            <Reveal as="ul" delay={100} className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
              {needs.map(({ title, note, Icon }) => (
                <li key={title} className="flex items-start gap-4 rounded-2xl border border-line bg-paper p-4">
                  <Icon className="mt-0.5 size-6 shrink-0 text-teal-text" />
                  <span>
                    <span className="block text-[0.9375rem] font-semibold text-deep">{title}</span>
                    <span className="block text-sm text-muted-text">{note}</span>
                  </span>
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <div id="cara-kerja" className="scroll-mt-[var(--header-h)]">
        <CareJourney
          index="02"
          eyebrow="Cara Kerja"
          title={
            <>
              Proses yang <span className="accent">Sederhana & Jelas.</span>
            </>
          }
          intro="Dari permintaan hingga tindak lanjut, tim kami akan memandu setiap langkahnya."
          steps={steps}
          titleId="cara-title"
        />
      </div>

      <section aria-labelledby="manfaat-title" className="py-24 md:py-32">
        <div className="shell">
          <Reveal className="max-w-3xl">
            <SectionIntro index="03" eyebrow="Manfaat" titleId="manfaat-title" title={<>Mengapa Memilih <span className="accent">Home Visit.</span></>} />
          </Reveal>
          <div className="mt-12">
            <IconCards items={benefits} />
          </div>

          <Reveal className="mt-16">
            <div className="grid gap-8 rounded-[28px] bg-mint-100 p-8 md:grid-cols-12 md:p-12">
              <div className="md:col-span-5">
                <PinIcon className="size-10 text-teal-text" />
                <h2 className="t-h3 mt-5 !text-[clamp(1.75rem,1.4rem+1vw,2.4rem)]">
                  Area <span className="accent">Layanan</span>
                </h2>
              </div>
              <div className="md:col-span-7">
                {homeVisit.coverageAreas.length ? (
                  <ul className="space-y-3">
                    {homeVisit.coverageAreas.map((area) => (
                      <li key={area} className="flex items-center gap-3 text-[1.0625rem] text-deep">
                        <CheckIcon className="size-5 text-teal-text" />
                        {area}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <>
                    <p className="font-serif text-[clamp(1.25rem,1.1rem+0.5vw,1.6rem)] leading-snug text-deep">
                      Area layanan home visit sedang kami konfirmasi dan akan diumumkan di halaman ini.
                    </p>
                    <PlaceholderTag className="mt-5">Area menunggu konfirmasi</PlaceholderTag>
                  </>
                )}
                <p className="mt-5 text-sm text-body">Ajukan permintaan Anda, dan tim kami akan memastikan apakah alamat Anda dapat dilayani.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ChecklistSection
        eyebrow="Persiapan"
        titleId="persiapan-title"
        tone="paper"
        title={
          <>
            Sebelum Fisioterapis <span className="accent">Datang.</span>
          </>
        }
        intro="Beberapa hal sederhana agar sesi di rumah berjalan aman dan nyaman."
        items={[
          { title: "Ruang yang cukup untuk bergerak", body: "Area lapang tanpa barang yang mudah tersandung, idealnya dekat kursi yang kokoh." },
          { title: "Pakaian yang nyaman", body: "Pakaian yang memudahkan bergerak dan memungkinkan area keluhan diperiksa." },
          { title: "Dokumen pendukung", body: "Hasil pemeriksaan, catatan dokter, atau daftar obat yang sedang digunakan, bila ada." },
          { title: "Pendamping bila diperlukan", body: "Keluarga atau pendamping dapat ikut mendengarkan penjelasan dan program latihan." },
          { title: "Informasikan kondisi terbaru", body: "Sampaikan perubahan kondisi sejak sesi sebelumnya kepada fisioterapis." },
        ]}
      />

      <Faq items={homeVisitFaq} index="04" title={<>Pertanyaan Seputar <span className="accent">Home Visit.</span></>} tone="paper" />

      <FinalCta
        title="Siap Memulai Pemulihan di Rumah?"
        lead="Ajukan home visit untuk Anda atau orang tersayang. Tim kami akan mengonfirmasi jadwal dan area layanan."
        primaryLabel="Ajukan Home Visit"
        primaryHref={bookingHref("home-visit")}
      />
    </main>
  );
}
