# Jazzmine-Flora.github.io

A personal portfolio website showcasing projects and skills. Built with React and TypeScript, deployed on [GitHub Pages](https://jazzmine-flora.github.io).

**Live site:** [https://jazzmine-flora.github.io](https://jazzmine-flora.github.io)

---

## Tech stack

- **React 19** + **TypeScript**
- **React Router** (HashRouter for GitHub Pages)
- **Webpack 5** (build + dev server)
- **CSS** (custom styles, no framework)

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or newer)
- npm (comes with Node)

---

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm start
```

Opens the dev server at **http://localhost:8080**. The app reloads when you edit the code.

### 3. Build for production

```bash
npm run build
```

Output goes to the `dist/` folder (e.g. `index.html`, `404.html`, `bundle.js`, assets).

---

## Deploying to GitHub Pages

**Why did the site show the README instead of the app?**  
GitHub Pages serves whatever is at the **root** of the branch you publish from. If that branch has your **source code** (README, `src/`, `package.json`) and no `index.html`, GitHub can render the README as the page. The **app** lives in the **built** output (`dist/`: `index.html`, `bundle.js`, etc.). So the site must be deployed from that built output, not from the repo source.

### Deploy from main (GitHub Actions)

This repo deploys from the **main** branch only. A GitHub Actions workflow runs on every push to `main`: it builds the project and copies the built files (`index.html`, `404.html`, `bundle.js`, assets) to the **root** of `main`. Your source code stays in the repo; the built files are added at root so GitHub Pages serves the app.

1. **One-time setup:** On GitHub, go to **Settings** → **Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**. Set **Branch** to **main** and **Folder** to **/ (root)**. Save.
2. Push your code to `main`. The workflow runs, adds the built site to the root of `main`, and pushes. The live site at **https://jazzmine-flora.github.io** will then serve `index.html` (your app).

You can also run the workflow manually: **Actions** → **Deploy to GitHub Pages** → **Run workflow**.

### Deploy from your machine (optional)

1. Build: `npm run build`
2. Deploy: `npm run deploy`

The deploy script pushes the contents of `dist/` to the `main` branch. For the site to show the app (not the README), GitHub Pages must be set to **Deploy from a branch** and the branch must contain **only** the built files (so after deploy, `main` would have only `index.html`, `bundle.js`, etc.). Your source code would then live on another branch (e.g. `source`).

### Deploy troubleshooting: "Permission denied" (403)

`npm run deploy` uses your **current Git/GitHub login**. If you see:

```text
Permission to Jazzmine-Flora/Jazzmine-Flora.github.io.git denied to <username>.
```

then the account you’re logged in as (`<username>`) doesn’t have push access to this repo. Fix it in one of these ways:

1. **Push as the repo owner (Jazzmine-Flora)**  
   Sign in to GitHub as the Jazzmine-Flora account on this machine:
   - **HTTPS:** Sign out of GitHub in Git Credential Manager, then run `npm run deploy` again and sign in as Jazzmine-Flora when prompted. Or use a [Personal Access Token](https://github.com/settings/tokens) for Jazzmine-Flora and use it as the password when Git asks.
   - **SSH:** [Add an SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) to the Jazzmine-Flora account and change the deploy remote to SSH (see `package.json` → `scripts.deploy`).

2. **Push as a collaborator**  
   If you use a different account (e.g. khdev808): on GitHub, go to **Jazzmine-Flora/Jazzmine-Flora.github.io** → **Settings** → **Collaborators** and add that account with write access. Then ensure you’re logged in as that account (HTTPS or SSH) and run `npm run deploy` again.

3. **Use GitHub Actions**  
   To avoid using your local credentials, use a [GitHub Action](https://github.com/peaceiris/actions-gh-pages) that builds and deploys from the repo; it uses a token that you configure in the repo’s secrets.

---

## Project structure

```
src/
├── App.tsx              # App shell and routes
├── index.tsx            # Entry point, HashRouter
├── components/          # Header, Footer, SocialIcons
├── pages/               # Home, About, Contact, Projects
├── assets/              # Images (profile, icons)
└── styles/              # Global CSS
public/
└── index.html           # HTML template (webpack builds from this)
```

---

## Scripts

| Command          | Description                          |
|------------------|--------------------------------------|
| `npm start`      | Dev server at http://localhost:8080 |
| `npm run build`  | Production build into `dist/`        |
| `npm run deploy` | Build and push `dist/` to GitHub     |
| `npm test`       | Run tests (Jest)                     |

---

## License

MIT
