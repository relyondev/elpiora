import { NextResponse } from "next/server";
import { ENQUIRY_FIELDS, enquirySummary, validateEnquiry, type EnquiryKind } from "@/lib/enquiry";
import { todayInJakarta } from "@/lib/booking-request";

/**
 * Corporate and event enquiries. Same delivery model as /api/booking: validate on the server, forward to
 * BOOKING_WEBHOOK_URL when configured, never log request bodies.
 */
export async function POST(request: Request) {
  if (Number(request.headers.get("content-length") ?? 0) > 12_000) {
    return NextResponse.json({ ok: false, error: "payload_too_large" }, { status: 413 });
  }
  let raw: Record<string, unknown>;
  try {
    raw = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const kind: EnquiryKind | null = raw.kind === "corporate" || raw.kind === "event" ? raw.kind : null;
  if (!kind) return NextResponse.json({ ok: false, error: "invalid_kind" }, { status: 400 });

  if (typeof raw.website === "string" && raw.website) return NextResponse.json({ ok: true, delivered: false }); // honeypot

  const input = (raw.values ?? {}) as Record<string, unknown>;
  const values: Record<string, string> = {};
  for (const f of ENQUIRY_FIELDS[kind]) values[f.name] = typeof input[f.name] === "string" ? (input[f.name] as string).slice(0, 900) : "";

  const consent = raw.consent === true;
  const errors = validateEnquiry(kind, values, consent, todayInJakarta());
  if (Object.keys(errors).length) return NextResponse.json({ ok: false, error: "validation", fields: errors }, { status: 422 });

  const webhook = process.env.BOOKING_WEBHOOK_URL;
  if (!webhook) return NextResponse.json({ ok: true, delivered: false });

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.BOOKING_WEBHOOK_SECRET ? { "X-Elpiora-Secret": process.env.BOOKING_WEBHOOK_SECRET } : {}),
      },
      body: JSON.stringify({ type: `${kind}_request`, submittedAt: new Date().toISOString(), ...values, summary: enquirySummary(kind, values) }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`webhook ${res.status}`);
    return NextResponse.json({ ok: true, delivered: true });
  } catch {
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }
}
