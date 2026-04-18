"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Variants } from "framer-motion";
import { Card, CardImage, CardContentOverlay } from "./Card";
import { CyberButton } from "@ui-elements/CyberButton";
import { Typography } from "@ui-elements/Typography";

interface GameCardProps {
  game: {
    id: string;
    slug: string;
    title: string;
    genre: string;
    description: string;
    image: string;
    rating: string;
    platforms: string[];
    buttonTitle: string;
    href: boolean;
  };
  variants?: Variants;
}

import styles from "@style/GameCard.module.css";

export const GameCard: React.FC<GameCardProps> = ({ game, variants }) => {
  const router = useRouter();

  const handleRedirect = () => {
    if (game.href) {
      router.push(`/${game.id}/${game.slug}`);
    }
  };

  return (
    <Card
      variants={variants}
      whileHover={{
        rotateX: 8,
        rotateY: -8,
        z: 30,
        transition: {
          duration: 0.4,
          ease: "easeOut",
        },
      }}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className="group"
    >
      <CardImage src={game.image} alt={game.title} />

      {/* Static Info (Visible when not hovered) */}
      <CardContentOverlay>
        <Typography variant="caption" className={styles.genreCaption}>
          {game.genre}
        </Typography>
        <Typography variant="h5" className={styles.cardTitle}>
          {game.title}
        </Typography>
      </CardContentOverlay>

      {/* Hover Info (Visible on hover) */}
      <CardContentOverlay isHovered>
        <Typography variant="caption" className={styles.genreCaptionHover}>
          {game.genre}
        </Typography>
        <Typography variant="h4" className={styles.cardTitleHover}>
          {game.title}
        </Typography>

        <Typography variant="b3" className={styles.cardDescription}>
          {game.description}
        </Typography>

        <div className={styles.platformRow}>
          {game.platforms.map((p) => (
            <Typography
              variant="caption"
              key={p}
              className={styles.platformPill}
            >
              {p}
            </Typography>
          ))}
        </div>

        <CyberButton onClick={handleRedirect}>{game.buttonTitle}</CyberButton>
      </CardContentOverlay>
    </Card>
  );
};
