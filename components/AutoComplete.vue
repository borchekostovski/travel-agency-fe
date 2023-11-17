<template>
  <div
    class="relative flex flex-col justify-center items-start lg:border-r lg:pr-12 lg:pl-8 md:pl-2 border-gray-300"
    ref="autocompleteRef"
  >
    <div class="lg:flex flex-col justify-center">
      <label class="text-black font-extrabold text-15">Where</label>
      <input
        type="text"
        placeholder="Search destination"
        class="outline-none bg-transparent text-12 font-medium lg:pl-0 pl-2"
        v-model="where"
        @input="onInputWhere"
      />
    </div>

    <div
      v-if="showSuggestions"
      class="absolute top-full mt-2 z-10"
      ref="suggestionsRef"
    >
      <ul>
        <li
          v-for="destination in destinations?.value?.destinations?.data"
          :key="destination.id"
          class="bg-white px-2 py-2 mb-1 shadow-xl border rounded-md cursor-pointer"
          @click="setSelected(destination)"
        >
          <div class="flex">
            <img
              :src="
                getImageUrl(
                  destination.attributes.image.data[0].attributes.url,
                  apiBaseUrl
                )
              "
              alt="Destination image"
              class="w-12 h-12 object-cover rounded-lg"
            />
            <!-- Title -->
            <h3 class="text-sm font-bold mb-2 ml-4">
              {{ destination.attributes.title }}
            </h3>
          </div>
          <!-- Number of Guests -->
          <p class="text-gray-400 text-xs font-medium mt-1">
            Number of Guests: {{ destination.attributes.numPeople }}
          </p>
          <!-- Price -->
          <p class="text-gray-400 text-xs font-medium">
            Price: {{ destination.attributes.price }} Euro per night
          </p>
          <!-- Active -->
          <p
            class="text-green-500 text-xs font-medium"
            v-if="destination.attributes.active"
          >
            Available
          </p>
          <p class="text-red-500 text-xs font-medium" v-else>Not Available</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  destByType_Title_NumPeopleQ,
  destByTitle_NumPeopleQ,
} from '~/graphql/queries';
import { mapStore } from '~/stores/store';
import { getImageUrl } from '~/services/utils';

const {
  public: { apiBaseUrl },
} = useRuntimeConfig();

const store = mapStore();

type DestinationsResults = {
  destinations: {
    data: {}[];
  };
};

const numPeople = computed(() => store.who || 0);
const selectedFilter = computed(() => store.selectedFilter!);

const emit = defineEmits(['onSelect']);

const destinations = ref();
const where = ref('');
const showSuggestions = ref(false);

const autocompleteRef = ref<HTMLDivElement | null>(null);
const suggestionsRef = ref<HTMLDivElement | null>(null);

//search destinations when button is clicked
const onInputWhere = async () => {
  store.updateWhere(where.value);

  if (store.where.length > 1) {
    try {
      const query =
        selectedFilter.value !== null
          ? destByType_Title_NumPeopleQ
          : destByTitle_NumPeopleQ;

      const { data } = await useAsyncQuery<DestinationsResults>(query, {
        title: store.where,
        numPeople: numPeople.value,
        typeId: selectedFilter.value,
      });

      destinations.value = data;

      showSuggestions.value = true;
    } catch (err) {
      console.log('Something went wrong! ', err);
      showSuggestions.value = false;
    }
  } else {
    // Reset the list to an empty array when the search input is empty
    destinations.value = { destinations: { data: [] } };
    showSuggestions.value = false;
  }
};

const setSelected = (destination: any) => {
  store.updateWhere(destination.attributes.title);
  where.value = store.where;
  showSuggestions.value = false;
  emit('onSelect', destination.id);
};

const handleClickOutside = (event: { target: any }) => {
  if (
    autocompleteRef.value &&
    suggestionsRef.value &&
    !autocompleteRef.value.contains(event.target) &&
    !suggestionsRef.value.contains(event.target)
  ) {
    showSuggestions.value = false;
  }
};

watch(
  () => store.where,
  () => {
    where.value = store.where;
  }
);

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  where.value = store.where;
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>
