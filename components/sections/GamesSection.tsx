"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@ui-elements/SectionHeader";
import { GameCard } from "@ui-cards/GameCard";
import { Typography } from "@ui-elements/Typography";

import { games } from "@lib/games-data";

import { gamesSectionContent as content } from "@lib/games-section-data";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export default function GamesSection() {
  return (
    <section
      id="games"
      style={{
        padding: "8rem 0",
        backgroundColor: "var(--bg-primary)",
        border: "none",
        overflow: "hidden",
      }}
    >
      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
      >
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
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{
            marginTop: "0.9rem",
            color: "var(--text-secondary)",
            maxWidth: "34rem",
            lineHeight: 1.7,
            marginBottom: "3.5rem",
            textTransform: "none",
            textAlign: "justify",
          }}
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
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 360px))",
            gap: "2.5rem",
            justifyContent: "center",
          }}
        >
          {games.map((game) => (
            <GameCard key={game.id} game={game} variants={cardVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
