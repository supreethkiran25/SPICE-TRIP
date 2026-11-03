"use client";

import { useState } from "react";
import { BookOpen, ShieldCheck, CheckCircle2, Phone, AlertCircle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data/company";

export default function PassportAssistancePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    serviceType: "Fresh Passport Application",
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
          destination: `Passport: ${formData.serviceType} in ${formData.city}`,
          budget: "N/A",
          travelType: "Passport Assistance",
          additionalRequirements: formData.message,
        }),
      });

      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-background min-h-screen py-16 md:py-24">
      <div className="max-w-container mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center space-x-2 text-xs font-sans uppercase tracking-[0.2em] text-terracotta font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Passport Advisory Desk</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-forest-deep mb-4">
            Passport Assistance & Seva Advisory
          </h1>
          <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
            Eliminate document rejections and cumbersome portal delays. SpiceTrip provides expert scrutiny of your identity and address documents, online filing on the official Passport Seva portal, Tatkaal expedited advisory, and PSK appointment scheduling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="enquiry">
          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-sand/40 rounded-sm shadow-sm">
            {status === "success" ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-bold text-forest-deep mb-2">
                  Passport Assistance Request Logged
                </h3>
                <p className="text-xs text-foreground-muted mb-6">
                  Our passport advisor will review your requirements and contact you at {formData.phone || formData.email} to guide you through the process.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="bg-forest text-white text-xs font-semibold uppercase tracking-wider px-6 py-2.5 rounded-sm"
                >
                  Submit Another Request
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

                <div className="flex flex-col space-y-1.5">
                  <label className="text-[11px] font-sans uppercase tracking-wider font-semibold text-foreground">
                    Required Passport Service
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="bg-background-secondary/40 border border-sand/50 p-2.5 text-xs text-foreground rounded-sm focus:outline-none focus:border-forest"
                  >
                    <option value="Fresh Passport Application">Fresh Passport Application</option>
                    <option value="Passport Renewal / Re-issue">Passport Renewal / Expiry Re-issue</option>
                    <option value="Tatkaal Expedited Scheme">Tatkaal Expedited Scheme (Urgent)</option>
                    <option value="Minor Passport Application">Minor / Child Passport Application</option>
                    <option value="Address / Spouse Name Change">Address / Spouse Name Endorsement</option>
                    <option value="Damaged / Lost Passport">Damaged or Lost Passport Replacement</option>
                  </select>
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label className="text-[11px] font-sans uppercase tracking-wider font-semibold text-foreground">
                    Additional Details or Urgency Note
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Current passport expires in 4 months, need appointment in Mysore PSK..."
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
                  {status === "submitting" ? "Submitting..." : "Submit Passport Service Request"}
                </button>
              </form>
            )}
          </div>

          {/* Right Checklist */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-forest-deep text-sand-light p-8 rounded-sm border border-forest">
              <h3 className="font-serif text-lg font-bold text-white mb-4 flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-terracotta" />
                <span>Check-list for Passport Application</span>
              </h3>
              <ul className="text-xs text-sand-light/85 space-y-3 leading-relaxed">
                <li>• <strong>Proof of Date of Birth:</strong> Birth Certificate issued by municipal authority, or 10th Standard Matriculation Certificate.</li>
                <li>• <strong>Proof of Present Address:</strong> Aadhaar Card, Water/Electricity bill, Bank Passbook with photo, or Voter ID.</li>
                <li>• <strong>Identity Proof:</strong> PAN Card, Driving License, or Government Employee ID.</li>
                <li>• <strong>For Renewal:</strong> Old original passport with self-attested photocopies of first two and last two pages.</li>
                <li>• <strong>For Minors:</strong> Annexure D/C signed by parents along with parents' valid passports.</li>
              </ul>
            </div>

            <div className="bg-white p-6 border border-sand/40 rounded-sm">
              <h4 className="font-serif text-base font-bold text-forest-deep mb-2">Mysore PSK Assistance</h4>
              <p className="text-xs text-foreground-muted mb-4">Located at "PRASHANTH PLAZA", Saraswathipuram, Mysore:</p>
              <a
                href="tel:+918214001100"
                className="inline-flex items-center space-x-2 text-terracotta hover:underline text-xs font-bold uppercase tracking-wider"
              >
                <Phone className="w-4 h-4" />
                <span>Direct Desk: +91 821 4001100</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

