import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/lib/data/services";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | SpiceTrip",
  description: "Flights, visas, passports, and car rentals.",
};

export default function ServicesPage() {
  return (
    <div className="bg-background min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#D31F25] mb-4">
            SpiceTrip
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold uppercase tracking-[0.04em] text-[#171717] mb-3">
            Services
          </h1>
          <p className="text-sm sm:text-base text-[#737373] leading-relaxed font-light">
            Flights, visas, passports, and car rentals.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-12">
          {SERVICES.map((serv, index) => (
            <div
              key={serv.id}
              className={`bg-white border border-sand/40 rounded-3xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center`}
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
                <h2 className="text-2xl sm:text-3xl font-bold text-forest-deep mb-2">
                  {serv.title}
                </h2>
                <p className="text-xs text-foreground-muted mb-4">
                  {serv.tagline}
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
                  className="inline-flex items-center space-x-2 bg-forest hover:bg-terracotta text-white text-xs font-semibold px-6 py-3 rounded-full transition-colors shadow-sm"
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

