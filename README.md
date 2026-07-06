# Gordon Beckler — Personal Portfolio

Personal portfolio website built with React and TypeScript. Live at [gordon-beckler.vercel.app](https://gordon-beckler.vercel.app).

## Stack

- **React + TypeScript** — component-based architecture
- **CSS custom properties** — gold/silver/white design system via CSS variables
- **Cormorant Garamond** — via `@fontsource`
- **Custom hooks** — `useFadeIn` for scroll-triggered animations using IntersectionObserver
- **Vercel** — continuous deployment from this repo

## Structure

```
src/
├── components/     # Navbar, Hero, About, Experience, Projects, Skills, Contact
├── hooks/          # useFadeIn
├── App.tsx
├── App.css         # Global layout + responsive breakpoints
└── index.css       # CSS variables + base styles
```

## Running locally

```bash
npm install
npm start
```

## Deployment

Auto-deploys to Vercel on push to `main`.
