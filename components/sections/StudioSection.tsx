"use client";

import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Typography } from "@ui-elements/Typography";
import { SectionHeader } from "@ui-elements/SectionHeader";
import { MapPin, Gamepad2 } from "lucide-react";
import { studioContent } from "@lib/studio-data";

import styles from "@style/StudioSection.module.css";

const TimelineMarker = () => {
  return (
    <div className={styles.timelineMarkerWrap}>
      <motion.div
        initial={{ scale: 0, backgroundColor: "transparent" }}
        whileInView={{
          scale: 1,
          backgroundColor: "var(--accent-red)",
          boxShadow: "0 0 15px rgba(var(--color-primary-red-rgb), 0.8)",
        }}
        viewport={{ once: false, amount: 0.8, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={styles.timelineMarkerCircle}
      />
    </div>
  );
};

export default function StudioSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="studio" ref={containerRef} className={styles.studioSection}>
      <div className={styles.studioContainer}>
        {/* Section Heading */}
        <motion.div
          className={styles.headingWrap}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <SectionHeader showDivider={false}>
            <Typography variant="span" className="cyber-sweep">
              THE
            </Typography>{" "}
            <Typography variant="span" className="cyber-sweep-red">
              REDDEVIL
            </Typography>
            <br />
            <Typography
              variant="span"
              className={`cyber-sweep ${styles.subheadingText}`}
            >
              {studioContent.subheading}
            </Typography>
          </SectionHeader>
        </motion.div>

        {/* Timeline Path */}
        <div className={styles.timeline}>
          {/* Vertical Line */}
          <motion.div className={styles.timelineLineBg}>
            <motion.div
              style={{ scaleY }}
              className={styles.timelineLineProgress}
            />
          </motion.div>

          {/* Evolution / Identity Item */}
          <div className={styles.timelineBlock}>
            <TimelineMarker />
            <motion.div
              className={styles.introRow}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
            >
              <div className={`group ${styles.logoBox}`}>
                <Image
                  src="/icons/reddevil-logo.png"
                  alt="RedDevil Studio Logo"
                  width={150}
                  height={150}
                  className={styles.logoImage}
                />
              </div>
              <div className={styles.introText}>
                <Typography variant="h3" className={styles.introTitle}>
                  {studioContent.studioName}
                </Typography>
                <Typography variant="b1" className={styles.introDescription}>
                  {studioContent.description}
                </Typography>
              </div>
            </motion.div>
          </div>

          {/* Stats Item */}
          <div className={styles.timelineBlock}>
            <TimelineMarker />
            <motion.div
              className={styles.statRow}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            >
              <div className={styles.statCard}>
                <div className={styles.statIconWrap}>
                  <MapPin size={32} />
                </div>
                <div>
                  <Typography variant="caption" className={styles.statLabel}>
                    LOCATION
                  </Typography>
                  <Typography variant="h4" className={styles.statValue}>
                    {studioContent.location}
                  </Typography>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIconWrap}>
                  <Gamepad2 size={32} />
                </div>
                <div>
                  <Typography variant="caption" className={styles.statLabel}>
                    EXPERIENCE
                  </Typography>
                  <Typography variant="h4" className={styles.statValue}>
                    {studioContent.experience}
                  </Typography>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Team Item */}
          <div className={styles.teamWrap}>
            <TimelineMarker />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
            >
              <SectionHeader showDivider={false} className={styles.teamHeader}>
                <Typography variant="span" className="cyber-sweep">
                  CORE
                </Typography>{" "}
                <Typography variant="span" className="cyber-sweep-red">
                  TEAM MEMBERS
                </Typography>
              </SectionHeader>

              <div
                className={`studio-team-grid lg:!grid-cols-4 ${styles.teamGrid}`}
              >
                {studioContent.team.map((member, i) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    className={styles.memberCard}
                  >
                    <div className={styles.memberImageWrap}>
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className={`group-hover:scale-110 ${styles.memberImage}`}
                        />
                      ) : (
                        <div
                          style={{
                            background: `radial-gradient(circle at 50% 50%, ${member.color}22, var(--color-black-pure))`,
                          }}
                          className={styles.memberInitials}
                        >
                          {member.initials}
                        </div>
                      )}
                      <div className={styles.memberGradient} />
                    </div>
                    <Typography variant="h6" className={styles.memberName}>
                      {member.name}
                    </Typography>
                    <Typography variant="caption" className={styles.memberRole}>
                      {member.role.toUpperCase()}
                    </Typography>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
