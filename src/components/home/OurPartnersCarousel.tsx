"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Partner {
  id: string;
  name: string;
  image: string;
  description: string;
}

/** High-clarity local assets (prefer SVG plates; PNG fallbacks kept in /images). */
const PARTNERS: Partner[] = [
  {
    id: "iato",
    name: "IATO (Indian Association of Tour Operators)",
    image: "/images/partners/iato.svg",
    description: "Allied Member Assurance",
  },
  {
    id: "incredible-india",
    name: "Ministry of Tourism Govt. of India",
    image: "/images/partners/incredible-india.svg",
    description: "Recognized Tourism Entity",
  },
  {
    id: "tafi",
    name: "TAFI (Travel Agents Federation of India)",
    image: "/images/partners/tafi.svg",
    description: "Accredited Travel Federation",
  },
  {
    id: "goair",
    name: "GoAir Airlines",
    image: "/images/partners/goair.svg",
    description: "Domestic Aviation Partner",
  },
  {
    id: "jet-airways",
    name: "Jet Airways",
    image: "/images/partners/jet-airways.svg",
    description: "Scheduled Airline Partner",
  },
  {
    id: "star-cruises",
    name: "Star Cruises",
    image: "/images/partners/star-cruises.svg",
    description: "Asia-Pacific Cruise Operator",
  },
  {
    id: "royal-caribbean",
    name: "Royal Caribbean International",
    image: "/images/partners/royal-caribbean.svg",
    description: "Global Ocean Voyages",
  },
  {
    id: "jungle-lodges",
    name: "Jungle Lodges & Resorts",
    image: "/images/partners/jungle-lodges.svg",
    description: "Karnataka Eco-Resorts Partner",
  },
];

export default function OurPartnersCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoSpinning, setIsAutoSpinning] = useState(true);

  useEffect(() => {
    if (!isAutoSpinning) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 180, behavior: "smooth" });
        }
      }
    }, 2800);

    return () => clearInterval(interval);
  }, [isAutoSpinning]);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -240, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 240, behavior: "smooth" });
  };

  return (
    <section className="py-12 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#18181B] tracking-tight mb-8">
          Our Partners
        </h2>

        <div
          className="relative flex items-center justify-center"
          onMouseEnter={() => setIsAutoSpinning(false)}
          onMouseLeave={() => setIsAutoSpinning(true)}
        >
          <button
            type="button"
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 shadow-sm flex items-center justify-center shrink-0 mr-3 sm:mr-5 transition-all hover:scale-105 z-10"
            aria-label="Previous partner logo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex items-center space-x-4 sm:space-x-6 overflow-x-auto py-3 scrollbar-none snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {PARTNERS.concat(PARTNERS).map((partner, index) => (
              <div key={`${partner.id}-${index}`} className="shrink-0 snap-center group">
                <div className="w-40 sm:w-48 md:w-52 h-28 sm:h-32 bg-white border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-center shadow-sm transition-all duration-300 group-hover:border-[#D31F25] group-hover:shadow-md transform group-hover:-translate-y-0.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={partner.image}
                    alt={partner.name}
                    width={320}
                    height={180}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={scrollRight}
            className="w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 shadow-sm flex items-center justify-center shrink-0 ml-3 sm:ml-5 transition-all hover:scale-105 z-10"
            aria-label="Next partner logo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
