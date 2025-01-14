<template>
  <a :href="blok.link" target="_blank"
    ><i class="bi text-white display-5 me-4" :class="blok.icon"></i
  ></a>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>
