import Link from "next/link";
import type { ReactNode } from "react";
import { Banner } from "./Banner";
import { FinalCta } from "./FinalCta";
import { PlaceholderTag } from "./ui/Logo";

export type LegalSection = { title: string; body: ReactNode };

/** Plain document page for legal text: banner with the title, then readable sections. */
export function LegalPage({
  title,
  lead,
  sections,
  draft = false,
}: {
  title: string;
  lead: string;
  sections: LegalSection[];
  /** True while the text still needs legal review. */
  draft?: boolean;
}) {
  return (
    <main id="konten">
      <Banner labelledBy="legal-title">
        <div className="mx-auto max-w-4xl px-5 pt-[calc(var(--header-h)+40px)] pb-16 md:px-10 md:pb-20">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-mint-100">
              <li>
                <Link href="/" className="inline-flex min-h-11 items-center underline-offset-4 hover:text-white hover:underline">
                  Beranda
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-white">
                {title}
              </li>
            </ol>
          </nav>
          <h1 id="legal-title" className="t-h2 mt-3 !text-[clamp(2.4rem,1.6rem+3vw,4rem)]">
            {title}
          </h1>
          <span className="gold-rule mt-6" aria-hidden="true" />
          <p className="t-lead mt-5 max-w-[48rem]">{lead}</p>
          {draft ? (
            <div className="mt-5">
              <PlaceholderTag>Draf, menunggu tinjauan hukum</PlaceholderTag>
            </div>
          ) : null}
        </div>
      </Banner>

      <article className="shell max-w-3xl py-20 md:py-24">
        <div className="space-y-12">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="t-h3">{s.title}</h2>
              <div className="mt-4 space-y-4 text-[1rem] leading-[1.8] text-body">{s.body}</div>
            </section>
          ))}
        </div>
      </article>
      <FinalCta />
    </main>
  );
}
