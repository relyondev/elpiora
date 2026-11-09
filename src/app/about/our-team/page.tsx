import { notFound } from "next/navigation";
import { FinalCta } from "@/components/FinalCta";
import { PageHero } from "@/components/PageHero";
import { Team } from "@/components/Team";
import { LinkButton } from "@/components/ui/Button";
import { HeartHandIcon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";
import { bookingHref } from "@/lib/booking";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("Tim Fisioterapis | ELPIORA", "Kenali fisioterapis ELPIORA, kualifikasi, fokus pasien, dan jadwal konsultasi yang tersedia.", "/about/our-team");

// antislop R-18 / R-38: this page exists only once real team members (verified names, credentials, portraits and consent) are in siteConfig.team.
export default function OurTeamPage() {
  if (siteConfig.team.length === 0) notFound();
  return (
    <main id="konten">
      <PageHero
        eyebrow="Our Team"
        parents={[{ label: "About", href: "/about" }]}
        title={
          <>
            Meet the People <span className="accent">Behind Your Movement.</span>
          </>
        }
        lead={<p>Kenali fisioterapis yang mendampingi proses pemulihan Anda. Kecocokan pengalaman klinis, komunikasi, dan fokus layanan membantu menentukan pengalaman terapi yang baik.</p>}
        actions={
          <LinkButton href={bookingHref()} variant="champagne">
            Temukan Jadwal Konsultasi
          </LinkButton>
        }
        image={siteConfig.images.about}
        note={{ label: "Profil terverifikasi", text: "Nama, kualifikasi, dan fokus pasien", Icon: HeartHandIcon }}
      />
      <Team />
      <FinalCta />
    </main>
  );
}
