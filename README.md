# Parag Chimankar — 3D Portfolio

My personal portfolio site: an interactive 3D landing page with a GLTF workstation scene, a spinning Earth contact section, floating tech-stack balls and animated project cards.

**Live:** https://chimankarparag.github.io/3D_Portfolio_website1

## Tech stack

- **Frontend:** React 19, Vite 8, Tailwind CSS 3, Framer Motion
- **3D:** three.js, `@react-three/fiber`, `@react-three/drei`
- **Contact form:** EmailJS (`@emailjs/browser`)
- **Hosting:** GitHub Pages via `gh-pages`
- **Backend (experimental):** small Express server in `backend/` (not used by the deployed site)

## Getting started

Requires Node.js 20.19+ or 22.12+ (needed by Vite 8).

```bash
npm install
npm run dev        # http://localhost:5000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server (port 5000, `/api` proxied to `localhost:5001`) |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build and publish `dist/` to the `gh-pages` branch |

## Project structure

```
src/
  components/      Hero, About, Experience, Tech, Works, Contact, Navbar
  components/canvas/  3D scenes (Computers, Earth, Ball, Stars)
  constants/index.js  All portfolio content: services, tech, experience, projects
  assets/          Images, tech icons and project cover images
public/            GLTF models and textures (desktop_pc, planet)
backend/           Optional Express API (see below)
```

## Updating the content

Almost everything shown on the site lives in `src/constants/index.js`:

- **Projects:** add an object to `projects` (`name`, `description`, `tags`, `image`, and optionally `source_code_link` — the GitHub icon is hidden when it is omitted).
- **Experience / services / tech:** edit `experiences`, `services` and `technologies` in the same file. New tech icons go in `src/assets/tech/` and are exported from `src/assets/index.js`.
- The intro text is in `src/components/About.jsx` and the hero text in `src/components/Hero.jsx`.

## Contact form

The form sends mail through EmailJS from the browser. The service ID, template ID and public key are set in `src/components/Contact.jsx` (EmailJS public keys are designed to be exposed client-side).

## Backend (optional)

`backend/server.js` is an experimental Express server that proxies a request to GitHub Models. It is **not** part of the deployed static site.

```bash
# .env in the project root (never commit this file)
GITHUB_TOKEN=your_token_here

node backend/server.js
```

## Deployment

The site is served from GitHub Pages under `/3D_Portfolio_website1/` (see `base` in `vite.config.js` and `homepage` in `package.json`). Run `npm run deploy` to publish.
