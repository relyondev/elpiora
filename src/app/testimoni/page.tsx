import { notFound } from "next/navigation";
import { FinalCta } from "@/components/FinalCta";
import { ChecklistSection } from "@/components/ContentSections";
import { PageHero } from "@/components/PageHero";
import { TestimonialList } from "@/components/Testimonials";
import { LinkButton } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { BOOKING_PATH, siteConfig } from "@/config/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("Testimoni", "Cerita pasien ELPIORA, dipublikasikan hanya dengan izin tertulis.", "/testimoni");

const policy = [
  "Setiap testimoni dipublikasikan hanya dengan izin tertulis dari pasien.",
  "Kami tidak mengubah isi cerita menjadi klaim hasil yang lebih kuat.",
  "Kami tidak menampilkan penilaian bintang atau angka yang tidak dapat diverifikasi.",
  "Pengalaman setiap orang dapat berbeda, dan testimoni bukan jaminan hasil.",
];

export default function TestimoniPage() {
  // antislop R-18: no testimonials section until real, consented testimonials exist
  if (siteConfig.testimonials.length === 0) notFound();

  return (
    <main id="konten">
      <PageHero
        note={{ label: "Kebijakan kami", text: "Hanya cerita dengan izin tertulis pasien", Icon: CheckIcon }}
        eyebrow="Testimoni"
        title={
          <>
            Cerita dari <span className="accent">Pasien Kami.</span>
          </>
        }
        lead={<p>Pengalaman nyata dari orang-orang yang kembali bergerak bersama ELPIORA, dibagikan dengan izin mereka.</p>}
        actions={<LinkButton variant="champagne" href={BOOKING_PATH}>Buat Janji</LinkButton>}
        image={siteConfig.images.about}
      />

      <section aria-labelledby="cerita-title" className="py-24 md:py-32">
        <div className="shell">
          <Reveal className="max-w-3xl">
            <SectionIntro index="01" eyebrow="Kata Pasien" titleId="cerita-title" title="Cerita Pemulihan." />
          </Reveal>
          <div className="mt-12">
            <TestimonialList />
          </div>
        </div>
      </section>

      <section aria-labelledby="kebijakan-title" className="bg-paper py-24 md:py-28">
        <div className="shell grid-12 gap-y-10">
          <Reveal className="col-span-4 md:col-span-8 lg:col-span-5">
            <SectionIntro index="02" eyebrow="Kebijakan" titleId="kebijakan-title" title={<>Testimoni yang <span className="accent">Jujur.</span></>} />
          </Reveal>
          <Reveal as="ul" delay={100} className="col-span-4 divide-y divide-line border-y border-line md:col-span-8 lg:col-span-6 lg:col-start-7">
            {policy.map((p) => (
              <li key={p} className="flex gap-4 py-5 text-[0.9375rem] leading-relaxed text-body">
                <CheckIcon className="size-6 shrink-0 text-teal-text" />
                {p}
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <ChecklistSection
        eyebrow="Bagikan Cerita"
        titleId="bagikan-title"
        title={
          <>
            Ingin Berbagi <span className="accent">Pengalaman Anda?</span>
          </>
        }
        intro="Cerita Anda dapat membantu orang lain yang sedang mempertimbangkan fisioterapi. Begini prosesnya:"
        items={[
          { title: "Sampaikan kepada tim kami", body: "Ceritakan pengalaman Anda saat sesi atau melalui kontak resmi ELPIORA." },
          { title: "Tinjau bersama", body: "Kami menyiapkan kutipan singkat dan meminta Anda meninjau isinya." },
          { title: "Persetujuan tertulis", body: "Testimoni hanya dipublikasikan setelah Anda memberikan izin tertulis." },
          { title: "Pilih cara ditampilkan", body: "Anda dapat memilih nama lengkap, inisial, atau anonim." },
        ]}
      />

      <FinalCta />
    </main>
  );
}
