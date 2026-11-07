import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { DESTINATIONS } from "@/lib/data/packages";
import { getPublished } from "@/lib/published";
import { formatPrice } from "@/lib/utils";
import { MapPin, Calendar, ShieldCheck, ArrowRight, Clock, Star, Compass } from "lucide-react";
import InquirySection from "@/components/home/InquirySection";

export const revalidate = 30;

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return DESTINATIONS.map((dest) => ({ slug: dest.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const destination = DESTINATIONS.find((d) => d.slug === slug);
  if (!destination) return { title: "Destination Not Found" };

  return {
    title: `${destination.name} Tour Packages & Custom Itineraries`,
    description: destination.description,
  };
}

export default async function DestinationDetailPage({ params }: Props) {
  const { slug } = await params;
  const destination = DESTINATIONS.find((d) => d.slug === slug);
  if (!destination) notFound();

  const { packages } = await getPublished();
  // Find all packages matching this destination
  const matchingPackages = packages.filter(
    (p) =>
      p.destination.toLowerCase().includes(destination.name.toLowerCase()) ||
      destination.name.toLowerCase().includes(p.destination.toLowerCase())
  );

  return (
    <div className="bg-background min-h-screen">
      {/* Cinematic Destination Hero Header */}
      <section className="relative min-h-[55vh] lg:min-h-[65vh] flex items-end bg-forest-deep text-white overflow-hidden py-16">
        <Image
          src={destination.heroImage}
          alt={destination.name}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent pointer-events-none" />

        <div className="max-w-container mx-auto px-6 relative z-10 w-full">
          <div className="flex items-center space-x-2 text-xs font-sans uppercase tracking-[0.2em] text-sand mb-3">
            <Link href="/destinations" className="hover:underline">
              Destinations
            </Link>
            <span>/</span>
            <span>{destination.country}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
            {destination.name}
          </h1>

          <p className="text-base sm:text-xl text-sand-light/90 max-w-2xl font-serif italic mb-6">
            "{destination.headline}"
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs text-sand-light pt-4 border-t border-white/20">
            <div className="flex items-center space-x-1.5">
              <Calendar className="w-4 h-4 text-terracotta" />
              <span><strong>Best Season:</strong> {destination.bestTimeToVisit}</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-terracotta" />
              <span><strong>Visa:</strong> {destination.visaRequirement}</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div>
              <strong>Starting From:</strong> {formatPrice(destination.startingPrice)}
            </div>
          </div>
        </div>
      </section>

      {/* Destination Overview & Highlights */}
      <section className="py-16 md:py-20 border-b border-sand/30">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-terracotta font-semibold block mb-2">
                Destination Overview
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-deep mb-6">
                About Travelling to {destination.name}
              </h2>
              <p className="text-sm sm:text-base text-foreground-muted leading-relaxed mb-6">
                {destination.description}
              </p>

              <div className="space-y-3 pt-4 border-t border-sand/40">
                <h4 className="font-sans text-xs uppercase tracking-wider font-bold text-forest">
                  Key Experiences Curated by SpiceTrip:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-foreground-muted">
                  {destination.highlights.map((hl, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Gallery Previews */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {destination.gallery.slice(0, 2).map((img, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-sm border border-sand/40 bg-sand/20">
                  <Image
                    src={img}
                    alt={`${destination.name} gallery image ${i + 1}`}
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

      {/* Available Packages in this Destination */}
      <section className="py-16 md:py-24 bg-background-secondary/40">
        <div className="max-w-container mx-auto px-6">
          <div className="mb-12">
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-terracotta font-semibold block mb-2">
              Curated Itineraries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-deep">
              Available Tour Packages in {destination.name}
            </h2>
          </div>

          {matchingPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {matchingPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white border border-sand/40 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-forest transition-all duration-300 shadow-sm"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-sand/20">
                      <Image
                        src={pkg.images[0] || destination.heroImage}
                        alt={pkg.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 right-3 bg-forest-deep text-white text-[10px] font-sans uppercase tracking-widest px-2.5 py-1 rounded-sm">
                        {pkg.duration.nights}N / {pkg.duration.days}D
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-serif text-xl font-bold text-forest-deep group-hover:text-terracotta transition-colors mb-2 line-clamp-1">
                        <Link href={`/packages/${pkg.slug}`}>{pkg.title}</Link>
                      </h3>
                      <p className="text-xs text-foreground-muted line-clamp-2 leading-relaxed mb-4">
                        {pkg.description}
                      </p>
                      <div className="space-y-1 text-xs text-foreground-muted">
                        {pkg.highlights.slice(0, 2).map((hl, i) => (
                          <div key={i} className="flex items-center space-x-1.5 text-[11px]">
                            <span className="text-terracotta">•</span>
                            <span className="line-clamp-1">{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-sand/20 mt-4">
                    <div className="flex items-baseline justify-between py-3">
                      <div>
                        <span className="text-[10px] uppercase text-foreground-muted block">Starting Price</span>
                        <span className="font-serif text-xl font-bold text-forest-deep">
                          {formatPrice(pkg.startingPrice)}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`/packages/${pkg.slug}`}
                      className="w-full inline-flex items-center justify-center space-x-2 bg-forest hover:bg-terracotta text-white text-xs font-semibold uppercase tracking-wider py-3 rounded-sm transition-colors text-center"
                    >
                      <span>View Full Itinerary</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 border border-sand/40 text-center rounded-sm">
              <p className="text-sm text-foreground-muted mb-4">
                We design custom tailored itineraries for {destination.name} to suit your specific dates and interests.
              </p>
              <Link
                href={`/contact?destination=${destination.name}#enquiry`}
                className="inline-flex items-center space-x-2 bg-forest hover:bg-terracotta text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-sm transition-colors"
              >
                <span>Request Custom {destination.name} Itinerary</span>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Pre-filled Inquiry Section */}
      <InquirySection defaultDestination={destination.name} />
    </div>
  );
}

