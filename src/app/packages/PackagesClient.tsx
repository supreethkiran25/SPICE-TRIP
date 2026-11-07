"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useCms } from "@/components/cms/CmsProvider";
import { formatPrice } from "@/lib/utils";
import { Search } from "lucide-react";

export default function PackagesClient() {
  const { packages } = useCms();
  const searchParams = useSearchParams();
  const initialSearch = searchParams?.get("search") || "";
  const initialType = searchParams?.get("type") || "All";

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialType);
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "duration">(
    "featured"
  );

  const categories = ["All", "International", "Domestic", "Honeymoon", "Family Holidays", "Adventure"];

  const filteredAndSortedPackages = useMemo(() => {
    return packages
      .filter((pkg) => {
        if (selectedCategory !== "All") {
          if (selectedCategory === "International" && pkg.region !== "International") return false;
          if (selectedCategory === "Domestic" && pkg.region !== "Domestic") return false;
          if (selectedCategory === "Honeymoon" && !pkg.category.includes("Honeymoon")) return false;
          if (
            selectedCategory === "Family Holidays" &&
            !pkg.category.includes("Family Holidays")
          )
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
    <div className="bg-white min-h-screen pt-28 sm:pt-32 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-charcoal mb-2">
            Packages
          </h1>
          <p className="text-sm text-zinc-500">Pick a trip. See duration and price.</p>
        </div>

        {/* Soft filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search destination"
                className="w-full bg-zinc-50 border border-zinc-200 rounded-full pl-11 pr-4 py-3 text-sm text-brand-charcoal placeholder:text-zinc-400 focus:outline-none focus:border-zinc-300 focus:ring-2 focus:ring-brand-spice/10"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "featured" | "price-asc" | "price-desc" | "duration")
              }
              className="bg-zinc-50 border border-zinc-200 rounded-full px-4 py-3 text-sm text-brand-charcoal focus:outline-none focus:border-zinc-300"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price · low</option>
              <option value="price-desc">Price · high</option>
              <option value="duration">Duration</option>
            </select>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? "bg-brand-charcoal text-white"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-zinc-400 mb-6">
          <span>
            {filteredAndSortedPackages.length} package
            {filteredAndSortedPackages.length !== 1 ? "s" : ""}
          </span>
          {(searchQuery || selectedCategory !== "All") && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="font-semibold text-brand-spice hover:text-brand-spice-dark"
            >
              Clear
            </button>
          )}
        </div>

        {filteredAndSortedPackages.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredAndSortedPackages.map((pkg) => (
              <li key={pkg.id}>
                <Link
                  href={`/packages/${pkg.slug}`}
                  className="group block rounded-3xl overflow-hidden border border-zinc-100 bg-white hover:-translate-y-0.5 hover:border-zinc-200 hover:shadow-md transition-all duration-200"
                >
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-zinc-100">
                    <Image
                      src={pkg.images[0]}
                      alt={pkg.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                    <span className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-brand-charcoal">
                      {pkg.region}
                    </span>
                    <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-white">
                      <p className="text-base sm:text-lg font-bold tracking-tight line-clamp-1">
                        {pkg.destination}
                      </p>
                      <p className="mt-1 text-xs text-white/80 line-clamp-1">{pkg.title}</p>
                      <p className="mt-2 text-sm font-semibold">
                        {pkg.duration.nights}N / {pkg.duration.days}D ·{" "}
                        <span className="text-white">{formatPrice(pkg.startingPrice)}</span>
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="rounded-3xl border border-zinc-100 bg-zinc-50 px-6 py-14 text-center">
            <h2 className="text-lg font-bold text-brand-charcoal mb-1">No packages found</h2>
            <p className="text-sm text-zinc-500 mb-5">Try another destination or clear filters.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="inline-flex items-center justify-center rounded-full bg-brand-spice hover:bg-brand-spice-dark text-white text-sm font-semibold px-5 py-2.5 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
