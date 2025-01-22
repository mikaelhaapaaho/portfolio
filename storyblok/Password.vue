<template>
  <div class="col-12 p-2">
    <StoryblokComponent
      v-if="isPasswordCorrect"
      v-for="blok in blok.components"
      :key="blok._uid"
      :blok="blok"
    />
    <form
      class="rounded-5 p-4 p-md-5 glass"
      v-else
      @submit.prevent="checkPassword"
    >
      <div class="text-white">{{ blok.tooltip }}</div>
      <div class="input-group mt-3">
        <input
          type="password"
          class="form-control rounded-start-pill border-0 ps-3"
          :placeholder="blok.placeholder"
          :aria-label="blok.placeholder"
          aria-describedby="button"
          v-model="enteredPassword"
        />
        <button
          class="btn btn-primary rounded-end-pill border-0 px-3"
          type="submit"
          id="button"
        >
          {{ blok.buttonText }}
        </button>
      </div>
      <div ref="invalidFeedback" class="invalid-feedback text-white mt-3">
        {{ blok.feedback }}
      </div>
    </form>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })

const enteredPassword = ref("")
const isPasswordCorrect = ref(false)
const invalidFeedback = ref("")

const checkPassword = async () => {
  try {
    const response = await $fetch("/api/checkPassword", {
      method: "POST",
      body: { password: enteredPassword.value },
    })

    if (response.success) {
      isPasswordCorrect.value = true
    } else {
      invalidFeedback.value.style.display = "block"
    }
  } catch (error) {
    alert("Something went wrong")
  }
}
</script>
