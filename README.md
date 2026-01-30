# Jazzmine-Flora.github.io

Personal portfolio site, built for [GitHub Pages](https://jazzmine-flora.github.io).

## Development

- `npm install` — install dependencies  
- `npm start` — run dev server at http://localhost:8080  
- `npm run build` — build for production into `dist/`

## Deploying to GitHub Pages

1. Build: `npm run build`
2. Deploy: `npm run deploy`

The site will be live at **https://jazzmine-flora.github.io** (GitHub normalizes the hostname to lowercase).

**Note:** The deploy script pushes the contents of `dist/` to the `main` branch. To keep your source on GitHub, use a separate branch (e.g. `source`) for code and let `main` contain only the built files, or use a GitHub Action to build and deploy from your repo.
