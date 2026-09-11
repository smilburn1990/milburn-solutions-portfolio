<template>
  <footer class="foot">
    <div class="shell">
      <hr class="rule" />
      <div class="foot__inner">
        <p class="foot__mark">
          Sean Milburn<span class="dot">.</span>
          <span class="foot__role">{{ profile.role }}</span>
        </p>

        <nav class="foot__links" aria-label="Elsewhere">
          <a :href="`mailto:${profile.email}`">Email</a>
          <a :href="profile.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a :href="profile.github" target="_blank" rel="noopener noreferrer">GitHub</a>
          <NuxtLink to="/cv">CV</NuxtLink>
        </nav>
      </div>

      <p class="foot__fine">
        Built with Nuxt 4 &middot; {{ year }} &middot; {{ profile.location }}
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { profile } from "~/data/content"

// Rendered on the server and hydrated — a fixed value avoids a mismatch.
const year = useState("footer-year", () => new Date().getFullYear())
</script>

<style scoped lang="scss">
.foot {
  padding-bottom: 2.5rem;

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding-top: 2.5rem;

    @include md {
      flex-direction: row;
      align-items: baseline;
      justify-content: space-between;
    }
  }

  &__mark {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 1.05rem;
  }

  &__role {
    display: block;
    font-family: var(--font-body);
    font-weight: 400;
    font-size: 0.9rem;
    color: var(--text-muted);
    margin-top: 0.15rem;
  }

  &__links {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;

    a {
      text-decoration: none;
      font-size: 0.92rem;
      color: var(--text-muted);
      transition: color 0.2s var(--ease);

      &:hover { color: var(--lime); }
    }
  }

  &__fine {
    margin-top: 2.5rem;
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.06em;
    color: var(--text-faint);
  }
}
</style>
