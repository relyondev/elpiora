"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { siteConfig } from "@/config/site";
import {
  CHANNELS,
  EXTRA_SERVICE_OPTIONS,
  NOTES_MAX,
  TIME_SLOTS,
  VISIT_TYPES,
  bookingSummary,
  todayInJakarta,
  validateBooking,
  type BookingErrors,
  type BookingField,
  type BookingRequest,
} from "@/lib/booking-request";
import { whatsappHref } from "@/lib/booking";
import { ArrowIcon, ChatIcon } from "../ui/Icon";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "delivered"; summary: string }
  | { kind: "whatsapp"; summary: string; href: string }
  | { kind: "unavailable"; summary: string }
  | { kind: "error" };

const empty: BookingRequest = {
  name: "",
  phone: "",
  email: "",
  service: "",
  visitType: "klinik",
  area: "",
  channel: "whatsapp",
  date: "",
  time: "",
  notes: "",
  consent: false,
  website: "",
};

const fieldOrder: BookingField[] = ["name", "phone", "channel", "email", "service", "visitType", "area", "date", "time", "notes", "consent"];

const inputBase =
  "block w-full min-h-12 rounded-xl border bg-paper px-4 text-[0.9375rem] text-deep placeholder:text-muted-text/80 transition-[border-color,box-shadow] duration-200 focus:border-teal-text focus:outline-none focus:ring-4 focus:ring-teal-500/15";

