<template>
  <div class="col-6 col-md-4 col-lg-3 p-2">
    <a :href="blok.link"
      ><img
        class="img-fluid rounded-4"
        :src="blok.image.filename"
        :alt="blok.image.alt"
    /></a>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>
