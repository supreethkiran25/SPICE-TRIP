"use client";

import { useEffect, useRef, useState } from "react";
import {
  AirplaneTilt,
  ShieldCheck,
  UserFocus,
  ClockCountdown,
} from "@phosphor-icons/react";

const BENEFITS = [
  {
    icon: AirplaneTilt,
    title: "Flights held with IATA access",
    detail:
      "Airline inventory booked through certified channels so changes and refunds stay trackable.",
  },
  {
    icon: UserFocus,
    title: "One travel manager end to end",
    detail:
      "A named person owns your plan from the first WhatsApp to airport pickup and return.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Wheels ground support",
    detail:
      "Chauffeurs, transfers, and local desks in Mysore, Bangalore, and Mangalore when you need them.",
  },
  {
    icon: ClockCountdown,
    title: "Itinerary draft in 24 hours",
    detail:
      "Share dates and budget once. Receive a clear day by day plan you can edit before paying.",
  },
];

function BenefitCard({
  icon: Icon,
  title,
  detail,
  delay,
}: {
  icon: typeof AirplaneTilt;
  title: string;
  detail: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`rounded-2xl border border-[#E7E5E4] bg-white p-6 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        visible
          ? "translate-y-0 blur-0 opacity-100"
          : "translate-y-16 blur-md opacity-0"
      }`}
    >
      <div className="w-10 h-10 rounded-xl bg-[#FEF2F2] text-[#D31F25] flex items-center justify-center mb-4">
        <Icon className="w-5 h-5" weight="duotone" />
      </div>
      <h3 className="text-xl font-semibold text-[#18181B] mb-2" style={{ textWrap: "balance" }}>
        {title}
      </h3>
      <p className="text-base text-[#52525B] leading-6" style={{ textWrap: "pretty" }}>
        {detail}
      </p>
    </div>
  );
}

export default function Benefits() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[680px] mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#18181B] mb-4"
            style={{ textWrap: "balance" }}
          >
            Why families book through SpiceTrip
          </h2>
          <p className="text-lg text-[#52525B] leading-7" style={{ textWrap: "pretty" }}>
            Clear ownership, certified ticketing, and local hospitality when plans change mid trip.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {BENEFITS.map((item, index) => (
            <BenefitCard key={item.title} {...item} delay={index * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
