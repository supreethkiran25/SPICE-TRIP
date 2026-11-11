"use client";

import { useState } from "react";
import { Plane, CheckCircle2, Phone, AlertCircle } from "lucide-react";

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

  const field =
    "w-full bg-[#F7F6F3] border border-[#E5E5E5] px-3.5 py-2.5 text-sm text-[#171717] rounded-xl focus:outline-none focus:border-[#171717]";

  return (
    <div className="bg-[#F7F6F3] min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[#D31F25] mb-4">
            <Plane className="w-3.5 h-3.5" />
            IATA certified
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold uppercase tracking-[0.04em] text-[#171717] mb-3">
            Flight tickets
          </h1>
          <p className="text-sm sm:text-base text-[#737373] font-light leading-relaxed">
            Domestic and international flights. Clear fares. We book and send your tickets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10" id="enquiry">
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-[#E5E5E5] rounded-3xl">
            {status === "success" ? (
              <div className="text-center py-10">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-[#171717] mb-2">
                  Request received
                </h3>
                <p className="text-sm text-[#737373] mb-6">
                  We will call or email you with options shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="bg-[#171717] text-white text-sm font-medium px-5 py-2.5 rounded-full"
                >
                  New enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center gap-5 pb-4 border-b border-[#EFEDE8]">
                  <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-[#171717]">
                    <input
                      type="radio"
                      name="tripType"
                      checked={tripType === "roundtrip"}
                      onChange={() => setTripType("roundtrip")}
                    />
                    <span>Round trip</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-[#171717]">
                    <input
                      type="radio"
                      name="tripType"
                      checked={tripType === "oneway"}
                      onChange={() => setTripType("oneway")}
                    />
                    <span>One way</span>
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#525252]">From *</label>
                    <input
                      type="text"
                      required
                      placeholder="Bangalore (BLR)"
                      value={formData.from}
                      onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                      className={field}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#525252]">To *</label>
                    <input
                      type="text"
                      required
                      placeholder="Dubai (DXB)"
                      value={formData.to}
                      onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                      className={field}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#525252]">Depart *</label>
                    <input
                      type="date"
                      required
                      value={formData.departureDate}
                      onChange={(e) =>
                        setFormData({ ...formData, departureDate: e.target.value })
                      }
                      min={new Date().toISOString().split("T")[0]}
                      className={field}
                    />
                  </div>
                  {tripType === "roundtrip" && (
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#525252]">Return *</label>
                      <input
                        type="date"
                        required
                        value={formData.returnDate}
                        onChange={(e) =>
                          setFormData({ ...formData, returnDate: e.target.value })
                        }
                        min={
                          formData.departureDate ||
                          new Date().toISOString().split("T")[0]
                        }
                        className={field}
                      />
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#525252]">Class</label>
                    <select
                      value={formData.travelClass}
                      onChange={(e) =>
                        setFormData({ ...formData, travelClass: e.target.value })
                      }
                      className={field}
                    >
                      <option value="Economy">Economy</option>
                      <option value="Premium Economy">Premium Economy</option>
                      <option value="Business Class">Business</option>
                      <option value="First Class">First</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#525252]">Travellers</label>
                    <select
                      value={formData.passengers}
                      onChange={(e) =>
                        setFormData({ ...formData, passengers: e.target.value })
                      }
                      className={field}
                    >
                      <option value="1 Adult">1 Adult</option>
                      <option value="2 Adults">2 Adults</option>
                      <option value="Family (2 Adults, 1 Child)">2 Adults, 1 Child</option>
                      <option value="Family (2 Adults, 2 Children)">2 Adults, 2 Children</option>
                      <option value="Group (5+ Passengers)">Group (5+)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#525252]">Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={field}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#525252]">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={field}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#525252]">Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91…"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={field}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#525252]">Notes</label>
                  <textarea
                    rows={2}
                    placeholder="Preferred airline or timing (optional)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={field}
                  />
                </div>

                {status === "error" && (
                  <div className="p-3 bg-red-50 text-red-700 text-sm rounded-xl flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Could not send. Call +91 821 4001100.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-[#171717] hover:bg-black text-white text-sm font-medium py-3 rounded-full transition-colors disabled:opacity-50"
                >
                  {status === "submitting" ? "Sending…" : "Enquire"}
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 space-y-5">
            <div className="bg-[#171717] text-white p-7 sm:p-8 rounded-3xl">
              <h2 className="text-lg font-semibold mb-5">Why book with us</h2>
              <ul className="space-y-4 text-sm text-white/75 font-light">
                <li>IATA certified ticketing</li>
                <li>Clear fares — no hidden add-ons</li>
                <li>Mysore &amp; Bangalore desk support</li>
              </ul>
            </div>

            <div className="bg-white p-6 border border-[#E5E5E5] rounded-3xl">
              <h3 className="text-base font-semibold text-[#171717] mb-1">Need help now?</h3>
              <p className="text-sm text-[#737373] mb-4">Call our flight desk.</p>
              <a
                href="tel:+918214001100"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#D31F25] hover:underline"
              >
                <Phone className="w-4 h-4" />
                +91 821 4001100
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
