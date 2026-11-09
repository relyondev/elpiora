import Image from "next/image";
import type { ImageSlot } from "@/config/site";
import { BotanicalSprig, MovementCurve } from "./Ornaments";
import { PlaceholderTag } from "./Logo";

type Variant = "studio" | "conversation" | "reception" | "treatment" | "detail";

type Props = {
  image: ImageSlot;
  variant: Variant;
  sizes: string;
  priority?: boolean;
  className?: string;
  /** Position of the placeholder caption (to keep it clear of overlapping accents). */
  captionClassName?: string;
};

/**
 * Displays licensed photography once `image.src` is configured. Until then it
 * renders an art-directed, clearly labelled placeholder plate — never stock
 * imagery or AI-generated "clinic" photos passed off as the real ELPIORA.
 * The container always owns its aspect ratio, so swapping in the photo causes
 * no layout shift.
 */
export function ImagePlate({
  image,
  variant,
  sizes,
  priority = false,
  className = "",
  captionClassName = "inset-x-4 bottom-4 items-start sm:inset-x-5 sm:bottom-5",
}: Props) {
  if (image.src) {
    return (
      <div className={`relative overflow-hidden bg-mint-100 ${className}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative isolate overflow-hidden ${className}`}
      role="img"
      aria-label={`Placeholder foto: ${image.alt}`}
    >
      <PlateArt variant={variant} />
      <div className={`absolute flex flex-col gap-2 ${captionClassName}`}>
        <PlaceholderTag>Foto menyusul</PlaceholderTag>
        {/* the photographer's brief doubles as a hint for reviewers */}
        <p className="max-w-[30ch] text-[0.6875rem] leading-snug font-medium text-deep/75" aria-hidden="true">
          {image.brief}
        </p>
      </div>
    </div>
  );
}

function PlateArt({ variant }: { variant: Variant }) {
  switch (variant) {
    case "studio":
      return (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(160deg,var(--elpiora-mint-100)_0%,var(--elpiora-mint-200)_45%,var(--elpiora-teal-300)_100%)]" />
          {/* window light */}
          <div className="ambient-drift absolute -top-1/4 -right-1/4 size-[85%] rounded-full bg-[radial-gradient(circle,rgb(255_255_255/0.85),rgb(255_255_255/0)_65%)]" />
          {/* ribbed wall */}
          <div className="absolute inset-y-0 left-0 w-2/5 bg-[repeating-linear-gradient(90deg,rgb(18_63_67/0.10)_0_1px,transparent_1px_14px)]" />
          <BotanicalSprig className="absolute -right-6 bottom-16 h-3/5 text-deep/25" />
          <MovementCurve className="absolute inset-0 size-full opacity-70" />
        </>
      );
    case "conversation":
      return (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(200deg,var(--elpiora-surface)_0%,var(--elpiora-mint-100)_40%,var(--elpiora-sage-400)_100%)]" />
          <div className="absolute top-[18%] left-[12%] size-2/5 rounded-full bg-[radial-gradient(circle,rgb(255_255_255/0.9),rgb(255_255_255/0)_70%)]" />
          <BotanicalSprig className="absolute top-8 left-6 h-2/5 -scale-x-100 text-deep/20" />
          <MovementCurve className="absolute inset-0 size-full -scale-x-100 opacity-60" />
        </>
      );
    case "reception":
      return (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--elpiora-ink)_0%,var(--elpiora-deep)_100%)]" />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgb(223_242_231/0.07)_0_2px,transparent_2px_18px)]" />
          {/* warm concealed light strip */}
          <div className="absolute inset-x-0 bottom-[34%] h-px bg-gold/70 shadow-[0_0_40px_8px_rgb(203_175_127/0.35)]" />
          <div className="absolute right-[8%] bottom-0 left-[38%] h-[34%] rounded-t-[40px] bg-[linear-gradient(180deg,var(--elpiora-surface),var(--elpiora-gold-400))] opacity-80" />
        </>
      );
    case "treatment":
      return (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(170deg,var(--elpiora-white)_0%,var(--elpiora-mint-100)_55%,var(--elpiora-mint-200)_100%)]" />
          <div className="absolute inset-x-[12%] bottom-[22%] h-[12%] rounded-2xl bg-teal-500/80" />
          <div className="absolute inset-x-[16%] bottom-[12%] h-[10%] border-x-2 border-gold/70" />
          <div className="absolute top-[10%] right-[10%] h-[45%] w-[28%] rounded-t-full bg-paper/70 shadow-[inset_0_0_0_1px_rgb(18_63_67/0.06)]" />
        </>
      );
    case "detail":
      return (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(140deg,var(--elpiora-sage-400)_0%,var(--elpiora-mint-200)_60%,var(--elpiora-mint-100)_100%)]" />
          <BotanicalSprig className="absolute top-6 left-1/2 h-4/5 -translate-x-1/3 text-deep/30" />
        </>
      );
  }
}
