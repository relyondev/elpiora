import Image from "next/image";
import { siteConfig } from "@/config/site";

type Props = {
  tone?: "on-light" | "on-dark";
  /** "lockup" = wordmark + descriptor (navigation); "full" = with tagline (large placements). */
  variant?: "lockup" | "full";
  className?: string;
  priority?: boolean;
};

/**
 * Official ELPIORA logo (supplied files — never redrawn or recoloured).
 * - on-light: full-colour lockup (teal wordmark, gold figure)
 * - on-dark:  reversed lockup (white wordmark, gold figure)
 */
export function Logo({ tone = "on-light", variant = "lockup", className = "", priority = false }: Props) {
  const { logo } = siteConfig.brand;
  const asset = tone === "on-dark" ? logo.reversed : variant === "full" ? logo.full : logo.primary;

  return (
    <Image
      src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${asset.src}`}
      alt={logo.alt}
      width={asset.width}
      height={asset.height}
      priority={priority}
      sizes="(min-width: 768px) 240px, 180px"
      className={`h-auto w-auto select-none ${className}`}
      draggable={false}
    />
  );
}

export function PlaceholderTag({ children = "Placeholder", tone = "on-light", className = "" }: { children?: string; tone?: "on-light" | "on-dark"; className?: string }) {
  if (!siteConfig.showPlaceholderMarkers) return null;
  const styles = tone === "on-dark" ? "border-mint-100/30 text-mint-100" : "border-deep/20 bg-paper/80 text-muted-text";
  return (
    <span
      className={`inline-flex items-center rounded-md border border-dashed px-2.5 py-1 text-xs font-semibold ${styles} ${className}`}
    >
      {children}
    </span>
  );
}
