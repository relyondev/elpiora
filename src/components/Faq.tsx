"use client";

import { useId, useState, type ReactNode } from "react";
import { siteConfig } from "@/config/site";
import { PlusIcon } from "./ui/Icon";
import { Reveal } from "./ui/Reveal";
import { SectionIntro } from "./ui/SectionIntro";

type Item = { q: string; a: ReactNode };

function buildItems(): Item[] {
  const { contact, location } = siteConfig;
  const hasChannel = Boolean(contact.whatsappNumber || contact.bookingUrl);

  return [
    {
      q: "Bagaimana cara membuat janji?",
      a: hasChannel ? (
        <p>
          Anda dapat menghubungi kami melalui tombol <strong>Buat Janji</strong> di halaman ini. Tim kami akan membantu mencocokkan jadwal yang
          tersedia dan menjawab pertanyaan awal Anda.
        </p>
      ) : (
        <p>
          Pemesanan akan dapat dilakukan melalui WhatsApp atau tautan pemesanan di halaman ini. Kanal tersebut sedang kami siapkan — informasi
          lengkapnya akan segera tersedia di bagian <a href="#kontak" className="underline decoration-gold underline-offset-4">Kontak</a>.
        </p>
      ),
    },
    {
      q: "Apa yang perlu dipersiapkan sebelum sesi?",
      a: (
        <p>
          Kenakan pakaian yang nyaman dan memudahkan bergerak. Jika ada, bawa hasil pemeriksaan, catatan medis, atau rujukan sebelumnya yang
          berkaitan dengan keluhan Anda. Datang beberapa menit lebih awal juga membantu sesi berjalan lebih tenang.
        </p>
      ),
    },
    {
      q: "Apakah perlu konsultasi terlebih dahulu?",
      a: (
        <p>
          Sesi pertama umumnya diawali dengan konsultasi dan asesmen, agar fisioterapis dapat memahami kondisi Anda sebelum menyusun program.
          Untuk pertanyaan seputar kebutuhan rujukan, silakan hubungi tim kami.
        </p>
      ),
    },
    {
      q: "Bagaimana mengetahui layanan yang sesuai?",
      a: (
        <p>
          Anda tidak perlu menentukannya sendiri. Ceritakan keluhan dan tujuan Anda saat konsultasi, dan fisioterapis akan membantu menjelaskan
          pilihan yang tersedia. Bila keluhan terasa berat, muncul tiba-tiba, atau Anda ragu, sebaiknya konsultasikan juga dengan dokter.
        </p>
      ),
    },
    {
      q: "Di mana lokasi ELPIORA?",
      a: location.address ? (
        <p>
          {location.address}
          {location.mapsUrl ? (
            <>
              {" "}
              —{" "}
              <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-gold underline-offset-4">
                lihat di peta<span className="sr-only"> (membuka di tab baru)</span>
              </a>
            </>
          ) : null}
        </p>
      ) : (
        <p>Informasi alamat dan lokasi klinik sedang kami siapkan dan akan diumumkan di halaman ini.</p>
      ),
    },
  ];
}

function FaqItem({ item, defaultOpen }: { item: Item; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(Boolean(defaultOpen));
  const id = useId();
  const buttonId = `${id}-q`;
  const panelId = `${id}-a`;

  return (
    <li className="border-b border-deep/15">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="group flex min-h-16 w-full items-center justify-between gap-6 py-6 text-left"
        >
          <span className="font-serif text-[clamp(1.3rem,1.15rem+0.6vw,1.65rem)] leading-snug font-semibold text-deep transition-colors group-hover:text-teal-text">
            {item.q}
          </span>
          <span
            className={`inline-flex size-10 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,border-color] duration-300 ease-brand ${
              open ? "rotate-45 border-deep bg-deep text-paper" : "border-deep/25 text-deep"
            }`}
            aria-hidden="true"
          >
            <PlusIcon className="size-4" />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows] duration-400 ease-brand ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        inert={!open}
      >
        <div className="overflow-hidden">
          <div className="max-w-[60ch] pb-7 text-[0.9375rem] leading-relaxed text-ink">{item.a}</div>
        </div>
      </div>
    </li>
  );
}

export function Faq() {
  const items = buildItems();

  return (
    <section id="faq" tabIndex={-1} aria-labelledby="faq-title" className="bg-mint-100 py-24 outline-none md:py-32">
      <div className="shell grid-12 gap-y-12">
        <Reveal className="col-span-4 md:col-span-8 lg:col-span-4">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+48px)]">
            <SectionIntro index="06" eyebrow="FAQ" titleId="faq-title" title="Pertanyaan yang Sering Diajukan." />
            <p className="mt-6 max-w-[34ch] text-[0.9375rem] leading-relaxed text-ink">
              Informasi di bawah bersifat umum. Untuk pertanyaan tentang kondisi Anda secara spesifik, fisioterapis akan membantu saat
              konsultasi.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100} className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-6">
          <ul className="border-t border-deep/15">
            {items.map((item, i) => (
              <FaqItem key={item.q} item={item} defaultOpen={i === 0} />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
