"use client";

import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Typography } from "@ui-elements/Typography";
import { SectionHeader } from "@ui-elements/SectionHeader";
import { MapPin, Gamepad2 } from "lucide-react";

import { studioContent } from "@lib/studio-data";

const TimelineMarker = () => {
  return (
    <div
      style={{ position: "absolute", left: "-0.5rem", top: "1rem", zIndex: 10 }}
    >
      <motion.div
        initial={{ scale: 0, backgroundColor: "transparent" }}
        whileInView={{
          scale: 1,
          backgroundColor: "var(--accent-red)",
          boxShadow: "0 0 15px rgba(var(--color-primary-red-rgb), 0.8)",
        }}
        viewport={{ once: false, amount: 0.8, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.4, ease: "backOut" }}
        style={{
          width: "1rem",
          height: "1rem",
          borderRadius: "50%",
          border: "2px solid var(--accent-red)",
        }}
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
    <section
      id="studio"
      ref={containerRef}
      style={{
        padding: "10rem 0 12rem", // Increased padding
        backgroundColor: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
        border: "none",
      }}
    >
      <style>{`
        @media (max-width: 767px) {
          #studio {
            padding: 5rem 0 7rem !important;
          }
          #studio .studio-container {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          #studio .studio-heading-wrap {
            margin-bottom: 3rem !important;
          }
          #studio .studio-timeline {
            padding-left: 1.2rem !important;
            padding-right: 0.5rem !important;
          }
          #studio .studio-timeline-block {
            margin-bottom: 4rem !important;
          }
          #studio .studio-intro-row {
            flex-direction: column !important;
            gap: 1.5rem !important;
          }
          #studio .studio-logo-box {
            width: 140px !important;
            height: 140px !important;
            padding: 1rem !important;
          }
          #studio .studio-intro-text {
            min-width: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          #studio .studio-stat-row {
            flex-direction: column !important;
            gap: 1rem !important;
          }
          #studio .studio-stat-card {
            min-width: 0 !important;
            width: 100% !important;
            flex: 1 1 auto !important;
            padding: 1.5rem !important;
          }
          /* Keep space so timeline dot does not overlap the team title (padding 0 was too tight on mobile) */
          #studio .studio-team-wrap {
            // padding-left: 1.75rem !important;
          }
          #studio .studio-team-header {
            margin-bottom: 2.25rem !important;
          }
          #studio .studio-team-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 1rem !important;
          }
        }
        @media (max-width: 480px) {
          #studio .studio-timeline {
            // padding-left: 1.75rem !important;
          }
          #studio .studio-team-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <div
        className="studio-container"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}
      >
        {/* Section Heading */}
        <motion.div
          className="studio-heading-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: "6rem" }} // Increased margin
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
              className="cyber-sweep"
              style={{ fontSize: "0.6em", opacity: 0.8 }}
            >
              {studioContent.subheading}
            </Typography>
          </SectionHeader>
        </motion.div>

        {/* Timeline Path */}
        <div
          className="studio-timeline"
          style={{ position: "relative", paddingLeft: "3.5rem" }}
        >
          {/* Vertical Line */}
          <motion.div
            style={{
              position: "absolute",
              left: "0",
              top: "0",
              bottom: "0",
              width: "2px",
              backgroundColor: "rgba(var(--color-primary-red-rgb), 0.1)", // Faded background line
              transformOrigin: "top",
            }}
          >
            <motion.div
              style={{
                position: "absolute",
                left: "0",
                top: "0",
                bottom: "0",
                width: "2px",
                backgroundColor: "var(--accent-red)",
                scaleY,
                transformOrigin: "top",
                boxShadow: "0 0 15px rgba(var(--color-primary-red-rgb), 0.6)",
              }}
            />
          </motion.div>

          {/* Evolution / Identity Item */}
          <div
            className="studio-timeline-block"
            style={{ position: "relative", marginBottom: "8rem" }}
          >
            <TimelineMarker />
            <motion.div
              className="studio-intro-row"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                display: "flex",
                gap: "2.5rem",
                alignItems: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <div
                className="group studio-logo-box"
                style={{
                  flex: "0 0 auto",
                  width: "160px",
                  height: "160px",
                  background: "var(--color-gray-dark)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(var(--color-primary-red-rgb), 0.2)",
                  padding: "1.5rem",
                  transition: "all 0.3s ease",
                }}
              >
                <Image
                  src="/icons/reddevil-logo.png"
                  alt="RedDevil Studio Logo"
                  width={150}
                  height={150}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div
                className="studio-intro-text min-w-0"
                style={{ flex: "1 1 0", minWidth: "min(100%, 300px)" }}
              >
                <Typography
                  variant="h3"
                  style={{ marginBottom: "1.5rem", color: "var(--accent-red)" }}
                >
                  {studioContent.studioName}
                </Typography>
                <Typography
                  variant="b1"
                  style={{
                    color: "var(--text-primary)",
                    maxWidth: "800px",
                    lineHeight: "1.8",
                    fontSize: "1.1rem",
                    textAlign: "justify",
                  }}
                >
                  {studioContent.description}
                </Typography>
              </div>
            </motion.div>
          </div>

          {/* Stats Item */}
          <div
            className="studio-timeline-block"
            style={{ position: "relative", marginBottom: "8rem" }}
          >
            <TimelineMarker />
            <motion.div
              className="studio-stat-row"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}
            >
              <div
                className="studio-stat-card min-w-0"
                style={{
                  background:
                    "linear-gradient(135deg, var(--bg-card) 0%, var(--bg-secondary) 100%)",
                  padding: "2.5rem",
                  borderRadius: "8px",
                  border: "1px solid rgba(var(--color-primary-red-rgb), 0.15)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  minWidth: "min(100%, 300px)",
                  flex: "1 1 280px",
                }}
              >
                <div
                  style={{
                    background: "rgba(var(--color-primary-red-rgb), 0.1)",
                    padding: "0.85rem",
                    borderRadius: "50%",
                    color: "var(--accent-red)",
                  }}
                >
                  <MapPin size={32} />
                </div>
                <div>
                  <Typography
                    variant="caption"
                    style={{
                      color: "var(--accent-red)",
                      textTransform: "uppercase",
                      fontSize: "0.85rem",
                      letterSpacing: "0.15em",
                      fontWeight: 900,
                      marginBottom: "0.5rem",
                      display: "block",
                    }}
                  >
                    LOCATION
                  </Typography>
                  <Typography variant="h4" style={{ letterSpacing: "0.05em" }}>
                    {studioContent.location}
                  </Typography>
                </div>
              </div>

              <div
                className="studio-stat-card min-w-0"
                style={{
                  background:
                    "linear-gradient(135deg, var(--bg-card) 0%, var(--bg-secondary) 100%)",
                  padding: "2.5rem",
                  borderRadius: "8px",
                  border: "1px solid rgba(var(--color-primary-red-rgb), 0.15)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  minWidth: "min(100%, 300px)",
                  flex: "1 1 280px",
                }}
              >
                <div
                  style={{
                    background: "rgba(var(--color-primary-red-rgb), 0.1)",
                    padding: "0.85rem",
                    borderRadius: "50%",
                    color: "var(--accent-red)",
                  }}
                >
                  <Gamepad2 size={32} />
                </div>
                <div>
                  <Typography
                    variant="caption"
                    style={{
                      color: "var(--accent-red)",
                      textTransform: "uppercase",
                      fontSize: "0.85rem",
                      letterSpacing: "0.15em",
                      fontWeight: 900,
                      marginBottom: "0.5rem",
                      display: "block",
                    }}
                  >
                    EXPERIENCE
                  </Typography>
                  <Typography variant="h4" style={{ letterSpacing: "0.05em" }}>
                    {studioContent.experience}
                  </Typography>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Team Item */}
          <div style={{ position: "relative", marginTop: "6rem" }}>
            <TimelineMarker />
            <motion.div
              className="studio-team-wrap"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              // style={{ paddingLeft: "1.5rem" }} // Add space from the timeline circle
            >
              <SectionHeader
                showDivider={false}
                className="studio-team-header"
                style={{ marginBottom: "4.5rem", paddingLeft: "1.5rem" }}
              >
                <Typography variant="span" className="cyber-sweep">
                  CORE
                </Typography>{" "}
                <Typography variant="span" className="cyber-sweep-red">
                  TEAM MEMBERS
                </Typography>
              </SectionHeader>

              <div
                className="studio-team-grid lg:!grid-cols-4"
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
                  gap: "2rem",
                  marginTop: "2rem",
                  width: "100%",
                  minWidth: 0,
                }}
              >
                {studioContent.team.map((member, i) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    style={{ position: "relative" }}
                  >
                    <div
                      style={{
                        position: "relative",
                        aspectRatio: "1/1.2",
                        background: "var(--bg-card)",
                        borderRadius: "4px",
                        overflow: "hidden",
                        marginBottom: "1.25rem",
                        border: "1px solid rgba(255,255,255,0.05)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          style={{
                            objectFit: "cover",
                            transition: "transform 0.5s ease",
                          }}
                          className="group-hover:scale-110"
                        />
                      ) : (
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            background: `radial-gradient(circle at 50% 50%, ${member.color}22, var(--color-black-pure))`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "3rem",
                            fontWeight: 700,
                            fontFamily: "var(--font-bebas-neue)",
                            color: "rgba(var(--color-primary-red-rgb), 0.5)",
                          }}
                        >
                          {member.initials}
                        </div>
                      )}
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: "40%",
                          background:
                            "linear-gradient(to top, var(--bg-primary) 0%, transparent 100%)",
                        }}
                      />
                    </div>
                    <Typography
                      variant="h6"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      style={{
                        color: "var(--accent-red)",
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                      }}
                    >
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
