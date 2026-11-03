"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Check, X } from "lucide-react";

interface HighlightItem {
  id: string;
  scriptText: string;
  destination: string;
  subtitle: string;
  duration: string;
  inclusions: string;
  price: string;
  usdPrice: string;
  slug: string;
  bgImage: string;
}

const HIGHLIGHTS: HighlightItem[] = [
  {
    id: "maldives",
    scriptText: "Live Better",
    destination: "Maldives",
    subtitle: "Barefoot Coral Atoll Sanctuary",
    duration: "4 Days / 3 Nights",
    inclusions: "Private Overwater Villa + Seaplane",
    price: "₹58,000",
    usdPrice: "$699",
    slug: "maldives-luxury-escape",
    bgImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=70",
  },
  {
    id: "vietnam",
    scriptText: "Explore Indochina",
    destination: "Vietnam & Halong",
    subtitle: "Hanoi Old Quarter & Emerald Karsts",
    duration: "6 Days / 5 Nights",
    inclusions: "5★ Halong Cruise + Transfers",
    price: "₹34,999",
    usdPrice: "$849",
    slug: "explore-vietnam",
    bgImage: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=70",
  },
  {
    id: "bali",
    scriptText: "Find Serenity",
    destination: "Bali, Indonesia",
    subtitle: "Ubud Sanctuaries & Cliff Temples",
    duration: "5 Days / 4 Nights",
    inclusions: "Private Pool Villa + Excursions",
    price: "₹26,999",
    usdPrice: "$649",
    slug: "bali-classic-tour",
    bgImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=70",
  },
  {
    id: "dubai",
    scriptText: "Taste Luxury",
    destination: "Dubai",
    subtitle: "Burj Khalifa & Desert Safari",
    duration: "4 Days / 3 Nights",
    inclusions: "5★ Hotel + Desert BBQ + Cruise",
    price: "₹38,500",
    usdPrice: "$899",
    slug: "dubai-tour",
    bgImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=70",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [quickBookOpen, setQuickBookOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  // Rotate highlights; pause when tab is hidden to save CPU/network
  useEffect(() => {
    let fadeTimer: ReturnType<typeof setTimeout> | undefined;
    const tick = () => {
      if (document.hidden) return;
      setIsFading(true);
      fadeTimer = setTimeout(() => {
        setIndex((prev) => (prev + 1) % HIGHLIGHTS.length);
        setIsFading(false);
      }, 280);
    };
    const timer = setInterval(tick, 5200);
    return () => {
      clearInterval(timer);
      if (fadeTimer) clearTimeout(fadeTimer);
    };
  }, []);

  const current = HIGHLIGHTS[index];

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-24 pb-20 md:pb-28 overflow-hidden">
      {/* Background Image with Cinematic Deep Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src={current.bgImage}
          alt={current.destination}
          fill
          priority={index === 0}
          sizes="100vw"
          quality={70}
          className="object-cover object-center transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/90 via-[#111827]/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-transparent to-black/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Minimal, Refined Editorial Typography */}
          <div className="lg:col-span-7 text-white">
            {/* Small Subtle Eyebrow */}
            <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#FBBF24] mb-4">
              <span className="w-6 h-[1.5px] bg-[#FBBF24]" />
              <span>Journeys by Safe Wheels</span>
            </div>

            {/* Dual Headline with Smooth Animated Script Highlight */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-5">
              <span>Travel Farther,</span>
              <br />
              <span
                className={`inline-block font-script text-[#FBBF24] text-5xl sm:text-7xl lg:text-8xl font-normal drop-shadow-md transition-all duration-400 ${isFading ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"
                  }`}
              >
                {current.scriptText}
              </span>
            </h1>

            {/* Clean, Restrained Supporting Copy */}
            <p className="text-base sm:text-lg text-white/90 max-w-xl font-normal leading-relaxed mb-8">
              Thoughtfully curated private journeys to the world's most extraordinary destinations. Orchestrated with IATA certified excellence from Mysore.
            </p>

            {/* Minimal CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/packages"
                className="inline-flex items-center space-x-2 bg-[#D31F25] hover:bg-[#B91C1C] text-white px-7 py-3.5 rounded-full font-bold text-sm tracking-wide shadow-lg shadow-red-600/30 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Explore Journeys</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Clean, Minimal Luxury Featured Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              className={`relative w-full max-w-sm bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/80 transform transition-all duration-300 ${isFading ? "scale-98 opacity-80" : "scale-100 opacity-100"
                }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D31F25] bg-red-50 px-2.5 py-0.5 rounded-full border border-red-200">
                  Featured Destination
                </span>
                <span className="text-xs font-semibold text-gray-500">
                  {current.duration}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#18181B] tracking-tight">
                {current.destination}
              </h3>
              <p className="text-xs font-medium text-gray-500 mb-5 line-clamp-1">
                {current.subtitle}
              </p>

              <div className="space-y-2 pb-5 border-b border-gray-100 text-xs font-semibold text-gray-700">
                <div className="flex items-center space-x-2">
                  <Clock className="w-3.5 h-3.5 text-[#D31F25] shrink-0" />
                  <span>{current.duration} bespoke itinerary</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{current.inclusions}</span>
                </div>
              </div>

              <div className="pt-4 flex items-baseline justify-between mb-5">
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                    Starting From
                  </span>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#D31F25]">
                      {current.price}
                    </span>
                    <span className="text-xs text-gray-400">({current.usdPrice})</span>
                  </div>
                </div>
                <span className="text-xs font-medium text-gray-400">Per Person</span>
              </div>

              <button
                onClick={() => setQuickBookOpen(true)}
                className="w-full py-3 bg-[#18181B] hover:bg-[#D31F25] text-white rounded-full font-bold text-xs tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 group"
              >
                <span>Reserve Journey</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Booking Modal */}
      {quickBookOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100">
            <button
              onClick={() => {
                setQuickBookOpen(false);
                setBookingSubmitted(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-5">
              <span className="text-[10px] font-bold text-[#D31F25] uppercase tracking-wider">
                Bespoke Reservation
              </span>
              <h3 className="text-xl font-extrabold text-[#18181B] mt-1">
                {current.destination}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                {current.duration} • From {current.price} ({current.usdPrice}) • Safe Wheels Concierge
              </p>
            </div>

            {bookingSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-gray-900">Request Confirmed!</h4>
                <p className="text-xs text-gray-600 max-w-xs mx-auto">
                  Our Mysore booking desk has received your {current.destination} inquiry. We will contact you shortly with customized flight and resort options.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBookingSubmitted(true);
                }}
                className="space-y-3.5"
              >
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Chandra"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#D31F25] text-xs sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Mobile Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#D31F25] text-xs sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Tentative Travel Date
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#D31F25] text-xs sm:text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#D31F25] hover:bg-[#B91C1C] text-white rounded-xl font-bold text-xs transition-all shadow-md shadow-red-600/25 mt-2"
                >
                  Request Concierge Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
