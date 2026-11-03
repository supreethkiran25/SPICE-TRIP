/**
 * One-time (or re-runnable) upsert of SpiceTrip static content into the shared ALL CMS Supabase project.
 *
 * Usage:
 *   npm run seed:cms
 *
 * Requires env: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, CMS_SITE_ID=spice-trip
 */
import { readFileSync, existsSync } from "fs";
import { resolve } from "path";
import { createClient } from "@supabase/supabase-js";
import { PACKAGES } from "../src/lib/data/packages";
import { JOURNAL_ARTICLES } from "../src/lib/data/journal";
import { TESTIMONIALS } from "../src/lib/data/testimonials";
import { fileHomepage } from "../src/lib/published-local";

function loadEnvFile(fileName: string) {
  const filePath = resolve(process.cwd(), fileName);
  if (!existsSync(filePath)) return;
  for (const line of readFileSync(filePath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq <= 0) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvFile(".env.local");
loadEnvFile(".env");

const SITE_ID = process.env.CMS_SITE_ID?.trim() || "spice-trip";
const SITE_NAME = "SpiceTrip";
const SITE_DOMAIN = "spice-trip.vercel.app";

function env(name: string) {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Missing required env: ${name}`);
  return value;
}

function packageContent(pkg: (typeof PACKAGES)[number], index: number) {
  return {
    // Full TravelPackage shape (preferred by the live site mapper)
    ...pkg,
    // ProjectContent aliases so ALL CMS Layouts list/forms show something useful
    name: pkg.title,
    tagline: pkg.destination,
    heroImage: pkg.images[0] || "",
    gallery: pkg.images,
    pricePerSqft: pkg.startingPrice || 0,
    priceLabel: pkg.startingPrice ? `₹${pkg.startingPrice.toLocaleString("en-IN")}` : "Enquire",
    amenities: pkg.inclusions,
    facilities: pkg.exclusions,
    location: {
      area: pkg.region,
      city: pkg.country,
      coordinates: { lat: 0, lng: 0 },
    },
    plotSizes: [`${pkg.duration.nights}N / ${pkg.duration.days}D`],
    listingDescription: pkg.description,
    filters: [],
    approvals: [],
    nearbyLandmarks: pkg.category,
    spotlight: Boolean(pkg.featured) && index < 3,
    brochureUrl: "",
    youtubeShortId: "",
    youtubeGalleryIds: [],
    mapStatus: "running",
    showOnLayouts: true,
  };
}

function insightContent(article: (typeof JOURNAL_ARTICLES)[number]) {
  return {
    ...article,
    date: article.publishedDate,
    body: article.content,
    source: "",
    authorName: article.author.name,
    authorRole: article.author.role,
  };
}

function testimonialContent(item: (typeof TESTIMONIALS)[number]) {
  return {
    id: item.id,
    name: item.author,
    author: item.author,
    quote: item.quote,
    location: item.location,
    service: item.destination,
    destination: item.destination,
    designation: item.tripType,
    tripType: item.tripType,
    rating: item.rating,
    date: item.date,
    image: "",
    verified: true,
  };
}

async function main() {
  const url = env("NEXT_PUBLIC_SUPABASE_URL");
  const key = env("SUPABASE_SERVICE_ROLE_KEY");
  const supabase = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const siteUpsert = await supabase.from("sites").upsert(
    { id: SITE_ID, name: SITE_NAME, domain: SITE_DOMAIN },
    { onConflict: "id" },
  );
  if (siteUpsert.error) throw new Error(`sites: ${siteUpsert.error.message}`);

  const now = new Date().toISOString();

  for (let i = 0; i < PACKAGES.length; i++) {
    const pkg = PACKAGES[i];
    const { error } = await supabase.from("projects").upsert({
      site_id: SITE_ID,
      id: pkg.id,
      position: i,
      content: packageContent(pkg, i),
      updated_at: now,
    });
    if (error) throw new Error(`projects ${pkg.id}: ${error.message}`);
  }

  for (let i = 0; i < JOURNAL_ARTICLES.length; i++) {
    const article = JOURNAL_ARTICLES[i];
    const { error } = await supabase.from("insights").upsert({
      site_id: SITE_ID,
      id: article.id,
      position: i,
      content: insightContent(article),
      updated_at: now,
    });
    if (error) throw new Error(`insights ${article.id}: ${error.message}`);
  }

  for (let i = 0; i < TESTIMONIALS.length; i++) {
    const item = TESTIMONIALS[i];
    const { error } = await supabase.from("testimonials").upsert({
      site_id: SITE_ID,
      id: item.id,
      position: i,
      content: testimonialContent(item),
      updated_at: now,
    });
    if (error) throw new Error(`testimonials ${item.id}: ${error.message}`);
  }

  const { error: settingsError } = await supabase.from("site_settings").upsert({
    site_id: SITE_ID,
    content: {
      ...fileHomepage,
      heroVideoId: fileHomepage.videoUrl || "",
      stats: {
        ...fileHomepage.stats,
        years: Number(String(fileHomepage.stats.years).replace(/\D/g, "")) || 20,
        layouts: Number(String(fileHomepage.stats.destinations).replace(/\D/g, "")) || 150,
        customers: Number(String(fileHomepage.stats.travelers).replace(/\D/g, "")) || 25000,
        customerFocused: fileHomepage.stats.satisfaction,
      },
    },
    updated_at: now,
  });
  if (settingsError) throw new Error(`site_settings: ${settingsError.message}`);

  console.log(
    `Seeded SpiceTrip CMS (${SITE_ID}): ${PACKAGES.length} packages, ${JOURNAL_ARTICLES.length} journal, ${TESTIMONIALS.length} testimonials, homepage settings.`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
