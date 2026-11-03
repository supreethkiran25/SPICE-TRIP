"use client";

import Image from "next/image";
import Link from "next/link";
import { Compass, Users, MapPin, ThumbsUp, ShieldCheck, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data/company";

export default function WhyTravelWithUs() {
  return (
    <section
      id="experiences"
      className="py-16 md:py-24 bg-white relative overflow-hidden scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row (Matching media_1793703706756_330c4ef8.png) */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
          {/* Left: Pill Badge */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full border border-gray-300 bg-white text-[11px] font-extrabold uppercase tracking-[0.2em] text-gray-700 shadow-xs">
              About SpiceTrip
            </span>
          </div>

          {/* Right: Editorial Narrative with Verified Client Facts */}
          <div className="max-w-xl md:text-right">
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
              Headquartered at Prashanth Plaza, Saraswathipuram, Mysore, SpiceTrip is an IATA accredited agency backed by Safe Wheels Group’s 20+ years of pedigree. From South Indian heritage trails to international archipelagos, every journey is handcrafted for unforgettable memories.
            </p>
          </div>
        </div>

        {/* 3-Card Bento Grid (Matching media_1793703706756_330c4ef8.png) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Card 1: Dark Obsidian "Journeys Made Personal" */}
          <div className="bg-[#111827] rounded-3xl p-7 sm:p-8 text-white shadow-xl border border-white/10 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] transition-all hover:border-white/20">
            {/* Top Row: Compass Icon & IATA Verified Pill */}
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-[#D31F25]">
                <Compass className="w-5 h-5" />
              </div>
              <div className="flex items-center space-x-1.5 bg-white/10 border border-white/15 px-2.5 py-1 rounded-full text-[10px] text-white/80 font-mono font-bold">
                <span>IATA ACCREDITED</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>

            {/* Middle Copy — Authentic Client Narrative */}
            <div className="my-6">
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-sans">
                A premier venture of Safe Wheels Group with desks in Mysore, Bangalore & Mangalore. Custom-curated travel at your own pace with private chauffeur mobility —{" "}
                <strong className="text-white font-bold underline decoration-[#D31F25] decoration-2 underline-offset-4">
                  authentic, personal and unforgettable.
                </strong>
              </p>
            </div>

            {/* Bottom Button: Tailor-Made */}
            <Link
              href="/contact#enquiry"
              className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-3 rounded-full text-center text-xs tracking-wider transition-all shadow-md block hover:scale-102"
            >
              Tailor-Made Itinerary
            </Link>
          </div>

          {/* Card 2: Photographic "Made for You" */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[380px] sm:min-h-[420px] group">
            {/* Background Image: Scenic Mountain Vista */}
            <Image
              src="/images/destinations/traveler.jpg"
              alt="Made for You Travel Experience"
              fill
              unoptimized
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-108"
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

            {/* Frosted Glass Pill Badge: Made for You (Centered at top) */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
              <div className="backdrop-blur-md bg-white/25 border border-white/40 text-white font-bold text-xs px-5 py-2 rounded-full shadow-lg whitespace-nowrap">
                Made for You
              </div>
            </div>

            {/* Bottom Floating Tag — Verified Safe Wheels Chauffeur Credential */}
            <div className="absolute bottom-6 left-6 right-6 z-10 text-white text-center">
              <span className="text-[11px] font-bold uppercase tracking-widest text-white/90 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                Safe Wheels Chauffeur & IATA Concierge
              </span>
            </div>
          </div>

          {/* Card 3: 50+ Unique Experiences with Accurate Category Dot Meters */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 text-gray-900 shadow-xl border border-gray-200/80 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] transition-all hover:shadow-2xl">
            {/* Top: 50+ Header & Narrative */}
            <div>
              <div className="text-4xl sm:text-5xl font-black text-[#18181B] tracking-tight">
                50+
              </div>
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-gray-500 mt-1 mb-2">
                Unique Experiences
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed font-sans">
                Handpicked international and domestic itineraries verified by Safe Wheels Mysore travel specialists.
              </p>
            </div>

            {/* Middle: Dot Progress Indicators with Accurate Domains */}
            <div className="space-y-4 my-4 pt-4 border-t border-gray-100">
              {/* International: Vietnam, Maldives, Bali, Dubai, Thailand */}
              <div className="flex items-center justify-between text-xs font-bold text-gray-800">
                <span className="w-24 truncate">International</span>
                <div className="flex items-center space-x-1.5 text-[#2563EB]">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <span key={i} className="w-2 h-2 rounded-full bg-[#2563EB] inline-block" />
                  ))}
                </div>
                <span className="w-6 text-right font-mono text-gray-500 text-[11px]">45</span>
              </div>

              {/* South India: Kerala, Coorg, Ooty, Mysore */}
              <div className="flex items-center justify-between text-xs font-bold text-gray-800">
                <span className="w-24 truncate">South India</span>
                <div className="flex items-center space-x-1.5 text-[#2563EB]">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span key={i} className="w-2 h-2 rounded-full bg-[#2563EB] inline-block" />
                  ))}
                  {Array.from({ length: 2 }).map((_, i) => (
                    <span key={i} className="w-2 h-2 rounded-full bg-gray-200 inline-block" />
                  ))}
                </div>
                <span className="w-6 text-right font-mono text-gray-500 text-[11px]">35</span>
              </div>

              {/* Honeymoon & Cruises: Overwater Villas & Ocean Liners */}
              <div className="flex items-center justify-between text-xs font-bold text-gray-800">
                <span className="w-24 truncate">Honeymoon</span>
                <div className="flex items-center space-x-1.5 text-[#2563EB]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="w-2 h-2 rounded-full bg-[#2563EB] inline-block" />
                  ))}
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="w-2 h-2 rounded-full bg-gray-200 inline-block" />
                  ))}
                </div>
                <span className="w-6 text-right font-mono text-gray-500 text-[11px]">20</span>
              </div>
            </div>

            {/* Bottom Link */}
            <Link
              href="/packages"
              className="text-xs font-extrabold text-[#D31F25] hover:text-[#B91C1C] flex items-center justify-between pt-2 border-t border-gray-100 group"
            >
              <span>Explore All Verified Packages</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* Floating Bottom Stats Pill Bar (Matching media_1793703781901_2e9fa72d.png) */}
        <div className="mt-12 bg-white rounded-3xl sm:rounded-full border border-red-100/80 shadow-md p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-around gap-6 text-center sm:text-left">
          {/* Stat 1: Happy Travelers */}
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-[#D31F25] flex items-center justify-center shrink-0 border border-red-500/20">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                25,000+
              </div>
              <div className="text-xs text-gray-500 font-medium">
                Happy Travelers
              </div>
            </div>
          </div>

          <div className="hidden sm:block w-[1px] h-8 bg-gray-200" />

          {/* Stat 2: Destinations */}
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0 border border-orange-500/20">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                150+
              </div>
              <div className="text-xs text-gray-500 font-medium">
                Curated Destinations
              </div>
            </div>
          </div>

          <div className="hidden sm:block w-[1px] h-8 bg-gray-200" />

          {/* Stat 3: Satisfaction Rate */}
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0 border border-amber-500/20">
              <ThumbsUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                98%
              </div>
              <div className="text-xs text-gray-500 font-medium">
                Satisfaction Rate
              </div>
            </div>
          </div>

          <div className="hidden sm:block w-[1px] h-8 bg-gray-200" />

          {/* Stat 4: Pedigree */}
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                20+ Years
              </div>
              <div className="text-xs text-gray-500 font-medium">
                Safe Wheels Pedigree
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
