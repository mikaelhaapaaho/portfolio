<template>
  <section :id="blok.component" class="row p-2 mt-5">
    <h3 class="text-white ps-2 z-1">
      <i class="bi bi-asterisk text-primary"></i> {{ blok.section }}
    </h3>
    <StoryblokComponent
      v-for="blok in blok.skills"
      :key="blok._uid"
      :blok="blok"
    />
    <div class="col-12 p-2">
      <div
        class="rounded-5 p-5 h-100 d-flex flex-column-reverse text-white glass"
      >
        {{ blok.tags }}
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>
