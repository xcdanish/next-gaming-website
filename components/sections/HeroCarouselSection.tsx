"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { CyberButton } from "@ui-elements/CyberButton";
import { Typography } from "@ui-elements/Typography";
import { heroDefaults } from "@lib/hero-data";
import styles from "@style/HeroCarouselSection.module.css";

interface HeroCarouselSectionProps {
  title1?: string;
  title2?: string;
  subtitle?: string;
  description?: string;
  images?: string[];
  buttonTitle?: string;
  onButtonClick?: () => void;
}

export default function HeroCarouselSection({
  title1 = heroDefaults.title1,
  title2 = heroDefaults.title2,
  subtitle = heroDefaults.subtitle,
  description = heroDefaults.description,
  images = [heroDefaults.poster], // fallback if no images provided
  buttonTitle = heroDefaults.buttonTitle,
  onButtonClick,
}: HeroCarouselSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Carousel auto-advance
  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // changes image every 5 seconds
    return () => clearInterval(interval);
  }, [images]);

  // Preload upcoming slide so carousel transitions feel instant.
  useEffect(() => {
    if (!images || images.length <= 1) return;

    const nextIndex = (currentIndex + 1) % images.length;
    const preloadImage = new window.Image();
    preloadImage.src = images[nextIndex];
  }, [currentIndex, images]);

  // Text animation on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current.querySelectorAll(".char"),
          { y: 70, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.035,
            duration: 0.75,
            ease: "power3.out",
            delay: 0.5,
          },
        );
      }
    });
    return () => ctx.revert();
  }, [title1, title2]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero-carousel"
      className="relative w-full min-h-screen overflow-hidden flex items-center md:items-end p-0 bg-[var(--bg-primary)]"
    >
      {/* BG Carousel Images */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={`hero-slide-${currentIndex}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className={`absolute inset-0 w-full h-full object-cover ${styles.slideLayer}`}
          aria-hidden="true"
        >
          <Image
            src={images[currentIndex]}
            alt=""
            fill
            priority={currentIndex === 0}
            sizes="100vw"
            quality={75}
            className={styles.slideImage}
          />
        </motion.div>
      </AnimatePresence>

      {/* Giant Background Branding Text */}
      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden ${styles.brandingLayer}`}
      >
        <Typography
          variant="h1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: "var(--hero-brand-opacity)", scale: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className={`select-none whitespace-nowrap ${styles.brandText}`}
        >
          {title1} {title2}
        </Typography>
      </div>

      {/* Gradients */}
      <div
        className={`absolute inset-0 video-overlay ${styles.videoOverlayLayer}`}
        aria-hidden="true"
      />
      <div
        className={`absolute inset-0 pointer-events-none ${styles.gradientOverlay}`}
        aria-hidden="true"
      />
      {/* Scanline */}
      <div
        className={`absolute inset-0 pointer-events-none ${styles.scanlineOverlay}`}
        aria-hidden="true"
      />

      {/* CONTENT */}
      <div className={`relative z-10 w-full ${styles.contentWrap}`}>
        {/* Badge */}
        <Typography
          variant="h1"
          id="hero-title"
          className={`char-container ${styles.heroTitle}`}
          aria-label={`${title1} ${title2}`}
          ref={titleRef}
        >
          <Typography
            variant="span"
            className={`char-line ${styles.titlePrimaryLine}`}
          >
            {title1.split("").map((char, i) => (
              <span key={`title1-${i}`} className={`char ${styles.charGlyph}`}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </Typography>
          <Typography
            variant="span"
            className={`char-line ${styles.titleAccentLine}`}
          >
            {title2.split("").map((char, i) => (
              <span key={`title2-${i}`} className={`char ${styles.charGlyph}`}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </Typography>
        </Typography>

        <Typography
          variant="h4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ delay: 1.1, duration: 0.6, ease: "easeInOut" }}
          className={styles.subtitle}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="b2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ delay: 1.2, duration: 0.6, ease: "easeInOut" }}
          className={styles.description}
        >
          {description}
        </Typography>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ delay: 1.35, duration: 0.55, ease: "easeInOut" }}
          className={styles.ctaRow}
        >
          <CyberButton
            onClick={onButtonClick || (() => scrollTo("#game-intro"))}
          >
            {buttonTitle}
          </CyberButton>
        </motion.div>

        {/* Optional Carousel Indicators */}
        {images.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="flex gap-2 mt-8"
          >
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-12 h-1 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-[var(--accent-red)]"
                    : "bg-[var(--bg-pill)] border border-[var(--border-subtle)] hover:bg-[var(--accent-red-glow)]"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.5 }}
        className={styles.scrollIndicator}
      >
        <Typography variant="caption" className={styles.scrollLabel}>
          Scroll
        </Typography>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className={styles.scrollLine}
        />
      </motion.div>
    </section>
  );
}
