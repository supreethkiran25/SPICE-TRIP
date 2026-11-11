import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { DESTINATIONS } from "@/lib/data/packages";
import { getPublished } from "@/lib/published";
import { formatPrice } from "@/lib/utils";
import { getPackageCover } from "@/lib/package-covers";
import { Calendar, Clock } from "lucide-react";
import InquirySection from "@/components/home/InquirySection";

export const revalidate = 30;

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return DESTINATIONS.map((dest) => ({ slug: dest.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const destination = DESTINATIONS.find((d) => d.slug === params.slug);
  if (!destination) return { title: "Destination not found" };

  return {
    title: `${destination.name} | SpiceTrip`,
    description: destination.description,
  };
}

export default async function DestinationDetailPage({ params }: Props) {
  const destination = DESTINATIONS.find((d) => d.slug === params.slug);
  if (!destination) notFound();

  const { packages } = await getPublished();
  const matchingPackages = packages.filter(
    (p) =>
      p.destination.toLowerCase().includes(destination.name.toLowerCase()) ||
      destination.name.toLowerCase().includes(p.destination.toLowerCase())
  );

  const cover = getPackageCover(destination.slug, destination.name, destination.heroImage);

  return (
    <div className="bg-background min-h-screen">
      <section className="relative min-h-[50vh] lg:min-h-[55vh] flex items-end bg-forest-deep text-white overflow-hidden py-14">
        <Image
          src={cover}
          alt={destination.name}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
          <div className="flex items-center space-x-2 text-xs uppercase tracking-wider text-sand mb-3">
            <Link href="/destinations" className="hover:underline">
              Destinations
            </Link>
            <span>/</span>
            <span>{destination.country}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">{destination.name}</h1>
          <p className="text-sm sm:text-base text-sand-light/90 max-w-2xl mb-5">{destination.headline}</p>

          <div className="flex flex-wrap items-center gap-5 text-xs text-sand-light pt-4 border-t border-white/20">
            <div className="flex items-center space-x-1.5">
              <Calendar className="w-4 h-4 text-terracotta" />
              <span>{destination.bestTimeToVisit}</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div>From {formatPrice(destination.startingPrice)}</div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 border-b border-sand/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl font-bold text-forest-deep mb-4">
                About {destination.name}
              </h2>
              <p className="text-sm sm:text-base text-foreground-muted leading-relaxed mb-6">
                {destination.description}
              </p>

              <div className="space-y-3 pt-4 border-t border-sand/40">
                <h4 className="text-xs uppercase tracking-wider font-bold text-forest">Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-foreground-muted">
                  {destination.highlights.map((hl, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {destination.gallery.slice(0, 2).map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-square overflow-hidden rounded-3xl border border-sand/40 bg-sand/20"
                >
                  <Image
                    src={img}
                    alt={`${destination.name} ${i + 1}`}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-forest-deep mb-8">
            Packages in {destination.name}
          </h2>

          {matchingPackages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {matchingPackages.map((pkg) => (
                <Link
                  key={pkg.id}
                  href={`/packages/${pkg.slug}`}
                  className="bg-white border border-sand/40 rounded-3xl overflow-hidden flex flex-col h-full group hover:border-forest transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-sand/20">
                    <Image
                      src={getPackageCover(pkg.slug, pkg.destination, pkg.images[0] || cover)}
                      alt={pkg.destination}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 left-3 bg-white/95 px-3 py-1 rounded-full text-[11px] font-semibold text-forest flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-terracotta" />
                      {pkg.duration.nights}N / {pkg.duration.days}D
                    </div>
                  </div>

                  <div className="p-4 flex flex-col flex-1 min-h-[118px]">
                    <h3 className="text-lg font-bold text-forest-deep group-hover:text-terracotta transition-colors line-clamp-1 mb-1">
                      {pkg.destination}
                    </h3>
                    <p className="text-xs text-foreground-muted line-clamp-2 mb-3">{pkg.title}</p>
                    <div className="mt-auto flex items-end justify-between gap-2 pt-3 border-t border-sand/30">
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
          ) : (
            <div className="bg-white p-8 border border-sand/40 text-center rounded-3xl">
              <p className="text-sm text-foreground-muted mb-4">
                No set packages yet. Ask for a custom plan.
              </p>
              <Link
                href={`/contact?destination=${destination.name}#enquiry`}
                className="inline-flex items-center bg-forest hover:bg-terracotta text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Enquire
              </Link>
            </div>
          )}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-16">
        <InquirySection defaultDestination={destination.name} />
      </div>
    </div>
  );
}
