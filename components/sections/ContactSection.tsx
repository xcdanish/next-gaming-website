"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Typography } from "@ui-elements/Typography";
import { CyberButton } from "@ui-elements/CyberButton";

import { contactContent as content } from "@lib/contact-data";
import {
  InstagramIcon,
  XIcon,
  LinkedinIcon,
  YoutubeIcon,
  DiscordIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
} from "@components/icons";
import { socialLinks as socialData } from "@lib/social-data";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Mail: MailIcon,
  Phone: PhoneIcon,
  MapPin: MapPinIcon,
  Instagram: InstagramIcon,
  X: XIcon,
  LinkedIn: LinkedinIcon,
  YouTube: YoutubeIcon,
  Discord: DiscordIcon,
};

export default function ContactSection() {
  const socialLinks = socialData.map((link) => ({
    ...link,
    icon: iconMap[link.label] || null,
  }));
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

  return (
    <section
      id="contact"
      style={{
        padding: "6rem 0",
        backgroundColor: "var(--bg-primary)",
        border: "none",
      }}
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
                color: "var(--text-primary)",
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
                      background: "rgba(var(--color-primary-red-rgb), 0.1)",
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
                        color: "var(--text-primary)",
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

            <div style={{ display: "flex", gap: "1rem" }}>
              {socialLinks.map((social) => {
                const Icon = social.icon as React.ComponentType<{ size?: number }>;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.1,
                      color: "var(--accent-red)",
                      y: -3,
                    }}
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-primary)",
                      transition: "all 0.3s cubic-bezier(0.19, 1, 0.22, 1)",
                    }}
                  >
                    {Icon && <Icon size={18} />}
                  </motion.a>
                );
              })}
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
                <Typography
                  variant="b2"
                  style={{ color: "var(--text-primary)" }}
                >
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
                  <div className="group flex flex-col">
                    <label
                      htmlFor="c-name"
                      className="block text-[0.65rem] font-bold tracking-[0.18em] uppercase text-white mb-2 transition-colors group-focus-within:text-[var(--accent-red)]"
                    >
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
                      className="w-full bg-[var(--bg-card)] border border-white/10 rounded-sm py-3 px-4 text-[0.875rem] text-white outline-none transition-all hover:bg-white/5 hover:border-white/20 focus:bg-[rgba(var(--color-primary-red-rgb),0.05)] focus:border-[var(--accent-red)] focus:shadow-[0_0_15px_rgba(var(--color-primary-red-rgb),0.25)]"
                    />
                  </div>
                  <div className="group flex flex-col">
                    <label
                      htmlFor="c-email"
                      className="block text-[0.65rem] font-bold tracking-[0.18em] uppercase text-white mb-2 transition-colors group-focus-within:text-[var(--accent-red)]"
                    >
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
                      className="w-full bg-[var(--bg-card)] border border-white/10 rounded-sm py-3 px-4 text-[0.875rem] text-white outline-none transition-all hover:bg-white/5 hover:border-white/20 focus:bg-[rgba(var(--color-primary-red-rgb),0.05)] focus:border-[var(--accent-red)] focus:shadow-[0_0_15px_rgba(var(--color-primary-red-rgb),0.25)]"
                    />
                  </div>
                </div>

                <div className="group flex flex-col">
                  <label
                    htmlFor="c-subject"
                    className="block text-[0.65rem] font-bold tracking-[0.18em] uppercase text-neutral-400 mb-2 transition-colors group-focus-within:text-white"
                  >
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
                    className="w-full bg-[var(--bg-card)] border border-white/10 rounded-sm py-3 px-4 text-[0.875rem] text-white outline-none transition-all hover:bg-white/5 hover:border-white/20 focus:bg-[rgba(var(--color-primary-red-rgb),0.05)] focus:border-[var(--accent-red)] focus:shadow-[0_0_15px_rgba(var(--color-primary-red-rgb),0.25)]"
                  />
                </div>

                <div className="group flex flex-col">
                  <label
                    htmlFor="c-message"
                    className="block text-[0.65rem] font-bold tracking-[0.18em] uppercase text-neutral-400 mb-2 transition-colors group-focus-within:text-white"
                  >
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
                    className="w-full bg-[var(--bg-card)] border border-white/10 rounded-sm py-3 px-4 text-[0.875rem] text-white outline-none transition-all hover:bg-white/5 hover:border-white/20 focus:bg-[rgba(var(--color-primary-red-rgb),0.05)] focus:border-[var(--accent-red)] focus:shadow-[0_0_15px_rgba(var(--color-primary-red-rgb),0.25)]"
                    style={{ resize: "none" }}
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
