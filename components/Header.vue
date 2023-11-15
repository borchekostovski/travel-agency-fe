<template>
  <div class="flex justify-between items-center p-4">
    <!-- Logo -->
    <div class="ml-12 mt-8 cursor-pointer" @click="handleLogoClick">
      <img src="../assets/images/logo.svg" width="236" height="75" alt="Logo" />
    </div>

    <!-- Search bar -->
    <SearchBar @search="handleSearch" @setDestination="setDestination" />

    <!-- Nav bar and login -->
    <div class="ml-auto mr-8 mt-12 pr-1">
      <img
        src="../assets/images/userMenuBtn.svg"
        width="104"
        height="54"
        alt="User Menu Icon"
      />
    </div>
  </div>
  <hr class="my-2 border-1 border-gray-300" />

  <!-- Filters (Apartment, House...) -->
  <Filters />
  <hr class="mt-3 border-1 border-gray-300" />
</template>

<script setup lang="ts">
import { mapStore } from '~/stores/store';

const emit = defineEmits(['search', 'setDestination']);
const store = mapStore();

const handleLogoClick = () => {
  store.setFilter(null);
  store.updateWhere('');
  store.updateWhen('');
  store.updateWho('');
  handleSearch();
};

const handleSearch = () => {
  emit('search');
};

const setDestination = (id: number) => {
  //emit destination object to Index page
  emit('setDestination', id);
};
</script>

<style scoped></style>
