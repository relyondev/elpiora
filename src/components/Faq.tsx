"use client";

import { useId, useState, type ReactNode } from "react";
import { PlusIcon } from "./ui/Icon";
import { Reveal } from "./ui/Reveal";
import { SectionIntro } from "./ui/SectionIntro";

export type FaqItem = { q: string; a: ReactNode };

function FaqRow({ item, defaultOpen }: { item: FaqItem; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(Boolean(defaultOpen));
  const id = useId();
  const buttonId = `${id}-q`;
  const panelId = `${id}-a`;

  return (
    <li className="border-b border-deep/15">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="group flex min-h-16 w-full items-center justify-between gap-6 py-6 text-left"
        >
          <span className="font-serif text-[clamp(1.3rem,1.15rem+0.6vw,1.65rem)] leading-snug font-semibold text-deep transition-colors group-hover:text-teal-text">
            {item.q}
          </span>
          <span
            className={`inline-flex size-10 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,border-color] duration-300 ease-brand ${
              open ? "rotate-45 border-deep bg-deep text-paper" : "border-deep/25 text-deep"
            }`}
            aria-hidden="true"
          >
            <PlusIcon className="size-4" />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows] duration-400 ease-brand ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        inert={!open}
      >
        <div className="overflow-hidden">
          <div className="max-w-[60ch] pb-7 text-[0.9375rem] leading-relaxed text-body">{item.a}</div>
        </div>
      </div>
    </li>
  );
}

type Props = {
  items: FaqItem[];
  index?: string;
  title?: ReactNode;
  intro?: string;
  titleId?: string;
  tone?: "mint" | "paper" | "surface";
  sectionId?: string;
  eyebrow?: string;
};

export function Faq({
  items,
  index,
  title = "Pertanyaan yang Sering Diajukan.",
  intro = "Informasi di bawah bersifat umum. Untuk pertanyaan tentang kondisi Anda secara spesifik, fisioterapis akan membantu saat konsultasi.",
  titleId = "faq-title",
  tone = "mint",
  sectionId = "faq",
  eyebrow = "FAQ",
}: Props) {
  const bg = tone === "mint" ? "bg-mint-100" : tone === "paper" ? "bg-paper" : "bg-surface";
  return (
    <section id={sectionId} aria-labelledby={titleId} className={`scroll-mt-[var(--header-h)] py-24 md:py-32 ${bg}`}>
      <div className="shell grid-12 gap-y-12">
        <Reveal className="col-span-4 md:col-span-8 lg:col-span-4">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+48px)]">
            <SectionIntro index={index} eyebrow={eyebrow} titleId={titleId} title={title} />
            <p className="mt-6 max-w-[34ch] text-[0.9375rem] leading-relaxed text-body">{intro}</p>
          </div>
        </Reveal>

        <Reveal delay={100} className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-6">
          <ul className="border-t border-deep/15">
            {items.map((item, i) => (
              <FaqRow key={item.q} item={item} defaultOpen={i === 0} />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
