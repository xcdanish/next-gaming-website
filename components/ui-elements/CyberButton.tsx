"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface CyberButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: "primary" | "outline";
}

export const CyberButton: React.FC<CyberButtonProps> = ({
  children,
  variant = "primary",
  style,
  className = "",
  ...props
}) => {
  const isPrimary = variant === "primary";

  return (
    <motion.button
      className={`btn-${variant} ${className}`}
      initial="initial"
      whileHover="hovered"
      whileTap={{ scale: 0.98 }}
      style={{
        width: "auto",
        textAlign: "center",
        padding: "0.8rem 1.5rem",
        position: "relative",
        overflow: "hidden",
        background: isPrimary ? "var(--accent-red)" : "transparent",
        color: "var(--color-white)",
        border: isPrimary
          ? "none"
          : "1px solid rgba(var(--color-primary-red-rgb), 0.5)",
        fontWeight: 800,
        letterSpacing: "0.1em",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
      {...props}
    >
      <motion.span
        variants={{
          initial: { x: 0 },
          hovered: { x: -2 },
        }}
        transition={{ duration: 0.3 }}
        style={{ position: "relative", zIndex: 10, display: "inline-block" }}
      >
        {children}
      </motion.span>

      {/* High-Intensity Cyber-Sweep */}
      <motion.div
        variants={{
          initial: { left: "-150%" },
          hovered: { left: "150%" },
        }}
        transition={{
          duration: 1.6,
          ease: [0.19, 1, 0.22, 1],
          delay: 0.05,
        }}
        style={{
          position: "absolute",
          top: 0,
          width: "70%",
          height: "100%",
          background: isPrimary
            ? "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), var(--color-white), rgba(255, 255, 255, 0.2), transparent)"
            : "linear-gradient(90deg, transparent, rgba(var(--color-primary-red-rgb), 0.2), rgba(var(--color-primary-red-rgb), 0.4), rgba(var(--color-primary-red-rgb), 0.2), transparent)",
          transform: "skewX(-35deg)",
          zIndex: 5,
          opacity: 0.85,
          filter: "blur(2px)",
        }}
      />

      {/* Subtle Base Pulse */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%)",
          zIndex: 1,
        }}
      />
    </motion.button>
  );
};
