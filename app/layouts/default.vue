<template>
  <div class="layout">
    <a class="skip" href="#main">Skip to content</a>
    <SiteHeader />
    <main id="main" class="layout__main">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;

  &__main { flex: 1; }
}

.skip {
  position: absolute;
  left: -9999px;
  top: 0;
  z-index: 100;
  background: var(--lime);
  color: var(--ink);
  padding: 0.75rem 1.25rem;
  font-weight: 600;
  border-radius: 0 0 var(--radius-sm) 0;

  &:focus {
    left: 0;
  }
}
</style>
