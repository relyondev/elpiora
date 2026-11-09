import Link from "next/link";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { PageHero } from "@/components/PageHero";
import { LinkButton } from "@/components/ui/Button";
import { ChatIcon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";
import { faqCategories } from "@/content/faq";
import { bookingHref } from "@/lib/booking";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "FAQ: Pertanyaan yang Sering Diajukan | ELPIORA",
  "Jawaban seputar fisioterapi, Home Visit, booking, pembayaran, keamanan, dan privasi di ELPIORA.",
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
        lead={<p>Kumpulan jawaban seputar fisioterapi, Home Visit, booking dan pembayaran, hingga keamanan dan privasi data Anda.</p>}
        actions={
          <>
            <LinkButton href="#topik" variant="champagne">
              Pilih Topik Pertanyaan
            </LinkButton>
            <LinkButton href={bookingHref()} variant="secondary-on-dark">
              Konsultasi &amp; Booking
            </LinkButton>
          </>
        }
        image={siteConfig.images.about}
        note={{ label: "Belum menemukan jawaban?", text: "Tanyakan lewat formulir booking", Icon: ChatIcon }}
      />

      <nav id="topik" aria-label="Topik FAQ" className="shell scroll-mt-[calc(var(--header-h)+16px)] py-12 md:py-16">
        <p className="t-eyebrow">Pilih topik</p>
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
        <Faq key={c.id} sectionId={c.id} items={c.items} eyebrow="FAQ" title={c.title} intro={c.intro} titleId={`faq-${c.id}-title`} tone={i % 2 === 0 ? "mint" : "surface"} />
      ))}

      <FinalCta
        title="Belum Menemukan Jawabannya?"
        lead="Ajukan pertanyaan atau permintaan janji melalui formulir, dan tim kami akan menghubungi Anda."
        primaryLabel="Konsultasi & Booking"
        secondaryLabel="Lihat Daftar Layanan"
      />
    </main>
  );
}
