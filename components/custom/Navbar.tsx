"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { CyberButton } from "@ui-elements/CyberButton";
import { Typography } from "@ui-elements/Typography";
import { useRouter, usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Our Games", href: "#games" },
  { label: "Join Us", href: "#about" },
];


import { useSound } from "@/components/providers/SoundProvider";

export default function Navbar() {
  const { isMuted, setIsMuted } = useSound();
  const router = useRouter();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll Progress Implementation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    if (pathname !== "/") {
      router.push("/" + href);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
        transition:
          "background 0.35s ease, border-color 0.35s ease, padding 0.35s ease",
        padding: scrolled ? "0.65rem 0" : "1.1rem 0",
      }}
    >
      {/* Scroll Progress Bar at the absolute top of the header */}
      <motion.div
        style={{
          scaleX,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, var(--accent-red), #ff2d37)",
          transformOrigin: "0%",
          zIndex: 101,
          boxShadow: "0 0 15px rgba(224, 27, 36, 0.4)",
        }}
      />
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* ── LOGO ── */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#hero");
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.55rem",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          {/* The logo image already contains "RED DEVIL" text */}
          <Image
            src="/icons/logo.png"
            alt="Red Devil Studio logo"
            width={120}
            height={60}
            style={{ objectFit: "contain", display: "block" }}
            priority
          />
          {/* Only show "STUDIO" — the logo itself has "RED DEVIL" */}
          <Typography
            variant="span"
            className="font-display"
            style={{
              fontSize: "1.30rem",
              fontWeight: 800,
              letterSpacing: "0.25em",
              color: "var(--accent-red)",
              marginTop: "0.3rem", // Optical alignment
            }}
          >
            STUDIO
          </Typography>
        </a>

        {/* ── DESKTOP NAV LINKS (hidden on mobile via .nav-desktop CSS) ── */}
        <nav
          className="nav-desktop"
          style={{ alignItems: "center", gap: "2rem" }}
        >
          {navLinks.map((link) => (
            <Typography
              component="button"
              variant="caption"
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="nav-link"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                lineHeight: 1,
                padding: "0.5rem 0",
              }}
            >
              {link.label}
            </Typography>
          ))}
        </nav>

        {/* ── DESKTOP CTA (hidden on mobile) ── */}
        <div
          className="nav-desktop"
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          {/* Audio Toggle */}
          <motion.button
            onClick={() => setIsMuted((prev) => !prev)}
            initial="initial"
            whileHover="hovered"
            whileTap={{ scale: 0.98 }}
            variants={{
              initial: {
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(224, 27, 36, 0.4)",
              },
              hovered: {
                background: "rgba(224, 27, 36, 0.1)",
                borderColor: "rgba(224, 27, 36, 0.8)",
              },
            }}
            style={{
              borderRadius: "2px",
              padding: "0.5rem 0.75rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              position: "relative",
              overflow: "hidden",
              border: "1px solid", // Keep border visible for framer-motion to animate color
            }}
          >
            {/* Base Pulse Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%)",
                zIndex: 1,
              }}
            />

            {/* Cyber-Sweep Animation */}
            <motion.div
              variants={{
                initial: { left: "-150%" },
                hovered: { left: "150%" },
              }}
              transition={{
                duration: 1.6,
                ease: [0.19, 1, 0.22, 1],
                delay: 0.05,
              }}
              style={{
                position: "absolute",
                top: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(90deg, transparent, rgba(224, 27, 36, 0.2), rgba(224, 27, 36, 0.4), rgba(224, 27, 36, 0.2), transparent)",
                transform: "skewX(-35deg)",
                zIndex: 5,
                opacity: 0.85,
                filter: "blur(2px)",
              }}
            />

            {/* Content Container */}
            <div
              style={{
                position: "relative",
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
              }}
            >
              {/* Minimalist Sound Bars */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "2px",
                  height: "12px",
                }}
              >
                {[1, 2, 3, 4].map((id) => (
                  <motion.div
                    key={id}
                    animate={
                      !isMuted
                        ? { height: ["4px", "12px", "6px", "10px", "4px"] }
                        : { height: "4px" }
                    }
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      delay: id * 0.15,
                    }}
                    style={{
                      width: "2px",
                      backgroundColor: "var(--accent-red)",
                      borderRadius: "1px",
                    }}
                  />
                ))}
              </div>
              <Typography
                variant="caption"
                style={{
                  color: "var(--accent-red)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.1em",
                }}
              >
                {isMuted ? "Audio Off" : "Audio On"}
              </Typography>
            </div>
          </motion.button>

          <CyberButton
            onClick={() => scrollTo("#gallery")}
            style={{
              fontSize: "0.65rem",
              padding: "0.5rem 1rem",
              height: "36px", // Specifically matching the audio button height
              minWidth: "100px",
            }}
          >
            Play Now
          </CyberButton>
        </div>

        {/* ── HAMBURGER (visible ONLY on mobile via .nav-hamburger CSS) ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="nav-hamburger"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.4rem",
            flexDirection: "column",
            gap: "5px",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              background: "var(--text-primary)",
              borderRadius: "1px",
              transition: "transform 0.25s ease",
              transformOrigin: "center",
              transform: menuOpen
                ? "rotate(45deg) translate(0px, 7px)"
                : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              background: "var(--text-primary)",
              borderRadius: "1px",
              transition: "opacity 0.25s ease, transform 0.25s ease",
              opacity: menuOpen ? 0 : 1,
              transform: menuOpen ? "scaleX(0)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              background: "var(--text-primary)",
              borderRadius: "1px",
              transition: "transform 0.25s ease",
              transformOrigin: "center",
              transform: menuOpen
                ? "rotate(-45deg) translate(0px, -7px)"
                : "none",
            }}
          />
        </button>
      </div>

      {/* ── MOBILE MENU DROPDOWN ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.26, ease: "easeInOut" }}
            style={{
              overflow: "hidden",
              background: "rgba(8,8,8,0.97)",
              borderTop: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div
              style={{
                maxWidth: "1280px",
                margin: "0 auto",
                padding: "1.5rem",
              }}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25 }}
                >
                  <Typography
                    component="button"
                    variant="b1"
                    onClick={() => scrollTo(link.href)}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left" as const,
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "var(--text-secondary)",
                      padding: "0.75rem 0",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLElement>) =>
                      (e.currentTarget.style.color = "var(--text-primary)")
                    }
                    onMouseLeave={(e: React.MouseEvent<HTMLElement>) =>
                      (e.currentTarget.style.color = "var(--text-secondary)")
                    }
                  >
                    {link.label}
                  </Typography>
                </motion.div>
              ))}
              <div style={{ marginTop: "1.25rem" }}>
                <CyberButton
                  onClick={() => {
                    scrollTo("#gallery");
                    setMenuOpen(false);
                  }}
                  style={{ width: "100%", marginTop: "1rem" }}
                >
                  Play Now
                </CyberButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
