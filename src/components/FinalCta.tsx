import { getBookingAction } from "@/lib/booking";
import { DisabledButton, LinkButton } from "./ui/Button";
import { MovementCurve, SpineDots } from "./ui/Ornaments";
import { Reveal } from "./ui/Reveal";

export function FinalCta() {
  const booking = getBookingAction();

  return (
    <section aria-labelledby="cta-title" className="py-6 md:py-10">
      <div className="shell">
        <Reveal>
          <div className="on-dark relative isolate overflow-hidden rounded-[28px] bg-deep px-6 py-20 text-center md:rounded-[36px] md:px-12 md:py-28">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -bottom-1/2 left-1/2 h-full w-[120%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(95_183_184/0.42),rgb(187_220_198/0.12)_60%,rgb(187_220_198/0))]" />
              <MovementCurve className="absolute inset-0 size-full opacity-35" />
            </div>

            <SpineDots vertical={false} count={7} className="mx-auto mb-10 h-3 w-24 text-gold" />

            <h2 id="cta-title" className="t-h2 mx-auto max-w-[16ch]">
              Mulai Kembali Bergerak dengan Lebih Percaya Diri.
            </h2>
            <p className="mx-auto mt-6 max-w-[42ch] text-[1.0625rem] leading-relaxed text-mint-200">
              Ceritakan kebutuhan Anda, dan kami akan membantu menemukan langkah awal yang sesuai.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {booking.configured ? (
                <LinkButton href={booking.href} external variant="primary-on-dark">
                  Hubungi ELPIORA
                </LinkButton>
              ) : (
                <DisabledButton variant="primary-on-dark" describedBy="cta-pending">
                  Hubungi ELPIORA
                </DisabledButton>
              )}
              <LinkButton href="#layanan" variant="secondary-on-dark" arrow={false}>
                Lihat Layanan
              </LinkButton>
            </div>
            {!booking.configured ? (
              <p id="cta-pending" className="mt-5 text-sm text-mint-200">
                Kanal WhatsApp sedang disiapkan dan akan segera aktif.
              </p>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
