import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About | SpiceTrip",
  description: "IATA certified travel agency from Safe Wheels Group, Mysore.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#F7F6F3] min-h-screen">
      {/* Intro */}
      <section className="pt-20 md:pt-28 pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#D31F25] mb-5">
            SpiceTrip · Safe Wheels Group
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold uppercase tracking-[0.04em] text-[#171717] max-w-3xl leading-[1.15] mb-6">
            Private journeys.
            <br />
            Planned with care.
          </h1>
          <p className="text-base sm:text-lg text-[#737373] max-w-2xl leading-relaxed font-light">
            IATA certified travel from Mysore. Clear plans, named support, and the Safe Wheels network behind every trip.
          </p>
        </div>
      </section>

      {/* Story + image */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <p className="text-base sm:text-lg text-[#525252] leading-relaxed font-light">
                We build international and India itineraries around your dates, budget, and pace. Flights, hotels, and transfers arrive as one clear plan.
              </p>
              <p className="text-base sm:text-lg text-[#525252] leading-relaxed font-light">
                One travel manager stays with you from the first call to your return home.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#E5E5E5]">
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
              <div className="relative aspect-[5/4] rounded-[2rem] overflow-hidden bg-[#E7E5E4]">
                <Image
                  src="/images/prashanth-plaza-mysore.jpg"
                  alt="SpiceTrip office, Prashanth Plaza, Mysore"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center"
                />
              </div>
              <p className="mt-4 text-sm text-[#737373] font-light">
                Prashanth Plaza, Saraswathipuram, Mysore
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#D31F25] mb-3">
            Offices
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#171717] mb-12">
            Across Karnataka
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#A3A3A3] font-medium">
                Head office
              </p>
              <h3 className="text-xl font-semibold text-[#171717]">Mysore</h3>
              <p className="text-sm text-[#737373] font-light leading-relaxed">
                Prashanth Plaza, 4th Main, 5th Cross, Saraswathipuram, Mysore 570009
              </p>
              <p className="text-sm text-[#171717] font-medium">+91 821 4001100</p>
            </div>

            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#A3A3A3] font-medium">
                Branch
              </p>
              <h3 className="text-xl font-semibold text-[#171717]">Bangalore</h3>
              <p className="text-sm text-[#737373] font-light leading-relaxed">
                Central Business District / Lavelle Road
              </p>
              <p className="text-sm text-[#171717] font-medium">+91 821 4001100</p>
            </div>

            <div className="space-y-3">
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
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[2rem] bg-[#171717] text-white px-8 py-14 sm:px-14 sm:py-16">
            <h2 className="text-3xl sm:text-4xl font-semibold max-w-xl leading-tight mb-4">
              Ready to plan your next trip?
            </h2>
            <p className="text-sm sm:text-base text-white/60 font-light max-w-lg mb-8 leading-relaxed">
              Tell us where you want to go. We will send a clear itinerary and price.
            </p>
            <Link
              href="/contact#enquiry"
              className="inline-flex items-center gap-2 bg-[#D31F25] hover:bg-[#B91C1C] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors"
            >
              <span>Enquire</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
