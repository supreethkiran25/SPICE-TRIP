export interface Duration {
  nights: number;
  days: number;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface TravelPackage {
  id: string;
  slug: string;
  title: string;
  destination: string;
  country: string;
  region: 'Domestic' | 'International';
  duration: Duration;
  startingPrice?: number;
  currency: string;
  description: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  images: string[];
  category: ('Domestic' | 'International' | 'Honeymoon' | 'Family Holidays' | 'Adventure' | 'Cultural' | 'Cruises')[];
  rating: number;
  reviewsCount: number;
  featured?: boolean;
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  region: 'Domestic' | 'International';
  headline: string;
  description: string;
  startingPrice: number;
  packageCount: number;
  heroImage: string;
  gallery: string[];
  bestTimeToVisit: string;
  visaRequirement: string;
  highlights: string[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  processSteps: { title: string; desc: string }[];
  ctaLabel: string;
  ctaHref: string;
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  destination: string;
  rating: number;
  tripType: string;
  date: string;
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
  };
  image: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  destination: string;
  departureDate?: string;
  returnDate?: string;
  travelers: string;
  budget?: string;
  travelType: string;
  additionalRequirements?: string;
}

