import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { PageHero } from "@/components/PageHero";
import { LinkButton } from "@/components/ui/Button";
import { ArrowIcon, CheckIcon, serviceIcons } from "@/components/ui/Icon";
import { PlaceholderTag } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { siteConfig } from "@/config/site";
import { serviceDetails } from "@/content/services";
import { bookingHref } from "@/lib/booking";
import { pageMeta } from "@/lib/meta";

type Params = { id: string };

export function generateStaticParams(): Params[] {
  return siteConfig.services.map((s) => ({ id: s.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { id } = await params;
  const service = siteConfig.services.find((s) => s.id === id);
  if (!service) return {};
  return pageMeta(`${service.title} (${service.label})`, service.description, `/layanan/${id}`);
}

export default async function ServiceDetailPage({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  const service = siteConfig.services.find((s) => s.id === id);
  const detail = serviceDetails[id];
  if (!service || !detail) notFound();

  const Icon = serviceIcons[service.icon];
  const unconfirmed = service.availability === "unconfirmed";
  const related = detail.related.map((rid) => siteConfig.services.find((s) => s.id === rid)).filter((s) => s !== undefined);

  return (
    <main id="konten">
      <PageHero
        note={{ label: service.label, text: unconfirmed ? "Ketersediaan menunggu konfirmasi" : "Dimulai dengan konsultasi dan asesmen", Icon: Icon }}
        eyebrow={service.title}
        parents={[{ label: "Layanan", href: "/layanan" }]}
        title={service.title}
        lead={
          <>
            <p className="font-serif text-[1.6rem] leading-snug font-bold text-gold-light">{detail.headline}</p>
            <p className="mt-4">{service.description}</p>
            {unconfirmed ? <PlaceholderTag className="mt-4">Ketersediaan menunggu konfirmasi</PlaceholderTag> : null}
          </>
        }
        actions={
          <>
            <LinkButton variant="champagne" href={bookingHref(service.id)}>{unconfirmed ? "Tanyakan Ketersediaan" : "Ajukan Janji"}</LinkButton>
            <LinkButton variant="secondary-on-dark" href="/layanan">
              Semua Layanan
            </LinkButton>
          </>
        }
        image={service.icon === "home" ? siteConfig.images.homeVisitHero : siteConfig.images.servicesHero}
        imageVariant={service.icon === "home" ? "conversation" : "studio"}
      />

      {/* Overview */}
      <section aria-labelledby="ringkasan-title" className="py-20 md:py-28">
        <div className="shell grid-12 gap-y-10">
          <Reveal className="col-span-4 md:col-span-8 lg:col-span-5">
            <span className="icon-amber size-16" aria-hidden="true">
              <Icon className="size-8" strokeWidth={1.6} />
            </span>
            <SectionIntro index="01" eyebrow="Tentang Layanan" titleId="ringkasan-title" title={<>Gambaran <span className="accent">Layanan.</span></>} className="mt-8" />
          </Reveal>
          <Reveal delay={100} className="col-span-4 space-y-5 text-[1.0625rem] leading-[1.8] text-body md:col-span-8 lg:col-span-6 lg:col-start-7">
            {detail.overview.map((p, i) => (
              <p key={i} className={i === 0 ? "t-lead !text-[1.2rem]" : ""}>
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Suitable for & goals */}
      <section aria-label="Untuk siapa dan tujuan" className="bg-mint-100 py-20 md:py-28">
        <div className="shell grid gap-6 md:grid-cols-2">
          {[
            { title: "Layanan ini sesuai untuk", items: detail.suitableFor },
            { title: "Tujuan yang sering ingin dicapai", items: detail.goals },
          ].map((col, i) => (
            <Reveal key={col.title} delay={i * 90}>
              <div className="h-full rounded-[24px] bg-paper p-7 md:p-10">
                <h2 className="t-h3">{col.title}</h2>
                <span className="gold-rule mt-4" aria-hidden="true" />
                <ul className="mt-6 space-y-4">
                  {col.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-body">
                      <CheckIcon className="mt-0.5 size-5 shrink-0 text-teal-text" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="shell mt-6 text-sm text-muted-text">
          Kesesuaian layanan untuk kondisi Anda ditentukan oleh fisioterapis setelah asesmen. Informasi ini bersifat umum dan bukan diagnosis.
        </p>
      </section>

      {/* Session may include */}
      <section aria-labelledby="sesi-title" className="py-20 md:py-28">
        <div className="shell">
          <Reveal className="max-w-3xl">
            <SectionIntro index="02" eyebrow="Dalam Sesi" titleId="sesi-title" title={<>Apa yang Mungkin <span className="accent">Dilakukan.</span></>} />
            <p className="mt-6 text-[0.9375rem] leading-relaxed text-body">
              Isi setiap sesi disesuaikan dengan hasil asesmen dan persetujuan Anda. Berikut gambaran umum komponen yang dapat menjadi bagian dari
              program.
            </p>
          </Reveal>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {detail.sessionMayInclude.map((item, i) => (
              <Reveal as="li" key={item.title} delay={(i % 3) * 60}>
                <div className="flex h-full flex-col rounded-[22px] bg-paper p-6 shadow-[0_1px_0_var(--elpiora-line)]">
                  <span className="font-serif text-2xl font-bold text-accent" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="t-h3 mt-3 !text-[1.3rem]">{item.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-body">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {detail.journey.length ? (
        <section aria-labelledby="tahapan-title" className="bg-paper py-20 md:py-24">
          <div className="shell grid-12 gap-y-8">
            <Reveal className="col-span-4 md:col-span-8 lg:col-span-4">
              <SectionIntro eyebrow="Tahapan program" titleId="tahapan-title" title={<>Perjalanan <span className="accent">Pemulihan.</span></>} />
              <p className="mt-5 text-[0.9375rem] leading-relaxed text-body">
                Tahapan umum. Durasi dan urutannya disesuaikan dengan perkembangan masing-masing.
              </p>
            </Reveal>
            <Reveal as="ol" delay={100} className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-6">
              {detail.journey.map((step, i) => (
                <li key={step.title} className="grid grid-cols-[5.5rem_1fr] items-baseline gap-4 border-t border-line py-5 last:border-b">
                  <span className="text-sm font-semibold text-teal-text">Tahap {i + 1}</span>
                  <span>
                    <span className="font-serif text-xl font-semibold text-deep">{step.title}</span>
                    <span className="mt-1 block text-[0.9375rem] leading-relaxed text-body">{step.body}</span>
                  </span>
                </li>
              ))}
            </Reveal>
          </div>
        </section>
      ) : null}

      <Faq
        items={detail.faq.map((f) => ({ q: f.q, a: <p>{f.a}</p> }))}
        index="04"
        title={
          <>
            Pertanyaan Seputar <span className="accent">{service.title}.</span>
          </>
        }
        tone="paper"
        titleId="faq-layanan-title"
      />

      {related.length ? (
        <section aria-labelledby="terkait-title" className="py-20 md:py-24">
          <div className="shell">
            <Reveal>
              <SectionIntro eyebrow="Layanan Terkait" titleId="terkait-title" title={<>Mungkin Anda Juga <span className="accent">Membutuhkan.</span></>} />
            </Reveal>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {related.map((r) => {
                const RIcon = serviceIcons[r.icon];
                return (
                  <li key={r.id}>
                    <Link
                      href={`/layanan/${r.id}`}
                      className="group flex h-full items-center gap-4 rounded-[22px] bg-paper p-5 shadow-[0_1px_0_var(--elpiora-line)] transition-shadow hover:shadow-[0_20px_40px_-28px_rgb(11_66_72/0.4)]"
                    >
                      <span className="icon-amber size-12" aria-hidden="true">
                        <RIcon className="size-6" strokeWidth={1.7} />
                      </span>
                      <span className="flex-1">
                        <span className="block font-serif text-lg font-semibold text-deep">{r.title}</span>
                        <span className="block text-sm text-muted-text">{r.label}</span>
                      </span>
                      <ArrowIcon className="arrow-nudge size-4 text-deep" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      ) : null}

      <FinalCta
        title={unconfirmed ? "Ingin Tahu Ketersediaannya?" : `Mulai Program ${service.title}.`}
        lead="Ajukan permintaan melalui formulir, dan tim kami akan menghubungi Anda untuk konfirmasi."
        primaryLabel={unconfirmed ? "Tanyakan Ketersediaan" : "Ajukan Janji"}
        primaryHref={bookingHref(service.id)}
        secondaryLabel="Lihat FAQ"
        secondaryHref="/faq"
      />
    </main>
  );
}
