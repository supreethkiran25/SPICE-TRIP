"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Compass, Sparkles, Send, ArrowRight, Star, Clock } from "lucide-react";
import { useCms } from "@/components/cms/CmsProvider";
import type { TravelPackage } from "@/types";

export default function TripRecommendationWidget() {
  const { packages } = useCms();
  const [preference, setPreference] = useState("Anywhere");
  const [budget, setBudget] = useState("Any Budget");
  const [results, setResults] = useState<TravelPackage[] | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleGetRecommendations = () => {
    let filtered = [...packages];

    if (preference === "Beaches") {
      filtered = filtered.filter((p) =>
        ["maldives", "bali", "thailand", "andaman", "kerala"].some((k) =>
          p.destination.toLowerCase().includes(k) || p.title.toLowerCase().includes(k)
        )
      );
    } else if (preference === "Honeymoon") {
      filtered = filtered.filter((p) =>
        ["honeymoon", "maldives", "vietnam", "bali"].some((k) =>
          p.slug.toLowerCase().includes(k) ||
          p.description.toLowerCase().includes(k) ||
          p.category.includes("Honeymoon")
        )
      );
    } else if (preference === "Cultural") {
      filtered = filtered.filter((p) =>
        ["vietnam", "karnataka", "golden-triangle", "dubai", "singapore"].some((k) =>
          p.slug.toLowerCase().includes(k) || p.destination.toLowerCase().includes(k)
        ) || p.category.includes("Cultural")
      );
    }

    if (budget === "Under ₹25,000") {
      filtered = filtered.filter((p) => (p.startingPrice ?? 0) <= 25000);
    } else if (budget === "₹25,000 - ₹45,000") {
      filtered = filtered.filter(
        (p) => (p.startingPrice ?? 0) > 25000 && (p.startingPrice ?? 0) <= 45000
      );
    } else if (budget === "Luxury ₹45,000+") {
      filtered = filtered.filter((p) => (p.startingPrice ?? 0) > 45000);
    }

    // Default to at least 3 packages if too narrow
    if (filtered.length === 0) {
      filtered = packages.slice(0, 3);
    }

    setResults(filtered.slice(0, 3));
    setHasSearched(true);
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-red-50/60 via-amber-50/40 to-orange-50/50 border border-red-100 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left Column: Graphic and Heading */}
            <div className="flex items-center space-x-4 w-full lg:w-auto">
              <div className="w-14 h-14 rounded-2xl bg-[#D31F25] text-white flex items-center justify-center shrink-0 shadow-md shadow-red-600/20">
                <Compass className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#18181B] tracking-tight">
                  Not sure where to go?
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                  Get personalized recommendations just for you.
                </p>
              </div>
            </div>

            {/* Right Column: Dropdowns & Action */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              {/* Destination preference dropdown */}
              <div className="w-full sm:w-48 bg-white rounded-2xl px-4 py-2.5 border border-red-100 shadow-sm">
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                  I want to go
                </label>
                <select
                  value={preference}
                  onChange={(e) => setPreference(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-semibold text-gray-900 focus:outline-none cursor-pointer"
                >
                  <option value="Anywhere">Anywhere</option>
                  <option value="Beaches">Tropical Beaches</option>
                  <option value="Honeymoon">Romantic Honeymoon</option>
                  <option value="Cultural">Culture & Heritage</option>
                </select>
              </div>

              {/* Budget dropdown */}
              <div className="w-full sm:w-48 bg-white rounded-2xl px-4 py-2.5 border border-red-100 shadow-sm">
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                  Budget
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-semibold text-gray-900 focus:outline-none cursor-pointer"
                >
                  <option value="Any Budget">Any Budget</option>
                  <option value="Under ₹25,000">Under ₹25,000</option>
                  <option value="₹25,000 - ₹45,000">₹25,000 - ₹45,000</option>
                  <option value="Luxury ₹45,000+">Luxury ₹45,000+</option>
                </select>
              </div>

              {/* Show Me Ideas Button */}
              <button
                type="button"
                onClick={handleGetRecommendations}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#D31F25] hover:bg-[#B91C1C] text-white rounded-2xl font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-red-600/25 hover:shadow-lg transition-all flex items-center justify-center space-x-2 shrink-0"
              >
                <span>Show Me Ideas</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Recommended Results Reveal */}
          {hasSearched && results && (
            <div className="mt-8 pt-6 border-t border-red-100 animate-in fade-in slide-in-from-top-3 duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D31F25] flex items-center space-x-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Curated For Your Preference:</span>
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  {results.length} matches found
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {results.map((pkg) => (
                  <Link
                    key={pkg.id}
                    href={`/packages/${pkg.slug}`}
                    className="group bg-white rounded-2xl p-3 border border-red-50 shadow-sm hover:shadow-md transition-all flex items-center space-x-3"
                  >
                    <div className="w-20 h-20 relative rounded-xl overflow-hidden shrink-0 bg-gray-100">
                      <Image
                        src={pkg.images?.[0] || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80"}
                        alt={pkg.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-xs text-[#18181B] line-clamp-1 group-hover:text-[#D31F25] transition-colors">
                        {pkg.title}
                      </h4>
                      <p className="text-[11px] text-gray-500 mt-0.5">
                        {pkg.duration.days}D/{pkg.duration.nights}N • {pkg.destination}
                      </p>
                      <div className="flex items-center justify-between mt-1 text-xs">
                        <span className="font-bold text-[#D31F25]">
                          {pkg.startingPrice ? `₹${pkg.startingPrice.toLocaleString("en-IN")}/-` : "Custom Quote"}
                        </span>
                        <span className="text-[10px] font-semibold text-gray-400 group-hover:text-[#D31F25] flex items-center space-x-0.5">
                          <span>View</span>
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
