import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { DESTINATIONS } from "@/lib/data/packages";
import { formatPrice } from "@/lib/utils";
import { Compass, ArrowRight, ShieldCheck, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Curated Destinations — SpiceTrip Worldwide Portfolios",
  description:
    "Explore our verified portfolio of destinations across Southeast Asia, Indian Ocean sanctuaries, and India. Vietnam, Maldives, Bali, Singapore, Dubai, Kerala, and more.",
};

export default function DestinationsPage() {
  return (
    <div className="bg-background min-h-screen py-16 md:py-24">
      <div className="max-w-container mx-auto px-6">
        {/* Header Breadcrumb & Title */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-2 text-xs font-sans uppercase tracking-[0.2em] text-terracotta font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>SpiceTrip Worldwide Portfolio</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-deep mb-6">
            Sanctuaries & Horizons
          </h1>
          <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
            Every destination in our portfolio is vetted for authenticity, scenic majesty, and dependable hospitality standards. Explore our handpicked international and domestic journeys backed by Safe Wheels ground logistics and IATA ticketing.
          </p>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="bg-white border border-sand/40 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-forest transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-sand/20">
                  <Image
                    src={dest.heroImage}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-sm text-forest-deep text-[10px] font-sans uppercase tracking-widest px-2.5 py-1 rounded-sm font-semibold">
                    {dest.region}
                  </div>
                  <div className="absolute bottom-3.5 right-3.5 bg-forest-deep/90 text-white text-[10px] font-sans uppercase tracking-widest px-2.5 py-1 rounded-sm">
                    {dest.packageCount} Tours Available
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-1.5 text-xs text-foreground-muted mb-2">
                    <MapPin className="w-3.5 h-3.5 text-terracotta" />
                    <span className="font-semibold text-foreground uppercase tracking-wider text-[11px]">{dest.country}</span>
                  </div>

                  <h2 className="font-serif text-2xl font-bold text-forest-deep group-hover:text-terracotta transition-colors mb-2">
                    <Link href={`/destinations/${dest.slug}`}>{dest.name}</Link>
                  </h2>

                  <p className="text-xs text-foreground-muted leading-relaxed line-clamp-3 mb-4">
                    {dest.description}
                  </p>

                  <div className="space-y-1 pt-3 border-t border-sand/30 text-xs">
                    <div className="text-[11px] text-foreground-muted">
                      <strong>Best Season:</strong> {dest.bestTimeToVisit}
                    </div>
                    <div className="text-[11px] text-foreground-muted">
                      <strong>Visa:</strong> {dest.visaRequirement}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-sand/20 mt-4">
                <div className="flex items-baseline justify-between py-3">
                  <div>
                    <span className="text-[10px] uppercase text-foreground-muted block">Departures From</span>
                    <span className="font-serif text-xl font-bold text-forest-deep">
                      {formatPrice(dest.startingPrice)}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/destinations/${dest.slug}`}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-forest hover:bg-terracotta text-white text-xs font-semibold uppercase tracking-wider py-3 rounded-sm transition-colors text-center"
                >
                  <span>Explore {dest.name} Packages</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

