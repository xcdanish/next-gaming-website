"use client";

import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Typography } from "@ui-elements/Typography";
import { MapPin, Gamepad2 } from "lucide-react";

import { studioContent } from "@/lib/content";

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
          boxShadow: "0 0 15px rgba(224, 27, 36, 0.8)",
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
      id="about"
      ref={containerRef}
      style={{
        padding: "10rem 0 12rem", // Increased padding
        backgroundColor: "var(--bg-primary)",
        position: "relative",
        overflow: "visible",
        border: "none",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: "6rem" }} // Increased margin
        >
          <Typography
            variant="h2"
            style={{
              color: "var(--accent-red)",
              marginBottom: "0.5rem",
              letterSpacing: "0.1em",
            }}
          >
            {studioContent.heading}
          </Typography>
          <Typography
            variant="h3"
            style={{ opacity: 0.9, letterSpacing: "0.05em" }}
          >
            {studioContent.subheading}
          </Typography>
        </motion.div>

        {/* Timeline Path */}
        <div style={{ position: "relative", paddingLeft: "3.5rem" }}>
          {/* Vertical Line */}
          <motion.div
            style={{
              position: "absolute",
              left: "0",
              top: "0",
              bottom: "0",
              width: "2px",
              backgroundColor: "rgba(224, 27, 36, 0.1)", // Faded background line
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
                boxShadow: "0 0 15px rgba(224, 27, 36, 0.6)",
              }}
            />
          </motion.div>

          {/* Evolution / Identity Item */}
          <div style={{ position: "relative", marginBottom: "8rem" }}>
            <TimelineMarker />
            <motion.div
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
                className="group"
                style={{
                  flex: "0 0 auto",
                  width: "160px",
                  height: "160px",
                  background: "#121212",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(224, 27, 36, 0.2)",
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
              <div style={{ flex: "1", minWidth: "300px" }}>
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
                  }}
                >
                  {studioContent.description}
                </Typography>
              </div>
            </motion.div>
          </div>

          {/* Stats Item */}
          <div style={{ position: "relative", marginBottom: "8rem" }}>
            <TimelineMarker />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(135deg, var(--bg-card) 0%, var(--bg-secondary) 100%)",
                  padding: "2.5rem",
                  borderRadius: "8px",
                  border: "1px solid rgba(224, 27, 36, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  minWidth: "300px",
                  flex: "1",
                }}
              >
                <div
                  style={{
                    background: "rgba(224, 27, 36, 0.1)",
                    padding: "1.25rem",
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
                style={{
                  background:
                    "linear-gradient(135deg, var(--bg-card) 0%, var(--bg-secondary) 100%)",
                  padding: "2.5rem",
                  borderRadius: "8px",
                  border: "1px solid rgba(224, 27, 36, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  minWidth: "300px",
                  flex: "1",
                }}
              >
                <div
                  style={{
                    background: "rgba(224, 27, 36, 0.1)",
                    padding: "1.25rem",
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
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ paddingLeft: "1.5rem" }} // Add space from the timeline circle
            >
              <Typography
                variant="h2"
                style={{
                  marginBottom: "4.5rem",
                  color: "var(--accent-red)",
                  letterSpacing: "0.08em",
                  fontWeight: 900,
                }}
              >
                CORE TEAM MEMBERS
              </Typography>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "2rem",
                  marginTop: "2rem",
                  width: "100%",
                }}
                className="lg:!grid-cols-4" // Force 4 columns on larger screens
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
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          background: `radial-gradient(circle at 50% 50%, ${member.color}22, #000)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "3rem",
                          fontWeight: 700,
                          fontFamily: "var(--font-bebas-neue)",
                          color: "rgba(224, 27, 36, 0.5)",
                        }}
                      >
                        {member.initials}
                      </div>
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
                    <Typography variant="h6" style={{ color: "var(--text-primary)" }}>
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
