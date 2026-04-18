"use client";

import Image from "next/image";
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
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8 mb-20 text-center lg:text-left">
          {/* LOGO COLUMN */}
          <div className="flex-shrink-0 flex items-start justify-center lg:justify-start self-center lg:self-start">
            <div
              onClick={() => scrollTo("#hero")}
              className={styles.logoWrap}
            >
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
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={styles.socialIcon}
                >
                  {social.icon}
                </a>
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
              {content.studioLinks.map((link) => {
                let targetId = "#hero";
                if (link === "Our Games") targetId = "#games";
                if (link === "Join Us") targetId = "#studio";

                return (
                  <button
                    key={link}
                    onClick={() => scrollTo(targetId)}
                    className={styles.studioLink}
                  >
                    {link}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <Typography variant="b4" className={styles.copyrightText}>
            {content.copyright}
          </Typography>
        </div>
      </div>
    </footer>
  );
}
