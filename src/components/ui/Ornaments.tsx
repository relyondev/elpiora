/**
 * Decorative motifs derived from the ELPIORA graphic language (guidelines §5.1):
 * sweeping movement curves, a dotted spine-like line, fine botanical line art.
 * All purely decorative → aria-hidden.
 */

type Props = { className?: string };

/** A single sweeping gold hairline — the "line of movement" that threads the page. */
export function MovementCurve({ className = "", draw = false }: Props & { draw?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 600 600" fill="none" aria-hidden="true" preserveAspectRatio="none">
      <path
        d="M-20 520C120 470 170 330 260 250S470 150 520 40 600 -20 640 -40"
        stroke="var(--elpiora-gold-400)"
        strokeWidth={1.25}
        vectorEffect="non-scaling-stroke"
        pathLength={1}
        className={draw ? "draw-line" : undefined}
      />
    </svg>
  );
}

/** Dotted vertebra line — echoes the spine detail in the logomark without reproducing it. */
export function SpineDots({ className = "", count = 9, vertical = true }: Props & { count?: number; vertical?: boolean }) {
  const dots = Array.from({ length: count }, (_, i) => {
    const t = i / (count - 1);
    // dots gently taper, like vertebrae
    const r = 2.6 - Math.abs(t - 0.45) * 1.8;
    return { t, r: Math.max(r, 1.1) };
  });
  return vertical ? (
    <svg className={className} viewBox="0 0 12 200" fill="none" aria-hidden="true">
      {dots.map(({ t, r }) => (
        <circle key={t} cx={6 + Math.sin(t * Math.PI * 1.2) * 2.5} cy={8 + t * 184} r={r} fill="currentColor" />
      ))}
    </svg>
  ) : (
    <svg className={className} viewBox="0 0 200 12" fill="none" aria-hidden="true">
      {dots.map(({ t, r }) => (
        <circle key={t} cx={8 + t * 184} cy={6} r={r} fill="currentColor" />
      ))}
    </svg>
  );
}

/** Fine botanical sprig in line art. */
export function BotanicalSprig({ className = "" }: Props) {
  return (
    <svg className={className} viewBox="0 0 160 240" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" aria-hidden="true">
      <path d="M40 236C60 180 76 120 120 8" />
      <path d="M58 180c-22-6-36-22-40-44 22 2 38 18 40 44Z" />
      <path d="M66 150c20-10 40-8 56 4-18 14-38 14-56-4Z" />
      <path d="M78 116c-20-8-30-26-30-46 20 6 30 24 30 46Z" />
      <path d="M90 88c16-14 34-18 52-12-12 18-30 22-52 12Z" />
      <path d="M102 56c-14-10-18-26-14-42 16 8 20 24 14 42Z" />
    </svg>
  );
}
