import { Workforce } from "~/types"

export default function (id: string) {
  const { getItemById } = useDirectusItems()

  return useAsyncData("get workforce " + id, async () => {
    return await getItemById<Workforce>({
      collection: "workforce",
      id: id,
    })
  })
}
