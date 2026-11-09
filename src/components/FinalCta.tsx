import type { ReactNode } from "react";
import { BOOKING_PATH } from "@/config/site";
import { LinkButton } from "./ui/Button";
import { MovementCurve, SpineDots, WaveRibbons } from "./ui/Ornaments";
import { Reveal } from "./ui/Reveal";

type Props = {
  title?: ReactNode;
  lead?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function FinalCta({
  title = "Mulai Kembali Bergerak dengan Lebih Percaya Diri.",
  lead = "Ceritakan kebutuhan Anda, dan kami akan membantu menemukan langkah awal yang sesuai.",
  primaryLabel = "Buat Janji Konsultasi",
  primaryHref = BOOKING_PATH,
  secondaryLabel = "Lihat Daftar Layanan",
  secondaryHref = "/layanan",
}: Props) {
  return (
    <section aria-labelledby="cta-title" className="py-6 md:py-10">
      <div className="shell">
        <Reveal>
          <div className="on-dark relative isolate overflow-hidden rounded-[28px] bg-deep px-6 py-20 text-center md:rounded-[36px] md:px-12 md:py-24">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
              <MovementCurve className="absolute inset-0 size-full opacity-35" />
              <WaveRibbons tone="dark" className="absolute inset-x-0 bottom-0 h-32 w-full" />
            </div>

            <SpineDots vertical={false} count={7} className="mx-auto mb-10 h-3 w-24 text-gold" />

            <h2 id="cta-title" className="t-h2 mx-auto max-w-[18ch]">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-[42ch] text-[1.0625rem] leading-relaxed text-mint-200">{lead}</p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <LinkButton href={primaryHref} variant="primary-on-dark">
                {primaryLabel}
              </LinkButton>
              <LinkButton href={secondaryHref} variant="champagne">
                {secondaryLabel}
              </LinkButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
