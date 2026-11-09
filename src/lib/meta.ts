import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

/** Per-page metadata; canonical/OG URL only once NEXT_PUBLIC_SITE_URL is configured. */
export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: siteConfig.siteUrl ? { canonical: path } : undefined,
    openGraph: { title: `${title} | ELPIORA`, description, url: siteConfig.siteUrl ? `${siteConfig.siteUrl}${path === "/" ? "" : path}` : undefined },
  };
}

export const routes = [
  "/",
  "/tentang",
  "/layanan",
  ...siteConfig.services.map((s) => `/layanan/${s.id}`),
  "/home-visit",
  "/fasilitas",
  "/testimoni",
  "/faq",
  "/kontak",
];
