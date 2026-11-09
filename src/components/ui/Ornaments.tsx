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

/**
 * Flowing translucent ribbons with gold hairlines — the wave motif along the
 * bottom of the ELPIORA poster. Decorative; place inside a `relative` parent.
 */
export function WaveRibbons({ className = "", tone = "light" }: Props & { tone?: "light" | "dark" }) {
  const a = tone === "dark" ? 0.18 : 0.5;
  return (
    <svg className={className} viewBox="0 0 1440 220" fill="none" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id={`wr-teal-${tone}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#5fb7b8" stopOpacity={a * 0.2} />
          <stop offset="0.5" stopColor="#5fb7b8" stopOpacity={a} />
          <stop offset="1" stopColor="#2c98a0" stopOpacity={a * 0.6} />
        </linearGradient>
        <linearGradient id={`wr-mint-${tone}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#bbdcc6" stopOpacity={a * 0.9} />
          <stop offset="1" stopColor="#dff2e7" stopOpacity={a * 0.3} />
        </linearGradient>
        <linearGradient id={`wr-gold-${tone}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#d29c52" stopOpacity="0" />
          <stop offset="0.35" stopColor="#eebf7b" stopOpacity="0.95" />
          <stop offset="1" stopColor="#d29c52" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <path d="M0 150C220 90 420 200 700 150S1180 40 1440 110V220H0Z" fill={`url(#wr-mint-${tone})`} />
      <path d="M0 185C260 120 520 215 820 165S1250 95 1440 150V220H0Z" fill={`url(#wr-teal-${tone})`} />
      <path d="M0 130C260 70 470 190 760 140S1200 30 1440 80" stroke={`url(#wr-gold-${tone})`} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      <path d="M0 168C300 112 520 205 840 155S1260 80 1440 128" stroke={`url(#wr-gold-${tone})`} strokeWidth="1" vectorEffect="non-scaling-stroke" opacity="0.7" />
    </svg>
  );
}

/** Gold brush stroke underline used beneath the script tagline (poster). */
export function BrushUnderline({ className = "" }: Props) {
  return (
    <svg className={className} viewBox="0 0 220 14" fill="none" aria-hidden="true" preserveAspectRatio="none">
      <path d="M3 10C60 4 140 2 217 4" stroke="url(#bu-g)" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M40 12C90 8 150 7 200 8" stroke="url(#bu-g)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <defs>
        <linearGradient id="bu-g" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#d29c52" />
          <stop offset="1" stopColor="#eebf7b" />
        </linearGradient>
      </defs>
    </svg>
  );
}
