# SpiceTrip

Official SpiceTrip website (IATA travel agency · Safe Wheels Group). Live at [spice-trip.vercel.app](https://spice-trip.vercel.app).

## Content: ALL CMS

Editors manage live site content in the shared **ALL CMS** studio (same Supabase project as Open Jeep Tours / Safe Wheels Group). No redeploy is required for content edits — the site reads CMS data with a short CDN cache (~10–30s).

| ALL CMS screen | SpiceTrip surface |
| --- | --- |
| **Packages** (Layouts / `projects`) | Popular Tours, Top Deals, `/packages`, `/packages/[slug]`, honeymoon & destination filters |
| **Journal** (Insights) | `/blog`, `/blog/[slug]` |
| **Reviews** (Testimonials) | Home “What Travelers Say” |
| **Homepage** (`site_settings`) | Hero, stats, deals, plans, popular tours, video |

Office / contact / social stay in `src/lib/data/company.ts` unless you later move them into settings.

### Vercel env (spice-trip.vercel.app)

Set these on the Vercel project (Production + Preview):

```
NEXT_PUBLIC_SUPABASE_URL=<shared ALL CMS project URL>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon key, optional for this site>
SUPABASE_SERVICE_ROLE_KEY=<service role — server only>
CMS_SITE_ID=spice-trip
```

`SUPABASE_SERVICE_ROLE_KEY` must never be prefixed with `NEXT_PUBLIC_` or imported into client components. The browser only calls `/api/published`.

### Local fallbacks

If Supabase env is missing or a table is empty, the site falls back to static files under `src/lib/data/` (and homepage defaults in `src/lib/published-local.ts`).

### Seed current content into CMS

```bash
cp .env.example .env.local   # fill Supabase + CMS_SITE_ID=spice-trip
npm run seed:cms
```

This upserts packages → `projects`, journal → `insights`, reviews → `testimonials`, and homepage → `site_settings` for `site_id=spice-trip`.

### Dev

```bash
npm install
npm run dev
```

Check live CMS merge: `GET /api/published` (Cache-Control `s-maxage=10`).
