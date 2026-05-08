# Timeo Canto-Ringelstein — Portfolio

> Portfolio personnel & blog développé avec **Next.js**, **React 19** et **Tailwind CSS 4**.  
> Un espace pour présenter mes projets, partager mes réflexions techniques et donner un aperçu de mon parcours.

---

## ✨ Fonctionnalités

- **Portfolio de projets** — présentation des projets avec description, stack, liens GitHub et live
- **Blog** — articles en Markdown avec tags, date et description
- **Page À propos** — timeline de parcours et grille de compétences
- **Design responsive** — optimisé mobile et desktop
- **Animations & micro-interactions** — hover effects, transitions fluides
- **Page 404 personnalisée** — illustrée avec un chibi
- **Gestion de contenu Markdown** — pas de CMS, juste des fichiers `.md`

---

## 🚀 Stack technique

| Catégorie | Technologie |
|-----------|------------|
| Framework | [Next.js](https://nextjs.org/) 16 — App Router |
| Langage | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| Contenu | Markdown + [`gray-matter`](https://github.com/jonschlinkert/gray-matter) |
| Fonts | DM Sans · DM Serif Display · Geist |
| Icons | [react-icons](https://react-icons.github.io/react-icons/) |

---

## 📁 Structure du projet

```
portfolio-nextjs/
├── content/
│   ├── blog/           # Articles de blog (.md)
│   └── projects/       # Projets (.md)
├── public/             # Assets statiques (images, SVGs, chibi...)
└── src/
    ├── app/            # Routes Next.js (App Router)
    │   ├── about/      # Page À propos
    │   ├── blog/       # Liste & détail des articles
    │   ├── projects/   # Liste & détail des projets
    │   ├── layout.tsx  # Layout global (Header + Footer)
    │   └── not-found.tsx
    ├── components/
    │   ├── about/      # Composants de la page About
    │   ├── cards/      # Cartes projets & blog
    │   ├── home/       # Sections de la page d'accueil
    │   ├── layout/     # Header, Footer, NavLink...
    │   └── ui/         # Composants réutilisables (Button, Badge...)
    ├── lib/            # Fonctions utilitaires (posts.ts, hooks...)
    └── types/          # Interfaces TypeScript centralisées
```

---

## 🛠️ Démarrage

### Prérequis

- Node.js ≥ 18
- npm

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/TimeoCantoRingelstein/portfolio-nextjs.git
cd portfolio-nextjs

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

---

## 📝 Gestion du contenu

Tout le contenu est géré via des fichiers Markdown dans le dossier `content/`.

### Ajouter un article de blog

Créer un fichier `.md` dans `content/blog/` :

```markdown
---
id: "mon-article"
title: "Titre de l'article"
date: "2026-05-08"
description: "Courte description de l'article."
tags: ["Next.js", "React"]
---

Contenu de l'article en Markdown...
```

### Ajouter un projet

Créer un fichier `.md` dans `content/projects/` :

```markdown
---
id: "mon-projet"
title: "Nom du projet"
date: "2026-05-08"
description: "Description du projet."
image: "/projects/mon-projet.jpg"
github: "https://github.com/TimeoCantoRingelstein/mon-projet"
link: "https://mon-projet.vercel.app"
tags: ["TypeScript", "Tailwind CSS"]
---

Description détaillée du projet...
```

---

## 📜 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Génère le build de production |
| `npm run start` | Lance le build de production |
| `npm run lint` | Analyse le code avec ESLint |

---

## 🎨 Système de design

- **`font-sans`** — DM Sans (corps de texte)
- **`font-serif`** — DM Serif Display (titres & emphase)
- **Palette** — tons chauds crème & terracotta sur fond charbon

---

*Développé par [Timeo Canto-Ringelstein](https://github.com/TimeoCantoRingelstein)*
