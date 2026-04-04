"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Typography } from "./Typography";

interface StatItemProps extends HTMLMotionProps<"div"> {
  num: string;
  label: string;
  showDivider?: boolean;
  numSize?: string;
  labelColor?: string;
}

export const StatItem: React.FC<StatItemProps> = ({
  num,
  label,
  showDivider = true,
  numSize = "2.5rem",
  labelColor = "var(--accent-red)",
  style,
  ...props
}) => {
  return (
    <motion.div
      className="stat-item"
      style={{ minWidth: "120px", ...style }}
      {...props}
    >
      <Typography
        variant="h2"
        style={{
          fontSize: numSize,
          color: "var(--text-primary)",
          lineHeight: 1,
        }}
      >
        {num}
      </Typography>
      <Typography
        variant="caption"
        style={{
          color: labelColor,
          marginTop: "0.25rem",
          fontWeight: 600,
        }}
      >
        {label}
      </Typography>
      {showDivider && <div className="hero-stat-divider" />}
    </motion.div>
  );
};
