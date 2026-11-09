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

  // Solid surface once the page scrolls (guidelines §7.1)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
  const linkBase = "relative inline-flex min-h-11 items-center gap-1 px-3 text-[0.8125rem] font-medium tracking-[0.02em] transition-colors duration-200 hover:text-deep";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-brand ${
        solid ? "bg-surface/92 shadow-[0_1px_0_var(--elpiora-line)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="shell flex h-[var(--header-h)] items-center justify-between gap-6">
        <Link href="/" className="-m-2 flex min-h-11 items-center p-2" aria-label="ELPIORA — Beranda">
          <Logo />
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
                      className={`${linkBase} ${active ? "text-deep" : "text-muted-text"}`}
                    >
                      {item.label}
                      <ChevronDown className={`size-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                      {underline}
                    </button>
                    <ul
                      id="services-menu"
                      hidden={!servicesOpen}
                      className="absolute top-full left-0 mt-2 w-72 rounded-2xl border border-line bg-paper p-2 shadow-[0_24px_48px_-24px_rgb(18_63_67/0.35)]"
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
                  <Link href={item.href} aria-current={active ? "page" : undefined} className={`${linkBase} ${active ? "text-deep" : "text-muted-text"}`}>
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
              className="hidden min-h-11 items-center gap-2 rounded-full border border-gold/70 px-4 text-[0.8125rem] font-semibold text-deep 2xl:inline-flex"
            >
              <PhoneIcon className="size-4" />
              {phone}
            </a>
          ) : null}
          <Link
            href={BOOKING_PATH}
            className="hidden min-h-11 items-center rounded-full bg-deep px-5 text-[0.8125rem] font-semibold text-paper shadow-[0_10px_30px_-12px_rgb(18_63_67/0.45)] transition-colors hover:bg-ink sm:inline-flex"
          >
            Buat Janji
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-deep xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Tutup menu" : "Buka menu"}</span>
            {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="h-[calc(100dvh-var(--header-h))] overflow-y-auto border-t border-line bg-surface xl:hidden"
      >
        <nav aria-label="Navigasi seluler" className="shell flex min-h-full flex-col pt-4 pb-10">
          <ul className="flex flex-col">
            {navigation.map((item, i) => (
              <li key={item.href} className="border-b border-line">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="flex min-h-15 items-center justify-between font-serif text-[1.65rem] font-medium text-deep"
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
