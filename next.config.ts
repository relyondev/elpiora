import type { NextConfig } from "next";

/**
 * URL structure follows the content blueprint (English slugs). The previous Indonesian paths redirect
 * permanently so shared preview links keep working.
 */
// GitHub Pages preview: `GH_PAGES=1 npm run build` produces a static export under /elpiora.
// Redirects and /api routes do not exist in a static export (the workflow removes src/app/api).
const pages = process.env.GH_PAGES === "1";

const nextConfig: NextConfig = {
  ...(pages ? { output: "export" as const, basePath: "/elpiora", assetPrefix: "/elpiora/", trailingSlash: true, images: { unoptimized: true } } : {}),
  env: { NEXT_PUBLIC_BASE_PATH: pages ? "/elpiora" : "" },
  ...(pages ? {} : { async redirects() {
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
  } }),
};

export default nextConfig;
