<template>
  <section id="practice" class="section practice">
    <div class="shell">
      <div class="section__head">
        <p v-reveal class="t-eyebrow">{{ practice.eyebrow }}</p>
        <h2 v-reveal="60" class="t-h2">{{ practice.title }}</h2>
        <p v-reveal="120" class="t-lead">{{ practice.lead }}</p>
      </div>

      <ul class="pillars">
        <li
          v-for="(p, i) in practice.pillars"
          :key="p.n"
          v-reveal="i * 60"
          class="pillars__item"
        >
          <span class="pillars__n" aria-hidden="true">{{ p.n }}</span>
          <h3 class="pillars__title">{{ p.title }}</h3>
          <p class="pillars__copy">{{ p.copy }}</p>
        </li>
      </ul>

      <p v-reveal class="practice__note">
        <span class="t-lime">A note on honesty —</span> the &amp;Dine ordering product
        itself contains no AI. Discovery, ordering and checkout are deterministic by
        design. The AI sits in back-office document parsing and in how the engineering
        team works. I would rather say that plainly than let a buzzword do the talking.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { practice } from "~/data/content"
</script>

<style scoped lang="scss">
.practice {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent, rgba(188, 240, 101, 0.025), transparent);
    pointer-events: none;
  }

  &__note {
    margin-top: 3.5rem;
    padding: 1.6rem 1.75rem;
    border-left: 2px solid var(--lime);
    background: var(--lime-faint);
    border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
    color: var(--text-muted);
    max-width: 52rem;
    font-size: 0.97rem;
    text-wrap: pretty;
  }
}

.pillars {
  display: grid;
  gap: 2.5rem 2rem;
  list-style: none;
  padding: 0;

  @include md { grid-template-columns: repeat(2, 1fr); }
  @include lg { grid-template-columns: repeat(3, 1fr); gap: 3rem 2.5rem; }

  &__item {
    padding-top: 1.5rem;
    border-top: 1px solid var(--line-strong);
  }

  &__n {
    display: block;
    font-family: var(--font-mono);
    font-size: 0.76rem;
    color: var(--lime);
    margin-bottom: 0.9rem;
  }

  &__title {
    font-family: var(--font-display);
    font-size: 1.2rem;
    letter-spacing: -0.02em;
    margin-bottom: 0.7rem;
  }

  &__copy {
    color: var(--text-muted);
    font-size: 0.94rem;
    text-wrap: pretty;
  }
}
</style>
