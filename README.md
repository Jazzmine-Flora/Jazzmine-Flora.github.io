# Jazzmine-Flora.github.io

Personal portfolio. React, TypeScript, and Vite — hosted on [GitHub Pages](https://jazzmine-flora.github.io).

**Live site:** [https://jazzmine-flora.github.io](https://jazzmine-flora.github.io)

---

## Tech stack

- **React 19** + **TypeScript 5**
- **Vite 6** (build + dev server)
- **Tailwind CSS 4** (`@tailwindcss/vite`)
- **[shadcn/ui](https://ui.shadcn.com)** (Base UI primitives; components in `src/components/ui/`)
- **React Router** (HashRouter for GitHub Pages)
- **Three.js** (hero canvas particle animation)
- **Motion** (Framer Motion — scroll-driven avatar animation in the header)
- **CSS** (custom portfolio styles in `src/styles/main.css`, layered with Tailwind)

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- npm (comes with Node)

---

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. One-time Git setup

The repo uses a custom merge driver to protect `index.html` from being overwritten during merges from `main`. Run once after cloning:

```bash
git config merge.ours.driver true
```

### 3. Run locally

```bash
npm run dev
```

Starts the Vite dev server (default **http://localhost:8080**, auto-increments if the port is busy). The app hot-reloads when you edit the code.

### 4. Build for production

```bash
npm run build
```

Output goes to `dist/` — `index.html`, `404.html`, and hashed assets under `assets/`.

### 5. Preview the production build

```bash
npm run preview
```

Serves the `dist/` folder at **http://localhost:4173**.

---

## index.html entry point

The root `index.html` is Vite's entry point and must contain:

```html
<script type="module" src="/src/index.tsx"></script>
```

When you merge `main` (which holds deployed/built files) back into a development branch, Git may replace this with a reference to a pre-built JS bundle (`/assets/index-*.js`). This breaks builds — Vite processes only 4 modules instead of ~700, and images are not emitted.

Three safeguards prevent this:

1. **`scripts/ensure-dev-entry.js`** — runs automatically before every `dev` and `build` via npm hooks. If the entry is wrong, it auto-repairs it.
2. **`.gitattributes`** — marks `index.html` with `merge=ours` so Git keeps the dev version during merges.
3. **`.gitignore`** — root-level `/assets/` and `/404.html` (deploy artifacts) are not tracked on development branches.

---

## Deploying to GitHub Pages

### Automatic (GitHub Actions)

A workflow (`.github/workflows/deploy.yml`) runs on every push to `main`:

1. Installs dependencies and builds the project.
2. Copies `dist/` contents to the repo root so GitHub Pages can serve `index.html`.
3. Commits and pushes the built files with `[skip ci]` to avoid re-triggering.

**One-time setup:** On GitHub, go to **Settings > Pages**. Set **Source** to **Deploy from a branch**, branch to **main**, folder to **/ (root)**.

**EmailJS (contact form):** Add these **repository secrets** (same names as Vite env vars): `VITE_EMAILJS_PUBLIC_KEY`, `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`. The deploy workflow passes them into `npm run build` so they are baked into the client bundle only at publish time — not stored in the repo. For local development, copy `.env.example` to `.env.local` and fill in the values from your [EmailJS](https://www.emailjs.com/) dashboard.

You can also trigger the workflow manually: **Actions > Deploy to GitHub Pages > Run workflow**.

### Manual (from your machine)

```bash
npm run deploy
```

Builds the project and pushes `dist/` to the `main` branch via `gh-pages`.

---

## Project structure

```
src/
├── index.tsx                   # Entry point, HashRouter
├── App.tsx                     # App shell and routes
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Navigation header + scroll-driven avatar
│   │   ├── Header.css
│   │   ├── Footer.tsx          # Site footer
│   │   ├── Footer.css
│   │   └── ScrollToTop.tsx     # Scroll reset on navigation
│   ├── ContactSection.tsx      # Contact form (EmailJS)
│   ├── ContactSection.css
│   ├── ui/                     # shadcn/ui (Button, Input, Textarea)
│   ├── HeroCanvas.tsx          # Three.js particle animation
│   └── TypingText.tsx          # Typing text effect
├── pages/
│   └── home/
│       ├── HomePage.tsx        # Home page orchestrator
│       ├── sections/           # Hero, Services, Philosophy, Work, Skills, Reviews
│       ├── content/            # Static data (services, skills, pillars, etc.)
│       ├── hooks/              # useHomeNavigation
│       └── types.ts            # Shared types
├── hooks/
│   ├── useScrollSpy.ts         # Active nav tracking on scroll
│   ├── useRevealOnScroll.ts    # Intersection Observer reveal
│   └── useContentProtection.ts # Right-click / copy protection
├── data/
│   ├── projects.ts             # Portfolio projects list
│   └── testimonials.ts         # Collaborator reviews
├── config/
│   └── contact.ts              # EmailJS env wiring (VITE_EMAILJS_*)
├── assets/                     # Images (hero avatar, favicon source, project screenshots)
├── styles/
│   └── main.css                # Global portfolio styles
├── lib/
│   └── utils.ts                # cn() (clsx + tailwind-merge)
├── index.css                   # Tailwind + shadcn theme (imported in index.tsx)
└── vite-env.d.ts               # Vite client type definitions

scripts/
├── ensure-dev-entry.js         # Auto-fix index.html entry before dev/build
├── generate-favicon.js         # Build favicon files from src/assets/favicon.png
├── copy-404-html.js            # Copy index.html → 404.html after build
└── capture-project-screenshots.js  # Playwright screenshots of project URLs

public/                         # Static files copied to dist/ as-is (favicons, .nojekyll)
├── favicon.ico
├── favicon.png
├── apple-touch-icon.png
└── .nojekyll
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Vite dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run deploy` | Build and push `dist/` to GitHub Pages |
| `npm run generate:favicon` | Generate favicon files from `src/assets/favicon.png` |
| `npm run capture:projects` | Playwright screenshots of project URLs (needs `npx playwright install`) |

### Adding shadcn components

```bash
npx shadcn@latest add dialog
```

Imports use the `@/` alias (see `tsconfig.json` and `vite.config.ts`).

---

## License

MIT
