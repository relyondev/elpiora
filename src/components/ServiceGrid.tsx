import Link from "next/link";
import { siteConfig } from "@/config/site";
import { bookingHref } from "@/lib/booking";
import { TextLink } from "./ui/Button";
import { ArrowIcon, serviceIcons } from "./ui/Icon";
import { PlaceholderTag } from "./ui/Logo";
import { BotanicalSprig, MovementCurve, SpineDots } from "./ui/Ornaments";
import { Reveal } from "./ui/Reveal";
import { SectionIntro } from "./ui/SectionIntro";

/** Home: compact strip of service cards linking into /layanan (after mockup 1). */
export function ServicePreview() {
  const services = siteConfig.services;
  return (
    <section aria-labelledby="layanan-title" className="relative overflow-hidden bg-mint-100 py-24 md:py-32">
      <BotanicalSprig className="pointer-events-none absolute -top-10 -right-10 hidden h-[420px] text-teal-500/25 lg:block" />
      <div className="shell relative">
        <div className="grid-12 gap-y-8">
          <Reveal className="col-span-4 md:col-span-8 lg:col-span-6">
            <SectionIntro
              index="02"
              eyebrow="Layanan Kami"
              titleId="layanan-title"
              title={
                <>
                  Perawatan untuk Gerak & <span className="accent">Kesejahteraan</span> Anda.
                </>
              }
            />
          </Reveal>
          <Reveal delay={100} className="col-span-4 self-end md:col-span-8 lg:col-span-4 lg:col-start-9">
            <p className="text-[0.9375rem] leading-relaxed text-body">
              Setiap layanan diawali dengan konsultasi, agar penanganan yang Anda terima sesuai dengan kebutuhan Anda.
            </p>
            <TextLink href="/layanan" className="mt-3">
              Lihat semua layanan
            </TextLink>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.icon];
            const unconfirmed = service.availability === "unconfirmed";
            return (
              <Reveal as="li" key={service.id} delay={(i % 4) * 60} className={i === 0 ? "sm:col-span-2" : ""}>
                <Link
                  href={`/layanan/${service.id}`}
                  className={`group relative flex h-full min-h-48 flex-col overflow-hidden rounded-[24px] p-6 transition-[box-shadow,transform] duration-300 ease-brand md:p-7 ${
                    i === 0
                      ? "on-dark bg-deep text-mint-100"
                      : unconfirmed
                        ? "border border-dashed border-deep/25 bg-surface/70 hover:bg-paper"
                        : "bg-paper shadow-[0_1px_0_var(--elpiora-line)] hover:shadow-[0_24px_48px_-28px_rgb(18_63_67/0.35)]"
                  }`}
                >
                  {i === 0 ? (
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                      <div className="absolute -right-24 -bottom-24 size-80 rounded-full bg-[radial-gradient(closest-side,rgb(95_183_184/0.45),rgb(95_183_184/0))]" />
                      <MovementCurve className="absolute inset-x-0 top-0 h-3/5 w-full opacity-50" />
                      <SpineDots className="absolute top-[12%] right-[18%] h-[38%] text-gold/60" />
                    </div>
                  ) : null}
                  <span
                    className={`relative inline-flex size-12 items-center justify-center rounded-full ${i === 0 ? "bg-mint-100/10 text-gold" : "bg-mint-100 text-teal-text"}`}
                  >
                    <Icon className="size-6" />
                  </span>
                  <div className={`relative ${i === 0 ? "mt-auto pt-10" : "mt-6"}`}>
                    <h3 className={`t-h3 ${i === 0 ? "!text-[clamp(1.9rem,1.4rem+1.6vw,2.75rem)]" : "!text-[1.45rem]"}`}>{service.title}</h3>
                    <p className={`mt-1 text-xs font-semibold tracking-[0.12em] uppercase ${i === 0 ? "text-mint-200" : "text-muted-text"}`}>{service.label}</p>
                    <p
                      className={
                        i === 0
                          ? "mt-4 max-w-[40ch] text-[0.9375rem] leading-relaxed text-mint-100/85"
                          : "mt-3 line-clamp-3 text-sm leading-relaxed text-body"
                      }
                    >
                      {service.description}
                    </p>
                    <span className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold ${i === 0 ? "text-mint-100" : "text-deep"}`}>
                      {unconfirmed ? "Menunggu konfirmasi" : "Selengkapnya"}
                      <ArrowIcon className="arrow-nudge size-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/** /layanan: full catalogue — every service has an anchor and a booking CTA with the service pre-selected. */
export function ServiceCatalog() {
  const services = siteConfig.services;
  return (
    <section aria-labelledby="katalog-title" className="py-24 md:py-32">
      <div className="shell">
        <div className="grid-12 gap-y-8">
          <Reveal className="col-span-4 md:col-span-8 lg:col-span-7">
            <SectionIntro
              index="01"
              eyebrow="Layanan Kami"
              titleId="katalog-title"
              title={
                <>
                  Perawatan Menyeluruh untuk <span className="accent">Gerak & Kesejahteraan.</span>
                </>
              }
            />
          </Reveal>
          <Reveal delay={100} className="col-span-4 self-end md:col-span-8 lg:col-span-4 lg:col-start-9">
            <p className="text-[0.9375rem] leading-relaxed text-body">
              Ketersediaan layanan dapat berbeda dan sebagian masih dalam proses konfirmasi. Layanan bertanda{" "}
              <em className="not-italic font-semibold text-deep">menunggu konfirmasi</em> akan diperbarui setelah ketersediaannya dipastikan.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.icon];
            const unconfirmed = service.availability === "unconfirmed";
            return (
              <Reveal as="li" key={service.id} delay={(i % 3) * 70}>
                <article
                  id={service.id}
                  aria-labelledby={`svc-${service.id}`}
                  className={`flex h-full scroll-mt-[calc(var(--header-h)+24px)] flex-col rounded-[24px] p-7 md:p-8 ${
                    unconfirmed ? "border border-dashed border-deep/25 bg-surface" : "bg-paper shadow-[0_1px_0_var(--elpiora-line),0_24px_48px_-36px_rgb(18_63_67/0.35)]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="icon-amber size-14" aria-hidden="true">
                      <Icon className="size-7" strokeWidth={1.7} />
                    </span>
                    {unconfirmed ? <PlaceholderTag>Menunggu konfirmasi</PlaceholderTag> : null}
                  </div>
                  <p className="mt-8 text-xs font-semibold tracking-[0.12em] text-muted-text uppercase">{service.label}</p>
                  <h3 id={`svc-${service.id}`} className="t-h3 mt-2">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-body">{service.description}</p>
                  <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-1 pt-6">
                    <TextLink href={`/layanan/${service.id}`}>
                      Pelajari layanan
                      <span className="sr-only">: {service.title}</span>
                    </TextLink>
                    <Link href={bookingHref(service.id)} className="inline-flex min-h-11 items-center text-sm font-semibold text-teal-text hover:text-deep">
                      {unconfirmed ? "Tanyakan ketersediaan" : "Ajukan janji"}
                      <span className="sr-only">: {service.title}</span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
