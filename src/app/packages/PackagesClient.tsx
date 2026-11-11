"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useCms } from "@/components/cms/CmsProvider";
import { formatPrice } from "@/lib/utils";
import { getPackageCover } from "@/lib/package-covers";
import { Clock, Search } from "lucide-react";

export default function PackagesClient() {
  const { packages } = useCms();
  const searchParams = useSearchParams();
  const initialSearch = searchParams?.get("search") || "";
  const initialType = searchParams?.get("type") || "All";

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialType);
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "duration">("featured");

  const categories = ["All", "International", "Domestic", "Honeymoon", "Family Holidays", "Adventure"];

  const filteredAndSortedPackages = useMemo(() => {
    return packages
      .filter((pkg) => {
        if (selectedCategory !== "All") {
          if (selectedCategory === "International" && pkg.region !== "International") return false;
          if (selectedCategory === "Domestic" && pkg.region !== "Domestic") return false;
          if (selectedCategory === "Honeymoon" && !pkg.category.includes("Honeymoon")) return false;
          if (selectedCategory === "Family Holidays" && !pkg.category.includes("Family Holidays"))
            return false;
          if (selectedCategory === "Adventure" && !pkg.category.includes("Adventure")) return false;
        }

        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          return (
            pkg.title.toLowerCase().includes(q) ||
            pkg.destination.toLowerCase().includes(q) ||
            pkg.country.toLowerCase().includes(q)
          );
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return (a.startingPrice || 0) - (b.startingPrice || 0);
        if (sortBy === "price-desc") return (b.startingPrice || 0) - (a.startingPrice || 0);
        if (sortBy === "duration") return a.duration.days - b.duration.days;
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [packages, searchQuery, selectedCategory, sortBy]);

  return (
    <div className="bg-background min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#D31F25] mb-4">
            SpiceTrip
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold uppercase tracking-[0.04em] text-[#171717] mb-3">
            Packages
          </h1>
          <p className="text-sm sm:text-base text-[#737373] leading-relaxed font-light">
            Pick a trip. See the price. Enquire when ready.
          </p>
        </div>

        <div className="bg-white p-4 sm:p-5 border border-sand/40 rounded-2xl shadow-sm mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-foreground-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by place"
                className="w-full bg-background-secondary/40 border border-sand/50 pl-10 pr-4 py-2.5 text-xs text-foreground placeholder:text-foreground-muted/60 rounded-full focus:outline-none focus:border-forest"
              />
            </div>

            <div className="md:col-span-4">
              <div className="flex items-center space-x-1 overflow-x-auto pb-1 md:pb-0">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-[11px] font-sans uppercase tracking-wider px-3 py-2 rounded-full whitespace-nowrap transition-colors ${
                      selectedCategory === cat
                        ? "bg-forest text-white font-semibold"
                        : "bg-background-secondary/60 text-foreground-muted hover:bg-sand/30"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-3 flex items-center justify-end space-x-2">
              <span className="text-[11px] font-sans uppercase tracking-wider text-foreground-muted whitespace-nowrap">
                Sort
              </span>
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="bg-background-secondary/40 border border-sand/50 px-3 py-2 text-xs text-foreground rounded-full focus:outline-none focus:border-forest"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price low to high</option>
                <option value="price-desc">Price high to low</option>
                <option value="duration">Duration</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-foreground-muted mb-6 pb-3 border-b border-sand/30">
          <span>{filteredAndSortedPackages.length} packages</span>
          {(searchQuery || selectedCategory !== "All") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="text-terracotta hover:underline font-semibold"
            >
              Clear
            </button>
          )}
        </div>

        {filteredAndSortedPackages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredAndSortedPackages.map((pkg) => {
              const cover = getPackageCover(pkg.slug, pkg.destination, pkg.images?.[0]);
              return (
                <Link
                  key={pkg.id}
                  href={`/packages/${pkg.slug}`}
                  className="bg-white border border-sand/40 rounded-3xl overflow-hidden flex flex-col h-full group hover:border-forest transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-sand/20">
                    <Image
                      src={cover}
                      alt={pkg.destination}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-sans font-semibold text-forest flex items-center space-x-1.5 shadow-sm">
                      <Clock className="w-3.5 h-3.5 text-terracotta" />
                      <span>
                        {pkg.duration.nights}N / {pkg.duration.days}D
                      </span>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col flex-1 min-h-[118px]">
                    <h3 className="text-lg font-bold text-forest-deep group-hover:text-terracotta transition-colors line-clamp-1 mb-1">
                      {pkg.destination}
                    </h3>
                    <p className="text-xs text-foreground-muted line-clamp-2 mb-3 leading-relaxed">
                      {pkg.title}
                    </p>

                    <div className="mt-auto flex items-end justify-between gap-2 pt-3 border-t border-sand/30">
                      <div>
                        <span className="text-[10px] uppercase text-foreground-muted block">From</span>
                        <span className="text-lg font-bold text-forest-deep">
                          {formatPrice(pkg.startingPrice)}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-forest group-hover:text-terracotta">
                        View
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="bg-white p-12 border border-sand/40 text-center rounded-3xl">
            <h3 className="text-2xl font-bold text-forest-deep mb-2">No packages found</h3>
            <p className="text-xs text-foreground-muted mb-6">Try another place or clear filters.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="bg-forest text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-full hover:bg-terracotta transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
