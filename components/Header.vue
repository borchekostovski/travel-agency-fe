<template>
  <div
    class="flex flex-col md:flex-row justify-between items-center lg:p-4 p-2"
  >
    <!-- Logo -->
    <div
      class="lg:ml-12 ml-2 lg:mt-8 mt-2 cursor-pointer"
      @click="handleLogoClick"
    >
      <img
        src="../assets/images/logo.svg"
        class="w-48 md:w-48 lg:w-60 xl:w-60"
        alt="Logo"
      />
    </div>

    <!-- Search bar -->
    <SearchBar @search="handleSearch" @setDestination="setDestination" />

    <!-- Nav bar and login -->
    <div class="lg:ml-auto ml-4 lg:mr-8 mr-2 lg:mt-12 mt-6 pr-1">
      <img
        src="../assets/images/userMenuBtn.svg"
        class="w-20 md:w-22 lg:w-24 xl:w-26"
        alt="User Menu Icon"
      />
    </div>
  </div>
  <hr class="my-2 border-1 border-gray-300" />

  <!-- Filters (Apartment, House...) -->
  <Filters :filters="props.filters" />
  <hr class="mt-3 border-1 border-gray-300" />
</template>

<script setup lang="ts">
import { mapStore } from '~/stores/store';

const props = defineProps({
  filters: {
    type: Object,
  },
});

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
