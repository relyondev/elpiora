import { BOOKING_PATH, siteConfig } from "@/config/site";

/** Booking form URL, optionally with a service pre-selected. */
export function bookingHref(serviceId?: string): string {
  if (!serviceId) return BOOKING_PATH;
  return `/kontak?layanan=${encodeURIComponent(serviceId)}#formulir`;
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

export function serviceTitle(id: string | null | undefined): string | null {
  if (!id) return null;
  if (id === "lainnya") return "Belum yakin / ingin berkonsultasi";
  if (id === "korporat") return "Program korporat / event";
  return siteConfig.services.find((s) => s.id === id)?.title ?? null;
}
