<script setup lang="ts">
import { Workforce } from "~/types"

const { getItems, getItemById } = useDirectusItems()

const { params } = useRoute()

const selectes = ref<number[]>([])

let workforce = reactive({} as Workforce)

const { data } = useAsyncData(`workforces ${params.id}`, async () => {
  return await getItemById<Workforce>({
    collection: "workforce",
    id: params.id as string,
  })
})

onMounted(() => {
  workforce = data.value as Workforce
})
</script>
<template>
  <div class="p-4">
    <v-sheet width="700" class="mx-auto">
      <v-form @submit.prevent>
        <div class="flex">
          <div>
            <label
              for="first_name"
              class="block text-sm font-medium mb-2 dark:text-white"
              >Prenom(s) :</label
            >
            <input
              type="text"
              v-model="workforce.first_name"
              id="first_name"
              class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="john"
            />
          </div>
          <input-text
            name="first_name"
            label="Prénom(s) :"
            :validation-rules="[]"
            :value="workforce.first_name"
          />
          <!-- <v-text-field
            rounded="lg"
            size="x-large"
            class="w-80"
            variant="outlined"
            v-model="workforce.first_name"
            :rules="[]"
            label="Prénoms"
          ></v-text-field> -->
          <v-text-field
            class="w-80"
            variant="outlined"
            v-model="workforce.last_name"
            :rules="[]"
            label="Nom"
          ></v-text-field>
        </div>
        <v-btn type="submit" block class="mt-2">Submit</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>
