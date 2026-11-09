import type { ReactNode } from "react";

type Props = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  titleId: string;
  className?: string;
};

/** Editorial section label: "02 — Layanan" with a gold hairline, then the H2. */
export function SectionIntro({ index, eyebrow, title, titleId, className = "" }: Props) {
  return (
    <div className={className}>
      <p className="t-eyebrow flex items-center gap-4">
        <span className="font-serif text-base font-medium tracking-normal normal-case">{index}</span>
        <span className="hairline w-10" aria-hidden="true" />
        <span>{eyebrow}</span>
      </p>
      <h2 id={titleId} className="t-h2 mt-6">
        {title}
      </h2>
    </div>
  );
}
