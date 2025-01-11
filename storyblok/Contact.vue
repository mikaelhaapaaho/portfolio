<template>
  <section :id="blok.component" class="min-vh-100 d-flex align-items-center">
    <div class="row p-2 mt-5">
      <h3 class="text-white ps-2 z-1">
        <i class="bi bi-asterisk text-primary"></i> {{ blok.section }}
      </h3>
      <div class="col-12 p-2">
        <div class="rounded-5 p-5 glass">
          <div class="text-white">
            <h3>{{ blok.heading }}</h3>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 p-2">
        <div class="rounded-5 p-5 text-white text-center glass">
          [
          <a
            class="text-white"
            href="mailto:mikael.haapa-aho@outlook.com"
            target="_blank"
            >mikael.haapa-aho@outlook.com</a
          >
          ]
        </div>
      </div>
      <div class="col-12 col-md-6 p-2">
        <div class="rounded-5 p-5 text-white text-center glass">
          [
          <a
            class="text-white"
            href="https://www.linkedin.com/in/mikael-haapa-aho/"
            target="_blank"
            >LinkedIn</a
          >
          ]
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>
