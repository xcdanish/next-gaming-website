"use client";

import { motion } from "framer-motion";
import { Typography } from "@ui-elements/Typography";
import { SectionHeader } from "@ui-elements/SectionHeader";
import { Hammer, Star, Gamepad2 } from "lucide-react";

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
            className="flex flex-wrap items-center gap-6 mb-10 p-1 rounded-lg bg-white/[0.02] border border-white/5 backdrop-blur-sm"
            style={{ width: "fit-content" }}
          >
            <div className="flex items-center gap-6 px-6 py-2.5">
              <div className="flex items-center gap-3">
                {inDevelopment ? (
                  <>
                    <Hammer size={16} className="text-[var(--accent-red)]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                      IN DEVELOPMENT
                    </span>
                  </>
                ) : (
                  <>
                    <Star
                      size={16}
                      className="text-[var(--accent-red)] fill-[var(--accent-red)]"
                    />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                      {rating} CRITICAL RATING
                    </span>
                  </>
                )}
              </div>

              <div className="h-4 w-[1px] bg-white/10" />

              <div className="flex items-center gap-3">
                <Gamepad2 size={16} className="text-[var(--accent-red)]" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">
                  {platforms.join(" • ")}
                </span>
              </div>
            </div>
          </div>

          {/* Description with corner accents */}
          <div className="relative p-8 lg:p-10 bg-white/[0.01] border border-white/5 rounded-sm">
            {/* HUD Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--accent-red)]/40" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--accent-red)]/10" />

            <Typography
              variant="b1"
              style={{
                color: "rgba(255,255,255,0.7)",
                maxWidth: "100%",
                lineHeight: "1.9",
                fontSize: "1.15rem",
                fontWeight: 400,
              }}
            >
              {missionDescription}
            </Typography>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
