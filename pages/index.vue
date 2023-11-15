<template>
  <div class="font-montserrat tracking-tight">
    <Header @search="searchDestinations" @setDestination="searchByID" />
    <template v-if="loading">
      <Spinner />
    </template>
    <template v-else>
      <Destinations :destinations="destinations?.destinations.data" />
    </template>
  </div>
</template>

<script setup lang="ts">
import {
  destByTitle_NumPeopleQ,
  destByType_Title_NumPeopleQ,
  destByIDQ,
} from '~/graphql/queries';
import { mapStore } from '~/stores/store';
const store = mapStore();

const numPeople = computed(() => store.who || 0);
const selectedFilter = computed(() => store.selectedFilter);

type DestinationsResults = {
  destinations: {
    data: {}[];
  };
};

const destinations = ref<DestinationsResults | null>(null);
const loading = ref(false);

const searchDestinations = async () => {
  performSearch();
};

const searchByID = async (id: number) => {
  try {
    loading.value = true;
    const { data } = await useAsyncQuery<DestinationsResults>(destByIDQ, {
      id,
    });

    destinations.value = (data as Ref<DestinationsResults>).value;
  } catch (err) {
    console.log('Something went wrong! ', err);
  } finally {
    loading.value = false;
  }
};

const performSearch = async () => {
  try {
    loading.value = true;

    const query =
      selectedFilter.value !== null
        ? destByType_Title_NumPeopleQ
        : destByTitle_NumPeopleQ;

    const { data } = await useAsyncQuery<DestinationsResults>(query, {
      title: store.where,
      numPeople: numPeople.value,
      typeId: selectedFilter.value,
    });

    destinations.value = (data as Ref<DestinationsResults>).value;
  } catch (err) {
    console.log('Something went wrong! ', err);
  } finally {
    loading.value = false;
  }
};

// Watch when selectedFilter will change
watch(
  () => selectedFilter.value,
  () => {
    performSearch();
  }
);

onNuxtReady(async () => {
  performSearch();
});
</script>
