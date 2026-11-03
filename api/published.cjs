/**
 * Self-contained Vercel serverless fallback for GET /api/published.
 * Prefer the Next.js App Router route at src/app/api/published/route.ts.
 * This CommonJS handler exists if the TS serverless path fails on Vercel.
 */
const { createClient } = require("@supabase/supabase-js");

function env(name) {
  return String(process.env[name] || "").trim();
}

function str(value) {
  return typeof value === "string" ? value.trim() : "";
}

function num(value) {
  const n = typeof value === "number" ? value : Number(value);
  return Number.isFinite(n) ? n : 0;
}

function flag(value, fallback) {
  return typeof value === "boolean" ? value : Boolean(fallback);
}

function strList(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => String(item).trim()).filter(Boolean);
}

function asRecord(value) {
  return value && typeof value === "object" ? value : {};
}

function parseDuration(raw) {
  const row = asRecord(raw);
  if (num(row.nights) || num(row.days)) {
    const nights = num(row.nights);
    const days = num(row.days) || nights + 1;
    return { nights: nights || Math.max(days - 1, 0), days };
  }
  return { nights: 3, days: 4 };
}

function packageFromCms(raw) {
  const row = asRecord(raw);
  const slug = str(row.slug) || str(row.id);
  const title = str(row.title) || str(row.name);
  if (!slug || !title) return null;
  const regionRaw = str(row.region) || str(asRecord(row.location).area);
  const region = regionRaw.toLowerCase() === "domestic" ? "Domestic" : "International";
  const gallery = strList(row.images).length
    ? strList(row.images)
    : [str(row.heroImage), ...strList(row.gallery)].filter(Boolean);
  const duration = parseDuration(row.duration);
  return {
    id: str(row.id) || slug,
    slug,
    title,
    destination: str(row.destination) || str(row.tagline) || title,
    country: str(row.country) || str(asRecord(row.location).city) || "",
    region,
    duration,
    startingPrice: num(row.startingPrice) || num(row.pricePerSqft) || undefined,
    currency: str(row.currency) || "INR",
    description: str(row.description),
    highlights: strList(row.highlights),
    itinerary: Array.isArray(row.itinerary) ? row.itinerary : [],
    inclusions: strList(row.inclusions).length ? strList(row.inclusions) : strList(row.amenities),
    exclusions: strList(row.exclusions).length ? strList(row.exclusions) : strList(row.facilities),
    images: gallery,
    category: strList(row.category).length ? strList(row.category) : [region],
    rating: num(row.rating) || 4.8,
    reviewsCount: num(row.reviewsCount) || 0,
    featured: flag(row.featured, false),
  };
}

function articleFromCms(raw) {
  const row = asRecord(raw);
  const slug = str(row.slug) || str(row.id);
  const title = str(row.title);
  if (!slug || !title) return null;
  const content = strList(row.content).length ? strList(row.content) : strList(row.body);
  const author = asRecord(row.author);
  return {
    id: str(row.id) || slug,
    slug,
    title,
    excerpt: str(row.excerpt) || content[0] || title,
    content: content.length ? content : [str(row.excerpt) || title],
    category: str(row.category) || "Travel",
    readTime: str(row.readTime) || "5 min read",
    publishedDate: str(row.publishedDate) || str(row.date) || "1970-01-01",
    author: {
      name: str(author.name) || str(row.authorName) || "SpiceTrip Editorial",
      role: str(author.role) || str(row.authorRole) || "Travel Curator",
    },
    image: str(row.image),
  };
}

function testimonialFromCms(raw) {
  const row = asRecord(raw);
  const quote = str(row.quote);
  const author = str(row.author) || str(row.name);
  if (!quote || !author) return null;
  const ratingRaw = Math.round(num(row.rating));
  return {
    id: str(row.id) || author,
    quote,
    author,
    location: str(row.location),
    destination: str(row.destination) || str(row.service),
    rating: ratingRaw >= 1 && ratingRaw <= 5 ? ratingRaw : 5,
    tripType: str(row.tripType) || str(row.designation),
    date: str(row.date),
  };
}

function homepageFromCms(raw) {
  const row = asRecord(raw);
  if (!Object.keys(row).length) return null;
  const hero = asRecord(row.hero);
  const featured = asRecord(hero.featuredDestination);
  const stats = asRecord(row.stats);
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
              usdPrice: str(featured.usdPrice),
              image: str(featured.image) || str(featured.bgImage),
              slug: str(featured.slug),
              inclusions: str(featured.inclusions),
              scriptText: str(featured.scriptText),
            }
          : undefined,
      highlights: Array.isArray(hero.highlights) ? hero.highlights : undefined,
    },
    stats: {
      travelers: str(stats.travelers),
      destinations: str(stats.destinations),
      satisfaction: str(stats.satisfaction) || str(stats.customerFocused),
      years: str(stats.years) || (num(stats.years) ? String(num(stats.years)) : ""),
    },
    deals: Array.isArray(row.deals) ? row.deals : [],
    plans: Array.isArray(row.plans) ? row.plans : [],
    popularTours: Array.isArray(row.popularTours) ? row.popularTours : [],
    aboutBlurb: str(row.aboutBlurb) || undefined,
    videoUrl: str(row.videoUrl) || str(row.heroVideoId) || undefined,
    ctaLabel: str(row.ctaLabel) || undefined,
    ctaHref: str(row.ctaHref) || undefined,
  };
}

async function getPublished() {
  const url = env("NEXT_PUBLIC_SUPABASE_URL");
  const key = env("SUPABASE_SERVICE_ROLE_KEY");
  const siteId = env("CMS_SITE_ID") || "spice-trip";

  if (!url || !key) {
    console.error("SpiceTrip CMS: missing Supabase env on Vercel");
    return { packages: [], journal: [], testimonials: [], homepage: null };
  }

  const supabase = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const [projects, insights, testimonials, settings] = await Promise.all([
    supabase.from("projects").select("id, position, content").eq("site_id", siteId).order("position"),
    supabase.from("insights").select("id, position, content").eq("site_id", siteId).order("position"),
    supabase.from("testimonials").select("id, position, content").eq("site_id", siteId).order("position"),
    supabase.from("site_settings").select("content").eq("site_id", siteId).maybeSingle(),
  ]);

  const failed = [projects.error, insights.error, testimonials.error, settings.error].find(Boolean);
  if (failed) {
    console.error("SpiceTrip CMS:", failed.message);
    return { packages: [], journal: [], testimonials: [], homepage: null };
  }

  return {
    packages: (projects.data || []).map((row) => packageFromCms(row.content)).filter(Boolean),
    journal: (insights.data || []).map((row) => articleFromCms(row.content)).filter(Boolean),
    testimonials: (testimonials.data || []).map((row) => testimonialFromCms(row.content)).filter(Boolean),
    homepage: settings.data ? homepageFromCms(settings.data.content) : null,
  };
}

module.exports = async function handler(_req, res) {
  try {
    const published = await getPublished();
    res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate=30");
    res.status(200).json(published);
  } catch (error) {
    console.error("SpiceTrip CMS API:", error);
    res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate=30");
    res.status(200).json({ packages: [], journal: [], testimonials: [], homepage: null });
  }
};
