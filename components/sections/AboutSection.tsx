"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@ui-elements/SectionHeader";
import { Typography } from "@ui-elements/Typography";
import { CyberLink } from "@ui-elements/CyberLink";
import { ArrowLeft } from "lucide-react";

import styles from "@style/AboutSection.module.css";

export interface AboutSectionProps {
  title1?: string;
  title1Red?: string;
  title2?: string;
  title2Red?: string;
  descriptions?: string[];
  images?: string[];
  tags?: string[];
  footer?: string;
  showBackButton?: boolean;
  /** If true, the 2nd image in dual-image layout is flipped horizontally */
  flipSecond?: boolean;
}

export default function AboutSection({
  title1,
  title1Red,
  title2,
  title2Red,
  descriptions,
  images,
  tags,
  footer,
  showBackButton,
  flipSecond = false,
}: AboutSectionProps) {
  const isDual = images?.length === 2;

  return (
    <section id="game-intro" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.grid}>
          {/* LEFT CONTENT */}
          <motion.div
            className={styles.contentCol}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SectionHeader>
              {title1 && (
                <Typography variant="span" className="cyber-sweep">
                  {title1}
                </Typography>
              )}{" "}
              {title1Red && (
                <Typography variant="span" className="cyber-sweep-red">
                  {title1Red}
                </Typography>
              )}
              {(title1 || title1Red) && (title2 || title2Red) && <br />}
              {title2 && (
                <Typography variant="span" className="cyber-sweep">
                  {title2}
                </Typography>
              )}{" "}
              {title2Red && (
                <Typography variant="span" className="cyber-sweep-red">
                  {title2Red}
                </Typography>
              )}
            </SectionHeader>

            <div className={styles.contentCol}>
              {descriptions?.map((desc, i) => (
                <Typography
                  key={i}
                  variant={i === 0 ? "b1" : "b2"}
                  className={styles.description}
                  style={{
                    color:
                      i === 0 ? "var(--text-primary)" : "var(--text-secondary)",
                  }}
                >
                  {desc}
                </Typography>
              ))}

              {tags && tags.length > 0 && (
                <div className={styles.tagsContainer}>
                  {tags.map((tag, i) => (
                    <Typography
                      key={i}
                      variant="caption"
                      className={`${styles.tag} ${i === tags.length - 1 ? styles.tagActive : ""}`}
                    >
                      {tag}
                    </Typography>
                  ))}
                </div>
              )}

              {footer && (
                <Typography
                  variant="caption"
                  component="p"
                  className={styles.footerText}
                >
                  {footer}
                </Typography>
              )}

              {/* Creative Return to Home Button */}
              {showBackButton && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className={styles.backButtonWrap}
                >
                  <CyberLink
                    href="/"
                    icon={ArrowLeft}
                    onClick={(e) => {
                      if (window.location.pathname === "/") {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                  >
                    BACK TO HOME
                  </CyberLink>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* RIGHT IMAGE(S) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "circOut" }}
            className={`${styles.imageCol} ${isDual ? styles.imageColDual : ""}`}
          >
            {/* GLOW EFFECT */}
            <div className={styles.glowEffect} />

            {images?.map((src, i) => {
              let motionClasses = styles.charBox;
              if (isDual) {
                if (i === 0) {
                  motionClasses += ` ${styles.charBoxDualLeft}`;
                } else if (i === 1) {
                  motionClasses += ` ${styles.charBoxDualRight}`;
                }
              }

              const shouldFlip = isDual && i === 1 && flipSecond;

              return (
                <motion.div
                  key={i}
                  className={motionClasses}
                  initial={{ opacity: 0, y: isDual ? 50 : 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.15,
                    ease: "easeOut",
                  }}
                      whileHover={
                        isDual
                          ? {
                              y: -10,
                              filter:
                                "drop-shadow(0px 15px 35px rgba(0, 0, 0, 0.9)) drop-shadow(0 0 55px rgba(var(--color-primary-red-rgb), 0.5))",
                            }
                          : undefined
                      }
                >
                  <Image
                    src={src}
                    alt={`Character ${i + 1}`}
                    width={700}
                    height={900}
                    className={styles.characterImage}
                    style={{
                      transform: shouldFlip ? "scaleX(-1)" : undefined,
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
