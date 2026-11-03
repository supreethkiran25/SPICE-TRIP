"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Partner {
  id: string;
  name: string;
  image: string;
  description: string;
}

const PARTNERS: Partner[] = [
  {
    id: "iato",
    name: "IATO (Indian Association of Tour Operators)",
    image: "/images/partner-iato.png",
    description: "Allied Member Assurance",
  },
  {
    id: "incredible-india",
    name: "Ministry of Tourism Govt. of India",
    image: "/images/partner-incredible-india.png",
    description: "Recognized Tourism Entity",
  },
  {
    id: "tafi",
    name: "TAFI (Travel Agents Federation of India)",
    image: "/images/partner-tafi.png",
    description: "Accredited Travel Federation",
  },
  {
    id: "goair",
    name: "GoAir Airlines",
    image: "/images/partner-goair.png",
    description: "Domestic Aviation Partner",
  },
  {
    id: "jet-airways",
    name: "Jet Airways",
    image: "/images/partner-jet-airways.png",
    description: "Scheduled Airline Partner",
  },
  {
    id: "star-cruises",
    name: "Star Cruises",
    image: "/images/partner-star-cruises.png",
    description: "Asia-Pacific Cruise Operator",
  },
  {
    id: "royal-caribbean",
    name: "Royal Caribbean International",
    image: "/images/partner-royal-caribbean.png",
    description: "Global Ocean Voyages",
  },
  {
    id: "jungle-lodges",
    name: "Jungle Lodges & Resorts",
    image: "/images/partner-jungle-lodges.png",
    description: "Karnataka Eco-Resorts Partner",
  },
];

export default function OurPartnersCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoSpinning, setIsAutoSpinning] = useState(true);

  // Smooth continuous auto-spinning / carousel glide
  useEffect(() => {
    if (!isAutoSpinning) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 160, behavior: "smooth" });
        }
      }
    }, 2800);

    return () => clearInterval(interval);
  }, [isAutoSpinning]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -220, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 220, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading (Matching Official Spicetrip UI) */}
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#18181B] tracking-tight mb-8">
          Our Partners
        </h2>

        {/* Carousel Container with Circular Controls */}
        <div
          className="relative flex items-center justify-center"
          onMouseEnter={() => setIsAutoSpinning(false)}
          onMouseLeave={() => setIsAutoSpinning(true)}
        >
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 shadow-sm flex items-center justify-center shrink-0 mr-3 sm:mr-5 transition-all hover:scale-105 z-10"
            aria-label="Previous partner logo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Scrolling Partner Logos Track */}
          <div
            ref={scrollRef}
            className="flex items-center space-x-4 sm:space-x-6 overflow-x-auto py-3 scrollbar-none snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Duplicated for seamless loop */}
            {PARTNERS.concat(PARTNERS).map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="shrink-0 snap-center group"
              >
                <div className="w-32 sm:w-36 md:w-40 h-20 sm:h-24 bg-white border border-gray-200 rounded-sm px-3 py-2 flex items-center justify-center shadow-xs transition-all duration-300 group-hover:border-[#D31F25] group-hover:shadow-md transform group-hover:-translate-y-0.5">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={160}
                    height={90}
                    unoptimized
                    priority
                    className="w-full h-full object-contain p-1 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={scrollRight}
            className="w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 shadow-sm flex items-center justify-center shrink-0 ml-3 sm:mr-0 sm:ml-5 transition-all hover:scale-105 z-10"
            aria-label="Next partner logo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

