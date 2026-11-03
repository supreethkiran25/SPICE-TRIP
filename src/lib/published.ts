import { cache } from "react";
import {
  articleFromCms,
  homepageFromCms,
  packageFromCms,
  testimonialFromCms,
} from "./cms-map";
import {
  getPublishedFallback,
  mergeHomepage,
  type HomepageContent,
  type PublishedContent,
} from "./published-local";
import { cmsSiteId, createCmsClient } from "./supabase";
import type { JournalArticle, Testimonial, TravelPackage } from "@/types";

export type { HomepageContent, PublishedContent } from "./published-local";
export { getPublishedFallback } from "./published-local";

type CmsRow = { id: string; content: unknown };

async function loadRemote(): Promise<{
  packages: TravelPackage[];
  journal: JournalArticle[];
  testimonials: Testimonial[];
  homepage: HomepageContent | null;
} | null> {
  const supabase = createCmsClient();
  if (!supabase) return null;
  const siteId = cmsSiteId();

  const [projects, insights, testimonials, settings] = await Promise.all([
    supabase.from("projects").select("id, position, content").eq("site_id", siteId).order("position"),
    supabase.from("insights").select("id, position, content").eq("site_id", siteId).order("position"),
    supabase
      .from("testimonials")
      .select("id, position, content")
      .eq("site_id", siteId)
      .order("position"),
    supabase.from("site_settings").select("content").eq("site_id", siteId).maybeSingle(),
  ]);

  const failed = [projects.error, insights.error, testimonials.error, settings.error].find(Boolean);
  if (failed) {
    console.error("SpiceTrip CMS:", failed.message);
    return null;
  }

  return {
    packages: ((projects.data ?? []) as CmsRow[])
      .map((row) => packageFromCms(row.content))
      .filter((item): item is TravelPackage => Boolean(item)),
    journal: ((insights.data ?? []) as CmsRow[])
      .map((row) => articleFromCms(row.content))
      .filter((item): item is JournalArticle => Boolean(item)),
    testimonials: ((testimonials.data ?? []) as CmsRow[])
      .map((row) => testimonialFromCms(row.content))
      .filter((item): item is Testimonial => Boolean(item)),
    homepage: settings.data ? homepageFromCms(settings.data.content) : null,
  };
}

export const getPublished = cache(async (): Promise<PublishedContent> => {
  const local = getPublishedFallback();
  const remote = await loadRemote();
  if (!remote) return local;

  return {
    packages: remote.packages.length ? remote.packages : local.packages,
    journal: remote.journal.length ? remote.journal : local.journal,
    testimonials: remote.testimonials.length ? remote.testimonials : local.testimonials,
    homepage: mergeHomepage(remote.homepage, local.homepage),
  };
});
