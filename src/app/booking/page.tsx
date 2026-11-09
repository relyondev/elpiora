import Link from "next/link";
import { Suspense } from "react";
import { BookingForm } from "@/components/booking/BookingForm";
import { PageHero } from "@/components/PageHero";
import { LinkButton } from "@/components/ui/Button";
import { ChatIcon, HomeIcon, PinIcon, WorkplaceIcon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { siteConfig } from "@/config/site";
import { bookingHref, whatsappHref } from "@/lib/booking";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "Booking Fisioterapi ELPIORA | Klinik & Home Visit",
  "Ajukan janji konsultasi fisioterapi ELPIORA untuk klinik atau Home Visit. Tim kami akan menghubungi Anda untuk konfirmasi jadwal.",
  "/booking",
);

const workflow = [
  "Anda mengirim permintaan",
  "Kecocokan layanan dan area dipastikan",
  "Jadwal ditentukan",
  "Biaya dikonfirmasi secara transparan",
  "Kunjungan atau sesi berlangsung",
  "Tindak lanjut, dengan persetujuan Anda",
];

export default function BookingPage() {
  const wa = whatsappHref();
  const paths = [
    { label: "Klinik", note: "Jadwal dan lokasi dikonfirmasi tim.", href: bookingHref(undefined, "clinic"), Icon: PinIcon },
    { label: "Home Visit", note: "Area dan ketersediaan dikonfirmasi tim.", href: bookingHref(undefined, "home"), Icon: HomeIcon },
    { label: "Corporate & Event", note: "Isi formulir proposal atau kolaborasi.", href: "/corporate-wellness", Icon: WorkplaceIcon },
  ];

  return (
    <main id="konten">
      <PageHero
        eyebrow="Booking"
        title={
          <>
            Your First Step <span className="accent">Starts Here.</span>
          </>
        }
        lead={<p>Pilih cara konsultasi yang sesuai dengan kebutuhan Anda. Kami akan membantu mengonfirmasi jenis layanan, ketersediaan jadwal, lokasi, dan informasi kunjungan.</p>}
        actions={
          <>
            <LinkButton href="#formulir" variant="champagne">
              Isi Formulir Booking
            </LinkButton>
            {wa ? (
              <LinkButton href={wa} external variant="secondary-on-dark">
                Chat via WhatsApp
              </LinkButton>
            ) : null}
          </>
        }
        image={siteConfig.images.contactHero}
        imageVariant="studio"
        note={{ label: "Setelah Anda mengirim", text: "Jadwal belum pasti sampai tim menghubungi Anda", Icon: ChatIcon }}
      />

      <section id="formulir" aria-labelledby="formulir-title" className="scroll-mt-[var(--header-h)] bg-mint-100 py-20 md:py-28">
        <div className="shell grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionIntro eyebrow="Formulir booking" titleId="formulir-title" title={<>Permintaan <span className="accent">Janji Temu</span></>} />
              <p className="mt-5 max-w-[52ch] text-[0.9375rem] leading-relaxed text-body">
                Cukup data minimum. Detail medis rinci sebaiknya dibahas langsung dengan fisioterapis, bukan ditulis di formulir.
              </p>
            </Reveal>
            <div className="mt-8">
              <Suspense fallback={null}>
                <BookingForm />
              </Suspense>
            </div>
          </div>

          <div className="space-y-5 lg:col-span-5 lg:pt-[7.5rem]">
            <Reveal delay={100}>
              <div className="rounded-[24px] bg-paper p-6 md:p-7">
                <h2 className="t-h3 !text-[1.5rem]">Pilih jalur Anda</h2>
                <ul className="mt-5 space-y-3">
                  {paths.map(({ label, note, href, Icon }) => (
                    <li key={label}>
                      <Link href={href} className="flex items-center gap-4 rounded-2xl border border-line p-4 transition-colors hover:border-deep/40 hover:bg-mint-100/50">
                        <span className="icon-amber size-11" aria-hidden="true">
                          <Icon className="size-5" strokeWidth={1.8} />
                        </span>
                        <span>
                          <span className="block font-semibold text-deep">{label}</span>
                          <span className="block text-sm text-muted-text">{note}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="rounded-[24px] bg-paper p-6 md:p-7">
                <h2 className="t-h3 !text-[1.5rem]">Alur booking</h2>
                <ol className="mt-5 space-y-3">
                  {workflow.map((w, i) => (
                    <li key={w} className="flex gap-3 text-[0.9375rem] text-body">
                      <span className="font-serif text-lg font-bold text-accent" aria-hidden="true">
                        {i + 1}
                      </span>
                      {w}
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="rounded-[24px] border border-gold/50 bg-surface p-6 md:p-7">
                <p className="font-serif text-xl font-bold text-deep">Butuh penanganan segera?</p>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  Formulir ini bukan layanan gawat darurat. Untuk cedera berat, nyeri hebat yang muncul tiba-tiba, atau kondisi darurat lainnya, hubungi{" "}
                  <strong className="text-deep">119</strong> atau segera ke IGD terdekat.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
