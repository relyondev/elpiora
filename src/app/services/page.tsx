import Link from "next/link";
import { CareJourney } from "@/components/CareJourney";
import { FinalCta } from "@/components/FinalCta";
import { PageHero } from "@/components/PageHero";
import { ServiceCards } from "@/components/ServiceGrid";
import { LinkButton } from "@/components/ui/Button";
import { AssessmentIcon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { siteConfig } from "@/config/site";
import { bookingHref } from "@/lib/booking";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "Layanan Fisioterapi ELPIORA | Nyeri, Cedera, Stroke & Wellness",
  "Jelajahi layanan ELPIORA: muskuloskeletal, cedera olahraga, neurologis, ergonomi kerja, dry needling, wellness, dan fisioterapi home visit.",
  "/services",
);

const programs = [
  { label: "Rehabilitasi pascaoperasi", href: "/programs/post-operative-rehabilitation" },
  { label: "Stroke rehabilitation", href: "/conditions/stroke-rehabilitation" },
  { label: "Gait dan balance training", href: "/services/neurological-rehabilitation" },
  { label: "Return to sport", href: "/services/sports-rehabilitation" },
  { label: "Keluhan akibat pekerjaan", href: "/services/workplace-ergonomics" },
  { label: "Active aging", href: "/programs/healthy-aging" },
  { label: "Home Visit", href: "/home-visit" },
];

export default function ServicesPage() {
  return (
    <main id="konten">
      <PageHero
        eyebrow="Services"
        title={
          <>
            Our <span className="accent">Services</span>
          </>
        }
        lead={
          <p>
            Komprehensif bukan berarti semua pasien membutuhkan semua terapi. Pilih layanan berdasarkan masalah dan tujuan Anda. Tim kami akan membantu
            menentukan pendekatan melalui asesmen.
          </p>
        }
        actions={
          <>
            <LinkButton href={bookingHref()} variant="champagne">
              Booking Asesmen Fisioterapi
            </LinkButton>
            <LinkButton href={bookingHref("lainnya")} variant="secondary-on-dark">
              Bantu Saya Memilih
            </LinkButton>
          </>
        }
        image={siteConfig.images.servicesHero}
        imageVariant="studio"
        note={{ label: "Mulai dari mana?", text: "Layanan ditentukan setelah konsultasi awal", Icon: AssessmentIcon }}
      />

      <section aria-labelledby="catalogue-title" className="py-24 md:py-28">
        <div className="shell">
          <Reveal className="max-w-3xl">
            <SectionIntro eyebrow="Enam kategori layanan" titleId="catalogue-title" title={<>Pilih sesuai <span className="accent">kebutuhan Anda.</span></>} />
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-body">
              Layanan yang bertanda &ldquo;menunggu konfirmasi&rdquo; akan diperbarui setelah ketersediaan dan kualifikasi tenaganya dipastikan.
            </p>
          </Reveal>
          <div className="mt-12">
            <ServiceCards />
          </div>
        </div>
      </section>

      <section aria-labelledby="notsure-title" className="bg-mint-100 py-24 md:py-28">
        <div className="shell grid-12 gap-y-8">
          <Reveal className="col-span-4 md:col-span-8 lg:col-span-5">
            <SectionIntro eyebrow="Belum tahu mulai dari mana" titleId="notsure-title" title={<>Not Sure Where <span className="accent">to Start?</span></>} />
          </Reveal>
          <Reveal delay={100} className="col-span-4 md:col-span-8 lg:col-span-6 lg:col-start-7">
            <p className="text-[1.0625rem] leading-[1.8] text-body">
              Apakah keluhan Anda muncul setelah olahraga? Apakah ada masalah berjalan setelah stroke? Atau apakah nyeri mengganggu pekerjaan? Ceritakan
              kebutuhan Anda, dan kami akan mengarahkan ke proses konsultasi yang sesuai.
            </p>
            <LinkButton href={bookingHref("lainnya")} variant="secondary" className="mt-8">
              Ceritakan Kebutuhan Anda
            </LinkButton>
          </Reveal>
        </div>
      </section>

      <CareJourney
        eyebrow="Cara kerja"
        titleId="how-care-works"
        title={
          <>
            How Care <span className="accent">Works</span>
          </>
        }
        intro="Gambaran umum alur perawatan. Detailnya disesuaikan dengan kondisi dan kebutuhan masing-masing."
        steps={[
          { title: "Assess", body: "Mendengarkan keluhan dan menilai gerak serta fungsi." },
          { title: "Plan", body: "Menyusun tujuan dan rencana bersama Anda." },
          { title: "Treat", body: "Latihan dan penanganan sesuai indikasi." },
          { title: "Review", body: "Menilai perkembangan dan menyesuaikan program." },
        ]}
      />

      <section aria-labelledby="programs-title" className="py-24 md:py-28">
        <div className="shell">
          <Reveal className="max-w-3xl">
            <SectionIntro eyebrow="Program khusus" titleId="programs-title" title={<>Special <span className="accent">Programs</span></>} />
          </Reveal>
          <ul className="mt-8 flex flex-wrap gap-3">
            {programs.map((p) => (
              <li key={p.label}>
                <Link
                  href={p.href}
                  className="inline-flex min-h-11 items-center rounded-full border border-deep/20 bg-paper px-5 text-sm font-semibold text-deep transition-colors hover:border-deep hover:bg-mint-100"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta primaryLabel="Booking Asesmen Fisioterapi" secondaryLabel="Lihat FAQ" secondaryHref="/faq" />
    </main>
  );
}
