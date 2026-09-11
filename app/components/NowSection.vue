<template>
  <section id="now" class="section">
    <div class="shell">
      <div class="section__head">
        <p v-reveal class="t-eyebrow">{{ now.eyebrow }}</p>
        <h2 v-reveal="60" class="t-h2">{{ now.title }}</h2>
      </div>

      <div class="now">
        <div class="now__prose">
          <p v-for="(para, i) in now.body" :key="i" v-reveal="i * 80" class="t-lead now__para">
            {{ para }}
          </p>
        </div>

        <ul class="now__grid">
          <li
            v-for="(item, i) in now.ownership"
            :key="item.title"
            v-reveal="i * 70"
            class="card now__item"
          >
            <h3 class="t-h3 now__item-title">{{ item.title }}</h3>
            <p class="now__item-copy">{{ item.copy }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { now } from "~/data/content"
</script>

<style scoped lang="scss">
.now {
  display: grid;
  gap: 3.5rem;

  &__prose { max-width: 46rem; }

  &__para + &__para { margin-top: 1.5rem; }

  &__grid {
    display: grid;
    gap: 1rem;
    list-style: none;
    padding: 0;

    @include md { grid-template-columns: repeat(2, 1fr); }
  }

  &__item-title {
    color: var(--lime);
    margin-bottom: 0.8rem;
  }

  &__item-copy {
    color: var(--text-muted);
    font-size: 0.97rem;
    text-wrap: pretty;
  }
}
</style>
