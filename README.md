# 🎮 Red Devil Studio – Revamp Plan (Next.js Gaming Website)

## 🎯 Goal

- WordPress → Next.js migration
- Fast, SEO optimized, cinematic gaming website
- Smooth animations (no lag)
- Modern AAA game studio feel

---

# ⚙️ 1. Core Tech Stack

## Framework

- Next.js (App Router)

## Styling

- Tailwind CSS (base styling)
- Shadcn UI (component system)
- Custom components (gaming UI)

---

# 🧩 2. Shadcn UI – COMPLETE GUIDE (IMPORTANT)

## 📦 Setup

```bash
npx create-next-app@latest
cd project
npx shadcn-ui@latest init
```

## Install Components

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add form
```

## 📁 Structure (IMPORTANT)

```
/components
   /ui        → shadcn components
   /custom    → gaming custom components
```

## 🧠 How Shadcn Works

- NOT a library
- Copy-paste components
- Fully customizable

👉 Tailwind = styling
👉 Shadcn = base components

## 🎮 Best Practice

- Use Shadcn for:
  - Forms
  - Buttons
  - Inputs

- Use Custom for:
  - Hero
  - Game cards
  - Sections

---

# 🎬 3. Animation Strategy

## Libraries

- Framer Motion → main
- GSAP → hero only

## Rules

- Animate only important elements
- Use transform + opacity

---

# 🎥 4. Video Strategy (IMPORTANT UPDATE)

## ❌ Do NOT use

- YouTube for background

## ✅ Use

- Self-hosted video

## Use YouTube only for

- Trailer section

---

# 📁 5. Assets Folder Structure (VERY IMPORTANT)

```
/public
   /images
      logo.png
      hero.jpg
      games/
   /videos
      hero.webm
      hero.mp4
   /icons
```

## Rules

- Images → /public/images
- Videos → /public/videos
- Logo → /public/images/logo.png

---

# 🎥 6. Video Optimization

- Format: .webm
- Size: < 2–3 MB
- Duration: 5–10 sec
- muted + autoplay + loop

---

# 📩 7. Email / Contact Form

- Resend
- Next.js API route

---

# ⚡ 8. Performance

- next/image
- next/font
- Lazy loading

---

# 🔍 9. SEO

- Metadata API
- Sitemap
- Robots.txt

---

# 🎮 10. Sections

- Hero
- Games
- About
- Team
- Careers
- Blog
- Contact

---

# 🎨 11. UI Style

- Dark theme
- Neon accents
- Big typography

---

# ❌ 12. Avoid

- Too many animations
- Heavy libraries
- Big videos

---

# 🧠 Final Rule

👉 Smooth > Flashy

---

# 🧱 Final Stack

- Next.js
- Tailwind
- Shadcn
- Framer Motion
- GSAP
- Resend

---

# ✅ Dev Flow

1. Setup project
2. Setup Shadcn
3. Create structure
4. Add sections
5. Add animation
6. Optimize
7. SEO

---
