import { DirectusQueryParams } from "nuxt-directus/dist/runtime/types"
import { Workforce } from "~/types"

export default function (options?: DirectusQueryParams) {
  const { getItems } = useDirectusItems()

  return useAsyncData("get many workforces ", async () => {
    return await getItems<Workforce>({
      collection: "workforce",
      params: options || { limit: -1 },
    })
  })
}
