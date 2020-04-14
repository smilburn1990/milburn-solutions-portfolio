<template>
  <section class="container">
    <div class="grid-2">
      <div class="grid-item profile">
        <h1 class="profile__title">Hello, I'm <span>Sean Milburn</span>.</h1>
        <h1 class="profile__subtitle">
          A <span>full-stack</span> developer specialising in
          <span>websites</span>, custom <span>plugins</span> and pretty
          <span>UI's</span>.
        </h1>
      </div>
      <div class="grid-item profile">
        <img
          class="profile__image"
          src="https://s3-eu-west-1.amazonaws.com/milburnsolutions.com/images/profile-avatar.png"
        />
      </div>
    </div>
  </section>
</template>

<script>
import content from "../content";

export default {
  name: "Home",
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
