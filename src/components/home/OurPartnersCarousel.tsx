"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Partner {
  id: string;
  name: string;
  image: string;
}

/**
 * 10 Official Partners with authentic logos provided by client:
 * Ministry of Tourism, IATA, TAFI, flysmart Holidays, Jet Airways,
 * IATO, KSTDC, Jungle Lodges & Resorts, Royal Caribbean, Star Cruises.
 */
const PARTNERS: Partner[] = [
  {
    id: "incredible-india",
    name: "Ministry of Tourism Govt. of India",
    image: "/images/partners/incredible-india.png",
  },
  {
    id: "iata",
    name: "IATA",
    image: "/images/partners/iata.png",
  },
  {
    id: "tafi",
    name: "TAFI",
    image: "/images/partners/tafi.png",
  },
  {
    id: "flysmart",
    name: "flysmart Holidays",
    image: "/images/partners/flysmart.png",
  },
  {
    id: "jet-airways",
    name: "Jet Airways",
    image: "/images/partners/jet-airways.png",
  },
  {
    id: "iato",
    name: "IATO",
    image: "/images/partners/iato.png",
  },
  {
    id: "kstdc",
    name: "KSTDC",
    image: "/images/partners/kstdc.png",
  },
  {
    id: "jungle-lodges",
    name: "Jungle Lodges & Resorts",
    image: "/images/partners/jungle-lodges.png",
  },
  {
    id: "royal-caribbean",
    name: "Royal Caribbean",
    image: "/images/partners/royal-caribbean.png",
  },
  {
    id: "star-cruises",
    name: "Star Cruises",
    image: "/images/partners/star-cruises.png",
  },
];

export default function OurPartnersCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Smooth continuous auto-gliding carousel
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 230, behavior: "smooth" });
        }
      }
    }, 2800);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -260, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 260, behavior: "smooth" });
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-t border-gray-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Header with SpiceTrip Colors */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#18181B] tracking-tight">
            Our <span className="text-[#D31F25]">Partners</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-500">
            Accredited by leading global aviation authorities, government tourism bodies &amp; luxury cruise lines.
          </p>
        </div>

        {/* Carousel Container with Circular Controls */}
        <div
          className="relative flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 hover:text-[#D31F25] hover:border-[#D31F25] shadow-xs flex items-center justify-center shrink-0 mr-3 sm:mr-5 transition-all hover:scale-105 z-10"
            aria-label="Previous partner logo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Scrolling Partner Logos Track */}
          <div
            ref={scrollRef}
            className="flex items-center space-x-5 sm:space-x-7 overflow-x-auto py-3 px-2 scrollbar-none snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {PARTNERS.concat(PARTNERS).map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="shrink-0 snap-center group text-center"
              >
                {/* Clean Logo Box */}
                <div className="w-44 sm:w-50 md:w-56 h-26 sm:h-28 md:h-30 bg-white border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-center shadow-xs transition-all duration-300 group-hover:border-[#D31F25] group-hover:shadow-md transform group-hover:-translate-y-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={partner.image}
                    alt={partner.name}
                    width={260}
                    height={130}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full max-w-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Partner Name Label */}
                <p className="mt-2.5 text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-[#D31F25] transition-colors truncate max-w-[160px] sm:max-w-[200px] mx-auto">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={scrollRight}
            className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 hover:text-[#D31F25] hover:border-[#D31F25] shadow-xs flex items-center justify-center shrink-0 ml-3 sm:ml-5 transition-all hover:scale-105 z-10"
            aria-label="Next partner logo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
