"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@ui-elements/SectionHeader";
import { Typography } from "@ui-elements/Typography";

const gallery = [
  {
    src: "/images/rooster-rumble.png",
    alt: "Champion Rooster",
    caption: "Champion Rooster",
  },
  {
    src: "/images/game-void.png",
    alt: "Cyber Battle",
    caption: "Cyber Battle",
  },
  {
    src: "/images/game-shadow.png",
    alt: "Battle Arena",
    caption: "Battle Arena",
  },
  {
    src: "/images/game-inferno.png",
    alt: "Training Camp",
    caption: "Training Camp",
  },
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      style={{ padding: "8rem 0", backgroundColor: "var(--bg-primary)" }}
    >
      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        <SectionHeader>
          <Typography variant="span" className="cyber-sweep">
            A GLIMPSE INTO
          </Typography>{" "}
          <Typography variant="span" className="cyber-sweep-red">
            THE RUMBLE
          </Typography>
        </SectionHeader>

        <Typography
          variant="b2"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{
            marginTop: "0.9rem",
            color: "var(--text-secondary)",
            maxWidth: "34rem",
            lineHeight: 1.7,
            marginBottom: "3.5rem",
            textTransform: "none",
          }}
        >
          Every feather, every arena, every fighter — crafted with passion.
        </Typography>

        {/* Masonry-style Grid - Simple implementation with CSS grid column count */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {gallery.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              style={{
                position: "relative",
                cursor: "pointer",
                borderRadius: "2px",
                overflow: "hidden",
                boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4/3",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="hover:scale-110 transition-transform duration-700"
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    padding: "1.5rem 1rem 1rem",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)",
                    zIndex: 1,
                  }}
                >
                  <Typography
                    variant="caption"
                    style={{
                      color: "var(--color-white)",
                      fontWeight: 700,
                    }}
                  >
                    {img.caption}
                  </Typography>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
