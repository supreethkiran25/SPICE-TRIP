import type { Metadata } from "next";
import Image from "next/image";
import { Car, ShieldCheck, CheckCircle2, Phone, ExternalLink, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Car Rentals & Luxury Chauffeur Fleet — Safe Wheels India | SpiceTrip",
  description:
    "Official car rental services by Safe Wheels, Mysore. Premium Innova Crysta, Fortuner, luxury sedans, and Tempo Travellers with background-verified professional chauffeurs.",
};

export default function CarRentalsPage() {
  const fleet = [
    {
      name: "Toyota Innova Crysta",
      category: "Executive MPV",
      capacity: "6-7 Guests + Chauffeur",
      features: ["Captain seats", "Dual AC", "Spacious luggage bay", "Bottle water & phone chargers"],
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Toyota Fortuner 4x4",
      category: "Luxury SUV",
      capacity: "6 Guests + Chauffeur",
      features: ["All-terrain capability", "Plush leather cabin", "Highway dominance", "VIP security escorted"],
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Mercedes-Benz E-Class",
      category: "Ultra-Luxury Sedan",
      capacity: "3-4 Guests + Chauffeur",
      features: ["Panoramic sunroof", "Burmester sound", "Executive protocol", "Airport VIP escort"],
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Tempo Traveller Executive",
      category: "Group Coach",
      capacity: "12 to 17 Guests + Chauffeur",
      features: ["Push-back ergonomic seats", "High-roof AC cabin", "Individual reading lamps", "Dedicated luggage rack"],
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="bg-background min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center space-x-2 text-xs font-sans uppercase tracking-[0.2em] text-terracotta font-semibold mb-3">
            <Car className="w-3.5 h-3.5" />
            <span>Safe Wheels Luxury Ground Mobility</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-forest-deep mb-4">
            Car Rentals & Chauffeur Services
          </h1>
          <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
            In seamless partnership with parent enterprise <strong>Safe Wheels Group</strong>, SpiceTrip provides Karnataka’s gold standard in private car rentals, airport pickups, wedding logistics, and outstation holiday transit.
          </p>
        </div>

        {/* Live Safe Wheels CTA Banner */}
        <div className="bg-forest-deep text-sand-light p-8 rounded-3xl border border-forest shadow-md mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 text-white font-bold text-xl mb-1">
              <ShieldCheck className="w-5 h-5 text-terracotta" />
              <span>Safe Wheels Instant Booking Portal</span>
            </div>
            <p className="text-xs text-sand-light/80 max-w-xl">
              Book local Mysore packages, Bangalore airport drops, Coorg hill road trips, or multi-day outstation car rentals instantly on the Safe Wheels booking engine.
            </p>
          </div>
          <a
            href={COMPANY_INFO.integrations.carRentalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-terracotta hover:bg-white hover:text-forest-deep text-white font-sans text-xs font-semibold uppercase tracking-widest px-8 py-3.5 rounded-3xl transition-all duration-300 shadow-md whitespace-nowrap"
          >
            <span>Book on SafeWheelsIndia.com</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Fleet Grid */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-forest-deep mb-8 pb-3 border-b border-sand/40">
            Featured Vehicle Fleet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleet.map((car, idx) => (
              <div
                key={idx}
                className="bg-white border border-sand/40 rounded-3xl overflow-hidden flex flex-col justify-between shadow-sm hover:border-forest transition-colors"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-sand/20">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                    />
                    <div className="absolute top-2.5 right-2.5 bg-forest-deep text-white text-[9px] font-sans uppercase tracking-widest px-2 py-0.5 rounded-3xl font-semibold">
                      {car.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-forest-deep mb-1">
                      {car.name}
                    </h3>
                    <p className="text-xs font-semibold text-terracotta mb-3">
                      {car.capacity}
                    </p>
                    <ul className="space-y-1.5 text-xs text-foreground-muted">
                      {car.features.map((f, i) => (
                        <li key={i} className="flex items-center space-x-1.5">
                          <CheckCircle2 className="w-3 h-3 text-forest shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-sand/20 mt-4">
                  <a
                    href={COMPANY_INFO.integrations.carRentalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-1 bg-background-secondary hover:bg-forest hover:text-white text-forest text-xs font-semibold uppercase tracking-wider py-2.5 rounded-3xl transition-colors text-center mt-3"
                  >
                    <span>Reserve Fleet</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chauffeur Standards */}
        <div className="bg-white p-8 sm:p-10 border border-sand/40 rounded-3xl shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="text-lg font-bold text-forest-deep mb-2">Verified Chauffeurs</h4>
            <p className="text-xs text-foreground-muted leading-relaxed">
              Every driver undergoes criminal background checks, defensive driving instruction, and polite etiquette training.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-forest-deep mb-2">Transparent Per-Km Billing</h4>
            <p className="text-xs text-foreground-muted leading-relaxed">
              Zero hidden surge rates. Clear toll, parking, driver bata, and state border permit accountability.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-forest-deep mb-2">24/7 Fleet Dispatch</h4>
            <p className="text-xs text-foreground-muted leading-relaxed">
              Round-the-clock replacement guarantee and real-time GPS telemetry across Karnataka, Tamil Nadu, and Kerala.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

