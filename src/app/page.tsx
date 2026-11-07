import Hero from "@/components/home/Hero";
import PopularDestinations from "@/components/home/PopularDestinations";
import WhyTravelWithUs from "@/components/home/WhyTravelWithUs";
import TravelerReviews from "@/components/home/TravelerReviews";
import OurPartnersCarousel from "@/components/home/OurPartnersCarousel";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PopularDestinations />
      <WhyTravelWithUs />
      <TravelerReviews />
      <OurPartnersCarousel />
    </>
  );
}
