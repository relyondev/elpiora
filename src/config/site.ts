/**
 * ELPIORA — central site configuration.
 *
 * Every business fact the website displays lives here, so nothing factual is
 * scattered through components. Anything not yet supplied by ELPIORA is `null`
 * (or an empty list) and marked `TODO_CONFIRM`. Components render an honest
 * "menunggu konfirmasi" state for nulls — they never invent a value.
 *
 * Note on the page mockups (docs/brand/mockup-*.webp): they are AI concept
 * art. Their phone number, address, email, statistics, team members and
 * testimonials are illustrative and were deliberately NOT copied here.
 *
 * Search the codebase for `TODO_CONFIRM` to see everything still open.
 */

export const TODO_CONFIRM = "TODO_CONFIRM" as const;

export type ImageSlot = {
  /** Path in /public (e.g. "/images/hero.webp") once real, licensed photography exists. */
  src: string | null;
  alt: string;
  width?: number;
  height?: number;
  /** Art-direction brief for the photographer; shown on the placeholder until `src` is set. */
  brief: string;
};

export type ServiceAvailability = "listed" | "unconfirmed";

export type ServiceIcon = "movement" | "sport" | "workplace" | "wellness" | "needle" | "neuro" | "home";

export type Service = {
  id: string;
  /** Service names are kept in English as supplied in the brief and mockups. */
  title: string;
  /** Indonesian sub-label. */
  label: string;
  description: string;
  icon: ServiceIcon;
  /**
   * "listed"      — provided in the original brief, wording still editable (TODO_CONFIRM).
   * "unconfirmed" — shown with a visible "menunggu konfirmasi" badge until
   *                 qualifications and availability are confirmed.
   */
  availability: ServiceAvailability;
};

export type Program = { id: string; title: string; description: string };

export type TeamMember = {
  name: string;
  role: string;
  /** Only verified, publicly shareable qualifications (e.g. STR status) with the person's consent. */
  credentials: string;
  bio: string;
  photo: ImageSlot;
};

export type Testimonial = {
  quote: string;
  /** Name or initials exactly as the patient agreed to be published. */
  name: string;
  context?: string;
  /** Must be true: written consent to publish was obtained and is on file. */
  consentOnFile: true;
};

export type OpeningHours = { days: string; hours: string };

/** Accepts international digits only, e.g. "6281234567890" (no +, spaces or leading 0). */
function parseWhatsAppNumber(value: string | undefined): string | null {
  if (!value) return null;
  const digits = value.replace(/\D/g, "");
  return /^[1-9]\d{7,14}$/.test(digits) ? digits : null;
}

function parseUrl(value: string | undefined): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url.toString().replace(/\/$/, "") : null;
  } catch {
    return null;
  }
}

