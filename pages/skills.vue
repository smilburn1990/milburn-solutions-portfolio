<template>
  <section class="container">
    <div class="grid-2">
      <div class="grid-4">
        <div
          class="grid-item skills"
          v-for="(icon, index) in skillIcons"
          :key="`skills_${index}`"
        >
          <font-awesome-icon class="skills__icon" :icon="['fab', icon.name]" />
        </div>
      </div>
      <div class="grid-item skills">
        <h1 class="skills__title">
          During my <span>7 years</span> as a <span>developer</span> I have
          become equipt with a wide variety of notable <span>languages</span>,
          <span>libraries</span>, <span>frameworks</span> and software
          <span>tools</span>.
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
import content from "../content";

export default {
  name: "Skills",
  data() {
    return {
      skillIcons: content.skillIcons
    };
  },
  transition(to, from) {
    if (!from) {
      return "slide-left";
    }
    return content.navBar.indexOf(
      content.navBar.filter(nav => nav.name === from.name)[0]
    ) <
      content.navBar.indexOf(
        content.navBar.filter(nav => nav.name === to.name)[0]
      )
      ? "slide-left"
      : "slide-right";
  }
};
</script>
