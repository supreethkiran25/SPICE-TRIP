import Hero from "@/components/home/Hero";
import TravelSearch from "@/components/home/TravelSearch";
import PopularDestinations from "@/components/home/PopularDestinations";
import WhyTravelWithUs from "@/components/home/WhyTravelWithUs";
import TripRecommendationWidget from "@/components/home/TripRecommendationWidget";
import TopDeals from "@/components/home/TopDeals";
import AdventureVideoBanner from "@/components/home/AdventureVideoBanner";
import TravelerReviews from "@/components/home/TravelerReviews";
import ChoosePlan from "@/components/home/ChoosePlan";
import OurPartnersCarousel from "@/components/home/OurPartnersCarousel";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TravelSearch />
      <PopularDestinations />
      <WhyTravelWithUs />
      <TripRecommendationWidget />
      <TopDeals />
      <AdventureVideoBanner />
      <TravelerReviews />
      <ChoosePlan />
      <OurPartnersCarousel />
    </>
  );
}
