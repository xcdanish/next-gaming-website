"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Typography } from "@ui-elements/Typography";
import { useTheme } from "@providers/ThemeProvider";
import styles from "@style/KIGISection.module.css";

export default function KIGISection() {
  const { theme } = useTheme();

  const logoSrc =
    theme === "dark" ? "/images/kigi-dark.png" : "/images/kigi-light.png";

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* LEFT COLUMN - THE TECH VISUAL */}
          <motion.div
            className={styles.visualPanel}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* HUD Rings */}
            <div className={styles.hudFrame} />
            <motion.div
              className={styles.hudFrame}
              style={{
                padding: "20px",
                animationDirection: "reverse",
                opacity: 0.5,
              }}
            />

            {/* Corner Markers */}
            {/* Animated Corner Brackets */}
            <div className={`${styles.cornerBracket} ${styles.topLeft}`} />
            <div className={`${styles.cornerBracket} ${styles.topRight}`} />
            <div className={`${styles.cornerBracket} ${styles.bottomLeft}`} />
            <div className={`${styles.cornerBracket} ${styles.bottomRight}`} />

            {/* Floating Data Particles */}
            <motion.div
              className={styles.dataParticle}
              animate={{ y: [0, -40, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{ left: "10%" }}
            />
            <motion.div
              className={styles.dataParticle}
              animate={{ y: [0, -60, 0], opacity: [0, 0.8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
                delay: 1,
              }}
              style={{ right: "15%" }}
            />
            <motion.div
              className={styles.dataParticle}
              animate={{ y: [0, -30, 0], opacity: [0, 0.5, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: 2,
              }}
              style={{ bottom: "20%", left: "20%" }}
            />

            {/* The Logo Container */}
            <motion.div
              className={styles.logoWrapper}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {/* Scanline Effect (Behind Logo) */}
              <div className={styles.scanline} style={{ zIndex: -1 }} />

              <Image
                src={logoSrc}
                alt="KRAFTON India Gaming Incubator"
                width={500}
                height={280}
                className={styles.logo}
                priority
              />
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - THE CONTENT */}
          <motion.div
            className={styles.contentCol}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Typography variant="h2" className={styles.title}>
              <span className="cyber-sweep">KRAFTON India</span> <br />
              <span className={`cyber-sweep-red italic ${styles.titleSpan}`}>
                Gaming Incubator (KIGI)
              </span>
            </Typography>

            <motion.div
              className={styles.descriptionBox}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
            >
              <Typography variant="b1" className={styles.p}>
                RedDevil Studio is part of Cohort 3 of the KRAFTON India Gaming
                Incubator (KIGI), an initiative by KRAFTON India that supports
                emerging game development studios.
              </Typography>
              <Typography variant="b1" className={styles.p}>
                As part of the cohort, we are engaged in a structured
                environment that provides access to industry guidance,
                mentorship, and development support.
              </Typography>
              <Typography variant="b1" className={styles.p}>
                This forms a part of our ongoing effort to strengthen our
                processes and continue building quality gaming experiences.
              </Typography>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
