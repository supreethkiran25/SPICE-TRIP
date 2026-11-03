"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Plane, Hotel, Compass, Clock, Check, Sparkles, Tag } from "lucide-react";

interface DealItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  inclusions: string;
  discount: string;
  originalPrice: string;
  originalUsd: string;
  discountedPrice: string;
  discountedUsd: string;
  image: string;
  slug: string;
}

const DEALS: DealItem[] = [
  {
    id: "deal-1",
    title: "Explore Vietnam — Hanoi & Halong Bay",
    category: "Cultural",
    duration: "6 Days / 5 Nights",
    inclusions: "Includes: 5★ Overnight Cruise + French Quarter + Transfers",
    discount: "20% OFF",
    originalPrice: "₹43,999",
    originalUsd: "$999",
    discountedPrice: "₹34,999",
    discountedUsd: "$849",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=640&q=70",
    slug: "explore-vietnam",
  },
  {
    id: "deal-2",
    title: "Maldives — Barefoot Coral Atoll Sanctuary",
    category: "Honeymoon",
    duration: "4 Days / 3 Nights",
    inclusions: "Includes: Overwater Villa + Seaplane + House Reef Snorkel",
    discount: "15% OFF",
    originalPrice: "₹68,000",
    originalUsd: "$820",
    discountedPrice: "₹58,000",
    discountedUsd: "$699",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=640&q=70",
    slug: "maldives-luxury-escape",
  },
  {
    id: "deal-3",
    title: "Bali Classic Tour — Temples & Nusa Dua",
    category: "Island",
    duration: "5 Days / 4 Nights",
    inclusions: "Includes: Private Pool Villa + Uluwatu Sunset + Transfers",
    discount: "25% OFF",
    originalPrice: "₹35,999",
    originalUsd: "$850",
    discountedPrice: "₹26,999",
    discountedUsd: "$649",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=640&q=70",
    slug: "bali-classic-tour",
  },
  {
    id: "deal-4",
    title: "Dubai Luxury Extravaganza — Burj & Safari",
    category: "Luxury",
    duration: "4 Days / 3 Nights",
    inclusions: "Includes: 5★ Hotel + Desert BBQ Safari + Burj Khalifa",
    discount: "30% OFF",
    originalPrice: "₹55,000",
    originalUsd: "$1,150",
    discountedPrice: "₹38,500",
    discountedUsd: "$899",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=640&q=70",
    slug: "dubai-tour",
  },
  {
    id: "deal-5",
    title: "Splendid Thailand — Phuket & Krabi",
    category: "Island",
    duration: "5 Days / 4 Nights",
    inclusions: "Includes: Speedboat Tours + 4★ Beach Resort + Transfers",
    discount: "20% OFF",
    originalPrice: "₹28,500",
    originalUsd: "$650",
    discountedPrice: "₹22,999",
    discountedUsd: "$549",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=640&q=70",
    slug: "thailand-tour",
  },
  {
    id: "deal-6",
    title: "Kerala — God's Own Country Munnar & Alleppey",
    category: "Cultural",
    duration: "5 Days / 4 Nights",
    inclusions: "Includes: Private Houseboat + Tea Gardens + Safe Wheels Car",
    discount: "18% OFF",
    originalPrice: "₹22,500",
    originalUsd: "$480",
    discountedPrice: "₹18,500",
    discountedUsd: "$399",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=640&q=70",
    slug: "kerala-tour",
  },
];

export default function TopDeals() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredDeals =
    selectedFilter === "All"
      ? DEALS
      : DEALS.filter((d) => d.category === selectedFilter);

  return (
    <section id="deals" className="py-16 md:py-20 bg-gray-50/50 scroll-mt-28 perf-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Category Filter Buttons */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18181B] flex items-center space-x-2">
              <span>Top Deals & Limited-Time Offers</span>
              <Tag className="w-5 h-5 text-[#D31F25]" />
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Verified seasonal discounts with genuine inclusions and direct booking assurance
            </p>
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto pb-1">
            {["All", "Island", "Cultural", "Honeymoon", "Luxury"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`text-xs font-bold px-3.5 py-1.5 rounded-full transition-all shrink-0 ${
                  selectedFilter === cat
                    ? "bg-[#D31F25] text-white shadow-sm"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
                }`}
              >
                {cat === "All" ? "All Deals" : cat}
              </button>
            ))}
            <Link
              href="/packages"
              className="inline-flex items-center space-x-1 text-xs font-bold text-[#D31F25] hover:text-[#B91C1C] transition-colors pl-2 shrink-0 group"
            >
              <span>All packages</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Responsive Grid of Deal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDeals.slice(0, 4).map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col group transform hover:-translate-y-1.5"
            >
              {/* Image with animated discount badge */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <Image
                  src={deal.image}
                  alt={deal.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={65}
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 bg-[#D31F25] text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-lg uppercase tracking-wider">
                  {deal.discount}
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-base text-[#18181B] group-hover:text-[#D31F25] transition-colors line-clamp-1">
                    {deal.title}
                  </h3>
                  <div className="flex items-center space-x-1 text-xs text-gray-500 mt-1">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>{deal.duration}</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-2 line-clamp-2">
                    {deal.inclusions}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="block text-[11px] line-through text-gray-400">
                      {deal.originalPrice}
                    </span>
                    <span className="text-lg font-extrabold text-[#D31F25]">
                      {deal.discountedPrice}
                    </span>
                  </div>

                  <Link
                    href={`/packages/${deal.slug}`}
                    className="inline-flex items-center space-x-1 px-4 py-2 rounded-full bg-red-50 text-[#D31F25] hover:bg-[#D31F25] hover:text-white text-xs font-bold transition-all shadow-sm group-hover:shadow"
                  >
                    <span>View Tour</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
