import { siteConfig } from "@/config/site";

/** Validation shared by the booking form (client) and /api/booking (server). */

export const TIME_SLOTS = [
  { value: "pagi", label: "Pagi (sebelum 12.00)" },
  { value: "siang", label: "Siang (12.00–15.00)" },
  { value: "sore", label: "Sore (setelah 15.00)" },
  { value: "fleksibel", label: "Fleksibel" },
] as const;

export const VISIT_TYPES = [
  { value: "klinik", label: "Di klinik" },
  { value: "rumah", label: "Kunjungan ke rumah (Home Visit)" },
] as const;

export const EXTRA_SERVICE_OPTIONS = [{ value: "lainnya", label: "Belum yakin, ingin berkonsultasi dulu" }] as const;

export const CHANNELS = [
  { value: "whatsapp", label: "WhatsApp" },
  { value: "telepon", label: "Telepon" },
  { value: "email", label: "Email" },
] as const;

export type BookingRequest = {
  name: string;
  phone: string;
  email: string;
  service: string;
  visitType: string;
  /** General area or district. Required for Home Visit. */
  area: string;
  /** Preferred contact channel. */
  channel: string;
  date: string;
  time: string;
  notes: string;
  consent: boolean;
  /** Honeypot — must stay empty. */
  website: string;
};

export type BookingField = Exclude<keyof BookingRequest, "website">;
export type BookingErrors = Partial<Record<BookingField, string>>;

export const NOTES_MAX = 500;

const serviceIds = new Set<string>([...siteConfig.services.map((s) => s.id), ...EXTRA_SERVICE_OPTIONS.map((o) => o.value)]);
const timeValues = new Set<string>(TIME_SLOTS.map((t) => t.value));
const visitValues = new Set<string>(VISIT_TYPES.map((v) => v.value));
const channelValues = new Set<string>(CHANNELS.map((c) => c.value));

/** YYYY-MM-DD for "today" in the clinic's timezone (WIB). */
export function todayInJakarta(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Jakarta", year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
}

export function normalisePhone(value: string): string {
  return value.replace(/[\s\-().]/g, "");
}

export function validateBooking(input: BookingRequest, today = todayInJakarta()): BookingErrors {
  const errors: BookingErrors = {};
  const name = input.name.trim();
  const phone = normalisePhone(input.phone);
  const email = input.email.trim();

  if (name.length < 2) errors.name = "Mohon isi nama lengkap Anda.";
  else if (name.length > 80) errors.name = "Nama terlalu panjang (maks. 80 karakter).";

  if (!phone) errors.phone = "Mohon isi nomor telepon atau WhatsApp.";
  else if (!/^(\+62|62|0)8\d{7,12}$/.test(phone) && !/^\+?[1-9]\d{8,14}$/.test(phone))
    errors.phone = "Format nomor belum sesuai, contoh: 0812 3456 7890.";

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = "Format email belum sesuai.";

  if (!serviceIds.has(input.service)) errors.service = "Mohon pilih jenis layanan.";
  if (!visitValues.has(input.visitType)) errors.visitType = "Mohon pilih lokasi sesi.";

  const area = input.area.trim();
  if (input.visitType === "rumah" && area.length < 3) errors.area = "Untuk Home Visit, mohon isi area atau kecamatan Anda.";
  else if (area.length > 80) errors.area = "Area terlalu panjang (maks. 80 karakter).";

  if (!channelValues.has(input.channel)) errors.channel = "Mohon pilih kanal kontak yang Anda inginkan.";
  else if (input.channel === "email" && !email) errors.email = "Mohon isi email bila Anda memilih dihubungi lewat email.";

  if (!/^\d{4}-\d{2}-\d{2}$/.test(input.date)) errors.date = "Mohon pilih tanggal yang diinginkan.";
  else if (input.date < today) errors.date = "Tanggal tidak boleh sebelum hari ini.";

  if (!timeValues.has(input.time)) errors.time = "Mohon pilih waktu yang diinginkan.";
  if (input.notes.length > NOTES_MAX) errors.notes = `Catatan maksimal ${NOTES_MAX} karakter.`;
  if (!input.consent) errors.consent = "Mohon berikan persetujuan agar kami dapat menghubungi Anda.";

  return errors;
}

function formatDateId(date: string): string {
  const [y, m, d] = date.split("-").map(Number);
  return new Intl.DateTimeFormat("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(Date.UTC(y, m - 1, d)),
  );
}

/**
 * Human-readable summary for the confirmation screen and the WhatsApp message.
 * `includeNotes: false` keeps health details out of a prefilled WhatsApp URL (blueprint section G).
 */
export function bookingSummary(r: BookingRequest, opts: { includeNotes?: boolean } = {}): string {
  const includeNotes = opts.includeNotes ?? true;
  const service =
    siteConfig.services.find((s) => s.id === r.service)?.title ??
    EXTRA_SERVICE_OPTIONS.find((o) => o.value === r.service)?.label ??
    r.service;
  const visit = VISIT_TYPES.find((v) => v.value === r.visitType)?.label ?? r.visitType;
  const time = TIME_SLOTS.find((t) => t.value === r.time)?.label ?? r.time;
  const channel = CHANNELS.find((c) => c.value === r.channel)?.label ?? r.channel;
  const lines = [
    "Halo ELPIORA, saya ingin mengajukan janji konsultasi:",
    "",
    `Nama: ${r.name.trim()}`,
    `Telepon: ${r.phone.trim()}`,
    r.email.trim() ? `Email: ${r.email.trim()}` : null,
    `Kanal kontak: ${channel}`,
    `Layanan: ${service}`,
    `Lokasi sesi: ${visit}`,
    r.area.trim() ? `Area: ${r.area.trim()}` : null,
    `Tanggal: ${formatDateId(r.date)}`,
    `Waktu: ${time}`,
    includeNotes && r.notes.trim() ? `Catatan: ${r.notes.trim()}` : null,
  ];
  return lines.filter((l) => l !== null).join("\n");
}
