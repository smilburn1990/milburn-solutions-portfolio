<template>
  <section id="capabilities" class="section">
    <div class="shell">
      <div class="section__head">
        <p v-reveal class="t-eyebrow">Capabilities</p>
        <h2 v-reveal="60" class="t-h2">What I bring<span class="dot">.</span></h2>
      </div>

      <div class="caps">
        <section
          v-for="(group, i) in capabilities"
          :key="group.group"
          v-reveal="i * 50"
          class="caps__group"
        >
          <h3 class="caps__title">{{ group.group }}</h3>
          <ul class="caps__list">
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { capabilities } from "~/data/content"
</script>

<style scoped lang="scss">
.caps {
  display: grid;
  gap: 2.5rem 2rem;

  @include sm { grid-template-columns: repeat(2, 1fr); }
  @include lg { grid-template-columns: repeat(4, 1fr); }

  &__group {
    padding-top: 1.25rem;
    border-top: 1px solid var(--line);
  }

  &__title {
    font-family: var(--font-mono);
    font-size: 0.74rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--lime);
    margin-bottom: 1.1rem;
  }

  &__list {
    list-style: none;
    padding: 0;
    display: grid;
    gap: 0.6rem;

    li {
      font-size: 0.93rem;
      color: var(--text-muted);
      line-height: 1.45;
      position: relative;
      padding-left: 0.95rem;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.6rem;
        width: 0.28rem;
        height: 0.28rem;
        border-radius: 50%;
        background: var(--line-strong);
      }
    }
  }
}
</style>
