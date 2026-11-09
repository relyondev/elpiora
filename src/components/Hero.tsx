import { siteConfig } from "@/config/site";
import { getBookingAction } from "@/lib/booking";
import { LinkButton } from "./ui/Button";
import { ImagePlate } from "./ui/ImagePlate";
import { MovementCurve, SpineDots } from "./ui/Ornaments";

const headline = [
  { text: "Bergerak", em: false },
  { text: "Lebih Nyaman.", em: true },
  { text: "Jalani Hidup", em: false },
  { text: "Lebih Penuh.", em: false },
];

const trust = [
  { title: "Pendekatan Personal", body: "Setiap langkah disesuaikan dengan kondisi dan tujuan Anda." },
  { title: "Fokus pada Fungsi Gerak", body: "Membantu Anda kembali ke aktivitas yang berarti bagi Anda." },
  { title: "Perawatan Berorientasi Tujuan", body: "Target disusun bersama dan ditinjau secara berkala." },
];

export function Hero() {
  const booking = getBookingAction();

  return (
    <section id="beranda" tabIndex={-1} aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-[calc(var(--header-h)+28px)] outline-none md:pt-[calc(var(--header-h)+56px)]">
      {/* calm mint light field behind the image column */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-10%] right-[-20%] h-[90%] w-[85%] rounded-full bg-[radial-gradient(closest-side,var(--elpiora-mint-100),rgb(223_242_231/0))] md:right-[-8%] md:w-[60%]" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-line" />
      </div>

      <div className="shell">
        <div className="grid-12 items-end gap-y-12">
          {/* ---- Copy ---- */}
          <div className="col-span-4 md:col-span-12 lg:col-span-7 lg:pb-16">
            <p className="t-eyebrow fade-in" style={{ "--d": "0ms" } as React.CSSProperties}>
              ELPIORA <span aria-hidden="true">·</span> Physiotherapy &amp; Wellness
            </p>

            <h1 id="hero-title" className="t-display mt-6 md:mt-8">
              {headline.map((line, i) => (
                <span key={line.text} className="line-mask">
                  <span
                    className={`line-rise ${line.em ? "font-normal text-teal-text italic" : ""}`}
                    style={{ "--d": `${120 + i * 90}ms` } as React.CSSProperties}
                  >
                    {line.text}
                  </span>
                </span>
              ))}
            </h1>

            <p className="t-lead fade-in mt-8 max-w-[34rem]" style={{ "--d": "520ms" } as React.CSSProperties}>
              Pendekatan fisioterapi yang personal untuk membantu Anda memahami tubuh, memulihkan fungsi gerak, dan kembali beraktivitas
              dengan percaya diri.
            </p>

            <div className="fade-in mt-10 flex flex-col gap-3 sm:flex-row sm:items-center" style={{ "--d": "640ms" } as React.CSSProperties}>
              <LinkButton href={booking.href} external={booking.external}>
                Jadwalkan Konsultasi
              </LinkButton>
              <LinkButton href="#layanan" variant="secondary" arrow={false}>
                Jelajahi Layanan
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

            {/* official tagline as a small refined accent — gold only on deep (5.49:1) */}
            <p className="on-dark fade-in absolute -bottom-5 left-4 z-20 rounded-full bg-deep px-6 py-3 shadow-[0_18px_40px_-18px_rgb(18_63_67/0.6)] md:-left-10" style={{ "--d": "900ms" } as React.CSSProperties}>
              <span className="t-script text-xl text-gold md:text-2xl">{siteConfig.brand.tagline}</span>
            </p>
          </div>
        </div>

        {/* ---- Trust descriptors (qualitative — no unverifiable numbers) ---- */}
        <ul className="mt-20 grid gap-px overflow-hidden border-t border-line md:mt-24 md:grid-cols-3" aria-label="Prinsip perawatan ELPIORA">
          {trust.map((item, i) => (
            <li key={item.title} className="flex gap-5 border-b border-line py-5 last:border-b-0 md:border-b-0 md:py-7 md:pr-8 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:border-line md:[&:not(:first-child)]:pl-8">
              <span className="font-serif text-lg text-teal-text" aria-hidden="true">
                0{i + 1}
              </span>
              <div>
                <p className="text-[0.9375rem] font-semibold text-deep">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-text">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
