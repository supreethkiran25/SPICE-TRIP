"use client";

import Link from "next/link";
import { Sparkles, ShieldCheck, Plane, Compass, Award } from "lucide-react";

const TICKER_ITEMS = [
  {
    icon: <Plane className="w-3.5 h-3.5 text-[#FBBF24]" />,
    text: "Vietnam Hanoi & Halong Bay Luxury Cruise (6D/5N) from ₹34,999/-",
    href: "/packages/explore-vietnam",
  },
  {
    icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />,
    text: "IATA Certified Agency • Safe Wheels Group, Mysore • 20+ Years Trust",
    href: "/about",
  },
  {
    icon: <Sparkles className="w-3.5 h-3.5 text-[#FBBF24]" />,
    text: "Maldives Barefoot Atoll Villas: Complimentary Seaplane Transfers",
    href: "/packages/maldives-luxury-escape",
  },
  {
    icon: <Compass className="w-3.5 h-3.5 text-sky-400" />,
    text: "Bali Private Pool Villas & Ubud Temples (5D/4N) from ₹26,999/-",
    href: "/packages/bali-classic-tour",
  },
  {
    icon: <Award className="w-3.5 h-3.5 text-[#FBBF24]" />,
    text: "Safe Wheels Chauffeur Drive Included on all Karnataka & South India Tours",
    href: "/services/car-rentals",
  },
  {
    icon: <Plane className="w-3.5 h-3.5 text-sky-400" />,
    text: "Dubai Burj Khalifa & Arabian Desert Safari (4D/3N) from ₹38,500/-",
    href: "/packages/dubai-tour",
  },
  {
    icon: <Sparkles className="w-3.5 h-3.5 text-emerald-400" />,
    text: "Kerala Munnar Mist & Alleppey Houseboat (5D/4N) from ₹18,500/-",
    href: "/packages/kerala-tour",
  },
];

export default function MovingTicker() {
  return (
    <div className="w-full bg-[#0F1E2E] text-white py-2.5 overflow-hidden border-y border-white/10 relative z-20">
      <div className="flex items-center">
        {/* Yellow/Amber Ticker Label Badge matching user reference screenshot */}
        <div className="flex items-center space-x-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1626] px-4 py-2 text-xs font-bold uppercase tracking-wider shrink-0 z-10 shadow-md transition-colors">
          <Plane className="w-4 h-4 fill-[#0A1626]" />
          <span>LIVE DEPARTURES</span>
        </div>

        {/* Continuous Infinite Marquee Strip */}
        <div className="overflow-hidden whitespace-nowrap flex-1 flex">
          <div className="animate-marquee flex items-center space-x-8 text-xs font-semibold">
            {TICKER_ITEMS.concat(TICKER_ITEMS).map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="inline-flex items-center space-x-2.5 text-white/95 hover:text-[#FBBF24] transition-colors shrink-0 group"
              >
                <span>{item.icon}</span>
                <span className="group-hover:underline underline-offset-2">{item.text}</span>
                <span className="text-white/40 ml-6 text-sm">•</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

