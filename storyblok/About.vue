<template>
  <section
    ref="section"
    :id="blok.component"
    class="min-vh-100 w-100 d-flex align-items-center"
  >
    <div ref="row" class="row p-2 mt-5">
      <h3 class="text-white ps-2 z-1">
        <i class="bi bi-asterisk text-primary"></i> {{ blok.section }}
      </h3>
      <div class="col-12 p-2">
        <div class="rounded-5 p-4 p-md-5 glass">
          <div class="display-1 text-white" v-html="title"></div>
          <div class="text-white mt-4">{{ blok.subheading }}</div>
        </div>
      </div>
      <div class="col-12 col-md-6 p-2">
        <div
          class="rounded-5 p-4 p-md-5 h-100 text-white d-flex align-items-end glass"
        >
          <div v-html="introduction"></div>
        </div>
      </div>
      <div class="col-6 col-md-3 p-2">
        <div class="rounded-5 p-4 p-md-5 h-100 d-flex align-items-end glass">
          <div>
            <div class="text-white display-big">
              {{ years }}<span class="text-primary">+</span>
            </div>
            <div class="text-white">{{ blok.experience }}</div>
          </div>
        </div>
      </div>
      <div class="col-6 col-md-3 p-2">
        <div
          class="rounded-5 pt-2 pt-md-5 px-md-3 h-100 d-flex align-items-end overflow-hidden glass"
        >
          <i
            class="bi bi bi-flower1 position-fixed end-0 top-0 text-white display-4 mx-3 mx-md-4 my-2 my-md-3 rotate"
          ></i>
          <img
            class="img-fluid"
            style="filter: grayscale(20%) contrast(120%) sepia(10%)"
            :src="blok.picture.filename"
            :alt="blok.picture.alt"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object })

const title = renderRichText(props.blok.title)
const introduction = renderRichText(props.blok.introduction)

const years = computed(() => {
  return new Date().getFullYear() - 2018
})

// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// const section = ref(null)
// const row = ref(null)

// gsap.registerPlugin(ScrollTrigger)

// onMounted(() => {
//   gsap.set(row.value, { scale: 0.5 })

//   const t1 = gsap.timeline({
//     paused: "true",
//     scrollTrigger: {
//       trigger: row.value,
//       start: "top bottom",
//       end: "bottom top",
//       scrub: 1,
//     },
//   })

//   t1.to(row.value, { scale: 1 })
//   t1.to(row.value, { scale: 0.5 })
// })
</script>

<style scoped>
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.rotate {
  animation: rotate 10s linear infinite;
}
</style>
