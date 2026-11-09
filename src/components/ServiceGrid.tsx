import { siteConfig } from "@/config/site";
import { getBookingAction, serviceEnquiryMessage } from "@/lib/booking";
import { TextLink } from "./ui/Button";
import { serviceIcons } from "./ui/Icon";
import { PlaceholderTag } from "./ui/Logo";
import { BotanicalSprig, MovementCurve, SpineDots } from "./ui/Ornaments";
import { Reveal } from "./ui/Reveal";
import { SectionIntro } from "./ui/SectionIntro";

/**
 * Bento layout: the first service leads as a tall feature card; the rest
 * follow in a calmer grid. Unconfirmed services are visibly flagged and get
 * no booking CTA.
 */
export function ServiceGrid() {
  const services = siteConfig.services;

  return (
    <section id="layanan" tabIndex={-1} aria-labelledby="layanan-title" className="relative overflow-hidden bg-mint-100 py-24 outline-none md:py-32">
      <BotanicalSprig className="pointer-events-none absolute -top-10 -right-10 hidden h-[420px] text-teal-500/25 lg:block" />

      <div className="shell relative">
        <div className="grid-12 gap-y-8">
          <Reveal className="col-span-4 md:col-span-8 lg:col-span-6">
            <SectionIntro index="02" eyebrow="Layanan" titleId="layanan-title" title="Dukungan untuk Setiap Tahap Pemulihan Gerak." />
          </Reveal>
          <Reveal delay={100} className="col-span-4 self-end md:col-span-8 lg:col-span-4 lg:col-start-9">
            <p className="text-[0.9375rem] leading-relaxed text-ink">
              Setiap layanan diawali dengan konsultasi, agar penanganan yang Anda terima sesuai dengan kebutuhan Anda.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-4 md:mt-20 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.icon];
            const unconfirmed = service.availability === "unconfirmed";
            const booking = getBookingAction(serviceEnquiryMessage(service.title));
            const feature = i === 0;

            // lg: [feature 5 × 2 rows | 7] [— | 7] [7 | unconfirmed 5]
            const layout = feature ? "md:col-span-2 lg:col-span-5 lg:row-span-2" : unconfirmed ? "lg:col-span-5" : "lg:col-span-7";

            return (
              <Reveal as="li" key={service.id} delay={(i % 3) * 70} className={layout}>
                <article
                  aria-labelledby={`svc-${service.id}`}
                  className={`group relative flex h-full flex-col rounded-[24px] p-7 transition-[box-shadow,transform] duration-300 ease-brand md:p-8 ${
                    feature
                      ? "on-dark min-h-[420px] overflow-hidden bg-deep text-mint-100"
                      : unconfirmed
                        ? "border border-dashed border-deep/25 bg-surface/60"
                        : "bg-paper shadow-[0_1px_0_var(--elpiora-line)] hover:shadow-[0_24px_48px_-28px_rgb(18_63_67/0.35)]"
                  }`}
                >
                  {feature ? (
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                      <div className="absolute -right-24 -bottom-24 size-80 rounded-full bg-[radial-gradient(closest-side,rgb(95_183_184/0.45),rgb(95_183_184/0))]" />
                      <BotanicalSprig className="absolute right-6 bottom-6 h-48 text-mint-100/15" />
                      <MovementCurve className="absolute inset-x-0 top-0 h-3/5 w-full opacity-50" />
                      <SpineDots className="absolute top-[14%] right-[22%] hidden h-[34%] text-gold/60 md:block" />
                    </div>
                  ) : null}

                  <div className="relative flex items-start justify-between gap-4">
                    <span
                      className={`inline-flex size-12 items-center justify-center rounded-full ${
                        feature ? "bg-mint-100/10 text-gold" : "bg-mint-100 text-teal-text"
                      }`}
                    >
                      <Icon className="size-6" />
                    </span>
                    <span className={`font-serif text-sm ${feature ? "text-mint-200" : "text-muted-text"}`} aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className={`relative ${feature ? "mt-auto pt-24" : "mt-8"}`}>
                    <p className={`t-eyebrow ${feature ? "" : "!text-muted-text"}`}>{service.label}</p>
                    <h3 id={`svc-${service.id}`} className={`t-h3 mt-3 ${feature ? "!text-[clamp(1.9rem,1.4rem+1.6vw,2.75rem)]" : ""}`}>
                      {service.title}
                    </h3>
                    <p className={`mt-4 max-w-[46ch] text-[0.9375rem] leading-relaxed ${feature ? "text-mint-100/85" : "text-ink/90"}`}>
                      {service.description}
                    </p>

                    <div className="mt-6">
                      {unconfirmed ? (
                        <PlaceholderTag className="!text-[0.6875rem] !tracking-[0.08em]">[Konfirmasi ketersediaan layanan]</PlaceholderTag>
                      ) : (
                        <TextLink href={booking.href} external={booking.external} className={feature ? "!text-mint-100 hover:!text-paper" : ""}>
                          Tanyakan Layanan Ini<span className="sr-only">: {service.title}</span>
                        </TextLink>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-text">
          Ketersediaan layanan dapat berbeda dan sedang dalam proses konfirmasi. Hubungi kami untuk memastikan layanan yang sesuai dengan
          kebutuhan Anda.
        </p>
      </div>
    </section>
  );
}
