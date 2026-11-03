import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Terms and Conditions | SpiceTrip Official",
  description: "Official terms and conditions for booking tour packages and ticketing services with SpiceTrip (A venture of Safe Wheels Group).",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-background min-h-screen py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12">
          <div className="flex items-center space-x-2 text-xs font-sans uppercase tracking-[0.2em] text-terracotta font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Booking Agreement</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-deep mb-4">
            Terms & Conditions
          </h1>
          <p className="text-xs text-foreground-muted">
            SpiceTrip • A Venture of Safe Wheels Group • IATA Certified Travel Agency
          </p>
        </div>

        <div className="bg-white border border-sand/40 p-8 sm:p-12 rounded-sm shadow-sm space-y-8 text-xs sm:text-sm text-foreground-muted leading-relaxed">
          <section>
            <h2 className="font-serif text-lg font-bold text-forest-deep mb-2">1. Booking Confirmation & Deposits</h2>
            <p>
              A tour package or flight booking is considered confirmed only upon receipt of the stipulated initial advance deposit and issuance of an official SpiceTrip booking voucher. All rates quoted in INR are subject to currency fluctuations and airline fuel tax revisions until fully ticketed.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-bold text-forest-deep mb-2">2. Cancellation & Refund Policy</h2>
            <p className="mb-2">
              Cancellations must be communicated in writing to <a href="mailto:info@spicetrip.com" className="text-forest underline">info@spicetrip.com</a>. Cancellation charges are determined by airline tariff rules and hotel supplier contracts:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Air Tickets:</strong> Subject to specific airline cancellation fees and SpiceTrip service handling charges. Non-refundable tickets cannot be reimbursed.</li>
              <li><strong>Package Tours:</strong> 30+ days prior to departure: nominal administrative fee; 15–29 days prior: 50% package forfeiture; under 14 days: 100% cancellation fee applies due to contracted hotel commitments.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-lg font-bold text-forest-deep mb-2">3. Passports & Travel Visas</h2>
            <p>
              It is the sole responsibility of the passenger to ensure their passport possesses at least 6 months validity from the date of return and complies with transit visa regulations. While SpiceTrip provides expert visa assistance, visa grant remains the sovereign prerogative of the respective consulate or immigration department.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-bold text-forest-deep mb-2">4. Safe Wheels Ground Mobility</h2>
            <p>
              All chauffeur-driven transfers and sightseeing trips adhere strictly to regional transport laws and safety protocols. Delays caused by unseasonal landslides, traffic congestion, or flight reschedulings will be mitigated by our ground team to the best extent feasible.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-bold text-forest-deep mb-2">5. Jurisdiction & Disputes</h2>
            <p>
              Any disputes or legal claims arising out of services provided by SpiceTrip shall be subject to the exclusive jurisdiction of the competent courts in Mysore, Karnataka, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

