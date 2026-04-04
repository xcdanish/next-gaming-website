"use client";

import { motion } from "framer-motion";
import { Typography } from "@ui-elements/Typography";

const team = [
  {
    name: "Joyal Jose AG",
    role: "CEO",
    bio: "Visionary storyteller and founder of Red Devil Studio. Driving the future of immersive play.",
    initials: "JJ",
    color: "#c01020",
  },
  {
    name: "MD Saif Ali",
    role: "COO",
    bio: "Ensures operational excellence and production standards are met for every project.",
    initials: "SA",
    color: "#a00e1c",
  },
  {
    name: "Vyshnav KS",
    role: "CTO",
    bio: "Technical architect behind our proprietary shaders and advanced gaming systems.",
    initials: "VK",
    color: "#7a0f18",
  },
  {
    name: "Sagar Rajpoot",
    role: "CMO",
    bio: "Connecting our stories with a global audience. Expert in community-driven growth.",
    initials: "SR",
    color: "#c01020",
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
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
              <Typography variant="span" className="cyber-sweep">CORE</Typography>{" "}
              <Typography variant="span" className="cyber-sweep-red">TEAM</Typography>
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
              maxWidth: "36rem",
              lineHeight: 1.7,
              textTransform: "none"
            }}
          >
            Diverse backgrounds. One obsession. We hire for passion and retain
            with purpose.
          </Typography>
        </motion.div>

        <div className="grid-auto-team">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              style={{
                padding: "1.5rem",
                background: "var(--bg-card)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "2px",
                transition:
                  "border-color 0.3s ease, background-color 0.3s ease",
              }}
              whileHover={{ scale: 1.01 }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  borderRadius: "50%",
                  background: `radial-gradient(circle at 30% 30%, ${member.color}, #1a0000)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "1rem",
                  fontWeight: 700,
                  marginBottom: "1.1rem",
                  border: "2px solid rgba(224,27,36,0.35)",
                  fontFamily: "var(--font-bebas-neue, Bebas Neue, display)",
                }}
              >
                {member.initials}
              </div>

              <Typography
                variant="h6"
                style={{
                  color: "var(--text-primary)",
                  marginBottom: "0.25rem",
                }}
              >
                {member.name}
              </Typography>
              <Typography
                variant="caption"
                style={{
                  color: "var(--accent-red)",
                  marginBottom: "0.75rem",
                  fontWeight: 700,
                }}
              >
                {member.role}
              </Typography>
              <Typography
                variant="b3"
                style={{
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                }}
              >
                {member.bio}
              </Typography>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
