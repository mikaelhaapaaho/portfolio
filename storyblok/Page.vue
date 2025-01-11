<template>
  <Blob />
  <div class="container pb-5">
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
