// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "nuxt-directus",
    "@nuxtjs/tailwindcss",
    "@invictus.codes/nuxt-vuetify",
  ],
  directus: {
    url: "http://0.0.0.0:8055/",
  },
  tailwindcss: {
    viewer: false,
  },
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },
    moduleOptions: {
      // /* nuxt-vuetify module options */
      // treeshaking: true | false,
      // useIconCDN: true | false,
      // /* vite-plugin-vuetify options */
      // styles: true | "none" | "expose" | "sass" | { configFile: string },
      // autoImport: true | false,
    },
  },
  typescript: {
    strict: true,
  },
})
