import Link from "next/link";
import { siteConfig } from "@/config/site";
import { bookingHref } from "@/lib/booking";
import { Banner, GlassCard } from "./Banner";
import { LinkButton } from "./ui/Button";
import { AssessmentIcon, LotusIcon, SpineIcon, SportIcon, WorkplaceIcon } from "./ui/Icon";
import { ImagePlate } from "./ui/ImagePlate";
import { BrushUnderline, MovementCurve, SpineDots } from "./ui/Ornaments";

// Blueprint home H1. The Indonesian alternative is "Bergerak Lebih Baik. Jalani Hidup Lebih Penuh."
const headline = [
  { text: "Restore Movement.", em: false },
  { text: "Renew Life.", em: true },
];

/** Benefit list from the official #ELPIORAINSIDE poster (same wording), with its amber icon circles. */
const benefits = [
  { lead: "Meningkatkan", strong: "fungsi gerak", Icon: SpineIcon },
  { lead: "Mendukung", strong: "gaya hidup aktif", Icon: WorkplaceIcon },
  { lead: "Meningkatkan", strong: "kualitas hidup", Icon: LotusIcon },
  { lead: "Mengurangi", strong: "nyeri aktivitas", Icon: SportIcon },
];

export function Hero() {
  return (
    <Banner labelledBy="hero-title">
      <div className="px-5 pt-[calc(var(--header-h)+12px)] pb-8 md:px-10 md:pb-10 lg:px-14">
        <div className="grid-12 items-center gap-y-12 pt-6 md:pt-10">
          {/* ---- Copy ---- */}
          <div className="col-span-4 md:col-span-12 lg:col-span-7">
            <p className="pill-hashtag fade-in" style={{ "--d": "0ms" } as React.CSSProperties}>
              Physiotherapy &amp; Wellness
            </p>

            <h1 id="hero-title" className="t-display mt-6 md:mt-8">
              {headline.map((line, i) => (
                <span key={line.text} className="line-mask">
                  <span
                    className={`line-rise ${line.em ? "accent" : ""}`}
                    style={{ "--d": `${120 + i * 90}ms` } as React.CSSProperties}
                  >
                    {line.text}
                  </span>
                </span>
              ))}
            </h1>

            <span className="gold-rule fade-in mt-8" style={{ "--d": "460ms" } as React.CSSProperties} aria-hidden="true" />
            <p className="t-lead fade-in mt-6 max-w-[34rem]" style={{ "--d": "520ms" } as React.CSSProperties}>
              Setiap langkah pemulihan dimulai dari pemahaman yang tepat. ELPIORA menghadirkan layanan fisioterapi untuk membantu Anda mengatasi
              keterbatasan gerak, mengelola nyeri, memulihkan fungsi tubuh, dan kembali pada aktivitas yang berarti, melalui pendekatan personal dan
              berbasis penilaian klinis.
            </p>

            <div className="fade-in mt-10 flex flex-col gap-3 sm:flex-row sm:items-center" style={{ "--d": "640ms" } as React.CSSProperties}>
              <LinkButton href={bookingHref()} variant="champagne">
                Konsultasi &amp; Booking
              </LinkButton>
              <LinkButton href="/services" variant="secondary-on-dark">
                Lihat Layanan Kami
              </LinkButton>
            </div>
            <p className="fade-in mt-5 text-[0.9375rem] text-mint-100" style={{ "--d": "700ms" } as React.CSSProperties}>
              Butuh fisioterapi di rumah?{" "}
              <Link href="/home-visit" className="inline-flex min-h-11 items-center font-semibold text-white underline decoration-gold-light underline-offset-4">
                Lihat Home Visit
              </Link>
            </p>
          </div>

          {/* ---- Visual + glass cards ---- */}
          <div className="relative col-span-4 md:col-span-8 md:col-start-3 lg:col-span-5 lg:col-start-8">
            <MovementCurve draw className="pointer-events-none absolute -top-[10%] -left-[30%] z-10 h-[115%] w-[150%] md:-left-[40%]" />
            <div className="fade-in relative mx-auto max-w-[460px] lg:mr-0" style={{ "--d": "260ms" } as React.CSSProperties}>
              <ImagePlate
                image={siteConfig.images.hero}
                variant="studio"
                priority
                sizes="(min-width: 1024px) 34vw, (min-width: 768px) 60vw, 100vw"
                captionClassName="right-4 bottom-4 items-end text-right"
                className="aspect-[4/4.6] w-full rounded-t-[999px] rounded-b-[28px]"
              />
              <SpineDots className="absolute top-[16%] -right-4 hidden h-[44%] text-gold md:block" />

              <GlassCard Icon={AssessmentIcon} label="Langkah pertama" className="mt-3 md:absolute md:top-[10%] md:-right-8 md:mt-0 md:w-60">
                Konsultasi &amp; asesmen gerak
              </GlassCard>

              <div
                className="fade-in mt-3 rounded-[20px] border border-white/20 bg-deep/80 px-5 pt-3 pb-4 md:absolute md:bottom-[14%] md:-left-10 md:mt-0"
                style={{ "--d": "900ms" } as React.CSSProperties}
              >
                <span className="t-script block -rotate-2 text-xl text-gold-light md:text-2xl">{siteConfig.brand.tagline}</span>
                <BrushUnderline className="mt-1 h-2.5 w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* ---- Benefits strip (poster wording), in the place of the reference's logo strip ---- */}
        <ul
          className="relative mt-14 grid gap-3 rounded-[24px] border border-white/15 bg-deep/45 p-3 sm:grid-cols-2 md:mt-16 lg:grid-cols-4"
          aria-label="Manfaat fisioterapi bersama ELPIORA"
        >
          {benefits.map(({ lead, strong, Icon }) => (
            <li key={strong} className="flex items-center gap-3 rounded-[16px] px-3 py-2">
              <span className="icon-amber size-11" aria-hidden="true">
                <Icon className="size-5" strokeWidth={1.8} />
              </span>
              <span className="text-[0.9375rem] text-mint-100">
                {lead} <strong className="font-bold text-white">{strong}</strong>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Banner>
  );
}
