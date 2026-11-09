import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "./Icon";

type Variant = "primary" | "secondary" | "champagne" | "primary-on-dark" | "secondary-on-dark";

const base =
  "group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-[0.9375rem] font-semibold tracking-[0.01em] transition-[background-color,color,border-color,box-shadow] duration-200 ease-brand sm:px-7";

const variants: Record<Variant, string> = {
  primary:
    "bg-deep text-paper shadow-[0_1px_0_rgb(255_255_255/0.08)_inset,0_10px_30px_-12px_rgb(18_63_67/0.45)] hover:bg-ink",
  secondary: "border border-deep/25 text-deep hover:border-deep/60 hover:bg-paper",
  champagne:
    "bg-[image:var(--elpiora-champagne)] text-cocoa shadow-[0_10px_24px_-14px_rgb(140_100_40/0.55),inset_0_1px_0_rgb(255_255_255/0.6)] hover:brightness-[1.03]",
  "primary-on-dark": "bg-mint-100 text-deep hover:bg-paper",
  "secondary-on-dark": "border border-mint-100/35 text-mint-100 hover:border-mint-100/80 hover:bg-mint-100/5",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
};

type LinkButtonProps = CommonProps & {
  href: string;
  external?: boolean;
  ariaLabel?: string;
};

export function LinkButton({ href, external, ariaLabel, children, variant = "primary", arrow = true, className = "" }: LinkButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      {arrow ? (
        variant === "champagne" ? (
          <span className="-mr-3 inline-flex size-8 items-center justify-center rounded-full bg-paper text-cocoa shadow-sm">
            <ArrowIcon className="arrow-nudge size-4" />
          </span>
        ) : (
          <ArrowIcon className="arrow-nudge size-4 shrink-0" />
        )
      ) : null}
      {external ? <span className="sr-only"> (membuka di tab baru)</span> : null}
    </>
  );
  const cls = `${base} ${variants[variant]} ${className}`;
  return external ? (
    <a href={href} aria-label={ariaLabel} className={cls} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    <Link href={href} aria-label={ariaLabel} className={cls}>
      {content}
    </Link>
  );
}

type DisabledButtonProps = CommonProps & { describedBy?: string };

/** A visibly unavailable action — used instead of a dead link while a channel is not configured. */
export function DisabledButton({ children, variant = "primary", describedBy, className = "" }: DisabledButtonProps) {
  return (
    <button
      type="button"
      disabled
      aria-describedby={describedBy}
      className={`${base} ${variants[variant]} cursor-not-allowed opacity-55 ${className}`}
    >
      {children}
    </button>
  );
}

export function TextLink({ href, children, external, className = "" }: { href: string; children: ReactNode; external?: boolean; className?: string }) {
  const cls = `group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-deep underline decoration-gold decoration-1 underline-offset-[6px] transition-colors hover:text-teal-text ${className}`;
  return external ? (
    <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
      {children}
      <ArrowIcon className="arrow-nudge size-3.5" />
      <span className="sr-only"> (membuka di tab baru)</span>
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
      <ArrowIcon className="arrow-nudge size-3.5" />
    </Link>
  );
}
