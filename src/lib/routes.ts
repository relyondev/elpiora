import { siteConfig } from "@/config/site";
import { allConditionSlugs, allProgramSlugs } from "@/content/details";

/** Every indexable route, for the sitemap. Gated pages appear only when their gate is open. */
export function siteRoutes(): string[] {
  return [
    "/",
    "/about",
    "/about/our-approach",
    ...(siteConfig.team.length ? ["/about/our-team"] : []),
    "/services",
    ...siteConfig.services.map((s) => `/services/${s.id}`),
    "/conditions",
    ...allConditionSlugs.map((s) => `/conditions/${s}`),
    ...allProgramSlugs.map((s) => `/programs/${s}`),
    "/home-visit",
    "/corporate-wellness",
    "/event-physiotherapy",
    ...(siteConfig.publish.facilities ? ["/facilities"] : []),
    ...(siteConfig.testimonials.length ? ["/patient-stories"] : []),
    ...(siteConfig.publish.education ? ["/education"] : []),
    "/faq",
    "/booking",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/medical-disclaimer",
    // /pricing is excluded until prices are confirmed (noindex)
  ];
}
