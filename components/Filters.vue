<template>
  <div class="flex justify-left items-left">
    <div class="flex ml-14">
      <!-- {{ filters?.types?.data }} -->
      <div
        v-for="type in filters?.types?.data"
        :key="type.id"
        class="mr-6 p-4"
        @click="handleItemClick(type)"
      >
        <button class="w-full h-full flex flex-col items-center">
          <img
            :src="
              getImageUrl(
                type.attributes.thumbnail.data.attributes.url,
                apiBaseUrl
              )
            "
            :width="type.attributes.thumbnail.data.attributes.width"
            :height="type.attributes.thumbnail.data.attributes.height"
            :alt="type.attributes.thumbnail.data.attributes.alternativeText"
            class="object-cover m-auto"
          />

          <span
            class="text-center text-12 font-bold"
            :class="{
              'color-FF7171 underline': type.id === store.selectedFilter,
            }"
            >{{ type.attributes.name }}</span
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getImageUrl } from '~/services/utils';
import { mapStore } from '~/stores/store';

const props = defineProps({
  filters: {
    type: Object,
  },
});

const {
  public: { apiBaseUrl },
} = useRuntimeConfig();
const store = mapStore();

const selectedFilter = computed(() => store.selectedFilter!);

const handleItemClick = (type: any) => {
  const selectFilter = selectedFilter.value === type.id ? null : type.id;

  store.setFilter(selectFilter);
};
</script>

<style scoped></style>
