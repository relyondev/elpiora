import { About } from "@/components/About";
import { ChecklistSection } from "@/components/ContentSections";
import { Logo } from "@/components/ui/Logo";
import { BrushUnderline, WaveRibbons } from "@/components/ui/Ornaments";
import { FinalCta } from "@/components/FinalCta";
import { IconCards } from "@/components/IconCards";
import { PageHero } from "@/components/PageHero";
import { Team } from "@/components/Team";
import { TestimonialList } from "@/components/Testimonials";
import { LinkButton } from "@/components/ui/Button";
import { CheckIcon, HeartHandIcon, ProgressIcon, AssessmentIcon, WellnessIcon, MovementIcon } from "@/components/ui/Icon";
import { PlaceholderTag } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { BOOKING_PATH, siteConfig } from "@/config/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "Tentang ELPIORA",
  "Mengenal ELPIORA Physiotherapy and Wellness: pendekatan fisioterapi yang personal, jelas, dan penuh empati.",
  "/tentang",
);

const traitIcons = [ProgressIcon, WellnessIcon, HeartHandIcon, AssessmentIcon, MovementIcon];

const reasons = [
  { title: "Mendengarkan sebelum menangani", body: "Konsultasi awal untuk memahami keluhan, keseharian, dan tujuan Anda." },
  { title: "Program yang dipersonalisasi", body: "Disusun sesuai kondisi, kemampuan, dan aktivitas yang ingin Anda jalani kembali." },
  { title: "Penjelasan yang jelas", body: "Anda memahami apa yang dilakukan dalam setiap tahap, dan alasannya." },
  { title: "Suasana yang tenang", body: "Ruang yang hangat dan tertata, agar Anda dapat fokus pada pemulihan." },
];

