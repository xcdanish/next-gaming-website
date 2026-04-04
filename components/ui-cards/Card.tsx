"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import Image from "next/image";

// --- Base Card Component ---
interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  style,
  ...props
}) => {
  return (
    <motion.div
      className={`game-card ${className}`}
      style={{ cursor: "pointer", ...style }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// --- Atomic Card Parts for Maximum Reusability ---

export const CardImage: React.FC<{ src: string; alt: string }> = ({
  src,
  alt,
}) => (
  <div
    style={{
      position: "relative",
      width: "100%",
      aspectRatio: "3/4",
      overflow: "hidden",
    }}
  >
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 33vw"
      style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
      className="group-hover:scale-110"
    />
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)",
        pointerEvents: "none",
        zIndex: 1,
      }}
    />
  </div>
);

export const CardTag: React.FC<{
  children: React.ReactNode;
  side?: "left" | "right";
  variant?: "default" | "accent";
}> = ({ children, side = "left", variant = "default" }) => {
  const style: React.CSSProperties = {
    position: "absolute",
    top: "1rem",
    zIndex: 10,
    [side]: "1rem",
  };

  return (
    <div style={style}>
      <span
        style={{
          fontSize: variant === "default" ? "0.65rem" : "0.7rem",
          fontWeight: 700,
          background: variant === "default" ? "rgba(0,0,0,0.7)" : "var(--accent-red)",
          backdropFilter: variant === "default" ? "blur(6px)" : "none",
          padding: "0.25rem 0.65rem",
          borderRadius: "2px",
          color: "var(--text-primary)",
          border:
            variant === "default" ? "1px solid rgba(255,255,255,0.1)" : "none",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        {children}
      </span>
    </div>
  );
};

export const CardContentOverlay: React.FC<{
  children: React.ReactNode;
  isHovered?: boolean;
}> = ({ children, isHovered = false }) => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: isHovered
        ? "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 100%)"
        : "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 40%, transparent 100%)",
      padding: isHovered ? "2rem 1.5rem" : "2rem 1.5rem 1.5rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      zIndex: isHovered ? 20 : 5,
      backdropFilter: isHovered ? "blur(4px)" : "none",
      transition: "all 0.4s cubic-bezier(0.19, 1, 0.22, 1)",
      pointerEvents: isHovered ? "auto" : "none", // Allow clicking buttons on hover overlay, disable on static overlay
    }}
    className={
      isHovered
        ? "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
        : "opacity-100 group-hover:opacity-0"
    }
  >
    {children}
  </div>
);
