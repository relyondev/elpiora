import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// TODO_CONFIRM — the sitemap lists the home page once NEXT_PUBLIC_SITE_URL is set.
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.siteUrl) return [];
  return [{ url: siteConfig.siteUrl, changeFrequency: "monthly", priority: 1 }];
}
