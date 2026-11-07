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

  const fieldClass =
    "w-full px-4 py-3 rounded-2xl border border-zinc-200 text-sm text-brand-charcoal placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-spice/20 focus:border-brand-spice";

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-sm">
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-brand-charcoal tracking-tight">
            Plan this trip
          </h3>
          <p className="text-sm text-zinc-500 mt-1">Share a few details. We’ll reply from Mysore.</p>
        </div>

        {submitted ? (
          <div className="py-10 text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-brand-charcoal">Inquiry received</h4>
            <p className="text-sm text-zinc-500 max-w-sm mx-auto">
              Thank you{name ? `, ${name}` : ""}. We’ll contact you soon
              {destination ? ` about ${destination}` : ""}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className={fieldClass}
              />
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone / WhatsApp"
                className={fieldClass}
              />
            </div>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className={fieldClass}
            />
            <input
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Destination"
              className={fieldClass}
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Dates, travelers, notes…"
              rows={4}
              className={`${fieldClass} resize-y`}
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-brand-spice hover:bg-brand-spice-dark text-white text-sm font-semibold transition-colors disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              <span>{loading ? "Sending…" : "Submit"}</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
