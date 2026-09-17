# English Grammar Master — Prepositions & Conjunctions Pro

**Offline-first Progressive Web App** for mastering Prepositions, Conjunctions and Sentence Connectors.

Based on *A Text-Book of Higher English Grammar* (Chapters XXII–XXIII).

## Features

- Bilingual (English + বাংলা) explanations and tips
- Complete lessons from the textbook
- 130+ practice questions (MCQ, True/False)
- 10 memory formulas
- Adaptive-style quiz (random 20, chapter tests, full challenge)
- Progress tracking (localStorage) — works offline
- Printable question paper + answer key
- Installable PWA (service worker via vite-plugin-pwa)

## Target users

West Bengal Board students (Classes VIII–XII), teachers, self-learners.

## How to run

```bash
# 1. Install dependencies
npm install

# 2. Development server
npm run dev

# 3. Production build (for GitHub Pages / any static host)
npm run build

# 4. Preview production build
npm run preview
```

After `npm run build`, the `dist/` folder is ready to deploy.

### GitHub Pages

- Set repository settings → Pages → Source: GitHub Actions or deploy the `dist` folder.
- The Vite config uses `base: './'` so it works from a subpath.

## Project structure

```
src/
  data/
    lessons.ts      # All lesson content + memory formulas
    questions.ts    # 130+ questions with explanations
  hooks/
    useProgress.ts  # localStorage progress tracking
  pages/
    Home.tsx
    Lessons.tsx
    LessonDetail.tsx
    Formulas.tsx
    Quiz.tsx
    Progress.tsx
    PrintPage.tsx
  styles/
    index.css
  App.tsx
  main.tsx
```

## Offline

After the first visit (or after `npm run build` + open the built files), the app shell, lessons and all questions are available offline. Progress is stored in `localStorage`.

## Licence

Educational use. Content derived from the supplied textbook extraction for learning purposes.
