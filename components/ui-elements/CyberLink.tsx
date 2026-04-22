"use client";

import { motion } from "framer-motion";
import { Typography } from "@ui-elements/Typography";
import Link from "next/link";

import React from "react";

export interface CyberLinkProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ElementType;
  onClick?: (e: React.MouseEvent) => void;
}

export function CyberLink({
  href,
  children,
  icon: Icon,
  onClick,
}: CyberLinkProps) {
  const content = (
    <motion.div
      initial="initial"
      whileHover="hovered"
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      variants={{
        initial: {
          background: "var(--bg-pill)",
          borderColor: "var(--border-accent)",
        },
        hovered: {
          background: "var(--accent-red-glow)",
          borderColor: "var(--accent-red)",
        },
      }}
      style={{
        borderRadius: "2px",
        padding: "0.75rem 1.5rem",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.75rem",
        position: "relative",
        overflow: "hidden",
        border: "1px solid", // Animated by variants
      }}
    >
      {/* Base Pulse Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, var(--accent-red-glow) 0%, transparent 100%)",
          zIndex: 1,
        }}
      />

      {/* Cyber-Sweep Animation */}
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
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, transparent, rgba(var(--color-primary-red-rgb), 0.2), rgba(var(--color-primary-red-rgb), 0.4), rgba(var(--color-primary-red-rgb), 0.2), transparent)",
          transform: "skewX(-35deg)",
          zIndex: 5,
          opacity: 0.85,
          filter: "blur(2px)",
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        {Icon && (
          <motion.div
            variants={{
              initial: { x: 0 },
              hovered: { x: -6 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Icon size={18} color="var(--accent-red)" />
          </motion.div>
        )}
        <Typography
          variant="caption"
          style={{
            color: "var(--text-primary)",
            fontSize: "0.8rem",
            letterSpacing: "0.15em",
            fontWeight: 600,
          }}
        >
          {children}
        </Typography>
      </div>
    </motion.div>
  );

  return (
    <Link
      href={href}
      onClick={(e) => {
        if (onClick) onClick(e);
      }}
      style={{ textDecoration: "none", display: "inline-block" }}
    >
      {content}
    </Link>
  );
}
