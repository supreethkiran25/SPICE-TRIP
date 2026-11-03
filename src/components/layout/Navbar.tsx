"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Plane,
  Globe,
  MapPin,
  Heart,
  Car,
  Compass,
  FileCheck,
  ShieldCheck,
  Phone,
  Sparkles,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/data/company";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();
  const router = useRouter();

  // Scroll threshold
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const handleMouseEnter = (menu: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleMobileAccordion = (menu: string) => {
    setMobileAccordion(mobileAccordion === menu ? null : menu);
  };

  // Smooth scroll handler
  const handleScrollTo = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setOpenDropdown(null);

    if (pathname === "/") {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `/#${targetId}`);
        return;
      }
    }
    router.push(`/#${targetId}`);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`rounded-full px-4 sm:px-6 py-2 sm:py-2.5 transition-all duration-300 flex items-center justify-between border shadow-lg ${
              isScrolled
                ? "bg-white/98 backdrop-blur-md border-gray-200/90 shadow-xl"
                : "bg-white/95 backdrop-blur-md border-white/80 shadow-lg"
            }`}
          >
            {/* 01. Official SpiceTrip Logo (Standalone 1024x377 clean brand asset) */}
            <Link
              href="/"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="flex items-center group shrink-0"
              aria-label="SpiceTrip home"
            >
              <Image
                src="/images/spicetrip-logo-light-bg.png"
                alt="SpiceTrip — good time, great memories!"
                width={175}
                height={55}
                priority
                unoptimized
                className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* 02. Desktop Navigation with Interactive Dropdowns */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {/* Home */}
              <Link
                href="/"
                className={`px-3 py-1.5 text-xs xl:text-sm font-bold transition-colors ${
                  pathname === "/" ? "text-[#D31F25]" : "text-[#18181B] hover:text-[#D31F25]"
                }`}
              >
                Home
              </Link>

              {/* Destinations (Interactive Dropdown) */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("destinations")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => toggleDropdown("destinations")}
                  className={`flex items-center space-x-1 px-3 py-1.5 text-xs xl:text-sm font-bold transition-colors ${
                    openDropdown === "destinations" || (pathname ?? "").startsWith("/destinations")
                      ? "text-[#D31F25]"
                      : "text-[#18181B] hover:text-[#D31F25]"
                  }`}
                  aria-expanded={openDropdown === "destinations"}
                >
                  <span>Destinations</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      openDropdown === "destinations" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Destinations Mega Dropdown Panel */}
                {openDropdown === "destinations" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[560px] animate-in fade-in zoom-in-95 duration-200">
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200/90 p-5 overflow-hidden">
                      <div className="grid grid-cols-2 gap-6">
                        {/* Column 1: International */}
                        <div>
                          <div className="flex items-center space-x-1.5 text-xs font-black uppercase tracking-wider text-[#D31F25] mb-3 pb-1 border-b border-gray-100">
                            <Globe className="w-3.5 h-3.5" />
                            <span>International Escapes</span>
                          </div>
                          <ul className="space-y-1.5 text-xs font-medium text-gray-700">
                            <li>
                              <Link
                                href="/packages/explore-vietnam"
                                className="block py-1 px-2 rounded-lg hover:bg-red-50 hover:text-[#D31F25] transition-colors"
                              >
                                Vietnam & Halong Bay Cruise
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/packages/maldives-luxury-escape"
                                className="block py-1 px-2 rounded-lg hover:bg-red-50 hover:text-[#D31F25] transition-colors"
                              >
                                Maldives Barefoot Atolls
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/packages/bali-classic-tour"
                                className="block py-1 px-2 rounded-lg hover:bg-red-50 hover:text-[#D31F25] transition-colors"
                              >
                                Bali Private Pool Villas
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/packages/dubai-tour"
                                className="block py-1 px-2 rounded-lg hover:bg-red-50 hover:text-[#D31F25] transition-colors"
                              >
                                Dubai Burj Khalifa & Safari
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/packages/thailand-tour"
                                className="block py-1 px-2 rounded-lg hover:bg-red-50 hover:text-[#D31F25] transition-colors"
                              >
                                Splendid Thailand & Phuket
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/packages/singapore-tour"
                                className="block py-1 px-2 rounded-lg hover:bg-red-50 hover:text-[#D31F25] transition-colors"
                              >
                                Singapore & Sentosa
                              </Link>
                            </li>
                          </ul>
                        </div>

                        {/* Column 2: South India & Domestic */}
                        <div>
                          <div className="flex items-center space-x-1.5 text-xs font-black uppercase tracking-wider text-emerald-600 mb-3 pb-1 border-b border-gray-100">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>South India & Domestic</span>
                          </div>
                          <ul className="space-y-1.5 text-xs font-medium text-gray-700">
                            <li>
                              <Link
                                href="/packages/kerala-tour"
                                className="block py-1 px-2 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                              >
                                Kerala Munnar & Alleppey Houseboat
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/packages/karnataka-heritage-tour"
                                className="block py-1 px-2 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                              >
                                Mysore, Coorg & Kabini (Safe Wheels)
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/packages/kashmir-paradise"
                                className="block py-1 px-2 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                              >
                                Kashmir Valley & Gulmarg Snow
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/packages/andaman-tour"
                                className="block py-1 px-2 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                              >
                                Andaman Coral Islands & Havelock
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/packages/golden-triangle-tour"
                                className="block py-1 px-2 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                              >
                                Golden Triangle (Delhi, Agra, Jaipur)
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Bottom Action */}
                      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-[11px] text-gray-500 font-medium">
                          All departures verified by Safe Wheels Mysore specialists
                        </span>
                        <Link
                          href="/destinations"
                          className="text-xs font-bold text-[#D31F25] hover:underline inline-flex items-center space-x-1"
                        >
                          <span>Explore All Destinations</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Packages (Interactive Dropdown) */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("packages")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => toggleDropdown("packages")}
                  className={`flex items-center space-x-1 px-3 py-1.5 text-xs xl:text-sm font-bold transition-colors ${
                    openDropdown === "packages" || (pathname ?? "").startsWith("/packages")
                      ? "text-[#D31F25]"
                      : "text-[#18181B] hover:text-[#D31F25]"
                  }`}
                  aria-expanded={openDropdown === "packages"}
                >
                  <span>Packages</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      openDropdown === "packages" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Packages Dropdown Panel */}
                {openDropdown === "packages" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-80 animate-in fade-in zoom-in-95 duration-200">
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200/90 p-4">
                      <ul className="space-y-1 text-xs font-medium text-gray-800">
                        <li>
                          <Link
                            href="/honeymoon"
                            className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-red-50 hover:text-[#D31F25] transition-colors"
                          >
                            <Heart className="w-4 h-4 text-[#D31F25]" />
                            <div>
                              <div className="font-bold">Honeymoon Specials</div>
                              <div className="text-[10px] text-gray-500">Private pool villas & overwater suites</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/packages#international"
                            className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-gray-50 hover:text-[#D31F25] transition-colors"
                          >
                            <Globe className="w-4 h-4 text-sky-600" />
                            <div>
                              <div className="font-bold">International Tour Packages</div>
                              <div className="text-[10px] text-gray-500">Vietnam, Bali, Maldives, Dubai, Thailand</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/packages#domestic"
                            className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-gray-50 hover:text-[#D31F25] transition-colors"
                          >
                            <MapPin className="w-4 h-4 text-emerald-600" />
                            <div>
                              <div className="font-bold">South India & Domestic Tours</div>
                              <div className="text-[10px] text-gray-500">Kerala, Coorg, Ooty, Kashmir & Goa</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/packages#family"
                            className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-gray-50 hover:text-[#D31F25] transition-colors"
                          >
                            <Compass className="w-4 h-4 text-amber-500" />
                            <div>
                              <div className="font-bold">Family Holidays</div>
                              <div className="text-[10px] text-gray-500">All-inclusive resorts & child-friendly tours</div>
                            </div>
                          </Link>
                        </li>
                      </ul>

                      <div className="mt-3 pt-2.5 border-t border-gray-100">
                        <Link
                          href="/packages"
                          className="w-full text-center block text-xs font-bold text-[#D31F25] hover:underline"
                        >
                          View All 15 Tour Packages →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Experiences (Smooth Scroll to Bento) */}
              <a
                href="#experiences"
                onClick={(e) => handleScrollTo(e, "experiences")}
                className="px-3 py-1.5 text-xs xl:text-sm font-bold text-[#18181B] hover:text-[#D31F25] transition-colors"
              >
                Experiences
              </a>

              {/* Deals (Smooth Scroll to Top Deals) */}
              <a
                href="#deals"
                onClick={(e) => handleScrollTo(e, "deals")}
                className="px-3 py-1.5 text-xs xl:text-sm font-bold text-[#18181B] hover:text-[#D31F25] transition-colors"
              >
                Deals
              </a>

              {/* Services (Interactive Dropdown) */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => toggleDropdown("services")}
                  className={`flex items-center space-x-1 px-3 py-1.5 text-xs xl:text-sm font-bold transition-colors ${
                    openDropdown === "services" || (pathname ?? "").startsWith("/services")
                      ? "text-[#D31F25]"
                      : "text-[#18181B] hover:text-[#D31F25]"
                  }`}
                  aria-expanded={openDropdown === "services"}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      openDropdown === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Services Dropdown Panel */}
                {openDropdown === "services" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-80 animate-in fade-in zoom-in-95 duration-200">
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200/90 p-4">
                      <ul className="space-y-1 text-xs font-medium text-gray-800">
                        <li>
                          <Link
                            href="/services/air-tickets"
                            className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-gray-50 hover:text-[#D31F25] transition-colors"
                          >
                            <Plane className="w-4 h-4 text-[#D31F25]" />
                            <div>
                              <div className="font-bold">Air Ticket Desk (IATA)</div>
                              <div className="text-[10px] text-gray-500">Domestic & International airline ticketing</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/car-rentals"
                            className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-gray-50 hover:text-[#D31F25] transition-colors"
                          >
                            <Car className="w-4 h-4 text-emerald-600" />
                            <div>
                              <div className="font-bold">Safe Wheels Car Rentals</div>
                              <div className="text-[10px] text-gray-500">Chauffeur drive & self-drive fleet in Mysore</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/visa-assistance"
                            className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-gray-50 hover:text-[#D31F25] transition-colors"
                          >
                            <FileCheck className="w-4 h-4 text-amber-500" />
                            <div>
                              <div className="font-bold">Passport & Visa Assistance</div>
                              <div className="text-[10px] text-gray-500">End-to-end documentation & visa filing</div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/bus-tickets"
                            className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-gray-50 hover:text-[#D31F25] transition-colors"
                          >
                            <Compass className="w-4 h-4 text-sky-600" />
                            <div>
                              <div className="font-bold">Intercity Bus Ticketing</div>
                              <div className="text-[10px] text-gray-500">South India luxury coach bookings</div>
                            </div>
                          </Link>
                        </li>
                      </ul>

                      <div className="mt-3 pt-2.5 border-t border-gray-100">
                        <Link
                          href="/services"
                          className="w-full text-center block text-xs font-bold text-[#D31F25] hover:underline"
                        >
                          View All Travel Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* About Us */}
              <Link
                href="/about"
                className={`px-3 py-1.5 text-xs xl:text-sm font-bold transition-colors ${
                  pathname === "/about" ? "text-[#D31F25]" : "text-[#18181B] hover:text-[#D31F25]"
                }`}
              >
                About Us
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className={`px-3 py-1.5 text-xs xl:text-sm font-bold transition-colors ${
                  pathname === "/contact" ? "text-[#D31F25]" : "text-[#18181B] hover:text-[#D31F25]"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* 03. Right Actions: Plan Trip CTA & Mobile Toggle */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Link
                href="/contact#enquiry"
                className="hidden sm:inline-flex items-center space-x-1.5 bg-[#D31F25] hover:bg-[#B91C1C] text-white px-5 py-2 rounded-full text-xs font-bold transition-all shadow-md hover:shadow-red-600/30"
              >
                <span>Plan Trip</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-[#18181B] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* 04. Mobile Expandable Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 max-w-7xl mx-auto px-2 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-5 max-h-[80vh] overflow-y-auto">
              <div className="space-y-3">
                {/* Home */}
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-xl text-sm font-bold text-gray-900 hover:bg-red-50 hover:text-[#D31F25]"
                >
                  Home
                </Link>

                {/* Destinations Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => toggleMobileAccordion("destinations")}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-bold text-gray-900 hover:bg-gray-50"
                  >
                    <span>Destinations</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileAccordion === "destinations" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileAccordion === "destinations" && (
                    <div className="pl-4 pr-2 py-2 space-y-1.5 text-xs text-gray-600 bg-gray-50 rounded-xl mt-1">
                      <div className="font-bold text-[#D31F25] uppercase tracking-wider text-[10px] pt-1">
                        International
                      </div>
                      <Link href="/packages/explore-vietnam" className="block py-1 hover:text-[#D31F25]">
                        Vietnam & Halong Cruise
                      </Link>
                      <Link href="/packages/maldives-luxury-escape" className="block py-1 hover:text-[#D31F25]">
                        Maldives Barefoot Atolls
                      </Link>
                      <Link href="/packages/bali-classic-tour" className="block py-1 hover:text-[#D31F25]">
                        Bali Private Pool Villas
                      </Link>
                      <Link href="/packages/dubai-tour" className="block py-1 hover:text-[#D31F25]">
                        Dubai Burj Khalifa & Safari
                      </Link>
                      <div className="font-bold text-emerald-600 uppercase tracking-wider text-[10px] pt-2">
                        South India & Domestic
                      </div>
                      <Link href="/packages/kerala-tour" className="block py-1 hover:text-emerald-700">
                        Kerala Munnar & Alleppey
                      </Link>
                      <Link href="/packages/karnataka-heritage-tour" className="block py-1 hover:text-emerald-700">
                        Mysore & Coorg (Safe Wheels)
                      </Link>
                      <Link href="/destinations" className="block py-1.5 font-bold text-[#D31F25] pt-1 border-t border-gray-200">
                        View All Destinations →
                      </Link>
                    </div>
                  )}
                </div>

                {/* Packages Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => toggleMobileAccordion("packages")}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-bold text-gray-900 hover:bg-gray-50"
                  >
                    <span>Packages</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileAccordion === "packages" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileAccordion === "packages" && (
                    <div className="pl-4 pr-2 py-2 space-y-1.5 text-xs text-gray-600 bg-gray-50 rounded-xl mt-1">
                      <Link href="/honeymoon" className="block py-1 hover:text-[#D31F25]">
                        Honeymoon Specials
                      </Link>
                      <Link href="/packages#international" className="block py-1 hover:text-[#D31F25]">
                        International Tour Packages
                      </Link>
                      <Link href="/packages#domestic" className="block py-1 hover:text-[#D31F25]">
                        South India & Domestic Packages
                      </Link>
                      <Link href="/packages" className="block py-1.5 font-bold text-[#D31F25] pt-1 border-t border-gray-200">
                        View All 15 Packages →
                      </Link>
                    </div>
                  )}
                </div>

                {/* Experiences */}
                <a
                  href="#experiences"
                  onClick={(e) => handleScrollTo(e, "experiences")}
                  className="block px-3 py-2 rounded-xl text-sm font-bold text-gray-900 hover:bg-gray-50"
                >
                  Experiences
                </a>

                {/* Deals */}
                <a
                  href="#deals"
                  onClick={(e) => handleScrollTo(e, "deals")}
                  className="block px-3 py-2 rounded-xl text-sm font-bold text-gray-900 hover:bg-gray-50"
                >
                  Deals
                </a>

                {/* Services Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => toggleMobileAccordion("services")}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-bold text-gray-900 hover:bg-gray-50"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileAccordion === "services" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileAccordion === "services" && (
                    <div className="pl-4 pr-2 py-2 space-y-1.5 text-xs text-gray-600 bg-gray-50 rounded-xl mt-1">
                      <Link href="/services/air-tickets" className="block py-1 hover:text-[#D31F25]">
                        IATA Air Ticketing
                      </Link>
                      <Link href="/services/car-rentals" className="block py-1 hover:text-[#D31F25]">
                        Safe Wheels Car Rentals
                      </Link>
                      <Link href="/services/visa-assistance" className="block py-1 hover:text-[#D31F25]">
                        Passport & Visa Assistance
                      </Link>
                      <Link href="/services/bus-tickets" className="block py-1 hover:text-[#D31F25]">
                        Intercity Bus Ticketing
                      </Link>
                    </div>
                  )}
                </div>

                {/* About Us */}
                <Link
                  href="/about"
                  className="block px-3 py-2 rounded-xl text-sm font-bold text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </Link>

                {/* Contact */}
                <Link
                  href="/contact"
                  className="block px-3 py-2 rounded-xl text-sm font-bold text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </Link>

                {/* Mobile Plan Trip CTA */}
                <div className="pt-3 border-t border-gray-100">
                  <Link
                    href="/contact#enquiry"
                    className="w-full bg-[#D31F25] text-white py-3 rounded-full text-center text-xs font-bold block shadow-md"
                  >
                    Plan Custom Trip
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
