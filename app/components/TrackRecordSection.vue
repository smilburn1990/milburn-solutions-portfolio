<template>
  <section id="track-record" class="section">
    <div class="shell">
      <div class="section__head">
        <p v-reveal class="t-eyebrow">Track record</p>
        <h2 v-reveal="60" class="t-h2">Fourteen years, six companies<span class="dot">.</span></h2>
      </div>

      <ol class="roles">
        <li v-for="(role, i) in roles" :key="role.company" v-reveal="i * 50" class="roles__item">
          <div class="roles__meta">
            <p class="roles__period">{{ role.period }}</p>
          </div>

          <div class="roles__body">
            <h3 class="roles__company">{{ role.company }}</h3>
            <p class="roles__title">{{ role.title }}</p>
            <p class="roles__summary">{{ role.summary }}</p>

            <ul v-if="role.points" class="roles__points">
              <li v-for="point in role.points" :key="point">{{ point }}</li>
            </ul>
          </div>
        </li>
      </ol>

      <div class="extras">
        <section v-reveal class="extras__col">
          <h3 class="extras__title">Selected freelance</h3>
          <dl class="extras__list">
            <div v-for="f in freelance" :key="f.name">
              <dt>{{ f.name }}</dt>
              <dd>{{ f.copy }}</dd>
            </div>
          </dl>
        </section>

        <section v-reveal="80" class="extras__col">
          <h3 class="extras__title">Education</h3>
          <dl class="extras__list">
            <div v-for="e in education" :key="e.qualification">
              <dt>{{ e.qualification }}</dt>
              <dd>{{ e.place }}</dd>
            </div>
          </dl>

          <h3 class="extras__title extras__title--spaced">{{ outside.title }}</h3>
          <p class="extras__copy">{{ outside.copy }}</p>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { roles, freelance, education, outside } from "~/data/content"
</script>

<style scoped lang="scss">
.roles {
  list-style: none;
  padding: 0;
  border-top: 1px solid var(--line);

  &__item {
    display: grid;
    gap: 0.75rem;
    padding: 2.25rem 0;
    border-bottom: 1px solid var(--line);

    @include md {
      grid-template-columns: 12rem 1fr;
      gap: 2.5rem;
      padding: 3rem 0;
    }
  }

  &__period {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    letter-spacing: 0.04em;
    color: var(--lime);

    @include md { padding-top: 0.45rem; position: sticky; top: 6rem; }
  }

  &__company {
    font-family: var(--font-display);
    font-size: clamp(1.5rem, 3vw, 2.1rem);
    letter-spacing: -0.03em;
  }

  &__title {
    color: var(--text);
    font-weight: 500;
    margin-top: 0.25rem;
  }

  &__summary {
    color: var(--text-muted);
    margin-top: 0.85rem;
    max-width: 44rem;
    text-wrap: pretty;
  }

  &__points {
    list-style: none;
    padding: 0;
    margin-top: 1.4rem;
    display: grid;
    gap: 0.7rem;
    max-width: 46rem;

    li {
      position: relative;
      padding-left: 1.4rem;
      color: var(--text-muted);
      font-size: 0.95rem;
      text-wrap: pretty;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.66rem;
        width: 0.55rem;
        height: 1px;
        background: var(--lime);
      }
    }
  }
}

.extras {
  display: grid;
  gap: 3rem;
  margin-top: 4.5rem;

  @include md { grid-template-columns: repeat(2, 1fr); }

  &__title {
    font-family: var(--font-mono);
    font-size: 0.74rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--lime);
    margin-bottom: 1.25rem;

    &--spaced { margin-top: 2.75rem; }
  }

  &__list {
    display: grid;
    gap: 1.25rem;

    dt { font-weight: 500; }

    dd {
      margin: 0.3rem 0 0;
      color: var(--text-muted);
      font-size: 0.93rem;
      text-wrap: pretty;
    }
  }

  &__copy {
    color: var(--text-muted);
    font-size: 0.95rem;
    text-wrap: pretty;
  }
}
</style>
