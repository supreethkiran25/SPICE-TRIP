import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPublished } from "@/lib/published";
import { formatPrice } from "@/lib/utils";
import { Clock, Star, MapPin, Check, X, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import InquirySection from "@/components/home/InquirySection";

export const revalidate = 30;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { packages } = await getPublished();
  return packages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { packages } = await getPublished();
  const pkg = packages.find((p) => p.slug === slug);
  if (!pkg) return { title: "Package Not Found" };

  return {
    title: `${pkg.title} — ${pkg.duration.nights}N/${pkg.duration.days}D | SpiceTrip`,
    description: pkg.description,
  };
}

export default async function PackageDetailPage({ params }: Props) {
  const { slug } = await params;
  const { packages } = await getPublished();
  const pkg = packages.find((p) => p.slug === slug);
  if (!pkg) notFound();

  return (
    <div className="bg-white min-h-screen">
      {/* Clean white hero */}
      <section className="pt-28 sm:pt-32 pb-8 sm:pb-10 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-zinc-400 mb-6">
            <Link href="/" className="hover:text-brand-spice transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/packages" className="hover:text-brand-spice transition-colors">
              Packages
            </Link>
            <span>/</span>
            <span className="text-zinc-600">{pkg.destination}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-500 mb-4">
                <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 font-semibold text-zinc-700">
                  {pkg.region}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-spice" />
                  {pkg.destination}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  {pkg.rating}
                  <span className="text-zinc-400">({pkg.reviewsCount})</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-[2.65rem] font-bold tracking-tight text-brand-charcoal leading-[1.2] mb-4">
                {pkg.title}
              </h1>

              <p className="text-sm sm:text-base text-zinc-500 max-w-2xl leading-relaxed">
                {pkg.description}
              </p>
            </div>

            {/* Price card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 sm:p-7 shadow-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400 mb-1">
                  From · per person
                </p>
                <p className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
                  {formatPrice(pkg.startingPrice)}
                </p>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-zinc-500">
                  <Clock className="w-3.5 h-3.5 text-brand-spice" />
                  {pkg.duration.nights}N / {pkg.duration.days}D
                </p>

                <a
                  href="#book-now"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-brand-spice hover:bg-brand-spice-dark text-white rounded-full py-3.5 text-sm font-semibold transition-colors"
                >
                  Request quote
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soft photo gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          <div className="md:col-span-2 relative aspect-[16/10] overflow-hidden rounded-3xl bg-zinc-100">
            <Image
              src={pkg.images[0]}
              alt={pkg.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover"
            />
          </div>
          <div className="grid grid-rows-2 gap-3 sm:gap-4">
            <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden rounded-3xl bg-zinc-100 min-h-[120px]">
              <Image
                src={pkg.images[1] || pkg.images[0]}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden rounded-3xl bg-zinc-100 min-h-[120px]">
              <Image
                src={pkg.images[2] || pkg.images[0]}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-8 space-y-10">
              {/* Highlights */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-brand-charcoal tracking-tight mb-4">
                  Highlights
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {pkg.highlights.map((hl, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 rounded-2xl border border-zinc-100 bg-zinc-50 px-4 py-3 text-sm text-zinc-700"
                    >
                      <Check className="w-4 h-4 text-brand-spice shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Itinerary */}
              <div>
                <div className="flex items-baseline justify-between gap-4 mb-5">
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-charcoal tracking-tight">
                    Itinerary
                  </h2>
                  <span className="text-xs text-zinc-400">{pkg.itinerary.length} days</span>
                </div>

                <ol className="space-y-3">
                  {pkg.itinerary.map((item) => (
                    <li
                      key={item.day}
                      className="rounded-2xl border border-zinc-100 bg-white p-5 sm:p-6"
                    >
                      <div className="flex items-start gap-4">
                        <span className="shrink-0 w-9 h-9 rounded-full bg-brand-charcoal text-white text-xs font-bold flex items-center justify-center">
                          {item.day}
                        </span>
                        <div className="min-w-0">
                          <h3 className="text-base font-bold text-brand-charcoal mb-1.5">
                            {item.title}
                          </h3>
                          <p className="text-sm text-zinc-500 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Inclusions / Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-zinc-100 p-5 sm:p-6">
                  <h3 className="text-sm font-bold text-brand-charcoal mb-4 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Included
                  </h3>
                  <ul className="space-y-2.5">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-zinc-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-zinc-100 p-5 sm:p-6">
                  <h3 className="text-sm font-bold text-brand-charcoal mb-4 flex items-center gap-2">
                    <X className="w-4 h-4 text-zinc-400" />
                    Not included
                  </h3>
                  <ul className="space-y-2.5">
                    {pkg.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-zinc-600">
                        <X className="w-3.5 h-3.5 text-zinc-300 shrink-0 mt-0.5" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sticky sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-4">
                <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-brand-charcoal mb-1">Book this trip</h3>
                  <p className="text-sm text-zinc-500 mb-5">
                    Mysore desk will confirm dates and rooms.
                  </p>

                  <dl className="space-y-2.5 text-sm mb-6 pb-5 border-b border-zinc-100">
                    <div className="flex justify-between gap-3">
                      <dt className="text-zinc-400">Destination</dt>
                      <dd className="font-semibold text-brand-charcoal text-right">
                        {pkg.destination}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="text-zinc-400">Duration</dt>
                      <dd className="font-semibold text-brand-charcoal">
                        {pkg.duration.nights}N / {pkg.duration.days}D
                      </dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="text-zinc-400">From</dt>
                      <dd className="font-extrabold text-brand-spice">
                        {formatPrice(pkg.startingPrice)}
                      </dd>
                    </div>
                  </dl>

                  <a
                    href="#book-now"
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-spice hover:bg-brand-spice-dark text-white rounded-full py-3.5 text-sm font-semibold transition-colors mb-2.5"
                  >
                    Request quote
                  </a>
                  <a
                    href="tel:+918214001100"
                    className="w-full inline-flex items-center justify-center gap-2 border border-zinc-200 text-brand-charcoal hover:bg-zinc-50 rounded-full py-3 text-sm font-semibold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    +91 821 4001100
                  </a>
                </div>

                <div className="rounded-3xl bg-brand-charcoal text-white p-6">
                  <div className="flex items-center gap-2 text-sm font-bold mb-3">
                    <ShieldCheck className="w-4 h-4 text-brand-spice" />
                    Guaranteed
                  </div>
                  <ul className="text-sm text-white/70 space-y-2">
                    <li>IATA accredited ticketing</li>
                    <li>Safe Wheels ground support</li>
                    <li>Verified hotel partners</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="book-now" className="bg-zinc-50 border-t border-zinc-100">
        <InquirySection defaultDestination={`${pkg.destination} (${pkg.title})`} />
      </div>
    </div>
  );
}
