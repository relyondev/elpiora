import { NextResponse } from "next/server";
import { bookingSummary, validateBooking, type BookingRequest } from "@/lib/booking-request";

/**
 * Booking enquiries.
 *
 * Validates the request on the server, then forwards it to BOOKING_WEBHOOK_URL
 * when configured (any HTTPS endpoint: Make/Zapier, Google Apps Script, a CRM,
 * an email-sending function…). No provider SDK is hard-coded.
 *
 * Privacy: request bodies contain personal (and possibly health) information —
 * they are never logged here.
 */

const MAX_BODY_BYTES = 10_000;

function str(value: unknown, max = 600): string {
  return typeof value === "string" ? value.slice(0, max) : "";
}

export async function POST(request: Request) {
  const length = Number(request.headers.get("content-length") ?? 0);
  if (length > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: "payload_too_large" }, { status: 413 });
  }

  let raw: Record<string, unknown>;
  try {
    raw = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const data: BookingRequest = {
    name: str(raw.name, 120),
    phone: str(raw.phone, 40),
    email: str(raw.email, 120),
    service: str(raw.service, 60),
    visitType: str(raw.visitType, 20),
    date: str(raw.date, 10),
    time: str(raw.time, 20),
    notes: str(raw.notes, 600),
    consent: raw.consent === true,
    website: str(raw.website, 200),
  };

  // Honeypot filled → silently accept without forwarding.
  if (data.website) {
    return NextResponse.json({ ok: true, delivered: false });
  }

  const errors = validateBooking(data);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, error: "validation", fields: errors }, { status: 422 });
  }

  const webhook = process.env.BOOKING_WEBHOOK_URL;
  if (!webhook) {
    // No delivery channel configured — say so honestly; the client decides what to show.
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const { website: _honeypot, ...fields } = data;
    void _honeypot;
    const res = await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.BOOKING_WEBHOOK_SECRET ? { "X-Elpiora-Secret": process.env.BOOKING_WEBHOOK_SECRET } : {}),
      },
      body: JSON.stringify({ type: "booking_request", submittedAt: new Date().toISOString(), ...fields, summary: bookingSummary(data) }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`webhook ${res.status}`);
    return NextResponse.json({ ok: true, delivered: true });
  } catch {
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }
}
