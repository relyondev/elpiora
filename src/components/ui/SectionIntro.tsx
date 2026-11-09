import type { ReactNode } from "react";

type Props = {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  titleId: string;
  className?: string;
  as?: "h1" | "h2";
};

/** Editorial section label: "02 — Layanan" with a gold hairline, then the heading. */
export function SectionIntro({ eyebrow, title, titleId, className = "", as: Heading = "h2" }: Props) {
  return (
    <div className={className}>
      <p className="t-eyebrow flex items-center gap-4">
        <span className="hairline w-10" aria-hidden="true" />
        <span>{eyebrow}</span>
      </p>
      <Heading id={titleId} className="t-h2 mt-6">
        {title}
      </Heading>
    </div>
  );
}
