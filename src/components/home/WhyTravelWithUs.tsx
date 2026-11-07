"use client";

import Link from "next/link";

const POINTS = [
  { value: "IATA", label: "Certified agency" },
  { value: "20+", label: "Years with Safe Wheels" },
  { value: "3", label: "Desks · Mysore, BLR, MLR" },
  { value: "24×7", label: "Travel desk support" },
];

export default function WhyTravelWithUs() {
  return (
    <section id="experiences" className="py-14 md:py-16 bg-[#F7F7F8] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal tracking-tight">
            Why SpiceTrip
          </h2>
          <p className="mt-2 text-sm text-zinc-500">
            Private trips. Real desk. Clear prices.
          </p>
        </div>

        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {POINTS.map((p) => (
            <div
              key={p.label}
              className="bg-white rounded-2xl border border-zinc-100 px-5 py-5 shadow-sm"
            >
              <dd className="text-2xl font-extrabold text-brand-spice tracking-tight">
                {p.value}
              </dd>
              <dt className="mt-1 text-xs text-zinc-500">{p.label}</dt>
            </div>
          ))}
        </dl>

        <Link
          href="/contact#enquiry"
          className="inline-flex items-center justify-center bg-brand-spice hover:bg-brand-spice-dark text-white rounded-full px-6 py-3 text-sm font-semibold transition-colors"
        >
          Plan a trip
        </Link>
      </div>
    </section>
  );
}
