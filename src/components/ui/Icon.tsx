import type { SVGProps } from "react";

/**
 * Line icon set — 24px grid, 1.5px stroke, round caps (guidelines §5.2).
 * Drawn for physiotherapy themes rather than generic spa imagery.
 */

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

function Svg({ children, title, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 12h15" />
      <path d="m13.5 6.5 5.5 5.5-5.5 5.5" />
    </Svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </Svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 8h16" />
      <path d="M4 16h10" />
    </Svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </Svg>
  );
}

/** Knee/joint with motion arc — musculoskeletal & movement. */
export function MovementIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="4.5" r="1.75" />
      <path d="M12 6.5v5.5l-3.5 4.5" />
      <path d="M12 12l3 3.5v4.5" />
      <path d="M8.5 9.5 12 8.5l3.5 1.5" />
      <path d="M4 17.5c1.2 2 3.2 3 5.5 3" opacity={0.6} />
    </Svg>
  );
}

/** Runner in stride — sports rehabilitation. */
export function SportIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="15" cy="4.5" r="1.75" />
      <path d="m10 9 3-1.5 2.5 3 3 1" />
      <path d="M13 7.5 11.5 13l3 2.5-1 5" />
      <path d="M11.5 13 8 15.5 5 15" />
      <path d="M3.5 20.5h6" opacity={0.6} />
    </Svg>
  );
}

/** Seated posture at desk — workplace ergonomics. */
export function WorkplaceIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="8" cy="4.5" r="1.75" />
      <path d="M8 6.5 7 12.5h5.5l1.5 6" />
      <path d="M7.5 9.5 11 11h3" />
      <path d="M13 10h8" />
      <path d="M19 10v10" />
      <path d="M5 16.5v4" />
      <path d="M4 16.5h8" />
    </Svg>
  );
}

/** Leaf with growth line — wellness & movement. */
export function WellnessIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 19c0-8 5.5-13 14-14-0.5 8.5-5.5 14-14 14Z" />
      <path d="M5 19 13 11" />
      <path d="M9.5 14.5h3.5" opacity={0.6} />
      <path d="M9.5 14.5V11" opacity={0.6} />
    </Svg>
  );
}

/** Fine needle — dry needling (availability pending). */
export function NeedleIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 19 16.5 7.5" />
      <path d="m15 6 3 3" />
      <path d="M17.5 4.5 19.5 6.5" />
      <circle cx="5" cy="19" r="0.6" fill="currentColor" stroke="none" />
    </Svg>
  );
}

/** Magnifier over body line — thorough assessment. */
export function AssessmentIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="m15 15 5 5" />
      <path d="M10.5 6.5v8" strokeDasharray="0.1 2.2" strokeWidth={2} />
    </Svg>
  );
}

/** Layered plan sheets — personalised programme. */
export function PlanIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="5" y="3.5" width="12" height="15" rx="2" />
      <path d="M8.5 8h5" />
      <path d="M8.5 11.5h5" />
      <path d="M8.5 15h3" />
      <path d="M19.5 7v12a2 2 0 0 1-2 2h-10" opacity={0.6} />
    </Svg>
  );
}

/** Rising curve with milestones — directed progress. */
export function ProgressIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3.5 19.5c4 0 5-4 8-6.5s5-2.5 9-8.5" />
      <circle cx="7" cy="18" r="1.25" />
      <circle cx="12.5" cy="12.5" r="1.25" />
      <circle cx="18.5" cy="6.5" r="1.25" />
      <path d="M3.5 21h17" opacity={0.6} />
    </Svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.25" />
    </Svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </Svg>
  );
}

export function RouteIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="6" r="2" />
      <path d="M8 18h7.5a3 3 0 0 0 0-6h-7a3 3 0 0 1 0-6H16" />
    </Svg>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4.5 19.5 5.6 16A7.5 7.5 0 1 1 8.4 18.6Z" />
      <path d="M9 11h6" />
      <path d="M9 14h3.5" />
    </Svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4.5 5.5a2 2 0 0 1 2-2Z" />
    </Svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </Svg>
  );
}

/** Neural pathway — neurological rehabilitation. */
export function NeuroIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 4.5c-3.5 0-6.5 2.6-6.5 6 0 2 1 3.4 2.2 4.4.6.5.8 1.1.8 1.8v2.8h7v-2.8c0-.7.2-1.3.8-1.8 1.2-1 2.2-2.4 2.2-4.4 0-3.4-3-6-6.5-6Z" />
      <path d="M9.5 10.5c1 0 1.5.8 2.5.8s1.5-.8 2.5-.8" />
      <path d="M12 11.3v3.2" />
      <path d="M9.5 21h5" opacity={0.6} />
    </Svg>
  );
}

/** House with heart — home visit. */
export function HomeIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 11 12 4.5l8 6.5" />
      <path d="M6 9.5V20h12V9.5" />
      <path d="M12 17.5s-3-1.8-3-3.8a1.6 1.6 0 0 1 3-.8 1.6 1.6 0 0 1 3 .8c0 2-3 3.8-3 3.8Z" />
    </Svg>
  );
}

export function HeartHandIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 11.5s-4-2.4-4-5.1A2.2 2.2 0 0 1 12 5a2.2 2.2 0 0 1 4 1.4c0 2.7-4 5.1-4 5.1Z" />
      <path d="M3.5 15.5h3l3.5 1.5h4a1.5 1.5 0 0 0 0-3h-3" />
      <path d="M6.5 19.5h6.5l7-4.5a1.4 1.4 0 0 0-1.7-2.2L14.5 15" />
    </Svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.5 12.2 2.4 2.3 4.6-5" />
    </Svg>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M10 7c-3 .8-4.5 3-4.5 6v4h4.5v-4.5H7.5" />
      <path d="M18.5 7c-3 .8-4.5 3-4.5 6v4h4.5v-4.5H16" />
    </Svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="4" y="5.5" width="16" height="14.5" rx="2" />
      <path d="M4 10h16" />
      <path d="M8.5 3.5v4" />
      <path d="M15.5 3.5v4" />
      <path d="M8.5 14h2" />
    </Svg>
  );
}

/** Vertebrae column — function of movement (poster benefit icon). */
export function SpineIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M10 3.5c3 2 3 4.5 1 6.5s-2 4.5 1 6.5 2 3.5 0 4" />
      <circle cx="13.5" cy="5" r="1" />
      <circle cx="14" cy="9" r="1.1" />
      <circle cx="13" cy="13" r="1.1" />
      <circle cx="14" cy="17" r="1" />
    </Svg>
  );
}

/** Lotus — quality of life / balance (poster benefit icon). */
export function LotusIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 18c-2.5-2-3.5-5-2.5-9 1.5 1 2.5 2.5 2.5 4 0-1.5 1-3 2.5-4 1 4 0 7-2.5 9Z" />
      <path d="M12 18c-3 .5-6-1-7.5-4.5 2 0 3.6.6 4.6 1.6" />
      <path d="M12 18c3 .5 6-1 7.5-4.5-2 0-3.6.6-4.6 1.6" />
      <path d="M5 20h14" opacity={0.6} />
    </Svg>
  );
}

export const serviceIcons = {
  movement: MovementIcon,
  sport: SportIcon,
  workplace: WorkplaceIcon,
  wellness: WellnessIcon,
  needle: NeedleIcon,
  neuro: NeuroIcon,
  home: HomeIcon,
} as const;
