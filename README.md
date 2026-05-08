🇫🇷 [Lire en français](./README.fr.md)

# Timeo Canto-Ringelstein — Portfolio

> Personal portfolio & blog built with **Next.js**, **React 19** and **Tailwind CSS 4**.  
> A space to showcase my projects, share technical thoughts, and give a glimpse into my journey.

---

## ✨ Features

- **Project portfolio** — projects with descriptions, tech stack, GitHub and live links
- **Blog** — Markdown articles with tags, date and description
- **About page** — career timeline and skills grid
- **Responsive design** — optimised for both mobile and desktop
- **Animations & micro-interactions** — hover effects and smooth transitions
- **Custom 404 page** — illustrated with a chibi character
- **Markdown content management** — no CMS, just `.md` files

---

## 🚀 Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | [Next.js](https://nextjs.org/) 16 — App Router |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| Content | Markdown + [`gray-matter`](https://github.com/jonschlinkert/gray-matter) |
| Fonts | DM Sans · DM Serif Display · Geist |
| Icons | [react-icons](https://react-icons.github.io/react-icons/) |

---

## 📁 Project Structure

```
portfolio-nextjs/
├── content/
│   ├── blog/           # Blog posts (.md)
│   └── projects/       # Projects (.md)
├── public/             # Static assets (images, SVGs, chibi...)
└── src/
    ├── app/            # Next.js routes (App Router)
    │   ├── about/      # About page
    │   ├── blog/       # Blog list & post detail
    │   ├── projects/   # Project list & detail
    │   ├── layout.tsx  # Global layout (Header + Footer)
    │   └── not-found.tsx
    ├── components/
    │   ├── about/      # About page components
    │   ├── cards/      # Project & blog cards
    │   ├── home/       # Home page sections
    │   ├── layout/     # Header, Footer, NavLink...
    │   └── ui/         # Reusable components (Button, Badge...)
    ├── lib/            # Utility functions (posts.ts, hooks...)
    └── types/          # Centralised TypeScript interfaces
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js ≥ 18
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/TimeoCantoRingelstein/portfolio-nextjs.git
cd portfolio-nextjs

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📝 Content Management

All content is managed through Markdown files inside the `content/` directory.

### Adding a Blog Post

Create a `.md` file in `content/blog/`:

```markdown
---
id: "my-post"
title: "Post Title"
date: "2026-05-08"
description: "A short description of the post."
tags: ["Next.js", "React"]
---

Post content in Markdown...
```

### Adding a Project

Create a `.md` file in `content/projects/`:

```markdown
---
id: "my-project"
title: "Project Name"
date: "2026-05-08"
description: "Project description."
image: "/projects/my-project.jpg"
github: "https://github.com/TimeoCantoRingelstein/my-project"
link: "https://my-project.vercel.app"
tags: ["TypeScript", "Tailwind CSS"]
---

Detailed project description...
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates an optimised production build |
| `npm run start` | Runs the production build |
| `npm run lint` | Runs ESLint for code quality checks |

---

## 🎨 Design System

- **`font-sans`** — DM Sans (body text)
- **`font-serif`** — DM Serif Display (headings & emphasis)
- **Palette** — warm cream & terracotta tones on a charcoal background

---

*Developed by [Timeo Canto-Ringelstein](https://github.com/TimeoCantoRingelstein)*
