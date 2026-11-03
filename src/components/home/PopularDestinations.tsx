"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface TourItem {
  id: string;
  title: string;
  location: string;
  price: string;
  duration: string;
  style: string;
  description: string;
  slug: string;
  image: string;
}

const TOURS: TourItem[] = [
  {
    id: "pokhara",
    title: "Pokhara Retreat",
    location: "Himalayas",
    price: "₹28,500",
    duration: "5 Days",
    style: "Active & Serene",
    description: "Stay down beside the peaceful Phewa lake, surrounded by green hills, distant Annapurna peaks and quiet beauty.",
    slug: "kashmir-paradise",
    image: "/images/destinations/nepal.jpg",
  },
  {
    id: "maldives",
    title: "Maldives Barefoot",
    location: "Indian Ocean",
    price: "₹58,000",
    duration: "4 Days",
    style: "Luxury Atoll",
    description: "Private overwater sanctuary villas, coral lagoon snorkeling, and barefoot sunset dining over the sea.",
    slug: "maldives-luxury-escape",
    image: "/images/destinations/maldives.jpg",
  },
  {
    id: "vietnam",
    title: "Vietnam & Halong",
    location: "Indochina",
    price: "₹34,999",
    duration: "6 Days",
    style: "Heritage & Cruise",
    description: "Sail amidst emerald limestone karsts on an overnight luxury junk boat and wander lantern-lit ancient Hoi An.",
    slug: "explore-vietnam",
    image: "/images/destinations/vietnam.jpg",
  },
  {
    id: "bali",
    title: "Bali Sanctuary",
    location: "Indonesia",
    price: "₹26,999",
    duration: "5 Days",
    style: "Pool Villa & Temple",
    description: "Ubud jungle river valleys, cliffside Uluwatu sunset fire dances, and private luxury pool sanctuary villas.",
    slug: "bali-classic-tour",
    image: "/images/destinations/bali.jpg",
  },
  {
    id: "dubai",
    title: "Dubai Extravaganza",
    location: "UAE",
    price: "₹38,500",
    duration: "4 Days",
    style: "Desert & Skyline",
    description: "Burj Khalifa 124th floor observatory, red dune 4x4 safaris with starlight BBQ and Dubai Marina yachts.",
    slug: "dubai-tour",
    image: "/images/destinations/dubai.jpg",
  },
  {
    id: "kerala",
    title: "Kerala Backwaters",
    location: "God's Own Country",
    price: "₹18,500",
    duration: "5 Days",
    style: "Houseboat & Mist",
    description: "Munnar rolling tea plantations, spice-scented mountain mist, and private wooden houseboats on Alleppey canals.",
    slug: "kerala-tour",
    image: "/images/destinations/kerala.jpg",
  },
  {
    id: "thailand",
    title: "Splendid Thailand",
    location: "Phuket & Krabi",
    price: "₹22,999",
    duration: "5 Days",
    style: "Island Hopping",
    description: "Phi Phi limestone sea grottos, crystal lagoon longtail boats, and world-famous Andaman sunset beaches.",
    slug: "thailand-tour",
    image: "/images/destinations/thailand.jpg",
  },
];

export default function PopularDestinations() {
  const [activeIndex, setActiveIndex] = useState(0); // Start with Pokhara Retreat
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance one by one every 5.5 seconds
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TOURS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isHovered]);

  const prevTour = () => {
    setActiveIndex((prev) => (prev - 1 + TOURS.length) % TOURS.length);
  };

  const nextTour = () => {
    setActiveIndex((prev) => (prev + 1) % TOURS.length);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevTour();
      if (e.key === "ArrowRight") nextTour();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Compute the 5 symmetric slots around activeIndex: [-2, -1, 0, +1, +2]
  // Slot 2 is ALWAYS the single enlarged center card
  const getSlot = (offset: number) => {
    const index = (activeIndex + offset + TOURS.length) % TOURS.length;
    return { tour: TOURS[index], index, offset };
  };

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
