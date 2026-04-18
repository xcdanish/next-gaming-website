import React from "react";
import Script from "next/script";
import type { Metadata } from "next";
import { Space_Grotesk, Bebas_Neue } from "next/font/google";
import "@style/globals.css";

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
  title: {
    default: "Red Devil Studio | Immersive & Hardcore Gaming Experiences",
    template: "%s | Red Devil Studio",
  },
  description:
    "Red Devil Studio is a leading independent game developer creating cinematic and hardcore gaming experiences. Creators of 'Rooster Rumble' (Strategic PvP) and 'Rot in Hell' (Soul-like Survival). Explore our games, join our community, and witness the next generation of indie gaming.",
  keywords: [
    "Red Devil Studio",
    "Game Studio",
    "Indie Game Developer",
    "Game Studio in India",
    "Hyderabad Game Development",
    "Rooster Rumble",
    "Rot in Hell",
    "Soul-like games",
    "PvP Gladiator Mobile Game",
    "Hardcore Action RPG",
    "Survival Horror Games",
    "PC Gaming",
    "Mobile Gaming",
    "Cinematic Gaming Experiences",
  ],
  authors: [{ name: "Red Devil Studio" }],
  creator: "Red Devil Studio",
  publisher: "Red Devil Studio",
  openGraph: {
    title: "Red Devil Studio | Immersive & Hardcore Gaming Experiences",
    description:
      "Creators of 'Rooster Rumble' and 'Rot in Hell'. Pushing the boundaries of cinematic and hardcore indie gaming.",
    url: "https://reddevilstudio.com", // Recommended to use actual URL if known
    siteName: "Red Devil Studio",
    images: [
      {
        url: "/banner/rooster.jpeg",
        width: 1200,
        height: 630,
        alt: "Red Devil Studio - Rooster Rumble",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Devil Studio | Immersive & Hardcore Gaming Experiences",
    description: "Creators of 'Rooster Rumble' and 'Rot in Hell'. Experience next-gen indie gaming.",
    images: ["/banner/rooster.jpeg"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import LayoutWrapper from "@layout/LayoutWrapper";
import { ThemeProvider } from "@providers/ThemeProvider";

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
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-YCC7306E58"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-YCC7306E58');
        `}
      </Script>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                  if (!theme && supportDarkMode) theme = 'dark';
                  if (!theme) theme = 'light';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--bg-primary)] overflow-x-hidden">
        <ThemeProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
