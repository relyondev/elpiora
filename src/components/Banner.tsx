import type { ComponentType, ReactNode, SVGProps } from "react";
import { WaveRibbons } from "./ui/Ornaments";

/**
 * Page banner shell, after the supplied reference: a rounded panel inset from the
 * viewport edge, deep teal on the text side brightening to turquoise behind the visual.
 * The floating header bar sits inside its top edge. Used by the home hero, every inner
 * page hero and the 404 page.
 */
export function Banner({ children, labelledBy, className = "" }: { children: ReactNode; labelledBy?: string; className?: string }) {
  return (
    <div className="px-3 pt-3 md:px-4">
      <section
        aria-labelledby={labelledBy}
        className={`banner on-dark relative isolate mx-auto max-w-[1560px] overflow-hidden rounded-[28px] md:rounded-[36px] ${className}`}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[image:var(--banner-bg)]" />
        <WaveRibbons tone="dark" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-28 w-full md:h-40" />
        {children}
      </section>
    </div>
  );
}

type IconT = ComponentType<SVGProps<SVGSVGElement>>;

/**
 * Translucent information card from the reference. Holds a short, real statement
 * (never a made-up figure). Fill is 80% deep teal so white text keeps >= 4.5:1 even where the
 * card overlaps the light image plate; background blur is applied to this card only.
 */
export function GlassCard({
  Icon,
  label,
  children,
  className = "",
}: {
  Icon: IconT;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-[20px] border border-white/20 bg-deep/80 p-4 text-white backdrop-blur-md ${className}`}>
      <div className="flex items-center gap-3">
        <span className="icon-amber size-10" aria-hidden="true">
          <Icon className="size-5" strokeWidth={1.8} />
        </span>
        <div>
          <p className="text-sm text-mint-100">{label}</p>
          <p className="font-serif text-[1.15rem] leading-snug font-bold text-white">{children}</p>
        </div>
      </div>
    </div>
  );
}
