import { CareJourney } from "@/components/CareJourney";
import { ChecklistSection } from "@/components/ContentSections";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { PageHero } from "@/components/PageHero";
import { LinkButton } from "@/components/ui/Button";
import { CheckIcon, PinIcon } from "@/components/ui/Icon";
import { PlaceholderTag } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";
import { bookingHref } from "@/lib/booking";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "Fisioterapi Home Visit | ELPIORA",
  "Layanan Home Visit Physiotherapy ELPIORA untuk rehabilitasi di rumah, termasuk nyeri sendi, stroke, mobilitas lansia, dan pemulihan pascaoperasi sesuai kebutuhan dan cakupan area.",
  "/home-visit",
);

const flow = [
  { title: "Hubungi ELPIORA", body: "Beri nama, area, dan kebutuhan umum Anda. Jangan kirim dokumen medis sensitif lewat tautan publik." },
  { title: "Pencocokan dan jadwal", body: "Tim memastikan cakupan area, ketersediaan fisioterapis, biaya, dan kebutuhan persiapan." },
  { title: "Sesi kunjungan", body: "Asesmen dan tindakan sesuai kapasitas, persetujuan, serta kebutuhan Anda." },
  { title: "Review dan tindak lanjut", body: "Evaluasi kemajuan dan rekomendasi program rumah atau kunjungan berikutnya bila perlu." },
];

const faq = [
  { q: "Berapa durasi Home Visit?", a: "Durasi bergantung pada jenis layanan dan penjadwalan, dan akan dikonfirmasi oleh tim saat Anda mengajukan." },
  { q: "Apakah fisioterapis membawa peralatan?", a: "Jenis peralatan ditentukan sesuai kebutuhan dan yang tersedia. Modalitas khusus hanya digunakan bila tersedia dan aman diterapkan di rumah." },
  { q: "Apakah bisa untuk pasien pascastroke?", a: "Dapat dipertimbangkan setelah penilaian kondisi dan keselamatan." },
  { q: "Apakah layanan tersedia di seluruh Jakarta?", a: "Tidak otomatis. Konfirmasi kecamatan atau alamat Anda melalui tim." },
  { q: "Apakah ada tambahan biaya transportasi?", a: "Kebijakan biaya perjalanan sedang dikonfirmasi dan akan ditampilkan jelas sebelum booking." },
  { q: "Apakah anggota keluarga perlu mendampingi?", a: "Untuk sebagian kondisi, pendamping sangat membantu dan mungkin diperlukan." },
];

