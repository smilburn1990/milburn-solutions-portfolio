<template class="work">
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(item, index) in work" :key="`work_${index}`">
      <a class="work__link" :href="item.link" target="_blank">
        <h1 class="work__link--title">{{ item.name }}</h1>
      </a>
      <div class="grid-2 work__carousel">
        <div class="grid-item work__carousel--left">
          <p v-if="isEven(index)">{{ item.content }}</p>
          <img v-else class="work__carousel--image" :src="item.image" />
        </div>
        <div class="grid-item work__carousel--right">
          <img
            v-if="isEven(index)"
            class="work__carousel--image"
            :src="item.image"
          />
          <p v-else>{{ item.content }}</p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import content from "../content";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "Work",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      work: content.work,
      swiperOption: {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar"
        }
      }
    };
  },
  methods: {
    isEven(index) {
      return index % 2 == 0;
    }
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
