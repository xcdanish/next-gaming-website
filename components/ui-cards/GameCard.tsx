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
        scale: 1.05,
        y: -12,
        backgroundColor: "var(--color-gray-darker)",
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 1,
        },
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className="group"
    >
      <CardImage src={game.image} alt={game.title} />

      {/* Tags */}
      {/* <CardTag side="left">{game.tag}</CardTag> */}
      {/* <CardTag side="right" variant="accent">
        ★ {game.rating}
      </CardTag> */}

      {/* Static Info (Visible when not hovered) */}
      <CardContentOverlay>
        <Typography
          variant="caption"
          style={{
            color: "var(--accent-red)",
            marginBottom: "0.3rem",
            fontSize: "0.62rem",
          }}
        >
          {game.genre}
        </Typography>
        <Typography
          variant="h5"
          style={{ color: "var(--text-primary)", lineHeight: 1.1 }}
        >
          {game.title}
        </Typography>
      </CardContentOverlay>

      {/* Hover Info (Visible on hover) */}
      <CardContentOverlay isHovered>
        <Typography
          variant="caption"
          style={{
            color: "var(--accent-red)",
            marginBottom: "0.35rem",
            fontSize: "0.62rem",
          }}
        >
          {game.genre}
        </Typography>
        <Typography
          variant="h4"
          style={{
            color: "var(--color-white)",
            marginBottom: "0.75rem",
            lineHeight: 1.1,
          }}
        >
          {game.title}
        </Typography>

        <Typography
          variant="b3"
          style={{
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            marginBottom: "1.25rem",
            textTransform: "none",
          }}
        >
          {game.description}
        </Typography>

        <div
          style={{
            display: "flex",
            gap: "0.6rem",
            marginBottom: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          {game.platforms.map((p) => (
            <Typography
              variant="caption"
              key={p}
              style={{
                fontSize: "0.6rem",
                padding: "0.2rem 0.6rem",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "var(--text-muted-alt)",
                borderRadius: "2px",
              }}
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
