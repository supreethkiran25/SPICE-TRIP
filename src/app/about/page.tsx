import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, Users, Compass, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "About Us — SpiceTrip & Safe Wheels Group Heritage",
  description:
    "Learn about SpiceTrip, an IATA certified travel agency and venture of Safe Wheels Group headquartered in Mysore, India. Over two decades of hospitality excellence.",
};

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen py-16 md:py-24">
      <div className="max-w-container mx-auto px-6">
        {/* Header Breadcrumbs & Title */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-2 text-xs font-sans uppercase tracking-[0.2em] text-terracotta font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>The SpiceTrip Story</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-deep mb-6">
            Boutique Travel Crafted with Heritage & Integrity
          </h1>
          <p className="text-base sm:text-lg text-foreground-muted leading-relaxed font-normal">
            SpiceTrip, a venture of Safe Wheels, is an IATA certified travel agency offering independent, curated travel worldwide. Headquartered in Mysore with branch offices in Bangalore and Mangalore.
          </p>
        </div>

        {/* Story Section with Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-foreground-muted leading-relaxed">
            <p>
              SpiceTrip is a much sought-after name in the travel industry. We are a passionate and energetic team of travel curators, headed by an experienced leadership group with a combined field experience of over a decade, known for our impeccable services and well-preserved moral values.
            </p>
            <p>
              Our well-researched and carefully designed tour itineraries have made us a favourite tour operator not only with our discerning individual clients but also with co-tour operators, luxury hotels, private resorts, airlines, and international ground associates.
            </p>
            <p>
              We hold exclusive tie-ups with premier resorts and star hotels across all ranges—right from ultra-luxurious private pool villas to handpicked boutique heritage properties. We offer unbeatable value and seamless ground execution for popular global and domestic destinations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-sand/40">
              <div className="flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-forest-deep text-sm">IATA Certified</h4>
                  <p className="text-xs text-foreground-muted">Direct global airline reservation authority and passenger protection standards.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-forest-deep text-sm">Safe Wheels Legacy</h4>
                  <p className="text-xs text-foreground-muted">Backed by Karnataka’s premier luxury fleet mobility and hospitality enterprise.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-xl bg-slate-100 group">
            <Image
              src="/images/prashanth-plaza-mysore.jpg"
              alt="SpiceTrip Headquarters — Prashanth Plaza, Saraswathipuram, Mysore"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white p-5 bg-forest-deep/95 backdrop-blur-md rounded-xl border border-white/10 shadow-lg">
              <div className="flex items-center space-x-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-emerald-300 font-bold">
                  Corporate Headquarters
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white tracking-tight">"PRASHANTH PLAZA", Mysore</h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                4th Main, 5th Cross, Saraswathipuram, Mysore – 570009
              </p>
              <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                <span>Safe Wheels Group</span>
                <span className="text-emerald-300 font-medium">Visiting Desks Open</span>
              </div>
            </div>
          </div>
        </div>

        {/* Office Network & Branches */}
        <div className="bg-white border border-sand/40 p-8 sm:p-12 rounded-sm shadow-sm mb-20">
          <div className="mb-8">
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-terracotta font-semibold block mb-1">
              Regional Presence
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-deep">
              Our Offices Across Karnataka
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Head Office Mysore */}
            <div className="bg-background-secondary/40 p-6 rounded-sm border border-sand/40">
              <span className="text-[10px] font-sans uppercase tracking-widest text-terracotta font-bold block mb-2">
                Head Office
              </span>
              <h3 className="font-serif text-xl font-bold text-forest-deep mb-3">Mysore</h3>
              <div className="space-y-2 text-xs text-foreground-muted">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                  <span>"PRASHANTH PLAZA", 4th Main, 5th Cross, Saraswathipuram, Mysore - 570009</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-forest shrink-0" />
                  <span>+91 821 4001100 / 2541100</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-forest shrink-0" />
                  <span>info@spicetrip.com</span>
                </div>
              </div>
            </div>

            {/* Bangalore Branch */}
            <div className="bg-background-secondary/40 p-6 rounded-sm border border-sand/40">
              <span className="text-[10px] font-sans uppercase tracking-widest text-terracotta font-bold block mb-2">
                Branch Office
              </span>
              <h3 className="font-serif text-xl font-bold text-forest-deep mb-3">Bangalore</h3>
              <div className="space-y-2 text-xs text-foreground-muted">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                  <span>Central Business District / Lavelle Road, Bangalore</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-forest shrink-0" />
                  <span>+91 821 4001100 (Central Desk)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-forest shrink-0" />
                  <span>bangalore@spicetrip.com</span>
                </div>
              </div>
            </div>

            {/* Mangalore Branch */}
            <div className="bg-background-secondary/40 p-6 rounded-sm border border-sand/40">
              <span className="text-[10px] font-sans uppercase tracking-widest text-terracotta font-bold block mb-2">
                Branch Office
              </span>
              <h3 className="font-serif text-xl font-bold text-forest-deep mb-3">Mangalore</h3>
              <div className="space-y-2 text-xs text-foreground-muted">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                  <span>Kadri Road / Hampankatta, Mangalore</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-forest shrink-0" />
                  <span>+91 821 4001100 (Central Desk)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-forest shrink-0" />
                  <span>mangalore@spicetrip.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-forest-deep text-white p-10 sm:p-14 rounded-sm text-center border border-forest">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Begin Your Next Journey with Us
          </h2>
          <p className="text-sm text-sand-light/80 max-w-xl mx-auto mb-8">
            Speak with our travel curators to design an extraordinary international voyage customized exclusively for you.
          </p>
          <Link
            href="/contact#enquiry"
            className="inline-flex items-center space-x-2 bg-terracotta hover:bg-white hover:text-forest-deep text-white font-sans text-xs font-semibold uppercase tracking-widest px-8 py-4 rounded-sm transition-all duration-300 shadow-md"
          >
            <span>Plan Your Journey Today</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

