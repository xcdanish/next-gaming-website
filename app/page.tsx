"use client";

import HeroCarouselSection from "@sections/HeroCarouselSection";
import { games } from "@lib/games-data";
import ComingSoonSection from "@sections/ComingSoonSection";
import GamesSection from "@sections/GamesSection";
import StudioSection from "@sections/StudioSection";

// Existing but potentially unused sections (keeping imports for commented components)
import AboutSection from "@sections/AboutSection";

export default function Home() {
  const roosterGame = games.find((g) => g.slug === "rooster-rumble");

  return (
    <main className="overflow-x-hidden">
      {/* 2. Hero Carousel Section */}
      <HeroCarouselSection images={["/banner/rooster.jpeg"]} />

      {/* 3. About Game - Prompt game, roster rumble */}
      {roosterGame?.about && (
        <AboutSection {...roosterGame.about} showBackButton={false} />
      )}

      {/* 4. Coming Soon Notify - match with current existing out theme */}
      <ComingSoonSection />

      {/* 5. Our Game - 2 roster rumble - rot in hell */}
      <GamesSection />

      {/* 6. Studio timeline with core team */}
      <StudioSection />
    </main>
  );
}
