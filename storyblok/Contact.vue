<template>
  <section :id="blok.component" class="row p-2 mt-5">
    <h3 class="text-white ps-2 z-1">
      <i class="bi bi-asterisk"></i> {{ blok.section }}
    </h3>
    <div class="col-12 p-2">
      <div class="rounded-5 p-5 glass">
        <div class="text-white">
          <h3>Let's be in contact. Send me a message:</h3>
          <div>
            [
            <a
              class="text-white"
              href="mailto:mikael.haapa-aho@outlook.com"
              target="_blank"
              >mikael.haapa-aho@outlook.com</a
            >
            ]
          </div>
          <div>
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
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>
