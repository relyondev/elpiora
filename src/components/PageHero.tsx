import Link from "next/link";
import type { ComponentType, ReactNode, SVGProps } from "react";
import type { ImageSlot } from "@/config/site";
import { Banner, GlassCard } from "./Banner";
import { ImagePlate } from "./ui/ImagePlate";
import { MovementCurve } from "./ui/Ornaments";

type Crumb = { label: string; href?: string };

type Props = {
  /** Current page label, shown as the last breadcrumb item. */
  eyebrow: string;
  /** Intermediate breadcrumb levels between Beranda and the current page. */
  parents?: Crumb[];
  title: ReactNode;
  lead: ReactNode;
  actions?: ReactNode;
  image: ImageSlot;
  imageVariant?: "studio" | "conversation" | "reception" | "treatment" | "detail";
  /** Short, true statement shown on a glass card over the visual (no figures). */
  note?: { label: string; text: string; Icon: ComponentType<SVGProps<SVGSVGElement>> };
  titleId?: string;
};

/**
 * Inner-page banner, built on the same Banner shell as the home hero (reference style):
 * breadcrumb, white Garamond headline with gold emphasis and mint lead on the left,
 * the art-directed visual with one glass card on the right.
 */
export function PageHero({ eyebrow, parents = [], title, lead, actions, image, imageVariant = "conversation", note, titleId = "page-title" }: Props) {
  const crumbs: Crumb[] = [{ label: "Beranda", href: "/" }, ...parents, { label: eyebrow }];

  return (
    <Banner labelledBy={titleId}>
      <MovementCurve draw className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[58%] opacity-60 md:block" />
      <div className="grid items-center gap-10 px-5 pt-[calc(var(--header-h)+24px)] pb-12 md:grid-cols-12 md:gap-8 md:px-10 md:pb-16 lg:px-14">
        <div className="md:col-span-7 lg:col-span-7">
          <nav aria-label="Breadcrumb" className="fade-in">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-mint-100">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {i > 0 ? <span aria-hidden="true">/</span> : null}
                  {c.href ? (
                    <Link href={c.href} className="inline-flex min-h-11 items-center underline-offset-4 hover:text-white hover:underline">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current={i === crumbs.length - 1 ? "page" : undefined} className="font-semibold text-white">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <h1 id={titleId} className="t-h2 fade-in mt-3 !text-[clamp(2.6rem,1.6rem+3.6vw,4.8rem)] !leading-[1.04]" style={{ "--d": "80ms" } as React.CSSProperties}>
            {title}
          </h1>
          <span className="gold-rule fade-in mt-7" aria-hidden="true" />
          <div className="t-lead fade-in mt-5 max-w-[36rem]" style={{ "--d": "180ms" } as React.CSSProperties}>
            {lead}
          </div>
          {actions ? (
            <div className="fade-in mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center" style={{ "--d": "260ms" } as React.CSSProperties}>
              {actions}
            </div>
          ) : null}
        </div>

        <div className="relative md:col-span-5">
          <div className="fade-in relative mx-auto max-w-[420px] md:mr-0" style={{ "--d": "200ms" } as React.CSSProperties}>
            <ImagePlate
              image={image}
              variant={imageVariant}
              priority
              sizes="(min-width: 1024px) 30vw, (min-width: 768px) 40vw, 100vw"
              captionClassName="right-4 bottom-4 items-end text-right"
              className="aspect-[4/4.4] w-full rounded-t-[999px] rounded-b-[28px]"
            />
            {note ? (
              <GlassCard Icon={note.Icon} label={note.label} className="mt-3 md:absolute md:top-12 md:-left-12 md:mt-0 md:w-64">
                {note.text}
              </GlassCard>
            ) : null}
          </div>
        </div>
      </div>
    </Banner>
  );
}
