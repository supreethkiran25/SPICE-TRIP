"use client";

import { useEffect, useRef, useState } from "react";
import { Star } from "@phosphor-icons/react";
import { TESTIMONIALS } from "@/lib/data/testimonials";

function cleanQuote(quote: string) {
  return quote
    .replace(/—/g, ", ")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export default function SocialProof() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const stories = TESTIMONIALS.slice(0, 3).map((t) => ({
    ...t,
    quote: cleanQuote(t.quote),
  }));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#FAF9F5] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[680px] mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#18181B] mb-4"
            style={{ textWrap: "balance" }}
          >
            Travelers who booked once, then came back
          </h2>
          <p className="text-lg text-[#52525B] leading-7" style={{ textWrap: "pretty" }}>
            Real trips from Mysore, Bangalore, and Mangalore families and couples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <article
              key={story.id}
              style={{ transitionDelay: `${index * 90}ms` }}
              className={`rounded-2xl border border-[#E7E5E4] bg-white p-6 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                visible
                  ? "translate-y-0 blur-0 opacity-100"
                  : "translate-y-16 blur-md opacity-0"
              }`}
            >
              <div className="flex items-center gap-1 mb-4 text-[#D31F25]">
                {Array.from({ length: story.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4" weight="fill" />
                ))}
              </div>
              <p
                className="text-base text-[#3F3F46] leading-6 mb-6"
                style={{ textWrap: "pretty" }}
              >
                {story.quote}
              </p>
              <div>
                <p className="text-sm font-semibold text-[#18181B]">{story.author}</p>
                <p className="text-sm text-[#71717A]">
                  {story.location} · {story.tripType}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
