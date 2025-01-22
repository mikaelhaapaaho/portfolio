<template>
  <div class="col-12 p-2">
    <div class="rounded-5 p-4 p-md-5 text-white glass">
      <h3 class="mb-3">{{ blok.heading }}</h3>
      <div class="row">
        <StoryblokComponent
          v-for="blok in blok.components"
          :key="blok._uid"
          :blok="blok"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>
