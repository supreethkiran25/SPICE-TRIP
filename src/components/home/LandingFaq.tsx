"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";

const FAQS = [
  {
    q: "Is the planning call really free?",
    a: "Yes. The first consultation and itinerary draft are free. You pay only when you confirm flights, hotels, or packages.",
  },
  {
    q: "Do you book only international trips?",
    a: "Most journeys are international, including Vietnam, Maldives, Bali, Dubai, and Thailand. We also plan Kerala and other India routes when they fit your dates.",
  },
  {
    q: "Can you help with visas and passports?",
    a: "Yes. Our desk guides visa paperwork and passport renewal timelines so documents are ready before ticket issue.",
  },
  {
    q: "What if dates or hotels need to change?",
    a: "Your travel manager handles airline and hotel changes through IATA channels and local partners. Fees depend on supplier rules, which we show before you confirm.",
  },
  {
    q: "Do you serve travelers outside Mysore?",
    a: "Yes. Many clients are in Bangalore and Mangalore. Planning is remote friendly by call or WhatsApp, with branch support when needed.",
  },
  {
    q: "How soon should we start planning?",
    a: "For peak seasons like December and school holidays, start 6 to 10 weeks ahead. Shoulder season trips can often lock in 2 to 3 weeks out.",
  },
  {
    q: "Are honeymoon packages customizable?",
    a: "Every honeymoon plan is built around your pace, villa type, and budget. Nothing is a fixed catalogue dump.",
  },
  {
    q: "How do we pay securely?",
    a: "Payments run through our Instamojo checkout linked from SpiceTrip. You receive a clear breakdown before any charge.",
  },
];

export default function LandingFaq() {
  const [open, setOpen] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[680px] mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#18181B] mb-4"
            style={{ textWrap: "balance" }}
          >
            Questions travelers ask before booking
          </h2>
          <p className="text-lg text-[#52525B] leading-7" style={{ textWrap: "pretty" }}>
            Straight answers on cost, visas, changes, and who we serve.
          </p>
        </div>

        <div className="max-w-3xl space-y-3">
          {FAQS.map((item, index) => {
            const isOpen = open === index;
            return (
              <div
                key={item.q}
                className="rounded-2xl border border-[#E7E5E4] bg-[#FAF9F5] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D31F25]"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-base font-semibold text-[#18181B]"
                    style={{ textWrap: "balance" }}
                  >
                    {item.q}
                  </span>
                  <CaretDown
                    className={`w-5 h-5 text-[#71717A] shrink-0 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    weight="bold"
                  />
                </button>
                <div
                  className={`grid transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className="px-6 pb-4 text-base text-[#52525B] leading-6"
                      style={{ textWrap: "pretty" }}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