export default function TentangPage() {
  const { brand } = siteConfig;

  return (
    <main id="konten">
      <PageHero
        note={{ label: "Pendekatan kami", text: "Mendengarkan dulu, lalu menyusun program bersama Anda", Icon: HeartHandIcon }}
        eyebrow="Tentang ELPIORA"
        title={
          <>
            Fisioterapi yang Personal untuk <span className="accent">Kualitas Hidup</span> yang Lebih Baik.
          </>
        }
        lead={<p>Kami memadukan ketelitian klinis dengan perhatian yang tulus untuk membantu Anda bergerak lebih nyaman dan kembali menjalani keseharian.</p>}
        actions={
          <>
            <LinkButton variant="champagne" href={BOOKING_PATH}>Buat Janji</LinkButton>
            <LinkButton variant="secondary-on-dark" href="/layanan">
              Lihat Daftar Layanan
            </LinkButton>
          </>
        }
        image={siteConfig.images.aboutHero}
      />

      <About />

      {/* Mission, vision & brand traits */}
      <section aria-labelledby="nilai-title" className="py-24 md:py-32">
        <div className="shell">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { label: "Misi Kami", text: brand.mission },
              { label: "Visi Kami", text: brand.vision },
            ].map((block, i) => (
              <Reveal key={block.label} delay={i * 80}>
                <div className="relative h-full rounded-[24px] bg-mint-100 p-8 md:p-10">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h2 className="t-h3 accent !text-[clamp(1.75rem,1.4rem+1vw,2.4rem)]">{block.label}</h2>
                    {brand.missionIsDraft ? <PlaceholderTag>Draf, menunggu persetujuan</PlaceholderTag> : null}
                  </div>
                  <p className="mt-5 font-serif text-[clamp(1.25rem,1.1rem+0.5vw,1.6rem)] leading-snug text-deep">{block.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-24 max-w-3xl">
            <SectionIntro eyebrow="Karakter Kami" titleId="nilai-title" title={<>Lima Nilai yang <span className="accent">Kami Pegang.</span></>} />
          </Reveal>
          <div className="mt-12">
            <IconCards columns={5} items={brand.traits.map((t, i) => ({ title: t.title, label: t.label, body: t.body, Icon: traitIcons[i] }))} />
          </div>
        </div>
      </section>

      {/* Philosophy — the official tagline explained */}
      <section aria-labelledby="filosofi-title" className="relative isolate overflow-hidden bg-paper py-24 md:py-32">
        <WaveRibbons className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 w-full" />
        <div className="shell grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Logo variant="full" className="w-full max-w-[420px]" />
          </Reveal>
          <Reveal delay={100} className="lg:col-span-6 lg:col-start-7">
            <SectionIntro eyebrow="Filosofi Kami" titleId="filosofi-title" title={<>Makna di Balik <span className="accent">Tagline Kami.</span></>} />
            <p className="t-script mt-8 inline-block -rotate-2 text-3xl text-deep md:text-4xl">{siteConfig.brand.tagline}</p>
            <BrushUnderline className="mt-1 h-3 w-64" />
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="font-serif text-xl font-bold text-deep">Restore function</p>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-body">
                  Memulihkan fungsi gerak: kemampuan untuk berjalan, bekerja, berolahraga, dan merawat diri dengan nyaman.
                </p>
              </div>
              <div>
                <p className="font-serif text-xl font-bold text-deep">Renew life</p>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-body">
                  Memperbarui kualitas hidup: kembali pada hal-hal yang Anda sukai, dengan tubuh yang lebih siap dan percaya diri.
                </p>
              </div>
            </div>
            <p className="mt-6 text-[0.9375rem] leading-relaxed text-body">
              Figur dalam logo ELPIORA, sosok yang bergerak dengan tulang belakang bertitik emas, menggambarkan hal yang sama: gerak yang pulih,
              tubuh yang tegak, dan semangat untuk melangkah lagi.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why ELPIORA */}
      <section aria-labelledby="alasan-title" className="bg-paper py-24 md:py-32">
        <div className="shell grid-12 gap-y-12">
          <Reveal className="col-span-4 md:col-span-8 lg:col-span-5">
            <SectionIntro eyebrow="Mengapa ELPIORA" titleId="alasan-title" title={<>Perawatan yang <span className="accent">Terasa Personal.</span></>} />
          </Reveal>
          <Reveal as="ul" delay={100} className="col-span-4 divide-y divide-line border-y border-line md:col-span-8 lg:col-span-6 lg:col-start-7">
            {reasons.map((r) => (
              <li key={r.title} className="flex gap-4 py-5">
                <CheckIcon className="mt-0.5 size-6 shrink-0 text-teal-text" />
                <div>
                  <p className="font-serif text-xl font-semibold text-deep">{r.title}</p>
                  <p className="mt-1 text-[0.9375rem] leading-relaxed text-body">{r.body}</p>
                </div>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <ChecklistSection
        eyebrow="Komitmen Kami"
        titleId="komitmen-title"
        title={
          <>
            Yang Kami Jaga dalam <span className="accent">Setiap Sesi.</span>
          </>
        }
        intro="Prinsip yang menjadi pegangan kami dalam mendampingi setiap pasien."
        items={[
          { title: "Persetujuan Anda", body: "Setiap penanganan dijelaskan terlebih dahulu dan dilakukan dengan persetujuan Anda." },
          { title: "Komunikasi yang jelas", body: "Temuan asesmen, rencana, dan perkembangan disampaikan dengan bahasa yang mudah dipahami." },
          { title: "Kerahasiaan data", body: "Informasi kesehatan Anda diperlakukan secara rahasia dan hanya digunakan untuk keperluan perawatan." },
          { title: "Rujukan bila diperlukan", body: "Bila ada tanda yang memerlukan pemeriksaan lain, kami akan menyarankan Anda berkonsultasi dengan dokter." },
        ]}
      />

      <Team />

      {siteConfig.testimonials.length > 0 ? (
      <section aria-labelledby="kata-title" className="pb-24 md:pb-32">
          <div className="shell">
            <Reveal className="max-w-3xl">
              <SectionIntro eyebrow="Kata Pasien" titleId="kata-title" title="Cerita dari Pasien." />
            </Reveal>
            <div className="mt-10">
              <TestimonialList limit={3} />
            </div>
          </div>
        </section>
      ) : null}

      <FinalCta />
    </main>
  );
}
