import Link from "next/link";
import { siteConfig } from "@/config/site";
import { serviceIcons } from "./ui/Icon";
import { PlaceholderTag } from "./ui/Logo";
import { Reveal } from "./ui/Reveal";

/**
 * The six service categories as peer cards (equal weight on purpose: the reader compares them).
 * Unconfirmed services stay visible with a dashed border and a status tag, never as available.
 */
export function ServiceCards() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {siteConfig.services.map((service, i) => {
        const Icon = serviceIcons[service.icon];
        const unconfirmed = service.availability === "unconfirmed";
        return (
          <Reveal as="li" key={service.id} delay={(i % 3) * 60}>
            <Link
              href={`/services/${service.id}`}
              className={`group flex h-full flex-col rounded-[24px] p-6 transition-shadow duration-300 md:p-7 ${
                unconfirmed
                  ? "border border-dashed border-deep/25 bg-surface hover:bg-paper"
                  : "bg-paper shadow-[0_1px_0_var(--elpiora-line)] hover:shadow-[0_24px_48px_-28px_rgb(11_66_72/0.35)]"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="icon-amber size-12" aria-hidden="true">
                  <Icon className="size-6" strokeWidth={1.7} />
                </span>
                {unconfirmed ? <PlaceholderTag>Menunggu konfirmasi</PlaceholderTag> : null}
              </div>
              <h3 className="t-h3 mt-6 !text-[1.45rem]">{service.title}</h3>
              <p className="mt-1 text-sm font-semibold text-muted-text">{service.label}</p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-body">{service.description}</p>
              <span className="mt-auto pt-5 text-sm font-semibold text-teal-text underline decoration-gold underline-offset-[6px] group-hover:text-deep">
                Detail {service.title}
              </span>
            </Link>
          </Reveal>
        );
      })}
    </ul>
  );
}
