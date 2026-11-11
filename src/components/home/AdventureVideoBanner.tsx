"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Play, X, ArrowRight } from "lucide-react";
import { useCms } from "@/components/cms/CmsProvider";

function youtubeEmbedId(raw?: string) {
  if (!raw) return "9Mbxfupo6Tw";
  const value = raw.trim();
  if (/^[\w-]{11}$/.test(value)) return value;
  try {
    const url = new URL(value.startsWith("http") ? value : `https://${value}`);
    if (url.hostname.includes("youtu.be"))
      return url.pathname.replace("/", "") || "9Mbxfupo6Tw";
    return url.searchParams.get("v") || value.split("/").pop() || "9Mbxfupo6Tw";
  } catch {
    return "9Mbxfupo6Tw";
  }
}

export default function AdventureVideoBanner() {
  const { homepage } = useCms();
  const [videoOpen, setVideoOpen] = useState(false);
  const videoId = useMemo(
    () => youtubeEmbedId(homepage.videoUrl),
    [homepage.videoUrl]
  );

  const bgEmbed = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1`;

  return (
    <section className="py-0">
      <div className="relative min-h-[360px] sm:min-h-[420px] md:min-h-[480px] flex items-center justify-center overflow-hidden bg-[#171717]">
        {/* Poster fallback while video loads */}
        <Image
          src="/images/destinations/maldives.jpg"
          alt=""
          fill
          sizes="100vw"
          quality={60}
          className="object-cover object-center"
          aria-hidden
        />

        {/* Muted looping YouTube background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <iframe
            src={bgEmbed}
            title="SpiceTrip journey background"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
          />
        </div>

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center text-white px-6 py-16 max-w-2xl mx-auto">
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="mx-auto mb-8 w-14 h-14 rounded-full bg-white text-[#171717] flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
            aria-label="Play video with sound"
          >
            <Play className="w-5 h-5 fill-current translate-x-0.5" />
          </button>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Journeys that stay with you
          </h2>

          <Link
            href="/contact#enquiry"
            className="inline-flex items-center gap-2 border border-white/80 hover:bg-white hover:text-[#171717] text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors"
          >
            Enquire
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {videoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden aspect-video">
            <button
              type="button"
              onClick={() => setVideoOpen(false)}
              className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/60 text-white"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
              title="SpiceTrip journeys"
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
