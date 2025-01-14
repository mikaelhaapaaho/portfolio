<template>
  <div class="carousel-item p-2 mb-3">
    <div class="rounded-5 text-start text-white">
      <img
        :src="blok.image.filename"
        class="d-block w-100 rounded-5 mb-4"
        :alt="blok.image.alt"
      />
      <h5>{{ blok.name }}</h5>
      <p class="mb-2 text-uppercase">{{ blok.description }}</p>
      <a :href="blok.link">{{ linkText }}</a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object, linkText: String })
</script>
