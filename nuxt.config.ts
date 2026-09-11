export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  ssr: true,

  css: ["~/assets/styles/main.scss"],

  app: {
    head: {
      htmlAttrs: { lang: "en-GB" },
      title: "Sean Milburn — CTO & Engineering Leader",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
        { name: "theme-color", content: "#0b0b0d" },
        {
          name: "description",
          content:
            "Sean Milburn — CTO at &Dine. Fourteen years building product engineering teams and the platforms they ship, now running an AI-assisted engineering practice across a six-repository platform."
        },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Sean Milburn — CTO & Engineering Leader" },
        {
          property: "og:description",
          content:
            "CTO at &Dine. I build platforms, and the teams that keep shipping them."
        },
        { name: "twitter:card", content: "summary_large_image" }
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap"
        }
      ]
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: { additionalData: '@use "~/assets/styles/_tokens.scss" as *;' }
      }
    }
  }
})
