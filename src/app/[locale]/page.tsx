import Hero3D from "@/components/home/Hero3D";
import AboutCompany from "@/components/home/AboutCompany";
import WhyBookStats from "@/components/home/WhyBookStats";
import TourCategories from "@/components/home/TourCategories";
import UnforgettablePackages from "@/components/home/UnforgettablePackages";
import TailorMade from "@/components/home/TailorMade";
import ExclusiveExperiences from "@/components/home/ExclusiveExperiences";
import RealStories from "@/components/home/RealStories";
import Sustainability from "@/components/home/Sustainability";
import FaqAccordion from "@/components/home/FaqAccordion";
import NewsAndVisuals from "@/components/home/NewsAndVisuals";

export default function HomePage() {
  return (
    <>
      <Hero3D />
      <AboutCompany />
      <WhyBookStats />
      <TourCategories />
      <UnforgettablePackages />
      <TailorMade />
      <ExclusiveExperiences />
      <RealStories />
      <Sustainability />
      <FaqAccordion />
      <NewsAndVisuals />
    </>
  );
}
