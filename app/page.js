// app/page.jsx — Server Component (SSG enabled)
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import WorkflowSection from "@/components/WorkflowSection";
import FaqSection from "@/components/FaqSection";
import Showcase from "@/components/Showcase";

import HomeClientSections from "@/components/HomeClientSections";

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
