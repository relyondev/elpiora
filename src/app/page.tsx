import { About } from "@/components/About";
import { CareJourney } from "@/components/CareJourney";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { ServiceGrid } from "@/components/ServiceGrid";
import { Team } from "@/components/Team";
import { ValueProps } from "@/components/ValueProps";
import { buildClinicJsonLd } from "@/lib/structured-data";

export default function Home() {
  const jsonLd = buildClinicJsonLd();

  return (
    <>
      <Header />
      <main id="konten">
        <Hero />
        <ValueProps />
        <ServiceGrid />
        <CareJourney />
        <About />
        <Location />
        <Team />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      {jsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      ) : null}
    </>
  );
}
