import { createClient, type SupabaseClient } from "@supabase/supabase-js";

function env(name: string) {
  if (typeof process !== "undefined" && process.env?.[name]) {
    return process.env[name]?.trim() || "";
  }
  return "";
}

export function createCmsClient(): SupabaseClient | null {
  const url = env("NEXT_PUBLIC_SUPABASE_URL");
  const key = env("SUPABASE_SERVICE_ROLE_KEY");
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export function cmsSiteId() {
  return env("CMS_SITE_ID") || "spice-trip";
}
