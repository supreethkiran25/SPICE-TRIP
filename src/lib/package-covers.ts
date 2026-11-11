/** Location-accurate cover images for package cards. */
const BY_SLUG: Record<string, string> = {
  "explore-vietnam": "/images/destinations/vietnam.jpg",
  "maldives-luxury-escape": "/images/destinations/maldives.jpg",
  "bali-classic-tour": "/images/destinations/bali.jpg",
  "bali-luxury-honeymoon": "/images/destinations/bali.jpg",
  "dubai-tour": "/images/destinations/dubai.jpg",
  "thailand-tour": "/images/destinations/thailand.jpg",
  "kerala-tour": "/images/destinations/kerala.jpg",
  "nepal-himalayan-kingdom": "/images/destinations/nepal.jpg",
  "singapore-tour":
    "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
  "andaman-islands":
    "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80",
  "krabi-phuket":
    "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80",
  "mauritius-island-paradise":
    "https://images.unsplash.com/photo-1586861635166-c0b2225c7b80?auto=format&fit=crop&w=1200&q=80",
  "himachal-pradesh-tour":
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
  "rajasthan-royal-heritage":
    "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
  "gangtok-darjeeling-tour":
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
};

const BY_DESTINATION: Record<string, string> = {
  vietnam: "/images/destinations/vietnam.jpg",
  maldives: "/images/destinations/maldives.jpg",
  bali: "/images/destinations/bali.jpg",
  dubai: "/images/destinations/dubai.jpg",
  thailand: "/images/destinations/thailand.jpg",
  kerala: "/images/destinations/kerala.jpg",
  nepal: "/images/destinations/nepal.jpg",
  singapore:
    "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
  andaman:
    "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80",
  "krabi & phuket":
    "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80",
  mauritius:
    "https://images.unsplash.com/photo-1586861635166-c0b2225c7b80?auto=format&fit=crop&w=1200&q=80",
  "himachal pradesh":
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
  rajasthan:
    "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
  "gangtok & darjeeling":
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
};

export function getPackageCover(slug: string, destination?: string, fallback?: string) {
  if (BY_SLUG[slug]) return BY_SLUG[slug];
  const key = (destination || "").trim().toLowerCase();
  if (key && BY_DESTINATION[key]) return BY_DESTINATION[key];
  return fallback || "/images/destinations/vietnam.jpg";
}
