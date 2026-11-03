import Link from "next/link";
import { Compass, ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-background min-h-[75vh] flex items-center justify-center py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 text-xs font-sans uppercase tracking-[0.25em] text-terracotta font-semibold mb-4">
          <Compass className="w-4 h-4" />
          <span>Coordinate Uncharted • 404</span>
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl font-bold text-forest-deep mb-4">
          The path has wandered.
        </h1>

        <p className="text-sm text-foreground-muted leading-relaxed mb-8">
          The itinerary or coordinate you are seeking is not available on this path. Allow us to escort you back to our curated journeys and signature destinations.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-forest hover:bg-terracotta text-white font-sans text-xs font-semibold uppercase tracking-widest px-7 py-3.5 rounded-sm transition-all duration-300 shadow-md"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Discover</span>
          </Link>
          <Link
            href="/packages"
            className="inline-flex items-center space-x-2 border border-forest/40 hover:border-forest text-forest hover:bg-forest hover:text-white font-sans text-xs font-semibold uppercase tracking-widest px-7 py-3.5 rounded-sm transition-colors"
          >
            <span>Browse All Packages</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

