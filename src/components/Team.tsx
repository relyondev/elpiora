import { siteConfig } from "@/config/site";
import { ImagePlate } from "./ui/ImagePlate";
import { PlaceholderTag } from "./ui/Logo";
import { Reveal } from "./ui/Reveal";
import { SectionIntro } from "./ui/SectionIntro";

/**
 * Therapist / team section. Real team members appear only once added to
 * `siteConfig.team` with verified qualifications, real portraits and consent.
 * Until then: `showPlaceholder` renders an honest note (About page), otherwise
 * the section is omitted entirely.
 */
export function Team({ showPlaceholder = false }: { showPlaceholder?: boolean }) {
  const team = siteConfig.team;
  if (team.length === 0 && !showPlaceholder) return null;

  return (
    <section aria-labelledby="tim-title" className="py-24 md:py-32">
      <div className="shell">
        <div className="grid-12 gap-y-8">
          <Reveal className="col-span-4 md:col-span-8 lg:col-span-6">
            <SectionIntro eyebrow="Tim Kami" titleId="tim-title" title={<>Orang-orang di Balik <span className="accent">Setiap Sesi.</span></>} />
          </Reveal>
          <Reveal delay={100} className="col-span-4 self-end md:col-span-8 lg:col-span-5 lg:col-start-8">
            <p className="text-[0.9375rem] leading-relaxed text-body">
              Kenali fisioterapis yang akan mendampingi Anda, lengkap dengan kualifikasi yang dapat diverifikasi.
            </p>
          </Reveal>
        </div>

        {team.length > 0 ? (
          <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal as="li" key={member.name} delay={i * 70}>
                <ImagePlate image={member.photo} variant="conversation" sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" className="aspect-[4/5] w-full rounded-[24px]" />
                <h3 className="t-h3 mt-6">{member.name}</h3>
                <p className="mt-1 text-sm font-semibold text-teal-text">{member.role}</p>
                <p className="mt-1 text-sm text-muted-text">{member.credentials}</p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-body">{member.bio}</p>
              </Reveal>
            ))}
          </ul>
        ) : (
          <Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[0, 1, 2].map((i) => (
                <div key={i} aria-hidden="true" className="aspect-[4/5] rounded-[24px] border border-dashed border-deep/20 bg-[linear-gradient(170deg,var(--elpiora-surface),var(--elpiora-mint-100))]" />
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <PlaceholderTag>Profil tim menyusul</PlaceholderTag>
              <p className="text-sm text-muted-text">
                Profil fisioterapis akan ditampilkan setelah nama, kualifikasi, dan foto resmi tersedia serta disetujui.
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
