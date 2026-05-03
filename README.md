# Portfolio Next.js

A modern, high-performance personal portfolio and blog built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. This project uses local Markdown files for easy content management and is optimized for speed and aesthetics.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Content:** Markdown with `gray-matter` for frontmatter parsing
- **Fonts:** Geist, DM Sans, DM Serif Display

## 🛠️ Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Content Management

All blog posts and projects are stored as `.md` files in the `content/` directory.

### Adding a Blog Post
Create a new `.md` file in `content/blog/` with the following frontmatter:

```markdown
---
id: "my-new-post"
title: "Title of the Post"
date: "2026-05-03"
description: "A short description of the post."
tags: ["NextJS", "React"]
---

Your content here...
```

### Adding a Project
Create a new `.md` file in `content/projects/` with the following frontmatter:

```markdown
---
id: "my-project"
title: "Project Name"
date: "2026-05-03"
description: "Project description."
image: "/image-name.jpg"
github: "https://github.com/your-username/repo"
link: "https://your-site.com"
tags: ["TypeScript", "Tailwind"]
---

Detailed project description here...
```

## 📁 Project Structure

- `content/` - Markdown data sources for blog and projects.
- `src/app/` - Main application routes and layouts.
- `src/components/` - Reusable UI components (cards, home, layout, ui).
- `src/lib/` - Utility functions (`posts.ts` for content fetching).
- `src/types/` - Centralized TypeScript interfaces.
- `public/` - Static assets like images and icons.

## 📜 Scripts

- `npm run dev` - Starts the development server.
- `npm run build` - Creates an optimized production build.
- `npm run start` - Runs the production build.
- `npm run lint` - Runs ESLint to check for code quality.
