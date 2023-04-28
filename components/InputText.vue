<template>
  <div>
    <label :for="name">{{ label }}</label>
    <input
      :id="name"
      :name="name"
      v-model="value"
      :class="[
        error.showError ? ' focus:border-red-500 focus:ring-red-500' : '',
      ]"
      @input="validate"
    />
    <p v-if="error.showError" class="error-message">{{ error.errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
const { validationRules, value } = defineProps<{
  name: string
  label: string
  validationRules: { validate: Function; message: string }[]
  value: any
}>()

let error = reactive({ showError: false, errorMessage: "" })

function validate() {
  error.showError = false
  for (const rule of validationRules) {
    if (!rule.validate(value)) {
      error.showError = true
      error.errorMessage = rule.message
      break
    }
  }
}
</script>
