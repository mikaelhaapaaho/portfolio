<template>
  <Blob />
  <div class="container">
    <div class="vh-100"></div>
    <StoryblokComponent
      v-for="blok in blok.sections"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
  <Menu />
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>

<style scoped></style>
