"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useCms } from "@/components/cms/CmsProvider";
import { formatPrice } from "@/lib/utils";

export default function PopularDestinations() {
  const { homepage, packages } = useCms();
  const tours = useMemo(() => {
    if (homepage.popularTours.length) return homepage.popularTours;
    return packages
      .filter((pkg) => pkg.featured)
      .slice(0, 7)
      .map((pkg) => ({
        id: pkg.id,
        title: pkg.title,
        location: pkg.destination,
        price: formatPrice(pkg.startingPrice, pkg.currency),
        duration: `${pkg.duration.days} Days`,
        style: pkg.category[0] || pkg.region,
        description: pkg.description,
        slug: pkg.slug,
        image: pkg.images[0] || "/images/destinations/vietnam.jpg",
      }));
  }, [homepage.popularTours, packages]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const tourCount = Math.max(tours.length, 1);

  // Auto-advance one by one every 5.5 seconds
  useEffect(() => {
    if (isHovered || tours.length < 2) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tours.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isHovered, tours.length]);

  const prevTour = () => {
    setActiveIndex((prev) => (prev - 1 + tourCount) % tourCount);
  };

  const nextTour = () => {
    setActiveIndex((prev) => (prev + 1) % tourCount);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + tourCount) % tourCount);
      }
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % tourCount);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [tourCount]);

  // Compute the 5 symmetric slots around activeIndex: [-2, -1, 0, +1, +2]
  // Slot 2 is ALWAYS the single enlarged center card
  const getSlot = (offset: number) => {
    const index = (activeIndex + offset + tourCount) % tourCount;
    return { tour: tours[index], index, offset };
  };

  if (!tours.length) return null;

  const slots = [
    getSlot(-2), // 0: Left Outer
    getSlot(-1), // 1: Left Inner
    getSlot(0),  // 2: EXACT CENTER (Only this is enlarged!)
    getSlot(1),  // 3: Right Inner
    getSlot(2),  // 4: Right Outer
  ];

  return (
    <section
      id="destinations"
      className="py-16 md:py-24 bg-[#FAFAF8] relative overflow-hidden scroll-mt-24"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span id="popular-tours" className="sr-only" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow Pill */}
        <div className="flex justify-center mb-3">
          <span className="px-4 py-1.5 rounded-full border border-gray-300/80 bg-white text-[11px] font-extrabold uppercase tracking-[0.2em] text-gray-700 shadow-xs">
            Your Journey
          </span>
        </div>

        {/* Editorial Serif Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#18181B] tracking-tight text-center mb-12 sm:mb-16">
          Discover{" "}
          <span className="font-serif italic font-normal text-[#18181B]">
            Our Most
          </span>{" "}
          Popular Tours
        </h2>

        {/* 5-Slot Arched Depth Carousel (Exactly ONE Center Card Enlarged) */}
        <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center min-h-[460px] sm:min-h-[520px]">
          <div className="flex items-center justify-center w-full gap-3 sm:gap-4 md:gap-5">
            {slots.map(({ tour, index, offset }, slotIdx) => {
              const isCenter = offset === 0;
              const isInner = Math.abs(offset) === 1;
              const isOuter = Math.abs(offset) === 2;

              return (
                <div
                  key={`${tour.id}-${offset}`}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all duration-500 ease-out cursor-pointer select-none rounded-[28px] overflow-hidden shrink-0 relative will-change-transform ${
                    isCenter
                      ? "w-[270px] sm:w-[310px] md:w-[340px] h-[450px] sm:h-[490px] md:h-[520px] z-30 shadow-2xl -translate-y-4 ring-2 ring-black/10"
                      : isInner
                      ? "w-[200px] sm:w-[230px] md:w-[250px] h-[380px] sm:h-[420px] md:h-[440px] z-20 opacity-85 hover:opacity-100 shadow-xl translate-y-2 hover:-translate-y-1"
                      : "hidden md:block w-[160px] lg:w-[190px] h-[330px] sm:h-[370px] md:h-[390px] z-10 opacity-60 hover:opacity-85 shadow-md translate-y-7 hover:translate-y-4"
                  }`}
                >
                  <div className="relative w-full h-full bg-gray-900 group">
                    {/* Destination Photo — Local High-Res */}
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      unoptimized
                      priority={isCenter || isInner}
                      className="object-cover transition-transform duration-700 group-hover:scale-108"
                    />

                    {/* Dark gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-300 ${
                        isCenter
                          ? "from-black/90 via-black/35 to-black/10"
                          : "from-black/85 via-black/30 to-black/20"
                      }`}
                    />

                    {/* Bottom Frosted Glassmorphism Card */}
                    <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3.5 z-10">
                      <div className="backdrop-blur-md bg-black/60 border border-white/20 rounded-2xl p-3 sm:p-4 text-white shadow-xl transition-all">
                        {/* Title & Price Pill */}
                        <div className="flex items-center justify-between gap-1.5 mb-1">
                          <h3
                            className={`font-bold text-white tracking-tight truncate ${
                              isCenter ? "text-sm sm:text-base" : "text-xs sm:text-sm"
                            }`}
                          >
                            {tour.title}
                          </h3>
                          <span
                            className={`shrink-0 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-extrabold rounded-full ${
                              isCenter
                                ? "text-[11px] px-2.5 py-0.5"
                                : "text-[10px] px-2 py-0.5"
                            }`}
                          >
                            {tour.price}
                          </span>
                        </div>

                        {/* Description — ONLY shown on the single enlarged center card */}
                        {isCenter && (
                          <p className="text-[11px] text-white/80 line-clamp-2 leading-relaxed my-2 animate-in fade-in">
                            {tour.description}
                          </p>
                        )}

                        {/* Metadata Tag Pills */}
                        <div className="flex items-center space-x-1.5 text-[10px] text-white/70 font-semibold mb-2.5">
                          <span className="bg-white/10 px-2 py-0.5 rounded-md truncate max-w-[100px]">
                            {tour.style}
                          </span>
                          <span>•</span>
                          <span>{tour.duration}</span>
                        </div>

                        {/* Explore White Pill Button */}
                        <Link
                          href={`/packages/${tour.slug}`}
                          onClick={(e) => e.stopPropagation()}
                          className={`w-full bg-white hover:bg-gray-100 text-[#18181B] font-extrabold rounded-full flex items-center justify-center space-x-1 shadow-md transition-all hover:scale-102 ${
                            isCenter ? "py-2 text-xs" : "py-1.5 text-[11px]"
                          }`}
                        >
                          <span>Explore</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Bottom Controls */}
        <div className="flex items-center justify-center space-x-6 mt-10">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={prevTour}
            className="w-11 h-11 rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 shadow-sm flex items-center justify-center transition-all hover:scale-105 active:scale-95"
            aria-label="Previous tour"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Centered View More Tours */}
          <Link
            href="/packages"
            className="text-xs sm:text-sm font-extrabold text-gray-800 hover:text-[#D31F25] uppercase tracking-wider transition-colors inline-flex items-center space-x-1"
          >
            <span>View More Tours</span>
          </Link>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={nextTour}
            className="w-11 h-11 rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 shadow-sm flex items-center justify-center transition-all hover:scale-105 active:scale-95"
            aria-label="Next tour"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
