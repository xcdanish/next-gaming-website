"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@ui-elements/SectionHeader";
import { GameCard } from "@ui-cards/GameCard";
import { Typography } from "@ui-elements/Typography";

import { games } from "@lib/games-data";

import { gamesSectionContent as content } from "@lib/games-section-data";

import styles from "@style/GamesSection.module.css";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeInOut" as const },
  },
};

export default function GamesSection() {
  return (
    <section id="games" className={styles.gamesSection}>
      <div className={styles.gamesContainer}>
        {/* Header */}
        <SectionHeader>
          <Typography variant="span" className="cyber-sweep">
            {content.heading1}
          </Typography>{" "}
          <Typography variant="span" className="cyber-sweep-red">
            {content.heading2}
          </Typography>
        </SectionHeader>

        <Typography
          variant="b2"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
          className={styles.description}
        >
          {content.description}
        </Typography>

        {/* Grid */}
        <motion.div
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1, margin: "-60px" }}
          className={styles.gamesGrid}
        >
          {games.map((game) => (
            <GameCard key={game.id} game={game} variants={cardVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
