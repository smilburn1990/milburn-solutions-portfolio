<template>
  <section id="contact" class="section contact">
    <div class="shell">
      <div v-reveal class="contact__panel">
        <p class="t-eyebrow">Contact</p>
        <h2 class="t-h2 contact__title">
          Looking for a CTO who still<br class="contact__br" />
          reads the diff<span class="dot">?</span>
        </h2>
        <p class="t-lead contact__lead">
          I'm starting to look at what's next — technology leadership roles where the
          architecture, the team and the commercial reality are all genuinely mine to own.
          Happy to talk, whatever stage you're at.
        </p>

        <div class="contact__actions">
          <a class="btn" :href="`mailto:${profile.email}`">{{ profile.email }}</a>
          <a class="btn btn--ghost" :href="profile.linkedin" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a class="btn btn--ghost" :href="profile.github" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profile } from "~/data/content"
</script>

<style scoped lang="scss">
.contact {
  &__panel {
    padding: 3rem 1.75rem;
    border: 1px solid var(--line-strong);
    border-radius: var(--radius);
    background:
      radial-gradient(38rem 22rem at 88% 0%, rgba(188, 240, 101, 0.1), transparent 68%),
      linear-gradient(180deg, var(--ink-raised), rgba(18, 18, 21, 0.35));

    @include md { padding: 5rem 4rem; }
  }

  &__title { margin: 1.5rem 0; }

  &__br { display: none; @include md { display: inline; } }

  &__lead { max-width: 40rem; }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.85rem;
    margin-top: 2.5rem;
  }
}
</style>
