"use client";

import Image from "next/image";
import { Typography } from "@ui-elements/Typography";


import {
  InstagramIcon,
  XIcon,
  LinkedinIcon,
  YoutubeIcon,
  DiscordIcon,
} from "@/components/icons";

import { footerContent as content, socialLinks as socialData } from "@/lib/content";

const iconMap: { [key: string]: (props: { size?: number }) => React.JSX.Element } = {
  Instagram: InstagramIcon,
  X: XIcon,
  LinkedIn: LinkedinIcon,
  YouTube: YoutubeIcon,
  Discord: DiscordIcon,
};



export default function Footer() {

  const socialLinks = socialData
    .filter((s) => iconMap[s.label])
    .map((social) => {
      const Icon = iconMap[social.label];
      return {
        ...social,
        icon: <Icon size={18} />,
      };
    });


  const scrollTo = (id: string) => {
    const targetId = id.toLowerCase().replace(" ", "");
    const element = document.querySelector(
      targetId.startsWith("#") ? targetId : `#${targetId}`,
    );
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "var(--bg-primary)",
        borderTop: "3px solid var(--accent-red)",
        padding: "6rem 0 3rem",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16 mb-20 text-center lg:text-left">
          {/* LOGO COLUMN */}
          <div className="flex-shrink-0">
            <div
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
                width={160}
                height={160}
                style={{ objectFit: "contain", marginTop: "-20px" }}
              />
            </div>
          </div>

          {/* CONTENT + ICONS COLUMN */}
          <div className="flex-1 max-w-[450px] mt-4 flex flex-col items-center lg:items-start">
            <Typography
              variant="b2"
              style={{
                color: "#666",
                marginBottom: "2.5rem",
                display: "block",
                lineHeight: "1.8",
                fontSize: "0.9rem",
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
                    color: "#444",
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
                    e.currentTarget.style.color = "#444";
                    e.currentTarget.style.transform = "scale(1) translateY(0)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* GAME PARTNERS COLUMN */}
          <div className="flex-shrink-0 mt-4 flex flex-col items-center lg:items-start">
            <Typography
              variant="h6"
              style={{
                color: "#fff",
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
                style={{ width: "4px", height: "4px", background: "var(--accent-red)" }}
              />
              GAME PARTNERS
            </Typography>
            <nav className="flex flex-col items-center lg:items-start gap-5">
              {content.partners.map((partner) => (
                  <Typography
                    key={partner}
                    variant="b2"
                    style={{
                      color: "#555",
                      fontSize: "0.85rem",
                      fontWeight: 400,
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      display: "block",
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                      e.currentTarget.style.color = "var(--accent-red)";
                      e.currentTarget.style.transform = "translateX(8px)";
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                      e.currentTarget.style.color = "#555";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    {partner}
                  </Typography>
                ),
              )}
            </nav>
          </div>

          {/* STUDIO COLUMN */}
          <div className="flex-shrink-0 mt-4 flex flex-col items-center lg:items-start">
            <Typography
              variant="h6"
              style={{
                color: "#fff",
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
                style={{ width: "4px", height: "4px", background: "var(--accent-red)" }}
              />
              STUDIO
            </Typography>
            <nav className="flex flex-col items-center lg:items-start gap-5">
              {content.studioLinks.map((link) => {
                let targetId = "#hero";
                if (link === "Our Games") targetId = "#games";
                if (link === "Join Us") targetId = "#about";

                return (
                <button
                  key={link}
                  onClick={() =>
                    scrollTo(targetId)
                  }
                  onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                    e.currentTarget.style.color = "var(--accent-red)";
                    e.currentTarget.style.transform = "translateX(10px)";
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                    e.currentTarget.style.color = "#555";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#555",
                    textAlign: "left",
                    padding: 0,
                    transition: "all 0.3s cubic-bezier(0.19, 1, 0.22, 1)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    display: "flex",
                    alignItems: "center",
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
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="b4"
            style={{
              color: "#333",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
            }}
          >
            {content.copyright}
          </Typography>

          <div style={{ display: "flex", gap: "2.5rem" }}>
            {content.legalLinks.map((text) => (
              <Typography
                key={text}
                variant="b4"
                style={{
                  color: "#222",
                  letterSpacing: "0.1em",
                  fontSize: "0.7rem",
                  cursor: "pointer",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLElement>) =>
                  (e.currentTarget.style.color = "#444")
                }
                onMouseLeave={(e: React.MouseEvent<HTMLElement>) =>
                  (e.currentTarget.style.color = "#222")
                }
              >
                {text}
              </Typography>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
