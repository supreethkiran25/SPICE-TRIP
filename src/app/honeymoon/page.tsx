import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getPublished } from "@/lib/published";
import { formatPrice } from "@/lib/utils";
import { Heart, Sparkles, Clock, Star, ArrowRight, ShieldCheck } from "lucide-react";
import InquirySection from "@/components/home/InquirySection";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Bespoke Honeymoon Packages & Romantic Sanctuaries | SpiceTrip",
  description:
    "Curated honeymoon tours to Maldives, Bali, Mauritius, Vietnam, Kerala, and Andaman by SpiceTrip, Mysore. Private pool villas, overwater bungalows, and bespoke romantic itineraries.",
};

export default async function HoneymoonPage() {
  const { packages } = await getPublished();
  const honeymoonPackages = packages.filter((p) => p.category.includes("Honeymoon"));

  return (
    <div className="bg-background min-h-screen">
      {/* Editorial Honeymoon Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-forest-deep text-white overflow-hidden py-20">
        <Image
          src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=85"
          alt="Luxury honeymoon overwater villa in Maldives"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/50 to-transparent pointer-events-none" />

        <div className="max-w-container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sand text-xs font-sans uppercase tracking-[0.2em] font-semibold mb-6 border border-sand/30">
            <Heart className="w-3.5 h-3.5 text-terracotta fill-terracotta" />
            <span>The SpiceTrip Honeymoon Atelier</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Some journeys <br />
            <span className="italic font-normal text-sand">bring you closer.</span>
          </h1>

          <p className="text-sm sm:text-base text-sand-light/90 leading-relaxed font-normal mb-8">
            An intimate milestone deserves unmatched poise and discretion. We curate private pool villas in Bali, secluded coral atoll sanctuaries in Maldives, French-Creole beachfronts in Mauritius, and mist-veiled tea estates in Kerala.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#honeymoon-tours"
              className="inline-flex items-center space-x-2 bg-terracotta hover:bg-white hover:text-forest-deep text-white font-sans text-xs font-semibold uppercase tracking-widest px-8 py-4 rounded-sm transition-all duration-300 shadow-md"
            >
              <span>Explore Honeymoon Collections</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Romantic Inclusions Hallmark */}
      <section className="py-16 bg-white border-b border-sand/40">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <span className="font-serif text-3xl font-bold text-terracotta block mb-2">01</span>
              <h4 className="font-serif text-lg font-bold text-forest-deep mb-1">Private Pool & Ocean Villas</h4>
              <p className="text-xs text-foreground-muted">Handpicked intimate accommodations with complete discretion and sunset ocean views.</p>
            </div>
            <div className="p-4">
              <span className="font-serif text-3xl font-bold text-terracotta block mb-2">02</span>
              <h4 className="font-serif text-lg font-bold text-forest-deep mb-1">Candlelit Beach Dining</h4>
              <p className="text-xs text-foreground-muted">Chef-curated dinners under star-dusted skies on isolated sandbanks and cliffs.</p>
            </div>
            <div className="p-4">
              <span className="font-serif text-3xl font-bold text-terracotta block mb-2">03</span>
              <h4 className="font-serif text-lg font-bold text-forest-deep mb-1">Couples Spa Rituals</h4>
              <p className="text-xs text-foreground-muted">Revitalizing floral baths, organic aromatherapy, and Balinese massage therapies.</p>
            </div>
            <div className="p-4">
              <span className="font-serif text-3xl font-bold text-terracotta block mb-2">04</span>
              <h4 className="font-serif text-lg font-bold text-forest-deep mb-1">Honeymoon Welcome Amenities</h4>
              <p className="text-xs text-foreground-muted">Complimentary chilled champagne, bed floral decorations, and celebratory cakes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Honeymoon Packages Showcase */}
      <section className="py-20 md:py-28" id="honeymoon-tours">
        <div className="max-w-container mx-auto px-6">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-terracotta font-semibold block mb-2">
              Romantic Itineraries
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-forest-deep">
              Featured Honeymoon Departures
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {honeymoonPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white border border-sand/40 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-forest transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-sand/20">
                    <Image
                      src={pkg.images[0]}
                      alt={pkg.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3.5 right-3.5 bg-forest-deep text-white text-[10px] font-sans uppercase tracking-widest px-2.5 py-1 rounded-sm">
                      {pkg.region}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-sm text-[11px] font-sans font-semibold text-forest flex items-center space-x-1.5 shadow-sm">
                      <Clock className="w-3.5 h-3.5 text-terracotta" />
                      <span>{pkg.duration.nights}N / {pkg.duration.days}D</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-foreground-muted mb-2">
                      <span className="font-semibold text-terracotta tracking-wider uppercase text-[10px]">
                        {pkg.destination} • {pkg.country}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                        <span className="font-semibold text-foreground">{pkg.rating}</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-forest-deep group-hover:text-terracotta transition-colors line-clamp-1 mb-2.5">
                      <Link href={`/packages/${pkg.slug}`}>{pkg.title}</Link>
                    </h3>

                    <p className="text-xs text-foreground-muted line-clamp-2 leading-relaxed mb-4">
                      {pkg.description}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-sand/30">
                      {pkg.highlights.slice(0, 2).map((hl, i) => (
                        <div key={i} className="flex items-start space-x-2 text-[11px] text-foreground-muted">
                          <Heart className="w-3 h-3 text-terracotta mt-0.5 shrink-0 fill-terracotta" />
                          <span className="line-clamp-1">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-sand/20 mt-4">
                  <div className="flex items-baseline justify-between py-3">
                    <div>
                      <span className="text-[10px] uppercase text-foreground-muted block">Couple Starting Price</span>
                      <span className="font-serif text-xl font-bold text-forest-deep">
                        {formatPrice(pkg.startingPrice)}
                      </span>
                      <span className="text-[10px] text-foreground-muted"> / person</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <Link
                      href={`/packages/${pkg.slug}`}
                      className="inline-flex items-center justify-center border border-forest/30 hover:border-forest text-forest hover:bg-forest hover:text-white text-xs font-semibold uppercase tracking-wider py-2.5 rounded-sm transition-colors text-center"
                    >
                      Itinerary
                    </Link>
                    <Link
                      href={`/contact?package=${pkg.slug}&type=Honeymoon#enquiry`}
                      className="inline-flex items-center justify-center bg-forest hover:bg-terracotta text-white text-xs font-semibold uppercase tracking-wider py-2.5 rounded-sm transition-colors text-center shadow-sm"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <InquirySection defaultDestination="Honeymoon Escape" />
    </div>
  );
}

