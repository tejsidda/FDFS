# FDFS — Product Definition (v1)

## 0) One-liner
FDFS is a personal, poster-first movie space where users log what they watch and browse their taste across languages and time — with recaps reserved for special “Wrapped-style” moments.

---

## 1) Vision
### What we’re building
A calm, premium, cinematic app that feels like a personal “Netflix library + Spotify home” for your watched history.

### What problem it solves
- People watch movies across OTT/theatres and forget what they watched.
- Existing trackers feel like lists/spreadsheets or social networks (too noisy).
- Indian + multi-language viewers want language-first browsing and identity (“my taste across Telugu/Hindi/Tamil/Malayalam + global cinema”).

### Success criteria (v1)
- Logging a movie takes < 10 seconds.
- Home feels like a “place” (you want to open it), not a dashboard.
- Library browsing is satisfying and fast (posters, filters).
- Movie Detail feels like a journal entry (memory + context).
- Data is durable locally (works offline).

---

## 2) Target Audience
### Primary: Indian youth (18–30)
- Watches across multiple Indian languages + English/Korean/Japanese.
- Cares about “taste” and identity, not just ratings.
- Wants the app to look modern and premium.

### Secondary: Global cinema watchers
- Understands “FDFS” as brand if onboarding makes the purpose clear.
- Uses it as a quiet personal library.

---

## 3) Brand & Positioning
### Name
FDFS

### Tagline (default)
**Your personal movie space**

### Tone
- Calm, cinematic, premium
- Minimal words, strong hierarchy
- “Diary meets streaming UI” (not analytics SaaS)

### Positioning statement
Poster-first personal movie library for multi-language cinema lovers.

---

## 4) Product Principles (Non-negotiables)
1. **Posters > stats**
   - Posters are the primary content. Text supports.
2. **Browsing > reporting**
   - Home is curated rails, not KPI cards.
3. **Recaps are special**
   - Stats live behind “Recap” surfaces (monthly/yearly), not on Home.
4. **Fast capture**
   - Logging is frictionless: title + date + rating optional.
5. **Language is first-class**
   - Language is treated like a core identity axis.
6. **Offline-first**
   - App works without internet; no broken states.

---

## 5) Information Architecture (v1)
### Navigation (bottom / top)
- Home
- Library
- Search (optional in v1; can live inside Log flow)
- Profile/Recap (placeholder in v1)

### Core Screens
1) **Home**
   - Greeting + brand statement
   - Primary CTA: Log a movie
   - Poster rails (Recently watched, Indian picks, International, Highly rated, Rewatches)
   - No analytics cards on Home

2) **Library**
   - Poster grid
   - Filters: language, year, watched status, rating
   - Sort: recent watched, recently added, rating

3) **Movie Detail**
   - Large poster + title + metadata (year, language, runtime if known)
   - “Watched” entry:
     - watchedAt (date)
     - rating
     - notes
     - rewatch toggle
   - Edit + Delete

4) **Log Flow**
   - Modal or dedicated screen
   - Search title → pick → confirm
   - If offline: manual entry supported

---

## 6) User Stories (v1)
### Logging
- As a user, I can log a movie in <10 seconds.
- As a user, I can set watched date (default today).
- As a user, I can optionally rate and add a short note.

### Browsing
- As a user, I can scroll poster rails and relive what I watched.
- As a user, I can filter library by language (Telugu/Hindi/Tamil/Malayalam/English/etc.).
- As a user, I can open a movie and see my memory (notes + rating + watched date).

### Consistency
- As a user, I never lose my watch history if I refresh.
- As a user, the app works offline.

---

## 7) UX Requirements (v1)
### Home
- Must feel like Spotify/Netflix: large typography, rails, poster dominance
- Must have one primary action: **Log a movie**
- Must have a “Recently watched” rail that updates immediately after logging

### Library
- Grid must be responsive and fast
- Filters must not overwhelm: keep them compact (dropdowns/pills)
- “Search” should be accessible (can be within Log flow initially)

### Detail
- Poster is hero
- Your personal data (watched, rating, notes) is the focus, not public info

---

## 8) Data Model (v1)
### Movie (canonical)
- id (string)
- title (string)
- year (number | null)
- language (string) — required (default English)
- poster (string | null) — local placeholder or stored URL later
- runtimeMin (number | null)
- genres (string[] | null)

### WatchEntry (user-specific)
- movieId (string)
- watchedAt (ISO date string)
- rating (number | null)
- notes (string | null)
- rewatch (boolean)
- createdAt, updatedAt (ISO)

### Storage approach (v1)
- Local storage or IndexedDB (offline-first)
- One user only (no auth)
- Data format versioning (schemaVersion)

---

## 9) Recaps (v1.5 / v2)
### Monthly recap (later)
- Movies watched
- Top languages
- Top genres (if available)
- Average rating

### Yearly recap (later)
- Total movies
- Languages explored
- “Top 10” posters collage
- Shareable card

**Rule:** recaps are a separate surface, not Home.

---

## 10) Non-goals (v1)
- Social feed, likes, follows
- Box office / releases / trailers
- Recommendations engine
- Public profiles
- Multi-device sync
- Importing Letterboxd history (future)

---

## 11) Tech Plan
### v1 (offline-first)
- Next.js (App Router) + TypeScript
- Tailwind
- Minimal shadcn/ui (later)
- Storage: localStorage → upgrade to IndexedDB if needed

### v2 (sync)
- Supabase auth + Postgres
- TMDB integration for posters/metadata
- Background sync, conflict handling

---

## 12) Milestones
### M0: Visual Shell (Day 1–2)
- Home rails with mock data
- Library grid
- Movie detail layout

### M1: Log Flow (Day 3–5)
- Add movie (manual + quick select from local dataset)
- Updates reflect immediately on Home/Library

### M2: Persistence (Day 5–7)
- Save to local storage
- Restore on reload

### M3: Polish (Week 2)
- Poster placeholders
- Loading states
- Smooth navigation

### M4: v2 Planning
- TMDB + Supabase

---

## 13) Risks & Mitigations
- **UI drifting into “dashboard”** → enforce principles: no stats on Home
- **No posters = boring** → placeholders for all items, always poster-first
- **Too many filters** → keep filters minimal in v1
- **Local storage limits** → plan IndexedDB if dataset grows
