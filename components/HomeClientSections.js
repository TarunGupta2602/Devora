"use client";

import dynamic from "next/dynamic";

// Lazy load heavy visual sections
const PortfolioSection = dynamic(() => import("@/components/PortfolioSection"), { ssr: false });
const PremiumVisuals = dynamic(() => import("@/components/PremiumVisuals"), { ssr: false });

export default function HomeClientSections() {
  return (
    <>
      <PortfolioSection />
      <PremiumVisuals />
    </>
  );
}
