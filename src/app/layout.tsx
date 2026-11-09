import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat, Satisfy } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

// Recommended matches (guidelines §4) — not the custom logotype, which must come from official files.
const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
  display: "swap",
});

// Accent script — tagline only, never navigation, buttons or body copy.
const satisfy = Satisfy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-satisfy",
  display: "swap",
});

const title = "ELPIORA — Fisioterapi & Wellness | restore function · renew life";
const description =
  "ELPIORA Physiotherapy and Wellness: pendekatan fisioterapi yang personal untuk membantu Anda memahami tubuh, memulihkan fungsi gerak, dan kembali beraktivitas dengan percaya diri.";

export const metadata: Metadata = {
  // TODO_CONFIRM — canonical/OG URLs resolve once NEXT_PUBLIC_SITE_URL is set.
  metadataBase: siteConfig.siteUrl ? new URL(siteConfig.siteUrl) : undefined,
  title,
  description,
  applicationName: "ELPIORA",
  alternates: siteConfig.siteUrl ? { canonical: "/" } : undefined,
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "ELPIORA — Physiotherapy and Wellness",
    title,
    description,
    url: siteConfig.siteUrl ?? undefined,
    // TODO_CONFIRM — add an approved 1200×630 OG image (official logo + real photography) at /public/og.jpg
  },
  twitter: { card: "summary_large_image", title, description },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: "#F7FAF8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id-ID" className={`${cormorant.variable} ${montserrat.variable} ${satisfy.variable}`}>
      <body>
        <a
          href="#konten"
          className="sr-only z-[60] rounded-full bg-deep px-5 py-3 text-sm font-semibold text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Lewati ke konten utama
        </a>
        {children}
      </body>
    </html>
  );
}
