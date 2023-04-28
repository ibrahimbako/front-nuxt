<script setup lang="ts">
const { login } = useDirectusAuth()
const user = useDirectusUser()
const { getItems } = useDirectusItems()

const loginData = useState<{ email: string; password: string }>(
  "loginInfo",
  () => ({ email: "", password: "" })
)

const { data } = useAsyncData("aaa", () => {
  return getItems({
    collection: "workforce",
    params: {
      filter: {
        is_active: false,
      },
    },
  })
})

const onLogin = async () => {
  try {
    await login({
      email: loginData.value.email,
      password: loginData.value.password,
    })
  } catch (e) {}
}
</script>

<template>
  login page
  <div>
    <input type="email" name="email" v-model="loginData.email" />
    <input type="password" name="password" v-model="loginData.password" />

    <button @click="onLogin">login</button>
  </div>
  <br />
  {{ user }}
  <br />
  {{ data }}
</template>
