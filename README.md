# 🎮 Red Devil Studio

Red Devil Studio is a high-performance, cinematic gaming studio website built with modern web technologies. Designed to deliver an immersive "AAA" experience, the platform features smooth animations, optimized video backgrounds, and a focus on speed and SEO.

## 🎯 The Vision

The goal of this project is to create a state-of-the-art digital presence for Red Devil Studio by migrating from traditional CMS platforms to a custom, high-performance Next.js architecture.

- **Cinematic Experience**: Engaging visual storytelling with fluid transitions.
- **Top-Tier Performance**: Optimized assets and modern delivery formats for zero-lag browsing.
- **Global Reach**: Built with SEO best practices to ensure discoverability across the gaming industry.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) (Customized for Gaming)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- **Asset Management**: Highly optimized Webp/Webm delivery.
- **Form Handling**: [Resend](https://resend.com/) for email automation.

---

## ✨ Key Features

### 🎬 Cinematic Hero Section
Features ultra-smooth carousels and self-hosted high-definition video backgrounds for an instant visual impact.

### 🎮 Game Portfolio & Previews
Showcases current and upcoming titles with interactive galleries and detailed game pages.

### 🎞️ Performance-First Video
Strategic use of `.webm` formats and lazy-loading to ensure background videos remain lightweight (< 3MB) without sacrificing quality.

### 📱 Responsive & Neon Aesthetics
A curated dark theme with neon accents and bold typography, perfectly tailored for the gaming community.

---

## 🛠️ Project Structure

```text
/app         → Next.js App Router (Pages & API Routes)
/components  → UI components (Sections & Custom Gaming UI)
/lib         → Content data and utility functions
/public      → Optimized assets (Images, Videos, Icons)
```

---

## 🚦 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/next-gaming-website.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚡ Performance Optimization Rules

- **Images**: Always use `next/image` with proper sizing and `.webp` priority.
- **Videos**: Use `.webm` for backgrounds, limited to 5-10 seconds for maximum efficiency.
- **Animations**: Prioritize `transform` and `opacity` to maintain 60 FPS.

---

## 📩 Contact

For inquiries, professional collaborations, or more information about our games, please reach out via our contact section or the Resend-integrated forms.

---

*Built with passion by Red Devil Studio Team.*
