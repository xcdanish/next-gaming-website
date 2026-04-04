"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Typography } from "@ui-elements/Typography";
import { CyberButton } from "@ui-elements/CyberButton";

import { contactContent as content } from "@/lib/content";
import { MailIcon, PhoneIcon, MapPinIcon } from "@/components/icons";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Mail: MailIcon,
  Phone: PhoneIcon,
  MapPin: MapPinIcon,
};

export default function ContactSection() {


  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#1a1a1a",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "2px",
    padding: "0.75rem 1rem",
    color: "var(--text-primary)",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.2s ease",
    fontFamily: "var(--font-inter, Inter, sans-serif)",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.65rem",
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase" as const,
    color: "#555",
    marginBottom: "0.5rem",
  };

  return (
    <section
      id="contact"
      style={{ padding: "6rem 0", backgroundColor: "var(--bg-primary)", border: "none" }}
    >
      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        <div className="grid-2col">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <div style={{ width: "fit-content", marginBottom: "2.5rem" }}>
              <Typography variant="h2" style={{ marginBottom: "0.75rem" }}>
                <Typography variant="span" className="cyber-sweep">
                  {content.heading1}
                </Typography>{" "}
                <Typography variant="span" className="cyber-sweep-red">
                  {content.heading2}
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
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                marginBottom: "2.5rem",
                textTransform: "none",
              }}
            >
              {content.description}
            </Typography>

            {/* Contact info */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                marginBottom: "2.5rem",
              }}
            >
              {content.info.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      flexShrink: 0,
                      background: "rgba(224,27,36,0.1)",
                      borderRadius: "2px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.1rem",
                      color: "var(--accent-red)",
                    }}
                  >
                    {(() => {
                      const Icon = iconMap[item.icon];
                      return Icon ? <Icon size={20} /> : null;
                    })()}
                  </div>

                  <div>
                    <Typography
                      variant="caption"
                      style={{
                        color: "#555",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {item.label}
                    </Typography>
                    <Typography
                      variant="b3"
                      style={{
                        color: "var(--text-primary)",
                        fontWeight: 500,
                      }}
                    >
                      {item.value}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "1.5rem" }}>
              {content.socials.map((s) => (
                <Typography
                  component="button"
                  key={s}
                  variant="caption"
                  style={{
                    color: "#555",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLElement>) =>
                    (e.currentTarget.style.color = "var(--accent-red)")
                  }
                  onMouseLeave={(e: React.MouseEvent<HTMLElement>) =>
                    (e.currentTarget.style.color = "#555")
                  }
                >
                  {s}
                </Typography>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{ textAlign: "center", padding: "4rem 2rem" }}
              >
                <div style={{ fontSize: "4rem", marginBottom: "1.25rem" }}>
                  🎮
                </div>
                <Typography
                  variant="h3"
                  style={{
                    color: "var(--text-primary)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {content.successTitle}
                </Typography>
                <Typography variant="b2" style={{ color: "var(--text-secondary)" }}>
                  {content.successMessage}
                </Typography>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <div className="grid-2col" style={{ gap: "1rem" }}>
                  <div>
                    <label htmlFor="c-name" style={labelStyle}>
                      Name
                    </label>
                    <input
                      id="c-name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="c-email" style={labelStyle}>
                      Email
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="c-subject" style={labelStyle}>
                    Subject
                  </label>
                  <input
                    id="c-subject"
                    type="text"
                    required
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label htmlFor="c-message" style={labelStyle}>
                    Message
                  </label>
                  <textarea
                    id="c-message"
                    required
                    rows={5}
                    placeholder="Tell us what's on your mind..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    style={{ ...inputStyle, resize: "none" }}
                  />
                </div>

                <CyberButton
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    opacity: loading ? 0.65 : 1,
                    cursor: loading ? "not-allowed" : "pointer",
                  }}
                >
                  {loading ? "Sending..." : "Send Message"}
                </CyberButton>

              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
