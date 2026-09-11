<template>
  <section class="hero">
    <div class="shell hero__inner">
      <p v-reveal class="t-eyebrow hero__eyebrow">
        <span class="pulse" aria-hidden="true" />
        CTO at &amp;Dine · open to what's next
      </p>

      <h1 v-reveal="60" class="t-display hero__title">
        I build platforms<span class="dot">.</span><br class="hero__br" />
        And the teams that<br class="hero__br" />
        keep shipping them<span class="dot">.</span>
      </h1>

      <p v-reveal="140" class="t-lead hero__lead">
        Fourteen years in product engineering — React at
        <strong>Love Home Swap</strong>, tech lead at <strong>Mettrr</strong>, Vue at
        scale across <strong>Just Eat</strong> and <strong>Menulog</strong>. Now
        running technology at <strong>&amp;Dine</strong>, where I own the
        architecture, the delivery and an AI-assisted engineering practice across a
        six-repository platform.
      </p>

      <div v-reveal="220" class="hero__actions">
        <a class="btn" href="#platform">See what we built</a>
        <NuxtLink class="btn btn--ghost" to="/cv">Read the CV</NuxtLink>
      </div>

      <dl v-reveal="300" class="metrics">
        <div v-for="m in metrics" :key="m.label" class="metrics__item">
          <dt class="metrics__value">{{ m.value }}</dt>
          <dd class="metrics__label">{{ m.label }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup lang="ts">
import { metrics } from "~/data/content"
</script>

<style scoped lang="scss">
.hero {
  padding-top: 4rem;
  padding-bottom: var(--section-y);

  @include md { padding-top: 7rem; }

  &__eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 1.75rem;
  }

  &__title { margin-bottom: 2rem; }

  /* Let the headline wrap to the viewport on small screens; the hand-placed
     line breaks only make sense once there is room for them. */
  &__br {
    display: none;
    @include sm { display: inline; }
  }

  &__lead {
    max-width: 42rem;

    strong { color: var(--text); font-weight: 500; }
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.85rem;
    margin-top: 2.5rem;
  }
}

.pulse {
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  background: var(--lime);
  box-shadow: 0 0 0 0 rgba(188, 240, 101, 0.55);
  animation: pulse 2.6s var(--ease) infinite;
}

@keyframes pulse {
  0%   { box-shadow: 0 0 0 0 rgba(188, 240, 101, 0.5); }
  70%  { box-shadow: 0 0 0 0.55rem rgba(188, 240, 101, 0); }
  100% { box-shadow: 0 0 0 0 rgba(188, 240, 101, 0); }
}

.metrics {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  margin-top: 5rem;
  background: var(--line);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;

  @include lg { grid-template-columns: repeat(4, 1fr); }

  &__item {
    background: var(--ink);
    padding: 1.6rem 1.35rem;

    @include md { padding: 2rem 1.75rem; }
  }

  &__value {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: clamp(2.1rem, 4.5vw, 3rem);
    line-height: 1;
    color: var(--lime);
    letter-spacing: -0.03em;
  }

  &__label {
    margin: 0.7rem 0 0;
    font-size: 0.85rem;
    line-height: 1.45;
    color: var(--text-muted);
    text-wrap: pretty;
  }
}
</style>
