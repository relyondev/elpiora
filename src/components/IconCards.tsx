import type { ComponentType, ReactNode, SVGProps } from "react";
import { Reveal } from "./ui/Reveal";

export type IconCard = { title: string; body: string; label?: string; Icon?: ComponentType<SVGProps<SVGSVGElement>> };

/** Row of light cards with a line icon, used for values / benefits / audiences. */
export function IconCards({ items, columns = 4, footer }: { items: IconCard[]; columns?: 3 | 4 | 5; footer?: ReactNode }) {
  const cols = columns === 5 ? "sm:grid-cols-2 lg:grid-cols-5" : columns === 3 ? "md:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4";
  return (
    <>
      <ul className={`grid gap-4 ${cols}`}>
        {items.map(({ title, body, label, Icon }, i) => (
          <Reveal as="li" key={title} delay={(i % 5) * 60}>
            <div className="flex h-full flex-col rounded-[22px] bg-paper p-6 shadow-[0_1px_0_var(--elpiora-line)]">
              {Icon ? (
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-mint-100 text-teal-text">
                  <Icon className="size-6" />
                </span>
              ) : (
                <span className="font-serif text-lg text-teal-text" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              )}
              <h3 className="t-h3 mt-5 !text-[1.4rem]">{title}</h3>
              {label ? <p className="mt-1 text-xs font-semibold tracking-[0.12em] text-muted-text uppercase">{label}</p> : null}
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-body">{body}</p>
            </div>
          </Reveal>
        ))}
      </ul>
      {footer}
    </>
  );
}
