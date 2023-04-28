import { Workforce } from "~/types"

export default function (workforce: Workforce) {
  const { updateItem } = useDirectusItems()

  return useAsyncData("update workforce " + workforce.id, async () => {
    return await updateItem<Workforce>({
      collection: "workforce",
      id: workforce.id!,
      item: workforce,
    })
  })
}
