/** Corporate and event enquiry forms (blueprint pages 20 and 21). Shared by the form and /api/enquiry. */

export type EnquiryKind = "corporate" | "event";

export type FieldDef = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "date" | "number" | "textarea" | "select";
  required?: boolean;
  hint?: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
  /** Occupies both columns on wide screens. */
  wide?: boolean;
};

export const corporatePackages = [
  { value: "ergonomic-screening", label: "Workplace Ergonomic Screening" },
  { value: "posture-workshop", label: "Posture & Movement Workshop" },
  { value: "mobility-class", label: "Office Mobility & Stretching Class" },
  { value: "consultation-booth", label: "Individual Consultation Booth" },
  { value: "wellness-day", label: "Corporate Wellness Day" },
  { value: "belum-yakin", label: "Belum yakin, ingin berdiskusi" },
];

export const ENQUIRY_FIELDS: Record<EnquiryKind, FieldDef[]> = {
  corporate: [
    { name: "pic", label: "Nama PIC", type: "text", required: true },
    { name: "company", label: "Nama perusahaan", type: "text", required: true },
    { name: "location", label: "Lokasi kegiatan", type: "text", required: true, placeholder: "Contoh: kantor di BSD City" },
    { name: "program", label: "Program yang diminati", type: "select", required: true, options: corporatePackages },
    { name: "participants", label: "Estimasi jumlah peserta", type: "number" },
    { name: "date", label: "Tanggal yang diinginkan", type: "date" },
    { name: "email", label: "Email kantor", type: "email", required: true },
    { name: "phone", label: "Telepon", type: "tel", required: true },
    { name: "need", label: "Kebutuhan dan tujuan program", type: "textarea", required: true, wide: true, hint: "Format on-site atau online, ruang dan peralatan yang tersedia, serta hasil yang diharapkan." },
  ],
  event: [
    { name: "eventName", label: "Nama acara", type: "text", required: true },
    { name: "organizer", label: "Penyelenggara", type: "text", required: true },
    { name: "date", label: "Tanggal acara", type: "date", required: true },
    { name: "time", label: "Waktu", type: "text", placeholder: "Contoh: 07.00 sampai 12.00" },
    { name: "venue", label: "Lokasi acara", type: "text", required: true },
    { name: "sport", label: "Jenis olahraga", type: "text", required: true, placeholder: "Contoh: padel, fun run" },
    { name: "participants", label: "Estimasi jumlah peserta", type: "number", required: true },
    {
      name: "medicalTeam",
      label: "Tim medis acara",
      type: "select",
      required: true,
      options: [
        { value: "ada", label: "Sudah ada tim medis" },
        { value: "belum", label: "Belum ada" },
        { value: "belum-tahu", label: "Belum tahu" },
      ],
    },
    { name: "services", label: "Layanan yang diinginkan", type: "textarea", required: true, wide: true },
    { name: "budget", label: "Kisaran anggaran", type: "text" },
    { name: "pic", label: "Nama PIC", type: "text", required: true },
    { name: "phone", label: "Telepon", type: "tel", required: true },
    { name: "email", label: "Email", type: "email", required: true },
  ],
};

export type EnquiryValues = Record<string, string>;
export type EnquiryErrors = Record<string, string>;

export function validateEnquiry(kind: EnquiryKind, v: EnquiryValues, consent: boolean, today: string): EnquiryErrors {
  const errors: EnquiryErrors = {};
  for (const f of ENQUIRY_FIELDS[kind]) {
    const val = (v[f.name] ?? "").trim();
    if (f.required && !val) {
      errors[f.name] = `Mohon isi ${f.label.toLowerCase()}.`;
      continue;
    }
    if (!val) continue;
    if (val.length > (f.type === "textarea" ? 800 : 200)) errors[f.name] = "Isian terlalu panjang.";
    if (f.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val)) errors[f.name] = "Format email belum sesuai.";
    if (f.type === "tel" && !/^\+?[\d\s\-().]{8,20}$/.test(val)) errors[f.name] = "Format nomor belum sesuai, contoh: 0812 3456 7890.";
    if (f.type === "number" && !(Number(val) >= 1 && Number(val) <= 100000)) errors[f.name] = "Mohon isi angka yang valid.";
    if (f.type === "date") {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(val)) errors[f.name] = "Tanggal belum sesuai.";
      else if (val < today) errors[f.name] = "Tanggal tidak boleh sebelum hari ini.";
    }
    if (f.type === "select" && !f.options?.some((o) => o.value === val)) errors[f.name] = "Mohon pilih salah satu.";
  }
  if (!consent) errors.consent = "Mohon berikan persetujuan agar kami dapat menghubungi Anda.";
  return errors;
}

export function enquirySummary(kind: EnquiryKind, v: EnquiryValues): string {
  const head = kind === "corporate" ? "Halo ELPIORA, saya ingin mengajukan proposal program korporat:" : "Halo ELPIORA, saya ingin mengajukan kolaborasi event:";
  const lines = ENQUIRY_FIELDS[kind]
    .map((f) => {
      const raw = (v[f.name] ?? "").trim();
      if (!raw) return null;
      const shown = f.options?.find((o) => o.value === raw)?.label ?? raw;
      return `${f.label}: ${shown}`;
    })
    .filter((l): l is string => l !== null);
  return [head, "", ...lines].join("\n");
}
