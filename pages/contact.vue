<template>
  <section class="container">
    <div class="grid-2">
      <div class="grid-item contact">
        <h1 class="contact__title">
          If you have any
          <span>questions</span> or
          <span>enquiries</span> into
          <span>web-builds</span> or any other
          <span>software solutions</span>,
          please don't hesitate to
          <span>reach out</span>!
        </h1>
      </div>
      <div class="grid-item contact">
        <a
          :href="icon.link"
          target="_blank"
          class="contact__link"
          v-for="(icon, index) in contactIcons"
          :key="`contact_${index}`"
        >
          <font-awesome-icon
            v-if="icon.brand"
            class="contact__link--icon"
            :icon="['fab', icon.name]"
          />
          <font-awesome-icon v-else class="contact__link--icon" :icon="['fas', icon.name]" />
          <h2 class="contact__link--text">{{ icon.text }}</h2>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import content from "../content";

export default {
  name: "Contact",
  data() {
    return {
      contactIcons: content.contactIcons
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
