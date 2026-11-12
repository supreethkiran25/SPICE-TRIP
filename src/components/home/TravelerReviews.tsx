"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCms } from "@/components/cms/CmsProvider";
import { getPackageCover } from "@/lib/package-covers";

function SectionMark() {
  return (
    <span className="inline-flex flex-col gap-[3px] mr-2.5 shrink-0" aria-hidden>
      <span className="block w-4 h-[2px] bg-[#171717]" />
      <span className="block w-2.5 h-[2px] bg-[#171717]" />
    </span>
  );
}

function storyImage(destination?: string, tripType?: string) {
  const text = `${destination || ""} ${tripType || ""}`.toLowerCase();
  const keys = [
    "vietnam",
    "maldives",
    "bali",
    "dubai",
    "thailand",
    "kerala",
    "nepal",
    "himachal",
    "rajasthan",
    "andaman",
    "singapore",
  ];
  const hit = keys.find((k) => text.includes(k));
  if (hit === "himachal") {
    return getPackageCover(
      "himachal-pradesh-tour",
      "Himachal Pradesh",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80"
    );
  }
  if (hit) return getPackageCover(hit, hit);
  return "/images/destinations/traveler.jpg";
}

export default function TravelerReviews() {
  const { testimonials } = useCms();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const reviews = testimonials.length
    ? testimonials
    : [
        {
          id: "fallback",
          quote: "SpiceTrip made our Europe trip effortless!",
          author: "Rohan Mehta",
          location: "Mysore",
          destination: "Europe",
          rating: 5,
          tripType: "Holiday",
          date: "",
        },
      ];

  useEffect(() => {
    if (paused || reviews.length < 2) return;
    const timer = setInterval(() => {
      if (document.hidden) return;
      setIndex((i) => (i + 1) % reviews.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [paused, reviews.length]);

  const current = reviews[index % reviews.length];
  const image = storyImage(current.destination, current.tripType);
  const placeLabel =
    current.destination?.replace(/\s*\(.*\)\s*$/, "").trim() ||
    "Journey";

  const prev = () =>
    setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((i) => (i + 1) % reviews.length);

  return (
    <section
      className="py-16 md:py-20 bg-[#F7F6F3]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
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
            <blockquote
              key={current.id}
              className="text-xl sm:text-2xl md:text-[1.65rem] font-medium text-[#171717] leading-snug tracking-tight mb-6 animate-in fade-in duration-500 line-clamp-4"
            >
              “{current.quote}”
            </blockquote>
            <p className="text-sm text-[#737373] font-medium mb-2">
              — {current.author}
              {current.location ? `, ${current.location}` : ""}
            </p>
            {current.destination && (
              <p className="text-xs uppercase tracking-[0.14em] text-[#A3A3A3] mb-8">
                {placeLabel}
              </p>
            )}
            {!current.destination && <div className="mb-8" />}

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
              <div className="flex items-center gap-1.5 ml-3">
                {reviews.map((r, i) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Go to story ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index % reviews.length
                        ? "w-5 bg-[#171717]"
                        : "w-1.5 bg-[#D4D4D4] hover:bg-[#A3A3A3]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#E7E5E4]">
            <Image
              key={image}
              src={image}
              alt={placeLabel}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium tracking-wide">
              {placeLabel}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
