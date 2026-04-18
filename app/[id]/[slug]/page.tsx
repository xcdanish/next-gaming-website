"use client";

import React, { use, useState } from "react";
import { games } from "@lib/games-data";
import { Typography } from "@ui-elements/Typography";
import { CyberButton } from "@ui-elements/CyberButton";
import HeroCarouselSection from "@sections/HeroCarouselSection";
import AboutSection from "@sections/AboutSection";
import GameMissionSection from "@sections/GameMissionSection";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@ui-elements/SectionHeader";
import { ImageLightbox } from "@ui-elements/ImageLightbox";

interface GamePageProps {
  params: Promise<{ id: string; slug: string }>;
}

export default function GamePage({ params }: GamePageProps) {
  const { id, slug } = use(params);
  const game = games.find((g) => g.id === id && g.slug === slug);

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null && game?.images) {
      setSelectedImageIndex((selectedImageIndex + 1) % game.images.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null && game?.images) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + game.images.length) % game.images.length,
      );
    }
  };

  if (!game) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] p-6">
        <Typography variant="h2" className="mb-4">
          404 - TRANSMISSION LOST
        </Typography>
        <Typography
          variant="b2"
          className="text-[var(--text-secondary)] mb-8 max-w-md text-center"
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
            className="rounded-md border border-[var(--border-subtle)] shadow-2xl bg-[var(--bg-pill)] backdrop-blur-sm overflow-hidden"
          ></iframe>
        </motion.div>
      )}

      {/* Snapshots Gallery */}
      {game.images && game.images.length > 0 && (
        <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
          <SectionHeader showDivider={true}>
            <Typography variant="span" className="cyber-sweep">
              GAME
            </Typography>{" "}
            <Typography variant="span" className="cyber-sweep-red">
              SNAPSHOTS
            </Typography>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {game.images.map((img, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                onClick={() => openLightbox(i)}
                className="group relative aspect-video overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-pill)] cursor-zoom-in"
              >
                <Image
                  src={img}
                  alt={`${game.title} Snapshot ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                      <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
                      <path d="M3 16v3a2 2 0 0 0 2 2h3" />
                      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                      <polyline points="15 9 10 14 15 14" />
                      <polyline points="9 15 14 10 9 10" />
                    </svg>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </section>
      )}

      {/* Lightbox */}
      {game.images && (
        <ImageLightbox
          images={game.images}
          currentIndex={selectedImageIndex ?? 0}
          isOpen={selectedImageIndex !== null}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}

      {/* Aesthetic Gradients */}
      <div className="fixed top-0 right-0 w-[50vw] h-[50vw] bg-[var(--accent-red)]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[40vw] h-[40vw] bg-blue-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    </>
  );
}
