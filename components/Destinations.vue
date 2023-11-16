<template>
  <div class="flex flex-wrap mt-11 mx-4 sm:mx-8 md:mx-12 lg:mx-16">
    <!-- Check if destinations array is not empty -->
    <template v-if="destinations && destinations.length > 0">
      <!-- Render destination cards if array is not empty -->
      <DestinationCard
        v-for="destination in destinations"
        :key="destination.id"
        :destination="destination"
        class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20"
      />
    </template>
    <!-- Render a message if destinations array is empty -->
    <template v-else>
      <div class="flex-1 items-center justify-center h-screen text-red-500">
        <div class="text-center">
          <p class="text-lg font-semibold mb-2">No destinations found.</p>
          <p class="text-sm">
            We're working on adding more destinations. Please check back later.
          </p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    destinations: {
      type: Array,
    },
  },
};
</script>
