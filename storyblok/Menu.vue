<template>
  <div
    id="menu"
    class="collapse position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center p-2 z-2"
  >
    <div
      class="w-100 h-100 rounded-5 d-flex justify-content-center align-items-center glass"
    >
      <div>
        <div class="d-flex align-items-center">
          <i class="bi bi-globe text-white fs-2 me-3"></i>
          <div v-for="lang in availableLocales" :key="lang">
            <NuxtLink
              :to="switchLocalePath(lang)"
              class="text-uppercase text-white text-decoration-none p-2 fs-4"
            >
              {{ lang }}
            </NuxtLink>
          </div>
        </div>
        <div class="mt-5">
          <a class="text-white fs-1 text-decoration-none d-block">Work</a>
          <a href="#About" class="text-white fs-1 text-decoration-none d-block"
            >About</a
          >
          <a href="" class="text-white fs-1 text-decoration-none d-block"
            >Contact</a
          >
        </div>

        <div class="mt-5">
          <a
            href="https://www.linkedin.com/in/mikael-haapa-aho/"
            target="_blank"
            ><i class="bi bi-linkedin text-white display-5 me-4"></i
          ></a>
          <a href="https://github.com/mikaelhaapaaho" target="_blank"
            ><i class="bi bi-github text-white display-5 me-4"></i
          ></a>
          <a href="https://www.instagram.com/mikaho.music/" target="_blank"
            ><i class="bi bi-instagram text-white display-5 me-4"></i
          ></a>
        </div>
      </div>
    </div>
  </div>

  <div
    class="position-fixed top-0 end-0 rotate-0 mx-4 my-3 z-2"
    style="cursor: pointer"
    data-bs-toggle="collapse"
    data-bs-target="#menu"
    aria-controls="menu"
    aria-expanded="false"
    aria-label="Toggle navigation"
    @click="toggleIcon"
    :class="rotationClass"
  >
    <i :class="iconClass" class="bi bi-list display-4 text-white"></i>
  </div>

  <!-- <i
    class="bi bi-plus-lg position-fixed start-0 top-0 text-white display-4 mx-4 my-3"
  ></i>
  <i
    class="bi bi-plus-lg position-fixed start-0 bottom-0 text-white display-4 mx-4 my-3"
  ></i>
  <i
    class="bi bi-plus-lg position-fixed end-0 bottom-0 text-white display-4 mx-4 my-3"
  ></i>
  <div
    class="position-fixed start-0 bottom-0 w-100 d-flex justify-content-center"
  >
    <i class="bi bi-caret-down text-white display-4 my-3"></i>
  </div> -->
</template>

<script setup>
const props = defineProps({ blok: Object })

const localePath = useLocalePath()
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value)
})

const isListIcon = ref(true)
const iconClass = computed(() =>
  isListIcon.value ? "bi-list" : "bi-plus-lg rotate"
)
const rotationClass = computed(() => (isListIcon.value ? "rotate-0" : "rotate"))

const toggleIcon = () => {
  isListIcon.value = !isListIcon.value
}
</script>

<style scoped>
#menu {
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.1s ease-in-out, transform 0.3s ease-in-out;
  transform-origin: 99% 1%;

  &.show {
    opacity: 1;
    transform: scale(1);
  }
}

.rotate-0 {
  transition: transform 0.2s ease-in-out;
  transform: rotate(0deg);
}

.rotate {
  transition: transform 0.2s ease-in-out;
  transform: rotate(135deg);
}
</style>
