import { Suspense } from "react";
import type { Metadata } from "next";
import PackagesClient from "./PackagesClient";

export const metadata: Metadata = {
  title: "Packages | SpiceTrip",
  description: "International and India packages with clear prices.",
};

export default function PackagesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background py-24 text-center">Loading packages...</div>}>
      <PackagesClient />
    </Suspense>
  );
}

