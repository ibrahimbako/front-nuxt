<script setup lang="ts">
import { Workforce } from "~/types"

const { updateItem } = useDirectusItems()

const selected = ref(false)
const midifie = ref(false)

const props = defineProps<{
  workforce: Workforce
}>()

const emit = defineEmits(["select", "deselect"])

watchEffect(() => {
  if (selected) {
    emit("select", props.workforce.id!)
  } else {
    emit("deselect", props.workforce.id!)
  }
})

watchEffect(async () => {
  await updateItem({
    collection: "workforce",
    id: props.workforce.id!,
    item: props.workforce,
  })
})
</script>
<template>
  <div class="flex w-full px-4 py-2 hover:bg-slate-100">
    <input
      type="checkbox"
      v-model="selected"
      :name="workforce.first_name"
      :id="workforce.card_number"
    />
    <input
      type="text"
      class="w-40"
      :disabled="false"
      v-model="workforce.first_name"
    />
    <v-text-field
      class="w-40"
      :readonly="!midifie"
      variant="underlined"
      v-model="workforce.first_name"
    ></v-text-field>
    <v-text-field
      class="w-40"
      :readonly="!midifie"
      variant=""
      v-model="workforce.last_name"
    ></v-text-field>
    <!-- <p class="text-lg font-medium w-40">{{ workforce.last_name }}</p>
    <p class="text-lg font-medium w-40">{{ workforce.first_name }}</p> -->

    <input class="mx-4" type="checkbox" v-model="workforce.is_active" />
    <NuxtLink :to="`/workforce/${workforce.id}`">modifier</NuxtLink>
  </div>
</template>
