import type { NextConfig } from "next";

/**
 * URL structure follows the content blueprint (English slugs). The previous Indonesian paths redirect
 * permanently so shared preview links keep working.
 */
const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/tentang", destination: "/about", permanent: true },
      { source: "/layanan", destination: "/services", permanent: true },
      { source: "/layanan/pain-movement", destination: "/services/musculoskeletal-physiotherapy", permanent: true },
      { source: "/layanan/home-visit", destination: "/home-visit", permanent: true },
      { source: "/layanan/:slug", destination: "/services/:slug", permanent: true },
      { source: "/kontak", destination: "/contact", permanent: true },
      { source: "/fasilitas", destination: "/facilities", permanent: true },
      { source: "/testimoni", destination: "/patient-stories", permanent: true },
    ];
  },
};

export default nextConfig;
