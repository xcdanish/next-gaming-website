"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface SectionHeaderProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  maxWidth?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  children, 
  maxWidth = "fit-content",
  className = "",
  ...props
}) => {
  return (
    <motion.div 
      style={{ width: maxWidth, marginBottom: "2.5rem" }}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      {...props}
    >
      <h2
        className="font-display"
        style={{ fontSize: "clamp(2rem,4.5vw,3.8rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "0.75rem" }}
      >
        {children}
      </h2>
      <div className="section-divider" style={{ width: "100%", marginBottom: 0 }} />
    </motion.div>
  );
};
