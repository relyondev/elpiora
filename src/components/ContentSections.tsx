import type { ComponentType, ReactNode, SVGProps } from "react";
import Link from "next/link";
import { CheckIcon } from "./ui/Icon";
import { Reveal } from "./ui/Reveal";
import { SectionIntro } from "./ui/SectionIntro";

type IconT = ComponentType<SVGProps<SVGSVGElement>>;

/** Two-column checklist: heading + intro left, check items right. */
export function ChecklistSection({
  index,
  eyebrow,
  title,
  intro,
  items,
  titleId,
  tone = "surface",
  footnote,
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  items: { title: string; body?: string }[];
  titleId: string;
  tone?: "surface" | "paper" | "mint";
  footnote?: ReactNode;
}) {
  const bg = tone === "paper" ? "bg-paper" : tone === "mint" ? "bg-mint-100" : "";
  return (
    <section aria-labelledby={titleId} className={`py-24 md:py-28 ${bg}`}>
      <div className="shell grid-12 gap-y-10">
        <Reveal className="col-span-4 md:col-span-8 lg:col-span-5">
          <SectionIntro index={index} eyebrow={eyebrow} titleId={titleId} title={title} />
          {intro ? <p className="mt-6 max-w-[40ch] text-[0.9375rem] leading-relaxed text-body">{intro}</p> : null}
        </Reveal>
        <Reveal as="ul" delay={100} className="col-span-4 divide-y divide-line border-y border-line md:col-span-8 lg:col-span-6 lg:col-start-7">
          {items.map((it) => (
            <li key={it.title} className="flex gap-4 py-5">
              <CheckIcon className="mt-0.5 size-6 shrink-0 text-teal-text" />
              <div>
                <p className="text-[1rem] font-semibold text-deep">{it.title}</p>
                {it.body ? <p className="mt-1 text-[0.9375rem] leading-relaxed text-body">{it.body}</p> : null}
              </div>
            </li>
          ))}
        </Reveal>
        {footnote ? <div className="col-span-4 md:col-span-8 lg:col-span-12">{footnote}</div> : null}
      </div>
    </section>
  );
}

/** Grid of topics with amber icon circles (poster object), optional links. */
export function TopicGrid({
  index,
  eyebrow,
  title,
  intro,
  items,
  titleId,
  note,
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  items: { title: string; body: string; Icon: IconT; href?: string }[];
  titleId: string;
  note?: string;
}) {
  return (
    <section aria-labelledby={titleId} className="py-24 md:py-28">
      <div className="shell">
        <div className="grid-12 gap-y-8">
          <Reveal className="col-span-4 md:col-span-8 lg:col-span-6">
            <SectionIntro index={index} eyebrow={eyebrow} titleId={titleId} title={title} />
          </Reveal>
          {intro ? (
            <Reveal delay={100} className="col-span-4 self-end md:col-span-8 lg:col-span-5 lg:col-start-8">
              <p className="text-[0.9375rem] leading-relaxed text-body">{intro}</p>
            </Reveal>
          ) : null}
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title: t, body, Icon, href }, i) => {
            const inner = (
              <>
                <span className="icon-amber size-12" aria-hidden="true">
                  <Icon className="size-6" strokeWidth={1.7} />
                </span>
                <div>
                  <h3 className="font-serif text-[1.25rem] leading-snug font-semibold text-deep">{t}</h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-body">{body}</p>
                  {href ? <span className="mt-2 inline-block text-sm font-semibold text-teal-text">Lihat layanan terkait →</span> : null}
                </div>
              </>
            );
            return (
              <Reveal as="li" key={t} delay={(i % 3) * 60}>
                {href ? (
                  <Link href={href} className="flex h-full gap-4 rounded-[22px] bg-paper p-6 shadow-[0_1px_0_var(--elpiora-line)] transition-shadow hover:shadow-[0_20px_40px_-28px_rgb(11_66_72/0.4)]">
                    {inner}
                  </Link>
                ) : (
                  <div className="flex h-full gap-4 rounded-[22px] bg-paper p-6 shadow-[0_1px_0_var(--elpiora-line)]">{inner}</div>
                )}
              </Reveal>
            );
          })}
        </ul>
        {note ? <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-text">{note}</p> : null}
      </div>
    </section>
  );
}
