import { Suspense } from "react";
import type { Metadata } from "next";
import PackagesClient from "./PackagesClient";

export const metadata: Metadata = {
  title: "Tour Packages & International Departures | SpiceTrip Official",
  description:
    "Browse verified tour packages from SpiceTrip, a venture of Safe Wheels Group, Mysore. Vietnam, Maldives, Bali, Singapore, Dubai, Kerala, Rajasthan, and more with verified itineraries.",
};

export default function PackagesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background py-24 text-center">Loading luxury packages...</div>}>
      <PackagesClient />
    </Suspense>
  );
}

