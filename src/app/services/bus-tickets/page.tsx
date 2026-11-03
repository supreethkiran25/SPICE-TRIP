"use client";

import { useState } from "react";
import { Bus, ShieldCheck, CheckCircle2, Phone, AlertCircle } from "lucide-react";

export default function BusTicketsPage() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    seats: "2 Seats",
    name: "",
    email: "",
    phone: "",
    city: "",
    busType: "AC Multi-Axle Sleeper",
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
          destination: `Bus from ${formData.from} to ${formData.to} (${formData.busType})`,
          departureDate: formData.date,
          travelers: formData.seats,
          budget: formData.city,
          travelType: "Bus Ticket Booking",
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
            <Bus className="w-3.5 h-3.5" />
            <span>Intercity Coach Reservation Desk</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-forest-deep mb-4">
            Bus Ticket Booking Desk
          </h1>
          <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
            Reserve comfortable multi-axle Volvo, Scania, and luxury sleeper coach berths connecting Mysore, Bangalore, Mangalore, Goa, Hyderabad, and Kerala.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="enquiry">
          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-sand/40 rounded-sm shadow-sm">
            {status === "success" ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-bold text-forest-deep mb-2">
                  Bus Enquiry Received
                </h3>
                <p className="text-xs text-foreground-muted mb-6">
                  Our ticketing desk will share available coach operators, boarding points, and seat maps with you on WhatsApp ({formData.phone}).
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="bg-forest text-white text-xs font-semibold uppercase tracking-wider px-6 py-2.5 rounded-sm"
                >
                  Submit Another Booking
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[11px] font-sans uppercase tracking-wider font-semibold text-foreground">
                      From (Origin City) <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mysore, Bangalore"
                      value={formData.from}
                      onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                      className="bg-background-secondary/40 border border-sand/50 p-2.5 text-xs text-foreground rounded-sm focus:outline-none focus:border-forest"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[11px] font-sans uppercase tracking-wider font-semibold text-foreground">
                      To (Destination City) <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mangalore, Goa, Ooty"
                      value={formData.to}
                      onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                      className="bg-background-secondary/40 border border-sand/50 p-2.5 text-xs text-foreground rounded-sm focus:outline-none focus:border-forest"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[11px] font-sans uppercase tracking-wider font-semibold text-foreground">
                      Journey Date <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      min={new Date().toISOString().split("T")[0]}
                      className="bg-background-secondary/40 border border-sand/50 p-2.5 text-xs text-foreground rounded-sm focus:outline-none focus:border-forest"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[11px] font-sans uppercase tracking-wider font-semibold text-foreground">
                      Coach Preference
                    </label>
                    <select
                      value={formData.busType}
                      onChange={(e) => setFormData({ ...formData, busType: e.target.value })}
                      className="bg-background-secondary/40 border border-sand/50 p-2.5 text-xs text-foreground rounded-sm focus:outline-none focus:border-forest"
                    >
                      <option value="AC Multi-Axle Sleeper">AC Multi-Axle Volvo / Scania Sleeper</option>
                      <option value="AC Semi-Sleeper">AC Semi-Sleeper Coach</option>
                      <option value="KSRTC Airavat Club Class">KSRTC Airavat Club Class</option>
                      <option value="Non-AC Sleeper">Non-AC Sleeper</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[11px] font-sans uppercase tracking-wider font-semibold text-foreground">
                      Full Name <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Passenger Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background-secondary/40 border border-sand/50 p-2.5 text-xs text-foreground rounded-sm focus:outline-none focus:border-forest"
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
                  {status === "submitting" ? "Searching Schedules..." : "Enquire for Bus Availability & Rates"}
                </button>
              </form>
            )}
          </div>

          {/* Right Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-forest-deep text-sand-light p-8 rounded-sm border border-forest">
              <h3 className="font-serif text-lg font-bold text-white mb-3">Popular Coach Corridors</h3>
              <ul className="text-xs text-sand-light/85 space-y-2.5">
                <li>• <strong>Mysore ⇄ Bangalore:</strong> Hourly departures connecting Kempegowda Bus Station & Majestic.</li>
                <li>• <strong>Mysore ⇄ Mangalore:</strong> Scenic Western Ghats overnight sleeper coaches.</li>
                <li>• <strong>Mysore ⇄ Hyderabad:</strong> Premium multi-axle luxury Volvo sleeper journeys.</li>
                <li>• <strong>Mysore ⇄ Goa & Cochin:</strong> Direct coastal holiday connectivity.</li>
              </ul>
            </div>

            <div className="bg-white p-6 border border-sand/40 rounded-sm">
              <h4 className="font-serif text-base font-bold text-forest-deep mb-2">Instant Booking Assistance</h4>
              <p className="text-xs text-foreground-muted mb-4">Contact our Mysore Saraswathipuram ticketing desk:</p>
              <a
                href="tel:+918214001100"
                className="inline-flex items-center space-x-2 text-terracotta hover:underline text-xs font-bold uppercase tracking-wider"
              >
                <Phone className="w-4 h-4" />
                <span>Call Desk: +91 821 4001100</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

