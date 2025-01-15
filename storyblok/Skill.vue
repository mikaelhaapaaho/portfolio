<template>
  <div class="col-6 col-md-4 p-2">
    <div class="rounded-5 p-4 h-100 d-flex align-items-end glass">
      <div class="w-100">
        <div class="text-white">{{ blok.name }}</div>
        <div
          class="progress rounded-pill mt-3"
          role="progressbar"
          aria-label="Basic example"
          :aria-valuenow="`${blok.skillLevel}0`"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            class="progress-bar bg-primary text-dark fw-bold"
            :style="{ width: `${blok.skillLevel}0%` }"
          >
            {{ blok.skillLevel }}/10
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>
