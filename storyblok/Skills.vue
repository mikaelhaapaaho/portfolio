<template>
  <section
    ref="section"
    :id="blok.component"
    class="min-vh-100 d-flex align-items-center"
  >
    <div ref="row" class="row p-2 mt-5">
      <h3 class="text-white ps-2 z-1">
        <i class="bi bi-asterisk text-primary"></i> {{ blok.section }}
      </h3>
      <div class="col-12 p-2">
        <h3 class="rounded-5 p-4 p-md-5 text-white glass">
          {{ blok.heading }}
        </h3>
      </div>
      <StoryblokComponent
        v-for="blok in blok.skills"
        :key="blok._uid"
        :blok="blok"
      />
      <div class="col-12 p-2">
        <div class="rounded-5 p-4 p-md-5 h-100 text-white glass">
          <h3 class="mb-3">{{ blok.tagsHeading }}</h3>
          {{ blok.tags }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object })

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
