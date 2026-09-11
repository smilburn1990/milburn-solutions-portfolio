<template>
  <header class="masthead" :class="{ 'is-stuck': stuck }">
    <div class="masthead__inner shell">
      <NuxtLink to="/" class="mark" @click="open = false">
        <span class="mark__name">Sean Milburn</span><span class="dot">.</span>
      </NuxtLink>

      <nav class="masthead__nav" aria-label="Primary">
        <NuxtLink v-for="item in nav" :key="item.to" :to="item.to" class="masthead__link">
          {{ item.label }}
        </NuxtLink>
        <a class="btn btn--sm" :href="`mailto:${profile.email}`">Get in touch</a>
      </nav>

      <button
        class="burger"
        :aria-expanded="open"
        aria-controls="mobile-nav"
        aria-label="Menu"
        @click="open = !open"
      >
        <span /><span />
      </button>
    </div>

    <Transition name="drawer">
      <nav v-if="open" id="mobile-nav" class="drawer" aria-label="Primary mobile">
        <NuxtLink
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          class="drawer__link"
          @click="open = false"
        >
          {{ item.label }}
        </NuxtLink>
        <a class="drawer__link drawer__link--accent" :href="`mailto:${profile.email}`" @click="open = false">
          Get in touch
        </a>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { nav, profile } from "~/data/content"

const open = ref(false)
const stuck = ref(false)

const onScroll = () => { stuck.value = window.scrollY > 24 }

onMounted(() => {
  onScroll()
  window.addEventListener("scroll", onScroll, { passive: true })
})

onBeforeUnmount(() => window.removeEventListener("scroll", onScroll))

// Never leave the drawer open behind a route change.
watch(() => useRoute().fullPath, () => { open.value = false })
</script>

<style scoped lang="scss">
.masthead {
  position: sticky;
  top: 0;
  z-index: 50;
  transition: background 0.35s var(--ease), border-color 0.35s var(--ease), backdrop-filter 0.35s;
  border-bottom: 1px solid transparent;

  &.is-stuck {
    background: rgba(11, 11, 13, 0.78);
    backdrop-filter: saturate(150%) blur(14px);
    border-bottom-color: var(--line);
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    height: 4.5rem;
  }

  &__nav {
    display: none;
    align-items: center;
    gap: 2rem;

    @include md { display: flex; }
  }

  &__link {
    text-decoration: none;
    font-size: 0.94rem;
    color: var(--text-muted);
    transition: color 0.2s var(--ease);
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -0.35rem;
      width: 0;
      height: 1px;
      background: var(--lime);
      transition: width 0.3s var(--ease);
    }

    &:hover {
      color: var(--text);
      &::after { width: 100%; }
    }
  }
}

.mark {
  text-decoration: none;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.02rem;
  letter-spacing: -0.02em;
  white-space: nowrap;

  &__name { transition: color 0.2s var(--ease); }
  &:hover &__name { color: var(--lime); }
}

.burger {
  display: grid;
  place-content: center;
  gap: 0.34rem;
  width: 2.75rem;
  height: 2.75rem;
  margin-right: -0.65rem;
  background: none;
  border: 0;
  cursor: pointer;

  @include md { display: none; }

  span {
    display: block;
    width: 1.25rem;
    height: 2px;
    background: var(--text);
    transition: transform 0.3s var(--ease), opacity 0.3s var(--ease);
  }

  &[aria-expanded="true"] span:first-child { transform: translateY(0.18rem) rotate(45deg); }
  &[aria-expanded="true"] span:last-child { transform: translateY(-0.18rem) rotate(-45deg); }
}

.drawer {
  display: flex;
  flex-direction: column;
  padding: 0.5rem var(--gutter) 1.75rem;
  background: rgba(11, 11, 13, 0.97);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--line);

  @include md { display: none; }

  &__link {
    text-decoration: none;
    font-family: var(--font-display);
    font-size: 1.35rem;
    font-weight: 500;
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--line);

    &--accent { color: var(--lime); border-bottom: 0; }
  }
}

.drawer-enter-active,
.drawer-leave-active { transition: opacity 0.25s var(--ease), transform 0.25s var(--ease); }

.drawer-enter-from,
.drawer-leave-to { opacity: 0; transform: translateY(-0.5rem); }
</style>
