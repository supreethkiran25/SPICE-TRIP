"use client";

import { useMemo, useState } from "react";
import { Compass, Heart, Users, Briefcase, Check, ArrowRight, X, ShieldCheck } from "lucide-react";
import { useCms } from "@/components/cms/CmsProvider";

export default function ChoosePlan() {
  const { homepage } = useCms();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [planModalOpen, setPlanModalOpen] = useState(false);
  const [inquirySent, setInquirySent] = useState(false);
  const [travelerName, setTravelerName] = useState("");
  const [travelerPhone, setTravelerPhone] = useState("");
  const [travelerDate, setTravelerDate] = useState("");

  const plans = useMemo(() => {
    const icons = {
      solo: <Briefcase className="w-5 h-5 text-blue-600" />,
      couple: <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />,
      family: <Users className="w-5 h-5 text-indigo-600" />,
    } as const;
    return homepage.plans.map((plan) => ({
      id: plan.id,
      name: plan.title,
      tagline: plan.blurb,
      price: plan.fromPrice,
      usd: plan.usd,
      icon:
        icons[plan.id as keyof typeof icons] ||
        (plan.id.includes("couple") ? icons.couple : plan.id.includes("family") ? icons.family : icons.solo),
      popular: plan.popular,
    }));
  }, [homepage.plans]);

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    setPlanModalOpen(true);
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18181B]">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Flexible travel styles tailored by our Safe Wheels certified itinerary planners
          </p>
        </div>

        {/* 4 Columns: 3 Plan Cards + 1 Right Graphic Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-3xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-[#D31F25] shadow-lg ring-2 ring-[#D31F25]/20"
                  : "border-gray-100 shadow-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D31F25] text-white text-[10px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-lg font-extrabold text-[#18181B]">
                  {plan.name}
                </h3>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                  {plan.tagline}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-gray-100">
                <span className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                  From
                </span>
                <div className="flex items-baseline space-x-1 mb-4">
                  <span className="text-2xl font-extrabold text-[#D31F25]">
                    {plan.price}
                  </span>
                  <span className="text-xs text-gray-400">({plan.usd})</span>
                </div>

                <button
                  type="button"
                  onClick={() => handleSelectPlan(plan.name)}
                  className={`w-full py-2.5 rounded-full text-xs font-bold transition-all shadow-sm ${
                    plan.popular
                      ? "bg-[#D31F25] hover:bg-[#B91C1C] text-white shadow-md shadow-red-600/25"
                      : "bg-white border border-gray-200 hover:border-[#D31F25] hover:text-[#D31F25] text-[#18181B]"
                  }`}
                >
                  Select Plan
                </button>
              </div>
            </div>
          ))}

          {/* Right Card: Globe & Peace of Mind Graphic */}
          <div className="bg-gradient-to-br from-red-50/50 via-amber-50/30 to-orange-50/40 rounded-3xl p-6 sm:p-7 border border-red-100 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-xl font-extrabold text-[#18181B] leading-snug">
                Explore the world with complete peace of mind.
              </h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Every customized plan includes 24/7 on-ground assistance, transparent pricing, and IATA-vetted hotel partners.
              </p>
            </div>

            {/* Travel Illustration Motif */}
            <div className="relative w-full h-36 mt-4 flex items-center justify-center">
              <div className="relative w-28 h-28 rounded-full bg-gradient-to-tr from-[#D31F25] to-[#F59E0B] flex items-center justify-center text-white shadow-xl animate-pulse">
                <Compass className="w-14 h-14" />
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#FBBF24] text-[#18181B] text-[10px] font-bold flex items-center justify-center shadow-md">
                  ★
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-[11px] font-bold text-[#D31F25] pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Safe Wheels Heritage Assurance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Plan Selection Modal */}
      {planModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100">
            <button
              onClick={() => {
                setPlanModalOpen(false);
                setInquirySent(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-5">
              <span className="text-xs font-bold text-[#D31F25] uppercase tracking-wider">
                Custom Itinerary Consultation
              </span>
              <h3 className="text-2xl font-extrabold text-[#18181B] mt-1">
                {selectedPlan} Package
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Tell us your travel window and our senior itinerary planner will craft a day-by-day estimate for you.
              </p>
            </div>

            {inquirySent ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">Custom Request Received!</h4>
                <p className="text-xs text-gray-600 max-w-xs mx-auto">
                  Thank you, {travelerName || "Traveler"}. Our Safe Wheels team in Mysore has assigned an itinerary docent to your plan.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setInquirySent(true);
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
                    value={travelerName}
                    onChange={(e) => setTravelerName(e.target.value)}
                    placeholder="e.g. Ramesh Chandra"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D31F25] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Mobile Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    value={travelerPhone}
                    onChange={(e) => setTravelerPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D31F25] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Tentative Travel Month
                  </label>
                  <input
                    type="month"
                    required
                    value={travelerDate}
                    onChange={(e) => setTravelerDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D31F25] text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#D31F25] hover:bg-[#B91C1C] text-white rounded-xl font-bold text-sm transition-all shadow-md shadow-red-600/25 mt-2 flex items-center justify-center space-x-2"
                >
                  <span>Request Custom Itinerary Blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

