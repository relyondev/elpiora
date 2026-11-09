import { Banner } from "@/components/Banner";
import { LinkButton } from "@/components/ui/Button";
import { MovementCurve } from "@/components/ui/Ornaments";
import { BOOKING_PATH } from "@/config/site";

export default function NotFound() {
  return (
    <main id="konten">
      <Banner labelledBy="nf-title">
        <MovementCurve draw className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-1/2 opacity-60 md:block" />
        <div className="mx-auto max-w-3xl px-5 pt-[calc(var(--header-h)+56px)] pb-24 text-center md:pb-28">
          <p className="pill-hashtag">404 · Halaman tidak ditemukan</p>
          <h1 id="nf-title" className="t-display mt-6">
            Sepertinya Anda <span className="accent">salah langkah.</span>
          </h1>
          <p className="t-lead mx-auto mt-6 max-w-[38ch]">Halaman yang Anda cari tidak ada atau sudah dipindahkan.</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <LinkButton href="/" variant="champagne">
              Kembali ke Beranda
            </LinkButton>
            <LinkButton href={BOOKING_PATH} variant="secondary-on-dark">
              Buat Janji
            </LinkButton>
          </div>
        </div>
      </Banner>
    </main>
  );
}
