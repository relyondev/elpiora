"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { bookingHref, whatsappHref } from "@/lib/booking";
import { ChatIcon } from "./ui/Icon";

/**
 * Sticky mobile CTA (blueprint section B): WhatsApp and Booking. It shows after the banner has scrolled
 * away, hides near the footer and on the booking and contact pages so it never covers closing content or
 * duplicates the form. The WhatsApp button exists only when a number is configured.
 */
export function MobileCta() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const wa = whatsappHref();
  const hiddenHere = pathname === "/booking" || pathname === "/contact";

  useEffect(() => {
    const onScroll = () => {
      const pastBanner = window.scrollY > window.innerHeight * 0.9;
      const nearEnd = window.innerHeight + window.scrollY > document.documentElement.scrollHeight - window.innerHeight * 1.2;
      setVisible(pastBanner && !nearEnd);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  if (hiddenHere) return null;
  const show = visible;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(12px,env(safe-area-inset-bottom))] transition-[transform,opacity] duration-300 md:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
      aria-hidden={!show}
    >
      <div className="mx-auto flex max-w-md gap-2 rounded-full border border-line bg-surface p-2 shadow-[0_16px_40px_-16px_rgb(11_66_72/0.5)]">
        {wa ? (
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={show ? 0 : -1}
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-deep/25 text-sm font-semibold text-deep"
          >
            <ChatIcon className="size-5" />
            WhatsApp
            <span className="sr-only"> (membuka di tab baru)</span>
          </a>
        ) : null}
        <Link
          href={bookingHref()}
          tabIndex={show ? 0 : -1}
          className="inline-flex min-h-12 flex-[1.4] items-center justify-center rounded-full bg-deep text-sm font-semibold text-paper"
        >
          Booking
        </Link>
      </div>
    </div>
  );
}
