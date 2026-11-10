import { siteConfig } from "@/config/site";
import { LinkButton, TextLink } from "./ui/Button";
import { HomeIcon } from "./ui/Icon";
import { ImagePlate } from "./ui/ImagePlate";
import { PlaceholderTag } from "./ui/Logo";
import { Reveal } from "./ui/Reveal";
import { SectionIntro } from "./ui/SectionIntro";
import { TestimonialList } from "./Testimonials";

/** Home: home-visit banner beside the testimonials preview (after mockup 1). */
export function HomeVisitAndVoices() {
  // antislop R-18: the patient-stories column appears only when real testimonials exist
  const hasVoices = siteConfig.testimonials.length > 0;
  return (
    <section aria-labelledby="homevisit-title" className="py-24 md:py-32">
      <div className="shell grid gap-6 lg:grid-cols-12">
        <Reveal className={hasVoices ? "lg:col-span-7" : "lg:col-span-12"}>
          <div className="relative grid h-full overflow-hidden rounded-[28px] bg-[linear-gradient(120deg,var(--elpiora-mint-100),var(--elpiora-surface))] md:grid-cols-2">
            <div className="relative z-10 flex flex-col p-7 md:p-10">
              <p className="t-eyebrow flex items-center gap-3">
                <HomeIcon className="size-5 text-teal-text" />
                Home Visit
              </p>
              <h2 id="homevisit-title" className="t-h2 mt-5 !text-[clamp(2rem,1.5rem+1.8vw,3rem)]">
                Fisioterapi di <span className="accent">Rumah Anda.</span>
              </h2>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-body">
                Untuk Anda yang sulit bepergian: sesi fisioterapi dengan pendampingan di lingkungan yang familiar.
              </p>
              {!siteConfig.homeVisit.confirmed ? <PlaceholderTag className="mt-4 self-start">Area & ketersediaan menunggu konfirmasi</PlaceholderTag> : null}
              <div className="mt-auto flex flex-wrap items-center gap-4 pt-8">
                <LinkButton href="/home-visit" variant="secondary">
                  Cara Kerja Home Visit
                </LinkButton>
              </div>
            </div>
            <ImagePlate
              image={siteConfig.images.homeVisitHero}
              variant="conversation"
              sizes="(min-width: 1024px) 30vw, 100vw"
              captionClassName="right-5 bottom-5 items-end text-right"
              className="aspect-[4/3] md:aspect-auto md:h-full md:rounded-l-[120px]"
            />
          </div>
        </Reveal>

        {hasVoices ? (
        <Reveal delay={100} className="flex flex-col lg:col-span-5">
          <SectionIntro eyebrow="Kata Pasien" titleId="voices-title" title="Cerita dari Pasien." className="[&_h2]:!text-[clamp(2rem,1.5rem+1.8vw,3rem)]" />
          <div className="mt-6 flex-1">
            <TestimonialList limit={1} compact />
          </div>
          <TextLink href="/testimoni" className="mt-4 self-start">
            Lihat halaman testimoni
          </TextLink>
        </Reveal>
        ) : null}
      </div>
    </section>
  );
}
