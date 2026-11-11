"use client";

interface Partner {
  id: string;
  name: string;
  image: string;
}

const PARTNERS: Partner[] = [
  {
    id: "incredible-india",
    name: "Ministry of Tourism Govt. of India",
    image: "/images/partners/incredible-india.png",
  },
  {
    id: "iata",
    name: "IATA",
    image: "/images/partners/iata.png",
  },
  {
    id: "tafi",
    name: "TAFI",
    image: "/images/partners/tafi.png",
  },
  {
    id: "flysmart",
    name: "flysmart Holidays",
    image: "/images/partners/flysmart.png",
  },
  {
    id: "jet-airways",
    name: "Jet Airways",
    image: "/images/partners/jet-airways.png",
  },
  {
    id: "iato",
    name: "IATO",
    image: "/images/partners/iato.png",
  },
  {
    id: "kstdc",
    name: "KSTDC",
    image: "/images/partners/kstdc.png",
  },
  {
    id: "jungle-lodges",
    name: "Jungle Lodges & Resorts",
    image: "/images/partners/jungle-lodges.png",
  },
  {
    id: "royal-caribbean",
    name: "Royal Caribbean",
    image: "/images/partners/royal-caribbean.png",
  },
  {
    id: "star-cruises",
    name: "Star Cruises",
    image: "/images/partners/star-cruises.png",
  },
];

export default function OurPartnersCarousel() {
  const loop = [...PARTNERS, ...PARTNERS];

  return (
    <section className="py-12 sm:py-14 bg-white border-t border-[#EFEDE8] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-[#171717] shrink-0 sm:pr-8 sm:border-r sm:border-[#E5E5E5]">
            Our partners
          </h2>
          <p className="text-xs text-[#A3A3A3] font-light">
            Airlines, tourism boards &amp; cruise partners we work with
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee-reverse flex items-center w-max hover:[animation-play-state:paused]">
          {loop.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="shrink-0 px-6 sm:px-8"
              title={partner.name}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={partner.image}
                alt={partner.name}
                width={160}
                height={64}
                loading="lazy"
                decoding="async"
                className="h-10 sm:h-12 w-auto max-w-[140px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
