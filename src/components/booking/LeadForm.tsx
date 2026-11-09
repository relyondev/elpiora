"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { whatsappHref } from "@/lib/booking";
import { todayInJakarta } from "@/lib/booking-request";
import { ENQUIRY_FIELDS, enquirySummary, validateEnquiry, type EnquiryKind, type EnquiryValues } from "@/lib/enquiry";
import { ArrowIcon, ChatIcon } from "../ui/Icon";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "delivered" }
  | { kind: "whatsapp"; href: string }
  | { kind: "unavailable" }
  | { kind: "error" };

const inputBase =
  "block w-full min-h-12 rounded-xl border bg-paper px-4 text-[0.9375rem] text-deep placeholder:text-muted-text/80 transition-[border-color,box-shadow] duration-200 focus:border-teal-text focus:outline-none focus:ring-4 focus:ring-teal-500/15";
const selectArrow =
  "appearance-none bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23123F43' stroke-width='1.5'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")] bg-[length:18px] bg-[right_14px_center] bg-no-repeat pr-11";

/** Lead form for corporate proposals and event collaborations. Same delivery outcomes as the booking form. */
export function LeadForm({ kind }: { kind: EnquiryKind }) {
  const uid = useId();
  const fields = ENQUIRY_FIELDS[kind];
  const [values, setValues] = useState<EnquiryValues>({});
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [today, setToday] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => setToday(todayInJakarta()), []);
  useEffect(() => {
    if (status.kind !== "idle" && status.kind !== "submitting") resultRef.current?.focus();
  }, [status.kind]);

  const set = (name: string, v: string) => {
    setValues((p) => ({ ...p, [name]: v }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: "" }));
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validateEnquiry(kind, values, consent, today || todayInJakarta());
    setErrors(found);
    const first = [...fields.map((f) => f.name), "consent"].find((n) => found[n]);
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[data-field="${first}"]`)?.focus();
      return;
    }
    setStatus({ kind: "submitting" });
    const wa = whatsappHref(enquirySummary(kind, values));
    try {
      const res = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ kind, values, consent, website }) });
      const data = (await res.json().catch(() => ({}))) as { delivered?: boolean; fields?: Record<string, string> };
      if (res.status === 422 && data.fields) {
        setErrors(data.fields);
        setStatus({ kind: "idle" });
      } else if (res.ok && data.delivered) setStatus({ kind: "delivered" });
      else if (wa) setStatus({ kind: "whatsapp", href: wa });
      else if (res.ok) setStatus({ kind: "unavailable" });
      else setStatus({ kind: "error" });
    } catch {
      setStatus(wa ? { kind: "whatsapp", href: wa } : { kind: "error" });
    }
  }

  if (status.kind === "delivered" || status.kind === "whatsapp" || status.kind === "unavailable") {
    return (
      <div ref={resultRef} tabIndex={-1} role="status" aria-live="polite" className="rounded-[24px] bg-paper p-7 outline-none md:p-10">
        {status.kind === "delivered" ? (
          <>
            <h3 className="t-h3">Permintaan Anda sudah diterima.</h3>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-body">Tim ELPIORA akan menghubungi Anda untuk membahas kebutuhan dan kesiapan program. Ini belum merupakan penawaran resmi.</p>
          </>
        ) : status.kind === "whatsapp" ? (
          <>
            <h3 className="t-h3">Satu langkah lagi: kirim lewat WhatsApp.</h3>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-body">Ringkasan permintaan Anda sudah disiapkan. Tekan tombol di bawah untuk membuka WhatsApp dan mengirimkannya ke tim ELPIORA.</p>
            <a href={status.href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-12 items-center gap-3 rounded-full bg-deep px-7 text-[0.9375rem] font-semibold text-paper hover:bg-ink">
              <ChatIcon className="size-5" />
              Lanjutkan ke WhatsApp
              <ArrowIcon className="size-4" />
              <span className="sr-only"> (membuka di tab baru)</span>
            </a>
          </>
        ) : (
          <>
            <h3 className="t-h3">Permintaan Anda belum dapat terkirim.</h3>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-body">
              Formulir ini belum terhubung ke tim kami, sehingga data Anda <strong>tidak terkirim</strong>. Silakan coba lagi nanti atau lihat halaman{" "}
              <Link href="/contact" className="font-semibold underline decoration-gold underline-offset-4">
                Contact
              </Link>
              .
            </p>
          </>
        )}
        <button type="button" onClick={() => setStatus({ kind: "idle" })} className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-deep underline decoration-gold underline-offset-[6px]">
          Ubah atau kirim permintaan lain
        </button>
      </div>
    );
  }

  const errorCount = Object.values(errors).filter(Boolean).length;
  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="rounded-[24px] bg-paper p-6 md:p-9">
      <p className="text-sm text-muted-text">
        Kolom bertanda <span className="text-error">*</span> wajib diisi. Ini permintaan awal dan belum merupakan penawaran resmi.
      </p>
      {errorCount > 0 ? (
        <div role="alert" className="mt-5 rounded-xl border border-error/30 bg-error/5 px-4 py-3 text-sm font-medium text-error">
          Ada {errorCount} isian yang perlu diperbaiki.
        </div>
      ) : null}

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {fields.map((f) => {
          const id = `${uid}-${f.name}`;
          const err = errors[f.name];
          const describedBy = [f.hint ? `${id}-hint` : null, err ? `${id}-error` : null].filter(Boolean).join(" ") || undefined;
          const common = {
            id,
            name: f.name,
            "data-field": f.name,
            "aria-invalid": Boolean(err),
            "aria-describedby": describedBy,
            required: f.required,
            value: values[f.name] ?? "",
          };
          return (
            <div key={f.name} className={f.wide ? "md:col-span-2" : ""}>
              <label htmlFor={id} className="flex items-baseline gap-1.5 text-sm font-semibold text-deep">
                {f.label}
                {f.required ? (
                  <span className="text-error" aria-hidden="true">
                    *
                  </span>
                ) : (
                  <span className="text-xs font-medium text-muted-text">(opsional)</span>
                )}
              </label>
              {f.hint ? (
                <p id={`${id}-hint`} className="mt-1 text-xs text-muted-text">
                  {f.hint}
                </p>
              ) : null}
              <div className="mt-2">
                {f.type === "textarea" ? (
                  <textarea {...common} rows={4} onChange={(e) => set(f.name, e.target.value)} className={`${inputBase} min-h-28 resize-y py-3 ${err ? "border-error" : "border-field"}`} placeholder={f.placeholder} />
                ) : f.type === "select" ? (
                  <select {...common} onChange={(e) => set(f.name, e.target.value)} className={`${inputBase} ${selectArrow} ${err ? "border-error" : "border-field"}`}>
                    <option value="" disabled>
                      Pilih salah satu
                    </option>
                    {f.options?.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    {...common}
                    type={f.type}
                    min={f.type === "date" ? today || undefined : f.type === "number" ? 1 : undefined}
                    inputMode={f.type === "number" ? "numeric" : undefined}
                    autoComplete={f.type === "email" ? "email" : f.type === "tel" ? "tel" : undefined}
                    onChange={(e) => set(f.name, e.target.value)}
                    className={`${inputBase} ${err ? "border-error" : "border-field"}`}
                    placeholder={f.placeholder}
                  />
                )}
              </div>
              {err ? (
                <p id={`${id}-error`} className="mt-1.5 text-sm font-medium text-error">
                  {err}
                </p>
              ) : null}
            </div>
          );
        })}

        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor={`${uid}-website`}>Website</label>
          <input id={`${uid}-website`} type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </div>

        <div className="md:col-span-2">
          <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-body">
            <input
              type="checkbox"
              data-field="consent"
              checked={consent}
              onChange={(e) => {
                setConsent(e.target.checked);
                if (errors.consent) setErrors((p) => ({ ...p, consent: "" }));
              }}
              aria-invalid={Boolean(errors.consent)}
              className="mt-1 size-5 shrink-0 accent-[var(--elpiora-deep)]"
            />
            <span>
              Saya setuju data ini digunakan oleh ELPIORA untuk menghubungi saya, sesuai{" "}
              <Link href="/privacy-policy" className="font-semibold text-deep underline decoration-gold underline-offset-4">
                kebijakan privasi
              </Link>
              .<span className="text-error" aria-hidden="true"> *</span>
            </span>
          </label>
          {errors.consent ? <p className="mt-1.5 text-sm font-medium text-error">{errors.consent}</p> : null}
        </div>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={status.kind === "submitting"}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-deep px-8 text-[0.9375rem] font-semibold text-paper transition-colors hover:bg-ink disabled:cursor-wait disabled:opacity-70"
        >
          {status.kind === "submitting" ? "Mengirim..." : kind === "corporate" ? "Kirim Permintaan Proposal" : "Ajukan Kolaborasi"}
        </button>
      </div>
      {status.kind === "error" ? (
        <p role="alert" className="mt-5 rounded-xl border border-error/30 bg-error/5 px-4 py-3 text-sm font-medium text-error">
          Permintaan belum berhasil terkirim. Mohon periksa koneksi Anda dan coba lagi.
        </p>
      ) : null}
    </form>
  );
}
