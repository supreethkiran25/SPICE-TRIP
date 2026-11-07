"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { DESTINATIONS } from "@/lib/data/packages";

export default function TravelSearch() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);

  const filteredSuggestions = DESTINATIONS.filter((d) =>
    d.name.toLowerCase().includes(destination.toLowerCase())
  );

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination.trim()) params.set("search", destination.trim());
    router.push(`/packages?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearchSubmit} className="relative w-full max-w-xl mx-auto">
      <div className="flex items-center gap-2 bg-white border border-zinc-200 rounded-full pl-5 pr-2 py-2 shadow-sm focus-within:border-zinc-300 focus-within:shadow-md transition-shadow">
        <Search className="w-4 h-4 text-zinc-400 shrink-0" />
        <input
          type="text"
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value);
            setSuggestionsOpen(true);
          }}
          onFocus={() => setSuggestionsOpen(true)}
          onBlur={() => setTimeout(() => setSuggestionsOpen(false), 150)}
          placeholder="Search destination"
          className="flex-1 min-w-0 text-sm text-brand-charcoal placeholder:text-zinc-400 focus:outline-none bg-transparent py-2"
          aria-label="Search destination"
        />
        <button
          type="submit"
          className="shrink-0 bg-brand-spice hover:bg-brand-spice-dark text-white rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
        >
          Search
        </button>
      </div>

      {suggestionsOpen && destination.length > 0 && (
        <div className="absolute top-full left-0 right-0 z-40 bg-white border border-zinc-200 rounded-2xl shadow-lg max-h-56 overflow-y-auto mt-2 p-2">
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((dest) => (
              <button
                key={dest.id}
                type="button"
                onClick={() => {
                  setDestination(dest.name);
                  setSuggestionsOpen(false);
                  router.push(`/packages?search=${encodeURIComponent(dest.name)}`);
                }}
                className="w-full text-left px-3.5 py-2.5 text-sm text-zinc-800 hover:bg-zinc-50 rounded-xl flex items-center justify-between transition-colors"
              >
                <span className="font-medium">{dest.name}</span>
                <span className="text-xs text-zinc-400">{dest.country}</span>
              </button>
            ))
          ) : (
            <div className="px-3.5 py-2.5 text-sm text-zinc-500">No match — search all packages</div>
          )}
        </div>
      )}
    </form>
  );
}
