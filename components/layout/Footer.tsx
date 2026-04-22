"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { Typography } from "@ui-elements/Typography";

import {
  InstagramIcon,
  XIcon,
  LinkedinIcon,
  YoutubeIcon,
  DiscordIcon,
} from "@components/icons";

import { footerContent as content } from "@lib/footer-data";
import { socialLinks as socialData } from "@lib/social-data";

const iconMap: {
  [key: string]: (props: { size?: number }) => React.JSX.Element;
} = {
  Instagram: InstagramIcon,
  X: XIcon,
  LinkedIn: LinkedinIcon,
  YouTube: YoutubeIcon,
  Discord: DiscordIcon,
};

import styles from "@style/Footer.module.css";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const socialLinks = socialData
    .filter((s) => iconMap[s.label])
    .map((social) => {
      const Icon = iconMap[social.label];
      return {
        ...social,
        icon: <Icon size={18} />,
      };
    });

  const scrollTo = (href: string) => {
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
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <motion.div
          className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8 mb-20 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* LOGO COLUMN */}
          <div className="flex-shrink-0 flex items-start justify-center lg:justify-start self-center lg:self-start">
            <div onClick={() => scrollTo("#hero")} className={styles.logoWrap}>
              <Image
                src="/icons/reddevil-logo.png"
                alt="Red Devil Studio"
                width={500}
                height={500}
                className={styles.logoImage}
              />
            </div>
          </div>

          {/* CONTENT + ICONS COLUMN */}
          <div className="flex-1 max-w-[450px] flex flex-col items-center lg:items-start">
            <Typography
              className={`footer-description ${styles.description}`}
              variant="b2"
            >
              {content.description}
            </Typography>

            <div className="flex justify-center lg:justify-start gap-6">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={styles.socialIcon}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* STUDIO COLUMN */}
          <div className="flex-shrink-0 flex flex-col items-center lg:items-start self-center lg:self-start">
            <Typography variant="h6" className={styles.columnHeading}>
              <span className={styles.headingDot} />
              STUDIO
            </Typography>
            <nav className="flex flex-col items-center lg:items-start gap-5">
              {content.studioLinks.map((link, i) => {
                let targetId = "#hero";
                if (link === "Our Games") targetId = "#games";
                if (link === "Join Us") targetId = "#studio";

                return (
                  <motion.button
                    key={link}
                    onClick={() => scrollTo(targetId)}
                    className={styles.studioLink}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{
                      delay: 0.4 + i * 0.1,
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                  >
                    {link}
                  </motion.button>
                );
              })}
            </nav>
          </div>
        </motion.div>

        <motion.div
          className={styles.bottomRow}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Typography variant="b4" className={styles.copyrightText}>
            {content.copyright}
          </Typography>
        </motion.div>
      </div>
    </footer>
  );
}
