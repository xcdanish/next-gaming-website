"use client";

import HeroSection from "@sections/HeroSection";
import AboutGameSection from "@sections/AboutGameSection";
import ComingSoonSection from "@sections/ComingSoonSection";
import GamesSection from "@sections/GamesSection";
import StudioSection from "@sections/StudioSection";

// Existing but potentially unused sections (keeping imports for commented components)
import AboutSection from "@sections/AboutSection";
import TeamSection from "@sections/TeamSection";
import FeaturesSection from "@sections/FeaturesSection";
import GallerySection from "@sections/GallerySection";
import CareersSection from "@sections/CareersSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. About Game - Prompt game, roster rumble */}
      <AboutGameSection />

      {/* 4. Coming Soon Notify - match with current existing out theme */}
      <ComingSoonSection />

      {/* 5. Our Game - 2 roster rumble - rot in hell */}
      <GamesSection />

      {/* 6. Studio timeline with core team */}
      <StudioSection />

      {/* --- Commented components (Do not remove) --- */}
      {/* <AboutSection /> */}
      {/* <TeamSection /> */}
      {/* <FeaturesSection /> */}
      {/* <GallerySection /> */}
      {/* <CareersSection /> */}
    </main>
  );
}

