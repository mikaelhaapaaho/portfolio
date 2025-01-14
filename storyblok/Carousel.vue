<template>
  <div class="col-12 p-2">
    <div class="rounded-5 p-4 p-md-5 glass">
      <h3 class="text-white mb-3 mb-md-4">{{ blok.heading }}</h3>
      <div id="carousel" class="carousel slide">
        <div class="carousel-inner">
          <StoryblokComponent
            v-for="(slide, index) in blok.slides"
            :key="slide._uid"
            :blok="slide"
            :class="{ active: index === 0 }"
            :linkText="blok.linkText"
          />
        </div>
        <div class="d-flex justify-content-between">
          <button
            class="carousel-control-prev pe-none w-auto position-relative"
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="next"
          >
            <i class="bi bi-arrow-left pe-auto display-4"></i>
          </button>
          <button
            class="carousel-control-next pe-none w-auto position-relative"
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="previous"
          >
            <i class="bi bi-arrow-right pe-auto display-4"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>
