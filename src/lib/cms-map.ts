import type { ItineraryDay, JournalArticle, Testimonial, TravelPackage } from "@/types";
import type { HomepageContent, PopularTour, HomepageDeal, HomepagePlan, HeroHighlight } from "./published-local";

const PACKAGE_CATEGORIES = [
  "Domestic",
  "International",
  "Honeymoon",
  "Family Holidays",
  "Adventure",
  "Cultural",
  "Cruises",
] as const;

type PackageCategory = (typeof PACKAGE_CATEGORIES)[number];

function str(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function num(value: unknown) {
  const n = typeof value === "number" ? value : Number(value);
  return Number.isFinite(n) ? n : 0;
}

function flag(value: unknown, fallback = false) {
  return typeof value === "boolean" ? value : fallback;
}

function strList(value: unknown) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => String(item).trim()).filter(Boolean);
}

function asRecord(value: unknown) {
  return value && typeof value === "object" ? (value as Record<string, unknown>) : {};
}

function parsePriceLabel(label: string): number {
  const digits = label.replace(/[^\d]/g, "");
  return digits ? Number(digits) : 0;
}

function parseDuration(raw: unknown): { nights: number; days: number } {
  const row = asRecord(raw);
  if (num(row.nights) || num(row.days)) {
    const nights = num(row.nights);
    const days = num(row.days) || nights + 1;
    return { nights: nights || Math.max(days - 1, 0), days };
  }
  const text = str(raw);
  const match = text.match(/(\d+)\s*[Nn].*?(\d+)\s*[Dd]/) || text.match(/(\d+)\s*[Dd].*?(\d+)\s*[Nn]/);
  if (match) {
    const a = Number(match[1]);
    const b = Number(match[2]);
    if (/[Nn]/.test(match[0].slice(0, 3))) return { nights: a, days: b };
    return { nights: b, days: a };
  }
  const daysOnly = text.match(/(\d+)\s*[Dd]/);
  if (daysOnly) {
    const days = Number(daysOnly[1]);
    return { nights: Math.max(days - 1, 0), days };
  }
  return { nights: 0, days: 0 };
}

function parseItinerary(raw: unknown): ItineraryDay[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((item, index) => {
      const row = asRecord(item);
      const title = str(row.title);
      const description = str(row.description);
      if (!title && !description) return null;
      return {
        day: num(row.day) || index + 1,
        title: title || `Day ${index + 1}`,
        description,
      };
    })
    .filter((item): item is ItineraryDay => Boolean(item));
}

function parseCategories(raw: unknown, region: TravelPackage["region"]): PackageCategory[] {
  const fromList = strList(raw).filter((item): item is PackageCategory =>
    (PACKAGE_CATEGORIES as readonly string[]).includes(item),
  );
  if (fromList.length) return fromList;
  return [region];
}

/**
 * projects → TravelPackage.
 * Prefers a full TravelPackage jsonb shape; falls back to ProjectContent aliases
 * (name→title, tagline→destination, gallery→images, pricePerSqft/priceLabel→price, etc.).
 */
