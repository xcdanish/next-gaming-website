"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface MilestoneItemProps extends HTMLMotionProps<"div"> {
  year: string;
  event: string;
  index: number;
}

export const MilestoneItem: React.FC<MilestoneItemProps> = ({
  year,
  event,
  index,
  style,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ delay: index * 0.09, duration: 0.45 }}
      style={{ position: "relative", marginBottom: "2rem", ...style }}
      {...props}
    >
      {/* Dot */}
      <div
        style={{
          position: "absolute",
          left: "-2.55rem",
          top: "0.25rem",
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: "var(--accent-red)",
          boxShadow: "0 0 0 4px rgba(var(--color-primary-red-rgb), 0.18)",
        }}
      />
      <span
        className="font-display"
        style={{
          fontSize: "0.72rem",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--accent-red)",
        }}
      >
        {year}
      </span>
      <p
        style={{
          fontSize: "0.875rem",
          color: "var(--text-secondary)",
          marginTop: "0.25rem",
          lineHeight: 1.6,
        }}
      >
        {event}
      </p>
    </motion.div>
  );
};
