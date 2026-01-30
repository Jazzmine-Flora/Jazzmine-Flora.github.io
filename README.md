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

1. Build the project: `npm run build`
2. Deploy: `npm run deploy`

The deploy script pushes the contents of `dist/` to the `main` branch. The site will be available at **https://jazzmine-flora.github.io** (GitHub uses lowercase in the URL).

**Tip:** If you want to keep your source code on GitHub too, use a separate branch (e.g. `source`) for development and let `main` hold only the built files, or set up a [GitHub Action](https://github.com/peaceiris/actions-gh-pages) to build and deploy automatically.

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
└── template.html        # HTML template
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
