# seanmilburn — portfolio

Nuxt 4. Charcoal and acid lime, carried over from the 2020 build.

```bash
npm install
npm run dev       # http://localhost:3000
npm run generate  # static site -> .output/public/
```

## Structure

| Path | What |
|---|---|
| `app/data/content.ts` | **All copy lives here.** Edit this, not the components. |
| `app/assets/styles/main.scss` | Design tokens + global styles |
| `app/components/*Section.vue` | One component per homepage section |
| `app/pages/cv.vue` | The CV — screen and print styles, dark + ink-friendly themes |
| `app/plugins/reveal.ts` | `v-reveal` scroll-in directive |

The site and the CV both read from `content.ts`, so a role edited in one place
appears in both. The CV deliberately shows only the three most recent roles
(`cvRoles`) with the rest summarised in `earlierCareer`.

## The CV page

- `/cv` renders the CV on screen and carries its own print stylesheet.
- Two print themes: **Dark** (matches the site) and **Print-friendly**. Toggle on
  the page, or link directly with `/cv?theme=light`.
- The dark theme needs the browser's **"Background graphics"** option. With it
  off, the backdrop drops out and pale text prints onto white paper — send the
  print-friendly version to anyone likely to print it, or to an ATS.
- The phone number shows on screen but is hidden in print, so it does not travel
  with a PDF uploaded to a job board.

## Deploying to AWS Amplify

`amplify.yml` in the repo root drives the build — Amplify picks it up
automatically, so no build settings need entering in the console.

1. Amplify console → **New app** → **Host web app** → GitHub →
   `smilburn1990/milburn-solutions-portfolio`, branch `master`.
2. Amplify detects `amplify.yml`. Confirm the artifact directory reads
   `.output/public`.
3. Deploy.

Notes:

- This is a **static** deploy (`nuxt generate`), not SSR. Both routes are
  prerendered to real HTML, so crawlers get full markup with no Lambda involved.
- **Do not add the SPA catch-all rewrite** (`/<*>` → `/index.html`, 200) that
  Amplify suggests for single-page apps. Every route here exists as its own HTML
  file, and the rewrite would swallow the 404 page.
- Node is pinned to 22 via `.nvmrc`; Nuxt 4 requires 20.19 or newer.
