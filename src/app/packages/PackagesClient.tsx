"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { PACKAGES } from "@/lib/data/packages";
import { formatPrice } from "@/lib/utils";
import { Clock, Star, MapPin, Search, Filter, ArrowRight, Sparkles } from "lucide-react";

export default function PackagesClient() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams?.get("search") || "";
  const initialType = searchParams?.get("type") || "All";

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialType);
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "duration">("featured");

  const categories = ["All", "International", "Domestic", "Honeymoon", "Family Holidays", "Adventure"];

  const filteredAndSortedPackages = useMemo(() => {
    return PACKAGES.filter((pkg) => {
      // Category filter
      if (selectedCategory !== "All") {
        if (selectedCategory === "International" && pkg.region !== "International") return false;
        if (selectedCategory === "Domestic" && pkg.region !== "Domestic") return false;
        if (selectedCategory === "Honeymoon" && !pkg.category.includes("Honeymoon")) return false;
        if (selectedCategory === "Family Holidays" && !pkg.category.includes("Family Holidays")) return false;
        if (selectedCategory === "Adventure" && !pkg.category.includes("Adventure")) return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = pkg.title.toLowerCase().includes(q);
        const matchesDest = pkg.destination.toLowerCase().includes(q);
        const matchesCountry = pkg.country.toLowerCase().includes(q);
        return matchesTitle || matchesDest || matchesCountry;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return (a.startingPrice || 0) - (b.startingPrice || 0);
      if (sortBy === "price-desc") return (b.startingPrice || 0) - (a.startingPrice || 0);
      if (sortBy === "duration") return a.duration.days - b.duration.days;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="bg-background min-h-screen py-16 md:py-24">
      <div className="max-w-container mx-auto px-6">
        {/* Header Title */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center space-x-2 text-xs font-sans uppercase tracking-[0.2em] text-terracotta font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Expeditions</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-deep mb-4">
            Tour Packages & Journeys
          </h1>
          <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
            Every package is an authentic, verified SpiceTrip offering backed by Safe Wheels private mobility and IATA airline ticketing. Explore day-by-day itineraries, exact verified inclusions, and transparent pricing.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-5 border border-sand/40 rounded-sm shadow-sm mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-foreground-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search packages by destination, title, or country..."
                className="w-full bg-background-secondary/40 border border-sand/50 pl-10 pr-4 py-2.5 text-xs text-foreground placeholder:text-foreground-muted/60 rounded-sm focus:outline-none focus:border-forest"
              />
            </div>

            {/* Category Select */}
            <div className="md:col-span-4">
              <div className="flex items-center space-x-1 overflow-x-auto pb-1 md:pb-0">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-[11px] font-sans uppercase tracking-wider px-3 py-2 rounded-sm whitespace-nowrap transition-colors ${
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

            {/* Sort Select */}
            <div className="md:col-span-3 flex items-center justify-end space-x-2">
              <span className="text-[11px] font-sans uppercase tracking-wider text-foreground-muted whitespace-nowrap">
                Sort by:
              </span>
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="bg-background-secondary/40 border border-sand/50 px-3 py-2 text-xs text-foreground rounded-sm focus:outline-none focus:border-forest"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="duration">Duration: Short to Long</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-foreground-muted mb-8 pb-3 border-b border-sand/30">
          <span>Showing <strong>{filteredAndSortedPackages.length}</strong> verified tour packages</span>
          {(searchQuery || selectedCategory !== "All") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="text-terracotta hover:underline font-semibold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Package Grid */}
        {filteredAndSortedPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white border border-sand/40 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-forest transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-sand/20">
                    <Image
                      src={pkg.images[0]}
                      alt={pkg.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3.5 right-3.5 bg-forest-deep text-white text-[10px] font-sans uppercase tracking-widest px-2.5 py-1 rounded-sm">
                      {pkg.region}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-sm text-[11px] font-sans font-semibold text-forest flex items-center space-x-1.5 shadow-sm">
                      <Clock className="w-3.5 h-3.5 text-terracotta" />
                      <span>{pkg.duration.nights}N / {pkg.duration.days}D</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-foreground-muted mb-2">
                      <span className="font-semibold text-terracotta tracking-wider uppercase text-[10px]">
                        {pkg.destination} • {pkg.country}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                        <span className="font-semibold text-foreground">{pkg.rating}</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-forest-deep group-hover:text-terracotta transition-colors line-clamp-1 mb-2.5">
                      <Link href={`/packages/${pkg.slug}`}>{pkg.title}</Link>
                    </h3>

                    <p className="text-xs text-foreground-muted line-clamp-2 leading-relaxed mb-4">
                      {pkg.description}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-sand/30">
                      {pkg.highlights.slice(0, 2).map((hl, i) => (
                        <div key={i} className="flex items-start space-x-2 text-[11px] text-foreground-muted">
                          <span className="text-terracotta font-bold">•</span>
                          <span className="line-clamp-1">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-sand/20 mt-4">
                  <div className="flex items-baseline justify-between py-3">
                    <div>
                      <span className="text-[10px] uppercase text-foreground-muted block">Starting Price</span>
                      <span className="font-serif text-xl font-bold text-forest-deep">
                        {formatPrice(pkg.startingPrice)}
                      </span>
                      <span className="text-[10px] text-foreground-muted"> / person</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <Link
                      href={`/packages/${pkg.slug}`}
                      className="inline-flex items-center justify-center border border-forest/30 hover:border-forest text-forest hover:bg-forest hover:text-white text-xs font-semibold uppercase tracking-wider py-2.5 rounded-sm transition-colors text-center"
                    >
                      Itinerary
                    </Link>
                    <Link
                      href={`/contact?package=${pkg.slug}#enquiry`}
                      className="inline-flex items-center justify-center bg-forest hover:bg-terracotta text-white text-xs font-semibold uppercase tracking-wider py-2.5 rounded-sm transition-colors text-center shadow-sm"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 border border-sand/40 text-center rounded-sm">
            <h3 className="font-serif text-2xl font-bold text-forest-deep mb-2">
              No matching journeys found
            </h3>
            <p className="text-xs text-foreground-muted mb-6">
              We frequently craft custom departures. Tell our Mysore concierge what you are looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="bg-forest text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-sm hover:bg-terracotta transition-colors"
            >
              Reset Search & Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

