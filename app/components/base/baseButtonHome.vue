<template>
  <button :class="classes" v-bind="$attrs"><slot/></button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  variant: { type: String, default: 'primary' }
})
const classes = computed(() => {
  switch(props.variant){
    case 'ghost': return 'p-2 rounded-md hover:bg-gray-100'
    case 'link': return 'text-sm underline'
    default: return 'bg-primary-500 text-white px-4 py-2 rounded-md font-semibold'
  }
})
</script>
