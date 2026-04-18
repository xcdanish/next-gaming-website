"use client";

import { motion } from "framer-motion";
import { Typography } from "@ui-elements/Typography";
import { SectionHeader } from "@ui-elements/SectionHeader";
import { Hammer, Star, Gamepad2 } from "lucide-react";

import styles from "@style/GameMissionSection.module.css";

export interface GameMissionSectionProps {
  inDevelopment?: boolean;
  rating?: string;
  platforms: string[];
  missionTitle?: string;
  missionDescription: string;
  genre: string;
  engine?: string;
  region?: string;
}

export default function GameMissionSection({
  inDevelopment = true,
  rating,
  platforms,
  missionDescription,
}: GameMissionSectionProps) {
  return (
    <div className="mt-16 relative">
      {/* Background Decorative Elements */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-[var(--accent-red)]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="w-full">
        {/* Main Title with Custom Divider */}
        <SectionHeader>
          <Typography variant="span" className="cyber-sweep">
            THE
          </Typography>{" "}
          <Typography variant="span" className="cyber-sweep-red">
            MISSION
          </Typography>
        </SectionHeader>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          {/* Status and Platforms Pill - Now positioned after the title */}
          <div
            className={`flex flex-wrap items-center mb-10 p-1 rounded-lg bg-[var(--bg-pill)] border border-[var(--border-subtle)] backdrop-blur-sm ${styles.missionPill}`}
          >
            <div className={styles.statusRow}>
              <div className={styles.statusItem}>
                {inDevelopment ? (
                  <>
                    <Hammer size={16} className="text-[var(--accent-red)]" />
                    <span className={styles.statusText}>IN DEVELOPMENT</span>
                  </>
                ) : (
                  <>
                    <Star
                      size={16}
                      className="text-[var(--accent-red)] fill-[var(--accent-red)]"
                    />
                    <span className={styles.statusText}>
                      {rating} CRITICAL RATING
                    </span>
                  </>
                )}
              </div>

              <div className={styles.divider} />

              <div className={styles.statusItem}>
                <Gamepad2 size={16} className="text-[var(--accent-red)]" />
                <span
                  className={styles.statusText}
                  style={{ color: "var(--text-secondary)" }}
                >
                  {platforms.join(" • ")}
                </span>
              </div>
            </div>
          </div>

          {/* Description with corner accents */}
          <div className="relative p-8 lg:p-10 bg-[var(--bg-pill)] border border-[var(--border-subtle)] rounded-sm">
            {/* HUD Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--accent-red)]/40" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--accent-red)]/10" />

            <Typography
              variant="b1"
              className={styles.missionDescription}
            >
              {missionDescription}
            </Typography>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
