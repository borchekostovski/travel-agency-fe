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
        httpEndpoint: process.env.HTTP_ENDPOINT_GRAPQL || '',
      },
    },
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
    },
  },

  image: {
    dir: 'assets/images',
  },

  css: ['~/assets/css/tailwindcss.css'],
});
