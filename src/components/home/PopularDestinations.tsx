"use client";

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCms } from "@/components/cms/CmsProvider";
import { formatPrice } from "@/lib/utils";

export default function PopularDestinations() {
  const { homepage, packages } = useCms();
  const tours = useMemo(() => {
    const validSlugs = new Set(packages.map((pkg) => pkg.slug));
    const fromCms = homepage.popularTours.filter((tour) => validSlugs.has(tour.slug));
    if (fromCms.length) return fromCms;
    return packages
      .filter((pkg) => pkg.featured)
      .slice(0, 8)
      .map((pkg) => ({
        id: pkg.id,
        title: pkg.title,
        location: pkg.destination,
        price: formatPrice(pkg.startingPrice, pkg.currency),
        duration: `${pkg.duration.days} Days`,
        style: pkg.category[0] || pkg.region,
        description: pkg.description,
        slug: pkg.slug,
        image: pkg.images[0] || "/images/destinations/vietnam.jpg",
      }));
  }, [homepage.popularTours, packages]);

  if (!tours.length) return null;

  return (
    <section id="destinations" className="bg-white pb-14 md:pb-20 scroll-mt-24">
      <span id="popular-tours" className="sr-only" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-brand-charcoal tracking-tight">
            Popular destinations
          </h2>
          <Link
            href="/packages"
            className="text-sm font-semibold text-brand-spice hover:text-brand-spice-dark shrink-0"
          >
            See all
          </Link>
        </div>

        {/* Atlys-style soft photo cards */}
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {tours.map((tour) => (
            <li key={tour.id}>
              <Link
                href={`/packages/${tour.slug}`}
                className="group block relative aspect-[3/4] rounded-[22px] sm:rounded-3xl overflow-hidden bg-zinc-100"
              >
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 text-white">
                  <p className="text-sm sm:text-base font-bold tracking-tight line-clamp-1">
                    {tour.location}
                  </p>
                  <p className="mt-1 text-xs text-white/80">
                    {tour.duration} · from{" "}
                    <span className="font-semibold text-white">{tour.price}</span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