export default function HomeVisitPage() {
  const { homeVisit } = siteConfig;
  return (
    <main id="konten">
      <PageHero
        eyebrow="Home Visit"
        title={
          <>
            Pemulihan Bisa <span className="accent">Dimulai dari Rumah.</span>
          </>
        }
        lead={
          <>
            <p className="font-serif text-[1.6rem] leading-snug font-bold text-gold-light">Professional Physiotherapy, at Your Home.</p>
            <p className="mt-4">
              Tidak semua pasien mudah datang ke klinik. ELPIORA mengembangkan layanan fisioterapi Home Visit bagi individu dan keluarga yang membutuhkan
              dukungan gerak dan rehabilitasi di lingkungan rumah. Fisioterapis melakukan asesmen serta menyusun program sesuai kebutuhan, kondisi
              kesehatan, dan sumber daya yang tersedia.
            </p>
            {!homeVisit.confirmed ? <PlaceholderTag className="mt-4">Area dan ketersediaan menunggu konfirmasi</PlaceholderTag> : null}
          </>
        }
        actions={
          <>
            <LinkButton href={bookingHref(undefined, "home")} variant="champagne">
              Cek Ketersediaan Home Visit
            </LinkButton>
            <LinkButton href="#persiapan" variant="secondary-on-dark">
              Persiapan Pasien
            </LinkButton>
          </>
        }
        image={siteConfig.images.homeVisitHero}
        note={{ label: "Area layanan", text: "Dikonfirmasi tim berdasarkan alamat dan jadwal", Icon: PinIcon }}
      />

      <ChecklistSection
        titleId="hv-who"
        title={<>Siapa yang dapat <span className="accent">mempertimbangkan</span></>}
        items={[
          { title: "Pasien pascastroke yang stabil dan sesuai indikasi" },
          { title: "Lansia dengan mobilitas terbatas" },
          { title: "Pemulihan pascaoperasi sesuai instruksi dokter" },
          { title: "Nyeri otot dan sendi" },
          { title: "Gangguan berjalan atau keseimbangan" },
          { title: "Pasien yang lebih mudah melakukan latihan di rumah" },
        ]}
        footnote={<p className="max-w-3xl text-sm leading-relaxed text-muted-text">Keputusan akhir bergantung pada asesmen keselamatan dan kelayakan.</p>}
      />

      <ChecklistSection
        titleId="hv-visit"
        tone="paper"
        title={<>Apa yang dilakukan <span className="accent">dalam kunjungan</span></>}
        items={[
          { title: "Konsultasi dan asesmen" },
          { title: "Gerak fungsional" },
          { title: "Latihan terapeutik" },
          { title: "Edukasi aktivitas" },
          { title: "Edukasi caregiver" },
          { title: "Home exercise plan" },
          { title: "Review progres" },
        ]}
        footnote={<p className="max-w-3xl text-sm leading-relaxed text-muted-text">Modalitas khusus hanya digunakan bila tersedia dan aman dibawa atau diterapkan di rumah.</p>}
      />

      <ChecklistSection
        titleId="hv-benefit"
        title={<>Keuntungan <span className="accent">praktis</span></>}
        items={[
          { title: "Mengurangi kebutuhan perjalanan" },
          { title: "Latihan yang relevan dengan lingkungan rumah" },
          { title: "Melibatkan caregiver bila perlu" },
          { title: "Membantu kesinambungan program" },
        ]}
        footnote={<p className="max-w-3xl text-sm leading-relaxed text-muted-text">Kami tidak menyatakan Home Visit lebih aman daripada klinik untuk semua pasien.</p>}
      />

      <section aria-labelledby="hv-area" className="pb-24 md:pb-28">
        <div className="shell">
          <Reveal>
            <div className="grid gap-8 rounded-[28px] bg-mint-100 p-8 md:grid-cols-12 md:p-12">
              <div className="md:col-span-5">
                <PinIcon className="size-10 text-teal-text" />
                <h2 id="hv-area" className="t-h3 mt-5 !text-[clamp(1.75rem,1.4rem+1vw,2.4rem)]">
                  Cakupan <span className="accent">lokasi</span>
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
                    <p className="font-serif text-[clamp(1.25rem,1.1rem+0.5vw,1.6rem)] leading-snug font-medium text-deep">
                      Area layanan Home Visit sedang kami konfirmasi dan akan diumumkan di halaman ini.
                    </p>
                    <PlaceholderTag className="mt-5">Area menunggu konfirmasi</PlaceholderTag>
                  </>
                )}
                <p className="mt-5 text-sm text-body">Ketersediaan serta biaya perjalanan dikonfirmasi saat reservasi, berdasarkan alamat dan jadwal tim.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CareJourney
        eyebrow="Alur"
        titleId="hv-flow"
        title={
          <>
            Empat langkah <span className="accent">Home Visit</span>
          </>
        }
        intro="Dari permintaan sampai tindak lanjut, tim kami memandu setiap langkahnya."
        steps={flow}
      />

      <div id="persiapan" className="scroll-mt-[var(--header-h)]">
        <ChecklistSection
          titleId="hv-prep"
          tone="paper"
          title={<>Persiapan <span className="accent">pasien</span></>}
          items={[
            { title: "Ruang yang aman" },
            { title: "Pakaian yang nyaman" },
            { title: "Dokumen medis yang relevan, bila ada" },
            { title: "Pendamping untuk pasien tertentu" },
            { title: "Alat bantu yang biasa Anda gunakan" },
            { title: "Listrik, akses, dan parkir", body: "Bila perlu dibahas dengan tim operasional." },
          ]}
        />
      </div>

      <Faq
        items={faq.map((f) => ({ q: f.q, a: <p>{f.a}</p> }))}
        eyebrow="Pertanyaan umum"
        title={<>Seputar <span className="accent">Home Visit</span></>}
        titleId="hv-faq"
      />

      <FinalCta
        title={<>Pemulihan dimulai dari <span className="accent">rumah Anda.</span></>}
        lead="Ajukan permintaan Anda. Tim akan memastikan apakah alamat Anda masuk area layanan dan mengonfirmasi jadwal."
        primaryLabel="Booking Home Visit"
        primaryHref={bookingHref(undefined, "home")}
        secondaryLabel="Lihat FAQ"
        secondaryHref="/faq"
      />
    </main>
  );
}
