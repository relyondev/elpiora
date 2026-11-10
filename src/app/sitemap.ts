import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { routes } from "@/lib/meta";

// TODO_CONFIRM — the sitemap lists pages once NEXT_PUBLIC_SITE_URL is set.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  if (!base) return [];
  return routes.map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : path === "/kontak" ? 0.9 : 0.7,
  }));
}
