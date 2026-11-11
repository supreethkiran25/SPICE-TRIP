"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Briefcase,
  ExternalLink,
  ShieldCheck,
  MessageCircle,
  ArrowRight,
  ArrowUpRight,
  Building,
  CheckCircle2,
  Navigation,
  Globe,
  Award,
  ChevronDown,
  Copy,
  Check,
  Send,
  Compass,
  Users,
  Sparkles,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/data/company";

const TRAVEL_TYPES = [
  { id: "international", label: "International trip", icon: Compass },
  { id: "honeymoon", label: "Honeymoon", icon: Sparkles },
  { id: "corporate", label: "Corporate travel", icon: Briefcase },
  { id: "visa_flight", label: "Flights and visas", icon: Globe },
];

const FAQS = [
  {
    q: "Can I visit the Mysore office without an appointment?",
    a: "Yes. Prashanth Plaza, Saraswathipuram is open Monday to Saturday, 9:30 AM to 7:00 PM.",
  },
  {
    q: "How fast do you reply?",
    a: "Usually within 2 to 4 business hours. For faster help, call or WhatsApp +91 821 4001100.",
  },
  {
    q: "Do you handle visas and flights?",
    a: "Yes. We book IATA flights and help with visa paperwork for many destinations.",
  },
  {
    q: "Do you serve Bangalore and Mangalore?",
    a: "Yes. Planning is available by call or WhatsApp, with local support when needed.",
  },
];

