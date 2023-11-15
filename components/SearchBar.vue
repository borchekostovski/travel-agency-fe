<template>
  <div class="mx-auto mt-11">
    <!-- Centered div with rounded border -->
    <div class="flex border rounded-full p-2 border-gray-300">
      <!-- First input field with label and placeholder -->
      <AutoComplete @onSelect="setDestination" />

      <!-- Second input field with label and placeholder -->
      <div class="flex flex-col justify-center border-r pl-4 border-gray-300">
        <label class="text-black font-extrabold text-15">When</label>
        <input
          type="text"
          placeholder="Add a date"
          class="outline-none bg-transparent text-12 font-medium"
          v-model="when"
          @input="onInputWhen"
        />
      </div>

      <!-- Third input field with label and placeholder -->
      <div class="flex flex-col justify-center pl-4 pr-6">
        <label class="text-black font-extrabold text-15">Who</label>
        <input
          type="text"
          placeholder="Add number of guests"
          class="outline-none bg-transparent text-12 font-medium"
          v-model.number="who"
          @keypress="handleKeyPress"
          @input="onInputWho"
        />
      </div>

      <button
        class="rounded-full p-3 mr-1 text-lg bg-FF7171 flex items-center justify-center"
        @click="handleSearch"
      >
        <UIcon
          name="i-heroicons-magnifying-glass"
          class="text-white lg:text-3xl"
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
