"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typography } from "@ui-elements/Typography";
import { CyberButton } from "@ui-elements/CyberButton";
import { SectionHeader } from "@ui-elements/SectionHeader";

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

import styles from "@style/ContactSection.module.css";
import { sendEmail } from "@app/actions/sendEmail";

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
  const [error, setError] = useState<string | null>(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  useEffect(() => {
    if (showSuccessAlert) {
      const timer = setTimeout(() => setShowSuccessAlert(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessAlert]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await sendEmail(form);

      if (result.success) {
        setSubmitted(true);
        setShowSuccessAlert(true);
        // Reset form after success
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setError(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <div className="grid-2col">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <SectionHeader showDivider={true} className={styles.headingWrapper}>
              <Typography variant="span" className="cyber-sweep">
                {content.heading1}
              </Typography>{" "}
              <Typography variant="span" className="cyber-sweep-red">
                {content.heading2}
              </Typography>
            </SectionHeader>
            <Typography variant="b2" className={styles.description}>
              {content.description}
            </Typography>

            {/* Contact info */}
            <div className={styles.infoList}>
              {content.info.map((item) => (
                <div key={item.label} className={styles.infoItem}>
                  <div className={styles.iconBox}>
                    {(() => {
                      const Icon = iconMap[item.icon];
                      return Icon ? <Icon size={20} /> : null;
                    })()}
                  </div>

                  <div>
                    <Typography variant="caption" className={styles.infoLabel}>
                      {item.label}
                    </Typography>
                    <Typography variant="b3" className={styles.infoValue}>
                      {item.value}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.socialRow}>
              {socialLinks.map((social) => {
                const Icon = social.icon as React.ComponentType<{
                  size?: number;
                }>;
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
                    className={styles.socialLink}
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
                className={styles.successView}
              >
                <div className={styles.successIcon}>🎮</div>
                <Typography variant="h3" className={styles.successTitle}>
                  {content.successTitle}
                </Typography>
                <Typography variant="b2" style={{ color: "var(--text-primary)" }}>
                  {content.successMessage}
                </Typography>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formGrid}>
                  <div className={`group ${styles.formGroup}`}>
                    <label htmlFor="c-name" className={styles.label}>
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
                      className={styles.input}
                    />
                  </div>
                  <div className={`group ${styles.formGroup}`}>
                    <label htmlFor="c-email" className={styles.label}>
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
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={`group ${styles.formGroup}`}>
                  <label htmlFor="c-subject" className={styles.label}>
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
                    className={styles.input}
                  />
                </div>

                <div className={`group ${styles.formGroup}`}>
                  <label htmlFor="c-message" className={styles.label}>
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
                    className={styles.textarea}
                  />
                </div>

                {error && <div className={styles.errorMessage}>{error}</div>}

                <CyberButton
                  type="submit"
                  disabled={loading}
                  className={styles.submitButton}
                  style={{
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

      {/* SUCCESS ALERT TOAST (Top Right) */}
      {showSuccessAlert && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          className={styles.successToast}
        >
          <div className={styles.toastIcon}>🚀</div>
          <div>
            <Typography variant="caption" className={styles.toastTitle}>
              MISSION SUCCESS
            </Typography>
            <Typography variant="b3" className={styles.toastMessage}>
              Your message has been received!
            </Typography>
          </div>
          <button
            onClick={() => setShowSuccessAlert(false)}
            className={styles.closeButton}
          >
            ✕
          </button>
        </motion.div>
      )}
    </section>
  );
}