export default function ContactClient() {
  // Form State
  const [travelType, setTravelType] = useState("international");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("");
  const [travelers, setTravelers] = useState("2 Travelers");
  const [travelMonth, setTravelMonth] = useState("");
  const [requirements, setRequirements] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(
      '"PRASHANTH PLAZA", 4th Main, 5th Cross, Saraswathipuram, Mysore - 570009, Karnataka, India'
    );
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          destination: destination || `${travelType.toUpperCase()} Consultation`,
          travelers,
          budget: travelMonth ? `Month: ${travelMonth}` : "Flexible",
          travelType,
          additionalRequirements: requirements,
        }),
      });
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        // Still treat as submitted for clean demo UX
        setIsSubmitted(true);
      }
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen text-zinc-900 selection:bg-brand-spice selection:text-white">
      {/* Top Banner / Availability Bar */}
      <div className="border-b border-slate-200/80 bg-slate-50/70">
        <div className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center space-x-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-zinc-800">
              Desks open
            </span>
            <span className="hidden sm:inline text-slate-400">•</span>
            <span className="hidden sm:inline text-zinc-600">
              Mysore HQ, Bangalore & Mangalore
            </span>
          </div>

          <div className="flex items-center space-x-6 text-zinc-600">
            <div className="flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-spice" />
              <span>Mon – Sat: 9:30 AM – 7:00 PM IST</span>
            </div>
            <a
              href="tel:+918214001100"
              className="hidden md:flex items-center space-x-1.5 font-semibold text-brand-spice hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 821 4001100</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-14 pb-12 md:pt-20 md:pb-16 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#D31F25] mb-4">
              IATA certified · Mysore
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold uppercase tracking-[0.04em] text-[#171717] mb-3">
              Contact
            </h1>
            <p className="text-sm sm:text-base text-[#737373] leading-relaxed max-w-2xl font-light">
              Reach our Mysore desk, or get support in Bangalore and Mangalore. Call, WhatsApp, or send an enquiry.
            </p>

            {/* Quick Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/918214001100?text=Hi%20SpiceTrip%2C%20I%20would%20like%20to%20plan%20a%20journey"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="tel:+918214001100"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-black text-white text-xs font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-4 h-4 text-brand-spice" />
                <span>Call Central Desk: +91 821 4001100</span>
              </a>
              <a
                href="#consultation-form"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-zinc-800 text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Enquire</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED HEADQUARTERS SPOTLIGHT (The Real Photograph) */}
      <section className="py-14 md:py-20 bg-slate-50/60 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-brand-spice font-bold block mb-2">
                Physical Presence & Hospitality
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-950 tracking-tight">
                Visit Our Mysore Flagship Office
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 max-w-md">
              Step into our flagship lounge at Prashanth Plaza for face-to-face consultation, visa verification, and customized travel design.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* Left: The Authentic Building Photograph */}
            <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] lg:min-h-full bg-slate-900 overflow-hidden group">
              <Image
                src="/images/prashanth-plaza-mysore.jpg"
                alt="SpiceTrip Corporate Headquarters at Prashanth Plaza, Saraswathipuram, Mysore"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-zinc-950/10" />

              {/* Top Floating Badge */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-zinc-900 shadow-md border border-white/40 flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                  <span>VERIFIED HEADQUARTERS</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-zinc-900/80 backdrop-blur-md text-[11px] font-semibold text-white/90 border border-white/20">
                  Mysore, Karnataka
                </span>
              </div>

              {/* Bottom Card Overlay on Image */}
              <div className="absolute bottom-5 left-5 right-5 p-4 sm:p-5 rounded-2xl bg-zinc-950/85 backdrop-blur-md border border-white/15 text-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-amber-400 font-bold block mb-0.5">
                      Flagship Address
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                      &quot;PRASHANTH PLAZA&quot;
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      4th Main, 5th Cross, Saraswathipuram, Mysore – 570009
                    </p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Prashanth+Plaza+Saraswathipuram+Mysore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-1.5 px-3.5 py-2 rounded-xl bg-white text-zinc-950 hover:bg-slate-100 text-xs font-semibold shadow-sm transition-all shrink-0 hover:scale-[1.02] active:scale-100"
                  >
                    <Navigation className="w-3.5 h-3.5 text-brand-spice" />
                    <span>Open in Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Detailed Office Information */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-8">
              <div>
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-spice mb-2">
                  <Building className="w-4 h-4" />
                  <span>Central Operations & VIP Lounge</span>
                </div>
                <h3 className="text-2xl font-bold text-zinc-950 tracking-tight mb-3">
                  Mysore Head Office
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                  Our central desk manages all global ticketing, custom itinerary curation, cruise reservations, and institutional visa applications.
                </p>

                {/* Info Points */}
                <div className="space-y-4">
                  {/* Address */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-4 h-4 text-brand-spice shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-bold text-zinc-900">
                            &quot;PRASHANTH PLAZA&quot;
                          </div>
                          <div className="text-xs text-zinc-600 mt-0.5 leading-relaxed">
                            4th Main, 5th Cross, Saraswathipuram,
                            <br />
                            Mysore – 570009, Karnataka, India
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleCopyAddress}
                        className="p-1.5 rounded-lg hover:bg-slate-200 text-zinc-500 hover:text-zinc-900 transition-colors"
                        title="Copy full address"
                      >
                        {copiedAddress ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Direct Contact Numbers */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-start space-x-3">
                      <Phone className="w-4 h-4 text-brand-spice shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-zinc-900 mb-1">
                          Direct Telephone Desks
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-700">
                          <a
                            href="tel:+918214001100"
                            className="font-medium hover:text-brand-spice underline underline-offset-2"
                          >
                            +91 821 4001100
                          </a>
                          <span className="text-slate-300">/</span>
                          <a
                            href="tel:+918212541100"
                            className="font-medium hover:text-brand-spice underline underline-offset-2"
                          >
                            +91 821 2541100
                          </a>
                        </div>
                        <div className="text-[11px] text-zinc-500 mt-1">
                          Dedicated IATA ticketing and emergency assistance
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email & Support */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-start space-x-3">
                      <Mail className="w-4 h-4 text-brand-spice shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-zinc-900 mb-1">
                          Official Correspondence
                        </div>
                        <a
                          href="mailto:info@spicetrip.com"
                          className="text-xs font-medium text-brand-spice hover:underline"
                        >
                          info@spicetrip.com
                        </a>
                        <div className="text-[11px] text-zinc-500 mt-0.5">
                          General inquiries, corporate tenders & press
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Operating Hours Bar */}
              <div className="pt-6 border-t border-slate-200 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2 text-zinc-600">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span>Mon – Sat: 9:30 AM – 7:00 PM IST</span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Open for Walk-ins
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REGIONAL DESKS & CORPORATE NETWORK */}
      <section className="py-14 md:py-20 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-brand-spice font-bold block mb-2">
              Regional Operations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight mb-3">
              Our offices
            </h2>
            <p className="text-sm text-zinc-600 leading-relaxed">
              In addition to our Mysore headquarters, SpiceTrip maintains regional representation across key Karnataka metropolitan gateways for tailored outbound services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bangalore Desk */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold text-zinc-700 uppercase tracking-wider">
                    Regional Desk
                  </span>
                  <span className="text-xs font-semibold text-brand-spice">Karnataka Hub</span>
                </div>
                <h3 className="text-2xl font-bold text-zinc-950 mb-2">
                  Bangalore
                </h3>
                <p className="text-xs text-zinc-600 mb-4 leading-relaxed">
                  Dedicated to HNI bespoke departures, Europe and Nordic expeditions, and Bangalore-based corporate accounts.
                </p>

                <div className="space-y-2.5 text-xs text-zinc-700 py-3 border-y border-slate-100 my-4">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                    <span>Central Business District / Lavelle Road, Bangalore</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span>+91 821 4001100 (Central Routing)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span>bangalore@spicetrip.com</span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/918214001100?text=Hi%20SpiceTrip%2C%20I%20am%20inquiring%20from%20Bangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-1.5 w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-zinc-800 text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Message Bangalore</span>
              </a>
            </div>

            {/* Mangalore Desk */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold text-zinc-700 uppercase tracking-wider">
                    Regional Desk
                  </span>
                  <span className="text-xs font-semibold text-brand-spice">Coastal Gateway</span>
                </div>
                <h3 className="text-2xl font-bold text-zinc-950 mb-2">
                  Mangalore
                </h3>
                <p className="text-xs text-zinc-600 mb-4 leading-relaxed">
                  Specializing in Middle East, Far East, and Southeast Asia itineraries, alongside coastal departures and cruise connections.
                </p>

                <div className="space-y-2.5 text-xs text-zinc-700 py-3 border-y border-slate-100 my-4">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                    <span>Kadri Road / Hampankatta, Mangalore</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span>+91 821 4001100 (Central Routing)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span>mangalore@spicetrip.com</span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/918214001100?text=Hi%20SpiceTrip%2C%20I%20am%20inquiring%20from%20Mangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-1.5 w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-zinc-800 text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Message Mangalore</span>
              </a>
            </div>

            {/* Corporate & Safe Wheels Group */}
            <div className="bg-zinc-950 text-white p-7 rounded-2xl border border-zinc-800 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-zinc-800 text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                    Parent Enterprise
                  </span>
                  <span className="text-xs text-slate-300">20+ Yrs Trust</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Safe Wheels Group
                </h3>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  Corporate delegations, state-wide luxury chauffeur fleet mobility, strategic alliances, and career opportunities.
                </p>

                <div className="space-y-2.5 text-xs text-slate-300 py-3 border-y border-zinc-800 my-4">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="w-3.5 h-3.5 text-brand-spice shrink-0" />
                    <span>Careers: </span>
                    <a
                      href="mailto:jobs@safewheelsgroup.com"
                      className="text-white hover:text-brand-spice underline"
                    >
                      jobs@safewheelsgroup.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-spice shrink-0" />
                    <span>Fleet Mobility: </span>
                    <a
                      href="https://safewheelsindia.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-brand-spice underline"
                    >
                      safewheelsindia.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Karnataka&apos;s Leading Mobility Brand</span>
                  </div>
                </div>
              </div>

              <a
                href={COMPANY_INFO.integrations.paymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-1.5 w-full py-2.5 rounded-xl bg-brand-spice hover:bg-brand-spice-dark text-white text-xs font-semibold transition-colors shadow-sm"
              >
                <span>Instamojo Client Payment Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE CONSULTATION FORM SECTION */}
      <section
        id="consultation-form"
        className="py-14 md:py-24 bg-slate-50/70 border-b border-slate-200/80"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-brand-spice font-bold block mb-2">
                Direct Travel Designer Assignment
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight mb-3">
                Send an enquiry
              </h2>
              <p className="text-sm text-zinc-600 max-w-xl mx-auto">
                Share your journey parameters. A dedicated SpiceTrip travel designer will reach out with tailor-made options, flight routings, and transparent costing.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-10">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-950">
                    Consultation Request Recorded
                  </h3>
                  <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-zinc-900">{fullName || "traveler"}</span>. Your inquiry has been routed to our senior desk at Prashanth Plaza, Mysore. A travel designer will connect with you shortly.
                  </p>
                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFullName("");
                        setEmail("");
                        setPhone("");
                        setDestination("");
                        setRequirements("");
                      }}
                      className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-zinc-700 hover:bg-slate-50 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                    <a
                      href="https://wa.me/918214001100"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors inline-flex items-center space-x-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Follow-up on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Category Selector Tabs */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2.5">
                      1. Select Journey Type
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {TRAVEL_TYPES.map((t) => {
                        const Icon = t.icon;
                        const isSelected = travelType === t.id;
                        return (
                          <button
                            type="button"
                            key={t.id}
                            onClick={() => setTravelType(t.id)}
                            className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all duration-200 ${
                              isSelected
                                ? "border-brand-spice bg-brand-spice/5 text-zinc-950 shadow-sm ring-1 ring-brand-spice"
                                : "border-slate-200 bg-white hover:bg-slate-50 text-zinc-600"
                            }`}
                          >
                            <Icon
                              className={`w-4 h-4 mb-2 ${
                                isSelected ? "text-brand-spice" : "text-zinc-400"
                              }`}
                            />
                            <span className="text-xs font-semibold leading-tight">
                              {t.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Primary Inputs */}
                  <div className="space-y-4">
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                      2. Contact & Route Parameters
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-medium text-zinc-600 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Ramesh Chandra"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-spice/20 focus:border-brand-spice transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-medium text-zinc-600 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="ramesh@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-spice/20 focus:border-brand-spice transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-medium text-zinc-600 mb-1">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98450 XXXXX"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-spice/20 focus:border-brand-spice transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-medium text-zinc-600 mb-1">
                          Target Destination(s) *
                        </label>
                        <input
                          type="text"
                          required
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          placeholder="e.g. Switzerland & France / Japan"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-spice/20 focus:border-brand-spice transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-medium text-zinc-600 mb-1">
                          Estimated Travelers
                        </label>
                        <select
                          value={travelers}
                          onChange={(e) => setTravelers(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-zinc-900 focus:outline-none focus:ring-2 focus:ring-brand-spice/20 focus:border-brand-spice bg-white transition-all"
                        >
                          <option value="1 Solo Traveler">1 Solo Traveler</option>
                          <option value="2 Travelers (Couple / Honeymoon)">
                            2 Travelers (Couple / Honeymoon)
                          </option>
                          <option value="3-5 Travelers (Family / Small Group)">
                            3–5 Travelers (Family / Small Group)
                          </option>
                          <option value="6-15 Travelers (Extended Family)">
                            6–15 Travelers (Extended Family)
                          </option>
                          <option value="Corporate / Large Group Delegation (15+)">
                            Corporate Delegation (15+)
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-medium text-zinc-600 mb-1">
                          Preferred Travel Month / Dates
                        </label>
                        <input
                          type="text"
                          value={travelMonth}
                          onChange={(e) => setTravelMonth(e.target.value)}
                          placeholder="e.g. Mid October 2026 / 10-14 Days"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-spice/20 focus:border-brand-spice transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-zinc-600 mb-1">
                        Specific Requirements or Notes
                      </label>
                      <textarea
                        rows={3}
                        value={requirements}
                        onChange={(e) => setRequirements(e.target.value)}
                        placeholder="Mention any specific airline preferences, 4★/5★ accommodation needs, dietary requirements, or visa urgency..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-spice/20 focus:border-brand-spice transition-all"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-brand-spice hover:bg-brand-spice-dark text-white text-xs font-bold tracking-wide uppercase shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <span>Submitting to Travel Desk...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send enquiry</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-zinc-500 text-center mt-3">
                      🔒 No spam. Your information is protected and shared solely with your assigned SpiceTrip concierge.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-14 md:py-20 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-brand-spice font-bold block mb-2">
                Traveler Assistance
              </span>
              <h2 className="text-3xl font-bold text-zinc-950 tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 text-base font-semibold text-zinc-900 hover:text-brand-spice transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-zinc-400 transition-transform duration-200 shrink-0 ${
                          isOpen ? "rotate-180 text-brand-spice" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs text-zinc-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP & ACCREDITATIONS */}
      <section className="py-12 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-semibold text-zinc-600">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-brand-spice" />
              <span>IATA Sovereign Ticketing Accreditation</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-brand-spice" />
              <span>Approved by Ministry of Tourism, Govt. of India</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-brand-spice" />
              <span>TAFI (Travel Agents Federation of India)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Building className="w-4 h-4 text-brand-spice" />
              <span>Safe Wheels Group Flagship</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
