import { BOOKING_PATH, siteConfig } from "@/config/site";

export type VisitKind = "clinic" | "home";

/** Booking page URL, optionally pre-selecting a service and a visit type. */
export function bookingHref(service?: string, type?: VisitKind): string {
  const q = new URLSearchParams();
  if (service) q.set("service", service);
  if (type) q.set("type", type);
  const qs = q.toString();
  return `${BOOKING_PATH}${qs ? `?${qs}` : ""}#formulir`;
}

/** wa.me link with a prefilled message, or null while no number is configured. */
export function whatsappHref(message?: string): string | null {
  const { whatsappNumber, whatsappMessage } = siteConfig.contact;
  if (!whatsappNumber) return null;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message ?? whatsappMessage)}`;
}

/** Formats international WhatsApp digits for display, e.g. 6281234567890 → +62 812-3456-7890. */
export function formatWhatsApp(digits: string): string {
  if (digits.startsWith("62")) {
    const local = digits.slice(2);
    return `+62 ${local.slice(0, 3)}-${local.slice(3, 7)}-${local.slice(7)}`.replace(/-$/, "");
  }
  return `+${digits}`;
}
