"use client";

import { motion } from "framer-motion";
import { CyberButton } from "@ui-elements/CyberButton";
import { Typography } from "@ui-elements/Typography";

const perks = [
  { icon: "🌐", text: "100% Remote" },
  { icon: "💰", text: "Competitive Pay" },
  { icon: "🎮", text: "Free Game Copies" },
  { icon: "📈", text: "Revenue Sharing" },
];

const openings = [
  {
    title: "Senior Gameplay Programmer",
    dept: "Engineering",
    type: "Full-time • Remote",
    location: "🌍 Global",
  },
  {
    title: "Environment Artist",
    dept: "Art",
    type: "Full-time • Hybrid",
    location: "🌍 Global",
  },
  {
    title: "Narrative Designer",
    dept: "Design",
    type: "Contract • Remote",
    location: "🌍 Global",
  },
  {
    title: "VFX Artist",
    dept: "Art",
    type: "Full-time • Remote",
    location: "🌍 Global",
  },
  {
    title: "QA Lead",
    dept: "Quality Assurance",
    type: "Full-time • Remote",
    location: "🌍 Global",
  },
];

export default function CareersSection() {
  return (
    <section
      id="careers"
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
          style={{ marginBottom: "3rem" }}
        >
          <div style={{ width: "fit-content", marginBottom: "2.5rem" }}>
            <Typography variant="h2" style={{ marginBottom: "0.75rem" }}>
              <Typography variant="span" className="cyber-sweep">JOIN THE</Typography> <Typography variant="span" className="cyber-sweep-red">REBELLION</Typography>
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
              textTransform: "none"
            }}
          >
            We&apos;re not looking for employees. We&apos;re looking for
            collaborators who bleed games.
          </Typography>
        </motion.div>

        {/* Perks */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="grid-4col"
          style={{ marginBottom: "3rem" }}
        >
          {perks.map((p) => (
            <div
              key={p.text}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1.5rem 1rem",
                background: "var(--bg-card)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "2px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "2rem" }}>{p.icon}</div>
              <Typography variant="caption" style={{ color: "var(--text-secondary)" }}>
                {p.text}
              </Typography>
            </div>
          ))}
        </motion.div>

        {/* Job listings */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          {openings.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: i * 0.065, duration: 0.45 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1.25rem 1.5rem",
                background: "var(--bg-card)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "2px",
                gap: "1rem",
                flexWrap: "wrap",
                cursor: "pointer",
                transition: "border-color 0.25s ease, background 0.25s ease",
              }}
            >
              <div>
                <Typography
                  variant="h6"
                  style={{
                    color: "var(--text-primary)",
                    marginBottom: "0.35rem",
                  }}
                >
                  {job.title}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="caption"
                    style={{
                      background: "rgba(224,27,36,0.14)",
                      color: "var(--accent-red)",
                      padding: "0.15rem 0.55rem",
                      borderRadius: "2px",
                    }}
                  >
                    {job.dept}
                  </Typography>
                  <Typography variant="b4" style={{ color: "#666" }}>
                    {job.type}
                  </Typography>
                  <Typography variant="b4" style={{ color: "#666" }}>
                    {job.location}
                  </Typography>
                </div>
              </div>
              <CyberButton style={{ fontSize: "0.75rem", padding: "0.6rem 1.25rem" }}>
                Apply Now
              </CyberButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
