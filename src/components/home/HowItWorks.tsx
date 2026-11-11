"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    step: "01",
    title: "Tell us dates and people",
    detail:
      "Share destination ideas, travel window, and who is flying. A 15 minute call is enough to start.",
  },
  {
    step: "02",
    title: "Receive a clear itinerary",
    detail:
      "Hotels, flights, transfers, and daily rhythm arrive as one editable plan with transparent pricing.",
  },
  {
    step: "03",
    title: "Confirm and travel calm",
    detail:
      "Pay when ready. Your travel manager stays reachable for changes, visas, and on ground help.",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#FAF9F5] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[680px] mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#18181B] mb-4"
            style={{ textWrap: "balance" }}
          >
            How a SpiceTrip booking works
          </h2>
          <p className="text-lg text-[#52525B] leading-7" style={{ textWrap: "pretty" }}>
            Three steps from first message to wheels up, with no surprise process mid way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((item, index) => (
            <div
              key={item.step}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`rounded-2xl border border-[#E7E5E4] bg-white p-6 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                visible
                  ? "translate-y-0 blur-0 opacity-100"
                  : "translate-y-16 blur-md opacity-0"
              }`}
            >
              <span className="text-sm font-semibold text-[#D31F25] mb-4 block">
                Step {item.step}
              </span>
              <h3
                className="text-xl font-semibold text-[#18181B] mb-2"
                style={{ textWrap: "balance" }}
              >
                {item.title}
              </h3>
              <p className="text-base text-[#52525B] leading-6" style={{ textWrap: "pretty" }}>
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
