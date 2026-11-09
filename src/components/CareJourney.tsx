import { Reveal } from "./ui/Reveal";
import { SectionIntro } from "./ui/SectionIntro";

const steps = [
  {
    title: "Konsultasi Awal",
    body: "Ceritakan keluhan, riwayat, dan tujuan Anda. Bersama-sama kita menentukan langkah awal yang sesuai.",
  },
  {
    title: "Asesmen Gerak",
    body: "Fisioterapis mengamati postur, mobilitas, kekuatan, dan pola gerak untuk memahami kondisi Anda lebih jelas.",
  },
  {
    title: "Rencana Terapi",
    body: "Program disusun sesuai kebutuhan Anda — dapat mencakup sesi di klinik dan latihan pendukung untuk keseharian.",
  },
  {
    title: "Evaluasi Perkembangan",
    body: "Progres ditinjau secara berkala agar program tetap relevan dengan perubahan kondisi dan tujuan Anda.",
  },
];

/**
 * Deep-teal anchor section. The steps are joined by a dotted "spine" line —
 * the logomark's vertebra motif reinterpreted as a path of progress.
 */
export function CareJourney() {
  return (
    <section aria-labelledby="alur-title" className="on-dark relative isolate overflow-hidden bg-deep py-24 text-mint-100 md:py-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-1/3 left-1/2 h-[80%] w-[70%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(44_152_160/0.35),rgb(44_152_160/0))]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgb(223_242_231/0.025)_0_1px,transparent_1px_120px)]" />
      </div>

      <div className="shell">
        <div className="grid-12 gap-y-8">
          <Reveal className="col-span-4 md:col-span-10 lg:col-span-7">
            <SectionIntro index="03" eyebrow="Alur Perawatan" titleId="alur-title" title="Langkah yang Jelas, Perawatan yang Personal." />
          </Reveal>
          <Reveal delay={100} className="col-span-4 self-end md:col-span-8 lg:col-span-4 lg:col-start-9">
            <p className="text-[0.9375rem] leading-relaxed text-mint-200">
              Gambaran umum alur perawatan di ELPIORA. Detail setiap tahap dapat berbeda sesuai kondisi dan kebutuhan masing-masing.
            </p>
          </Reveal>
        </div>

        <ol className="relative mt-16 grid gap-12 md:mt-24 lg:grid-cols-4 lg:gap-8">
          {/* connecting dotted line */}
          <span
            aria-hidden="true"
            className="absolute top-6 bottom-6 left-6 border-l-2 border-dotted border-gold/55 lg:right-[calc(25%-24px)] lg:bottom-auto lg:border-t-2 lg:border-l-0"
          />
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 90} className="relative grid grid-cols-[48px_1fr] gap-6 lg:block">
              <span className="relative z-10 inline-flex size-12 items-center justify-center rounded-full border border-gold/60 bg-deep font-serif text-lg text-gold">
                {i + 1}
              </span>
              <div className="lg:mt-10 lg:pr-4">
                <h3 className="t-h3">{step.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-mint-200">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
