"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Calendar, Users, MapPin, ChevronDown, Plus, Minus } from "lucide-react";
import { DESTINATIONS } from "@/lib/data/packages";

export default function TravelSearch() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(1);
  const [travelerDropdownOpen, setTravelerDropdownOpen] = useState(false);
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);

  const filteredSuggestions = DESTINATIONS.filter((d) =>
    d.name.toLowerCase().includes(destination.toLowerCase())
  );

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination.trim()) params.set("search", destination.trim());
    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);
    params.set("travelers", `${adults} Adults, ${childrenCount} Child`);

    router.push(`/packages?${params.toString()}`);
  };

  return (
    <section className="relative -mt-10 sm:-mt-14 z-30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <form
          onSubmit={handleSearchSubmit}
          className="bg-white rounded-3xl md:rounded-full p-2.5 sm:p-3 shadow-2xl border border-gray-100 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2 divide-y md:divide-y-0 md:divide-x divide-gray-100"
        >
          {/* 1. Destination Field */}
          <div className="relative flex-1 px-4 py-2">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-red-50 text-[#D31F25] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <label className="block text-[11px] font-bold text-[#18181B] uppercase tracking-wider">
                  Where to?
                </label>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => {
                    setDestination(e.target.value);
                    setSuggestionsOpen(true);
                  }}
                  onFocus={() => setSuggestionsOpen(true)}
                  placeholder="Search destinations"
                  className="w-full text-xs sm:text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none bg-transparent font-medium"
                />
              </div>
            </div>

            {/* Destination Autocomplete Dropdown */}
            {suggestionsOpen && destination.length > 0 && (
              <div className="absolute top-full left-0 right-0 z-40 bg-white border border-gray-100 rounded-2xl shadow-xl max-h-56 overflow-y-auto mt-2 p-2">
                {filteredSuggestions.length > 0 ? (
                  filteredSuggestions.map((dest) => (
                    <button
                      key={dest.id}
                      type="button"
                      onClick={() => {
                        setDestination(dest.name);
                        setSuggestionsOpen(false);
                      }}
                      className="w-full text-left px-3.5 py-2.5 text-xs text-gray-800 hover:bg-red-50 rounded-xl flex items-center justify-between transition-colors"
                    >
                      <span className="font-semibold text-gray-900">{dest.name}</span>
                      <span className="text-[11px] text-gray-500">{dest.country}</span>
                    </button>
                  ))
                ) : (
                  <div className="px-3.5 py-2.5 text-xs text-gray-500">
                    No exact match. Click Search to view all tours.
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 2. Check In Date */}
          <div className="flex-1 px-4 py-2">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-red-50 text-[#D31F25] flex items-center justify-center shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <label className="block text-[11px] font-bold text-[#18181B] uppercase tracking-wider">
                  Check In
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full text-xs sm:text-sm text-gray-700 focus:outline-none bg-transparent font-medium cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* 3. Check Out Date */}
          <div className="flex-1 px-4 py-2">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-red-50 text-[#D31F25] flex items-center justify-center shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <label className="block text-[11px] font-bold text-[#18181B] uppercase tracking-wider">
                  Check Out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  min={checkIn || new Date().toISOString().split("T")[0]}
                  className="w-full text-xs sm:text-sm text-gray-700 focus:outline-none bg-transparent font-medium cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* 4. Travelers Selector with Interactive Popover */}
          <div className="relative flex-1 px-4 py-2">
            <div
              onClick={() => setTravelerDropdownOpen(!travelerDropdownOpen)}
              className="flex items-center space-x-3 cursor-pointer select-none"
            >
              <div className="w-8 h-8 rounded-full bg-red-50 text-[#D31F25] flex items-center justify-center shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <label className="block text-[11px] font-bold text-[#18181B] uppercase tracking-wider">
                  Travelers
                </label>
                <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-gray-700">
                  <span>
                    {adults} Adult{adults > 1 ? "s" : ""}, {childrenCount} Child{childrenCount !== 1 ? "ren" : ""}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400 ml-1" />
                </div>
              </div>
            </div>

            {/* Interactive Travelers Counter Dropdown */}
            {travelerDropdownOpen && (
              <div className="absolute top-full right-0 z-40 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl mt-2 p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-bold text-gray-900">Adults</span>
                    <span className="block text-[10px] text-gray-500">Ages 12+</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <button
                      type="button"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-gray-600"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-bold text-gray-900 w-4 text-center">{adults}</span>
                    <button
                      type="button"
                      onClick={() => setAdults(adults + 1)}
                      className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-gray-600"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div>
                    <span className="block text-xs font-bold text-gray-900">Children</span>
                    <span className="block text-[10px] text-gray-500">Ages 2-11</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <button
                      type="button"
                      onClick={() => setChildrenCount(Math.max(0, childrenCount - 1))}
                      className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-gray-600"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-bold text-gray-900 w-4 text-center">{childrenCount}</span>
                    <button
                      type="button"
                      onClick={() => setChildrenCount(childrenCount + 1)}
                      className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-gray-600"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setTravelerDropdownOpen(false)}
                  className="w-full py-2 bg-red-50 text-[#D31F25] hover:bg-red-100 rounded-xl text-xs font-bold transition-colors"
                >
                  Done
                </button>
              </div>
            )}
          </div>

          {/* 5. Search Action Button */}
          <div className="p-1">
            <button
              type="submit"
              className="w-full md:w-auto inline-flex items-center justify-center space-x-2 bg-[#D31F25] hover:bg-[#B91C1C] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide shadow-lg shadow-red-600/30 hover:shadow-xl transition-all"
            >
              <Search className="w-4 h-4" />
              <span>Search</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
