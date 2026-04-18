"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { CyberButton } from "@ui-elements/CyberButton";
import { Typography } from "@ui-elements/Typography";
import { heroDefaults } from "@lib/hero-data";

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
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
          style={{ filter: "brightness(0.65)" }}
        >
          <Image
            src={images[currentIndex]}
            alt=""
            fill
            priority={currentIndex === 0}
            sizes="100vw"
            quality={75}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Giant Background Branding Text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        style={{ zIndex: 2 }}
      >
        <Typography
          variant="h1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="select-none whitespace-nowrap"
          style={{
            fontSize: "clamp(10rem, 25vw, 24rem)",
            WebkitTextStroke: "1px rgba(255,255,255,0.3)",
            color: "transparent",
            letterSpacing: "0.05em",
          }}
        >
          {title1} {title2}
        </Typography>
      </div>

      {/* Gradients */}
      <div
        className="absolute inset-0 video-overlay"
        style={{ zIndex: 3 }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 4,
          background:
            "radial-gradient(ellipse at center, transparent 45%, rgba(8,8,8,0.7) 100%), linear-gradient(to top, var(--bg-primary) 0%, transparent 25%)",
        }}
        aria-hidden="true"
      />
      {/* Scanline */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 5,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 4px)",
        }}
        aria-hidden="true"
      />

      {/* CONTENT */}
      <div
        className="relative z-10 w-full"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "10rem 1.5rem 6rem 1.5rem",
        }}
      >
        {/* Badge */}
        <Typography
          variant="h1"
          id="hero-title"
          className="char-container"
          aria-label={`${title1} ${title2}`}
          style={{ marginBottom: "1.5rem" }}
          ref={titleRef}
        >
          <Typography
            variant="span"
            className="char-line"
            style={{
              display: "block",
              color: "var(--text-primary)",
              textShadow:
                "0 0 25px rgba(var(--color-primary-red-rgb), 0.4), 0 0 50px rgba(var(--color-primary-red-rgb), 0.2)",
            }}
          >
            {title1.split("").map((char, i) => (
              <span
                key={`title1-${i}`}
                className="char"
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </Typography>
          <Typography
            variant="span"
            className="char-line"
            style={{
              display: "block",
              color: "var(--accent-red)",
              textShadow: "0 0 15px rgba(var(--color-primary-red-rgb), 0.3)",
            }}
          >
            {title2.split("").map((char, i) => (
              <span
                key={`title2-${i}`}
                className="char"
                style={{ display: "inline-block" }}
              >
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
          transition={{ delay: 1.1, duration: 0.6 }}
          style={{
            color: "var(--accent-red)",
            marginBottom: "0.5rem",
            letterSpacing: "0.05em",
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="b2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{
            color: "var(--text-secondary)",
            maxWidth: "35rem",
            marginBottom: "2.5rem",
            textTransform: "none",
            fontFamily: "var(--font-body)",
          }}
        >
          {description}
        </Typography>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ delay: 1.35, duration: 0.55 }}
          style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}
        >
          <CyberButton
            style={{ width: "auto" }}
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
                    : "bg-white/20 hover:bg-white/40"
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
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          color: "var(--text-low-contrast)",
          fontSize: "0.6rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          fontFamily: "var(--font-bebas-neue, Bebas Neue, display)",
          zIndex: 10,
        }}
      >
        <Typography
          variant="caption"
          style={{ color: "var(--text-low-contrast)", fontSize: "0.6rem" }}
        >
          Scroll
        </Typography>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{
            width: 1,
            height: 32,
            background:
              "linear-gradient(to bottom, var(--accent-red), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
