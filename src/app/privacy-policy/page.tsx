import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | SpiceTrip Official",
  description: "Privacy policy and client data protection practices of SpiceTrip (A venture of Safe Wheels Group).",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background min-h-screen py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12">
          <div className="flex items-center space-x-2 text-xs font-sans uppercase tracking-[0.2em] text-terracotta font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Client Data Integrity</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-deep mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs text-foreground-muted">
            Last Updated: November 2026 • SpiceTrip (A venture of Safe Wheels Group)
          </p>
        </div>

        <div className="bg-white border border-sand/40 p-8 sm:p-12 rounded-sm shadow-sm space-y-8 text-xs sm:text-sm text-foreground-muted leading-relaxed">
          <section>
            <h2 className="font-serif text-lg font-bold text-forest-deep mb-2">1. Introduction</h2>
            <p>
              SpiceTrip ("we", "our", or "us"), a prestigious venture of Safe Wheels Group headquartered at "PRASHANTH PLAZA", 4th Main, 5th Cross, Saraswathipuram, Mysore - 570009, operates under strict IATA compliance. We are committed to protecting the privacy, security, and personal data of our travelers.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-bold text-forest-deep mb-2">2. Information We Collect</h2>
            <p className="mb-2">
              To curate bespoke international expeditions, issue flight tickets, coordinate visas, and guarantee hotel reservations, we collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Full traveler legal name, date of birth, gender, and nationality as per valid passport.</li>
              <li>Passport particulars, validity dates, and visa documentation.</li>
              <li>Contact details including email addresses, phone/WhatsApp numbers, and residential billing address.</li>
              <li>Dietary choices, room preferences, and flight frequent flyer numbers.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-lg font-bold text-forest-deep mb-2">3. How Your Information Is Used</h2>
            <p>
              Your data is exclusively utilized to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>Issue verified airline e-tickets via our IATA Global Distribution System (GDS).</li>
              <li>Submit visa applications to embassies, high commissions, and official consular portals.</li>
              <li>Confirm star hotel vouchers and private Safe Wheels chauffeur assignments.</li>
              <li>Transmit crucial on-trip alerts, flight schedule adjustments, or weather briefings.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-lg font-bold text-forest-deep mb-2">4. Data Sharing & Third Parties</h2>
            <p>
              We do not sell, rent, or trade client information to advertising brokers. Necessary details are shared only with certified travel suppliers (airlines, embassies, hotels, ground transport partners) strictly required to fulfill your journey.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-bold text-forest-deep mb-2">5. Contact Our Privacy Officer</h2>
            <p>
              If you have any questions or wish to update or delete your stored travel records, please write to us at{" "}
              <a href="mailto:info@spicetrip.com" className="text-forest font-semibold underline">
                info@spicetrip.com
              </a>{" "}
              or contact our Mysore headquarters at +91 821 4001100.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

