import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Outfit, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/motion/SmoothScroll";
import { CmsProvider } from "@/components/cms/CmsProvider";
import { COMPANY_INFO } from "@/lib/data/company";

const Footer = dynamic(() => import("@/components/layout/Footer"));

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
    default: "SpiceTrip | Private international journeys from Mysore",
    template: "%s | SpiceTrip",
  },
  description:
    "IATA certified travel agency from Safe Wheels Group, Mysore. Get a free custom itinerary for Vietnam, Maldives, Bali, Dubai, Thailand, and Kerala with a dedicated travel manager.",
  keywords: [
    "SpiceTrip",
    "Spice Trip Mysore",
    "Safe Wheels travel agency",
    "IATA certified travel agency Mysore",
    "international tour packages India",
    "honeymoon packages Vietnam Maldives Bali",
    "custom holidays Mysore Bangalore",
  ],
  authors: [{ name: "SpiceTrip and Safe Wheels Group" }],
  openGraph: {
    title: "SpiceTrip | Private international journeys from Mysore",
    description:
      "Free itinerary planning with IATA certified booking for Vietnam, Maldives, Bali, Dubai, Thailand, and Kerala. A Safe Wheels Group venture.",
    url: "https://www.spicetrip.com",
    siteName: "SpiceTrip",
    images: [
      {
        url: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=75",
        width: 1200,
        height: 630,
        alt: "Halong Bay journey planned by SpiceTrip",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpiceTrip | Private international journeys from Mysore",
    description:
      "Free itinerary planning and IATA certified booking by Safe Wheels, Mysore.",
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
      <body className="bg-[#F7F6F3] text-[#171717] min-h-screen flex flex-col font-sans antialiased selection:bg-[#D31F25] selection:text-white">
        <CmsProvider>
          <SmoothScroll>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-[#18181B] focus:px-3 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
            >
              Skip to content
            </a>
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </CmsProvider>
      </body>
    </html>
  );
}
