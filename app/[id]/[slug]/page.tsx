"use client";

import React, { use } from "react";
import { games } from "@lib/games-data";
import { Typography } from "@ui-elements/Typography";
import { CyberButton } from "@ui-elements/CyberButton";
import HeroCarouselSection from "@sections/HeroCarouselSection";
import AboutSection from "@sections/AboutSection";
import GameMissionSection from "@sections/GameMissionSection";
import Link from "next/link";
import { motion } from "framer-motion";

interface GamePageProps {
  params: Promise<{ id: string; slug: string }>;
}

export default function GamePage({ params }: GamePageProps) {
  const { id, slug } = use(params);
  const game = games.find((g) => g.id === id && g.slug === slug);

  if (!game) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--bg-primary)] text-white p-6">
        <Typography variant="h2" className="mb-4">
          404 - LEGEND NOT FOUND
        </Typography>
        <Typography
          variant="b2"
          className="text-gray-500 mb-8 max-w-md text-center"
        >
          The transmission was lost in the void. This game doesn&apos;t exist in
          our current dimension.
        </Typography>
        <Link href="/">
          <CyberButton>BACK TO REALITY</CyberButton>
        </Link>
      </div>
    );
  }

  return (
    <>
      <HeroCarouselSection
        title1={game.title1}
        title2={game.title2}
        subtitle={game.subtitle}
        description={game.description}
        images={game.images}
        buttonTitle="EXPLORE MORE"
      />

      {/* Dynamic About Section */}
      {game.about && <AboutSection {...game.about} showBackButton={true} />}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        <GameMissionSection
          inDevelopment={game.inDevelopment}
          rating={game.rating}
          platforms={game.platforms}
          missionDescription={game.missionDescription}
          genre={game.genre}
          engine={game.engine}
          region={game.region}
        />
      </div>

      {/* Steam Widget Section */}
      {game.steamWidgetId && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-6 pb-24 flex justify-center"
        >
          <iframe
            src={`https://store.steampowered.com/widget/${game.steamWidgetId}/`}
            frameBorder="0"
            width="646"
            height="190"
            className="rounded-md border border-white/5 shadow-2xl bg-black/20 backdrop-blur-sm overflow-hidden"
          ></iframe>
        </motion.div>
      )}

      {/* Aesthetic Gradients */}
      <div className="fixed top-0 right-0 w-[50vw] h-[50vw] bg-[var(--accent-red)]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[40vw] h-[40vw] bg-blue-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    </>
  );
}
