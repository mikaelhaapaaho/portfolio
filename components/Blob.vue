<template>
  <div
    class="position-fixed vw-100 vh-100 d-flex justify-content-center align-items-center overflow-hidden"
  >
    <iframe
      ref="blob"
      src="https://my.spline.design/untitled-4cb747f63a2bd40796316c6002ee837c/"
      frameborder="0"
      style="width: 130vw; height: 130vh; pointer-events: none"
    ></iframe>

    <h1
      ref="mikael"
      class="position-absolute text-center display-4 text-white m-5 libre-barcode-128-text-regular"
    >
      Mikael Haapa-aho
    </h1>
  </div>
  <section ref="home" id="home" class="vh-100"></section>
</template>

<script setup>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const blob = ref(null)
const mikael = ref(null)
const home = ref(null)

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.to(blob.value, {
    scale: 1.5,
    filter: "blur(5px)",
    scrollTrigger: {
      trigger: home.value,
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  })
  gsap.to(mikael.value, {
    scale: 0,
    opacity: 0,
    scrollTrigger: {
      trigger: home.value,
      start: "top top",
      end: "50% top",
      scrub: 1,
    },
  })
})
</script>
