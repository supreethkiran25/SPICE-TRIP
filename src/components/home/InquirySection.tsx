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
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: name,
          phone,
          email,
          destination: destination || "General Inquiry",
          additionalRequirements: message,
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
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#0C2340]">Plan your journey</h3>
        <p className="text-sm text-gray-500 mt-1">
          Share a few details and our Mysore concierge will respond shortly.
        </p>
      </div>

      {submitted ? (
        <div className="py-10 text-center space-y-3">
          <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="font-bold text-[#0C2340]">Inquiry received</h4>
          <p className="text-xs text-gray-600 max-w-sm mx-auto">
            Thank you{name ? `, ${name}` : ""}. Our Safe Wheels team will contact you soon
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
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C2340]"
            />
            <input
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone / WhatsApp"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C2340]"
            />
          </div>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C2340]"
          />
          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Destination / package interest"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C2340]"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Travel dates, travelers, notes…"
            rows={4}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C2340] resize-y"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0C2340] hover:bg-[#153359] text-white text-sm font-bold transition-colors disabled:opacity-60"
          >
            <Send className="w-4 h-4" />
            <span>{loading ? "Sending…" : "Submit inquiry"}</span>
          </button>
        </form>
      )}
    </section>
  );
}
