# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Noreion is a single-page marketing/landing website for a stealth robotics startup. Built with React 19 + Vite 6 + Tailwind CSS v4 + TypeScript. Originally scaffolded from Google AI Studio.

## Commands

```bash
npm install          # install deps
npm run dev          # dev server at http://localhost:3000
npm run build        # production build → dist/
npm run preview      # preview production build locally
npm run lint         # TypeScript type-check (tsc --noEmit, no eslint configured)
npm run clean        # rm -rf dist server.js
```

**Environment:** copy `.env.example` → `.env.local` and set `GEMINI_API_KEY`. Currently unused by the frontend — included because the AI Studio scaffold injects it server-side.

## Architecture

This is a purely client-side SPA. There is no routing library — sections are scrolled to via `document.getElementById` + `scrollIntoView`.

**Page layout (top → bottom):**
1. `Navbar` — sticky, backdrop-blur, dark-mode toggle, mobile hamburger drawer, smooth-scroll anchor links
2. Hero section — inline in `App.tsx` (not extracted to a component)
3. `AboutSection` — three capability cards (Agricultural Intelligence, Search & Response, Mission Command)
4. `VisionSection` — editorial blockquote with decorative corner brackets
5. `TeamSection` — founder bio card with mailto and external portfolio link
6. Footer — inline in `App.tsx`

**Background:** `AbstractBackground` renders a full-page `<canvas>` element positioned `absolute inset-0 -z-10` behind all sections. It draws a grid, animates 70 floating particles with mouse-repulsion physics, and connects nearby particles with lines. The canvas resizes via `ResizeObserver` on its container div (not `window.resize`) to cover the full `scrollHeight`. The animation loop re-runs whenever `darkMode` changes (useEffect dependency).

**Dark mode:** `App.tsx` owns a single `darkMode: boolean` state, passed as a prop to every component. `useEffect` syncs it to `document.documentElement.classList` (`dark`/no-`dark`) for Tailwind's `dark:` variants, though most components use conditional class strings rather than `dark:` prefixes.

**Styling:** Tailwind CSS v4 via `@tailwindcss/vite` plugin (no `tailwind.config.*` file needed). All color choices use the `slate-*` palette. No global design tokens — color/spacing values are repeated inline.

**Path alias:** `@` resolves to the repo root (set in both `vite.config.ts` and `tsconfig.json`).

## Key Constraints

- No router — adding one requires updating `Navbar` anchor links and `handleScrollTo` in `App.tsx`.
- No state management library — props are drilled from `App.tsx`; any new section needs `darkMode` passed to it.
- The `AbstractBackground` canvas must stay `pointer-events-none` and `select-none` to avoid intercepting user interactions with content above it.
- HMR is conditionally disabled via `DISABLE_HMR` env var (AI Studio agent editing mode); don't remove that vite config guard.
