import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/lib/data/services";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Travel Services — Flight Tickets, Visas, Passports & Car Rentals | SpiceTrip",
  description:
    "Comprehensive travel desk services by SpiceTrip: IATA air ticketing, tourist & business visa stamping, passport assistance, and Safe Wheels chauffeur car rentals in Mysore.",
};

export default function ServicesPage() {
  return (
    <div className="bg-background min-h-screen py-16 md:py-24">
      <div className="max-w-container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-2 text-xs font-sans uppercase tracking-[0.2em] text-terracotta font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>IATA Certified Travel Agency Services</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-deep mb-6">
            Comprehensive Travel Concierge
          </h1>
          <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
            From seamless international flight routing and consulate visa approvals to luxury chauffeured mobility across southern India, SpiceTrip provides end-to-end travel support with single-point accountability.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-12">
          {SERVICES.map((serv, index) => (
            <div
              key={serv.id}
              className={`bg-white border border-sand/40 rounded-sm overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center`}
            >
              {/* Image Column */}
              <div
                className={`lg:col-span-5 relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[300px] ${
                  index % 2 === 1 ? "lg:order-last" : ""
                }`}
              >
                <Image
                  src={serv.image}
                  alt={serv.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              {/* Content Column */}
              <div className="lg:col-span-7 p-8 sm:p-12">
                <span className="text-[10px] font-sans uppercase tracking-widest text-terracotta font-semibold block mb-2">
                  {serv.category}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-deep mb-2">
                  {serv.title}
                </h2>
                <p className="text-xs font-serif italic text-forest mb-4">
                  "{serv.tagline}"
                </p>
                <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed mb-6">
                  {serv.description}
                </p>

                <div className="space-y-2 mb-8">
                  {serv.features.map((feat, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={serv.ctaHref}
                  className="inline-flex items-center space-x-2 bg-forest hover:bg-terracotta text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-sm transition-colors shadow-sm"
                >
                  <span>{serv.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

