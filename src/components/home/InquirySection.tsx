"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

type InquirySectionProps = {
  defaultDestination?: string;
};

export default function InquirySection({ defaultDestination = "" }: InquirySectionProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [destination, setDestination] = useState(defaultDestination);
  const [travelDate, setTravelDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const field =
    "w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#171717]/15 focus:border-[#171717]";
  const selectField =
    "w-full appearance-none bg-white bg-[length:14px] bg-[right_14px_center] bg-no-repeat pr-10 pl-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#171717]/15 focus:border-[#171717]";
  const selectStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23717117' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
  } as const;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const travelers = `${adults} Adult${adults === "1" ? "" : "s"}${
      Number(children) > 0 ? `, ${children} Child${children === "1" ? "" : "ren"}` : ""
    }`;
    const notes = [
      budget ? `Budget: ${budget}` : "",
      message,
    ]
      .filter(Boolean)
      .join(" · ");

    try {
      await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: name,
          phone,
          email,
          destination: destination || "General Inquiry",
          departureDate: travelDate || undefined,
          returnDate: returnDate || undefined,
          travelers,
          budget: budget || undefined,
          additionalRequirements: notes || undefined,
        }),
      });
    } catch {
      // still show success UX for local/demo
    }
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-8">
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-[#171717]">Plan your trip</h3>
        <p className="text-sm text-gray-500 mt-1">
          Customise dates, travellers, and budget. We will reply with a clear plan.
        </p>
      </div>

      {submitted ? (
        <div className="py-10 text-center space-y-3">
          <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="font-bold text-[#171717]">Received</h4>
          <p className="text-sm text-gray-600 max-w-sm mx-auto">
            Thanks{name ? `, ${name}` : ""}. We will call you soon
            {destination ? ` about ${destination}` : ""}.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              className={field}
            />
            <input
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone / WhatsApp"
              className={field}
            />
          </div>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className={field}
          />
          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Destination / package"
            className={field}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5">
                Travel date
              </label>
              <input
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className={field}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5">
                Return date
              </label>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                min={travelDate || new Date().toISOString().split("T")[0]}
                className={field}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3.5">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5">
                Adults
              </label>
              <select
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className={selectField}
                style={selectStyle}
              >
                {["1", "2", "3", "4", "5", "6"].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5">
                Children
              </label>
              <select
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                className={selectField}
                style={selectStyle}
              >
                {["0", "1", "2", "3", "4"].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5">
                Budget
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className={selectField}
                style={selectStyle}
              >
                <option value="">Any</option>
                <option value="Under ₹50,000">Under ₹50k</option>
                <option value="₹50,000 – ₹1,00,000">₹50k – ₹1L</option>
                <option value="₹1,00,000 – ₹2,00,000">₹1L – ₹2L</option>
                <option value="Above ₹2,00,000">Above ₹2L</option>
              </select>
            </div>
          </div>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Hotels, flights, special requests…"
            rows={3}
            className={`${field} resize-y`}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#171717] hover:bg-black text-white text-sm font-semibold transition-colors disabled:opacity-60"
          >
            <Send className="w-4 h-4" />
            <span>{loading ? "Sending…" : "Send enquiry"}</span>
          </button>
        </form>
      )}
    </section>
  );
}
