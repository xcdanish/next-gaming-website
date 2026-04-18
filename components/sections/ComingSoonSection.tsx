"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Typography } from "@ui-elements/Typography";
import { SectionHeader } from "@ui-elements/SectionHeader";
import { GameDivider } from "@ui-elements/GameDivider";

import {
  InstagramIcon,
  XIcon,
  LinkedinIcon,
  YoutubeIcon,
  DiscordIcon,
} from "@components/icons";

import { comingSoonContent as content } from "@lib/coming-soon-data";
import { socialLinks as socialData } from "@lib/social-data";

const iconMap: { [key: string]: React.ReactNode } = {
  Instagram: <InstagramIcon size={28} />,
  X: <XIcon size={28} />,
  LinkedIn: <LinkedinIcon size={28} />,
  YouTube: <YoutubeIcon size={28} />,
  Discord: <DiscordIcon size={28} />,
};

export default function ComingSoonSection() {
  const socialLinks = socialData.map((link) => ({
    ...link,
    icon: iconMap[link.label] || null,
  }));

  return (
    <section
      id="notify"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5rem 0",
        background: "var(--bg-primary)",
        backgroundImage:
          "radial-gradient(circle at 20% 50%, rgba(var(--color-primary-red-rgb), 0.05) 0%, transparent 40%)",
        position: "relative",
        overflow: "hidden",
        border: "none",
      }}
    >
      <style>{`
        @media (max-width: 900px) {
          .coming-soon-char   { order: 2; min-height: 280px !important; }
          .coming-soon-content { order: 1; }
          .coming-soon-social  { justify-content: center !important; gap: 1.5rem !important; }
          .coming-soon-content .section-badge { align-self: center; }
        }
        @media (max-width: 480px) {
          .coming-soon-char   { min-height: 220px !important; }
          .coming-soon-char .char-img { width: clamp(160px, 70vw, 260px) !important; }
        }
      `}</style>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", width: "100%" }}>
        <div
          className="grid-2col"
          style={{ alignItems: "center", gap: "4rem" }}
        >
          {/* LEFT — Character Image (mobile: shows below content) */}
          <motion.div
            className="coming-soon-char"
            initial={{ opacity: 0, scale: 0.9, x: -40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "circOut" }}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              minHeight: "420px",
            }}
          >
            {/* Glow behind char */}
            <div
              aria-hidden="true"
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
                pointerEvents: "none",
              }}
            />

            <motion.div
              className="char-img"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              style={{
                position: "relative",
                zIndex: 1,
                width: "clamp(200px, 32vw, 400px)",
                filter:
                  "drop-shadow(0px 20px 30px rgba(0,0,0,0.95)) drop-shadow(0 0 35px rgba(var(--color-primary-red-rgb), 0.3))",
              }}
            >
              <Image
                src={content.char.src}
                alt={content.char.alt}
                width={400}
                height={500}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </motion.div>
          </motion.div>

          {/* RIGHT — Content (mobile: shows above char) */}
          <motion.div
            className="coming-soon-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Transmission badge */}
            <div
              className="section-badge"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.6rem 1.5rem",
                background: "rgba(var(--color-primary-red-rgb), 0.05)",
                border: "1px solid rgba(var(--color-primary-red-rgb), 0.2)",
                borderRadius: "4px",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "var(--accent-red)",
                  boxShadow: "0 0 10px var(--accent-red)",
                }}
              />
              <Typography
                variant="caption"
                style={{
                  color: "var(--accent-red)",
                  fontWeight: 800,
                  letterSpacing: "0.2em",
                  fontSize: "0.7rem",
                }}
              >
                {content.transmission}
              </Typography>
            </div>

            <SectionHeader
              showDivider={false}
              maxWidth="100%"
              style={{
                marginBottom: "0.5rem",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div>
                <Typography variant="span" className="cyber-sweep">
                  {content.title.split("RUMBLE")[0]}
                </Typography>{" "}
                <Typography variant="span" className="cyber-sweep-red">
                  RUMBLE
                </Typography>
              </div>
            </SectionHeader>

            <GameDivider mt={0.5} mb={1.5} />

            <Typography
              variant="b1"
              style={{
                color: "var(--text-primary)",
                lineHeight: "1.8",
                width: "100%",
                marginBottom: "3rem",
                fontSize: "1.05rem",
                textAlign: "justify",
              }}
            >
              {content.description}
            </Typography>

            {/* Social Links */}
            <div
              className="coming-soon-social"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "2.5rem",
                flexWrap: "wrap",
              }}
            >
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial="initial"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  variants={{
                    initial: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: i * 0.1, duration: 0.6 },
                    },
                  }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1.25rem",
                    textDecoration: "none",
                    position: "relative",
                    color: "white",
                  }}
                >
                  {/* Rotating HUD Ring */}
                  <motion.div
                    variants={{
                      initial: { opacity: 0, scale: 0.8, rotate: 0 },
                      hover: { opacity: 1, scale: 1.15, rotate: 180 },
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    style={{
                      position: "absolute",
                      top: "-10px",
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      border: "1px dashed var(--accent-red)",
                      pointerEvents: "none",
                      zIndex: 0,
                    }}
                  />

                  <motion.div
                    variants={{
                      initial: {
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.05)",
                        color: "white",
                        scale: 1,
                      },
                      hover: {
                        background: "rgba(var(--color-primary-red-rgb), 0.15)",
                        borderColor: "var(--accent-red)",
                        color: "var(--accent-red)",
                        boxShadow: "0 0 30px rgba(var(--color-primary-red-rgb), 0.4)",
                        scale: 1.05,
                      },
                    }}
                    transition={{ duration: 0.15 }}
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {social.icon}
                  </motion.div>

                  <motion.div
                    variants={{
                      initial: { color: "white", y: 0 },
                      hover: { color: "var(--accent-red)", y: 2 },
                    }}
                    transition={{ duration: 0.15 }}
                    style={{ zIndex: 1 }}
                  >
                    <Typography
                      variant="caption"
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 900,
                        letterSpacing: "0.15em",
                        color: "inherit",
                      }}
                    >
                      {social.label.toUpperCase()}
                    </Typography>
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
