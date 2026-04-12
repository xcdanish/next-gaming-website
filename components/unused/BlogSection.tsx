"use client";

import { motion } from "framer-motion";
import { Typography } from "@ui-elements/Typography";

const reviews = [
  {
    id: "review-1",
    game: "Rot In Hell",
    name: "Dibyendu Naik",
    text: "It's a really well build game, I can't even tell if it's made on unity or on unreal. The graphics are also really nice. Would love to play this game on release !!",
  },
  {
    id: "review-2",
    game: "8Ball Pools",
    name: "Yuvraj Singh",
    text: "RedDevil Studio nailed it with 8Ball Pools! Smooth gameplay, great graphics, and super addictive. Loved every match.",
  },
  {
    id: "review-3",
    game: "Tambola",
    name: "Arihant Rao",
    text: "Super fun and engaging! The design is clean, gameplay is smooth, and it brings people together. Loved every moment.",
  },
  {
    id: "review-4",
    game: "Jotti Down",
    name: "Kumar Sanjeev",
    text: "An absolute thrill! The gameplay is smooth, graphics are stunning, and it's super addictive. Kudos to the team!",
  },
  {
    id: "review-5",
    game: "Ludo",
    name: "Aarookiya Nathan",
    text: "Super fun and addictive! I enjoy playing it with family and friends. Brings back childhood memories with a modern twist. Great game for all ages!",
  },
];

export default function BlogSection() {
  return (
    <section
      id="blog"
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
                GAME
              </Typography>{" "}
              <Typography variant="span" className="cyber-sweep-red">
                REVIEWS
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
            Built with precision. Validated by players. Don&apos;t just take our
            word for it—listen to our global community.
          </Typography>
        </motion.div>

        <div className="grid-3col">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              style={{
                padding: "2rem",
                background: "var(--bg-card)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "2px",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.25s ease",
              }}
            >
              <div style={{ marginBottom: "1rem" }}>
                <Typography
                  variant="caption"
                  style={{
                    fontWeight: 700,
                    color: "var(--accent-red)",
                  }}
                >
                  {review.game}
                </Typography>
              </div>

              <Typography
                variant="b2"
                style={{
                  fontStyle: "italic",
                  color: "var(--text-primary)",
                  lineHeight: 1.65,
                  marginBottom: "1.5rem",
                  flex: 1,
                  textTransform: "none",
                }}
              >
                &ldquo;{review.text}&rdquo;
              </Typography>

              <div
                style={{
                  paddingTop: "1rem",
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <Typography
                  variant="b3"
                  style={{ fontWeight: 700, color: "var(--text-secondary)" }}
                >
                  {review.name}
                </Typography>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
