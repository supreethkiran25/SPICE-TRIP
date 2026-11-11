import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getPublished } from "@/lib/published";
import { formatPrice } from "@/lib/utils";
import { getPackageCover } from "@/lib/package-covers";
import { Clock } from "lucide-react";
import InquirySection from "@/components/home/InquirySection";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Honeymoon packages | SpiceTrip",
  description: "Honeymoon trips to Maldives, Bali, Kerala and more.",
};

export default async function HoneymoonPage() {
  const { packages } = await getPublished();
  const honeymoonPackages = packages.filter((p) => p.category.includes("Honeymoon"));

  return (
    <div className="bg-background min-h-screen">
      <section className="relative min-h-[50vh] flex items-center bg-forest-deep text-white overflow-hidden py-20">
        <Image
          src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=85"
          alt="Honeymoon villa over water"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/50 to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 leading-tight">
            Honeymoon trips
          </h1>
          <p className="text-sm sm:text-base text-sand-light/90 leading-relaxed mb-8">
            Maldives, Bali, Kerala and more. Pick a package and enquire.
          </p>
          <a
            href="#honeymoon-tours"
            className="inline-flex items-center bg-terracotta hover:bg-white hover:text-forest-deep text-white text-sm font-semibold px-8 py-3 rounded-full transition-all duration-300"
          >
            See packages
          </a>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-sand/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-lg font-bold text-forest-deep mb-1">Private stays</h4>
              <p className="text-xs text-foreground-muted">Villas and quiet rooms for two.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-forest-deep mb-1">Easy planning</h4>
              <p className="text-xs text-foreground-muted">Flights, hotels, and transfers in one plan.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-forest-deep mb-1">One travel manager</h4>
              <p className="text-xs text-foreground-muted">One person from first call to return.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28" id="honeymoon-tours">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-bold text-forest-deep">
              Packages
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {honeymoonPackages.map((pkg) => (
              <Link
                key={pkg.id}
                href={`/packages/${pkg.slug}`}
                className="bg-white border border-sand/40 rounded-3xl overflow-hidden flex flex-col h-full group hover:border-forest transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-sand/20">
                  <Image
                    src={getPackageCover(pkg.slug, pkg.destination, pkg.images[0])}
                    alt={pkg.destination}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-sans font-semibold text-forest flex items-center space-x-1.5 shadow-sm">
                    <Clock className="w-3.5 h-3.5 text-terracotta" />
                    <span>
                      {pkg.duration.nights}N / {pkg.duration.days}D
                    </span>
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-1 min-h-[118px]">
                  <h3 className="text-lg font-bold text-forest-deep group-hover:text-terracotta transition-colors line-clamp-1 mb-1">
                    {pkg.destination}
                  </h3>
                  <p className="text-xs text-foreground-muted line-clamp-2 mb-3">
                    {pkg.title}
                  </p>
                  <div className="mt-auto flex items-end justify-between gap-3 pt-3 border-t border-sand/30">
                    <div>
                      <span className="text-[10px] uppercase text-foreground-muted block">From</span>
                      <span className="text-lg font-bold text-forest-deep">
                        {formatPrice(pkg.startingPrice)}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-forest group-hover:text-terracotta">
                      View
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InquirySection defaultDestination="Honeymoon Escape" />
    </div>
  );
}
