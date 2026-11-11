"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { useCms } from "@/components/cms/CmsProvider";
import { formatPrice } from "@/lib/utils";

export default function TopDeals() {
  const { homepage, packages } = useCms();
  const [selectedFilter, setSelectedFilter] = useState("All");

  const deals = useMemo(() => {
    if (homepage.deals.length) return homepage.deals;
    return packages
      .filter((pkg) => pkg.featured)
      .slice(0, 6)
      .map((pkg) => ({
        id: pkg.id,
        title: pkg.title,
        category: pkg.category[0] || pkg.region,
        duration: `${pkg.duration.days} Days / ${pkg.duration.nights} Nights`,
        inclusions: pkg.highlights[0] ? `Includes: ${pkg.highlights[0]}` : pkg.description,
        discount: "Special",
        originalPrice: "",
        originalUsd: "",
        discountedPrice: formatPrice(pkg.startingPrice, pkg.currency),
        discountedUsd: "",
        image: pkg.images[0] || "",
        slug: pkg.slug,
      }));
  }, [homepage.deals, packages]);

  const filteredDeals =
    selectedFilter === "All"
      ? deals
      : deals.filter((d) => d.category === selectedFilter);

  return (
    <section id="deals" className="py-16 md:py-20 bg-gray-50/50 scroll-mt-28 perf-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Category Filter Buttons */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#18181B] flex items-center space-x-2">
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
                <div className="absolute top-3 left-3 bg-[#D31F25] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wider">
                  {deal.discount}
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base text-[#18181B] group-hover:text-[#D31F25] transition-colors line-clamp-1">
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
                    <span className="text-lg font-bold text-[#D31F25]">
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
