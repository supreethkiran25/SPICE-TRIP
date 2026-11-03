"use client";

import Link from "next/link";
import { Star, Quote, Users, MapPin, ThumbsUp, ArrowRight } from "lucide-react";
import { useCms } from "@/components/cms/CmsProvider";

type ReviewCardData = {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number;
  trip?: string;
};

function ReviewCard({ rev }: { rev: ReviewCardData }) {
  return (
    <article className="shrink-0 w-[300px] sm:w-[340px] bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
      <div>
        <div className="text-[#D31F25]/25 mb-3">
          <Quote className="w-7 h-7 fill-current" />
        </div>
        <p className="text-sm text-gray-700 leading-relaxed italic mb-4 line-clamp-5">
          “{rev.quote}”
        </p>
        <div className="flex items-center space-x-1 text-[#FBBF24] mb-3">
          {[...Array(rev.rating)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-current" />
          ))}
        </div>
        {rev.trip && (
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-[#D31F25]/80 bg-red-50 px-2.5 py-1 rounded-full mb-4">
            {rev.trip}
          </span>
        )}
      </div>

      <div className="flex items-center space-x-3 pt-3 border-t border-gray-100">
        <div className="w-9 h-9 rounded-full bg-red-50 text-[#D31F25] flex items-center justify-center text-xs font-extrabold ring-2 ring-red-50">
          {rev.author
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 2)
            .map((part) => part[0]?.toUpperCase() || "")
            .join("") || "ST"}
        </div>
        <div>
          <h4 className="text-xs font-bold text-[#18181B] leading-tight">{rev.author}</h4>
          <span className="text-[10px] text-gray-500">{rev.location}</span>
        </div>
      </div>
    </article>
  );
}

export default function TravelerReviews() {
  const { testimonials, homepage } = useCms();
  const reviews: ReviewCardData[] = testimonials.map((item) => ({
    id: item.id,
    quote: item.quote,
    author: item.author,
    location: item.location,
    rating: item.rating,
    trip: item.destination || item.tripType || undefined,
  }));
  const loop = [...reviews, ...reviews];
  const stats = homepage.stats;

  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden perf-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18181B]">
              What Travelers Say
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-xl">
              Real stories from travelers who explored the world with SpiceTrip & Safe Wheels
            </p>
          </div>
          <Link
            href="/about#testimonials"
            className="hidden sm:inline-flex items-center space-x-1 text-xs sm:text-sm font-bold text-[#D31F25] hover:text-[#B91C1C] transition-colors group shrink-0"
          >
            <span>View all reviews</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="relative mb-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="overflow-hidden">
          <div className="animate-marquee-slow flex items-stretch gap-5 px-4 hover:[animation-play-state:paused]">
            {loop.map((rev, i) => (
              <ReviewCard key={`${rev.id}-${i}`} rev={rev} />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 bg-gradient-to-br from-red-50/60 via-amber-50/40 to-orange-50/30 rounded-3xl p-5 sm:p-7 border border-red-100">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-[#D31F25] text-white flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-extrabold text-[#18181B]">{stats.travelers}</span>
              <span className="block text-xs font-semibold text-gray-600">Happy Travelers</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EA580C] text-white flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-extrabold text-[#18181B]">{stats.destinations}</span>
              <span className="block text-xs font-semibold text-gray-600">Destinations</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F59E0B] text-white flex items-center justify-center shrink-0">
              <ThumbsUp className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-extrabold text-[#18181B]">{stats.satisfaction}</span>
              <span className="block text-xs font-semibold text-gray-600">Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
