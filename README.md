# Noreion

A clean, modern landing website for Noreion — a stealth robotics startup building autonomous systems for real-world operations.

**Live:** https://ritabrata-chakraborty.github.io/Noreion/

## About Noreion

Noreion focuses on advancing robotic autonomy and human-centred systems for critical operations. Our core capabilities span:

- **Agricultural Intelligence** — Monitor orchards and farms at scale through autonomous surveillance, crop insights, anomaly detection, and perimeter awareness
- **Search & Response** — Enable robots to explore unfamiliar environments, navigate known spaces efficiently, and assist teams in locating people and detecting intrusions
- **Mission Command** — A unified command centre that transforms complex robotic systems into intuitive tools for human operators

## Development

**Prerequisites:** Node.js 20+

```bash
npm install              # install dependencies
npm run dev              # dev server at http://localhost:3000
npm run build            # production build
npm run lint             # TypeScript type-check
npm run preview          # preview production build locally
npm run clean            # remove build artifacts
```

**Environment:** Copy `.env.example` to `.env.local` and set `GEMINI_API_KEY` if needed.

## Tech Stack

- **React 19** — UI framework
- **Vite 6** — Build tool & dev server
- **Tailwind CSS v4** — Styling
- **TypeScript** — Type safety
- **Motion (framer-motion)** — Smooth animations
- **Lucide** — Icon library

## Deployment

The site is deployed to GitHub Pages via GitHub Actions. Commits to `main` automatically trigger a build and deploy workflow.

See [CLAUDE.md](./CLAUDE.md) for architecture details.
