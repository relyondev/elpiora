"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BOOKING_PATH, navigation, siteConfig } from "@/config/site";
import { Logo } from "./ui/Logo";
import { CloseIcon, MenuIcon, PhoneIcon } from "./ui/Icon";

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" className={className} aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/**
 * Floating header bar (reference style). Over the banner it is a tint of deep teal with the reversed
 * logo and light text; once the page scrolls (or the mobile menu is open) it turns into a solid light bar
 * with the full-colour logo. Every page opens with a banner, so the light-on-dark state is always valid at the top.
 */
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const phone = siteConfig.contact.phone;

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Services dropdown: close on outside click / Escape
  useEffect(() => {
    if (!servicesOpen) return;
    const onDown = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        dropdownRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen]);

  // Mobile menu: lock scroll, close on Escape, keep focus inside, restore focus on close
  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const menuButton = menuButtonRef.current;
    document.body.style.overflow = "hidden";
    panel?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !panel) return;
      const focusable = [menuButton, ...panel.querySelectorAll<HTMLElement>("a, button")].filter(Boolean) as HTMLElement[];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      menuButton?.focus({ preventScroll: true });
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const solid = scrolled || open;
  const linkBase = "relative inline-flex min-h-11 items-center gap-1 px-3 text-[0.8125rem] font-medium tracking-[0.02em] transition-colors duration-200";
  const linkTone = (active: boolean) =>
    solid ? (active ? "text-deep" : "text-muted-text hover:text-deep") : active ? "text-white" : "text-mint-100 hover:text-white";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 isolate px-3 pt-3 md:px-4">
      <div className="mx-auto max-w-[1560px]">
        <div
          className={`pointer-events-auto m-3 flex h-16 items-center justify-between gap-6 rounded-2xl border px-4 transition-[background-color,border-color,box-shadow] duration-300 ease-brand md:px-6 ${
            solid ? "border-line bg-surface shadow-[0_1px_0_var(--elpiora-line)]" : "border-white/15 bg-deep/45"
          }`}
        >
          <Link href="/" className="-m-2 flex min-h-11 items-center p-2" aria-label="ELPIORA, kembali ke Beranda">
            <Logo tone={solid ? "on-light" : "on-dark"} priority className="h-10 md:h-11" />
          </Link>

          <nav aria-label="Navigasi utama" className="hidden xl:block">
            <ul className="flex items-center">
              {navigation.map((item) => {
                const active = isActive(item.href);
                const underline = (
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 bottom-2 h-px origin-left bg-gold transition-transform duration-300 ease-brand ${active ? "scale-x-100" : "scale-x-0"}`}
                  />
                );

                if (item.children) {
                  return (
                    <li key={item.href} ref={dropdownRef} className="relative">
                      <button
                        type="button"
                        aria-expanded={servicesOpen}
                        aria-controls="services-menu"
                        onClick={() => setServicesOpen((v) => !v)}
                        className={`${linkBase} ${linkTone(active)}`}
                      >
                        {item.label}
                        <ChevronDown className={`size-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                        {underline}
                      </button>
                      <ul
                        id="services-menu"
                        hidden={!servicesOpen}
                        className="absolute top-full left-0 mt-3 w-72 rounded-2xl border border-line bg-paper p-2 shadow-[0_24px_48px_-24px_rgb(18_63_67/0.35)]"
                      >
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setServicesOpen(false)}
                              className="flex min-h-11 items-center rounded-xl px-3 text-sm text-deep transition-colors hover:bg-mint-100"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }

                return (
                  <li key={item.href}>
                    <Link href={item.href} aria-current={active ? "page" : undefined} className={`${linkBase} ${linkTone(active)}`}>
                      {item.label}
                      {underline}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            {phone ? (
              <a
                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                className={`hidden min-h-11 items-center gap-2 rounded-full border px-4 text-[0.8125rem] font-semibold 2xl:inline-flex ${
                  solid ? "border-gold/70 text-deep" : "border-gold-light/70 text-white"
                }`}
              >
                <PhoneIcon className="size-4" />
                {phone}
              </a>
            ) : null}
            <Link
              href={BOOKING_PATH}
              className={`hidden min-h-11 items-center rounded-full px-5 text-[0.8125rem] font-semibold transition-colors sm:inline-flex ${
                solid ? "bg-deep text-paper hover:bg-ink" : "bg-[image:var(--elpiora-champagne)] text-cocoa hover:brightness-105"
              }`}
            >
              Buat Janji
            </Link>
            <button
              ref={menuButtonRef}
              type="button"
              className={`-mr-2 inline-flex size-11 items-center justify-center rounded-full xl:hidden ${solid ? "text-deep" : "text-white"}`}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{open ? "Tutup menu" : "Buka menu"}</span>
              {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu: full-screen light sheet behind the bar */}
      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="pointer-events-auto fixed inset-0 -z-10 overflow-y-auto bg-surface pt-[calc(var(--header-h)+8px)] xl:hidden"
      >
        <nav aria-label="Navigasi seluler" className="shell flex min-h-[calc(100dvh-var(--header-h)-8px)] flex-col pt-2 pb-10">
          <ul className="flex flex-col">
            {navigation.map((item, i) => (
              <li key={item.href} className="border-b border-line">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="flex min-h-15 items-center justify-between font-serif text-[1.7rem] font-bold text-deep"
                >
                  {item.label}
                  <span className="font-sans text-xs font-medium text-muted-text">{String(i + 1).padStart(2, "0")}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-10">
            <Link
              href={BOOKING_PATH}
              onClick={() => setOpen(false)}
              className="flex min-h-12 w-full items-center justify-center rounded-full bg-deep text-[0.9375rem] font-semibold text-paper"
            >
              Buat Janji
            </Link>
            <p className="t-script mt-6 text-center text-2xl text-teal-text">{siteConfig.brand.tagline}</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
