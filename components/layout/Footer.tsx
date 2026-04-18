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
    <footer
      style={{
        background: "var(--bg-primary)",
        borderTop: "3px solid var(--accent-red)",
        padding: "6rem 0 3rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8 mb-20 text-center lg:text-left">
          {/* LOGO COLUMN */}
          <div className="flex-shrink-0 flex items-start justify-center lg:justify-start self-center lg:self-start">
            <div
              onClick={() => scrollTo("#hero")}
              style={{
                transition: "transform 0.3s ease, filter 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.filter = "brightness(1.2)";
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.filter = "brightness(1)";
              }}
            >
              <Image
                src="/icons/reddevil-logo.png"
                alt="Red Devil Studio"
                width={500}
                height={500}
                style={{ objectFit: "contain", width: "200px", height: "auto" }}
              />
            </div>
          </div>

          {/* CONTENT + ICONS COLUMN */}
          <div className="flex-1 max-w-[450px] flex flex-col items-center lg:items-start">
            <Typography
              className="footer-description"
              variant="b2"
              style={{
                color: "rgba(255,255,255,0.6)",
                marginBottom: "2.5rem",
                display: "block",
                lineHeight: "1.8",
                fontSize: "0.9rem",
                textAlign: "justify",
              }}
            >
              {content.description}
            </Typography>

            <div className="flex justify-center lg:justify-start gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    transition: "all 0.3s cubic-bezier(0.19, 1, 0.22, 1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                    e.currentTarget.style.color = "var(--accent-red)";
                    e.currentTarget.style.transform =
                      "scale(1.25) translateY(-2px)";
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                    e.currentTarget.style.transform = "scale(1) translateY(0)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* STUDIO COLUMN */}
          <div
            className="flex-shrink-0 flex flex-col items-center lg:items-start self-center lg:self-start"
          >
            <Typography
              variant="h6"
              style={{
                color: "var(--color-white)",
                marginBottom: "2rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
                fontWeight: 900,
              }}
            >
              <span
                style={{
                  width: "4px",
                  height: "4px",
                  background: "var(--accent-red)",
                }}
              />
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
                    onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                      e.currentTarget.style.color = "var(--accent-red)";
                      e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "rgba(255,255,255,0.5)",
                      textAlign: "center",
                      padding: 0,
                      transition: "all 0.3s cubic-bezier(0.19, 1, 0.22, 1)",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.85rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                    }}
                  >
                    {link}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.03)",
            paddingTop: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="b4"
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
            }}
          >
            {content.copyright}
          </Typography>

          {/* <div style={{ display: "flex", gap: "2.5rem" }}>
            {content.legalLinks.map((text) => (
              <Typography
                key={text}
                variant="b4"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  letterSpacing: "0.1em",
                  fontSize: "0.7rem",
                  cursor: "pointer",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLElement>) =>
                  (e.currentTarget.style.color = "var(--text-low-contrast)")
                }
                onMouseLeave={(e: React.MouseEvent<HTMLElement>) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.55)")
                }
              >
                {text}
              </Typography>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
}
