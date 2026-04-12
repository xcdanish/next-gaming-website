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
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "visible",
        border: "none",
      }}
    >
      {/* Targetted background glow for char-4 */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "40%",
          left: "65%",
          transform: "translate(-50%, -10%)",
          width: "40vw",
          height: "60vh",
          backgroundImage:
            "radial-gradient(circle at center, rgba(var(--color-primary-red-rgb), 0.055) 0%, transparent 65%)",
          filter: "blur(40px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* ── CHAR-4 — center stage, behind content (theatrical) ── */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.92 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
        className="absolute bottom-0 left-1/2 md:left-[65%] w-[clamp(200px,40vw,260px)] md:w-[clamp(260px,28vw,400px)] z-0 pointer-events-none opacity-20 md:opacity-100"
        style={{
          transform: "translateX(-50%)",
          filter:
            "drop-shadow(0px 20px 30px rgba(0,0,0,0.95)) drop-shadow(0 0 35px rgba(var(--color-primary-red-rgb), 0.15))",
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

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.6rem 1.5rem",
              background: "rgba(var(--color-primary-red-rgb), 0.05)",
              border: "1px solid rgba(var(--color-primary-red-rgb), 0.2)",
              borderRadius: "4px",
              marginBottom: "3rem",
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
            maxWidth="fit-content"
            style={{
              marginBottom: "0.5rem",
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ textAlign: "center" }}>
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
              marginBottom: "5rem",
              lineHeight: "1.8",
              maxWidth: "650px",
              margin: "0 auto 5rem auto",
              fontSize: "1.1rem",
            }}
          >
            {content.description}
          </Typography>

          {/* Social Links */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "3rem",
              flexWrap: "wrap",
              marginTop: "3rem",
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
                    transition: { delay: i * 0.1, duration: 0.6 }
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
                {/* Rotating HUD Ring (Different Animation) */}
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
    </section>
  );
}
