"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

import { Typography } from "./Typography";

interface SectionBadgeProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  color?: string;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({
  children,
  color = "var(--accent-red)",
  style,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.65rem",
        marginBottom: "1rem",
        ...style,
      }}
      {...props}
    >
      <motion.span
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.7, 1],
          boxShadow: [
            `0 0 10px ${color}`,
            `0 0 20px ${color}`,
            `0 0 10px ${color}`,
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          backgroundColor: color,
          display: "inline-block",
        }}
      />
      <Typography
        variant="caption"
        style={{
          color: color,
          fontSize: "clamp(0.6rem, 2vw, 0.7rem)",
          fontWeight: 700,
        }}
      >
        {children}
      </Typography>
    </motion.div>
  );
};
