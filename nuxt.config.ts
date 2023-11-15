import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/apollo',
    '@nuxt/image',
    '@nuxt/ui', //    'tailwindcss' is included in @nuxt/ui
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],

  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:1337/graphql',
      },
    },
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: 'http://localhost:1337',
    },
  },

  image: {
    dir: 'assets/images',
  },

  css: ['~/assets/css/tailwindcss.css'],
});
