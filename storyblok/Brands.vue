<template>
  <div class="col-12 p-2">
    <div class="rounded-5 p-4 p-md-5 glass">
      <h3 class="text-white">{{ blok.brandText }}</h3>
      <div class="row">
        <div
          v-for="(logo, index) in blok.brandLogos"
          class="col-4 col-md-3 col-lg-2 p-3 p-md-4 d-flex align-items-center"
          :key="index"
        >
          <img class="img-fluid m-2" :src="logo.filename" :alt="logo.alt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>
