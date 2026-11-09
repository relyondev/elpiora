import { siteConfig } from "@/config/site";

/** Schema.org MedicalClinic subset — only fields ELPIORA can verify. */
export type ClinicJsonLd = {
  "@context": "https://schema.org";
  "@type": "MedicalClinic";
  name: string;
  description: string;
  medicalSpecialty: "Physiotherapy";
  url?: string;
  telephone?: string;
  email?: string;
  address: { "@type": "PostalAddress"; streetAddress: string; addressLocality?: string; addressCountry: "ID" };
  sameAs?: string[];
};

/**
 * Returns JSON-LD only when `structuredDataVerified` is true and the minimum
 * verified facts (address + at least one contact channel) exist. Otherwise
 * null — no structured data is published rather than false data.
 */
export function buildClinicJsonLd(): ClinicJsonLd | null {
  const { brand, contact, location, siteUrl, social, structuredDataVerified } = siteConfig;
  const hasContact = Boolean(contact.phone || contact.email || contact.whatsappNumber);
  if (!structuredDataVerified || !location.address || !hasContact) return null;

  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: `${brand.name} ${brand.descriptor}`,
    description: "Fisioterapi dan layanan kesehatan gerak yang personal.",
    medicalSpecialty: "Physiotherapy",
    ...(siteUrl ? { url: siteUrl } : {}),
    ...(contact.phone ? { telephone: contact.phone } : {}),
    ...(contact.email ? { email: contact.email } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address,
      ...(location.city ? { addressLocality: location.city } : {}),
      addressCountry: "ID",
    },
    ...(social.length ? { sameAs: social.map((s) => s.href) } : {}),
  };
}
