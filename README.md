# seanmilburn — portfolio

Nuxt 4 (SSR). Charcoal and acid lime, carried over from the 2020 build.

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # SSR build  -> .output/
npm run generate  # static     -> .output/public/
```

## Structure

| Path | What |
|---|---|
| `app/data/content.ts` | **All copy lives here.** Edit this, not the components. |
| `app/assets/styles/main.scss` | Design tokens + global styles |
| `app/components/*Section.vue` | One component per homepage section |
| `app/pages/cv.vue` | The CV — print stylesheet included, Cmd+P to PDF |
| `app/plugins/reveal.client.ts` | `v-reveal` scroll-in directive |

## Deploying

`npm run generate` produces a fully static `.output/public/` — drop it on Amplify,
Netlify, Cloudflare Pages or S3. For SSR, `npm run build` then `node .output/server/index.mjs`.
