<template>
  <div class="max-w-screen-xl mx-auto p-4">
    <!-- Back Button -->
    <button
      @click="goBack"
      class="mb-4 py-2 px-4 bg-FF7171 text-white rounded-lg cursor-pointer"
    >
      Back
    </button>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Image Section -->
      <div class="col-span-1 sm:col-span-2 lg:col-span-3">
        <img
          :src="destination.image"
          alt="Destination image"
          class="w-full max-w-full h-96 rounded-3xl object-cover"
        />
      </div>

      <!-- Details Section -->

      <div class="col-span-1 sm:col-span-2 lg:col-span-3 mt-4">
        <h2 class="text-3xl font-semibold mb-4">{{ destination.title }}</h2>
        <p class="text-gray-600 mb-6">{{ destination.description }}</p>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <p class="text-lg font-semibold mb-2">Price:</p>
            <p class="text-gray-700">{{ destination.price }} Euro per night</p>
          </div>
          <div>
            <p class="text-lg font-semibold mb-2">Number of People:</p>
            <p class="text-gray-700">{{ destination.numPeople }}</p>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mt-6">
          <div>
            <p class="text-lg font-semibold mb-2">Type:</p>
            <span class="px-3 py-1 bg-FF7171 text-white rounded-md">
              {{ destination.type }}
            </span>
          </div>
          <div>
            <p class="text-lg font-semibold mb-2">Availability:</p>

            <span
              :class="destination.active ? 'text-green-500' : 'text-red-500'"
              class="font-semibold"
            >
              {{ destination.active ? 'Yes' : 'No' }}
            </span>
          </div>
        </div>

        <div v-if="destination.tag" class="mt-6">
          <p class="text-lg font-semibold mb-2">Tag:</p>
          <span class="px-3 py-1 bg-78CA77 text-white rounded-md">
            {{ destination.tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DestinationDetails',
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  computed: {
    destination() {
      return this.$route.query;
    },
  },
};
</script>
