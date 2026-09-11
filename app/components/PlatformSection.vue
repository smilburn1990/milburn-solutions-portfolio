<template>
  <section id="platform" class="section">
    <div class="shell">
      <div class="section__head">
        <p v-reveal class="t-eyebrow">{{ platform.eyebrow }}</p>
        <h2 v-reveal="60" class="t-h2">{{ platform.title }}</h2>
        <p v-reveal="120" class="t-lead">{{ platform.lead }}</p>
      </div>

      <!-- The six repositories -->
      <ul class="stack">
        <li
          v-for="(repo, i) in platform.stack"
          :key="repo.key"
          v-reveal="i * 60"
          class="card stack__item"
        >
          <header class="stack__head">
            <h3 class="t-h3">{{ repo.name }}</h3>
            <p class="stack__tech">{{ repo.tech }}</p>
          </header>

          <p class="stack__copy">{{ repo.copy }}</p>

          <ul class="stack__stats">
            <li v-for="s in repo.stats" :key="s">{{ s }}</li>
          </ul>
        </li>
      </ul>

      <!-- The problems worth talking about -->
      <h3 v-reveal class="t-h3 platform__subhead">
        The parts that were actually hard<span class="dot">.</span>
      </h3>

      <ol class="problems">
        <li
          v-for="(p, i) in platform.problems"
          :key="p.title"
          v-reveal="i * 70"
          class="problems__item"
        >
          <span class="problems__n" aria-hidden="true">{{ String(i + 1).padStart(2, "0") }}</span>
          <div>
            <h4 class="problems__title">{{ p.title }}</h4>
            <p class="problems__copy">{{ p.copy }}</p>
          </div>
        </li>
      </ol>

      <!-- Surface area -->
      <div class="surface">
        <div v-reveal class="surface__col">
          <p class="t-eyebrow">Integrations owned</p>
          <ul class="tags surface__tags">
            <li v-for="i in platform.integrations" :key="i" class="tag">{{ i }}</li>
          </ul>
        </div>
        <div v-reveal="80" class="surface__col">
          <p class="t-eyebrow">Infrastructure</p>
          <ul class="tags surface__tags">
            <li v-for="i in platform.infra" :key="i" class="tag">{{ i }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { platform } from "~/data/content"
</script>

<style scoped lang="scss">
.stack {
  display: grid;
  gap: 1rem;
  list-style: none;
  padding: 0;

  @include md { grid-template-columns: repeat(2, 1fr); }
  @include lg { grid-template-columns: repeat(3, 1fr); }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__head h3 { margin-bottom: 0.3rem; }

  &__tech {
    font-family: var(--font-mono);
    font-size: 0.76rem;
    letter-spacing: 0.02em;
    color: var(--lime);
  }

  &__copy {
    color: var(--text-muted);
    font-size: 0.95rem;
    flex: 1;
    text-wrap: pretty;
  }

  &__stats {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem 1rem;
    list-style: none;
    padding: 1rem 0 0;
    margin: 0;
    border-top: 1px solid var(--line);

    li {
      font-family: var(--font-mono);
      font-size: 0.74rem;
      color: var(--text-faint);
    }
  }
}

.platform__subhead {
  margin: 5.5rem 0 2.5rem;
}

.problems {
  display: grid;
  gap: 0;
  list-style: none;
  padding: 0;
  counter-reset: none;
  border-top: 1px solid var(--line);

  &__item {
    display: grid;
    grid-template-columns: 2.75rem 1fr;
    gap: 1rem;
    padding: 2rem 0;
    border-bottom: 1px solid var(--line);

    @include md {
      grid-template-columns: 5rem 1fr;
      gap: 2.5rem;
      padding: 2.5rem 0;
    }
  }

  &__n {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--lime);
    padding-top: 0.35rem;
  }

  &__title {
    font-family: var(--font-display);
    font-size: clamp(1.15rem, 2vw, 1.45rem);
    letter-spacing: -0.02em;
    margin-bottom: 0.7rem;
  }

  &__copy {
    color: var(--text-muted);
    max-width: 46rem;
    text-wrap: pretty;
  }
}

.surface {
  display: grid;
  gap: 2.5rem;
  margin-top: 4.5rem;

  @include md { grid-template-columns: repeat(2, 1fr); gap: 3rem; }

  &__tags { margin-top: 1.1rem; }
}
</style>
