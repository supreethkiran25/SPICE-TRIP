"use client";

import Link from "next/link";
import { Star, Quote, Users, MapPin, ThumbsUp, ArrowRight } from "lucide-react";

interface Review {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number;
  trip?: string;
  avatar: string;
}

const REAL_REVIEWS: Review[] = [
  {
    id: "rev-1",
    quote:
      "Our Vietnam journey curated by SpiceTrip exceeded every expectation. From the luxury wooden junk in Halong Bay to our private guide in Hoi An, every detail was orchestrated with calm perfection.",
    author: "Dr. K. S. Venkatesh & Family",
    location: "Mysore, Karnataka",
    trip: "Explore Vietnam · 6 Days",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&q=70",
  },
  {
    id: "rev-2",
    quote:
      "We trusted SpiceTrip with our Maldives honeymoon and it was truly magical. The overwater villa, private sandbank dinner, and seaplane transfers were handled seamlessly.",
    author: "Prashanth & Ananya Rao",
    location: "Indiranagar, Bangalore",
    trip: "Maldives Luxury Escape",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&q=70",
  },
  {
    id: "rev-3",
    quote:
      "The Safe Wheels heritage really shows in the ground execution. Our chauffeur in Himachal was exceptional—courteous, cautious on mountain passes, and knowledgeable about local temples.",
    author: "Girish N. Shetty",
    location: "Mangalore, Karnataka",
    trip: "Himachal Pradesh Tour",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&q=70",
  },
  {
    id: "rev-4",
    quote:
      "For our executive leadership retreat in Dubai, SpiceTrip managed flights, Burj Khalifa VIP passes, and private desert safari buyouts without a single hitch.",
    author: "Sujata Hegde",
    location: "Whitefield, Bangalore",
    trip: "Dubai Business & Leisure",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&q=70",
  },
  {
    id: "rev-5",
    quote:
      "Highly recommended! Booking with SpiceTrip gave us complete peace of mind. Will definitely book again!",
    author: "Vikram Sengupta",
    location: "London / Bangalore",
    trip: "International Voyage",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=96&q=70",
  },
  {
    id: "rev-6",
    quote:
      "The private Halong Bay cruise arranged by SpiceTrip was exceptional. Authentic local cuisine and 5-star guidance throughout.",
    author: "Ananya Deshmukh",
    location: "Mumbai, India",
    trip: "Halong & Hanoi",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=96&q=70",
  },
  {
    id: "rev-7",
    quote:
      "Safe Wheels car rental and Bali villa transfers were flawless. The staff in Mysore handled our visas in record time.",
    author: "Siddharth Rao",
    location: "Mysore, India",
    trip: "Bali Classic Tour",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=96&q=70",
  },
];

function ReviewCard({ rev }: { rev: Review }) {
  return (
    <article className="shrink-0 w-[300px] sm:w-[340px] bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
      <div>
        <div className="text-[#D31F25]/25 mb-3">
          <Quote className="w-7 h-7 fill-current" />
        </div>
        <p className="text-sm text-gray-700 leading-relaxed italic mb-4 line-clamp-5">
          “{rev.quote}”
        </p>
        <div className="flex items-center space-x-1 text-[#FBBF24] mb-3">
          {[...Array(rev.rating)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-current" />
          ))}
        </div>
        {rev.trip && (
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-[#D31F25]/80 bg-red-50 px-2.5 py-1 rounded-full mb-4">
            {rev.trip}
          </span>
        )}
      </div>

      <div className="flex items-center space-x-3 pt-3 border-t border-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={rev.avatar}
          alt=""
          width={36}
          height={36}
          loading="lazy"
          decoding="async"
          className="w-9 h-9 rounded-full object-cover ring-2 ring-red-50"
        />
        <div>
          <h4 className="text-xs font-bold text-[#18181B] leading-tight">{rev.author}</h4>
          <span className="text-[10px] text-gray-500">{rev.location}</span>
        </div>
      </div>
    </article>
  );
}

export default function TravelerReviews() {
  const loop = [...REAL_REVIEWS, ...REAL_REVIEWS];

  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden perf-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18181B]">
              What Travelers Say
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-xl">
              Real stories from travelers who explored the world with SpiceTrip & Safe Wheels
            </p>
          </div>
          <Link
            href="/about#testimonials"
            className="hidden sm:inline-flex items-center space-x-1 text-xs sm:text-sm font-bold text-[#D31F25] hover:text-[#B91C1C] transition-colors group shrink-0"
          >
            <span>View all reviews</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="relative mb-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="overflow-hidden">
          <div className="animate-marquee-slow flex items-stretch gap-5 px-4 hover:[animation-play-state:paused]">
            {loop.map((rev, i) => (
              <ReviewCard key={`${rev.id}-${i}`} rev={rev} />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 bg-gradient-to-br from-red-50/60 via-amber-50/40 to-orange-50/30 rounded-3xl p-5 sm:p-7 border border-red-100">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-[#D31F25] text-white flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-extrabold text-[#18181B]">25,000+</span>
              <span className="block text-xs font-semibold text-gray-600">Happy Travelers</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EA580C] text-white flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-extrabold text-[#18181B]">150+</span>
              <span className="block text-xs font-semibold text-gray-600">Destinations</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F59E0B] text-white flex items-center justify-center shrink-0">
              <ThumbsUp className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-extrabold text-[#18181B]">98%</span>
              <span className="block text-xs font-semibold text-gray-600">Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
