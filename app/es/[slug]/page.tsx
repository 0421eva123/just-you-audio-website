import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  createSeoMetadata,
  getSpanishLandingPage,
  SeoContentPage,
  spanishLandingPages,
} from "../../seo-pages";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return spanishLandingPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSpanishLandingPage(slug);

  if (!page) {
    return {};
  }

  return createSeoMetadata(page);
}

export default async function SpanishLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSpanishLandingPage(slug);

  if (!page) {
    notFound();
  }

  return <SeoContentPage page={page} />;
}
