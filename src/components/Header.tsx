"use client";

import { useEffect, useRef, useState } from "react";
import { navigation, siteConfig } from "@/config/site";
import { getBookingAction } from "@/lib/booking";
import { Logo } from "./ui/Logo";
import { CloseIcon, MenuIcon } from "./ui/Icon";
import { LinkButton } from "./ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#beranda");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const booking = getBookingAction();

  // Solid surface once the page scrolls (guidelines §7.1)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

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
      menuButton?.focus();
    };
  }, [open]);

  // Close the menu if the viewport grows to desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-brand ${
        solid ? "bg-surface/92 shadow-[0_1px_0_var(--elpiora-line)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="shell flex h-[var(--header-h)] items-center justify-between gap-6">
        <a href="#beranda" className="-m-2 flex min-h-11 items-center p-2" aria-label="ELPIORA — kembali ke awal halaman">
          <Logo />
        </a>

        <nav aria-label="Navigasi utama" className="hidden lg:block">
          <ul className="flex items-center gap-1 xl:gap-2">
            {navigation.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative inline-flex min-h-11 items-center px-3 text-[0.8125rem] font-medium tracking-[0.02em] transition-colors duration-200 hover:text-deep ${
                      isActive ? "text-deep" : "text-muted-text"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 bottom-2 h-px origin-left bg-gold transition-transform duration-300 ease-brand ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LinkButton
            href={booking.href}
            external={booking.external}
            arrow={false}
            className="hidden !min-h-11 !px-5 !text-[0.8125rem] sm:inline-flex"
          >
            Buat Janji
          </LinkButton>
          <button
            ref={menuButtonRef}
            type="button"
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-deep lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Tutup menu" : "Buka menu"}</span>
            {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="h-[calc(100dvh-var(--header-h))] overflow-y-auto border-t border-line bg-surface lg:hidden"
      >
        <nav aria-label="Navigasi seluler" className="shell flex min-h-full flex-col pt-6 pb-10">
          <ul className="flex flex-col">
            {navigation.map((item, i) => (
              <li key={item.href} className="border-b border-line">
                <a
                  href={item.href}
                  onClick={(e) => {
                    // Unlock scroll first, then jump — otherwise the locked body swallows the anchor scroll.
                    e.preventDefault();
                    setOpen(false);
                    requestAnimationFrame(() => {
                      const target = document.querySelector<HTMLElement>(item.href);
                      target?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
                      history.replaceState(null, "", item.href);
                      target?.focus({ preventScroll: true });
                    });
                  }}
                  className="flex min-h-16 items-center justify-between font-serif text-[1.75rem] font-medium text-deep"
                >
                  {item.label}
                  <span className="font-sans text-xs font-medium text-muted-text">{String(i + 1).padStart(2, "0")}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-10">
            <LinkButton href={booking.href} external={booking.external} className="w-full" ariaLabel="Buat janji konsultasi">
              Buat Janji
            </LinkButton>
            <p className="t-script mt-6 text-center text-2xl text-teal-text">{siteConfig.brand.tagline}</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
