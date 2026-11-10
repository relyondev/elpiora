import type { Metadata, Viewport } from "next";
import { Kaushan_Script, Montserrat, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/config/site";
import "./globals.css";

// v3 type (from the official "Move Better. Live Better." poster): Playfair Display headlines,
// Montserrat body, Kaushan Script brush accents. The logotype itself is always the official image.
const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
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

const title = "ELPIORA Physiotherapy and Wellness | restore function · renew life";
const description =
  "ELPIORA Physiotherapy and Wellness: pendekatan fisioterapi yang personal untuk membantu Anda memahami tubuh, memulihkan fungsi gerak, dan kembali beraktivitas dengan percaya diri.";

export const metadata: Metadata = {
  // TODO_CONFIRM — canonical/OG URLs resolve once NEXT_PUBLIC_SITE_URL is set.
  metadataBase: siteConfig.siteUrl ? new URL(siteConfig.siteUrl) : undefined,
  title: { default: title, template: "%s | ELPIORA Physiotherapy and Wellness" },
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
    <html lang="id-ID" className={`${playfair.variable} ${montserrat.variable} ${kaushan.variable}`}>
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
      </body>
    </html>
  );
}
