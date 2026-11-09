import type { Metadata } from "next";
import { CareJourney } from "@/components/CareJourney";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Hero } from "@/components/Hero";
import { HomeVisitAndVoices } from "@/components/HomeVisitTeaser";
import { ServicePreview } from "@/components/ServiceGrid";
import { ValueProps } from "@/components/ValueProps";
import { generalFaq } from "@/content/faq";
import { siteConfig } from "@/config/site";
import { buildClinicJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  alternates: siteConfig.siteUrl ? { canonical: "/" } : undefined,
};

export default function Home() {
  const jsonLd = buildClinicJsonLd();

  return (
    <>
      <main id="konten">
        <Hero />
        <ValueProps />
        <ServicePreview />
        <CareJourney />
        <HomeVisitAndVoices />
        <Faq items={generalFaq} index="05" />
        <FinalCta />
      </main>
      {jsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      ) : null}
    </>
  );
}
