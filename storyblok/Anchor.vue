<template>
  <a :href="blok.link" class="text-white fs-1 text-decoration-none d-block">
    {{ blok.name }}
  </a>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>

<style scoped>
a:hover {
  text-decoration: underline;
}
</style>
