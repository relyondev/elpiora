import Link from "next/link";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { PageHero } from "@/components/PageHero";
import { LinkButton } from "@/components/ui/Button";
import { BOOKING_PATH, siteConfig } from "@/config/site";
import { faqCategories } from "@/content/faq";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "FAQ — Pertanyaan yang Sering Diajukan",
  "Jawaban seputar fisioterapi, janji temu, sesi pertama, layanan, home visit, biaya, dan privasi di ELPIORA.",
  "/faq",
);

export default function FaqPage() {
  return (
    <main id="konten">
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Ada Pertanyaan? <span className="accent">Kami Bantu Jawab.</span>
          </>
        }
        lead={<p>Kumpulan jawaban seputar fisioterapi, janji temu, sesi pertama, layanan, hingga privasi data Anda.</p>}
        actions={
          <>
            <LinkButton href="#topik">Lihat Topik</LinkButton>
            <LinkButton href={BOOKING_PATH} variant="champagne">
              Buat Janji
            </LinkButton>
          </>
        }
        image={siteConfig.images.about}
      />

      {/* Topic index */}
      <nav id="topik" aria-label="Topik FAQ" className="shell scroll-mt-[calc(var(--header-h)+16px)] py-12 md:py-16">
        <p className="t-eyebrow">Pilih Topik</p>
        <ul className="mt-5 flex flex-wrap gap-3">
          {faqCategories.map((c) => (
            <li key={c.id}>
              <Link
                href={`#${c.id}`}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-deep/20 bg-paper px-5 text-sm font-semibold text-deep transition-colors hover:border-deep hover:bg-mint-100"
              >
                {c.title}
                <span className="text-xs font-medium text-muted-text">{c.items.length}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {faqCategories.map((c, i) => (
        <Faq
          key={c.id}
          sectionId={c.id}
          items={c.items}
          index={String(i + 1).padStart(2, "0")}
          eyebrow="FAQ"
          title={c.title}
          intro={c.intro}
          titleId={`faq-${c.id}-title`}
          tone={i % 2 === 0 ? "mint" : "surface"}
        />
      ))}

      <FinalCta
        title="Belum Menemukan Jawabannya?"
        lead="Ajukan pertanyaan atau permintaan janji melalui formulir — tim kami akan menghubungi Anda."
        primaryLabel="Hubungi Kami"
        secondaryLabel="Lihat Layanan"
      />
    </main>
  );
}
