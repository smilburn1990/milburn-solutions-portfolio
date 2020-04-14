<template>
  <ul class="navbar">
    <li
      class="navbar__item"
      v-for="(item, index) in navItems"
      :key="`tab_${index}`"
      @click="updateNavIndex(index)"
    >
      <nuxt-link
        class="navbar__item--link"
        :to="item.link"
        :style="navIndex === index && 'color: #bcf065;'"
      >
        {{ item.text || item.name }}
      </nuxt-link>
      <span :style="navIndex === index && 'color: #fff;'"> .</span>
    </li>
  </ul>
</template>

<script>
import { mapMutations } from "vuex";
import content from "../content";

export default {
  name: "NavBar",
  mounted() {
    const pageId = this.navItems.filter(
      item => this.$route.name === item.name
    )[0].id;
    this.navIndex = pageId;
  },
  data() {
    return {
      navItems: content.navBar,
      navIndex: null
    };
  },
  methods: {
    ...mapMutations(["UPDATE_NAV_INDEX"]),
    updateNavIndex(value) {
      this.navIndex = value;
      this.$store.commit("UPDATE_NAV_INDEX", value);
    }
  }
};
</script>
