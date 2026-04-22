"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Typography } from "@ui-elements/Typography";
import { useRouter, usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "#hero-carousel" },
  { label: "Our Games", href: "#games" },
  { label: "Join Us", href: "#studio" },
];

import dynamic from "next/dynamic";
import styles from "@style/Navbar.module.css";

const ThemeToggle = dynamic(
  () => import("@ui-elements/ThemeToggle").then((mod) => mod.ThemeToggle),
  {
    ssr: false,
    loading: () => <div className="w-10 h-10" />,
  },
);

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
      if (href === "#hero-carousel" || href === "#top") {
        router.push("/");
      } else {
        router.push("/" + href);
      }
    } else {
      if (href === "#hero-carousel" || href === "#top") {
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
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
    >
      {/* Scroll Progress Bar at the absolute top of the header */}
      <motion.div style={{ scaleX }} className={styles.progressBar} />
      <div className={styles.headerContainer}>
        {/* ── LOGO ── */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#hero");
          }}
          className={styles.logoLink}
        >
          {/* Increased logo size and removed hardcoded 'STUDIO' text */}
          <Image
            src="/icons/logo.png"
            alt="Red Devil Studio logo"
            width={200}
            height={80}
            className={styles.logoImage}
            priority
          />
        </a>

        {/* ── RIGHT CONTROLS (Nav Links + Hamburger) ── */}
        <div className={styles.controlsWrap}>
          {/* ── DESKTOP NAV LINKS (hidden on mobile via .nav-desktop CSS) ── */}
          <nav className={`nav-desktop ${styles.navDesktop}`}>
            {navLinks.map((link) => (
              <Typography
                component="button"
                variant="span"
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`nav-link ${styles.navLink}`}
              >
                {link.label}
              </Typography>
            ))}
          </nav>

          {/* ── HAMBURGER (visible ONLY on mobile via .nav-hamburger CSS) ── */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className={`nav-hamburger ${styles.hamburger}`}
              whileTap={{ scale: 0.9 }}
              whileHover={{ backgroundColor: "var(--bg-pill)" }}
            >
              <span
                className={`${styles.hamburgerLine} ${
                  menuOpen ? styles.hamburgerLineTopOpen : ""
                }`}
              />
              <span
                className={`${styles.hamburgerLine} ${
                  menuOpen ? styles.hamburgerLineMidOpen : ""
                }`}
              />
              <span
                className={`${styles.hamburgerLine} ${
                  menuOpen ? styles.hamburgerLineBotOpen : ""
                }`}
              />
            </motion.button>
          </div>
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
            className={styles.mobileMenu}
          >
            <div className={styles.mobileMenuContainer}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.04,
                    duration: 0.25,
                    ease: "easeInOut",
                  }}
                >
                  <div className={styles.mobileNavLinkWrapper}>
                    <Typography
                      component="button"
                      variant="b1"
                      onClick={() => scrollTo(link.href)}
                      className={`nav-link ${styles.mobileNavLink}`}
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
