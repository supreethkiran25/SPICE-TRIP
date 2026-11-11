import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPublished } from "@/lib/published";
import { formatPrice } from "@/lib/utils";
import { getPackageCover } from "@/lib/package-covers";
import { Clock, Star, MapPin, Check, X, ShieldCheck, Phone, ArrowRight } from "lucide-react";
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
  if (!pkg) return { title: "Package not found" };

  return {
    title: `${pkg.destination} | ${pkg.duration.nights}N ${pkg.duration.days}D | SpiceTrip`,
    description: pkg.description,
  };
}

export default async function PackageDetailPage({ params }: Props) {
  const { packages } = await getPublished();
  const pkg = packages.find((p) => p.slug === params.slug);
  if (!pkg) notFound();

  const cover = getPackageCover(pkg.slug, pkg.destination, pkg.images[0]);
  const gallery = [cover, pkg.images[1] || cover, pkg.images[2] || cover];

  return (
    <div className="bg-background min-h-screen">
      <section className="bg-forest-deep text-white pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center space-x-2 text-xs uppercase tracking-wider text-sand mb-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link href="/packages" className="hover:underline">
              Packages
            </Link>
            <span>/</span>
            <span className="text-sand-light/60">{pkg.destination}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="bg-forest px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-sand-light border border-sand/30 font-semibold">
                  {pkg.region}
                </span>
                <span className="text-xs text-sand-light/80 flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-terracotta" />
                  <span>
                    {pkg.destination}, {pkg.country}
                  </span>
                </span>
                <div className="flex items-center space-x-1 text-xs text-sand">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span className="font-semibold text-white">{pkg.rating}</span>
                  <span className="text-sand-light/60">({pkg.reviewsCount} reviews)</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-4">
                {pkg.destination}
              </h1>
              <p className="text-sm sm:text-base text-sand-light/85 max-w-2xl leading-relaxed">
                {pkg.title}
              </p>
            </div>

            <div className="lg:col-span-4 bg-forest/50 border border-sand/30 p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-sand-light/70 block">From</span>
                <div className="text-3xl sm:text-4xl font-bold text-sand my-1">
                  {formatPrice(pkg.startingPrice)}
                </div>
                <div className="flex items-center space-x-1.5 text-xs text-sand-light/80">
                  <Clock className="w-3.5 h-3.5 text-terracotta" />
                  <span>
                    {pkg.duration.nights}N / {pkg.duration.days}D
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-forest/60">
                <a
                  href="#book-now"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-terracotta hover:bg-white hover:text-forest-deep text-white text-sm font-semibold py-3 rounded-full transition-all text-center"
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 relative aspect-[16/10] overflow-hidden rounded-3xl border border-sand/40 bg-sand/20 shadow-md">
            <Image src={gallery[0]} alt={pkg.destination} fill priority sizes="(max-width: 768px) 100vw, 66vw" className="object-cover" />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden rounded-3xl border border-sand/40 bg-sand/20 shadow-md">
              <Image src={gallery[1]} alt={`${pkg.destination} view`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
            <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden rounded-3xl border border-sand/40 bg-sand/20 shadow-md">
              <Image src={gallery[2]} alt={`${pkg.destination} scene`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white p-6 sm:p-8 border border-sand/40 rounded-3xl shadow-sm">
                <h2 className="text-2xl font-bold text-forest-deep mb-5">Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pkg.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-sm text-foreground-muted">
                      <span className="w-2 h-2 rounded-full bg-terracotta mt-1.5 shrink-0" />
                      <span className="font-medium text-foreground leading-relaxed">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-sand/40">
                  <h2 className="text-2xl sm:text-3xl font-bold text-forest-deep">Day by day</h2>
                  <span className="text-xs text-foreground-muted">{pkg.itinerary.length} days</span>
                </div>

                <div className="space-y-4">
                  {pkg.itinerary.map((item) => (
                    <div
                      key={item.day}
                      className="bg-white p-5 sm:p-6 rounded-3xl border border-sand/40 shadow-sm relative pl-12 sm:pl-14"
                    >
                      <div className="absolute left-4 sm:left-5 top-6 w-8 h-8 rounded-full bg-forest-deep text-sand-light text-sm font-bold flex items-center justify-center">
                        {item.day}
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-terracotta font-semibold block mb-1">
                        Day {item.day}
                      </span>
                      <h3 className="text-lg font-bold text-forest-deep mb-2">{item.title}</h3>
                      <p className="text-sm text-foreground-muted leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                <div className="bg-white p-6 rounded-3xl border border-sand/40 shadow-sm">
                  <div className="flex items-center space-x-2 text-xs uppercase tracking-wider font-bold text-forest mb-4 pb-3 border-b border-sand/30">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Inclusions</span>
                  </div>
                  <ul className="space-y-3 text-sm text-foreground-muted">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-sand/40 shadow-sm">
                  <div className="flex items-center space-x-2 text-xs uppercase tracking-wider font-bold text-red-800 mb-4 pb-3 border-b border-sand/30">
                    <X className="w-4 h-4 text-red-600" />
                    <span>Exclusions</span>
                  </div>
                  <ul className="space-y-3 text-sm text-foreground-muted">
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

            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-5">
                <div className="bg-white p-6 rounded-3xl border border-sand/40 shadow-md">
                  <h3 className="text-2xl font-bold text-forest-deep mb-2">Enquire</h3>
                  <p className="text-sm text-foreground-muted leading-relaxed mb-5">
                    Tell us your dates. We will send a clear plan and price.
                  </p>

                  <div className="bg-background-secondary p-4 rounded-2xl mb-5 space-y-2 text-sm">
                    <div className="flex justify-between gap-3">
                      <span className="text-foreground-muted">Place</span>
                      <strong className="text-forest-deep text-right">{pkg.destination}</strong>
                    </div>
                    <div className="flex justify-between gap-3">
                      <span className="text-foreground-muted">Duration</span>
                      <strong className="text-forest-deep">
                        {pkg.duration.nights}N / {pkg.duration.days}D
                      </strong>
                    </div>
                    <div className="flex justify-between gap-3">
                      <span className="text-foreground-muted">From</span>
                      <strong className="text-terracotta">{formatPrice(pkg.startingPrice)}</strong>
                    </div>
                  </div>

                  <a
                    href="#book-now"
                    className="w-full inline-flex items-center justify-center bg-forest hover:bg-terracotta text-white text-sm font-semibold py-3 rounded-full transition-colors text-center mb-3"
                  >
                    Enquire
                  </a>

                  <a
                    href="tel:+918214001100"
                    className="w-full inline-flex items-center justify-center space-x-2 border border-forest/30 text-forest hover:bg-forest hover:text-white text-sm font-semibold py-3 rounded-full transition-colors text-center"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call +91 821 4001100</span>
                  </a>
                </div>

                <div className="bg-forest-deep text-sand-light p-6 rounded-3xl space-y-3">
                  <div className="flex items-center space-x-2 text-white font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-terracotta" />
                    <span>Why book here</span>
                  </div>
                  <ul className="text-sm text-sand-light/80 space-y-2">
                    <li>• IATA flight tickets</li>
                    <li>• Safe Wheels transfers</li>
                    <li>• Confirmed hotel stays</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="book-now" className="max-w-6xl mx-auto px-6 pb-16">
        <InquirySection defaultDestination={pkg.destination} />
      </div>
    </div>
  );
}
