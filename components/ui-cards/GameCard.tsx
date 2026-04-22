"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { Typography } from "@ui-elements/Typography";
import { CyberButton } from "@ui-elements/CyberButton";
import styles from "@style/GameCard.module.css";

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
  const [isActive, setIsActive] = React.useState(false);

  const handleRedirect = (e: React.MouseEvent) => {
    // On mobile/touch, first tap reveals, second tap redirects
    if (window.innerWidth <= 768 && !isActive) {
      e.preventDefault();
      e.stopPropagation();
      setIsActive(true);
      return;
    }

    if (game.href) {
      router.push(`/${game.id}/${game.slug}`);
    }
  };

  return (
    <motion.div
      variants={variants}
      className={`${styles.omniCardContainer} ${isActive ? styles.forceActive : ""}`}
      onClick={handleRedirect}
      onMouseLeave={() => window.innerWidth > 768 || setIsActive(false)}
    >
      <div className={styles.omniCardInner}>
        {/* HUD Frame Decorations */}
        <div className={styles.hudFrame}>
          <div className={`${styles.corner} ${styles.tl}`} />
          <div className={`${styles.corner} ${styles.tr}`} />
          <div className={`${styles.corner} ${styles.bl}`} />
          <div className={`${styles.corner} ${styles.br}`} />
        </div>

        {/* Image Layer */}
        <div className={styles.imageWrapper}>
          <Image
            src={game.image}
            alt={game.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>

        {/* Static Bottom Info (Desktop Only - Hidden on Hover) */}
        <div className={styles.staticInfo}>
          <Typography variant="caption" className={styles.genre}>
            {game.genre}
          </Typography>
          <Typography variant="h4" className={styles.title}>
            {game.title}
          </Typography>
        </div>

        {/* Interaction/Reveal Layer */}
        <div className={styles.contentReveal}>
          <div className="mb-4">
            <Typography variant="caption" className={styles.genreHover}>
              {game.genre}
            </Typography>
            <Typography variant="h3" className={styles.titleHover}>
              {game.title}
            </Typography>
          </div>

          <Typography variant="b3" className={styles.desc}>
            {game.description}
          </Typography>

          <div className={styles.platformList}>
            {game.platforms.map((p) => (
              <span key={p} className={styles.tag}>
                {p}
              </span>
            ))}
          </div>

          <CyberButton className="w-full">{game.buttonTitle}</CyberButton>
        </div>
      </div>
    </motion.div>
  );
};
