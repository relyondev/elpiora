import { siteConfig } from "@/config/site";

export type BookingAction =
  | { configured: true; href: string; external: true; channel: "whatsapp" | "booking" }
  | { configured: false; href: "#kontak"; external: false; channel: null };

/**
 * Resolves where a booking CTA should go.
 * - WhatsApp (with a prefilled message) when a valid number is configured.
 * - Otherwise the external booking URL, when configured.
 * - Otherwise the on-page contact section, which states honestly that the
 *   booking channel is still being prepared. Never a dead or invented link.
 */
export function getBookingAction(message?: string): BookingAction {
  const { whatsappNumber, whatsappMessage, bookingUrl } = siteConfig.contact;

  if (whatsappNumber) {
    const text = encodeURIComponent(message ?? whatsappMessage);
    return { configured: true, href: `https://wa.me/${whatsappNumber}?text=${text}`, external: true, channel: "whatsapp" };
  }

  if (bookingUrl) {
    return { configured: true, href: bookingUrl, external: true, channel: "booking" };
  }

  return { configured: false, href: "#kontak", external: false, channel: null };
}

export function serviceEnquiryMessage(serviceTitle: string): string {
  return `Halo ELPIORA, saya ingin bertanya tentang layanan ${serviceTitle}. Boleh saya mendapatkan informasi lebih lanjut?`;
}

/** Formats international WhatsApp digits for display, e.g. 6281234567890 → +62 812-3456-7890. */
export function formatWhatsApp(digits: string): string {
  if (digits.startsWith("62")) {
    const local = digits.slice(2);
    return `+62 ${local.slice(0, 3)}-${local.slice(3, 7)}-${local.slice(7)}`.replace(/-$/, "");
  }
  return `+${digits}`;
}
