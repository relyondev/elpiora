import { siteConfig } from "@/config/site";
import { QuoteIcon } from "./ui/Icon";
import { PlaceholderTag } from "./ui/Logo";
import { Reveal } from "./ui/Reveal";

/**
 * Renders only real testimonials with consent on file (siteConfig.testimonials).
 * No star ratings, no invented names, no stock avatars. Empty → an honest note.
 */
export function TestimonialList({ limit, compact = false }: { limit?: number; compact?: boolean }) {
  const items = siteConfig.testimonials.slice(0, limit);

  if (items.length === 0) {
    return (
      <div className={`relative overflow-hidden rounded-[24px] border border-dashed border-deep/25 bg-surface ${compact ? "p-7" : "p-8 md:p-12"}`}>
        <QuoteIcon className="size-10 text-gold" />
        <p className={`mt-5 font-serif text-deep ${compact ? "text-2xl" : "text-[clamp(1.6rem,1.3rem+1vw,2.25rem)]"} leading-snug`}>
          Cerita pasien akan kami tampilkan di sini, hanya dengan izin tertulis dari yang bersangkutan.
        </p>
        <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-muted-text">
          Kami tidak menampilkan testimoni, nama, atau penilaian bintang yang tidak dapat diverifikasi.
        </p>
        <PlaceholderTag className="mt-6">Testimoni menyusul</PlaceholderTag>
      </div>
    );
  }

  return (
    <ul className={`grid gap-5 ${compact ? "" : "md:grid-cols-2 xl:grid-cols-3"}`}>
      {items.map((t, i) => (
        <Reveal as="li" key={`${t.name}-${i}`} delay={(i % 3) * 70}>
          <figure className="flex h-full flex-col rounded-[24px] bg-paper p-7 shadow-[0_1px_0_var(--elpiora-line)] md:p-8">
            <QuoteIcon className="size-9 text-gold" />
            <blockquote className="mt-4 font-serif text-xl leading-relaxed font-medium text-deep">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="mt-auto pt-6 text-sm">
              <span className="font-semibold text-deep">{t.name}</span>
              {t.context ? <span className="block text-muted-text">{t.context}</span> : null}
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </ul>
  );
}
