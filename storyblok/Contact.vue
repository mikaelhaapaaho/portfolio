<template>
  <section :id="blok.component" class="min-vh-100 d-flex align-items-center">
    <div class="row p-2 mt-5">
      <h3 class="text-white ps-2 z-1">
        <i class="bi bi-asterisk text-primary"></i> {{ blok.section }}
      </h3>
      <div class="col-12 p-2">
        <div class="rounded-5 p-4 p-md-5 glass">
          <div class="text-white">
            <h3 v-html="heading"></h3>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 p-2">
        <div class="rounded-5 p-4 p-md-5 text-white text-center h-100 glass">
          <div class="mb-2"><i class="bi bi-envelope-fill fs-2"></i></div>
          <a
            class="text-white"
            href="mailto:mikael.haapa-aho@outlook.com"
            target="_blank"
            >mikael.haapa-aho&#8203;@outlook.com</a
          >
        </div>
      </div>
      <div class="col-12 col-md-6 p-2">
        <div class="rounded-5 p-4 p-md-5 text-white text-center h-100 glass">
          <div class="mb-2"><i class="bi bi-linkedin fs-2"></i></div>
          <a
            class="text-white"
            href="https://www.linkedin.com/in/mikael-haapa-aho/"
            target="_blank"
            >LinkedIn</a
          >
        </div>
      </div>
      <div class="col-12 p-2">
        <div class="rounded-5 p-4 p-md-5 text-white glass">
          <h3 class="mb-4">{{ blok.iconsHeading }}</h3>
          <StoryblokComponent
            class="mt-5"
            v-for="blok in blok.icons"
            :key="blok._uid"
            :blok="blok"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object })
const heading = renderRichText(props.blok.heading)
</script>
