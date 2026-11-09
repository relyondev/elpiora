import { siteConfig } from "@/config/site";
import { ImagePlate } from "./ui/ImagePlate";
import { Reveal } from "./ui/Reveal";
import { SectionIntro } from "./ui/SectionIntro";

/**
 * Therapist / team section. Renders nothing until real team members — with
 * verified qualifications, real portraits and consent — are added to
 * `siteConfig.team`. No invented people, credentials or photos.
 */
export function Team() {
  const team = siteConfig.team;
  if (team.length === 0) return null;

  return (
    <section aria-labelledby="tim-title" className="bg-paper py-24 md:py-32">
      <div className="shell">
        <Reveal className="max-w-3xl">
          <SectionIntro index="—" eyebrow="Tim Kami" titleId="tim-title" title="Orang-orang di Balik Setiap Sesi." />
        </Reveal>
        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <Reveal as="li" key={member.name} delay={i * 70}>
              <ImagePlate image={member.photo} variant="conversation" sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" className="aspect-[4/5] w-full rounded-[24px]" />
              <h3 className="t-h3 mt-6">{member.name}</h3>
              <p className="mt-1 text-sm font-semibold text-teal-text">{member.role}</p>
              <p className="mt-1 text-sm text-muted-text">{member.credentials}</p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink">{member.bio}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
