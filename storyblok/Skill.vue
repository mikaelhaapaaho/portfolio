<template>
  <div class="col-12 col-md-4 p-2">
    <div class="rounded-5 p-5 h-100 d-flex flex-column-reverse glass">
      <div
        class="progress rounded-pill mt-3"
        role="progressbar"
        aria-label="Basic example"
        :aria-valuenow="`${blok.number}0`"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          class="progress-bar bg-primary"
          :style="{ width: `${blok.number}0%` }"
        >
          {{ blok.number }}/10
        </div>
      </div>
      <h3 class="text-white">{{ blok.name }}</h3>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>
