"use client";

import { motion } from "framer-motion";

interface GameDividerProps {
  /** Top margin in rem. Default: 0.75 */
  mt?: number;
  /** Bottom margin in rem. Default: 0.75 */
  mb?: number;
}

export function GameDivider({ mt = 0.75, mb = 0.75 }: GameDividerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        marginTop: `${mt}rem`,
        marginBottom: `${mb}rem`,
        transformOrigin: "center",
        height: "16px",
      }}
    >
      {/* ◆ Left diamond */}
      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: 0 }}
        whileInView={{ scale: 1, opacity: 1, rotate: 45 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "backOut" }}
        style={{
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            background: "var(--accent-red)",
            boxShadow:
              "0 0 10px rgba(var(--color-primary-red-rgb), 1), 0 0 20px rgba(var(--color-primary-red-rgb), 0.5)",
          }}
        />
      </motion.div>

      {/* Left solid accent */}
      <div
        style={{
          height: "2px",
          width: "24px",
          flexShrink: 0,
          background: "var(--accent-red)",
          boxShadow: "0 0 6px rgba(var(--color-primary-red-rgb), 0.7)",
        }}
      />

      {/* Left fade */}
      <div
        style={{
          height: "1px",
          width: "28px",
          flexShrink: 0,
          background:
            "linear-gradient(90deg, rgba(var(--color-primary-red-rgb), 0.55), rgba(var(--color-primary-red-rgb), 0.08))",
        }}
      />

      {/* Center line */}
      <div
        style={{
          height: "1px",
          flex: 1,
          background:
            "linear-gradient(90deg, rgba(var(--color-primary-red-rgb), 0.08), rgba(var(--color-primary-red-rgb), 0.18), rgba(var(--color-primary-red-rgb), 0.08))",
        }}
      />

      {/* Right fade */}
      <div
        style={{
          height: "1px",
          width: "28px",
          flexShrink: 0,
          background:
            "linear-gradient(90deg, rgba(var(--color-primary-red-rgb), 0.08), rgba(var(--color-primary-red-rgb), 0.55))",
        }}
      />

      {/* Right solid accent */}
      <div
        style={{
          height: "2px",
          width: "24px",
          flexShrink: 0,
          background: "var(--accent-red)",
          boxShadow: "0 0 6px rgba(var(--color-primary-red-rgb), 0.7)",
        }}
      />

      {/* ◆ Right diamond */}
      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: 0 }}
        whileInView={{ scale: 1, opacity: 1, rotate: 45 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "backOut" }}
        style={{
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            background: "var(--accent-red)",
            boxShadow:
              "0 0 10px rgba(var(--color-primary-red-rgb), 1), 0 0 20px rgba(var(--color-primary-red-rgb), 0.5)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
