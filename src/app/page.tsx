import Hero from "@/components/home/Hero";
import PopularDestinations from "@/components/home/PopularDestinations";
import WhyTravelWithUs from "@/components/home/WhyTravelWithUs";
import AdventureVideoBanner from "@/components/home/AdventureVideoBanner";
import TravelerReviews from "@/components/home/TravelerReviews";
import OurPartnersCarousel from "@/components/home/OurPartnersCarousel";
import FinalCta from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PopularDestinations />
      <WhyTravelWithUs />
      <AdventureVideoBanner />
      <TravelerReviews />
      <OurPartnersCarousel />
      <FinalCta />
    </>
  );
}
