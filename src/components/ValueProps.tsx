import { AssessmentIcon, PlanIcon, ProgressIcon } from "./ui/Icon";
import { Reveal } from "./ui/Reveal";
import { SectionIntro } from "./ui/SectionIntro";

const values = [
  {
    title: "Asesmen yang Menyeluruh",
    body: "Kami berupaya memahami pola gerak, keluhan, dan kebiasaan sehari-hari yang mungkin berpengaruh — bukan hanya titik yang terasa tidak nyaman.",
    Icon: AssessmentIcon,
  },
  {
    title: "Program yang Dipersonalisasi",
    body: "Latihan dan penanganan disusun sesuai kondisi, kemampuan, serta aktivitas yang ingin Anda jalani kembali.",
    Icon: PlanIcon,
  },
  {
    title: "Progres yang Terarah",
    body: "Perkembangan ditinjau secara berkala, sehingga program dapat disesuaikan dan Anda memahami setiap tahapnya.",
    Icon: ProgressIcon,
  },
];

export function ValueProps() {
  return (
    <section id="pendekatan" aria-labelledby="pendekatan-title" className="py-24 md:py-32">
      <div className="shell">
        <div className="grid-12 gap-y-8">
          <Reveal className="col-span-4 md:col-span-8 lg:col-span-7">
            <SectionIntro
              index="01"
              eyebrow="Pendekatan Kami"
              titleId="pendekatan-title"
              title={
                <>
                  Perawatan yang Memahami <em className="accent">Setiap Gerakan</em> Anda.
                </>
              }
            />
          </Reveal>
          <Reveal delay={120} className="col-span-4 self-end md:col-span-8 lg:col-span-4 lg:col-start-9">
            <p className="t-lead">
              Di ELPIORA, fisioterapi dimulai dengan mendengarkan. Kami ingin memahami keluhan, keseharian, dan tujuan Anda sebelum menyusun
              langkah perawatan.
            </p>
          </Reveal>
        </div>

        <ol className="mt-16 grid gap-10 md:mt-24 md:grid-cols-3 md:gap-8 lg:gap-12">
          {values.map(({ title, body, Icon }, i) => (
            <Reveal as="li" key={title} delay={i * 80} className={i === 1 ? "md:mt-16" : i === 2 ? "md:mt-32" : ""}>
              <div className="flex items-center justify-between border-t border-deep/15 pt-6">
                <span className="font-serif text-sm text-muted-text" aria-hidden="true">
                  0{i + 1} / 03
                </span>
                <Icon className="size-8 text-teal-500" />
              </div>
              <h3 className="t-h3 mt-8">{title}</h3>
              <p className="mt-4 max-w-[36ch] text-[0.9375rem] leading-relaxed text-body">{body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
