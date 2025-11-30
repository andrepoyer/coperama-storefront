<template>
  <Motion.div
    v-bind="motionProps"
    :initial="{ opacity: 0, y: 16 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6 }"
  >
    <slot></slot>
  </Motion.div>
</template>

<script setup lang="ts">
import { Motion } from '@motionone/vue'
import { defineProps } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  motionProps: { type: Object, default: () => ({}) }
})
</script>
