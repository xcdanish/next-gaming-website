"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@ui-elements/SectionHeader";
import { Typography } from "@ui-elements/Typography";
import { aboutGameContent as content } from "@lib/about-game-data";

export default function AboutGameSection() {
  return (
    <section
      id="about-game"
      style={{
        padding: "8rem 0",
        backgroundColor: "var(--bg-primary)",
        overflow: "visible",
        border: "none",
      }}
    >
      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        <div
          className="grid-2col"
          style={{ alignItems: "center", gap: "4rem" }}
        >
          {/* ── LEFT: FRAMELESS CHARACTER LINEUP SCENE ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[320px] sm:h-[400px] md:h-[500px] w-full max-w-[500px] mx-auto md:max-w-none overflow-visible"
          >
            {/* ── CHAR 1 — left ── */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
              whileHover={{
                y: -10,
                filter:
                  "drop-shadow(0 0 30px rgba(var(--color-primary-red-rgb), 0.22))",
              }}
              className="absolute bottom-0 left-0 md:-left-[5%] w-[48%] md:w-[45%] z-[2]"
              style={{
                filter:
                  "drop-shadow(0px 10px 16px rgba(0,0,0,0.85)) drop-shadow(0 0 10px rgba(var(--color-primary-red-rgb), 0.1))",
                transition: "filter 0.4s cubic-bezier(0.19, 1, 0.22, 1)",
              }}
            >
              <Image
                src={content.chars[0].src}
                alt={content.chars[0].alt}
                width={400}
                height={500}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </motion.div>

            {/* ── CHAR 2 — center HERO — biggest ── */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
              whileHover={{
                y: -14,
                filter:
                  "drop-shadow(0 0 45px rgba(var(--color-primary-red-rgb), 0.3))",
              }}
              className="absolute bottom-0 left-[35%] md:left-[30%] w-[65%] sm:w-[55%] md:w-[65%] z-[4]"
              style={{
                filter:
                  "drop-shadow(0px 14px 24px rgba(0,0,0,0.9)) drop-shadow(0 0 15px rgba(var(--color-primary-red-rgb), 0.15))",
                transition: "filter 0.4s cubic-bezier(0.19, 1, 0.22, 1)",
              }}
            >
              <Image
                src={content.chars[1].src}
                alt={content.chars[1].alt}
                width={400}
                height={500}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </motion.div>
          </motion.div>

          {/* ── RIGHT: TEXT CONTENT ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ position: "relative" }}
          >
            {/* ── EYEBROW TAG ── */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "var(--accent-red)",
                  boxShadow: "0 0 8px rgba(var(--color-primary-red-rgb), 0.7)",
                }}
              />
              <span
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.25em",
                  color: "rgba(255,255,255,0.45)",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                {content.eyebrow}
              </span>
            </div>

            {/* ── TITLE + CHAR-3 INLINE (same height) ── */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1rem",
              }}
            >
              <SectionHeader style={{ margin: 0 }}>
                <span style={{ whiteSpace: "nowrap" }}>
                  <Typography variant="span" className="cyber-sweep">
                    {content.title1}&nbsp;
                  </Typography>
                  <Typography
                    variant="span"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--color-accent-light) 0%, var(--accent-red) 40%, var(--color-accent-deep) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontWeight: 900,
                      filter:
                        "drop-shadow(0 0 10px rgba(var(--color-primary-red-rgb), 0.25))",
                    }}
                  >
                    {content.title2}
                  </Typography>
                </span>
              </SectionHeader>

              {/* char-3: inline, same height as the title */}
              {/* <motion.div
                initial={{ opacity: 0, x: 20, y: 8 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                style={{
                  height: "clamp(2.2rem, 4.95vw, 4.18rem)",
                  flexShrink: 0,
                  filter:
                    "drop-shadow(-4px 6px 12px rgba(0,0,0,0.5)) drop-shadow(0 0 10px rgba(var(--color-primary-red-rgb), 0.15))",
                  transition: "filter 0.3s ease",
                }}
              >
                <Image
                  src={content.chars[2].src}
                  alt={content.chars[2].alt}
                  width={200}
                  height={200}
                  style={{ height: "100%", width: "auto", display: "block" }}
                />
              </motion.div> */}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <Typography variant="b1" style={{ color: "var(--text-primary)" }}>
                {content.description1}
              </Typography>

              <Typography
                variant="b2"
                style={{ color: "var(--text-secondary)" }}
              >
                {content.description2}
              </Typography>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1rem",
                  marginTop: "1rem",
                }}
              >
                {content.tags.map((tag, i) => (
                  <Typography
                    key={i}
                    variant="caption"
                    style={{
                      padding: "0.5rem 1rem",
                      background:
                        i === content.tags.length - 1
                          ? "rgba(var(--color-primary-red-rgb), 0.1)"
                          : "rgba(255,255,255,0.05)",
                      border:
                        i === content.tags.length - 1
                          ? "1px solid rgba(var(--color-primary-red-rgb), 0.2)"
                          : "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "2px",
                      color: "var(--text-primary)",
                    }}
                  >
                    {tag}
                  </Typography>
                ))}
              </div>

              <Typography
                variant="caption"
                style={{ color: "var(--accent-red)", marginTop: "1rem" }}
              >
                {content.footer}
              </Typography>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
