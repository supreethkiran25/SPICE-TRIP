import { Globe2, ShieldCheck, UserRound } from "lucide-react";

const POINTS = [
  {
    icon: Globe2,
    label: "IATA Accredited",
  },
  {
    icon: ShieldCheck,
    label: "Safe Wheels",
  },
  {
    icon: UserRound,
    label: "One Travel Manager",
  },
];

export default function WhyTravelWithUs() {
  return (
    <section
      id="experiences"
      className="py-10 md:py-12 bg-[#EFEDE8] scroll-mt-24 border-y border-[#E5E2DB]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-10">
          <h2 className="text-sm sm:text-base font-bold uppercase tracking-[0.12em] text-[#171717] shrink-0 md:pr-8 md:border-r md:border-[#D4D0C8]">
            Why SpiceTrip?
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 lg:gap-14 flex-1">
            {POINTS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-[#171717] shrink-0 stroke-[1.5]" />
                <span className="text-sm font-medium text-[#404040]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
