import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPublished } from "@/lib/published";
import { formatDate } from "@/lib/utils";
import { Clock, ArrowLeft, Share2, BookOpen } from "lucide-react";

export const revalidate = 30;

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const { journal } = await getPublished();
  return journal.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { journal } = await getPublished();
  const art = journal.find((a) => a.slug === params.slug);
  if (!art) return { title: "Article Not Found" };

  return {
    title: `${art.title} | SpiceTrip Journal`,
    description: art.excerpt,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { journal } = await getPublished();
  const article = journal.find((a) => a.slug === params.slug);
  if (!article) notFound();

  return (
    <div className="bg-background min-h-screen py-16 md:py-24">
      <article className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-forest hover:text-terracotta transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Journal</span>
        </Link>

        {/* Header Metadata */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 text-xs text-foreground-muted mb-4">
            <span className="font-semibold text-terracotta uppercase tracking-wider text-[11px]">
              {article.category}
            </span>
            <span>•</span>
            <span>{formatDate(article.publishedDate)}</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-terracotta" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-deep leading-tight mb-6">
            {article.title}
          </h1>

          <p className="font-serif text-lg sm:text-xl text-foreground-muted italic border-l-2 border-terracotta pl-4 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-sand/40 bg-sand/20 mb-12 shadow-md">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        {/* Author Byline */}
        <div className="flex items-center space-x-3 pb-8 mb-8 border-b border-sand/30 text-xs text-foreground-muted">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-terracotta font-semibold block">Written by</span>
            <strong className="text-forest text-sm font-serif">{article.author.name}</strong>
            <span className="text-foreground-muted block">{article.author.role}</span>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose max-w-none text-foreground-muted space-y-6 text-sm sm:text-base leading-relaxed">
          {article.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* Bottom CTA to plan journey */}
        <div className="mt-16 p-8 bg-forest-deep text-white rounded-sm border border-forest text-center">
          <h3 className="font-serif text-2xl font-bold mb-2">Inspired by this dispatch?</h3>
          <p className="text-xs text-sand-light/80 mb-6 max-w-md mx-auto">
            Our curators can integrate any of these experiences into your private bespoke itinerary.
          </p>
          <Link
            href="/contact#enquiry"
            className="inline-flex items-center justify-center bg-terracotta hover:bg-white hover:text-forest-deep text-white text-xs font-semibold uppercase tracking-widest px-7 py-3.5 rounded-sm transition-colors"
          >
            <span>Plan This Journey</span>
          </Link>
        </div>
      </article>
    </div>
  );
}

