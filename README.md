# FDFS

Your personal movie space — a Next.js app for tracking watchlists, recently watched films, and library browsing.

---

## Tech stack

### Core

| Layer        | Technology                          |
| ------------ | ------------------------------------ |
| **Framework**| Next.js (App Router)                 |
| **UI**       | React                                |
| **Language** | TypeScript                           |

### Styling

| Tool                    | Purpose                                  |
| ----------------------- | ----------------------------------------- |
| **Tailwind CSS**        | Utility-first CSS                         |
| **PostCSS**             | Runs Tailwind (and Autoprefixer in root)  |
| **Autoprefixer**        | Vendor prefixes (root app only)           |
| **@tailwindcss/postcss**| Tailwind v4 PostCSS plugin (fdfs only)    |

### Tooling

| Item          | Purpose                          |
| -------------- | -------------------------------- |
| **TypeScript** | Typing, `tsconfig.json`           |
| **ESLint**     | Linting                         |
| **Path alias** | `@/*` → `./src/*` in both apps  |

### Fonts (fdfs app only)

- **next/font/google**: Geist (sans), Geist Mono (mono), in `fdfs/src/app/layout.tsx`.

### Not in the stack

- No global state library (Redux, Zustand, etc.) — local React state only.
- No API client layer — mock data only for now.
- No database or ORM.
- No auth library.
- No test runner configured (Jest, Vitest, Playwright, etc.).
- No UI component library — custom components + Tailwind only.

---

## Project structure

The repo contains **two separate Next.js apps**:

| App    | Path      | Next | React | Tailwind | Notes                          |
| ------ | --------- | ---- | ----- | -------- | ------------------------------ |
| **Root** | `/`     | 14   | 18    | v3       | Shell layout, Library, Log, Watchlist |
| **Fdfs** | `/fdfs`  | 16   | 19    | v4       | Single layout, Watchlist with slide-out |

- **Root app**: `package.json` at repo root, `src/app/`, `tailwind.config.ts`, `postcss.config.mjs` (tailwindcss + autoprefixer).
- **Fdfs app**: `fdfs/package.json`, `fdfs/src/app/`, Tailwind v4 via `@tailwindcss/postcss` only (no `tailwind.config`).

---

## Getting started

### Root app

```bash
# from repo root
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Fdfs app

```bash
cd fdfs
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (run from a different port if the root app is already running).

---

## Routes (root app)

| Route        | Description                    |
| ------------ | ------------------------------ |
| `/`          | Home — hero, recently watched, watchlist rail |
| `/watchlist` | Watchlist — Up Next, Saved Earlier (or 3-column in fdfs) |
| `/library`   | Library — grid + filters       |
| `/log`       | Log (placeholder)              |
| `/movie/[id]`| Movie detail                   |

---

## Key files

### Root app (`/`)

- `src/app/layout.tsx` — root layout, `globals.css`
- `src/app/(shell)/page.tsx` — home
- `src/app/(shell)/watchlist/page.tsx` — watchlist
- `src/app/(shell)/library/page.tsx` — library
- `src/app/(shell)/movie/[id]/page.tsx` — movie detail
- `src/components/` — HeroCarousel, PosterRail, TopOverlayNav, TopNav, MovieCard, etc.
- `src/lib/mock.ts` — mock data; `src/lib/types.ts` — `Movie` type

### Fdfs app (`/fdfs`)

- `fdfs/src/app/layout.tsx` — root layout, Geist fonts, `globals.css`
- `fdfs/src/app/page.tsx` — home
- `fdfs/src/app/watchlist/page.tsx` — watchlist (3-column: slide-out “Recent”, center grid, priority list)
- `fdfs/src/components/` — HeroCarousel, PosterRail, TopOverlayNav, WatchlistRail, MoviePosterCard
- `fdfs/src/lib/mock.ts` — mock data; `fdfs/src/lib/types.ts` — `Movie` type

---

## Scripts

Both apps support:

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — run production build
- `npm run lint` — lint (root: `next lint`, fdfs: `eslint`)

---

## Data

- All data is **mock** in `src/lib/mock.ts` (and `fdfs/src/lib/mock.ts`).
- No external APIs or database; shape is in `Movie` (`id`, `title`, `year`, `language`, `poster`).

---

## License

Private project.
