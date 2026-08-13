import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  createSeoMetadata,
  englishKnowledgePages,
  getEnglishKnowledgePage,
  SeoContentPage,
} from "../../seo-pages";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return englishKnowledgePages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getEnglishKnowledgePage(slug);

  if (!page) {
    return {};
  }

  return createSeoMetadata(page);
}

export default async function KnowledgeArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const page = getEnglishKnowledgePage(slug);

  if (!page) {
    notFound();
  }

  return <SeoContentPage page={page} />;
}
