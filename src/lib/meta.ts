import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

/**
 * Per-page metadata. Blueprint SEO titles already end with the brand, so they are used verbatim
 * (`absolute`). Canonical and Open Graph URLs appear only once NEXT_PUBLIC_SITE_URL is set.
 * `index: false` keeps a page out of search while its content is still pending.
 */
export function pageMeta(title: string, description: string, path: string, opts: { index?: boolean } = {}): Metadata {
  const url = siteConfig.siteUrl ? `${siteConfig.siteUrl}${path === "/" ? "" : path}` : undefined;
  return {
    title: { absolute: title },
    description,
    alternates: siteConfig.siteUrl ? { canonical: path } : undefined,
    openGraph: { title, description, url },
    ...(opts.index === false ? { robots: { index: false, follow: true } } : {}),
  };
}
