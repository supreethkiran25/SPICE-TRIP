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
  Globe,
  MapPin,
  Heart,
  Compass,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();
  const router = useRouter();

  // Scroll threshold for dynamic shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Handle URL hash on load or route change
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      const timer = setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const yOffset = -90;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
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

  const toggleMobileAccordion = (menu: string) => {
    setMobileAccordion(mobileAccordion === menu ? null : menu);
  };

  // Smooth scroll handler for anchor links
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);

    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        const yOffset = -90;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        window.history.pushState(null, "", `/#${targetId}`);
        return;
      }
    }
  };

  // Helper to determine active state
  const isHomeActive = pathname === "/";
  const isDestinationsActive = (pathname ?? "").startsWith("/destinations");
  const isPackagesActive = (pathname ?? "").startsWith("/packages") || pathname === "/honeymoon";
  const isAboutActive = pathname === "/about";
  const isContactActive = pathname === "/contact";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Floating Pill with 100% Solid Pure White Background */}
          <div
            className={`rounded-full px-4 sm:px-6 py-2 sm:py-2.5 transition-all duration-300 flex items-center justify-between border bg-white ${
              isScrolled
                ? "shadow-xl border-gray-200/90"
                : "shadow-lg border-gray-200/70"
            }`}
          >
            {/* 01. Official SpiceTrip & Safe Wheels Group Logo Lockup (Matches Reference Image 1) */}
            <Link
              href="/"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="flex items-center space-x-2.5 sm:space-x-3.5 group shrink-0 focus:outline-none"
              aria-label="SpiceTrip — Safe Wheels Group, IATA Certified Agency"
            >
              <Image
                src="/images/spicetrip-logo-light-bg.png"
                alt="SpiceTrip — good time, great memories!"
                width={145}
                height={46}
                priority
                unoptimized
                className="h-7 sm:h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
              />

              {/* Thin Vertical Separator Line */}
              <div className="h-6 sm:h-7 md:h-8 w-[1.5px] bg-gray-300 shrink-0" />

              {/* Stacked Safe Wheels Group & IATA Pedigree */}
              <div className="flex flex-col justify-center leading-tight select-none">
                <span className="text-[10px] sm:text-[11px] md:text-xs font-black uppercase tracking-wider text-gray-900 font-sans whitespace-nowrap">
                  SAFE WHEELS GROUP
                </span>
                <span className="text-[8.5px] sm:text-[9.5px] md:text-[10.5px] font-bold uppercase tracking-wider text-[#D31F25] font-sans whitespace-nowrap">
                  IATA CERTIFIED AGENCY
                </span>
              </div>
            </Link>

            {/* 02. Desktop Navigation Items (Matches Reference Image 8) */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {/* Home */}
              <Link
                href="/"
                onClick={(e) => {
                  if (pathname === "/") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className={`relative px-3 py-1.5 text-xs xl:text-sm font-bold transition-colors ${
                  isHomeActive
                    ? "text-[#D31F25] after:content-[''] after:absolute after:bottom-[-2px] after:left-3 after:right-3 after:h-[2.5px] after:bg-[#D31F25] after:rounded-full"
                    : "text-[#18181B] hover:text-[#D31F25]"
                }`}
              >
                Home
              </Link>

              {/* Destinations (Links to /destinations + Dropdown on hover) */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("destinations")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/destinations"
                  className={`relative px-3 py-1.5 text-xs xl:text-sm font-bold transition-colors inline-flex items-center ${
                    isDestinationsActive
                      ? "text-[#D31F25] after:content-[''] after:absolute after:bottom-[-2px] after:left-3 after:right-3 after:h-[2.5px] after:bg-[#D31F25] after:rounded-full"
                      : "text-[#18181B] hover:text-[#D31F25]"
                  }`}
                >
                  Destinations
                </Link>

                {/* Destinations Mega Dropdown Panel */}
                {openDropdown === "destinations" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[560px] animate-in fade-in zoom-in-95 duration-200 z-50">
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-5 overflow-hidden">
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

              {/* Packages (Links to /packages + Dropdown on hover) */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("packages")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/packages"
                  className={`relative px-3 py-1.5 text-xs xl:text-sm font-bold transition-colors inline-flex items-center ${
                    isPackagesActive
                      ? "text-[#D31F25] after:content-[''] after:absolute after:bottom-[-2px] after:left-3 after:right-3 after:h-[2.5px] after:bg-[#D31F25] after:rounded-full"
                      : "text-[#18181B] hover:text-[#D31F25]"
                  }`}
                >
                  Packages
                </Link>

                {/* Packages Dropdown Panel */}
                {openDropdown === "packages" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-80 animate-in fade-in zoom-in-95 duration-200 z-50">
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4">
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

              {/* Experiences (Scrolls smoothly to Why Travel With Us Bento) */}
              <a
                href="/#experiences"
                onClick={(e) => handleScrollTo(e, "experiences")}
                className="px-3 py-1.5 text-xs xl:text-sm font-bold text-[#18181B] hover:text-[#D31F25] transition-colors"
              >
                Experiences
              </a>

              {/* Deals (Scrolls smoothly to Top Deals) */}
              <a
                href="/#deals"
                onClick={(e) => handleScrollTo(e, "deals")}
                className="px-3 py-1.5 text-xs xl:text-sm font-bold text-[#18181B] hover:text-[#D31F25] transition-colors"
              >
                Deals
              </a>

              {/* About Us */}
              <Link
                href="/about"
                className={`relative px-3 py-1.5 text-xs xl:text-sm font-bold transition-colors ${
                  isAboutActive
                    ? "text-[#D31F25] after:content-[''] after:absolute after:bottom-[-2px] after:left-3 after:right-3 after:h-[2.5px] after:bg-[#D31F25] after:rounded-full"
                    : "text-[#18181B] hover:text-[#D31F25]"
                }`}
              >
                About Us
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className={`relative px-3 py-1.5 text-xs xl:text-sm font-bold transition-colors ${
                  isContactActive
                    ? "text-[#D31F25] after:content-[''] after:absolute after:bottom-[-2px] after:left-3 after:right-3 after:h-[2.5px] after:bg-[#D31F25] after:rounded-full"
                    : "text-[#18181B] hover:text-[#D31F25]"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* 03. Right Actions: Plan Trip CTA & Mobile Toggle */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Link
                href="/contact#enquiry"
                className="hidden sm:inline-flex items-center space-x-1.5 bg-[#D31F25] hover:bg-[#B91C1C] text-white px-5 py-2 rounded-full text-xs font-bold transition-all shadow-md hover:shadow-red-600/30 shrink-0"
              >
                <span>Plan Trip</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Menu Hamburger Button */}
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

        {/* 04. Mobile Expandable Navigation Drawer (Pure Solid White) */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 max-w-7xl mx-auto px-2 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-5 max-h-[82vh] overflow-y-auto">
              <div className="space-y-3">
                {/* Home */}
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-xl text-sm font-bold ${
                    isHomeActive ? "bg-red-50 text-[#D31F25]" : "text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  Home
                </Link>

                {/* Destinations Accordion */}
                <div>
                  <div className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-gray-50">
                    <Link
                      href="/destinations"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-sm font-bold flex-1 ${
                        isDestinationsActive ? "text-[#D31F25]" : "text-gray-900"
                      }`}
                    >
                      Destinations
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleMobileAccordion("destinations")}
                      className="p-1 text-gray-500 hover:text-gray-900"
                      aria-label="Expand destinations"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileAccordion === "destinations" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                  {mobileAccordion === "destinations" && (
                    <div className="pl-4 pr-2 py-2 space-y-1.5 text-xs text-gray-600 bg-gray-50 rounded-xl mt-1">
                      <div className="font-bold text-[#D31F25] uppercase tracking-wider text-[10px] pt-1">
                        International
                      </div>
                      <Link
                        href="/packages/explore-vietnam"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 hover:text-[#D31F25]"
                      >
                        Vietnam & Halong Cruise
                      </Link>
                      <Link
                        href="/packages/maldives-luxury-escape"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 hover:text-[#D31F25]"
                      >
                        Maldives Barefoot Atolls
                      </Link>
                      <Link
                        href="/packages/bali-classic-tour"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 hover:text-[#D31F25]"
                      >
                        Bali Private Pool Villas
                      </Link>
                      <Link
                        href="/packages/dubai-tour"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 hover:text-[#D31F25]"
                      >
                        Dubai Burj Khalifa & Safari
                      </Link>
                      <div className="font-bold text-emerald-600 uppercase tracking-wider text-[10px] pt-2">
                        South India & Domestic
                      </div>
                      <Link
                        href="/packages/kerala-tour"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 hover:text-emerald-700"
                      >
                        Kerala Munnar & Alleppey
                      </Link>
                      <Link
                        href="/packages/karnataka-heritage-tour"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 hover:text-emerald-700"
                      >
                        Mysore & Coorg (Safe Wheels)
                      </Link>
                      <Link
                        href="/destinations"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1.5 font-bold text-[#D31F25] pt-1 border-t border-gray-200"
                      >
                        View All Destinations →
                      </Link>
                    </div>
                  )}
                </div>

                {/* Packages Accordion */}
                <div>
                  <div className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-gray-50">
                    <Link
                      href="/packages"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-sm font-bold flex-1 ${
                        isPackagesActive ? "text-[#D31F25]" : "text-gray-900"
                      }`}
                    >
                      Packages
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleMobileAccordion("packages")}
                      className="p-1 text-gray-500 hover:text-gray-900"
                      aria-label="Expand packages"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileAccordion === "packages" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                  {mobileAccordion === "packages" && (
                    <div className="pl-4 pr-2 py-2 space-y-1.5 text-xs text-gray-600 bg-gray-50 rounded-xl mt-1">
                      <Link
                        href="/honeymoon"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 hover:text-[#D31F25]"
                      >
                        Honeymoon Specials
                      </Link>
                      <Link
                        href="/packages#international"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 hover:text-[#D31F25]"
                      >
                        International Tour Packages
                      </Link>
                      <Link
                        href="/packages#domestic"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 hover:text-[#D31F25]"
                      >
                        South India & Domestic Packages
                      </Link>
                      <Link
                        href="/packages"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1.5 font-bold text-[#D31F25] pt-1 border-t border-gray-200"
                      >
                        View All 15 Packages →
                      </Link>
                    </div>
                  )}
                </div>

                {/* Experiences */}
                <a
                  href="/#experiences"
                  onClick={(e) => handleScrollTo(e, "experiences")}
                  className="block px-3 py-2 rounded-xl text-sm font-bold text-gray-900 hover:bg-gray-50"
                >
                  Experiences
                </a>

                {/* Deals */}
                <a
                  href="/#deals"
                  onClick={(e) => handleScrollTo(e, "deals")}
                  className="block px-3 py-2 rounded-xl text-sm font-bold text-gray-900 hover:bg-gray-50"
                >
                  Deals
                </a>

                {/* About Us */}
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-xl text-sm font-bold ${
                    isAboutActive ? "bg-red-50 text-[#D31F25]" : "text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  About Us
                </Link>

                {/* Contact */}
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-xl text-sm font-bold ${
                    isContactActive ? "bg-red-50 text-[#D31F25]" : "text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  Contact
                </Link>

                {/* Mobile Plan Trip CTA */}
                <div className="pt-3 border-t border-gray-100">
                  <Link
                    href="/contact#enquiry"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full bg-[#D31F25] hover:bg-[#B91C1C] text-white py-3 rounded-full text-center text-xs font-bold block shadow-md"
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
