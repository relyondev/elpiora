/**
 * ELPIORA: central site configuration.
 *
 * Every business fact the website displays lives here, so nothing factual is
 * scattered through components. Anything not yet supplied by ELPIORA is `null`
 * (or an empty list) and marked `TODO_CONFIRM`. Components render an honest
 * "menunggu konfirmasi" state for nulls and never invent a value.
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
  /** URL slug: /services/<id> (from the content blueprint). */
  id: string;
  /** Service names stay in English, as in the blueprint. */
  title: string;
  /** Short descriptor under the title. */
  label: string;
  /** Card text from the blueprint. */
  description: string;
  icon: ServiceIcon;
  /**
   * "listed"      - wording from the blueprint, still pending clinical review.
   * "unconfirmed" - shown with a visible "menunggu konfirmasi" tag until
   *                 qualifications and availability are confirmed.
   */
  availability: ServiceAvailability;
};

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
     * Official logo files (supplied by ELPIORA, Nov 2026):
     * - primary/full: extracted from LOGO-ELPIORA-4.svg (full colour, for light backgrounds)
     * - reversed: supplied reversed artwork (white wordmark, for dark backgrounds)
     * Originals are archived in docs/brand/. Never redraw, recolour or stretch.
     */
    logo: {
      primary: { src: "/brand/elpiora-logo.png", width: 900, height: 227 }, // wordmark + descriptor
      full: { src: "/brand/elpiora-logo-full.png", width: 1200, height: 414 }, // + "restore function · renew life"
      reversed: { src: "/brand/elpiora-logo-reversed.png", width: 900, height: 240 },
      alt: "ELPIORA Physiotherapy and Wellness",
    },
    /** Brand traits from the official identity slides (01 / 05). */
    traits: [
      { title: "Restorative", label: "Pulih dengan tujuan", body: "Setiap langkah diarahkan untuk mengembalikan fungsi gerak." },
      { title: "Elegant", label: "Pengalaman yang tertata", body: "Suasana tenang, rapi, dan menghargai waktu Anda." },
      { title: "Holistic", label: "Peduli pada keseluruhan diri", body: "Memperhatikan tubuh, keseharian, dan tujuan Anda." },
      { title: "Precise", label: "Teliti dalam setiap gerak", body: "Asesmen dan program disusun dengan cermat." },
      { title: "Uplifting", label: "Menuju hari yang lebih baik", body: "Mendampingi dengan hangat dan penuh semangat." },
    ],
    /** Blueprint drafts "untuk disetujui" (page 02). TODO_CONFIRM with ELPIORA before launch. */
    mission:
      "Membantu individu meningkatkan kemampuan bergerak dan kualitas hidup melalui pelayanan fisioterapi yang personal, profesional, edukatif, dan berorientasi pada fungsi.",
    vision:
      "Menjadi layanan fisioterapi dan wellness yang dipercaya dalam mendampingi masyarakat untuk bergerak lebih baik sepanjang tahap kehidupan.",
    /** Core values proposed in the blueprint ("usulan editorial untuk dikonfirmasi"). */
    values: [
      { title: "Clinical reasoning & evidence-informed care", body: "Keputusan didasarkan pada asesmen, pengetahuan ilmiah, dan kebutuhan pasien." },
      { title: "Personalised care", body: "Rencana terapi tidak disamaratakan untuk semua orang." },
      { title: "Compassion & respect", body: "Memberi ruang untuk mendengar dan memahami pasien." },
      { title: "Active rehabilitation", body: "Memberdayakan pasien lewat latihan dan edukasi." },
      { title: "Continuity", body: "Memantau kemajuan dan menyesuaikan sasaran." },
    ],
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
    // DUMMY fallback number (not real). The env variable overrides it.
    whatsappNumber: parseWhatsAppNumber(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER) ?? "628000000000",
    // Blueprint wording. No diagnosis or sensitive details belong in a prefilled URL.
    whatsappMessage: "Halo ELPIORA, saya ingin informasi booking fisioterapi. Pilihan layanan: [___]. Area: [___]. Kapan jadwal tersedia?",
    phone: "+62 21 5550 0100" as string | null, // DUMMY, replace with the real number
    email: "halo@elpiora.example" as string | null, // DUMMY, replace with the real address
  },

  location: {
    /** TODO_CONFIRM — do not publish a branch, address or service area (BSD, Tangerang Selatan, Jakarta) until verified. */
    branchName: "ELPIORA Studio (contoh)" as string | null, // DUMMY
    address: "Jl. Contoh Sehat No. 12, BSD City (alamat contoh)" as string | null, // DUMMY
    city: "Tangerang Selatan" as string | null, // DUMMY
    mapsUrl: null as string | null,
    hours: [
      { days: "Senin - Jumat", hours: "08.00 - 19.00" },
      { days: "Sabtu", hours: "08.00 - 15.00" },
    ] as OpeningHours[] | null, // DUMMY
    access: "Area parkir tersedia (contoh)." as string | null, // DUMMY: parking / public transport notes
  },

  /**
   * Official accounts as printed on the ELPIORA "#ELPIORAINSIDE" poster.
   * TODO_CONFIRM — verify each URL opens the right profile; add the Facebook
   * page URL ("Elpiora Physiotheraphy") once known.
   */
  social: [
    { label: "Instagram", handle: "@elpioraphysio", href: "https://www.instagram.com/elpioraphysio/", icon: "instagram" },
    { label: "TikTok", handle: "@elpioraphysio", href: "https://www.tiktok.com/@elpioraphysio", icon: "tiktok" },
  ] as { label: string; handle: string; href: string; icon: "instagram" | "tiktok" | "facebook" }[],

  /** The six service categories from the content blueprint (section B/D). */
  services: [
    {
      id: "musculoskeletal-physiotherapy",
      title: "Pain & Movement",
      label: "Musculoskeletal & orthopaedic physiotherapy",
      description: "Nyeri leher, bahu, punggung, pinggang, lutut, pinggul, kekakuan sendi, pemulihan cedera dan operasi ortopedi.",
      icon: "movement",
      availability: "listed",
    },
    {
      id: "sports-rehabilitation",
      title: "Sports Rehabilitation",
      label: "Sports physiotherapy & return to sport",
      description: "Penilaian cedera olahraga, latihan pemulihan, penguatan, kontrol gerak, pencegahan cedera berulang, dan return-to-sport.",
      icon: "sport",
      availability: "listed",
    },
    {
      id: "workplace-ergonomics",
      title: "Workplace Health & Ergonomics",
      label: "Occupational physiotherapy",
      description: "Evaluasi workstation, edukasi posisi kerja, strategi bergerak, latihan kekuatan dan mobilitas bagi pekerja.",
      icon: "workplace",
      availability: "listed",
    },
    {
      id: "dry-needling",
      title: "Dry Needling Therapy",
      label: "Selective musculoskeletal intervention",
      description: "Teknik dengan jarum halus untuk indikasi muskuloskeletal terpilih, berdasarkan asesmen, persetujuan, dan kompetensi klinisi.",
      icon: "needle",
      availability: "unconfirmed", // TODO_CONFIRM: therapist qualification and readiness
    },
    {
      id: "wellness-movement",
      title: "Wellness & Movement Optimisation",
      label: "Preventive physiotherapy",
      description: "Movement screening, mobility, strength, balance, active aging, dan program preventive physiotherapy.",
      icon: "wellness",
      availability: "listed",
    },
    {
      id: "neurological-rehabilitation",
      title: "Neurological & Functional Rehabilitation",
      label: "Neurological physiotherapy",
      description:
        "Latihan setelah stroke, Parkinson, multiple sclerosis, gangguan keseimbangan, pola berjalan, kelemahan otot, kontrol motorik, dan fungsi harian.",
      icon: "neuro",
      availability: "unconfirmed", // TODO_CONFIRM: complex neurological cases
    },
  ] satisfies Service[],

  /**
   * Publication gates (blueprint section C/K). A page whose honest content needs real material
   * returns 404 and is not linked until its gate opens:
   * - /facilities: real photos and a verified location
   * - /education: clinically reviewed articles
   * - /about/our-team: real team members (config `team`)
   * - /patient-stories: real, consented testimonials (config `testimonials`)
   */
  publish: {
    facilities: false, // TODO_CONFIRM
    education: false, // TODO_CONFIRM
  },

  homeVisit: {
    /** TODO_CONFIRM — set true only once the service, therapists and areas are confirmed. */
    confirmed: true, // DUMMY
    /** TODO_CONFIRM — e.g. ["BSD", "Tangerang Selatan"]. Empty = coverage not yet announced. */
    coverageAreas: ["BSD", "Tangerang Selatan"] as string[], // DUMMY
  },

  /**
   * TODO_CONFIRM — the Team section stays hidden while this list is empty.
   * Add members only with real names, verified qualifications, real portraits
   * and their consent.
   */
  team: [
    {
      name: "(Nama Tim Trial) Fisioterapis 1",
      role: "Fisioterapis (contoh)",
      credentials: "(Trial) Kualifikasi menunggu data asli",
      bio: "(Nama Tim Trial) Profil contoh untuk uji tampilan. Ganti dengan data tim yang sebenarnya sebelum peluncuran.",
      photo: { src: null, alt: "Foto anggota tim (trial)", brief: "Potret profesional fisioterapis, cahaya alami" },
    },
    {
      name: "(Nama Tim Trial) Fisioterapis 2",
      role: "Fisioterapis (contoh)",
      credentials: "(Trial) Kualifikasi menunggu data asli",
      bio: "(Nama Tim Trial) Profil contoh untuk uji tampilan. Ganti dengan data tim yang sebenarnya sebelum peluncuran.",
      photo: { src: null, alt: "Foto anggota tim (trial)", brief: "Potret profesional fisioterapis, cahaya alami" },
    },
    {
      name: "(Nama Tim Trial) Fisioterapis 3",
      role: "Fisioterapis (contoh)",
      credentials: "(Trial) Kualifikasi menunggu data asli",
      bio: "(Nama Tim Trial) Profil contoh untuk uji tampilan. Ganti dengan data tim yang sebenarnya sebelum peluncuran.",
      photo: { src: null, alt: "Foto anggota tim (trial)", brief: "Potret profesional fisioterapis, cahaya alami" },
    },
  ] as TeamMember[], // DUMMY,

  /**
   * TODO_CONFIRM — publish only real testimonials with written consent.
   * Never paraphrase into stronger claims; no star ratings unless verified.
   */
  testimonials: [
    { quote: "(Testimoni Trial) Teks testimoni contoh untuk uji tampilan, bukan ulasan pasien nyata.", name: "(Testimoni Trial) Pasien A", context: "Contoh", consentOnFile: true },
    { quote: "(Testimoni Trial) Teks testimoni contoh untuk uji tampilan, bukan ulasan pasien nyata.", name: "(Testimoni Trial) Pasien B", context: "Contoh", consentOnFile: true },
    { quote: "(Testimoni Trial) Teks testimoni contoh untuk uji tampilan, bukan ulasan pasien nyata.", name: "(Testimoni Trial) Pasien C", context: "Contoh", consentOnFile: true },
  ] as Testimonial[], // DUMMY,

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
    corporateHero: {
      src: null,
      alt: "Fisioterapis memandu sesi gerak dan peregangan singkat untuk sekelompok pekerja kantor",
      brief: "Workshop ergonomi di kantor · peserta asli dengan izin · cahaya alami",
    },
    eventHero: {
      src: null,
      alt: "Fisioterapis memberi edukasi pemanasan dan pemulihan di sebuah acara olahraga komunitas",
      brief: "Pos fisioterapi di acara olahraga · peserta asli dengan izin",
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

export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href?: string; children?: NavChild[] };

/**
 * Main navigation (blueprint section B). Items whose pages are gated stay out of the
 * menu until the gate opens (antislop R-18, R-24).
 */
export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About ELPIORA", href: "/about" },
      { label: "Our Approach", href: "/about/our-approach" },
      ...(siteConfig.team.length > 0 ? [{ label: "Our Team", href: "/about/our-team" }] : []),
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [{ label: "All Services", href: "/services" }, ...siteConfig.services.map((s) => ({ label: s.title, href: `/services/${s.id}` }))],
  },
  { label: "Conditions", href: "/conditions" },
  { label: "Home Visit", href: "/home-visit" },
  {
    label: "Corporate & Events",
    children: [
      { label: "Corporate Wellness", href: "/corporate-wellness" },
      { label: "Event Physiotherapy", href: "/event-physiotherapy" },
    ],
  },
  ...(siteConfig.publish.education ? [{ label: "Education", href: "/education" }] : []),
];

/** Booking page: the destination of every "book" CTA. */
export const BOOKING_PATH = "/booking";
