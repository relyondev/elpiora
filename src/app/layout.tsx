import type { Metadata, Viewport } from "next";
import { EB_Garamond, Kaushan_Script, Montserrat } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileCta } from "@/components/MobileCta";
import { siteConfig } from "@/config/site";
import "./globals.css";

// Headline type: EB Garamond Bold. "Apple Garamond" is Apple's proprietary typeface and is not licensed for
// web use, so EB Garamond (open licence, same Garamond lineage) is the closest available match.
// To use a licensed Apple/ITC Garamond webfont instead, change only --font-garamond here.
const garamond = EB_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
  display: "swap",
});

// Brush script — tagline and short accents only, never navigation, buttons or body copy.
const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kaushan",
  display: "swap",
});

const title = "Fisioterapi & Rehabilitasi | ELPIORA Physiotherapy & Wellness";
const description =
  "ELPIORA Physiotherapy and Wellness: pendekatan fisioterapi yang personal untuk membantu Anda memahami tubuh, memulihkan fungsi gerak, dan kembali beraktivitas dengan percaya diri.";

export const metadata: Metadata = {
  // TODO_CONFIRM — canonical/OG URLs resolve once NEXT_PUBLIC_SITE_URL is set.
  metadataBase: siteConfig.siteUrl ? new URL(siteConfig.siteUrl) : undefined,
  title: { default: title, template: "%s" },
  description,
  applicationName: "ELPIORA",
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "ELPIORA Physiotherapy and Wellness",
    title,
    description,
    url: siteConfig.siteUrl ?? undefined,
    // TODO_CONFIRM — add an approved 1200×630 OG image (official logo + real photography) at /public/og.jpg
  },
  twitter: { card: "summary_large_image", title, description },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: "#F8FBFA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id-ID" className={`${garamond.variable} ${montserrat.variable} ${kaushan.variable}`}>
      <body>
        <a
          href="#konten"
          className="sr-only z-[60] rounded-full bg-deep px-5 py-3 text-sm font-semibold text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Lewati ke konten utama
        </a>
        <Header />
        {children}
        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}
