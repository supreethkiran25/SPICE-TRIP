"use client";

import { useState } from "react";
import Image from "next/image";
import { Plane, ShieldCheck, CheckCircle2, Phone, Send, AlertCircle } from "lucide-react";

export default function AirTicketsPage() {
  const [tripType, setTripType] = useState<"oneway" | "roundtrip">("roundtrip");
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    travelClass: "Economy",
    passengers: "1 Adult",
    name: "",
    email: "",
    phone: "",
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
          destination: `Flight from ${formData.from} to ${formData.to} (${tripType})`,
          departureDate: formData.departureDate,
          returnDate: formData.returnDate,
          travelers: formData.passengers,
          budget: formData.travelClass,
          travelType: "Air Ticket Enquiry",
          additionalRequirements: formData.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-background min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center space-x-2 text-xs font-sans uppercase tracking-[0.2em] text-terracotta font-semibold mb-3">
            <Plane className="w-3.5 h-3.5" />
            <span>IATA Accredited Flight Booking Desk</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-forest-deep mb-4">
            Air Tickets & International Flights
          </h1>
          <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
            Direct reservation connectivity with premier global airlines. We ensure optimal connections, competitive corporate fares, baggage alignment, and dedicated re-scheduling assistance from our Mysore and Bangalore ticketing desks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="enquiry">
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-sand/40 rounded-3xl shadow-sm">
            {status === "success" ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-forest-deep mb-2">
                  Flight Request Received
                </h3>
                <p className="text-xs text-foreground-muted mb-6">
                  Our IATA ticketing specialist will research optimal schedules and contact you at {formData.phone || formData.email} within 30 minutes.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="bg-forest text-white text-xs font-semibold uppercase tracking-wider px-6 py-2.5 rounded-3xl"
                >
                  Submit Another Flight Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Oneway / Roundtrip Toggle */}
                <div className="flex items-center space-x-4 pb-4 border-b border-sand/30">
                  <label className="flex items-center space-x-2 cursor-pointer text-xs font-semibold text-foreground">
                    <input
                      type="radio"
                      name="tripType"
                      checked={tripType === "roundtrip"}
                      onChange={() => setTripType("roundtrip")}
                      className="text-terracotta focus:ring-forest"
                    />
                    <span>Round Trip</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer text-xs font-semibold text-foreground">
                    <input
                      type="radio"
                      name="tripType"
                      checked={tripType === "oneway"}
                      onChange={() => setTripType("oneway")}
                      className="text-terracotta focus:ring-forest"
                    />
                    <span>One Way</span>
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[11px] font-sans uppercase tracking-wider font-semibold text-foreground">
                      Origin Airport / City <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bangalore (BLR), Mysore"
                      value={formData.from}
                      onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                      className="bg-background-secondary/40 border border-sand/50 p-2.5 text-xs text-foreground rounded-3xl focus:outline-none focus:border-forest"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[11px] font-sans uppercase tracking-wider font-semibold text-foreground">
                      Destination Airport / City <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Hanoi (HAN), Malé (MLE)"
                      value={formData.to}
                      onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                      className="bg-background-secondary/40 border border-sand/50 p-2.5 text-xs text-foreground rounded-3xl focus:outline-none focus:border-forest"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[11px] font-sans uppercase tracking-wider font-semibold text-foreground">
                      Departure Date <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.departureDate}
                      onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                      min={new Date().toISOString().split("T")[0]}
                      className="bg-background-secondary/40 border border-sand/50 p-2.5 text-xs text-foreground rounded-3xl focus:outline-none focus:border-forest"
                    />
                  </div>
                  {tripType === "roundtrip" && (
                    <div className="flex flex-col space-y-1.5">
                      <label className="text-[11px] font-sans uppercase tracking-wider font-semibold text-foreground">
                        Return Date <span className="text-terracotta">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.returnDate}
                        onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                        min={formData.departureDate || new Date().toISOString().split("T")[0]}
                        className="bg-background-secondary/40 border border-sand/50 p-2.5 text-xs text-foreground rounded-3xl focus:outline-none focus:border-forest"
                      />
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[11px] font-sans uppercase tracking-wider font-semibold text-foreground">
                      Cabin Class
                    </label>
                    <select
                      value={formData.travelClass}
                      onChange={(e) => setFormData({ ...formData, travelClass: e.target.value })}
                      className="bg-background-secondary/40 border border-sand/50 p-2.5 text-xs text-foreground rounded-3xl focus:outline-none focus:border-forest"
                    >
                      <option value="Economy">Economy Class</option>
                      <option value="Premium Economy">Premium Economy</option>
                      <option value="Business Class">Business Class</option>
                      <option value="First Class">First Class</option>
                    </select>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[11px] font-sans uppercase tracking-wider font-semibold text-foreground">
                      Passengers
                    </label>
                    <select
                      value={formData.passengers}
                      onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                      className="bg-background-secondary/40 border border-sand/50 p-2.5 text-xs text-foreground rounded-3xl focus:outline-none focus:border-forest"
                    >
                      <option value="1 Adult">1 Adult</option>
                      <option value="2 Adults">2 Adults</option>
                      <option value="Family (2 Adults, 1 Child)">Family (2 Adults, 1 Child)</option>
                      <option value="Family (2 Adults, 2 Children)">Family (2 Adults, 2 Children)</option>
                      <option value="Group (5+ Passengers)">Group (5+ Passengers)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[11px] font-sans uppercase tracking-wider font-semibold text-foreground">
                      Your Name <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background-secondary/40 border border-sand/50 p-2.5 text-xs text-foreground rounded-3xl focus:outline-none focus:border-forest"
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
                      className="bg-background-secondary/40 border border-sand/50 p-2.5 text-xs text-foreground rounded-3xl focus:outline-none focus:border-forest"
                    />
                  </div>
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
                      className="bg-background-secondary/40 border border-sand/50 p-2.5 text-xs text-foreground rounded-3xl focus:outline-none focus:border-forest"
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label className="text-[11px] font-sans uppercase tracking-wider font-semibold text-foreground">
                    Specific Flight Time / Preferred Airline Notes
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Prefer morning departures, Singapore Airlines or Emirates..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background-secondary/40 border border-sand/50 p-2.5 text-xs text-foreground rounded-3xl focus:outline-none focus:border-forest"
                  />
                </div>

                {status === "error" && (
                  <div className="p-3 bg-red-50 text-red-700 text-xs rounded-3xl flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Failed to submit flight inquiry. Please call +91 821 4001100.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-forest hover:bg-terracotta text-white font-sans text-xs font-semibold py-3 rounded-full transition-colors shadow-sm disabled:opacity-50"
                >
                  {status === "submitting" ? "Searching Schedules..." : "Enquire for Flight Schedules & Rates"}
                </button>
              </form>
            )}
          </div>

          {/* Right Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-forest-deep text-sand-light p-8 rounded-3xl border border-forest">
              <div className="flex items-center space-x-2 text-white font-bold text-lg mb-3">
                <ShieldCheck className="w-5 h-5 text-terracotta" />
                <span>The SpiceTrip Flight Advantage</span>
              </div>
              <ul className="text-xs text-sand-light/85 space-y-3 leading-relaxed">
                <li>• <strong>IATA Certified:</strong> Official airline issuing authority with direct global inventory.</li>
                <li>• <strong>No Hidden Fees:</strong> Complete transparency on baggage weight rules and cancellation penalties.</li>
                <li>• <strong>Human Concierge:</strong> Talk to real ticketing specialists in Mysore and Bangalore instead of dealing with impersonal bots.</li>
                <li>• <strong>Corporate Block Fares:</strong> Preferential rates for executive delegations and wedding parties.</li>
              </ul>
            </div>

            <div className="bg-white p-6 border border-sand/40 rounded-3xl">
              <h4 className="text-base font-bold text-forest-deep mb-2">Immediate Assistance</h4>
              <p className="text-xs text-foreground-muted mb-4">Need urgent international rebooking or next-day tickets?</p>
              <a
                href="tel:+918214001100"
                className="inline-flex items-center space-x-2 text-terracotta hover:underline text-xs font-bold uppercase tracking-wider"
              >
                <Phone className="w-4 h-4" />
                <span>Call Flight Desk: +91 821 4001100</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

