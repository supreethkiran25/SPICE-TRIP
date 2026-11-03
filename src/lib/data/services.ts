import { ServiceItem } from "@/types";

export const SERVICES: ServiceItem[] = [
  {
    id: "serv-air-tickets",
    slug: "air-tickets",
    title: "Air Ticket Bookings",
    category: "Ticketing & Transit",
    tagline: "IATA-Accredited Domestic & International Flight Desk",
    description: "As an IATA-certified travel agency, SpiceTrip holds direct global GDS connectivity with premier international and domestic airlines. We secure optimum routing, corporate fares, group seats, and rapid re-issuances with transparent baggage allowances.",
    features: [
      "Competitive fares across all major domestic & international carriers",
      "Priority seat reservations, special meal requests & extra baggage booking",
      "Immediate re-routing, rescheduling & cancellation support",
      "Dedicated corporate travel billing and corporate loyalty management"
    ],
    processSteps: [
      { title: "Submit Routing Requirements", desc: "Share departure city, destination, dates, class of service, and passenger count." },
      { title: "Receive Curated Options", desc: "Our ticketing desk shares optimum schedules and fare combinations within 30 minutes." },
      { title: "Confirmed E-Tickets", desc: "Instant confirmed PNR issue with web check-in guidelines." }
    ],
    ctaLabel: "Enquire for Flight Booking",
    ctaHref: "/services/air-tickets#enquiry",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "serv-visa-assistance",
    slug: "visa-assistance",
    title: "Visa Assistance & Stamping",
    category: "Documentation",
    tagline: "End-to-End Tourist & Business Visa Documentation Concierge",
    description: "Navigating international consulate protocols can be daunting. SpiceTrip’s visa desk handles document scrutiny, appointment scheduling, cover letter drafting, financial documentation advisory, and biometric slot tracking for 60+ countries worldwide.",
    features: [
      "Complete checklist verification for Schengen, UK, US, Dubai, Singapore, Southeast Asia",
      "VFS / Embassy appointment booking and biometrics scheduling",
      "Cover letter, travel itinerary & hotel voucher alignment",
      "Expedited processing for urgent business & tourist departures"
    ],
    processSteps: [
      { title: "Destination Checklist", desc: "Receive the official country-specific documentary requirements." },
      { title: "Verification & Submission", desc: "Our visa specialists review financial statements, photographs, and forms." },
      { title: "Visa Issuance", desc: "Collect stamped passport or receive validated electronic E-Visa." }
    ],
    ctaLabel: "Request Visa Assistance",
    ctaHref: "/services/visa-assistance#enquiry",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "serv-passport-assistance",
    slug: "passport-assistance",
    title: "Passport Assistance",
    category: "Documentation",
    tagline: "Hassle-Free Fresh & Renewal Passport Application Services",
    description: "Official advisory for fresh passport issuance, Tatkaal expedited processing, renewals, address changes, and minor applications at Passport Seva Kendras (PSK). We eliminate documentation rejections.",
    features: [
      "Online application filing and document upload on the Passport Seva portal",
      "Tatkaal vs Normal scheme advisory based on your travel urgency",
      "Fee payment and priority appointment slot booking at nearest PSK",
      "Pre-appointment document audit and briefing session"
    ],
    processSteps: [
      { title: "Consultation & Document Audit", desc: "Provide basic identity and address proof documents for vetting." },
      { title: "PSK Slot Confirmation", desc: "We schedule your preferred time slot at the Passport Seva Kendra." },
      { title: "Biometrics & Dispatch", desc: "Attend the quick biometric interview; passport dispatched via Speed Post." }
    ],
    ctaLabel: "Apply for Passport Support",
    ctaHref: "/services/passport-assistance#enquiry",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "serv-car-rentals",
    slug: "car-rentals",
    title: "Car Rentals & Mobility",
    category: "Ground Transit",
    tagline: "Powered by Safe Wheels — Karnataka’s Premier Luxury Chauffeur Fleet",
    description: "In seamless synergy with our parent company Safe Wheels, SpiceTrip provides an impeccable fleet of premium sedans, luxury SUVs, and executive coaches with uniformed, background-verified English and Kannada speaking chauffeurs.",
    features: [
      "Extensive fleet: Innova Crysta, Fortuner, Mercedes-Benz, BMW, and Tempo Travellers",
      "Airport transfers across Bangalore (BLR), Mysore, and Mangalore (IXE)",
      "Inter-city outstation journeys with transparent per-km billing",
      "Impeccably sanitized vehicles with bottled water and phone charging amenities"
    ],
    processSteps: [
      { title: "Select Fleet Category", desc: "Choose your vehicle class based on group size and luggage capacity." },
      { title: "Driver Assignment", desc: "Receive chauffeur details and vehicle registration 2 hours prior." },
      { title: "Effortless Journey", desc: "Punctual doorstep pickup and smooth travel." }
    ],
    ctaLabel: "Book with Safe Wheels",
    ctaHref: "https://safewheelsindia.com/book",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "serv-bus-tickets",
    slug: "bus-tickets",
    title: "Bus Ticket Booking",
    category: "Ticketing & Transit",
    tagline: "Intercity Multi-Axle Volvo & Sleeper Coach Reservations",
    description: "Reliable bookings on leading intercity bus operators and state transport corporations (KSRTC, private multi-axle Volvos) connecting Mysore, Bangalore, Mangalore, Goa, Kerala, and Hyderabad.",
    features: [
      "AC Sleeper and Semi-Sleeper multi-axle luxury coach bookings",
      "Convenient boarding and drop-off point selection across South India",
      "Instant SMS/WhatsApp ticket confirmation and live bus tracking links",
      "Zero hidden convenience surcharges"
    ],
    processSteps: [
      { title: "Route Selection", desc: "Provide origin, destination, and departure date." },
      { title: "Seat Choice", desc: "Choose lower/upper berths or single lady-allocated seats." },
      { title: "Instant Boarding Pass", desc: "Receive mobile-ready ticket via WhatsApp." }
    ],
    ctaLabel: "Enquire for Bus Tickets",
    ctaHref: "/services/bus-tickets#enquiry",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "serv-corporate-travel",
    slug: "corporate-travel",
    title: "Corporate Travel & MICE",
    category: "B2B Solutions",
    tagline: "Executive Delegations, Incentive Retreats & Conference Logistics",
    description: "Tailored corporate travel management for multinational corporations, academic institutions, and enterprise leaders. We manage group airline block bookings, boutique resort buyouts, and team retreats with singular accountability.",
    features: [
      "Dedicated corporate account manager available 24/7",
      "Consolidated monthly invoicing and GST-compliant reporting",
      "MICE arrangements: Conference halls, gala dinners, team-building excursions",
      "VIP protocol and executive chauffeur airport transfers"
    ],
    processSteps: [
      { title: "Briefing & Capacity Planning", desc: "Discuss delegate counts, budget targets, and event goals." },
      { title: "Bespoke Proposal", desc: "Review customized destination options, hotel contracts, and transit matrix." },
      { title: "Flawless Execution", desc: "On-site SpiceTrip coordinators ensure every transfer and session runs on schedule." }
    ],
    ctaLabel: "Connect with Corporate Desk",
    ctaHref: "/contact#corporate",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
  }
];

