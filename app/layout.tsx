import type { Metadata } from "next";
import { Space_Grotesk, Bebas_Neue } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Red Devil Studio",
  description:
    "Red Devil Studio creates cinematic, immersive gaming experiences. Explore our games, team, and careers. Where every pixel tells a story, and every game is a gateway to the extraordinary. This is where passion becomes play.",
  keywords: ["game studio", "games", "Red Devil Studio"],
  openGraph: {
    title: "Red Devil Studio",
    description: "Crafting Immersive Gaming Experiences",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

import LayoutWrapper from "@layout/LayoutWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${bebasNeue.variable} antialiased scroll-smooth`}
      style={
        {
          "--font-body": "var(--font-space-grotesk)",
          "--font-display": "var(--font-bebas-neue)",
          overflowX: "hidden", // Added to prevent global horizontal scroll
        } as React.CSSProperties
      }
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[var(--bg-primary)] overflow-x-hidden">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
