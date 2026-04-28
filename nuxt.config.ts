import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  app:{
    head: {
      title: "Azhura",
      titleTemplate: "%s | Azhura",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Deskripsi halaman Azhura' },
        { name: 'author', content: 'Azhura' },
        { property: 'og:title', content: 'Azhura' },
        { property: 'og:description', content: 'Deskripsi halaman Azhura' },
        { property: 'og:type', content: 'website' },
      ]
    }
  },

  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],

  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    },
    plugins: [
      tailwindcss(),
    ],
  }
})