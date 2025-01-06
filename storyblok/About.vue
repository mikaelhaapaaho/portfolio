<template>
  <section :id="blok.component" class="row p-2 mt-5">
    <h3 class="text-white ps-2 z-1">
      <i class="bi bi-asterisk"></i> {{ blok.section }}
    </h3>
    <div class="col-12 p-2">
      <div class="rounded-5 p-5 glass">
        <div class="display-1 text-white" v-html="title"></div>
        <div class="text-white mt-4" v-html="subheading"></div>
      </div>
    </div>
    <div class="col-12 col-md-6 p-2">
      <div
        class="rounded-5 p-5 h-100 text-white glass"
        v-html="introduction"
      ></div>
    </div>
    <div class="col-12 col-md-3 p-2">
      <div class="rounded-5 p-5 h-100 glass">
        <div class="text-white display-1">{{ years }}+</div>
        <div class="text-white" v-html="experience"></div>
      </div>
    </div>
    <div class="col-12 col-md-3 p-2">
      <div class="rounded-5 pt-5 px-3 h-100 d-flex align-items-end glass">
        <i
          class="bi bi bi-flower1 position-fixed end-0 top-0 text-white display-4 mx-4 my-3 rotate"
        ></i>
        <img
          class="img-fluid"
          style="filter: grayscale(40%) contrast(120%) sepia(10%)"
          :src="blok.picture.filename"
          :alt="blok.picture.alt"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object })

const title = renderRichText(props.blok.title)
const subheading = renderRichText(props.blok.subheading)
const introduction = renderRichText(props.blok.introduction)
const experience = renderRichText(props.blok.experience)

const years = computed(() => {
  return new Date().getFullYear() - 2018
})
</script>

<style scoped>
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.rotate {
  animation: rotate 10s linear infinite;
}
</style>
