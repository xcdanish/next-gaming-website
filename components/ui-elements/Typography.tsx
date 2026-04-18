"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "b1"
  | "b2"
  | "b3"
  | "b4"
  | "caption"
  | "span";

interface TypographyProps extends HTMLMotionProps<"div"> {
  variant?: TypographyVariant;
  component?: React.ElementType;
  className?: string;
  glow?: boolean;
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      variant = "b2",
      component,
      children,
      className = "",
      glow = false,
      style,
      ...props
    },
    ref,
  ) => {
    // Map variant to a default HTML tag if component is not provided
    const tagMap: Record<TypographyVariant, string> = {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      h5: "h5",
      h6: "h6",
      b1: "p",
      b2: "p",
      b3: "p",
      b4: "p",
      caption: "span",
      span: "span",
    };

    const targetTag = (component || tagMap[variant]) as string;

    const getVariantStyles = (v: TypographyVariant): React.CSSProperties => {
      const baseDisplay: React.CSSProperties = {
        fontFamily: "var(--font-display, 'Bebas Neue', display)",
        textTransform: "uppercase",
        lineHeight: 1.1,
        fontWeight: 400,
      };

      const baseBody: React.CSSProperties = {
        fontFamily: "var(--font-body, 'Space Grotesk', sans-serif)",
        lineHeight: 1.6,
        fontWeight: 400,
      };

      switch (v) {
        case "h1":
          return {
            ...baseDisplay,
            fontSize: "clamp(3rem, 10vw, 9rem)",
            lineHeight: 0.95,
            fontWeight: 800,
          };
        case "h2":
          return {
            ...baseDisplay,
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: 700,
          };
        case "h3":
          return {
            ...baseDisplay,
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            fontWeight: 700,
          };
        case "h4":
          return {
            ...baseDisplay,
            fontSize: "1.75rem",
            fontWeight: 700,
          };
        case "h5":
          return {
            ...baseDisplay,
            fontSize: "1.4rem",
            fontWeight: 700,
          };
        case "h6":
          return {
            ...baseDisplay,
            fontSize: "1.15rem",
            fontWeight: 700,
          };
        case "b1":
          return {
            ...baseBody,
            fontSize: "1.15rem",
            fontWeight: 500,
          };
        case "b2":
          return {
            ...baseBody,
            fontSize: "1rem",
          };
        case "b3":
          return {
            ...baseBody,
            fontSize: "0.9rem",
          };
        case "b4":
          return {
            ...baseBody,
            fontSize: "0.8rem",
          };
        case "caption":
          return {
            ...baseBody,
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontWeight: 700,
          };
        case "span":
          return {};
        default:
          return baseBody;
      }
    };

    const glowStyle: React.CSSProperties = glow
      ? {
          textShadow:
            "0 0 15px rgba(var(--color-primary-red-rgb), 0.4), 0 0 30px rgba(var(--color-primary-red-rgb), 0.2)",
        }
      : {};

    const combinedStyle = {
      ...getVariantStyles(variant),
      ...glowStyle,
      ...style,
    };

    // Use motion component by indexing with a safe fallback
    const MotionComponent =
      (motion as unknown as Record<string, React.ElementType>)[targetTag] ||
      motion.p;

    return (
      <MotionComponent
        ref={ref}
        className={`typography-${variant} ${className}`}
        style={combinedStyle}
        {...props}
      >
        {children}
      </MotionComponent>
    );
  },
);

Typography.displayName = "Typography";
