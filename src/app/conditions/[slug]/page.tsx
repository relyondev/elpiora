import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/DetailPage";
import { conditionDetails } from "@/content/details";
import { pageMeta } from "@/lib/meta";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return Object.keys(conditionDetails).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const d = conditionDetails[slug];
  return d ? pageMeta(d.seoTitle, d.seoDescription, `/conditions/${slug}`) : {};
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const detail = conditionDetails[slug];
  if (!detail) notFound();
  return <DetailPage kind="condition" detail={detail} />;
}
