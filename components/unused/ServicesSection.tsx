"use client";

import { motion } from "framer-motion";
import { Typography } from "@ui-elements/Typography";

const services = [
  {
    title: "Conceptualization and Design",
    text: "We breathe life into ideas, transforming concepts into captivating game experiences. Our design process is collaborative and iterative, ensuring every aspect aligns with the client vision.",
    icon: "💡",
  },
  {
    title: "Art and Animation",
    text: "Our artists are masters of their craft, creating stunning visuals from character design to environmental art. We ensure every pixel is a work of art.",
    icon: "🎨",
  },
  {
    title: "Development and Production",
    text: "Robust gameplay engineering blended with cutting-edge visual effects. We bring technical precision and artistic imagination to every project.",
    icon: "⚙️",
  },
  {
    title: "Quality Assurance",
    text: "We take pride in delivering polished, bug-free experiences. Our QA team rigorously tests every aspect to meet our high standards.",
    icon: "🛡️",
  },
];

const reels = [
  {
    title: "Animations",
    text: "Character movement, combat actions, and cinematic sequences. From spine-based 2D to fully rigged 3D models.",
  },
  {
    title: "3D Art & Modeling",
    text: "High-quality assets optimized for mobile, PC, and console. Precision, performance, and artistic flair.",
  },
  {
    title: "VFX & Shaders",
    text: "Custom shaders and real-time combat effects to accelerate production and deliver high-quality gaming visuals.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{ padding: "6rem 0", backgroundColor: "var(--bg-primary)" }}
    >
      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <div style={{ width: "fit-content", marginBottom: "2.5rem" }}>
            <Typography variant="h2" style={{ marginBottom: "0.75rem" }}>
              <Typography variant="span" className="cyber-sweep">
                OUR
              </Typography>{" "}
              <Typography variant="span" className="cyber-sweep-red">
                SERVICES
              </Typography>
            </Typography>
            <div
              className="section-divider"
              style={{ width: "100%", marginBottom: 0 }}
            />
          </div>
          <Typography
            variant="b2"
            style={{
              marginTop: "0.9rem",
              color: "var(--text-secondary)",
              maxWidth: "34rem",
              lineHeight: 1.7,
              textTransform: "none",
            }}
          >
            From concept to post-launch support, we provide full-cycle
            development services powered by innovation.
          </Typography>
        </motion.div>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginBottom: "5rem",
          }}
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: i * 0.08 }}
              style={{
                padding: "2rem",
                background: "var(--bg-card)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "2px",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>
                {s.icon}
              </div>
              <Typography
                variant="h6"
                style={{
                  color: "var(--text-primary)",
                  marginBottom: "0.75rem",
                }}
              >
                {s.title}
              </Typography>
              <Typography
                variant="b3"
                style={{
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                  textTransform: "none",
                }}
              >
                {s.text}
              </Typography>
            </motion.div>
          ))}
        </div>

        {/* Show Reels Subsection */}
        <div style={{ marginTop: "6rem" }}>
          <Typography
            variant="h4"
            style={{
              color: "var(--text-primary)",
              marginBottom: "2.5rem",
              textAlign: "center",
            }}
          >
            Technical{" "}
            <Typography variant="span" style={{ color: "var(--accent-red)" }}>
              Expertise
            </Typography>
          </Typography>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {reels.map((r) => (
              <div
                key={r.title}
                style={{
                  padding: "1.5rem",
                  borderLeft: "2px solid var(--accent-red)",
                  background: "rgba(255,255,255,0.01)",
                }}
              >
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "1rem",
                    color: "var(--text-primary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {r.title}
                </Typography>
                <Typography
                  variant="b3"
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                    textTransform: "none",
                  }}
                >
                  {r.text}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
