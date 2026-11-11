import { ServiceItem } from "@/types";

export const SERVICES: ServiceItem[] = [
  {
    id: "serv-air-tickets",
    slug: "air-tickets",
    title: "Flight tickets",
    category: "Ticketing",
    tagline: "Domestic and international flights",
    description:
      "We book flights through IATA channels and share clear fare options for your dates.",
    features: [
      "Domestic and international fares",
      "Seat and baggage help",
      "Change and cancellation support",
      "Group and corporate booking",
    ],
    processSteps: [
      { title: "Share your route", desc: "City, dates, class, and number of travelers." },
      { title: "Compare options", desc: "We send schedule and fare choices." },
      { title: "Get tickets", desc: "Confirmed e-tickets with your PNR." },
    ],
    ctaLabel: "Enquire",
    ctaHref: "/services/air-tickets#enquiry",
    image: "/images/services/flights.jpg",
  },
  {
    id: "serv-visa-assistance",
    slug: "visa-assistance",
    title: "Visa help",
    category: "Documents",
    tagline: "Tourist and business visas",
    description:
      "We check documents, book appointments, and guide you through visa steps for many countries.",
    features: [
      "Checklist for popular destinations",
      "Appointment booking support",
      "Cover letter and itinerary help",
      "Follow up until decision",
    ],
    processSteps: [
      { title: "Get the checklist", desc: "Country specific documents you need." },
      { title: "Review and submit", desc: "We check forms and papers before filing." },
      { title: "Receive visa", desc: "Stamped passport or e-visa as issued." },
    ],
    ctaLabel: "Enquire",
    ctaHref: "/services/visa-assistance#enquiry",
    image: "/images/services/visa.jpg",
  },
  {
    id: "serv-passport-assistance",
    slug: "passport-assistance",
    title: "Passport help",
    category: "Documents",
    tagline: "New passport and renewals",
    description:
      "We help with fresh passports, renewals, and Passport Seva appointments.",
    features: [
      "Online form help",
      "Normal or Tatkaal guidance",
      "Appointment booking",
      "Document check before visit",
    ],
    processSteps: [
      { title: "Document check", desc: "ID and address proof review." },
      { title: "Book PSK slot", desc: "We confirm your appointment time." },
      { title: "Visit and wait", desc: "Biometrics done, passport dispatched." },
    ],
    ctaLabel: "Enquire",
    ctaHref: "/services/passport-assistance#enquiry",
    image: "/images/services/passport.jpg",
  },
  {
    id: "serv-car-rentals",
    slug: "car-rentals",
    title: "Car rentals",
    category: "Transfers",
    tagline: "Safe Wheels chauffeurs",
    description:
      "Airport transfers and outstation cars with Safe Wheels drivers across Karnataka.",
    features: [
      "Sedans, SUVs, and tempo travellers",
      "Bangalore, Mysore, Mangalore airports",
      "Outstation trips with clear rates",
      "Verified chauffeurs",
    ],
    processSteps: [
      { title: "Share trip details", desc: "Pickup, drop, date, and car type." },
      { title: "Confirm fare", desc: "Transparent quote before booking." },
      { title: "Travel", desc: "Driver details shared before pickup." },
    ],
    ctaLabel: "Book car",
    ctaHref: "https://safewheelsindia.com/book",
    image: "/images/services/car.jpg",
  },
  {
    id: "serv-bus-tickets",
    slug: "bus-tickets",
    title: "Bus tickets",
    category: "Ticketing",
    tagline: "Intercity coach bookings",
    description:
      "Book AC sleeper and Volvo coaches across South India with clear confirmation.",
    features: [
      "AC sleeper and semi sleeper coaches",
      "Boarding point selection",
      "Ticket on WhatsApp",
      "No hidden fees",
    ],
    processSteps: [
      { title: "Pick route", desc: "Origin, destination, and date." },
      { title: "Choose seat", desc: "Berth or seat preference." },
      { title: "Get ticket", desc: "Mobile ticket sent on WhatsApp." },
    ],
    ctaLabel: "Enquire",
    ctaHref: "/services/bus-tickets#enquiry",
    image: "/images/services/bus.jpg",
  },
  {
    id: "serv-corporate-travel",
    slug: "corporate-travel",
    title: "Corporate travel",
    category: "Business",
    tagline: "Group trips and events",
    description:
      "Flights, hotels, and transfers for company trips, meetings, and incentives.",
    features: [
      "Dedicated account manager",
      "Monthly invoices with GST",
      "Meeting and event support",
      "Airport transfers for teams",
    ],
    processSteps: [
      { title: "Share the brief", desc: "Headcount, budget, and dates." },
      { title: "Review the plan", desc: "Hotels, flights, and transfers." },
      { title: "Travel", desc: "On ground support through the trip." },
    ],
    ctaLabel: "Enquire",
    ctaHref: "/contact#corporate",
    image: "/images/services/corporate.jpg",
  },
];
