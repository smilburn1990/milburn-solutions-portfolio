/**
 * v-reveal — fades an element in as it enters the viewport.
 *
 * Registered universally, not `.client`: Vue's SSR renderer looks the directive
 * up on the server too and throws on a missing `getSSRProps`. The observer work
 * is still client-only — `mounted` never runs during SSR.
 *
 * Opt-out is automatic: the stylesheet neutralises `.reveal` under
 * prefers-reduced-motion, and elements stay visible if IntersectionObserver
 * is unavailable.
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("reveal", {
    // Server pass: the element is rendered with no extra attributes, so it is
    // visible in the HTML before hydration and for crawlers.
    getSSRProps: () => ({}),

    mounted(el: HTMLElement, binding) {
      if (typeof IntersectionObserver === "undefined") return

      el.classList.add("reveal")

      const delay = Number(binding.value ?? 0)
      if (delay) el.style.setProperty("--reveal-delay", `${delay}ms`)

      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue
            entry.target.classList.add("is-in")
            io.unobserve(entry.target)
          }
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
      )

      io.observe(el)
      ;(el as any).__revealObserver = io
    },

    unmounted(el: HTMLElement) {
      ;(el as any).__revealObserver?.disconnect()
    }
  })
})
