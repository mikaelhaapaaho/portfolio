<template>
  <swiper
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    class="w-50 mb-2"
    style="height: 50vh"
  >
    <swiper-slide
      class="rounded-5 text-white d-flex justify-content-center align-items-center fs-3 glass"
    >
      <nuxt-link to="#">Lidl joulukalenteri 2024</nuxt-link>
    </swiper-slide>
    <swiper-slide class="rounded-5 glass">
      <nuxt-link class="fs-1" to="">Lidl joulukalenteri 2024</nuxt-link>
    </swiper-slide>
  </swiper>
</template>

<script setup>
const props = defineProps({ blok: Object })

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-cards"

// import required modules
import { EffectCards } from "swiper/modules"

const modules = [EffectCards]
</script>
