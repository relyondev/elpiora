import { BOOKING_PATH, siteConfig } from "@/config/site";
import { LinkButton } from "./ui/Button";
import { ImagePlate } from "./ui/ImagePlate";
import { LotusIcon, SpineIcon, SportIcon, WorkplaceIcon } from "./ui/Icon";
import { BrushUnderline, MovementCurve, SpineDots, WaveRibbons } from "./ui/Ornaments";

const headline = [
  { text: "Bergerak", em: false },
  { text: "Lebih Nyaman.", em: true },
  { text: "Jalani Hidup", em: false },
  { text: "Lebih Penuh.", em: false },
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
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-[calc(var(--header-h)+28px)] md:pt-[calc(var(--header-h)+56px)]">
      {/* calm mint light field behind the image column */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-10%] right-[-20%] h-[90%] w-[85%] rounded-full bg-[radial-gradient(closest-side,var(--elpiora-mint-100),rgb(223_242_231/0))] md:right-[-8%] md:w-[60%]" />
        <WaveRibbons className="absolute inset-x-0 bottom-0 h-40 w-full md:h-56" />
      </div>

      <div className="shell">
        <div className="grid-12 items-end gap-y-12">
          {/* ---- Copy ---- */}
          <div className="col-span-4 md:col-span-12 lg:col-span-7 lg:pb-16">
            <p className="pill-hashtag fade-in" style={{ "--d": "0ms" } as React.CSSProperties}>
              #ElpioraInside <span aria-hidden="true">·</span> Physiotherapy &amp; Wellness
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
              Pendekatan fisioterapi yang personal untuk membantu Anda memahami tubuh, memulihkan fungsi gerak, dan kembali beraktivitas
              dengan percaya diri. Perjalanannya <strong>dimulai di sini.</strong>
            </p>

            <div className="fade-in mt-10 flex flex-col gap-3 sm:flex-row sm:items-center" style={{ "--d": "640ms" } as React.CSSProperties}>
              <LinkButton href={BOOKING_PATH}>
                Jadwalkan Konsultasi
              </LinkButton>
              <LinkButton href="/layanan" variant="champagne">
                Lihat Daftar Layanan
              </LinkButton>
            </div>
          </div>

          {/* ---- Art-directed image ---- */}
          <div className="relative col-span-4 md:col-span-8 md:col-start-3 lg:col-span-5 lg:col-start-8">
            <MovementCurve draw className="pointer-events-none absolute -top-[12%] -left-[30%] z-10 h-[120%] w-[150%] md:-left-[45%]" />
            <div className="fade-in relative" style={{ "--d": "260ms" } as React.CSSProperties}>
              <ImagePlate
                image={siteConfig.images.hero}
                variant="studio"
                priority
                sizes="(min-width: 1024px) 40vw, (min-width: 768px) 66vw, 100vw"
                captionClassName="right-5 bottom-14 items-end text-right"
                className="aspect-[4/5] max-h-[78svh] w-full rounded-t-[999px] rounded-b-[28px] shadow-[0_40px_80px_-40px_rgb(18_63_67/0.35)] lg:aspect-[4/5.4]"
              />
              {/* soft mint overlay for depth */}
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-t-[999px] rounded-b-[28px] bg-[linear-gradient(180deg,rgb(223_242_231/0)_55%,rgb(223_242_231/0.35))]" />
              <SpineDots className="absolute top-[18%] -right-3 hidden h-[46%] text-gold md:block" />
            </div>

            {/* official tagline in the poster's brush script, with a gold brush underline */}
            <p
              className="fade-in absolute -bottom-6 left-4 z-20 rounded-[20px] bg-paper/95 px-6 pt-3 pb-4 shadow-[0_18px_40px_-18px_rgb(11_66_72/0.45)] md:-left-10"
              style={{ "--d": "900ms" } as React.CSSProperties}
            >
              <span className="t-script block -rotate-3 text-xl text-deep md:text-2xl">{siteConfig.brand.tagline}</span>
              <BrushUnderline className="mt-1 h-2.5 w-full" />
            </p>
          </div>
        </div>

        {/* ---- Benefits (poster wording + amber icon circles) ---- */}
        <ul className="relative mt-20 grid gap-4 pb-16 sm:grid-cols-2 md:mt-24 lg:grid-cols-4 md:pb-24" aria-label="Manfaat fisioterapi bersama ELPIORA">
          {benefits.map(({ lead, strong, Icon }) => (
            <li key={strong} className="flex items-center gap-4 rounded-full bg-paper py-2.5 pr-5 pl-2.5 shadow-[0_1px_0_var(--elpiora-line)]">
              <span className="icon-amber size-11" aria-hidden="true">
                <Icon className="size-5" strokeWidth={1.8} />
              </span>
              <span className="text-[0.9375rem] text-body">
                {lead} <strong className="font-bold text-deep">{strong}</strong>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
