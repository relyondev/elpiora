import { siteConfig } from "@/config/site";
import { LinkButton, TextLink } from "./ui/Button";
import { HomeIcon, WorkplaceIcon } from "./ui/Icon";
import { ImagePlate } from "./ui/ImagePlate";
import { PlaceholderTag } from "./ui/Logo";
import { Reveal } from "./ui/Reveal";
import { SectionIntro } from "./ui/SectionIntro";

/** Home section 05: About teaser (blueprint copy). */
export function AboutTeaser() {
  return (
    <section aria-labelledby="about-teaser-title" className="bg-paper py-24 md:py-32">
      <div className="shell grid-12 items-center gap-y-12">
        <Reveal className="col-span-4 md:col-span-6 lg:col-span-5">
          <ImagePlate
            image={siteConfig.images.about}
            variant="conversation"
            sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
            className="aspect-[4/5] w-full rounded-t-[28px] rounded-br-[28px] rounded-bl-[120px]"
          />
        </Reveal>
        <Reveal delay={100} className="col-span-4 md:col-span-6 lg:col-span-6 lg:col-start-7">
          <SectionIntro
            eyebrow="Tentang ELPIORA"
            titleId="about-teaser-title"
            title={
              <>
                More Than Recovery. <span className="accent">A Better Way to Move.</span>
              </>
            }
          />
          <p className="mt-6 text-[1.0625rem] leading-[1.75] text-body">
            ELPIORA hadir dengan pendekatan fisioterapi yang memandang setiap pasien sebagai individu. Kami mengutamakan komunikasi yang jelas,
            penilaian klinis, tujuan fungsional, serta kerja sama aktif antara fisioterapis dan pasien.
          </p>
          <LinkButton href="/about" variant="secondary" className="mt-8">
            Kenali ELPIORA
          </LinkButton>
        </Reveal>
      </div>
    </section>
  );
}

/** Home sections 06 and 07: Home Visit and Corporate & Event teasers, side by side. */
export function BeyondClinic() {
  const { homeVisit } = siteConfig;
  return (
    <section aria-label="Layanan di luar klinik" className="py-24 md:py-32">
      <div className="shell grid gap-5 lg:grid-cols-2">
        <Reveal>
          <article className="flex h-full flex-col rounded-[28px] bg-mint-100 p-8 md:p-10" aria-labelledby="hv-teaser-title">
            <span className="icon-amber size-14" aria-hidden="true">
              <HomeIcon className="size-7" strokeWidth={1.7} />
            </span>
            <h2 id="hv-teaser-title" className="t-h2 mt-6 !text-[clamp(2rem,1.5rem+1.8vw,3rem)]">
              Professional Physiotherapy, <span className="accent">Closer to Home.</span>
            </h2>
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-body">
              Untuk pasien yang sulit bepergian atau lebih nyaman menjalani fisioterapi di rumah, ELPIORA merancang layanan Home Visit dengan penilaian
              kebutuhan, penjadwalan, dan program yang disesuaikan dengan kondisi pasien.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-body">
              {homeVisit.coverageAreas.length
                ? `Area layanan: ${homeVisit.coverageAreas.join(", ")}. Ketersediaan dikonfirmasi berdasarkan alamat dan jadwal tim.`
                : "Area layanan sedang dikonfirmasi. Ketersediaan ditentukan berdasarkan alamat dan jadwal tim."}
            </p>
            {!homeVisit.confirmed ? <PlaceholderTag className="mt-4 self-start">Cakupan area menunggu konfirmasi</PlaceholderTag> : null}
            <div className="mt-auto pt-8">
              <LinkButton href="/home-visit" variant="secondary">
                Pelajari Home Visit
              </LinkButton>
            </div>
          </article>
        </Reveal>

        <Reveal delay={100}>
          <article className="flex h-full flex-col rounded-[28px] bg-paper p-8 shadow-[0_1px_0_var(--elpiora-line)] md:p-10" aria-labelledby="corp-teaser-title">
            <span className="icon-amber size-14" aria-hidden="true">
              <WorkplaceIcon className="size-7" strokeWidth={1.7} />
            </span>
            <h2 id="corp-teaser-title" className="t-h2 mt-6 !text-[clamp(2rem,1.5rem+1.8vw,3rem)]">
              Supporting Movement <span className="accent">Beyond the Clinic.</span>
            </h2>
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-body">
              Kami juga mengembangkan dukungan fisioterapi untuk komunitas olahraga, event, dan lingkungan kerja: edukasi pencegahan cedera, asesmen
              dasar, dukungan recovery, serta program ergonomi.
            </p>
            <PlaceholderTag className="mt-4 self-start">Paket dan kesiapan menunggu konfirmasi</PlaceholderTag>
            <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 pt-8">
              <LinkButton href="/corporate-wellness" variant="secondary">
                Ajukan Kerja Sama
              </LinkButton>
              <TextLink href="/event-physiotherapy">Event Physiotherapy</TextLink>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
