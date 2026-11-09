import Link from "next/link";
import { ChecklistSection } from "./ContentSections";
import { Faq } from "./Faq";
import { FinalCta } from "./FinalCta";
import { PageHero } from "./PageHero";
import { RedFlagBox } from "./RedFlagBox";
import { LinkButton } from "./ui/Button";
import { AssessmentIcon, serviceIcons } from "./ui/Icon";
import { PlaceholderTag } from "./ui/Logo";
import { Reveal } from "./ui/Reveal";
import { SectionIntro } from "./ui/SectionIntro";
import { siteConfig } from "@/config/site";
import { bookingServiceFor, type Block, type Detail } from "@/content/details";
import { bookingHref } from "@/lib/booking";

export type DetailKind = "service" | "condition" | "program";

const tonedBg = { surface: "", paper: "bg-paper", mint: "bg-mint-100" } as const;

function titleNode(t: [string, string?]) {
  return (
    <>
      {t[0]}
      {t[1] ? <span className="accent">{t[1]}</span> : null}
    </>
  );
}

export function StepsBlock({ block, pid }: { block: Block; pid: string }) {
  return (
    <section aria-labelledby={pid} className={`py-24 md:py-28 ${tonedBg[block.tone ?? "surface"]}`}>
      <div className="shell">
        <Reveal className="max-w-3xl">
          <SectionIntro titleId={pid} title={titleNode(block.title)} />
          {block.intro ? <p className="mt-5 text-[0.9375rem] leading-relaxed text-body">{block.intro}</p> : null}
        </Reveal>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {block.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 3) * 60}>
              <div className="flex h-full flex-col rounded-[22px] bg-paper p-6 shadow-[0_1px_0_var(--elpiora-line)]">
                <span className="font-serif text-2xl font-bold text-accent" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="t-h3 mt-3 !text-[1.3rem]">{item.title}</h3>
                {item.body ? <p className="mt-2 text-[0.9375rem] leading-relaxed text-body">{item.body}</p> : null}
              </div>
            </Reveal>
          ))}
        </ol>
        {block.note ? <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-text">{block.note}</p> : null}
      </div>
    </section>
  );
}

/**
 * One template for service, condition and programme pages (blueprint sections D and E).
 * Order: banner, content blocks, medical red-flag box, FAQ, related links, review note, CTA.
 */
export function DetailPage({ kind, detail }: { kind: DetailKind; detail: Detail }) {
  const service = kind === "service" ? siteConfig.services.find((s) => s.id === detail.slug) : undefined;
  const bookingService = kind === "service" ? detail.slug : bookingServiceFor[detail.slug];
  const hub = kind === "service" ? { label: "Services", href: "/services" } : { label: "Conditions", href: "/conditions" };
  const Icon = service ? serviceIcons[service.icon] : AssessmentIcon;

  const noteText = detail.unconfirmed
    ? "Ketersediaan menunggu konfirmasi"
    : kind === "service"
      ? "Dimulai dengan konsultasi dan asesmen"
      : kind === "condition"
        ? "Penilaian menentukan langkah berikutnya"
        : "Program bertahap sesuai arahan medis";
  const noteLabel = kind === "service" ? (service?.label ?? detail.navTitle) : kind === "condition" ? "Penilaian fisioterapi" : "Program rehabilitasi";

  return (
    <main id="konten">
      <PageHero
        eyebrow={detail.navTitle}
        parents={[hub]}
        title={titleNode(detail.h1)}
        lead={
          <>
            <p>{detail.lead}</p>
            {detail.unconfirmed ? <PlaceholderTag className="mt-4">Ketersediaan menunggu konfirmasi</PlaceholderTag> : null}
          </>
        }
        actions={
          <>
            <LinkButton href={bookingHref(bookingService)} variant="champagne">
              {detail.cta}
            </LinkButton>
            <LinkButton href={hub.href} variant="secondary-on-dark">
              {kind === "service" ? "Semua Layanan" : "Semua Kondisi"}
            </LinkButton>
          </>
        }
        image={siteConfig.images.servicesHero}
        imageVariant="studio"
        note={{ label: noteLabel, text: noteText, Icon }}
      />

      {detail.blocks.map((block) =>
        block.layout === "steps" ? (
          <StepsBlock key={block.id} block={block} pid={`${detail.slug}-${block.id}`} />
        ) : (
          <ChecklistSection
            key={block.id}
            titleId={`${detail.slug}-${block.id}`}
            title={titleNode(block.title)}
            intro={block.intro}
            items={block.items}
            tone={block.tone}
            footnote={block.note ? <p className="max-w-3xl text-sm leading-relaxed text-muted-text">{block.note}</p> : undefined}
          />
        ),
      )}

      {detail.redFlag ? <RedFlagBox data={detail.redFlag} /> : null}

      <Faq
        items={detail.faq.map((f) => ({ q: f.q, a: <p>{f.a}</p> }))}
        title={
          <>
            Pertanyaan <span className="accent">umum.</span>
          </>
        }
        tone="paper"
        titleId={`${detail.slug}-faq`}
        sectionId="faq"
      />

      {detail.related.length ? (
        <section aria-labelledby={`${detail.slug}-related`} className="py-20 md:py-24">
          <div className="shell">
            <Reveal>
              <SectionIntro titleId={`${detail.slug}-related`} title={<>Halaman <span className="accent">terkait.</span></>} />
            </Reveal>
            <ul className="mt-8 flex flex-wrap gap-3">
              {detail.related.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="inline-flex min-h-11 items-center rounded-full border border-deep/20 bg-paper px-5 text-sm font-semibold text-deep transition-colors hover:border-deep hover:bg-mint-100"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section aria-label="Catatan konten" className="pb-10">
        <div className="shell flex flex-wrap items-center gap-x-5 gap-y-2 text-xs leading-relaxed text-muted-text">
          <p className="max-w-[64ch]">
            Informasi ini bersifat edukasi umum dan tidak menggantikan pemeriksaan, diagnosis, atau rencana penanganan dari tenaga kesehatan.{" "}
            <Link href="/medical-disclaimer" className="underline decoration-gold underline-offset-4">
              Selengkapnya
            </Link>
            .
          </p>
          <PlaceholderTag>Menunggu tinjauan klinis fisioterapi</PlaceholderTag>
          <PlaceholderTag>Tanggal pembaruan menunggu konfirmasi</PlaceholderTag>
        </div>
      </section>

      <FinalCta
        title={<>Ceritakan kebutuhan Anda, kami bantu <span className="accent">langkah awalnya.</span></>}
        lead="Isi formulir booking. Tim ELPIORA akan menghubungi Anda untuk mengonfirmasi layanan dan jadwal."
        primaryLabel={detail.cta}
        primaryHref={bookingHref(bookingService)}
        secondaryLabel="Lihat FAQ"
        secondaryHref="/faq"
      />
    </main>
  );
}