export function packageFromCms(raw: unknown): TravelPackage | null {
  const row = asRecord(raw);
  const slug = str(row.slug) || str(row.id);
  const title = str(row.title) || str(row.name);
  if (!slug || !title) return null;

  const regionRaw = str(row.region) || str(asRecord(row.location).area);
  const region: TravelPackage["region"] =
    regionRaw.toLowerCase() === "domestic" ? "Domestic" : "International";

  const gallery = strList(row.images).length
    ? strList(row.images)
    : [str(row.heroImage), ...strList(row.gallery)].filter(Boolean);

  const startingPrice =
    num(row.startingPrice) ||
    num(row.pricePerSqft) ||
    parsePriceLabel(str(row.priceLabel)) ||
    undefined;

  const duration = parseDuration(row.duration);
  if (!duration.days && strList(row.plotSizes)[0]) {
    const parsed = parseDuration(strList(row.plotSizes)[0]);
    duration.nights = parsed.nights;
    duration.days = parsed.days;
  }

  const destination =
    str(row.destination) || str(row.tagline) || str(asRecord(row.location).city) || title;
  const country =
    str(row.country) || str(asRecord(row.location).city) || destination;

  return {
    id: str(row.id) || slug,
    slug,
    title,
    destination,
    country,
    region,
    duration: duration.days ? duration : { nights: 3, days: 4 },
    startingPrice,
    currency: str(row.currency) || "INR",
    description: str(row.description) || str(row.listingDescription),
    highlights: strList(row.highlights),
    itinerary: parseItinerary(row.itinerary),
    inclusions: strList(row.inclusions).length ? strList(row.inclusions) : strList(row.amenities),
    exclusions: strList(row.exclusions).length ? strList(row.exclusions) : strList(row.facilities),
    images: gallery.length ? gallery : ["/images/destinations/vietnam.jpg"],
    category: parseCategories(row.category, region),
    rating: num(row.rating) || 4.8,
    reviewsCount: num(row.reviewsCount) || 0,
    featured: flag(row.featured, false),
  };
}

/** insights → JournalArticle */
export function articleFromCms(raw: unknown): JournalArticle | null {
  const row = asRecord(raw);
  const slug = str(row.slug) || str(row.id);
  const title = str(row.title);
  if (!slug || !title) return null;

  const content = strList(row.content).length
    ? strList(row.content)
    : strList(row.body).length
      ? strList(row.body)
      : strList(row.paragraphs);

  const authorRow = asRecord(row.author);
  const authorName = str(authorRow.name) || str(row.authorName) || "SpiceTrip Editorial";
  const authorRole = str(authorRow.role) || str(row.authorRole) || "Travel Curator";
  const publishedDate = str(row.publishedDate) || str(row.date) || "1970-01-01";
  const excerpt = str(row.excerpt) || content[0] || title;
  const words = content.join(" ").split(/\s+/).filter(Boolean).length;
  const readTime = str(row.readTime) || `${Math.max(3, Math.ceil(words / 200))} min read`;

  return {
    id: str(row.id) || slug,
    slug,
    title,
    excerpt,
    content: content.length ? content : [excerpt],
    category: str(row.category) || "Travel",
    readTime,
    publishedDate,
    author: { name: authorName, role: authorRole },
    image: str(row.image) || "",
  };
}

/** testimonials → Traveler reviews (no photo required) */
export function testimonialFromCms(raw: unknown): Testimonial | null {
  const row = asRecord(raw);
  const quote = str(row.quote);
  const author = str(row.author) || str(row.name);
  if (!quote || !author) return null;

  const ratingRaw = Math.round(num(row.rating));
  const rating = ratingRaw >= 1 && ratingRaw <= 5 ? ratingRaw : 5;

  return {
    id: str(row.id) || author,
    quote,
    author,
    location: str(row.location) || "",
    destination: str(row.destination) || str(row.service) || "",
    rating,
    tripType: str(row.tripType) || str(row.designation) || "",
    date: str(row.date) || "",
  };
}

function mapHeroHighlight(raw: unknown): HeroHighlight | null {
  const row = asRecord(raw);
  const destination = str(row.destination) || str(row.name);
  if (!destination) return null;
  return {
    id: str(row.id) || destination.toLowerCase().replace(/\s+/g, "-"),
    scriptText: str(row.scriptText) || "Live Better",
    destination,
    subtitle: str(row.subtitle) || str(row.tagline),
    duration: str(row.duration),
    inclusions: str(row.inclusions) || str(row.includes),
    price: str(row.price) || str(row.salePrice),
    usdPrice: str(row.usdPrice) || str(row.usd),
    slug: str(row.slug),
    bgImage: str(row.bgImage) || str(row.image),
  };
}

