"use client";

import TravelSearch from "@/components/home/TravelSearch";

export default function Hero() {
  return (
    <section className="bg-white pt-28 sm:pt-32 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-spice mb-3">
            SpiceTrip · Safe Wheels
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-charcoal leading-[1.1] mb-3">
            Your trip. On time.
          </h1>
          <p className="text-sm sm:text-base text-zinc-500">
            Pick a destination. See price and duration.
          </p>
        </div>

        <TravelSearch />

        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-400">
          <li>IATA certified</li>
          <li>Fixed prices</li>
          <li>Mysore desk</li>
        </ul>
      </div>
    </section>
  );
}
