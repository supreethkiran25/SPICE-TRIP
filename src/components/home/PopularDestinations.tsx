"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { DESTINATIONS } from "@/lib/data/packages";
import { formatPrice } from "@/lib/utils";
import { getPackageCover } from "@/lib/package-covers";

const FEATURED_SLUGS = ["bali", "dubai", "maldives", "vietnam"];

function SectionMark() {
  return (
    <span className="inline-flex flex-col gap-[3px] mr-2.5 shrink-0" aria-hidden>
      <span className="block w-4 h-[2px] bg-[#171717]" />
      <span className="block w-2.5 h-[2px] bg-[#171717]" />
    </span>
  );
}

export default function PopularDestinations() {
  const cards = FEATURED_SLUGS.map((slug) => {
    const dest = DESTINATIONS.find((d) => d.slug === slug);
    if (!dest) return null;
    return {
      ...dest,
      image: getPackageCover(dest.slug, dest.name, dest.heroImage),
    };
  }).filter(Boolean) as Array<{
    id: string;
    slug: string;
    name: string;
    startingPrice: number;
    image: string;
  }>;

  return (
    <section
      id="destinations"
      className="pt-12 md:pt-14 pb-10 md:pb-12 bg-[#F7F6F3] scroll-mt-24"
    >
      <span id="popular-tours" className="sr-only" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between gap-4 mb-5">
          <h2 className="flex items-center text-lg sm:text-xl font-bold uppercase tracking-[0.06em] text-[#171717]">
            <SectionMark />
            Popular destinations
          </h2>
          <Link
            href="/destinations"
            className="text-sm font-medium text-[#525252] hover:text-[#171717] inline-flex items-center gap-1 shrink-0 transition-colors"
          >
            Explore all
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {cards.map((card) => (
            <Link
              key={card.id}
              href={`/destinations/${card.slug}`}
              className="group relative h-[240px] sm:h-[280px] lg:h-[320px] rounded-2xl overflow-hidden bg-[#E7E5E4]"
            >
              <Image
                src={card.image}
                alt={card.name}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                <h3 className="text-base sm:text-lg font-bold tracking-tight">
                  {card.name}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-light mt-0.5">
                  {formatPrice(card.startingPrice, "INR")}+
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
