"use client";

import { useState } from "react";
import { FileCheck, ShieldCheck, CheckCircle2, Phone, AlertCircle, Send } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data/company";

export default function VisaAssistancePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    countryToVisit: "Vietnam",
    visaType: "Tourist Visa",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          destination: `Visa for ${formData.countryToVisit} (${formData.visaType})`,
          budget: formData.city,
          travelType: "Visa Assistance",
          additionalRequirements: formData.message,
        }),
      });

      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const countries = [
    "Vietnam", "Maldives", "Indonesia (Bali)", "Singapore", "United Arab Emirates (Dubai)",
    "Thailand", "Mauritius", "United Kingdom", "Schengen (Europe)", "United States", "Australia"
  ];

  return (
    <div className="bg-background min-h-screen py-16 md:py-24">
      <div className="max-w-container mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center space-x-2 text-xs font-sans uppercase tracking-[0.2em] text-terracotta font-semibold mb-3">
            <FileCheck className="w-3.5 h-3.5" />
            <span>Consular & Documentation Concierge</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-forest-deep mb-4">
            Visa Assistance & Stamping Desk
          </h1>
          <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
            Consulate protocols require precision. SpiceTrip’s senior visa documentation team reviews forms, drafts compliant cover letters, aligns hotel vouchers and flight itineraries, and coordinates biometric appointments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="enquiry">
          {/* Left Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-sand/40 rounded-sm shadow-sm">
            {status === "success" ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-bold text-forest-deep mb-2">
                  Visa Inquiry Logged
                </h3>
                <p className="text-xs text-foreground-muted mb-6">
                  Our visa documentation officer will contact you at {formData.phone || formData.email} with the exact checklist and current consulate timelines.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="bg-forest text-white text-xs font-semibold uppercase tracking-wider px-6 py-2.5 rounded-sm"
                >
                  Submit Another Visa Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[11px] font-sans uppercase tracking-wider font-semibold text-foreground">
                      Full Name <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Applicant Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background-secondary/40 border border-sand/50 p-2.5 text-xs text-foreground rounded-sm focus:outline-none focus:border-forest"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[11px] font-sans uppercase tracking-wider font-semibold text-foreground">
                      Email Address <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="email@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background-secondary/40 border border-sand/50 p-2.5 text-xs text-foreground rounded-sm focus:outline-none focus:border-forest"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[11px] font-sans uppercase tracking-wider font-semibold text-foreground">
                      Phone Number <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98450 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background-secondary/40 border border-sand/50 p-2.5 text-xs text-foreground rounded-sm focus:outline-none focus:border-forest"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[11px] font-sans uppercase tracking-wider font-semibold text-foreground">
                      Town / City <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mysore, Bangalore, Mangalore"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="bg-background-secondary/40 border border-sand/50 p-2.5 text-xs text-foreground rounded-sm focus:outline-none focus:border-forest"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[11px] font-sans uppercase tracking-wider font-semibold text-foreground">
                      Target Country
                    </label>
                    <select
                      value={formData.countryToVisit}
                      onChange={(e) => setFormData({ ...formData, countryToVisit: e.target.value })}
                      className="bg-background-secondary/40 border border-sand/50 p-2.5 text-xs text-foreground rounded-sm focus:outline-none focus:border-forest"
                    >
                      {countries.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[11px] font-sans uppercase tracking-wider font-semibold text-foreground">
                      Visa Category
                    </label>
                    <select
                      value={formData.visaType}
                      onChange={(e) => setFormData({ ...formData, visaType: e.target.value })}
                      className="bg-background-secondary/40 border border-sand/50 p-2.5 text-xs text-foreground rounded-sm focus:outline-none focus:border-forest"
                    >
                      <option value="Tourist Visa">Tourist / Holiday Visa</option>
                      <option value="Business Visa">Business / Conference Visa</option>
                      <option value="Family Visit Visa">Family Visit Visa</option>
                      <option value="Transit Visa">Transit Visa</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label className="text-[11px] font-sans uppercase tracking-wider font-semibold text-foreground">
                    Travel Dates / Specific Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Planning travel in 3 weeks, family of 4, need urgent appointment slot..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background-secondary/40 border border-sand/50 p-2.5 text-xs text-foreground rounded-sm focus:outline-none focus:border-forest"
                  />
                </div>

                {status === "error" && (
                  <div className="p-3 bg-red-50 text-red-700 text-xs rounded-sm flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Failed to submit. Please call +91 821 4001100.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-forest hover:bg-terracotta text-white font-sans text-xs font-semibold uppercase tracking-widest py-3.5 rounded-sm transition-colors shadow-sm disabled:opacity-50"
                >
                  {status === "submitting" ? "Sending Details..." : "Request Visa Documentation Checklist"}
                </button>
              </form>
            )}
          </div>

          {/* Right Checklist */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-forest-deep text-sand-light p-8 rounded-sm border border-forest">
              <h3 className="font-serif text-lg font-bold text-white mb-4 flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-terracotta" />
                <span>Standard Visa Document Checklist</span>
              </h3>
              <ul className="text-xs text-sand-light/85 space-y-3 leading-relaxed">
                <li>• <strong>Original Passport:</strong> Minimum 6 months validity beyond intended travel date with at least 2 blank pages.</li>
                <li>• <strong>Photographs:</strong> Country-specific matte finish photos (white background, 80% face view, recent within 3 months).</li>
                <li>• <strong>Financial Proof:</strong> Last 6 months bank statements stamped by bank with adequate minimum balance.</li>
                <li>• <strong>Income Tax Returns:</strong> Copies of ITR-V for the past 2–3 assessment years.</li>
                <li>• <strong>Employment/Business Proof:</strong> Leave sanction letter or business incorporation certificate / GST.</li>
                <li>• <strong>Travel Proof:</strong> IATA flight itinerary and confirmed hotel bookings (Provided by SpiceTrip).</li>
              </ul>
            </div>

            <div className="bg-white p-6 border border-sand/40 rounded-sm">
              <h4 className="font-serif text-base font-bold text-forest-deep mb-2">Speak to a Visa Officer</h4>
              <p className="text-xs text-foreground-muted mb-4">Walk into Prashanth Plaza, Mysore or contact our desk:</p>
              <a
                href="tel:+918214001100"
                className="inline-flex items-center space-x-2 text-terracotta hover:underline text-xs font-bold uppercase tracking-wider"
              >
                <Phone className="w-4 h-4" />
                <span>Call Visa Desk: +91 821 4001100</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

