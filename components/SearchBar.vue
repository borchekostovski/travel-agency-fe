<template>
  <div class="mx-auto mt-11">
    <div
      class="flex flex-col md:flex-row border md:rounded-full rounded-3xl 2xl:p-2 xl:p-2 lg:p-2 md:p-2 p-6 border-gray-300"
    >
      <!-- First input field with label and placeholder -->
      <AutoComplete @onSelect="setDestination" />

      <!-- Second input field with label and placeholder -->
      <div
        class="md:flex flex-col justify-center md:border-r lg:pl-4 md:pl-2 border-gray-300"
      >
        <label class="text-black font-extrabold text-15">When</label>
        <input
          type="text"
          placeholder="Add a date"
          class="outline-none bg-transparent text-12 font-medium md:pl-0 pl-2"
          v-model="when"
          @input="onInputWhen"
        />
      </div>

      <!-- Third input field with label and placeholder -->
      <div
        class="md:flex flex-col justify-center lg:pl-4 md:pl-2 lg:pr-6 md:pr-2"
      >
        <label class="text-black font-extrabold text-15 sm:text-sm">Who</label>
        <input
          type="text"
          placeholder="Add number of guests"
          class="outline-none bg-transparent text-12 sm:text-sm font-medium md:pl-0 pl-2"
          v-model.number="who"
          @keypress="handleKeyPress"
          @input="onInputWho"
        />
      </div>

      <button
        class="rounded-full md:mt-0 mt-2 lg:p-3 md:p-2 lg:mr-1 text-lg bg-FF7171 flex items-center justify-center"
        @click="handleSearch"
      >
        <UIcon
          name="i-heroicons-magnifying-glass"
          class="text-white md:text-3xl"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mapStore } from '~/stores/store';
const store = mapStore();
const emit = defineEmits(['search', 'setDestination']);

const when = ref('');
const who = ref('');

const handleSearch = () => {
  emit('search');
};

const onInputWhen = () => {
  store.updateWhen(when.value);
};
const onInputWho = () => {
  store.updateWho(who.value);
};

const handleKeyPress = (event: KeyboardEvent) => {
  // Ensure only numeric values are allowed
  if (!/\d/.test(event.key)) {
    event.preventDefault();
  }
};

const setDestination = (id: number) => {
  emit('setDestination', id);
};

watch([() => store.when, () => store.who], ([newWhen, newWho]) => {
  when.value = newWhen;
  who.value = newWho;
});

// Set values from store on component mount
onMounted(() => {
  when.value = store.when;
  who.value = store.who;
});
</script>
