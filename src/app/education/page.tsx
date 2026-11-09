import { notFound } from "next/navigation";
import { FinalCta } from "@/components/FinalCta";
import { PageHero } from "@/components/PageHero";
import { PlaceholderTag } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { siteConfig } from "@/config/site";
import { educationCategories } from "@/content/education";
import { pageMeta } from "@/lib/meta";
import { AssessmentIcon } from "@/components/ui/Icon";

export const metadata = pageMeta("Edukasi Fisioterapi | ELPIORA", "Pengetahuan praktis tentang fisioterapi, pencegahan cedera, kesehatan kerja, dan aktivitas fisik.", "/education");

// Blueprint section H/K: opens only with articles reviewed by a physiotherapist (siteConfig.publish.education).
export default function EducationPage() {
  if (!siteConfig.publish.education) notFound();
  return (
    <main id="konten">
      <PageHero
        eyebrow="Education"
        title={
          <>
            Move Better, <span className="accent">Know Better.</span>
          </>
        }
        lead={<p>Temukan pengetahuan praktis tentang fisioterapi, pencegahan cedera, kesehatan kerja, rehabilitasi neurologis, dan aktivitas fisik. Konten edukasi tidak menggantikan pemeriksaan tenaga kesehatan.</p>}
        image={siteConfig.images.about}
        note={{ label: "Ditinjau fisioterapis", text: "Setiap artikel kesehatan melalui tinjauan klinis", Icon: AssessmentIcon }}
      />
      <section aria-labelledby="edu-title" className="py-24">
        <div className="shell">
          <Reveal className="max-w-3xl">
            <SectionIntro eyebrow="Topik" titleId="edu-title" title={<>Artikel yang <span className="accent">sedang disiapkan</span></>} />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {educationCategories.map((c) => (
              <div key={c.title} className="rounded-[22px] bg-paper p-6">
                <h3 className="t-h3 !text-[1.4rem]">{c.title}</h3>
                <ul className="mt-4 space-y-2 text-[0.9375rem] text-body">
                  {c.articles.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
                <PlaceholderTag className="mt-4">Dalam persiapan</PlaceholderTag>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </main>
  );
}
