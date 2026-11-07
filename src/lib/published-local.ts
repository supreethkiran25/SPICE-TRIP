import { PACKAGES } from "@/lib/data/packages";
import { JOURNAL_ARTICLES } from "@/lib/data/journal";
import { TESTIMONIALS } from "@/lib/data/testimonials";
import type { JournalArticle, Testimonial, TravelPackage } from "@/types";

export type HeroHighlight = {
  id: string;
  scriptText: string;
  destination: string;
  subtitle: string;
  duration: string;
  inclusions: string;
  price: string;
  usdPrice: string;
  slug: string;
  bgImage: string;
};

export type PopularTour = {
  id: string;
  title: string;
  location: string;
  price: string;
  duration: string;
  style: string;
  description: string;
  slug: string;
  image: string;
};

export type HomepageDeal = {
  id: string;
  title: string;
  category: string;
  duration: string;
  inclusions: string;
  discount: string;
  originalPrice: string;
  originalUsd: string;
  discountedPrice: string;
  discountedUsd: string;
  image: string;
  slug: string;
};

export type HomepagePlan = {
  id: string;
  title: string;
  blurb: string;
  fromPrice: string;
  usd: string;
  popular: boolean;
};

export type HomepageContent = {
  hero: {
    headline?: string;
    subcopy?: string;
    featuredDestination?: {
      name: string;
      tagline: string;
      duration: string;
      price: string;
      usdPrice?: string;
      image: string;
      slug?: string;
      inclusions?: string;
      scriptText?: string;
    };
    highlights?: HeroHighlight[];
  };
  stats: {
    travelers: string;
    destinations: string;
    satisfaction: string;
    years: string;
  };
  deals: HomepageDeal[];
  plans: HomepagePlan[];
  popularTours: PopularTour[];
  aboutBlurb?: string;
  videoUrl?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export type PublishedContent = {
  packages: TravelPackage[];
  journal: JournalArticle[];
  testimonials: Testimonial[];
  homepage: HomepageContent;
};

export const fileHomepage: HomepageContent = {
  hero: {
    headline: "Travel Farther,",
    subcopy:
      "Thoughtfully curated private journeys to the world's most extraordinary destinations. Orchestrated with IATA certified excellence from Mysore.",
    highlights: [
      {
        id: "maldives",
        scriptText: "Live Better",
        destination: "Maldives",
        subtitle: "Barefoot Coral Atoll Sanctuary",
        duration: "4 Days / 3 Nights",
        inclusions: "Private Overwater Villa + Seaplane",
        price: "₹58,000",
        usdPrice: "$699",
        slug: "maldives-luxury-escape",
        bgImage:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=70",
      },
      {
        id: "vietnam",
        scriptText: "Explore Indochina",
        destination: "Vietnam & Halong",
        subtitle: "Hanoi Old Quarter & Emerald Karsts",
        duration: "6 Days / 5 Nights",
        inclusions: "5★ Halong Cruise + Transfers",
        price: "₹34,999",
        usdPrice: "$849",
        slug: "explore-vietnam",
        bgImage:
          "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=70",
      },
      {
        id: "bali",
        scriptText: "Find Serenity",
        destination: "Bali, Indonesia",
        subtitle: "Ubud Sanctuaries & Cliff Temples",
        duration: "5 Days / 4 Nights",
        inclusions: "Private Pool Villa + Excursions",
        price: "₹26,999",
        usdPrice: "$649",
        slug: "bali-classic-tour",
        bgImage:
          "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=70",
      },
      {
        id: "dubai",
        scriptText: "Taste Luxury",
        destination: "Dubai",
        subtitle: "Burj Khalifa & Desert Safari",
        duration: "4 Days / 3 Nights",
        inclusions: "5★ Hotel + Desert BBQ + Cruise",
        price: "₹38,500",
        usdPrice: "$899",
        slug: "dubai-tour",
        bgImage:
          "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=70",
      },
    ],
  },
  stats: {
    travelers: "25,000+",
    destinations: "150+",
    satisfaction: "98%",
    years: "20+",
  },
  deals: [
    {
      id: "deal-1",
      title: "Explore Vietnam — Hanoi & Halong Bay",
      category: "Cultural",
      duration: "6 Days / 5 Nights",
      inclusions: "Includes: 5★ Overnight Cruise + French Quarter + Transfers",
      discount: "20% OFF",
      originalPrice: "₹43,999",
      originalUsd: "$999",
      discountedPrice: "₹34,999",
      discountedUsd: "$849",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=640&q=70",
      slug: "explore-vietnam",
    },
    {
      id: "deal-2",
      title: "Maldives — Barefoot Coral Atoll Sanctuary",
      category: "Honeymoon",
      duration: "4 Days / 3 Nights",
      inclusions: "Includes: Overwater Villa + Seaplane + House Reef Snorkel",
      discount: "15% OFF",
      originalPrice: "₹68,000",
      originalUsd: "$820",
      discountedPrice: "₹58,000",
      discountedUsd: "$699",
      image:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=640&q=70",
      slug: "maldives-luxury-escape",
    },
    {
      id: "deal-3",
      title: "Bali Classic Tour — Temples & Nusa Dua",
      category: "Island",
      duration: "5 Days / 4 Nights",
      inclusions: "Includes: Private Pool Villa + Uluwatu Sunset + Transfers",
      discount: "25% OFF",
      originalPrice: "₹35,999",
      originalUsd: "$850",
      discountedPrice: "₹26,999",
      discountedUsd: "$649",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=640&q=70",
      slug: "bali-classic-tour",
    },
    {
      id: "deal-4",
      title: "Dubai Luxury Extravaganza — Burj & Safari",
      category: "Luxury",
      duration: "4 Days / 3 Nights",
      inclusions: "Includes: 5★ Hotel + Desert BBQ Safari + Burj Khalifa",
      discount: "30% OFF",
      originalPrice: "₹55,000",
      originalUsd: "$1,150",
      discountedPrice: "₹38,500",
      discountedUsd: "$899",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=640&q=70",
      slug: "dubai-tour",
    },
    {
      id: "deal-5",
      title: "Splendid Thailand — Phuket & Krabi",
      category: "Island",
      duration: "5 Days / 4 Nights",
      inclusions: "Includes: Speedboat Tours + 4★ Beach Resort + Transfers",
      discount: "20% OFF",
      originalPrice: "₹28,500",
      originalUsd: "$650",
      discountedPrice: "₹22,999",
      discountedUsd: "$549",
      image:
        "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=640&q=70",
      slug: "thailand-tour",
    },
    {
      id: "deal-6",
      title: "Kerala — God's Own Country Munnar & Alleppey",
      category: "Cultural",
      duration: "5 Days / 4 Nights",
      inclusions: "Includes: Private Houseboat + Tea Gardens + Safe Wheels Car",
      discount: "18% OFF",
      originalPrice: "₹22,500",
      originalUsd: "$480",
      discountedPrice: "₹18,500",
      discountedUsd: "$399",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=640&q=70",
      slug: "kerala-tour",
    },
  ],
  plans: [
    {
      id: "solo",
      title: "Solo Explorer",
      blurb: "Perfect for solo travelers seeking authentic adventure.",
      fromPrice: "₹19,999",
      usd: "$499",
      popular: false,
    },
    {
      id: "couple",
      title: "Couple Getaway",
      blurb: "Romantic escapes & honeymoon retreats made memorable.",
      fromPrice: "₹39,999",
      usd: "$799",
      popular: true,
    },
    {
      id: "family",
      title: "Family Vacation",
      blurb: "Curated, safe and comfortable journeys for all generations.",
      fromPrice: "₹59,999",
      usd: "$1,299",
      popular: false,
    },
  ],
  popularTours: [
    {
      id: "pokhara",
      title: "Pokhara Retreat",
      location: "Himalayas",
      price: "₹49,000",
      duration: "6 Days",
      style: "Active & Serene",
      description:
        "Stay down beside the peaceful Phewa lake, surrounded by green hills, distant Annapurna peaks and quiet beauty.",
      slug: "nepal-himalayan-kingdom",
      image: "/images/destinations/nepal.jpg",
    },
    {
      id: "maldives",
      title: "Maldives Barefoot",
      location: "Indian Ocean",
      price: "₹58,000",
      duration: "4 Days",
      style: "Luxury Atoll",
      description:
        "Private overwater sanctuary villas, coral lagoon snorkeling, and barefoot sunset dining over the sea.",
      slug: "maldives-luxury-escape",
      image: "/images/destinations/maldives.jpg",
    },
    {
      id: "vietnam",
      title: "Vietnam & Halong",
      location: "Indochina",
      price: "₹34,999",
      duration: "6 Days",
      style: "Heritage & Cruise",
      description:
        "Sail amidst emerald limestone karsts on an overnight luxury junk boat and wander lantern-lit ancient Hoi An.",
      slug: "explore-vietnam",
      image: "/images/destinations/vietnam.jpg",
    },
    {
      id: "bali",
      title: "Bali Sanctuary",
      location: "Indonesia",
      price: "₹26,999",
      duration: "5 Days",
      style: "Pool Villa & Temple",
      description:
        "Ubud jungle river valleys, cliffside Uluwatu sunset fire dances, and private luxury pool sanctuary villas.",
      slug: "bali-classic-tour",
      image: "/images/destinations/bali.jpg",
    },
    {
      id: "dubai",
      title: "Dubai Extravaganza",
      location: "UAE",
      price: "₹38,500",
      duration: "4 Days",
      style: "Desert & Skyline",
      description:
        "Burj Khalifa 124th floor observatory, red dune 4x4 safaris with starlight BBQ and Dubai Marina yachts.",
      slug: "dubai-tour",
      image: "/images/destinations/dubai.jpg",
    },
    {
      id: "kerala",
      title: "Kerala Backwaters",
      location: "God's Own Country",
      price: "₹18,500",
      duration: "5 Days",
      style: "Houseboat & Mist",
      description:
        "Munnar rolling tea plantations, spice-scented mountain mist, and private wooden houseboats on Alleppey canals.",
      slug: "kerala-tour",
      image: "/images/destinations/kerala.jpg",
    },
    {
      id: "thailand",
      title: "Splendid Thailand",
      location: "Phuket & Krabi",
      price: "₹22,999",
      duration: "5 Days",
      style: "Island Hopping",
      description:
        "Phi Phi limestone sea grottos, crystal lagoon longtail boats, and world-famous Andaman sunset beaches.",
      slug: "thailand-tour",
      image: "/images/destinations/thailand.jpg",
    },
  ],
  videoUrl: "https://www.youtube.com/watch?v=9Mbxfupo6Tw",
  aboutBlurb:
    "SpiceTrip, a premier venture of Safe Wheels, is an IATA certified travel agency offering bespoke international voyages from Mysore.",
  ctaLabel: "Explore Journeys",
  ctaHref: "/packages",
};

function mergeHomepage(remote: HomepageContent | null, local: HomepageContent): HomepageContent {
  if (!remote) return local;
  return {
    hero: {
      headline: remote.hero.headline || local.hero.headline,
      subcopy: remote.hero.subcopy || local.hero.subcopy,
      featuredDestination: remote.hero.featuredDestination || local.hero.featuredDestination,
      highlights:
        remote.hero.highlights?.length ? remote.hero.highlights : local.hero.highlights,
    },
    stats: {
      travelers: remote.stats.travelers || local.stats.travelers,
      destinations: remote.stats.destinations || local.stats.destinations,
      satisfaction: remote.stats.satisfaction || local.stats.satisfaction,
      years: remote.stats.years || local.stats.years,
    },
    deals: remote.deals.length ? remote.deals : local.deals,
    plans: remote.plans.length ? remote.plans : local.plans,
    popularTours: remote.popularTours.length ? remote.popularTours : local.popularTours,
    aboutBlurb: remote.aboutBlurb || local.aboutBlurb,
    videoUrl: remote.videoUrl || local.videoUrl,
    ctaLabel: remote.ctaLabel || local.ctaLabel,
    ctaHref: remote.ctaHref || local.ctaHref,
  };
}

export function getPublishedFallback(): PublishedContent {
  return {
    packages: PACKAGES,
    journal: JOURNAL_ARTICLES,
    testimonials: TESTIMONIALS,
    homepage: fileHomepage,
  };
}

export { mergeHomepage };
