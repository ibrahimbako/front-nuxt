<script setup lang="ts">
import { Workforce } from "~/types"

const { getItems } = useDirectusItems()

const selectes = ref<number[]>([])

const { data: workforces } = useAsyncData("all workforces", async () => {
  return await getItems<Workforce[]>({
    collection: "workforce",
    params: {
      limit: -1,
      // fields: [
      //   "id",
      //   "fist_name",
      //   "last_name",
      //   "is_active",
      //   "birthday",
      //   "card_number",
      // ],
    },
  })
})
</script>
<template>
  <!-- <div class="p-4 divide-y-2"> -->
  <v-list>
    <WorkforceInlineCard
      v-for="workforce in workforces"
      :workforce="workforce"
    />
  </v-list>
  <!-- </div> -->
</template>
