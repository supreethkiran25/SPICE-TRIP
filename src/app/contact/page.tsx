import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us — Mysore Headquarters & Branch Desks | SpiceTrip",
  description:
    "Official contact and concierge desk for SpiceTrip. Headquartered at 'PRASHANTH PLAZA', Saraswathipuram, Mysore. IATA Certified travel agency with regional desks in Bangalore & Mangalore.",
};

export default function ContactPage() {
  return <ContactClient />;
}
