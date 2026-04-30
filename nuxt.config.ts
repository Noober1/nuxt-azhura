import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  future: {
    compatibilityVersion: 4,
  },

  app:{
    head: {
      title: "Azhura",
      titleTemplate: "%s | Azhura",
      meta: [
        { name: 'description', content: 'Cucu Ruhiyatna, personal website' },
        { name: 'author', content: 'Azhura' },
        { property: 'og:title', content: 'Azhura' },
        { property: 'og:description', content: 'Cucu Ruhiyatna, personal website' },
        { property: 'og:type', content: 'website' },
      ]
    }
  },

  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],

  modules: ['shadcn-nuxt'],

  shadcn: {
    prefix: '',
    componentDir: './app/components/ui',
  },

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