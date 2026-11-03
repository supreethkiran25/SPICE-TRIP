import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getPublished } from "@/lib/published";
import { formatDate } from "@/lib/utils";
import { BookOpen, Clock, ArrowRight, ArrowUpRight } from "lucide-react";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "The Travel Journal — Editorial Dispatches | SpiceTrip",
  description:
    "Curated stories, insider gastronomy guides, and travel philosophy from the curators at SpiceTrip, Mysore.",
};

export default async function BlogListingPage() {
  const { journal } = await getPublished();
  const featuredArticle = journal[0];
  const otherArticles = journal.slice(1);

  return (
    <div className="bg-background min-h-screen py-16 md:py-24">
      <div className="max-w-container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-2 text-xs font-sans uppercase tracking-[0.2em] text-terracotta font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>The SpiceTrip Publication</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-deep mb-4">
            The Travel Journal
          </h1>
          <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
            Reflections on culinary origins, remote atoll sanctuaries, and the art of unhurried exploration.
          </p>
        </div>

        {/* Featured Big Magazine Hero Article */}
        {featuredArticle && (
          <div className="bg-white border border-sand/40 rounded-sm overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 mb-16 group hover:border-forest transition-colors">
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[380px] overflow-hidden bg-sand/20">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-forest-deep text-[10px] font-sans uppercase tracking-widest px-3 py-1 rounded-sm font-semibold">
                Featured Cover Story
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 text-xs text-foreground-muted mb-3">
                  <span className="font-semibold text-terracotta tracking-wider uppercase text-[10px]">
                    {featuredArticle.category}
                  </span>
                  <span>•</span>
                  <span>{formatDate(featuredArticle.publishedDate)}</span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{featuredArticle.readTime}</span>
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-deep group-hover:text-terracotta transition-colors mb-4">
                  <Link href={`/blog/${featuredArticle.slug}`}>
                    {featuredArticle.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-sand/30 flex items-center justify-between">
                <span className="text-xs text-foreground-muted">
                  By <strong className="text-forest">{featuredArticle.author.name}</strong>
                </span>
                <Link
                  href={`/blog/${featuredArticle.slug}`}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-terracotta hover:text-forest"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Supporting Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherArticles.map((art) => (
            <article
              key={art.id}
              className="bg-white border border-sand/40 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-forest transition-colors shadow-sm"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-sand/20">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-forest-deep text-[10px] font-sans uppercase tracking-widest px-2.5 py-1 rounded-sm font-semibold">
                    {art.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 text-[11px] text-foreground-muted mb-2">
                    <span>{formatDate(art.publishedDate)}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-forest-deep group-hover:text-terracotta transition-colors line-clamp-2 mb-3">
                    <Link href={`/blog/${art.slug}`}>{art.title}</Link>
                  </h3>

                  <p className="text-xs text-foreground-muted line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-sand/20 mt-4">
                <div className="flex items-center justify-between pt-4">
                  <span className="text-[11px] text-foreground-muted">
                    By <strong className="text-forest">{art.author.name}</strong>
                  </span>
                  <Link
                    href={`/blog/${art.slug}`}
                    className="text-xs font-bold uppercase tracking-wider text-terracotta hover:text-forest flex items-center space-x-1"
                  >
                    <span>Read</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