function Field({
  id,
  label,
  required,
  hint,
  error,
  children,
  className = "",
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="flex items-baseline gap-1.5 text-sm font-semibold text-deep">
        {label}
        {required ? (
          <span className="text-error" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="text-xs font-medium text-muted-text">(opsional)</span>
        )}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="mt-1 text-xs text-muted-text">
          {hint}
        </p>
      ) : null}
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm font-medium text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function BookingForm() {
  const uid = useId();
  const id = (f: string) => `${uid}-${f}`;
  const [values, setValues] = useState<BookingRequest>(empty);
  const [errors, setErrors] = useState<BookingErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [today, setToday] = useState<string>("");
  const statusRef = useRef<HTMLDivElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Pre-select from ?service=<id>&type=clinic|home (links from service, condition and Home Visit pages)
  // and set the earliest selectable date.
  const searchParams = useSearchParams();
  useEffect(() => {
    setToday(todayInJakarta());
    const service = searchParams.get("service");
    const type = searchParams.get("type");
    setValues((v) => ({
      ...v,
      service: service && (siteConfig.services.some((s) => s.id === service) || service === "lainnya") ? service : v.service,
      visitType: type === "home" ? "rumah" : type === "clinic" ? "klinik" : v.visitType,
    }));
  }, [searchParams]);

  useEffect(() => {
    if (status.kind === "error") errorRef.current?.focus();
    else if (status.kind !== "idle" && status.kind !== "submitting") statusRef.current?.focus();
  }, [status.kind]);

  function update<K extends keyof BookingRequest>(key: K, value: BookingRequest[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key as BookingField]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function describedBy(f: BookingField, hint = false) {
    return [hint ? `${id(f)}-hint` : null, errors[f] ? `${id(f)}-error` : null].filter(Boolean).join(" ") || undefined;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validateBooking(values, today || todayInJakarta());
    setErrors(found);
    const first = fieldOrder.find((f) => found[f]);
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[data-field="${first}"]`)?.focus();
      return;
    }

    setStatus({ kind: "submitting" });
    const summary = bookingSummary(values);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; delivered?: boolean; fields?: BookingErrors };

      if (res.status === 422 && data.fields) {
        setErrors(data.fields);
        setStatus({ kind: "idle" });
        return;
      }

      const wa = whatsappHref(bookingSummary(values, { includeNotes: false }));
      if (res.ok && data.delivered) setStatus({ kind: "delivered", summary });
      else if (wa) setStatus({ kind: "whatsapp", summary, href: wa });
      else if (res.ok) setStatus({ kind: "unavailable", summary });
      else setStatus({ kind: "error" });
    } catch {
      const wa = whatsappHref(bookingSummary(values, { includeNotes: false }));
      setStatus(wa ? { kind: "whatsapp", summary, href: wa } : { kind: "error" });
    }
  }

  const done = status.kind === "delivered" || status.kind === "whatsapp" || status.kind === "unavailable";

  if (done) {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" aria-live="polite" className="rounded-[24px] bg-paper p-7 outline-none md:p-10">
        {status.kind === "delivered" ? (
          <>
            <p className="t-eyebrow">Permintaan terkirim</p>
            <h3 className="t-h3 mt-3">Terima kasih, {values.name.trim().split(" ")[0]}.</h3>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-body">
              Permintaan Anda sudah diterima. Jadwal belum dikonfirmasi sampai tim ELPIORA menghubungi Anda.
            </p>
          </>
        ) : status.kind === "whatsapp" ? (
          <>
            <p className="t-eyebrow">Satu langkah lagi</p>
            <h3 className="t-h3 mt-3">Kirim permintaan Anda melalui WhatsApp.</h3>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-body">
              Ringkasan janji Anda sudah kami siapkan. Catatan keluhan sengaja tidak ikut dikirim lewat tautan, jadi ceritakan keluhan Anda langsung
              di percakapan WhatsApp.
            </p>
            <a
              href={status.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex min-h-12 items-center gap-3 rounded-full bg-deep px-7 text-[0.9375rem] font-semibold text-paper hover:bg-ink"
            >
              <ChatIcon className="size-5" />
              Lanjutkan ke WhatsApp
              <ArrowIcon className="arrow-nudge size-4" />
              <span className="sr-only"> (membuka di tab baru)</span>
            </a>
          </>
        ) : (
          <>
            <p className="t-eyebrow">Kanal pemesanan belum aktif</p>
            <h3 className="t-h3 mt-3">Maaf, permintaan Anda belum dapat terkirim.</h3>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-body">
              Formulir ini sedang disiapkan dan belum terhubung ke tim kami, sehingga data Anda <strong>tidak terkirim</strong>. Silakan coba
              lagi nanti. Informasi kontak akan segera tersedia di halaman ini.
            </p>
          </>
        )}

        <details className="mt-8 rounded-xl border border-line bg-surface p-4">
          <summary className="cursor-pointer text-sm font-semibold text-deep">Lihat ringkasan permintaan</summary>
          <pre className="mt-3 font-sans text-sm leading-relaxed whitespace-pre-wrap text-body">{status.summary}</pre>
        </details>

        <button
          type="button"
          onClick={() => setStatus({ kind: "idle" })}
          className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-deep underline decoration-gold underline-offset-[6px]"
        >
          Ubah atau kirim permintaan lain
        </button>
      </div>
    );
  }

  const errorCount = Object.values(errors).filter(Boolean).length;
  const visitHome = values.visitType === "rumah";

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate aria-describedby={`${uid}-intro`} className="rounded-[24px] bg-paper p-6 md:p-9">
      <p id={`${uid}-intro`} className="text-sm text-muted-text">
        Kolom bertanda <span className="text-error">*</span> wajib diisi. Tim kami akan menghubungi Anda untuk mengonfirmasi jadwal.
      </p>

      {errorCount > 0 ? (
        <div role="alert" className="mt-5 rounded-xl border border-error/30 bg-error/5 px-4 py-3 text-sm font-medium text-error">
          Ada {errorCount} isian yang perlu diperbaiki.
        </div>
      ) : null}

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <Field id={id("name")} label="Nama lengkap" required error={errors.name}>
          <input
            id={id("name")}
            data-field="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy("name")}
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            className={`${inputBase} ${errors.name ? "border-error" : "border-field"}`}
            placeholder="Nama sesuai identitas"
          />
        </Field>

        <Field id={id("phone")} label="Nomor telepon / WhatsApp" required error={errors.phone}>
          <input
            id={id("phone")}
            data-field="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={describedBy("phone")}
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={`${inputBase} ${errors.phone ? "border-error" : "border-field"}`}
            placeholder="0812 3456 7890"
          />
        </Field>

        <Field id={id("channel")} label="Kanal kontak yang Anda pilih" required error={errors.channel}>
          <select
            id={id("channel")}
            data-field="channel"
            name="channel"
            required
            aria-invalid={Boolean(errors.channel)}
            aria-describedby={describedBy("channel")}
            value={values.channel}
            onChange={(e) => update("channel", e.target.value)}
            className={`${inputBase} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23123F43' stroke-width='1.5'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")] bg-[length:18px] bg-[right_14px_center] bg-no-repeat pr-11 ${
              errors.channel ? "border-error" : "border-field"
            }`}
          >
            {CHANNELS.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </Field>

        <Field id={id("email")} label="Email" error={errors.email}>
          <input
            id={id("email")}
            data-field="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy("email")}
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            className={`${inputBase} ${errors.email ? "border-error" : "border-field"}`}
            placeholder="nama@email.com"
          />
        </Field>

        <Field id={id("service")} label="Jenis layanan" required error={errors.service}>
          <select
            id={id("service")}
            data-field="service"
            name="service"
            required
            aria-invalid={Boolean(errors.service)}
            aria-describedby={describedBy("service")}
            value={values.service}
            onChange={(e) => update("service", e.target.value)}
            className={`${inputBase} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23123F43' stroke-width='1.5'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")] bg-[length:18px] bg-[right_14px_center] bg-no-repeat pr-11 ${
              errors.service ? "border-error" : "border-field"
            }`}
          >
            <option value="" disabled>
              Pilih layanan
            </option>
            <optgroup label="Layanan">
              {siteConfig.services.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                  {s.availability === "unconfirmed" ? " (ketersediaan dikonfirmasi tim)" : ""}
                </option>
              ))}
            </optgroup>
            <optgroup label="Lainnya">
              {EXTRA_SERVICE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </optgroup>
          </select>
        </Field>

        <fieldset className="md:col-span-2">
          <legend className="flex items-baseline gap-1.5 text-sm font-semibold text-deep">
            Lokasi sesi
            <span className="text-error" aria-hidden="true">
              *
            </span>
          </legend>
          <div className="mt-2 grid gap-3 sm:grid-cols-2">
            {VISIT_TYPES.map((v, i) => (
              <label
                key={v.value}
                className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-[0.9375rem] transition-colors has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-teal-500/20 ${
                  values.visitType === v.value ? "border-deep bg-mint-100/60 text-deep" : "border-field text-body hover:border-deep"
                }`}
              >
                <input
                  type="radio"
                  name="visitType"
                  value={v.value}
                  data-field={i === 0 ? "visitType" : undefined}
                  checked={values.visitType === v.value}
                  onChange={() => update("visitType", v.value)}
                  className="size-4 accent-[var(--elpiora-deep)]"
                />
                {v.label}
              </label>
            ))}
          </div>
          {visitHome && !siteConfig.homeVisit.confirmed ? (
            <p className="mt-2 text-xs text-muted-text">Ketersediaan dan area home visit akan dikonfirmasi oleh tim ELPIORA.</p>
          ) : null}
          {errors.visitType ? <p className="mt-1.5 text-sm font-medium text-error">{errors.visitType}</p> : null}
        </fieldset>

        <Field
          id={id("area")}
          label="Area atau kecamatan"
          required={visitHome}
          hint={visitHome ? "Dipakai untuk memastikan alamat Anda masuk area layanan Home Visit." : "Cukup area umum, bukan alamat lengkap."}
          error={errors.area}
          className="md:col-span-2"
        >
          <input
            id={id("area")}
            data-field="area"
            name="area"
            type="text"
            autoComplete="address-level2"
            aria-invalid={Boolean(errors.area)}
            aria-describedby={describedBy("area", true)}
            value={values.area}
            onChange={(e) => update("area", e.target.value)}
            className={`${inputBase} ${errors.area ? "border-error" : "border-field"}`}
            placeholder="Contoh: BSD City"
          />
        </Field>

        <Field id={id("date")} label="Tanggal yang diinginkan" required error={errors.date}>
          <input
            id={id("date")}
            data-field="date"
            name="date"
            type="date"
            required
            min={today || undefined}
            aria-invalid={Boolean(errors.date)}
            aria-describedby={describedBy("date")}
            value={values.date}
            onChange={(e) => update("date", e.target.value)}
            className={`${inputBase} ${errors.date ? "border-error" : "border-field"}`}
          />
        </Field>

        <Field id={id("time")} label="Waktu yang diinginkan" required error={errors.time}>
          <select
            id={id("time")}
            data-field="time"
            name="time"
            required
            aria-invalid={Boolean(errors.time)}
            aria-describedby={describedBy("time")}
            value={values.time}
            onChange={(e) => update("time", e.target.value)}
            className={`${inputBase} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23123F43' stroke-width='1.5'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")] bg-[length:18px] bg-[right_14px_center] bg-no-repeat pr-11 ${
              errors.time ? "border-error" : "border-field"
            }`}
          >
            <option value="" disabled>
              Pilih waktu
            </option>
            {TIME_SLOTS.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id={id("notes")}
          label="Keluhan atau catatan singkat"
          hint="Cukup gambaran singkat. Detail medis akan dibahas langsung saat konsultasi."
          error={errors.notes}
          className="md:col-span-2"
        >
          <textarea
            id={id("notes")}
            data-field="notes"
            name="notes"
            rows={4}
            maxLength={NOTES_MAX}
            aria-invalid={Boolean(errors.notes)}
            aria-describedby={[describedBy("notes", true), `${id("notes")}-count`].join(" ")}
            value={values.notes}
            onChange={(e) => update("notes", e.target.value)}
            className={`${inputBase} min-h-28 resize-y py-3 ${errors.notes ? "border-error" : "border-field"}`}
            placeholder="Contoh: nyeri punggung bawah sejak 2 minggu, ingin kembali bermain tenis."
          />
          <p id={`${id("notes")}-count`} className="mt-1 text-right text-xs text-muted-text">
            {values.notes.length} / {NOTES_MAX}
          </p>
        </Field>

        {/* Honeypot — hidden from people and assistive tech */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor={id("website")}>Website</label>
          <input id={id("website")} name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={(e) => update("website", e.target.value)} />
        </div>

        <div className="md:col-span-2">
          <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-body">
            <input
              type="checkbox"
              data-field="consent"
              name="consent"
              checked={values.consent}
              onChange={(e) => update("consent", e.target.checked)}
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? `${id("consent")}-error` : undefined}
              className="mt-1 size-5 shrink-0 accent-[var(--elpiora-deep)]"
            />
            <span>
              Saya setuju data ini digunakan oleh ELPIORA untuk menghubungi saya terkait permintaan janji, sesuai{" "}
              <Link href="/privacy-policy" className="font-semibold text-deep underline decoration-gold underline-offset-4">
                kebijakan privasi
              </Link>
              , dan memahami bahwa permintaan ini belum merupakan janji yang terkonfirmasi.
              <span className="text-error" aria-hidden="true">
                {" "}
                *
              </span>
            </span>
          </label>
          {errors.consent ? (
            <p id={`${id("consent")}-error`} className="mt-1.5 text-sm font-medium text-error">
              {errors.consent}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status.kind === "submitting"}
          className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-deep px-8 text-[0.9375rem] font-semibold text-paper transition-colors hover:bg-ink disabled:cursor-wait disabled:opacity-70"
        >
          {status.kind === "submitting" ? "Mengirim…" : "Ajukan Janji"}
          <ArrowIcon className="arrow-nudge size-4" />
        </button>
        <p className="text-xs text-muted-text sm:max-w-[26ch] sm:text-right">Tim kami akan menghubungi Anda untuk konfirmasi jadwal.</p>
      </div>

      {status.kind === "error" ? (
        <p ref={errorRef} tabIndex={-1} role="alert" className="mt-5 rounded-xl border border-error/30 bg-error/5 px-4 py-3 text-sm font-medium text-error outline-none">
          Permintaan belum berhasil terkirim. Mohon periksa koneksi Anda dan coba lagi.
        </p>
      ) : null}
    </form>
  );
}
