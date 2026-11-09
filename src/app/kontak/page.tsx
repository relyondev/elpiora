import { BookingForm } from "@/components/booking/BookingForm";
import { CareJourney } from "@/components/CareJourney";
import { Faq } from "@/components/Faq";
import { ContactCard } from "@/components/Location";
import { PageHero } from "@/components/PageHero";
import { LinkButton } from "@/components/ui/Button";
import { PlaceholderTag } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { siteConfig } from "@/config/site";
import { contactFaq } from "@/content/faq";
import { bookingHref, whatsappHref } from "@/lib/booking";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "Kontak & Buat Janji",
  "Ajukan janji konsultasi fisioterapi di ELPIORA melalui formulir online. Tim kami akan menghubungi Anda untuk konfirmasi jadwal.",
  "/kontak",
);

const quickSteps = [
  { title: "Kirim Permintaan", body: "Isi formulir di halaman ini dengan data dan jadwal yang Anda inginkan." },
  { title: "Konfirmasi", body: "Tim kami menghubungi Anda untuk memastikan tanggal, waktu, dan lokasi sesi." },
  { title: "Sesi Pertama", body: "Datang ke klinik — atau terima fisioterapis di rumah bila home visit tersedia." },
  { title: "Mulai Perawatan", body: "Asesmen dan rencana perawatan yang disusun untuk Anda." },
];

export default function KontakPage() {
  const wa = whatsappHref();

  return (
    <main id="konten">
      <PageHero
        eyebrow="Kontak"
        title={
          <>
            Buat Janji <span className="accent">Konsultasi.</span>
          </>
        }
        lead={<p>Ajukan janji, tanyakan layanan, atau diskusikan kebutuhan Anda. Kami siap membantu Anda bergerak lebih baik.</p>}
        actions={
          <>
            <LinkButton href="#formulir">Isi Formulir</LinkButton>
            {wa ? (
              <LinkButton href={wa} external variant="secondary" arrow={false}>
                Chat via WhatsApp
              </LinkButton>
            ) : null}
          </>
        }
        image={siteConfig.images.contactHero}
        imageVariant="studio"
      />

      <section id="formulir" aria-labelledby="formulir-title" className="scroll-mt-[calc(var(--header-h)+8px)] bg-mint-100 py-20 md:py-28">
        <div className="shell grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionIntro eyebrow="Formulir Janji" titleId="formulir-title" title={<>Permintaan <span className="accent">Janji Temu.</span></>} />
              <p className="mt-5 max-w-[52ch] text-[0.9375rem] leading-relaxed text-body">
                Isi formulir di bawah ini. Permintaan Anda belum menjadi janji yang terkonfirmasi sampai tim kami menghubungi Anda.
              </p>
            </Reveal>
            <div className="mt-8">
              <BookingForm />
            </div>
          </div>

          <div className="lg:col-span-5 lg:pt-[7.5rem]">
            <Reveal delay={100}>
              <ContactCard title="Hubungi Kami" />
            </Reveal>
            <Reveal delay={160} className="mt-5">
              <div className="rounded-[24px] border border-gold/50 bg-surface p-6 md:p-7">
                <p className="font-serif text-xl font-semibold text-deep">Butuh penanganan segera?</p>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  Formulir ini bukan layanan gawat darurat. Untuk cedera berat, nyeri hebat yang muncul tiba-tiba, atau kondisi darurat lainnya,
                  segera hubungi layanan gawat darurat <strong className="text-deep">119</strong> atau datang ke IGD terdekat.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CareJourney
        index="02"
        eyebrow="Alur Pemesanan"
        title={
          <>
            Buat Janji dalam <span className="accent">Empat Langkah.</span>
          </>
        }
        intro="Dari permintaan hingga sesi pertama — sederhana dan jelas."
        steps={quickSteps}
        titleId="alur-pesan-title"
      />

      <Faq items={contactFaq} index="03" tone="paper" />

      <section aria-labelledby="korporat-title" className="pb-8">
        <div className="shell">
          <Reveal>
            <div className="grid gap-6 rounded-[28px] bg-[linear-gradient(110deg,var(--elpiora-mint-100),var(--elpiora-surface))] p-8 md:grid-cols-12 md:items-center md:p-12">
              <div className="md:col-span-7">
                <p className="t-eyebrow">Korporat & Event</p>
                <h2 id="korporat-title" className="t-h3 mt-3 !text-[clamp(1.75rem,1.4rem+1vw,2.4rem)]">
                  Fisioterapi untuk <span className="accent">Tempat Kerja & Event.</span>
                </h2>
                <p className="mt-4 max-w-[52ch] text-[0.9375rem] leading-relaxed text-body">
                  Program kesehatan kerja, ergonomi, dan pendampingan event olahraga untuk perusahaan atau komunitas Anda.
                </p>
                <PlaceholderTag className="mt-4">Program menunggu konfirmasi</PlaceholderTag>
              </div>
              <div className="md:col-span-5 md:text-right">
                <LinkButton href={bookingHref("korporat")} variant="secondary">
                  Ajukan Pertanyaan Korporat
                </LinkButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
