"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@ui-elements/SectionHeader";
import { Typography } from "@ui-elements/Typography";

const features = [
  {
    title: "Train & Level Up",
    text: "Start with a chick and grind your way up. Train daily, unlock new abilities, and watch your rooster grow into an unstoppable fighter.",
    icon: "🏋️‍♂️",
  },
  {
    title: "Customize Your Rooster",
    text: "Deck out your rooster your way. From battle gear to color schemes - make your fighter truly yours before stepping into the arena.",
    icon: "🎨",
  },
  {
    title: "Arena & Battle Mode",
    text: "Go beak-to-beak in intense 1v1 PvP battles and multiplayer tournaments. Every fight tests your strategy, timing, and training.",
    icon: "⚔️",
  },
  {
    title: "Collect Rare Roosters",
    text: "Hunt for rare and legendary roosters, each with unique stats and abilities. Build your ultimate roster and dominate every bracket.",
    icon: "⭐",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      style={{ padding: "6rem 0", backgroundColor: "var(--bg-primary)" }}
    >
      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        <SectionHeader>
          <Typography variant="span" className="cyber-sweep">KEY</Typography>{" "}
          <Typography variant="span" className="cyber-sweep-red">FEATURES</Typography>
        </SectionHeader>

        {/* Features Grid - Desktop: 4 columns, Mobile: 2x2 as per requirement */}
        <div
          className="grid-4col"
          style={{
            display: "grid",
            gap: "1.5rem",
          }}
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                padding: "2.5rem 2rem",
                background: "rgba(255,255,255,0.02)", // Requirement says light but I should stick to dark given primary colors
                border: "1px solid rgba(var(--color-primary-red-rgb), 0.15)",
                borderRadius: "2px",
                transition: "all 0.3s ease",
              }}
              whileHover={{
                y: -10,
                background: "rgba(255,255,255,0.05)",
                borderColor: "rgba(var(--color-primary-red-rgb), 0.6)",
                boxShadow: "0 8px 30px rgba(var(--color-primary-red-rgb), 0.1)",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>
                {f.icon}
              </div>
              <Typography
                variant="h6"
                style={{
                  color: "var(--text-primary)",
                  marginBottom: "1rem",
                }}
              >
                {f.title}
              </Typography>
              <Typography
                variant="b3"
                style={{
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                }}
              >
                {f.text}
              </Typography>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
