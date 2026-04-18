"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface SectionHeaderProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  maxWidth?: string;
  showDivider?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  children,
  maxWidth = "fit-content",
  className = "",
  showDivider = true,
  style,
  ...props
}) => {
  return (
    <motion.div
      style={{
        width: maxWidth,
        maxWidth: "100%",
        marginBottom: "2.5rem",
        ...style,
      }}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      {...props}
    >
      {/* Inner grid: column is max-content so divider width tracks the heading box, not the full page column */}
      <div
        style={{
          display: "grid",
          justifyItems: "start",
          width: "fit-content",
          maxWidth: "100%",
          gridTemplateColumns: "max-content",
        }}
      >
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: showDivider ? "0.75rem" : "0",
            minWidth: 0,
          }}
        >
          {children}
        </h2>
        {showDivider && (
          <div
            className="section-divider"
            style={{
              justifySelf: "stretch",
              width: "100%",
              minWidth: 0,
              marginBottom: 0,
            }}
          />
        )}
      </div>
    </motion.div>
  );
};
