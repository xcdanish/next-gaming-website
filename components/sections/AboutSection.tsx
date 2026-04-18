"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@ui-elements/SectionHeader";
import { Typography } from "@ui-elements/Typography";
import { CyberLink } from "@ui-elements/CyberLink";
import { ArrowLeft } from "lucide-react";

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
  return (
    <section
      id="game-intro"
      style={{
        padding: "8rem 0",
        backgroundColor: "var(--bg-primary)",
        backgroundImage:
          "radial-gradient(circle at 80% 50%, rgba(var(--color-primary-red-rgb), 0.05) 0%, transparent 40%)",
        overflow: "hidden",
      }}
    >
      <style>{`
        /* minmax(0,1fr) lets columns shrink below intrinsic min-width so copy/tags wrap on narrow viewports */
        .about-section-grid.grid-2col {
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        }
        @media (max-width: 900px) {
          .about-section-grid.grid-2col {
            grid-template-columns: minmax(0, 1fr);
          }
        }
        @media (max-width: 1024px) {
          .about-dual-wrapper { 
            aspect-ratio: 1.2 / 1 !important;
            height: auto !important;
            max-width: 100% !important;
          }
          .about-char-box { width: 60% !important; }
        }
        @media (max-width: 768px) {
          .about-dual-wrapper { 
            aspect-ratio: 1 / 0.8 !important; 
            height: auto !important;
            margin-top: 2rem;
            max-width: 100% !important;
            width: 100% !important;
          }
          .about-char-box { width: 62% !important; }
        }
      `}</style>

      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        <div
          className="grid-2col about-section-grid"
          style={{ alignItems: "center", gap: "4rem" }}
        >
          {/* LEFT CONTENT */}
          <motion.div
            className="min-w-0 w-full max-w-full"
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

            <div
              className="min-w-0 w-full max-w-full"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {descriptions?.map((desc, i) => (
                <Typography
                  key={i}
                  variant={i === 0 ? "b1" : "b2"}
                  style={{
                    maxWidth: "100%",
                    overflowWrap: "break-word",
                    textAlign: "justify",
                    color:
                      i === 0 ? "var(--text-primary)" : "var(--text-secondary)",
                  }}
                >
                  {desc}
                </Typography>
              ))}

              {tags && tags.length > 0 && (
                <div
                  className="min-w-0 w-full max-w-full"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1rem",
                    marginTop: "1rem",
                  }}
                >
                  {tags.map((tag, i) => (
                    <Typography
                      key={i}
                      variant="caption"
                      style={{
                        boxSizing: "border-box",
                        maxWidth: "100%",
                        overflowWrap: "break-word",
                        whiteSpace: "normal",
                        padding: "0.5rem 1rem",
                        background:
                          i === tags.length - 1
                            ? "rgba(var(--color-primary-red-rgb), 0.1)"
                            : "rgba(255,255,255,0.05)",
                        border:
                          i === tags.length - 1
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
              )}

              {footer && (
                <Typography
                  variant="caption"
                  component="p"
                  style={{
                    display: "block",
                    maxWidth: "100%",
                    overflowWrap: "break-word",
                    whiteSpace: "normal",
                    color: "var(--accent-red)",
                    marginTop: "1rem",
                  }}
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
                  style={{ marginTop: "1rem" }}
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
            className={`
              ${images?.length === 2 ? "about-dual-wrapper" : ""}
              relative w-full mx-auto md:max-w-none overflow-visible
            `}
            style={{
              display: images?.length === 2 ? "block" : "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              position: "relative",
              width: "100%",
              height: images?.length === 2 ? "620px" : "auto",
              minHeight: images?.length === 2 ? "320px" : "0",
              marginTop: images?.length === 2 ? "-5rem" : "0", // Pull up level with text
            }}
          >
            {/* GLOW EFFECT */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(var(--color-primary-red-rgb), 0.15)",
                filter: "blur(100px)",
                borderRadius: "50%",
                zIndex: 0,
              }}
            />

            {images?.map((src, i) => {
              const isDual = images.length === 2;

              // Single image — default layout
              let motionClasses = "relative z-[1] w-full";

              if (isDual) {
                if (i === 0) {
                  // Left huge character
                  motionClasses =
                    "about-char-box absolute bottom-0 left-0 w-[58%] md:w-[62%] z-[2]";
                } else if (i === 1) {
                  // Right huge character
                  motionClasses =
                    "about-char-box absolute bottom-0 right-0 w-[58%] md:w-[62%] z-[4]";
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
                            "drop-shadow(0 0 35px rgba(var(--color-primary-red-rgb), 0.4))",
                        }
                      : undefined
                  }
                  style={{
                    filter:
                      "drop-shadow(0 0 35px rgba(var(--color-primary-red-rgb), 0.3))",
                    transition: "filter 0.4s cubic-bezier(0.19, 1, 0.22, 1)",
                  }}
                >
                  <Image
                    src={src}
                    alt={`Character ${i + 1}`}
                    width={700}
                    height={900}
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "auto",
                      display: "block",
                      filter: "contrast(1.1) brightness(1.1)",
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
