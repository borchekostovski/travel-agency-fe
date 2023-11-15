<template>
  <div class="flex flex-wrap mt-11 mx-16">
    <!-- Check if destinations array is not empty -->
    <template v-if="destinations && destinations.length > 0">
      <!-- Render destination cards if array is not empty -->
      <DestinationCard
        v-for="destination in destinations"
        :key="destination.id"
        :destination="destination"
      />
    </template>
    <!-- Render a message if destinations array is empty -->
    <template v-else>
      <div class="flex-1 items-center justify-center h-screen color-FF7171">
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
