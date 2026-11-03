import type { Metadata } from "next";
import { Suspense } from "react";
import InquirySection from "@/components/home/InquirySection";
import { COMPANY_INFO } from "@/lib/data/company";
import { Phone, Mail, MapPin, Clock, Briefcase, ExternalLink, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — Mysore Head Office & Branch Desks | SpiceTrip",
  description:
    "Contact SpiceTrip official travel desk. Headquartered at Prashanth Plaza, Saraswathipuram, Mysore. Telephone: +91 821 4001100 / 2541100. Email: info@spicetrip.com.",
};

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen py-16 md:py-24">
      <div className="max-w-container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-2 text-xs font-sans uppercase tracking-[0.2em] text-terracotta font-semibold mb-3">
            <Phone className="w-3.5 h-3.5" />
            <span>Connect with our Travel Designers</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-deep mb-4">
            Contact SpiceTrip
          </h1>
          <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
            Whether inquiring about a customized international departure, corporate delegation, visa documentation, or ticketing, our dedicated concierge team is at your service.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Mysore Head Office */}
          <div className="bg-white p-8 border border-sand/40 rounded-sm shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-sans uppercase tracking-widest text-terracotta font-bold block mb-2">
                Headquarters
              </span>
              <h3 className="font-serif text-xl font-bold text-forest-deep mb-3">Mysore</h3>
              <div className="space-y-3 text-xs text-foreground-muted">
                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                  <span>"PRASHANTH PLAZA", 4th Main, 5th Cross, Saraswathipuram, MYSORE - 570009</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Phone className="w-4 h-4 text-forest shrink-0" />
                  <span>+91 821 4001100 / 2541100</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Mail className="w-4 h-4 text-forest shrink-0" />
                  <span>info@spicetrip.com</span>
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-sand/30 mt-6 text-[11px] text-forest font-semibold">
              Monday to Saturday: 9:30 AM – 7:00 PM IST
            </div>
          </div>

          {/* Regional Desks */}
          <div className="bg-white p-8 border border-sand/40 rounded-sm shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-sans uppercase tracking-widest text-terracotta font-bold block mb-2">
                Regional Desks
              </span>
              <h3 className="font-serif text-xl font-bold text-forest-deep mb-3">Bangalore & Mangalore</h3>
              <div className="space-y-4 text-xs text-foreground-muted">
                <div>
                  <strong className="text-foreground block">Bangalore Concierge:</strong>
                  <span>Central Business District / Lavelle Road</span>
                  <span className="block text-[11px]">Direct: +91 821 4001100 (Central Desk)</span>
                </div>
                <div>
                  <strong className="text-foreground block">Mangalore Concierge:</strong>
                  <span>Kadri Road / Hampankatta, Mangalore</span>
                  <span className="block text-[11px]">Direct: +91 821 4001100 (Central Desk)</span>
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-sand/30 mt-6 text-[11px] text-terracotta font-semibold">
              IATA Accredited Agency Network
            </div>
          </div>

          {/* Careers & Partnerships */}
          <div className="bg-forest-deep text-sand-light p-8 rounded-sm border border-forest flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-sans uppercase tracking-widest text-terracotta font-bold block mb-2">
                Safe Wheels Group
              </span>
              <h3 className="font-serif text-xl font-bold text-white mb-3">Careers & Corporate</h3>
              <p className="text-xs text-sand-light/80 leading-relaxed mb-4">
                Interested in joining our team of international travel curators or exploring corporate travel partnerships?
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-4 h-4 text-terracotta shrink-0" />
                  <a href="mailto:jobs@safewheelsgroup.com" className="text-white underline hover:text-terracotta">
                    jobs@safewheelsgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-terracotta shrink-0" />
                  <span>A venture of Safe Wheels Group</span>
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-forest/60 mt-6">
              <a
                href={COMPANY_INFO.integrations.paymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-terracotta hover:underline"
              >
                <span>Instamojo Client Payment Gateway</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Booking Inquiry Section */}
        <div id="enquiry">
          <Suspense fallback={<div>Loading form...</div>}>
            <InquirySection />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

