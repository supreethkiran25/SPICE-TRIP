"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Play, X, ArrowRight, CheckCircle2 } from "lucide-react";
import { useCms } from "@/components/cms/CmsProvider";

function youtubeEmbedId(raw?: string) {
  if (!raw) return "Scxs7L0vhZ4";
  const value = raw.trim();
  if (/^[\w-]{11}$/.test(value)) return value;
  try {
    const url = new URL(value.startsWith("http") ? value : `https://${value}`);
    if (url.hostname.includes("youtu.be")) return url.pathname.replace("/", "") || "Scxs7L0vhZ4";
    return url.searchParams.get("v") || value.split("/").pop() || "Scxs7L0vhZ4";
  } catch {
    return "Scxs7L0vhZ4";
  }
}

export default function AdventureVideoBanner() {
  const { homepage } = useCms();
  const [videoOpen, setVideoOpen] = useState(false);
  const videoId = useMemo(() => youtubeEmbedId(homepage.videoUrl), [homepage.videoUrl]);
  const ctaHref = homepage.ctaHref || "/packages";
  const ctaLabel = homepage.ctaLabel || "Explore Now";

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl min-h-[280px] sm:min-h-[340px] flex items-center justify-between p-6 sm:p-12">
        {/* Background Panoramic Aerial Island Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=70"
            alt="Scenic tropical beach and sandbar aerial landscape"
            fill
            sizes="100vw"
            quality={65}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/90 via-[#111827]/60 to-[#111827]/80" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          {/* Left: Dual Typography Headline */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Your next adventure
              <br />
              <span className="font-script text-[#FBBF24] text-4xl sm:text-5xl lg:text-6xl font-normal drop-shadow-md">
                starts here!
              </span>
            </h2>
          </div>

          {/* Center: Pulsing Interactive Play Button */}
          <div className="flex items-center justify-center my-2 md:my-0">
            <button
              onClick={() => setVideoOpen(true)}
              className="group relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/25 backdrop-blur-md border border-white/50 flex items-center justify-center text-white hover:bg-[#D31F25] hover:border-[#D31F25] shadow-2xl transition-all duration-300 transform hover:scale-110"
              aria-label="Play travel showcase video"
            >
              {/* Pulse animation ring */}
              <span className="absolute inset-0 rounded-full bg-white/30 animate-ping opacity-75" />
              <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5 relative z-10" />
            </button>
          </div>

          {/* Right: Feature Highlights & CTA */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-4">
            <div className="space-y-1.5 text-xs sm:text-sm font-semibold text-white/90">
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#FBBF24]" />
                <span>Amazing destinations</span>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#FBBF24]" />
                <span>Unbeatable bespoke prices</span>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#FBBF24]" />
                <span>Memories for a lifetime</span>
              </div>
            </div>

            <Link
              href={ctaHref}
              className="inline-flex items-center space-x-2 bg-[#D31F25] hover:bg-[#B91C1C] text-white px-7 py-3 rounded-full font-bold text-xs sm:text-sm shadow-lg shadow-red-600/30 hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <span>{ctaLabel === "Explore Journeys" ? "Explore Now" : ctaLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Interactive Video Modal */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-video">
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black text-white hover:text-[#FBBF24] transition-colors"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=0&controls=1&rel=0`}
              title="SpiceTrip Global Wanderlust Montage"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}

