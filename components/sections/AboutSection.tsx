"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@ui-elements/SectionHeader";
import { Typography } from "@ui-elements/Typography";

export default function AboutSection() {
  return (
    <section id="about" style={{ 
      padding: "8rem 0", 
      backgroundColor: "var(--bg-primary)",
      backgroundImage: "radial-gradient(circle at 80% 50%, rgba(var(--color-primary-red-rgb), 0.05) 0%, transparent 40%)",
      overflow: "hidden" 
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div className="grid-2col" style={{ alignItems: "center", gap: "4rem" }}>
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SectionHeader>
              <Typography variant="span" className="cyber-sweep">NOT JUST A</Typography> <Typography variant="span" className="cyber-sweep-red">STUDIO.</Typography><br />
              <Typography variant="span" className="cyber-sweep">WE ARE</Typography> <Typography variant="span" className="cyber-sweep-red">VISIONARIES.</Typography>
            </SectionHeader>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <Typography variant="b1" style={{ color: "var(--text-primary)" }}>
                RedDevil Studio is not just a game development company. We are storytellers, artists, and visionaries. Established with a burning passion for gaming, our studio has evolved into a powerhouse of creativity and innovation.
              </Typography>
              
              <Typography variant="b2" style={{ color: "var(--text-secondary)" }}>
                We specialize in creating immersive worlds, igniting gaming passions, and delivering experiences that linger in the hearts and minds of players long after they put down their controllers.
              </Typography>

              <Typography variant="b2" style={{ color: "var(--text-secondary)" }}>
                We believe in the transformative power of games. Every project we undertake is a journey. A journey of exploration, creativity, and collaboration.
              </Typography>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "circOut" }}
            style={{ position: "relative" }}
          >
            {/* GLOW EFFECT */}
            <div style={{ 
              position: "absolute", 
              top: "50%", 
              left: "50%", 
              transform: "translate(-50%, -50%)",
              width: "100%", 
              height: "100%", 
              backgroundColor: "rgba(var(--color-primary-red-rgb), 0.15)",
              filter: "blur(100px)",
              borderRadius: "50%",
              zIndex: 0
            }} />

            <div style={{ 
              position: "relative", 
              zIndex: 1,
              filter: "drop-shadow(0 0 35px rgba(var(--color-primary-red-rgb), 0.3))"
            }}>
              <Image
                src="/images/damien.png"
                alt="Damien Character - Our Vision"
                width={700}
                height={900}
                style={{ 
                  objectFit: "contain",
                  width: "100%",
                  height: "auto",
                  filter: "contrast(1.1) brightness(1.1)"
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
