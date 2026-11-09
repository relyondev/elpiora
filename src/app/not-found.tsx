import { LinkButton } from "@/components/ui/Button";
import { MovementCurve } from "@/components/ui/Ornaments";
import { BOOKING_PATH } from "@/config/site";

export default function NotFound() {
  return (
    <main id="konten" className="relative isolate overflow-hidden pt-[calc(var(--header-h)+80px)] pb-24">
      <MovementCurve draw className="pointer-events-none absolute inset-0 -z-10 size-full opacity-60" />
      <div className="shell max-w-3xl text-center">
        <p className="t-eyebrow">404 · Halaman tidak ditemukan</p>
        <h1 className="t-display mt-6">
          Sepertinya Anda <span className="accent">salah langkah.</span>
        </h1>
        <p className="t-lead mx-auto mt-6 max-w-[38ch]">Tidak apa-apa — mari kembali ke jalur yang tepat.</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <LinkButton href="/">Kembali ke Beranda</LinkButton>
          <LinkButton href={BOOKING_PATH} variant="secondary" arrow={false}>
            Buat Janji
          </LinkButton>
        </div>
      </div>
    </main>
  );
}
