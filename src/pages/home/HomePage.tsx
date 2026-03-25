import React from "react";
import ContactSection from "../../components/ContactSection";
import "../../styles/main.css";
import { useHomeNavigation } from "./hooks/useHomeNavigation";
import {
  HeroSection,
  PhilosophySection,
  ReviewsSection,
  ServicesSection,
  SkillsSection,
  WorkSection,
} from "./sections";

const HomePage: React.FC = () => {
  const { scrollTo } = useHomeNavigation();

  return (
    <div className="homepage homepage--studio page-content">
      <HeroSection scrollTo={scrollTo} />
      <ServicesSection />
      <PhilosophySection />
      <WorkSection />
      <SkillsSection />
      <ReviewsSection scrollTo={scrollTo} />
      <ContactSection />
    </div>
  );
};

export default HomePage;
