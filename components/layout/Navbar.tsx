"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Typography } from "@ui-elements/Typography";
import { useRouter, usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Our Games", href: "#games" },
  { label: "Join Us", href: "#studio" },
];

export default function Navbar() {
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
      if (href === "#hero" || href === "#top") {
        router.push("/");
      } else {
        router.push("/" + href);
      }
    } else {
      if (href === "#hero" || href === "#top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
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
          background:
            "linear-gradient(90deg, var(--accent-red), var(--color-accent-bright))",
          transformOrigin: "0%",
          zIndex: 101,
          boxShadow: "0 0 15px rgba(var(--color-primary-red-rgb), 0.4)",
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
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          {/* Increased logo size and removed hardcoded 'STUDIO' text */}
          <Image
            src="/icons/logo.png"
            alt="Red Devil Studio logo"
            width={200}
            height={80}
            style={{
              objectFit: "contain",
              display: "block",
              width: "auto",
              height: "50px", // Adjusting height for better visual balance
            }}
            priority
          />
        </a>

        {/* ── RIGHT CONTROLS (Nav Links + Hamburger) ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {/* ── DESKTOP NAV LINKS (hidden on mobile via .nav-desktop CSS) ── */}
          <nav
            className="nav-desktop"
            style={{ display: "flex", alignItems: "center", gap: "2rem" }}
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
                  textTransform: "uppercase",
                }}
              >
                {link.label}
              </Typography>
            ))}
          </nav>

          {/* ── HAMBURGER (visible ONLY on mobile via .nav-hamburger CSS) ── */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="nav-hamburger"
            whileTap={{ scale: 0.9 }}
            whileHover={{ backgroundColor: "rgba(255,255,255, 0.05)" }}
            style={{
              background: "transparent",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              padding: "0.4rem 0.5rem",
              flexDirection: "column",
              gap: "5px",
              flexShrink: 0,
              transition: "all 0.3s ease",
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
                background: menuOpen
                  ? "var(--accent-red)"
                  : "var(--text-primary)",
                borderRadius: "1px",
                transition: "transform 0.25s ease, background 0.3s ease",
                transformOrigin: "center",
                transform: menuOpen
                  ? "rotate(-45deg) translate(0px, -7px)"
                  : "none",
              }}
            />
          </motion.button>
        </div>
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
                  <div
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      paddingBottom: "0.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <Typography
                      component="button"
                      variant="b1"
                      onClick={() => scrollTo(link.label === "Join Us" ? "#studio" : link.href)}
                      className="nav-link"
                      style={{
                        display: "inline-block",
                        textAlign: "left" as const,
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "var(--text-secondary)",
                        padding: "0.25rem 0",
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
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
