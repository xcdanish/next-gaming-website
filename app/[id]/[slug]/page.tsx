"use client";

import React, { use } from "react";
import { games } from "@/lib/games-data";
import { Typography } from "@ui-elements/Typography";
import { CyberButton } from "@ui-elements/CyberButton";
import HeroSection from "@sections/HeroSection";
import AboutGameSection from "@sections/AboutGameSection";
import AboutSection from "@sections/AboutSection";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Globe, Cpu, Gamepad2 } from "lucide-react";

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
      {/* Dynamic Hero Section */}
      <HeroSection
        title1={game.title1}
        title2={game.title2}
        subtitle={game.subtitle}
        description={game.description}
        video={game.video}
        poster={game.image}
        buttonTitle="EXPLORE MORE"
      />
      {/* Conditional About Section */}
      {slug === "rooster-rumble" && <AboutGameSection />}
      {slug === "rot-in-hell" && <AboutSection />}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        {/* Navigation - Positioned slightly above Hero text if needed, or below */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="font-medium tracking-widest text-xs uppercase">
              RETURN TO HUB
            </span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
          {/* Detailed Specs and Rating */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap gap-6 mb-12 text-gray-400 bg-white/5 p-6 rounded-sm border border-white/5">
                <div className="flex items-center gap-2">
                  <Star size={20} className="text-[var(--accent-red)] fill-[var(--accent-red)]" />
                  <span className="text-lg font-bold text-white">
                    {game.rating}{" "}
                    <span className="text-xs text-gray-500 font-normal">
                      CRITICAL RATING
                    </span>
                  </span>
                </div>
                <div className="h-8 w-[1px] bg-white/10 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <Gamepad2 size={20} className="text-[var(--accent-red)]" />
                  <span className="text-sm font-bold uppercase tracking-wider text-white">
                    {game.platforms.join(" • ")}
                  </span>
                </div>
              </div>

              <Typography
                variant="h3"
                className="mb-8 border-l-4 border-[var(--accent-red)] pl-6"
              >
                THE MISSION
              </Typography>

              <Typography
                variant="b1"
                className="text-gray-300 max-w-3xl mb-12 leading-relaxed text-xl"
              >
                {game.description} Additional intel suggests this title pushes
                the boundaries of {game.genre} with state-of-the-art mechanics
                and immersive storytelling.
              </Typography>
            </motion.div>
          </div>

          {/* Side Specs Box */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#121212] border border-white/5 p-8 rounded-sm backdrop-blur-md shadow-2xl shadow-red-950/20"
            >
              <Typography
                variant="h5"
                className="mb-8 border-b border-white/10 pb-4"
              >
                SYSTEM INTEL
              </Typography>

              <div className="space-y-4">
                <div className="flex justify-between items-center bg-white/5 p-4 rounded border border-white/5">
                  <div className="flex items-center gap-3">
                    <Cpu size={18} className="text-[var(--accent-red)]" />
                    <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">
                      ENGINE
                    </span>
                  </div>
                  <span className="text-[12px] font-bold">UNREAL 5.4</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-4 rounded border border-white/5">
                  <div className="flex items-center gap-3">
                    <Globe size={18} className="text-[var(--accent-red)]" />
                    <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">
                      REGION
                    </span>
                  </div>
                  <span className="text-[12px] font-bold">
                    GLOBAL TRANSMISSION
                  </span>
                </div>
              </div>

              <div className="mt-12">
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] bg-[var(--accent-red)]/10 text-[var(--accent-red)] px-3 py-1 border border-[var(--accent-red)]/20 rounded-full uppercase font-bold tracking-tight">
                    {game.tag}
                  </span>
                  <span className="text-[10px] bg-white/5 px-3 py-1 border border-white/10 rounded-full uppercase font-bold text-gray-400">
                    DIRECTX 12
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Aesthetic Gradients */}
      <div className="fixed top-0 right-0 w-[50vw] h-[50vw] bg-[var(--accent-red)]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[40vw] h-[40vw] bg-blue-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    </>
  );
}
