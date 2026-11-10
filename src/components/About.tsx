import { siteConfig } from "@/config/site";
import { ImagePlate } from "./ui/ImagePlate";
import { Reveal } from "./ui/Reveal";
import { SpineDots } from "./ui/Ornaments";

const principles = [
  { title: "Mendengarkan lebih dulu", body: "Memahami cerita dan keseharian Anda sebelum memberi arahan." },
  { title: "Menjelaskan dengan jelas", body: "Anda memahami apa yang dilakukan, dan mengapa." },
  { title: "Bergerak bersama", body: "Program dijalani sebagai kerja sama, bukan instruksi satu arah." },
];

export function About() {
  return (
    <section aria-labelledby="tentang-title" className="bg-paper py-24 md:py-32">
      <div className="shell grid-12 items-center gap-y-14">
        <Reveal className="relative col-span-4 md:col-span-6 lg:col-span-5">
          <ImagePlate
            image={siteConfig.images.about}
            variant="conversation"
            sizes="(min-width: 1024px) 42vw, (min-width: 768px) 50vw, 100vw"
            className="aspect-[4/5] w-full rounded-t-[28px] rounded-br-[28px] rounded-bl-[120px]"
          />
          <SpineDots className="absolute bottom-10 -right-5 hidden h-40 text-gold md:block" />
        </Reveal>

        <div className="col-span-4 md:col-span-6 lg:col-span-6 lg:col-start-7">
          <Reveal>
            <p className="t-eyebrow flex items-center gap-4">
              <span className="hairline w-10" aria-hidden="true" />
              <span>Cerita Kami</span>
            </p>
            <h2 id="tentang-title" className="t-h2 mt-6">
              Bukan Sekadar Mengurangi Keluhan. <em className="accent">Kami Mendukung Anda Kembali Bergerak.</em>
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-8 space-y-5 text-[1.0625rem] leading-[1.75] text-body">
            <p>
              Di ELPIORA, pemulihan tidak hanya soal meredakan rasa tidak nyaman, tetapi tentang kembali menjalani hal-hal yang berarti bagi
              Anda, misalnya berjalan tanpa ragu atau kembali berolahraga.
            </p>
            <p>
              Kami memadukan ketelitian klinis dengan suasana yang tenang dan ramah, agar setiap kunjungan terasa jelas, nyaman, dan
              manusiawi.
            </p>
          </Reveal>

          <Reveal as="ul" delay={180} className="mt-10 divide-y divide-line border-y border-line">
            {principles.map((p) => (
              <li key={p.title} className="grid gap-1 py-5 sm:grid-cols-[14rem_1fr] sm:gap-6">
                <span className="font-serif text-xl font-semibold text-deep">{p.title}</span>
                <span className="text-[0.9375rem] leading-relaxed text-muted-text">{p.body}</span>
              </li>
            ))}
          </Reveal>

          <p className="t-script mt-10 text-3xl text-teal-text">{siteConfig.brand.tagline}</p>
        </div>
      </div>
    </section>
  );
}
