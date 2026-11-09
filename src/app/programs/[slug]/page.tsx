import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/DetailPage";
import { programDetails } from "@/content/details";
import { pageMeta } from "@/lib/meta";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return Object.keys(programDetails).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const d = programDetails[slug];
  return d ? pageMeta(d.seoTitle, d.seoDescription, `/programs/${slug}`) : {};
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const detail = programDetails[slug];
  if (!detail) notFound();
  return <DetailPage kind="program" detail={detail} />;
}
