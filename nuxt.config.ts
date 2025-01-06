// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  modules: [
    ["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_ACCESS_TOKEN }],
    "@nuxtjs/i18n",
  ],
  i18n: {
    strategy: "prefix_except_default",
    locales: ["en", "fi"],
    defaultLocale: "en", // default locale
  },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "bootstrap-icons/font/bootstrap-icons.css",
    "~/assets/styles/main.scss",
  ],
  plugins: [{ src: "~/plugins/bootstrap.js", mode: "client" }],
})
