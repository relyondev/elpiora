import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { siteRoutes } from "@/lib/routes";

// TODO_CONFIRM: the sitemap lists pages once NEXT_PUBLIC_SITE_URL is set.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  if (!base) return [];
  return siteRoutes().map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : path === "/booking" ? 0.9 : path.startsWith("/services") ? 0.8 : 0.6,
  }));
}
