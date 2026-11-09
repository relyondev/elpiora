import { LeadForm } from "@/components/booking/LeadForm";
import { ChecklistSection, TopicGrid } from "@/components/ContentSections";
import { FinalCta } from "@/components/FinalCta";
import { PageHero } from "@/components/PageHero";
import { LinkButton } from "@/components/ui/Button";
import { AssessmentIcon, HeartHandIcon, MovementIcon, PlanIcon, WellnessIcon, WorkplaceIcon } from "@/components/ui/Icon";
import { PlaceholderTag } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { siteConfig } from "@/config/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "Corporate Wellness & Ergonomi Kantor | ELPIORA",
  "Program kesehatan kerja dari ELPIORA: skrining ergonomi, workshop postur dan gerak, kelas mobilitas, dan konsultasi individual untuk tim kantor. Paket dalam konsep.",
  "/corporate-wellness",
);

const packages = [
  { title: "Workplace Ergonomic Screening", body: "Skrining kebutuhan ergonomi dan keluhan muskuloskeletal pada tim.", Icon: AssessmentIcon },
  { title: "Posture & Movement Workshop", body: "Edukasi kebiasaan gerak dan postur yang praktis untuk bekerja.", Icon: MovementIcon },
  { title: "Office Mobility & Stretching Class", body: "Sesi gerak dan peregangan singkat bagi karyawan.", Icon: WellnessIcon },
  { title: "Individual Consultation Booth", body: "Konsultasi singkat per karyawan dengan fisioterapis.", Icon: HeartHandIcon },
  { title: "Corporate Wellness Day", body: "Rangkaian kegiatan kesehatan gerak dalam satu hari.", Icon: WorkplaceIcon },
  { title: "Follow-up Education Resources", body: "Materi edukasi lanjutan setelah program berjalan.", Icon: PlanIcon },
];

export default function CorporateWellnessPage() {
  return (
    <main id="konten">
      <PageHero
        eyebrow="Corporate Wellness"
        parents={[{ label: "Corporate & Events" }]}
        title={
          <>
            A Healthier Workplace <span className="accent">Starts with Better Movement.</span>
          </>
        }
        lead={
          <>
            <p>
              ELPIORA dapat menjadi mitra program kesehatan kerja melalui edukasi ergonomi, gerak, dan penilaian kebutuhan muskuloskeletal. Format program
              dapat disusun untuk tim kantor, komunitas profesional, maupun aktivitas perusahaan.
            </p>
            <PlaceholderTag className="mt-4">Paket dan kesiapan menunggu konfirmasi</PlaceholderTag>
          </>
        }
        actions={
          <>
            <LinkButton href="#proposal" variant="champagne">
              Request Corporate Proposal
            </LinkButton>
            <LinkButton href="/services/workplace-ergonomics" variant="secondary-on-dark">
              Lihat Layanan Ergonomi
            </LinkButton>
          </>
        }
        image={siteConfig.images.corporateHero}
        note={{ label: "Konsep program", text: "Disusun setelah diskusi kebutuhan perusahaan", Icon: WorkplaceIcon }}
      />

      <TopicGrid
        eyebrow="Opsi program"
        titleId="corp-packages"
        title={
          <>
            Opsi paket <span className="accent">dalam konsep</span>
          </>
        }
        intro="Daftar ini adalah konsep program, bukan penawaran resmi. Bentuk, durasi, dan tarif ditetapkan setelah kebutuhan Anda dibahas."
        items={packages}
      />

      <ChecklistSection
        titleId="corp-info"
        tone="paper"
        title={<>Informasi untuk <span className="accent">proposal</span></>}
        intro="Agar proposal sesuai, siapkan gambaran berikut sebelum mengisi formulir."
        items={[
          { title: "Tujuan program" },
          { title: "Jumlah peserta" },
          { title: "Alamat kegiatan" },
          { title: "Format: onsite atau online" },
          { title: "Tanggal dan durasi" },
          { title: "Ruang dan peralatan yang tersedia" },
          { title: "Hasil yang diharapkan (deliverables)" },
          { title: "Tarif", body: "Menunggu konfirmasi. Penawaran disusun setelah diskusi." },
        ]}
      />

      <section id="proposal" aria-labelledby="proposal-title" className="scroll-mt-[var(--header-h)] bg-mint-100 py-20 md:py-28">
        <div className="shell max-w-4xl">
          <Reveal>
            <SectionIntro eyebrow="Formulir" titleId="proposal-title" title={<>Request <span className="accent">Corporate Proposal</span></>} />
            <p className="mt-5 max-w-[56ch] text-[0.9375rem] leading-relaxed text-body">
              Isi data berikut dan tim kami akan menghubungi Anda. Ini permintaan awal dan belum merupakan penawaran resmi.
            </p>
          </Reveal>
          <div className="mt-8">
            <LeadForm kind="corporate" />
          </div>
        </div>
      </section>

      <FinalCta
        title={<>Bicarakan program untuk <span className="accent">tim Anda.</span></>}
        lead="Tim ELPIORA akan membantu menyusun format yang sesuai dengan kebutuhan dan kesiapan perusahaan Anda."
        primaryLabel="Request Corporate Proposal"
        primaryHref="#proposal"
        secondaryLabel="Event Physiotherapy"
        secondaryHref="/event-physiotherapy"
      />
    </main>
  );
}
