"use client";

import { motion } from "framer-motion";

interface GameDividerProps {
  mt?: number;
  mb?: number;
}

export function GameDivider({ mt = 0.75, mb = 0.75 }: GameDividerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: `${mt}rem`,
        marginBottom: `${mb}rem`,
        transformOrigin: "left center",
        height: "16px", // fixed height so all children align perfectly
      }}
    >
      {/* ◆ Left diamond */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.35, delay: 0.45, ease: "backOut" }}
        style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <div style={{
          width: "10px", height: "10px",
          background: "var(--accent-red)",
          transform: "rotate(45deg)",
          boxShadow: "0 0 10px rgba(224,27,36,1), 0 0 20px rgba(224,27,36,0.5)",
        }} />
      </motion.div>

      {/* Left solid accent */}
      <div style={{
        height: "2px",
        width: "24px",
        flexShrink: 0,
        background: "var(--accent-red)",
        boxShadow: "0 0 6px rgba(224,27,36,0.7)",
      }} />

      {/* Left fade */}
      <div style={{
        height: "1px",
        width: "28px",
        flexShrink: 0,
        background: "linear-gradient(90deg, rgba(224,27,36,0.55), rgba(224,27,36,0.08))",
      }} />

      {/* Center line */}
      <div style={{
        height: "1px",
        flex: 1,
        background: "linear-gradient(90deg, rgba(224,27,36,0.08), rgba(224,27,36,0.18), rgba(224,27,36,0.08))",
      }} />

      {/* Right fade */}
      <div style={{
        height: "1px",
        width: "28px",
        flexShrink: 0,
        background: "linear-gradient(90deg, rgba(224,27,36,0.08), rgba(224,27,36,0.55))",
      }} />

      {/* Right solid accent */}
      <div style={{
        height: "2px",
        width: "24px",
        flexShrink: 0,
        background: "var(--accent-red)",
        boxShadow: "0 0 6px rgba(224,27,36,0.7)",
      }} />

      {/* ◆ Right diamond */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.35, delay: 0.6, ease: "backOut" }}
        style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <div style={{
          width: "10px", height: "10px",
          background: "var(--accent-red)",
          transform: "rotate(45deg)",
          boxShadow: "0 0 10px rgba(224,27,36,1), 0 0 20px rgba(224,27,36,0.5)",
        }} />
      </motion.div>
    </motion.div>
  );
}
