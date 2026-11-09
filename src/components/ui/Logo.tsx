import Image from "next/image";
import { siteConfig } from "@/config/site";

type Props = {
  tone?: "on-light" | "on-dark";
  showDescriptor?: boolean;
  className?: string;
};

/**
 * Renders the official ELPIORA logo when its file is configured.
 *
 * Until the official SVG is supplied this is an explicitly TEMPORARY text
 * placeholder (guidelines §2.3): plain typeset text, no emblem, no attempt to
 * imitate the custom letterforms or the human/spine symbol.
 */
export function Logo({ tone = "on-light", showDescriptor = false, className = "" }: Props) {
  const { logo, name, descriptor } = siteConfig.brand;
  const src = tone === "on-dark" ? (logo.reversed ?? null) : logo.primary;

  if (src) {
    return (
      <Image src={src} alt={logo.alt} width={logo.width} height={logo.height} priority className={`h-9 w-auto ${className}`} unoptimized />
    );
  }

  const color = tone === "on-dark" ? "text-mint-100" : "text-deep";
  return (
    <span
      className={`inline-flex flex-col leading-none ${color} ${className}`}
      data-placeholder="logo"
      title={siteConfig.showPlaceholderMarkers ? "Placeholder — menunggu file logo resmi ELPIORA" : undefined}
    >
      <span className="font-serif text-[1.65rem] font-semibold tracking-[0.12em]">{name}</span>
      {showDescriptor ? (
        <span className={`mt-1.5 text-[0.625rem] font-medium uppercase tracking-[0.22em] ${tone === "on-dark" ? "text-mint-200" : "text-muted-text"}`}>
          {descriptor}
        </span>
      ) : (
        <span className="sr-only"> — {descriptor}</span>
      )}
    </span>
  );
}

export function PlaceholderTag({ children = "Placeholder", tone = "on-light", className = "" }: { children?: string; tone?: "on-light" | "on-dark"; className?: string }) {
  if (!siteConfig.showPlaceholderMarkers) return null;
  const styles =
    tone === "on-dark" ? "border-mint-100/30 text-mint-100" : "border-deep/20 bg-paper/80 text-muted-text";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-dashed px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.14em] ${styles} ${className}`}
    >
      <span className="size-1 rounded-full bg-current" aria-hidden="true" />
      {children}
    </span>
  );
}
