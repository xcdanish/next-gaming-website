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

import styles from "@style/ComingSoonSection.module.css";

export default function ComingSoonSection() {
  const socialLinks = socialData.map((link) => ({
    ...link,
    icon: iconMap[link.label] || null,
  }));

  return (
    <section id="notify" className={styles.section}>
      <div className={styles.container}>
        <div className={`grid-2col ${styles.grid}`}>
          {/* LEFT — Character Image (mobile: shows below content) */}
          <motion.div
            className={styles.charCol}
            initial={{ opacity: 0, scale: 0.9, x: -40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {/* Glow behind char */}
            <div aria-hidden="true" className={styles.glow} />

            <motion.div
              className={styles.charImg}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
            >
              <Image
                src={content.char.src}
                alt={content.char.alt}
                width={400}
                height={500}
                className={styles.img}
              />
            </motion.div>
          </motion.div>

          {/* RIGHT — Content (mobile: shows above char) */}
          <motion.div
            className={styles.contentCol}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Transmission badge */}
            <div className={styles.badge}>
              <div className={styles.badgeDot} />
              <Typography variant="caption" className={styles.badgeText}>
                {content.transmission}
              </Typography>
            </div>

            <SectionHeader
              showDivider={false}
              maxWidth="100%"
              className={styles.headerWrap}
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

            <Typography variant="b1" className={styles.description}>
              {content.description}
            </Typography>

            {/* Social Links */}
            <div className={styles.socialGrid}>
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial="initial"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: false }}
                  variants={{
                    initial: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: i * 0.1, duration: 0.6 },
                    },
                  }}
                  className={styles.socialLink}
                >
                  {/* Rotating HUD Ring */}
                  <motion.div
                    variants={{
                      initial: { opacity: 0, scale: 0.8, rotate: 0 },
                      hover: { opacity: 1, scale: 1.15, rotate: 180 },
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className={styles.hudRing}
                  />

                  <motion.div
                    variants={{
                      initial: {
                        background: "var(--bg-pill)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-primary)",
                        scale: 1,
                      },
                      hover: {
                        background: "rgba(var(--color-primary-red-rgb), 0.15)",
                        borderColor: "var(--accent-red)",
                        color: "var(--accent-red)",
                        boxShadow:
                          "0 0 30px rgba(var(--color-primary-red-rgb), 0.4)",
                        scale: 1.05,
                      },
                    }}
                    transition={{ duration: 0.15 }}
                    className={styles.socialIconWrap}
                  >
                    {social.icon}
                  </motion.div>

                  <motion.div
                    variants={{
                      initial: { color: "var(--text-primary)", y: 0 },
                      hover: { color: "var(--accent-red)", y: 2 },
                    }}
                    transition={{ duration: 0.15 }}
                    style={{ zIndex: 1 }}
                  >
                    <Typography
                      variant="caption"
                      className={styles.socialLabel}
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
