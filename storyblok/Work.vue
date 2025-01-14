<template>
  <section :id="blok.component" class="min-vh-100">
    <div :id="blok.component" class="row p-2 mt-5">
      <h3 class="text-white ps-2 z-1">
        <i class="bi bi-asterisk text-primary"></i> {{ blok.section }}
      </h3>
      <StoryblokComponent
        v-for="blok in blok.components"
        :key="blok._uid"
        :blok="blok"
      />
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>
