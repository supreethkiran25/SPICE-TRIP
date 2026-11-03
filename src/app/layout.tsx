import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/motion/SmoothScroll";
import { CmsProvider } from "@/components/cms/CmsProvider";
import { COMPANY_INFO } from "@/lib/data/company";

const Footer = dynamic(() => import("@/components/layout/Footer"));

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const script = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-script",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.spicetrip.com"),
  title: {
    default: "SpiceTrip — Curated Luxury Expeditions & Bespoke Journeys",
    template: "%s | SpiceTrip Official",
  },
  description:
    "Official website of SpiceTrip, an IATA certified travel agency & venture of Safe Wheels Group, Mysore. Handcrafted international tour packages, honeymoon getaways, flight ticketing, and private travel concierge.",
  keywords: [
    "SpiceTrip",
    "Spice Trip Mysore",
    "Safe Wheels travel agency",
    "IATA certified travel agency Mysore",
    "luxury tour packages India",
    "honeymoon packages Vietnam Maldives Bali",
    "custom international holidays Mysore Bangalore",
  ],
  authors: [{ name: "SpiceTrip & Safe Wheels Group" }],
  openGraph: {
    title: "SpiceTrip — Journeys, Not Destinations",
    description:
      "Curated international tour packages, honeymoon retreats, and bespoke expeditions. An IATA certified agency and venture of Safe Wheels, Mysore.",
    url: "https://www.spicetrip.com",
    siteName: "SpiceTrip",
    images: [
      {
        url: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=75",
        width: 1200,
        height: 630,
        alt: "SpiceTrip Luxury Travel Expeditions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpiceTrip — Curated Luxury Expeditions",
    description:
      "Handcrafted international tour packages & honeymoon retreats by Safe Wheels, Mysore.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: COMPANY_INFO.name,
  legalName: COMPANY_INFO.legalName,
  description: COMPANY_INFO.description,
  url: "https://www.spicetrip.com",
  telephone: COMPANY_INFO.contacts.phonePrimary,
  email: COMPANY_INFO.contacts.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY_INFO.headOffice.address,
    addressLocality: COMPANY_INFO.headOffice.city,
    addressRegion: COMPANY_INFO.headOffice.state,
    postalCode: COMPANY_INFO.headOffice.pincode,
    addressCountry: "IN",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Safe Wheels Group",
    url: "https://safewheelsindia.com",
  },
  priceRange: "₹₹₹",
  sameAs: [
    COMPANY_INFO.social.facebook,
    COMPANY_INFO.social.instagram,
    COMPANY_INFO.social.twitter,
    COMPANY_INFO.social.youtube,
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${script.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#FAF9F5] text-[#18181B] min-h-screen flex flex-col font-sans selection:bg-[#D31F25] selection:text-white">
        <CmsProvider>
          <SmoothScroll>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </SmoothScroll>
        </CmsProvider>
      </body>
    </html>
  );
}
