import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPublished } from "@/lib/published";
import { formatPrice } from "@/lib/utils";
import { Clock, Star, MapPin, Check, X, ShieldCheck, Phone, ArrowRight, Share2, Sparkles } from "lucide-react";
import InquirySection from "@/components/home/InquirySection";

export const revalidate = 30;

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const { packages } = await getPublished();
  return packages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { packages } = await getPublished();
  const pkg = packages.find((p) => p.slug === params.slug);
  if (!pkg) return { title: "Package Not Found" };

  return {
    title: `${pkg.title} — ${pkg.duration.nights}N/${pkg.duration.days}D Itinerary | SpiceTrip`,
    description: pkg.description,
  };
}

export default async function PackageDetailPage({ params }: Props) {
  const { packages } = await getPublished();
  const pkg = packages.find((p) => p.slug === params.slug);
  if (!pkg) notFound();

  return (
    <div className="bg-background min-h-screen">
      {/* Editorial Breadcrumbs & Header */}
      <section className="bg-forest-deep text-white pt-12 pb-16 border-b border-forest">
        <div className="max-w-container mx-auto px-6">
          <div className="flex items-center space-x-2 text-xs font-sans uppercase tracking-[0.2em] text-sand mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/packages" className="hover:underline">Packages</Link>
            <span>/</span>
            <span className="text-sand-light/60">{pkg.destination}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="bg-forest px-3 py-1 rounded-sm text-[10px] font-sans uppercase tracking-widest text-sand-light border border-sand/30 font-semibold">
                  {pkg.region} Journey
                </span>
                <span className="text-xs text-sand-light/80 flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-terracotta" />
                  <span>{pkg.destination}, {pkg.country}</span>
                </span>
                <div className="flex items-center space-x-1 text-xs text-sand">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span className="font-semibold text-white">{pkg.rating}</span>
                  <span className="text-sand-light/60">({pkg.reviewsCount} reviews)</span>
                </div>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                {pkg.title}
              </h1>

              <p className="text-sm sm:text-base text-sand-light/85 max-w-2xl leading-relaxed">
                {pkg.description}
              </p>
            </div>

            {/* Price Plaque */}
            <div className="lg:col-span-4 bg-forest/50 border border-sand/30 p-6 rounded-sm text-right lg:text-left flex flex-col justify-between">
              <div>
                <span className="text-xs font-sans uppercase tracking-wider text-sand-light/70 block">
                  Starting Price Per Person
                </span>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-sand my-1">
                  {formatPrice(pkg.startingPrice)}
                </div>
                <div className="flex items-center space-x-1.5 text-xs text-sand-light/80 justify-end lg:justify-start">
                  <Clock className="w-3.5 h-3.5 text-terracotta" />
                  <span>{pkg.duration.nights} Nights / {pkg.duration.days} Days Curated Itinerary</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-forest/60">
                <a
                  href="#book-now"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-terracotta hover:bg-white hover:text-forest-deep text-white font-sans text-xs font-semibold uppercase tracking-widest py-3.5 rounded-sm transition-all duration-300 text-center shadow-md"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Visual Imagery */}
      <section className="max-w-container mx-auto px-6 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 relative aspect-[16/10] overflow-hidden rounded-sm border border-sand/40 bg-sand/20 shadow-md">
            <Image
              src={pkg.images[0]}
              alt={pkg.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover"
            />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden rounded-sm border border-sand/40 bg-sand/20 shadow-md">
              <Image
                src={pkg.images[1] || pkg.images[0]}
                alt={`${pkg.title} scene 2`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden rounded-sm border border-sand/40 bg-sand/20 shadow-md">
              <Image
                src={pkg.images[2] || pkg.images[0]}
                alt={`${pkg.title} scene 3`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Highlights, Itinerary, Inclusions & Exclusions */}
      <section className="py-16 md:py-24">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 8 Columns: Day-by-day Itinerary & Details */}
            <div className="lg:col-span-8 space-y-12">
              {/* Highlights Section */}
              <div className="bg-white p-8 border border-sand/40 rounded-sm shadow-sm">
                <div className="flex items-center space-x-2 text-[11px] font-sans uppercase tracking-[0.2em] text-terracotta font-semibold mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Curated Signatures</span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-forest-deep mb-5">
                  Trip Highlights & Key Experiences
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pkg.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-xs text-foreground-muted">
                      <span className="w-2 h-2 rounded-full bg-terracotta mt-1.5 shrink-0" />
                      <span className="font-medium text-foreground leading-relaxed">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Day-by-Day Detailed Itinerary */}
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand/40">
                  <div>
                    <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-terracotta font-semibold block mb-1">
                      Expedition Schedule
                    </span>
                    <h2 className="font-serif text-3xl font-bold text-forest-deep">
                      Detailed Day-by-Day Itinerary
                    </h2>
                  </div>
                  <span className="text-xs text-foreground-muted">
                    {pkg.itinerary.length} Expedition Milestones
                  </span>
                </div>

                <div className="space-y-6">
                  {pkg.itinerary.map((item) => (
                    <div
                      key={item.day}
                      className="bg-white p-6 sm:p-8 rounded-sm border border-sand/40 shadow-sm relative pl-12 sm:pl-16 group hover:border-forest transition-colors"
                    >
                      {/* Day Number Badge */}
                      <div className="absolute left-4 sm:left-6 top-7 w-8 h-8 rounded-sm bg-forest-deep text-sand-light font-serif text-sm font-bold flex items-center justify-center">
                        D{item.day}
                      </div>

                      <span className="text-[10px] font-sans uppercase tracking-widest text-terracotta font-semibold block mb-1">
                        Day {item.day}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-forest-deep mb-3">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                {/* Inclusions */}
                <div className="bg-white p-6 sm:p-8 rounded-sm border border-sand/40 shadow-sm">
                  <div className="flex items-center space-x-2 text-xs font-sans uppercase tracking-wider font-bold text-forest mb-4 pb-3 border-b border-sand/30">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Inclusions</span>
                  </div>
                  <ul className="space-y-3 text-xs text-foreground-muted">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions */}
                <div className="bg-white p-6 sm:p-8 rounded-sm border border-sand/40 shadow-sm">
                  <div className="flex items-center space-x-2 text-xs font-sans uppercase tracking-wider font-bold text-red-800 mb-4 pb-3 border-b border-sand/30">
                    <X className="w-4 h-4 text-red-600" />
                    <span>Exclusions</span>
                  </div>
                  <ul className="space-y-3 text-xs text-foreground-muted">
                    {pkg.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <X className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right 4 Columns: Sticky Booking Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <div className="bg-white p-6 sm:p-8 rounded-sm border border-sand/40 shadow-md">
                  <span className="text-[10px] font-sans uppercase tracking-widest text-terracotta font-semibold block mb-1">
                    Book with Confidence
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-forest-deep mb-2">
                    Reserve This Journey
                  </h3>
                  <p className="text-xs text-foreground-muted leading-relaxed mb-6">
                    Our Mysore concierge team will tailor this itinerary to your exact dates, flight requirements, and room categories.
                  </p>

                  <div className="bg-background-secondary p-4 rounded-sm mb-6 space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-foreground-muted">Package:</span>
                      <strong className="text-forest-deep text-right">{pkg.destination}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground-muted">Duration:</span>
                      <strong className="text-forest-deep">{pkg.duration.nights}N / {pkg.duration.days}D</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground-muted">From:</span>
                      <strong className="text-terracotta">{formatPrice(pkg.startingPrice)}</strong>
                    </div>
                  </div>

                  <a
                    href="#book-now"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-forest hover:bg-terracotta text-white font-sans text-xs font-semibold uppercase tracking-widest py-3.5 rounded-sm transition-all duration-300 text-center shadow-md mb-3"
                  >
                    <span>Request Custom Quote</span>
                  </a>

                  <a
                    href="tel:+918214001100"
                    className="w-full inline-flex items-center justify-center space-x-2 border border-forest/30 text-forest hover:bg-forest hover:text-white font-sans text-xs font-semibold uppercase tracking-widest py-3 rounded-sm transition-colors text-center"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Concierge: +91 821 4001100</span>
                  </a>
                </div>

                {/* Safe Wheels & IATA Assurance Card */}
                <div className="bg-forest-deep text-sand-light p-6 rounded-sm border border-forest space-y-4">
                  <div className="flex items-center space-x-2 text-white font-serif font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-terracotta" />
                    <span>SpiceTrip Agency Guarantee</span>
                  </div>
                  <ul className="text-xs text-sand-light/80 space-y-2">
                    <li>• IATA Accredited Passenger Ticketing</li>
                    <li>• Safe Wheels Verified Ground Mobility</li>
                    <li>• 100% Genuine Star Hotel Partner Vouchers</li>
                    <li>• EMI Package Options Available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Pre-filled */}
      <div id="book-now">
        <InquirySection defaultDestination={`${pkg.destination} (${pkg.title})`} />
      </div>
    </div>
  );
}

