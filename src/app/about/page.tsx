import { ChecklistSection } from "@/components/ContentSections";
import { FinalCta } from "@/components/FinalCta";
import { IconCards } from "@/components/IconCards";
import { PageHero } from "@/components/PageHero";
import { LinkButton } from "@/components/ui/Button";
import { HeartHandIcon, AssessmentIcon, ProgressIcon, WellnessIcon } from "@/components/ui/Icon";
import { PlaceholderTag } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { siteConfig } from "@/config/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "Tentang ELPIORA | Pendekatan Fisioterapi Personal",
  "Kenali ELPIORA Physiotherapy & Wellness: filosofi, pendekatan rehabilitasi personal, nilai pelayanan, dan tim fisioterapis.",
  "/about",
);

const different = [
  { title: "Memahami masalah", body: "Kami mendengarkan keluhan, riwayat, dan aktivitas Anda sebelum menyimpulkan apa pun." },
  { title: "Tujuan yang bermakna", body: "Target disusun dari hal yang penting bagi Anda, misalnya berjalan lebih percaya diri atau kembali berolahraga." },
  { title: "Program yang bisa dilakukan", body: "Latihan dan strategi dirancang agar realistis dijalankan dalam keseharian Anda." },
  { title: "Kolaborasi keluarga bila relevan", body: "Keluarga atau pendamping dapat dilibatkan untuk mendukung latihan dan keselamatan di rumah." },
];

export default function AboutPage() {
  const { brand, team } = siteConfig;
  return (
    <main id="konten">
      <PageHero
        eyebrow="About ELPIORA"
        title={
          <>
            About <span className="accent">ELPIORA</span>
          </>
        }
        lead={
          <>
            <p className="font-serif text-[1.6rem] leading-snug font-bold text-gold-light">Movement Matters. People Matter More.</p>
            <p className="mt-4">
              ELPIORA Physiotherapy &amp; Wellness adalah identitas layanan yang berfokus pada fungsi gerak, rehabilitasi, dan kesehatan berkelanjutan. Kami percaya
              setiap pasien memiliki cerita, tantangan, serta tujuan yang tidak bisa disamakan.
            </p>
          </>
        }
        actions={
          <>
            <LinkButton href={team.length ? "/about/our-team" : "/about/our-approach"} variant="champagne">
              {team.length ? "Kenali Tim Fisioterapis Kami" : "Lihat Pendekatan Kami"}
            </LinkButton>
            <LinkButton href="/services" variant="secondary-on-dark">
              Lihat Layanan
            </LinkButton>
          </>
        }
        image={siteConfig.images.aboutHero}
        note={{ label: "Pendekatan kami", text: "Mendengarkan dulu, lalu menyusun program bersama Anda", Icon: HeartHandIcon }}
      />

      <section aria-labelledby="who-title" className="py-24 md:py-28">
        <div className="shell grid-12 gap-y-8">
          <Reveal className="col-span-4 md:col-span-8 lg:col-span-5">
            <SectionIntro eyebrow="Siapa kami" titleId="who-title" title={<>Who <span className="accent">We Are</span></>} />
          </Reveal>
          <Reveal delay={100} className="col-span-4 space-y-5 text-[1.0625rem] leading-[1.8] text-body md:col-span-8 lg:col-span-6 lg:col-start-7">
            <p>
              Bagi kami, keberhasilan fisioterapi mencakup lebih dari berkurangnya keluhan. Kemajuan yang bermakna dapat berupa kembali berjalan lebih percaya
              diri, bekerja dengan nyaman, berolahraga dengan aman, atau menjalani rutinitas sehari-hari secara lebih mandiri.
            </p>
            <p>
              Karena itu, ELPIORA mengedepankan penilaian individual, komunikasi, serta latihan dan dukungan yang relevan dengan kehidupan pasien.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-label="Misi dan visi" className="pb-24 md:pb-28">
        <div className="shell grid gap-5 md:grid-cols-2">
          {[
            { label: "Our Mission", text: brand.mission },
            { label: "Our Vision", text: brand.vision },
          ].map((b, i) => (
            <Reveal key={b.label} delay={i * 80}>
              <div className="h-full rounded-[24px] bg-mint-100 p-8 md:p-10">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="t-h3 accent">{b.label}</h2>
                  {brand.missionIsDraft ? <PlaceholderTag>Draf, menunggu persetujuan</PlaceholderTag> : null}
                </div>
                <p className="mt-5 font-serif text-[clamp(1.25rem,1.1rem+0.5vw,1.6rem)] leading-snug font-medium text-deep">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="values-title" className="bg-paper py-24 md:py-28">
        <div className="shell">
          <Reveal className="max-w-3xl">
            <SectionIntro
              eyebrow="Nilai kami"
              titleId="values-title"
              title={
                <>
                  Core <span className="accent">Values</span>
                </>
              }
            />
            <PlaceholderTag className="mt-5">Nilai dalam usulan, menunggu konfirmasi</PlaceholderTag>
          </Reveal>
          <div className="mt-10">
            <IconCards
              columns={5}
              items={brand.values.map((v, i) => ({ title: v.title, body: v.body, Icon: [AssessmentIcon, HeartHandIcon, WellnessIcon, ProgressIcon, ProgressIcon][i] }))}
            />
          </div>
        </div>
      </section>

      <ChecklistSection
        titleId="different-title"
        title={
          <>
            What Makes Our Approach <span className="accent">Different</span>
          </>
        }
        intro="Empat hal yang kami pegang dalam mendampingi setiap pasien."
        items={different}
      />

      <FinalCta
        title={
          <>
            Mulai dari <span className="accent">percakapan pertama.</span>
          </>
        }
        lead="Ceritakan kebutuhan Anda. Tim ELPIORA akan membantu menjelaskan layanan dan proses booking yang sesuai."
        secondaryLabel="Lihat Pendekatan Kami"
        secondaryHref="/about/our-approach"
      />
    </main>
  );
}
