import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { DESTINATIONS } from "@/lib/data/packages";
import { formatPrice } from "@/lib/utils";
import { getPackageCover } from "@/lib/package-covers";

export const metadata: Metadata = {
  title: "Destinations | SpiceTrip",
  description: "Vietnam, Maldives, Bali, Singapore, Dubai, Kerala and more.",
};

export default function DestinationsPage() {
  return (
    <div className="bg-background min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#D31F25] mb-4">
            SpiceTrip
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold uppercase tracking-[0.04em] text-[#171717] mb-3">
            Destinations
          </h1>
          <p className="text-sm sm:text-base text-[#737373] leading-relaxed font-light">
            Choose a place. See packages and prices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {DESTINATIONS.map((dest) => {
            const cover = getPackageCover(dest.slug, dest.name, dest.heroImage);
            return (
              <Link
                key={dest.id}
                href={`/destinations/${dest.slug}`}
                className="bg-white border border-sand/40 rounded-3xl overflow-hidden flex flex-col h-full group hover:border-forest transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-sand/20">
                  <Image
                    src={cover}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-4 flex flex-col flex-1 min-h-[118px]">
                  <h2 className="text-lg font-bold text-forest-deep group-hover:text-terracotta transition-colors line-clamp-1 mb-1">
                    {dest.name}
                  </h2>
                  <p className="text-xs text-foreground-muted line-clamp-2 mb-3 leading-relaxed">
                    {dest.country}
                  </p>

                  <div className="mt-auto flex items-end justify-between gap-2 pt-3 border-t border-sand/30">
                    <div>
                      <span className="text-[10px] uppercase text-foreground-muted block">From</span>
                      <span className="text-lg font-bold text-forest-deep">
                        {formatPrice(dest.startingPrice)}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-forest group-hover:text-terracotta">
                      View
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