function mapPopularTour(raw: unknown): PopularTour | null {
  const row = asRecord(raw);
  const title = str(row.title) || str(row.name);
  const slug = str(row.slug);
  if (!title || !slug) return null;
  return {
    id: str(row.id) || slug,
    title,
    location: str(row.location) || str(row.destination),
    price: str(row.price),
    duration: str(row.duration),
    style: str(row.style) || str(row.category),
    description: str(row.description),
    slug,
    image: str(row.image) || str(row.bgImage),
  };
}

function mapDeal(raw: unknown): HomepageDeal | null {
  const row = asRecord(raw);
  const title = str(row.title);
  const slug = str(row.slug);
  if (!title || !slug) return null;
  return {
    id: str(row.id) || slug,
    title,
    category: str(row.category) || "Cultural",
    duration: str(row.duration),
    inclusions: str(row.inclusions) || str(row.includes),
    discount: str(row.discount),
    originalPrice: str(row.originalPrice),
    originalUsd: str(row.originalUsd),
    discountedPrice: str(row.discountedPrice) || str(row.salePrice),
    discountedUsd: str(row.discountedUsd) || str(row.saleUsd),
    image: str(row.image),
    slug,
  };
}

function mapPlan(raw: unknown): HomepagePlan | null {
  const row = asRecord(raw);
  const title = str(row.title) || str(row.name);
  if (!title) return null;
  return {
    id: str(row.id) || title.toLowerCase().replace(/\s+/g, "-"),
    title,
    blurb: str(row.blurb) || str(row.tagline),
    fromPrice: str(row.fromPrice) || str(row.price),
    usd: str(row.usd),
    popular: flag(row.popular, false),
  };
}

/** site_settings → homepage overlay for SpiceTrip */
export function homepageFromCms(raw: unknown): HomepageContent | null {
  const row = asRecord(raw);
  if (!Object.keys(row).length) return null;

  const hero = asRecord(row.hero);
  const featured = asRecord(hero.featuredDestination);
  const stats = asRecord(row.stats);

  const highlights = Array.isArray(hero.highlights)
    ? hero.highlights.map(mapHeroHighlight).filter((item): item is HeroHighlight => Boolean(item))
    : [];

  const popularTours = Array.isArray(row.popularTours)
    ? row.popularTours.map(mapPopularTour).filter((item): item is PopularTour => Boolean(item))
    : [];

  const deals = Array.isArray(row.deals)
    ? row.deals.map(mapDeal).filter((item): item is HomepageDeal => Boolean(item))
    : [];

  const plans = Array.isArray(row.plans)
    ? row.plans.map(mapPlan).filter((item): item is HomepagePlan => Boolean(item))
    : [];

  return {
    hero: {
      headline: str(hero.headline) || undefined,
      subcopy: str(hero.subcopy) || undefined,
      featuredDestination:
        str(featured.name) || str(featured.destination)
          ? {
              name: str(featured.name) || str(featured.destination),
              tagline: str(featured.tagline) || str(featured.subtitle),
              duration: str(featured.duration),
              price: str(featured.price),
              usdPrice: str(featured.usdPrice) || str(featured.usd),
              image: str(featured.image) || str(featured.bgImage),
              slug: str(featured.slug),
              inclusions: str(featured.inclusions),
              scriptText: str(featured.scriptText),
            }
          : undefined,
      highlights: highlights.length ? highlights : undefined,
    },
    stats: {
      travelers: str(stats.travelers) || (num(stats.customers) ? `${num(stats.customers).toLocaleString()}+` : ""),
      destinations: str(stats.destinations) || (num(stats.layouts) ? `${num(stats.layouts)}+` : ""),
      satisfaction: str(stats.satisfaction) || str(stats.customerFocused),
      years: str(stats.years) || (num(stats.years) ? String(num(stats.years)) : ""),
    },
    deals,
    plans,
    popularTours,
    aboutBlurb: str(row.aboutBlurb) || undefined,
    videoUrl: str(row.videoUrl) || str(row.heroVideoId) || undefined,
    ctaLabel: str(row.ctaLabel) || undefined,
    ctaHref: str(row.ctaHref) || undefined,
  };
}
