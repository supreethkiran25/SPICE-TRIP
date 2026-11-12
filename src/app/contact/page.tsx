import type { Metadata } from "next";
import { Suspense } from "react";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us — Mysore Headquarters & Branch Desks | SpiceTrip",
  description:
    "Official contact and concierge desk for SpiceTrip. Headquartered at 'PRASHANTH PLAZA', Saraswathipuram, Mysore. IATA Certified travel agency with regional desks in Bangalore & Mangalore.",
};

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white py-24 text-center text-sm text-zinc-500">
          Loading contact…
        </div>
      }
    >
      <ContactClient />
    </Suspense>
  );
}
