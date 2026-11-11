"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Facebook, Instagram, Twitter, Check } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data/company";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setIsSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* 01. Top Continuous Stripe Band with Centered "Powered by Safe Wheels" Shield Crest */}
      <div className="relative w-full bg-black overflow-hidden flex items-center justify-center pt-4 pb-2">
        {/* Left Extending Stripe (for wide screens > 1024px) */}
        <div className="hidden lg:flex flex-1 flex-col justify-center h-[130px] relative pointer-events-none">
          <div className="absolute top-[47px] left-0 right-0 h-[2px] bg-white/90" />
          <div className="absolute top-[52px] left-0 right-0 h-[4px] bg-white/90" />
          <div className="absolute top-[59px] left-0 right-0 h-[2px] bg-white/90" />
        </div>

        {/* Authentic Connected 1024px Shield & Line Banner (Lines permanently connected to crest) */}
        <div className="shrink-0 w-full max-w-[1024px] mx-auto px-0">
          <Image
            src="/images/safewheels-footer-header-banner.png"
            alt="Powered by Safe Wheels Group of Companies"
            width={1024}
            height={130}
            priority
            unoptimized
            className="w-full h-auto object-contain block mx-auto"
          />
        </div>

        {/* Right Extending Stripe (for wide screens > 1024px) */}
        <div className="hidden lg:flex flex-1 flex-col justify-center h-[130px] relative pointer-events-none">
          <div className="absolute top-[47px] left-0 right-0 h-[2px] bg-white/90" />
          <div className="absolute top-[52px] left-0 right-0 h-[4px] bg-white/90" />
          <div className="absolute top-[59px] left-0 right-0 h-[2px] bg-white/90" />
        </div>
      </div>

      {/* 02. Main 4-Column Layout matching official spicetrip footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Head Office */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 tracking-tight">
              Head Office
            </h3>
            <div className="space-y-3.5 text-sm text-white/90 leading-relaxed font-sans">
              <p>
                <span className="block font-semibold text-white">&quot;PRASHANTH PLAZA&quot;,</span>
                4th Main, 5th Cross, Saraswathipuram,
                <br />
                MYSORE - 570009.
              </p>
              <p className="font-semibold text-white">
                <a href="tel:+918214001100" className="hover:text-[#D31F25] transition-colors">
                  91-821-4001100
                </a>{" "}
                /{" "}
                <a href="tel:+918212541100" className="hover:text-[#D31F25] transition-colors">
                  2541100
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@spicetrip.com"
                  className="hover:text-[#D31F25] transition-colors font-medium text-white underline underline-offset-2"
                >
                  info@spicetrip.com
                </a>
              </p>

              {/* Circular Social Buttons (Matching image colors: Blue FB, Dark IG, Cyan Twitter) */}
              <div className="flex items-center space-x-2.5 pt-2">
                <a
                  href={COMPANY_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#3B5998] hover:bg-[#2d4373] text-white flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 fill-current" />
                </a>
                <a
                  href={COMPANY_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#333333] hover:bg-[#D31F25] text-white flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#00ACEE] hover:bg-[#0087ba] text-white flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 fill-current" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 tracking-tight">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-white/90 font-sans">
              <li>
                <Link href="/packages" className="hover:text-[#D31F25] transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/honeymoon" className="hover:text-[#D31F25] transition-colors">
                  Honeymoon
                </Link>
              </li>
              <li>
                <Link href="/services/air-tickets" className="hover:text-[#D31F25] transition-colors">
                  Tickets
                </Link>
              </li>
              <li>
                <a
                  href="https://safewheelsindia.com/book/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D31F25] transition-colors"
                >
                  Car Rentals
                </a>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#D31F25] transition-colors">
                  Other Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 tracking-tight">
              Newsletter
            </h3>
            <p className="text-sm text-white/90 leading-relaxed mb-4">
              Sign up for our mailing list to get latest updates and offers
            </p>

            {isSubscribed ? (
              <div className="bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 px-4 py-2.5 rounded-3xl text-xs flex items-center space-x-2 animate-in fade-in">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex items-stretch rounded-3xl overflow-hidden shadow-sm border border-gray-300">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="flex-1 bg-white text-gray-900 placeholder:text-gray-500 px-3.5 py-2.5 text-sm focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#D31F25] hover:bg-[#B91C1C] text-white px-3.5 flex items-center justify-center transition-colors"
                    aria-label="Subscribe"
                  >
                    <Mail className="w-4 h-4 fill-current" />
                  </button>
                </div>
                <p className="text-[11px] text-white/50 italic">
                  We respect your privacy
                </p>
              </form>
            )}
          </div>

          {/* Column 4: Follow Us (Facebook Page Widget Card) */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 tracking-tight">
              Follow Us
            </h3>

            {/* Embedded Facebook Card Preview */}
            <div className="bg-white rounded-3xl p-3.5 shadow-md border border-gray-200 text-gray-900 max-w-xs">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 relative rounded-full overflow-hidden border border-gray-200 shrink-0 bg-white p-1.5">
                  <Image
                    src="/images/spicetrip-logo-light-bg.png"
                    alt="SpiceTrip"
                    width={48}
                    height={48}
                    unoptimized
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <a
                    href={COMPANY_INFO.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-sm text-[#3B5998] hover:underline block leading-tight truncate"
                  >
                    Spice Trip
                  </a>
                  <span className="text-[11px] text-gray-500 block mt-0.5 font-sans">
                    978 followers
                  </span>
                </div>
              </div>

              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-1.5 bg-[#F0F2F5] hover:bg-[#E4E6EB] text-[#050505] py-1.5 px-3 rounded text-xs font-semibold border border-gray-300 transition-colors"
              >
                <Facebook className="w-3.5 h-3.5 fill-[#1877F2] text-[#1877F2]" />
                <span>Follow Page</span>
              </a>
            </div>
          </div>
        </div>

        {/* 03. Bottom Credits */}
        <div className="pt-10 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-sm text-white/70 gap-3 text-center sm:text-left">
          <p>© 2026 SpiceTrip. All Rights Reserved. A venture of Safe Wheels Group.</p>
          <div className="flex items-center space-x-4">
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <span className="text-white/70">IATA & TAFI Accredited</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
