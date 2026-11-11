"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, Search } from "lucide-react";
import { DESTINATIONS } from "@/lib/data/packages";

const HERO_IMAGE = "/images/hero-oia-sunset-4k.jpg";

export default function Hero() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const suggestions = DESTINATIONS.filter((d) =>
    d.name.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 6);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("search", query.trim());
    router.push(`/packages?${params.toString()}`);
  };

  return (
    <section className="relative h-[100svh] min-h-[100svh] flex flex-col overflow-hidden bg-[#F5F2EC]">
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="Oia, Santorini blue domes at sunset"
          fill
          priority
          sizes="100vw"
          quality={100}
          className="object-cover object-[70%_40%]"
        />
        {/* Soft left wash — dark type readable, sunset photo open on right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(247,244,238,0.97) 0%, rgba(247,244,238,0.9) 24%, rgba(247,244,238,0.55) 42%, rgba(255,210,160,0.15) 58%, transparent 75%)",
          }}
        />
        {/* Subtle sunset warmth across the sky / right */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,170,90,0.14) 0%, transparent 45%, rgba(20,12,8,0.08) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-24 pb-16">
        <div className="max-w-xl text-left">
          <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold uppercase tracking-[0.04em] leading-[1.08] text-[#1A1A1A] mb-4">
            Discover
            <br />
            the world
          </h1>
          <p className="text-sm sm:text-base text-[#6B6B6B] font-normal tracking-wide mb-8 max-w-md">
            Curated journeys. Unforgettable experiences.
          </p>

          <form onSubmit={onSubmit} className="relative max-w-md w-full">
            <div className="flex items-center gap-2 bg-white rounded-full pl-4 pr-1.5 py-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-black/5">
              <Search className="w-4 h-4 text-[#A3A3A3] shrink-0 ml-1" />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setOpen(true);
                }}
                onFocus={() => setOpen(true)}
                onBlur={() => setTimeout(() => setOpen(false), 150)}
                placeholder="Where do you want to go?"
                className="flex-1 min-w-0 bg-transparent text-sm text-[#171717] placeholder:text-[#A3A3A3] focus:outline-none font-medium py-2.5"
                aria-label="Search destinations"
              />
              <button
                type="submit"
                className="shrink-0 w-11 h-11 rounded-full bg-[#171717] hover:bg-black text-white flex items-center justify-center transition-colors"
                aria-label="Search"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {open && query.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-xl border border-black/5 overflow-hidden text-left z-20">
                {suggestions.length > 0 ? (
                  suggestions.map((dest) => (
                    <button
                      key={dest.id}
                      type="button"
                      onMouseDown={() => {
                        setQuery(dest.name);
                        router.push(`/destinations/${dest.slug}`);
                      }}
                      className="w-full px-4 py-3 text-sm text-[#171717] hover:bg-[#F5F5F4] flex justify-between"
                    >
                      <span className="font-medium">{dest.name}</span>
                      <span className="text-[#A3A3A3] text-xs">{dest.country}</span>
                    </button>
                  ))
                ) : (
                  <p className="px-4 py-3 text-sm text-[#737373]">
                    Press enter to search packages
                  </p>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