export const siteConfig = {
  brand: {
    name: "ELPIORA",
    descriptor: "Physiotherapy and Wellness",
    /** Official tagline — preserve wording, casing and the middle dot exactly. */
    tagline: "restore function · renew life",
    /**
     * TODO_CONFIRM — official logo files. Place the supplied SVGs in /public/brand/
     * and set the paths. Until then a clearly temporary text placeholder is shown.
     * Never replace this with a re-drawn or AI-generated logo.
     */
    logo: {
      primary: null as string | null, // e.g. "/brand/elpiora-logo.svg" (full colour, light backgrounds)
      reversed: null as string | null, // e.g. "/brand/elpiora-logo-reversed.svg" (dark backgrounds)
      width: 168,
      height: 40,
      alt: "ELPIORA — Physiotherapy and Wellness",
    },
    /** Brand traits from the official identity slides (01 / 05). */
    traits: [
      { title: "Restorative", label: "Pulih dengan tujuan", body: "Setiap langkah diarahkan untuk mengembalikan fungsi gerak." },
      { title: "Elegant", label: "Pengalaman yang tertata", body: "Suasana tenang, rapi, dan menghargai waktu Anda." },
      { title: "Holistic", label: "Peduli pada keseluruhan diri", body: "Memperhatikan tubuh, keseharian, dan tujuan Anda." },
      { title: "Precise", label: "Teliti dalam setiap gerak", body: "Asesmen dan program disusun dengan cermat." },
      { title: "Uplifting", label: "Menuju hari yang lebih baik", body: "Mendampingi dengan hangat dan penuh semangat." },
    ],
    /**
     * TODO_CONFIRM — DRAFT mission & vision written for the prototype.
     * Replace with ELPIORA's own statements (or approve these).
     */
    mission:
      "Memberikan layanan fisioterapi dan kesehatan gerak yang personal, jelas, dan penuh empati — membantu setiap orang kembali bergerak dengan nyaman.",
    vision:
      "Menjadi tempat pemulihan gerak yang dipercaya karena ketelitian klinis, perhatian personal, dan suasana yang menenangkan.",
    missionIsDraft: true,
  },

  /** TODO_CONFIRM — production domain. Set NEXT_PUBLIC_SITE_URL at deploy time. */
  siteUrl: parseUrl(process.env.NEXT_PUBLIC_SITE_URL),

  /**
   * Shows small "placeholder" markers on temporary logo/photo/fact slots so
   * reviewers can see what still needs replacing. Keep `true` until every
   * TODO_CONFIRM in this file is resolved.
   */
  showPlaceholderMarkers: true,

  contact: {
    /** TODO_CONFIRM — set NEXT_PUBLIC_WHATSAPP_NUMBER (international digits, e.g. 6281234567890). */
    whatsappNumber: parseWhatsAppNumber(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER),
    whatsappMessage:
      "Halo ELPIORA, saya ingin menjadwalkan konsultasi fisioterapi. Boleh saya mendapatkan informasi jadwal yang tersedia?",
    phone: null as string | null, // TODO_CONFIRM — display format, e.g. "+62 21 0000 0000"
    email: null as string | null, // TODO_CONFIRM
  },

  location: {
    /** TODO_CONFIRM — do not publish a branch, address or service area (BSD, Tangerang Selatan, Jakarta) until verified. */
    branchName: null as string | null,
    address: null as string | null,
    city: null as string | null,
    mapsUrl: null as string | null,
    hours: null as OpeningHours[] | null,
    access: null as string | null, // parking / public transport notes
  },

  /** TODO_CONFIRM — add only official, active accounts. */
  social: [] as { label: string; href: string }[],

  services: [
    {
      id: "pain-movement",
      title: "Pain & Movement",
      label: "Nyeri & Fungsi Gerak",
      description:
        "Penanganan keluhan muskuloskeletal — seperti nyeri leher, punggung, atau sendi — dengan fokus pada mobilitas dan fungsi gerak sehari-hari.",
      icon: "movement",
      availability: "listed",
    },
    {
      id: "sports-rehabilitation",
      title: "Sports Rehabilitation",
      label: "Rehabilitasi Olahraga",
      description:
        "Dukungan pemulihan setelah cedera olahraga, dengan program bertahap untuk membantu Anda kembali beraktivitas.",
      icon: "sport",
      availability: "listed",
    },
    {
      id: "workplace-ergonomics",
      title: "Workplace Health & Ergonomics",
      label: "Kesehatan Kerja & Ergonomi",
      description:
        "Penilaian kebutuhan gerak dan ergonomi aktivitas kerja, untuk keseharian di meja kerja maupun di lapangan.",
      icon: "workplace",
      availability: "listed",
    },
    {
      id: "wellness-movement",
      title: "Wellness & Movement",
      label: "Kesehatan Gerak",
      description:
        "Program kesehatan gerak dan kebugaran fungsional untuk menjaga tubuh tetap aktif, seimbang, dan nyaman bergerak.",
      icon: "wellness",
      availability: "listed",
    },
    {
      id: "neurological-rehabilitation",
      title: "Neurological Rehabilitation",
      label: "Rehabilitasi Neurologis",
      description:
        "Dukungan latihan gerak, keseimbangan, dan kemandirian setelah kondisi neurologis — disusun bersama tim medis Anda.",
      icon: "neuro",
      availability: "unconfirmed", // TODO_CONFIRM — appears in mockups only
    },
    {
      id: "dry-needling",
      title: "Dry Needling",
      label: "Layanan Tambahan",
      description:
        "Informasi layanan ini akan diperbarui setelah kualifikasi terapis dan ketersediaannya dikonfirmasi.",
      icon: "needle",
      availability: "unconfirmed",
    },
    {
      id: "home-visit",
      title: "Home Visit Physiotherapy",
      label: "Fisioterapi di Rumah",
      description:
        "Sesi fisioterapi di rumah Anda bagi yang sulit bepergian. Area dan jadwal kunjungan akan dikonfirmasi oleh tim.",
      icon: "home",
      availability: "unconfirmed", // TODO_CONFIRM — appears in mockups only
    },
  ] satisfies Service[],

  /** TODO_CONFIRM — specialty programmes shown in the mockups; all pending confirmation. */
  programs: [
    { id: "post-operative", title: "Rehabilitasi Pasca-Operasi", description: "Program bertahap untuk membantu mobilitas dan fungsi setelah operasi, sesuai arahan dokter Anda." },
    { id: "stroke", title: "Rehabilitasi Pasca-Stroke", description: "Latihan kekuatan, koordinasi, dan kemandirian dalam aktivitas sehari-hari." },
    { id: "posture", title: "Koreksi Postur", description: "Latihan dan edukasi postur untuk kenyamanan saat bekerja dan beraktivitas." },
    { id: "preventive", title: "Preventive Wellness", description: "Menjaga tubuh tetap kuat, lentur, dan tangguh melalui latihan yang terarah." },
  ] satisfies Program[],

  homeVisit: {
    /** TODO_CONFIRM — set true only once the service, therapists and areas are confirmed. */
    confirmed: false,
    /** TODO_CONFIRM — e.g. ["BSD", "Tangerang Selatan"]. Empty = coverage not yet announced. */
    coverageAreas: [] as string[],
  },

  /**
   * TODO_CONFIRM — the Team section stays hidden while this list is empty.
   * Add members only with real names, verified qualifications, real portraits
   * and their consent.
   */
  team: [] as TeamMember[],

  /**
   * TODO_CONFIRM — publish only real testimonials with written consent.
   * Never paraphrase into stronger claims; no star ratings unless verified.
   */
  testimonials: [] as Testimonial[],

  images: {
    hero: {
      src: null,
      alt: "Fisioterapis mendampingi pasien melakukan latihan gerak di ruang terapi ELPIORA yang terang dan tenang",
      brief: "Sesi fisioterapi nyata · cahaya alami · nuansa teal & tanaman",
    },
    about: {
      src: null,
      alt: "Fisioterapis berdiskusi dengan pasien sebelum memulai sesi latihan",
      brief: "Momen percakapan terapis & pasien · hangat, natural",
    },
    aboutHero: {
      src: null,
      alt: "Fisioterapis membantu pasien melakukan latihan bahu",
      brief: "Latihan bahu dengan pendampingan terapis · senyum natural",
    },
    servicesHero: {
      src: null,
      alt: "Fisioterapis memeriksa gerak bahu pasien",
      brief: "Asesmen gerak bahu · ruang terang · seragam teal",
    },
    homeVisitHero: {
      src: null,
      alt: "Fisioterapis mendampingi pasien lansia berlatih dengan resistance band di rumah",
      brief: "Sesi di rumah pasien · lansia · resistance band",
    },
    contactHero: {
      src: null,
      alt: "Fisioterapis memeriksa lutut pasien di ruang terapi",
      brief: "Asesmen lutut · bed terapi · cahaya alami",
    },
    clinicReception: {
      src: null,
      alt: "Area resepsionis klinik ELPIORA",
      brief: "Resepsionis klinik · dinding teal bergaris · cahaya hangat",
    },
    clinicTreatment: {
      src: null,
      alt: "Ruang terapi klinik ELPIORA",
      brief: "Ruang terapi · bed perawatan · cahaya alami",
    },
    clinicDetail: {
      src: null,
      alt: "Detail interior klinik ELPIORA dengan tanaman dan material alami",
      brief: "Detail material · tanaman · tekstur alami",
    },
    clinicExercise: {
      src: null,
      alt: "Area latihan klinik ELPIORA",
      brief: "Area latihan · peralatan rehabilitasi · cahaya alami",
    },
  } satisfies Record<string, ImageSlot>,

  /**
   * MedicalClinic JSON-LD is published only when this is true AND the name,
   * address and a contact channel are filled in with verified facts.
   */
  structuredDataVerified: false,
} as const;

export type SiteConfig = typeof siteConfig;

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const navigation: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/tentang" },
  {
    label: "Layanan",
    href: "/layanan",
    children: [
      { label: "Semua Layanan", href: "/layanan" },
      ...siteConfig.services.map((s) => ({ label: s.title, href: `/layanan#${s.id}` })),
    ],
  },
  { label: "Home Visit", href: "/home-visit" },
  { label: "Fasilitas", href: "/fasilitas" },
  { label: "Testimoni", href: "/testimoni" },
  { label: "Kontak", href: "/kontak" },
];

/** The on-site booking form — the primary destination of every "book" CTA. */
export const BOOKING_PATH = "/kontak#formulir";
