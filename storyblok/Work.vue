<template>
  <section :id="blok.component" class="min-vh-100 d-flex align-items-center">
    <div :id="blok.component" class="row p-2 mt-5">
      <h3 class="text-white ps-2 z-1">
        <i class="bi bi-asterisk text-primary"></i> {{ blok.section }}
      </h3>
      <div class="col-12 p-2">
        <div class="rounded-5 p-5 glass">
          <div class="text-white">Some of the brands I've worked with:</div>
        </div>
      </div>
      <div class="col-12 p-2">
        <div class="rounded-5 p-5 glass">
          <div>
            <div class="text-white">Enter password to access gallery</div>
            <div class="input-group mt-3">
              <input
                type="text"
                class="form-control"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="button"
              />
              <button class="btn btn-primary" type="button" id="button">
                Unlock
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>

<style scoped></style>
