import { About } from "@/components/About";
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
  "Mengenal ELPIORA Physiotherapy and Wellness — pendekatan fisioterapi yang personal, jelas, dan penuh empati.",
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
        eyebrow="Tentang ELPIORA"
        title={
          <>
            Fisioterapi yang Personal untuk <span className="accent">Kualitas Hidup</span> yang Lebih Baik.
          </>
        }
        lead={<p>Kami memadukan ketelitian klinis dengan perhatian yang tulus — membantu Anda bergerak lebih nyaman dan kembali menjalani keseharian.</p>}
        actions={
          <>
            <LinkButton href={BOOKING_PATH}>Buat Janji</LinkButton>
            <LinkButton href="/layanan" variant="secondary" arrow={false}>
              Lihat Layanan
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
                    {brand.missionIsDraft ? <PlaceholderTag>Draf — menunggu persetujuan</PlaceholderTag> : null}
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

      <Team showPlaceholder />

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

      <FinalCta />
    </main>
  );
}
