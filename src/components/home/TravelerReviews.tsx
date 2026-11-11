"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCms } from "@/components/cms/CmsProvider";

function SectionMark() {
  return (
    <span className="inline-flex flex-col gap-[3px] mr-2.5 shrink-0" aria-hidden>
      <span className="block w-4 h-[2px] bg-[#171717]" />
      <span className="block w-2.5 h-[2px] bg-[#171717]" />
    </span>
  );
}

export default function TravelerReviews() {
  const { testimonials } = useCms();
  const [index, setIndex] = useState(0);
  const reviews = testimonials.length
    ? testimonials
    : [
        {
          id: "fallback",
          quote: "SpiceTrip made our Europe trip effortless!",
          author: "Rohan Mehta",
          location: "Mysore",
          rating: 5,
        },
      ];

  const current = reviews[index % reviews.length];

  const prev = () =>
    setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((i) => (i + 1) % reviews.length);

  return (
    <section className="py-16 md:py-20 bg-[#F7F6F3]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4 mb-10">
          <h2 className="flex items-center text-xl sm:text-2xl font-bold uppercase tracking-[0.06em] text-[#171717]">
            <SectionMark />
            Traveller stories
          </h2>
          <Link
            href="/about"
            className="text-sm font-medium text-[#525252] hover:text-[#171717] inline-flex items-center gap-1 shrink-0 transition-colors"
          >
            Read more
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <blockquote className="text-2xl sm:text-3xl md:text-[2rem] font-medium text-[#171717] leading-snug tracking-tight mb-6">
              “{current.quote}”
            </blockquote>
            <p className="text-sm text-[#737373] font-medium mb-8">
              — {current.author}
              {current.location ? `, ${current.location}` : ""}
            </p>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                className="w-10 h-10 rounded-full border border-[#D4D4D4] bg-white hover:bg-[#EFEDE8] flex items-center justify-center transition-colors"
                aria-label="Previous story"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={next}
                className="w-10 h-10 rounded-full border border-[#D4D4D4] bg-white hover:bg-[#EFEDE8] flex items-center justify-center transition-colors"
                aria-label="Next story"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#E7E5E4]">
            <Image
              src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80"
              alt="Travellers enjoying a city view"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
