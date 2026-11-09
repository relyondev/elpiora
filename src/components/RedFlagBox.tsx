import { WarningIcon } from "./ui/Icon";
import { Reveal } from "./ui/Reveal";

export type RedFlagData = { title: string; intro: string; items: string[]; outro?: string };

/** "Kapan perlu evaluasi medis segera?" box (blueprint section B, global components). */
export function RedFlagBox({ data, id = "redflag-title" }: { data: RedFlagData; id?: string }) {
  return (
    <section aria-labelledby={id} className="py-10 md:py-14">
      <div className="shell">
        <Reveal>
          <div className="grid gap-6 rounded-[24px] border-2 border-error/45 bg-paper p-7 md:p-10 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-error/10 text-error" aria-hidden="true">
                <WarningIcon className="size-6" />
              </span>
              <h2 id={id} className="t-h3 mt-5">
                {data.title}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[0.9375rem] leading-relaxed text-body">{data.intro}</p>
              <ul className="mt-4 space-y-2">
                {data.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.9375rem] text-deep">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-error" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-body">
                {data.outro ?? "Dalam kondisi darurat, jangan menunggu jadwal fisioterapi. Hubungi layanan darurat 119 atau segera ke IGD terdekat."}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
