import type { ReactNode } from "react";
import type { ImageSlot } from "@/config/site";
import { ImagePlate } from "./ui/ImagePlate";
import { MovementCurve } from "./ui/Ornaments";

type Props = {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  actions?: ReactNode;
  image: ImageSlot;
  imageVariant?: "studio" | "conversation" | "reception" | "treatment" | "detail";
  titleId?: string;
};

/**
 * Inner-page banner, after the mockups: serif title left, a wide art-directed
 * image right, all on a soft mint field with the gold movement line.
 */
export function PageHero({ eyebrow, title, lead, actions, image, imageVariant = "conversation", titleId = "page-title" }: Props) {
  return (
    <section aria-labelledby={titleId} className="relative isolate overflow-hidden pt-[calc(var(--header-h)+24px)] md:pt-[var(--header-h)]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,var(--elpiora-surface)_0%,var(--elpiora-surface)_38%,var(--elpiora-mint-100)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-line" />
      </div>

      <div className="shell grid items-center gap-10 pb-14 md:grid-cols-12 md:gap-6 md:pb-0">
        <div className="md:col-span-6 md:py-20 lg:col-span-5 lg:py-24">
          <p className="t-eyebrow fade-in flex items-center gap-3">
            <span className="hairline w-8" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 id={titleId} className="t-h2 fade-in mt-5 !text-[clamp(2.6rem,1.7rem+3.6vw,5rem)] !leading-[1]" style={{ "--d": "80ms" } as React.CSSProperties}>
            {title}
          </h1>
          <div className="t-lead fade-in mt-6 max-w-[36rem]" style={{ "--d": "180ms" } as React.CSSProperties}>
            {lead}
          </div>
          {actions ? (
            <div className="fade-in mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center" style={{ "--d": "260ms" } as React.CSSProperties}>
              {actions}
            </div>
          ) : null}
        </div>

        <div className="relative md:col-span-6 md:self-stretch lg:col-span-7">
          <MovementCurve draw className="pointer-events-none absolute -bottom-6 -left-[20%] z-10 h-[90%] w-[130%]" />
          <ImagePlate
            image={image}
            variant={imageVariant}
            priority
            sizes="(min-width: 1024px) 55vw, (min-width: 768px) 50vw, 100vw"
            captionClassName="right-5 bottom-5 items-end text-right"
            className="fade-in aspect-[16/11] w-full rounded-[28px] md:absolute md:inset-y-0 md:right-[calc((min(100vw,1320px)-100vw)/2-32px)] md:left-0 xl:right-[calc((min(100vw,1320px)-100vw)/2-40px)] md:aspect-auto md:h-full md:w-auto md:rounded-none md:rounded-l-[160px]"
          />
        </div>
      </div>
    </section>
  );
}
