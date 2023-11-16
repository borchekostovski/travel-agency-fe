<template>
  <div
    class="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 flex justify-center items-center text-left relative overflow-hidden"
  >
    <div class="flex flex-col max-w-[270px] relative">
      <img
        :src="
          getImageUrl(
            destination.attributes.image.data[0].attributes.url,
            apiBaseUrl
          )
        "
        alt="Destination image"
        width="270"
        height="260"
        class="m-auto"
      />
      <div
        v-if="destination.attributes.tag.data"
        class="absolute top-2 right-2"
      >
        <p class="text-white"></p>
        <UBadge
          class="uppercase rounded-full mt-3 mr-2 px-5 py-1.5 text-xs sm:text-sm font-semibold bg-78CA77"
        >
          <p class="text-white text-xs">
            {{ destination.attributes.tag.data.attributes.name }}
          </p>
          <!-- <UIcon
            name="i-heroicons-star-solid"
            class="text-white text-lg mx-1 sm:mx-2"
          /> -->
          <img
            :src="
              getImageUrl(
                destination.attributes.tag.data.attributes.thumbnail.data
                  .attributes.url,
                apiBaseUrl
              )
            "
            alt="Star Icon"
            width="24"
            height="24"
          />
        </UBadge>
      </div>
      <div>
        <h2 class="text-base font-semibold mx-4 mt-5">
          {{ destination.attributes.title }}
        </h2>
        <p class="text-gray-400 text-sm mx-4 mt-2">
          {{ destination.attributes.description[0].children[0].text }}
        </p>
        <p class="text-base font-semibold mx-4 mt-4">
          {{ destination.attributes.price }} Euro per night
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getImageUrl } from '~/services/utils';
const {
  public: { apiBaseUrl },
} = useRuntimeConfig();

const props = defineProps({
  destination: {
    type: Object,
    required: true,
  },
});
</script>
