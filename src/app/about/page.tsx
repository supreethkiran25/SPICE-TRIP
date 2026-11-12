import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About | SpiceTrip",
  description: "IATA certified travel agency from Safe Wheels Group, Mysore.",
};

const STEPS = [
  {
    n: "01",
    title: "Tell us the trip",
    body: "Dates, budget, pace, and must-sees. We listen first.",
  },
  {
    n: "02",
    title: "Get a clear plan",
    body: "Flights, hotels, and transfers in one itinerary with a real price.",
  },
  {
    n: "03",
    title: "Travel with support",
    body: "One manager stays with you from booking to your return home.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#F7F6F3] min-h-screen">
      <section className="pt-24 md:pt-28 pb-10 md:pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#D31F25] mb-3">
            About SpiceTrip
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold uppercase tracking-[0.04em] text-[#171717] max-w-3xl leading-[1.15] mb-4">
            Private journeys.
            <br />
            Planned with care.
          </h1>
          <p className="text-base sm:text-lg text-[#737373] max-w-2xl leading-relaxed font-light">
            IATA certified travel from Mysore. Clear plans, named support, and the Safe Wheels network behind every trip.
          </p>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-base sm:text-lg text-[#525252] leading-relaxed font-light">
                We build international and India itineraries around your dates, budget, and pace. Flights, hotels, and transfers arrive as one clear plan.
              </p>
              <p className="text-base sm:text-lg text-[#525252] leading-relaxed font-light">
                One travel manager stays with you from the first call to your return home.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-5 border-t border-[#E5E5E5]">
                <div>
                  <p className="text-2xl font-semibold text-[#171717] mb-1">IATA</p>
                  <p className="text-sm text-[#737373] font-light leading-relaxed">
                    Certified flight booking
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-[#171717] mb-1">20+</p>
                  <p className="text-sm text-[#737373] font-light leading-relaxed">
                    Years with Safe Wheels
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-[16/7] w-full rounded-[2rem] overflow-hidden bg-black border border-[#171717]">
                <Image
                  src="/images/spicetrip-logo-about.png"
                  alt="SpiceTrip — good time, great memories!"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  priority
                  unoptimized
                  className="object-contain object-center p-6 sm:p-10"
                />
              </div>
              <p className="mt-3 text-sm text-[#737373] font-light tracking-[0.04em]">
                good time — great memories
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#D31F25] mb-2">
            How we work
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#171717] mb-8">
            Three steps to your trip
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {STEPS.map((step) => (
              <div key={step.n} className="space-y-2">
                <p className="text-[11px] font-semibold tracking-[0.2em] text-[#D31F25]">
                  {step.n}
                </p>
                <h3 className="text-lg font-semibold text-[#171717]">{step.title}</h3>
                <p className="text-sm text-[#737373] font-light leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#D31F25] mb-2">
            Offices
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#171717] mb-8">
            Across Karnataka
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#A3A3A3] font-medium">
                Head office
              </p>
              <h3 className="text-xl font-semibold text-[#171717]">Mysore</h3>
              <p className="text-sm text-[#737373] font-light leading-relaxed">
                Prashanth Plaza, 4th Main, 5th Cross, Saraswathipuram, Mysore 570009
              </p>
              <p className="text-sm text-[#171717] font-medium">+91 821 4001100</p>
            </div>

            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#A3A3A3] font-medium">
                Branch
              </p>
              <h3 className="text-xl font-semibold text-[#171717]">Bangalore</h3>
              <p className="text-sm text-[#737373] font-light leading-relaxed">
                Central Business District / Lavelle Road
              </p>
              <p className="text-sm text-[#171717] font-medium">+91 821 4001100</p>
            </div>

            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#A3A3A3] font-medium">
                Branch
              </p>
              <h3 className="text-xl font-semibold text-[#171717]">Mangalore</h3>
              <p className="text-sm text-[#737373] font-light leading-relaxed">
                Kadri Road / Hampankatta
              </p>
              <p className="text-sm text-[#171717] font-medium">+91 821 4001100</p>
            </div>
          </div>

          <p className="mt-10 text-sm text-[#737373] font-light">
            SpiceTrip is a venture of Safe Wheels Group.{" "}
            <Link href="/contact" className="text-[#171717] font-medium underline underline-offset-2 hover:text-[#D31F25]">
              Visit or call the Mysore desk
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative rounded-[2rem] overflow-hidden min-h-[240px] sm:min-h-[280px] flex items-center">
            <Image
              src="/images/about-cta-travel.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              aria-hidden
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 px-8 py-12 sm:px-12 sm:py-14 text-white">
              <h2 className="text-2xl sm:text-3xl font-semibold max-w-xl leading-tight mb-3">
                Ready to plan your next trip?
              </h2>
              <p className="text-sm sm:text-base text-white/70 font-light max-w-lg mb-6 leading-relaxed">
                Tell us where you want to go. We will send a clear itinerary and price.
              </p>
              <Link
                href="/contact#consultation-form"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#F5F5F4] text-[#171717] text-sm font-medium px-6 py-3 rounded-full transition-colors"
              >
                <span>Enquire</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
