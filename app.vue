<template>
  <h1 class="hidden">Creativebnb</h1>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
const route = useRoute();
useHead(() => ({
  title: 'Creativebnb',
  meta: [{ name: 'description', content: 'Home page creativebnb' }],
  link: [
    {
      rel: 'canonical',
      href: 'http://localhost:3000/',
    },
  ],
}));
</script>
