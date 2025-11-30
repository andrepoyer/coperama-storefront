<!-- eslint-disable vue/require-default-prop -->
<template>
  <article class="p-6 rounded-xl shadow-sm bg-gray-50">
    <slot name="icon" />
    <h3 class="text-lg font-semibold mb-2">{{ title }}</h3>
    <p class="text-sm text-gray-600">{{ description }}</p>
  </article>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  title: String,
  description: String
})
</script>
