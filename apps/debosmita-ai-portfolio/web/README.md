# Debosmita AI Portfolio

Deployable Vite + React + Tailwind portfolio app.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Vercel

Use this root directory:

```text
debosmita-ai-portfolio/web
```

If uploading under a monorepo `apps/` folder, the Vercel Root Directory should be:

```text
apps/debosmita-ai-portfolio/web
```


## Back-button behavior

Project case-study navigation uses `window.history.replaceState` so iPhone, Android, and browser back buttons do not step back from a case-study view to the Projects grid. Deep links such as `#project-cogniintel` still open the matching case study.
