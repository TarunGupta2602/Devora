// app/page.jsx — Server Component (SSG enabled)
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import WorkflowSection from "@/components/WorkflowSection";
import FaqSection from "@/components/FaqSection";
import Showcase from "@/components/Showcase";

import HomeClientSections from "@/components/HomeClientSections";

export const metadata = {
  title: "Team Devora - Award-Winning Web Development & Design Agency",
  description: "Creating innovative, high-performance websites that drive real business results. Trusted by 150+ businesses across 50+ countries. Average 250% increase in conversions.",
};

export const revalidate = 3600; // ISR — rebuild every hour

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <HomeClientSections /> {/* Lazy client-loaded sections */}
      <StatsSection />
      <FeaturesSection />
      <WorkflowSection />
      <FaqSection />
      <Showcase />
    </main>
  );
}
