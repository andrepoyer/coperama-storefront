<template>
  <Motion.div
    :initial="{ opacity: 0 }"
    :animate="{ opacity: 1 }"
    :transition="{ staggerChildren: stagger, delay: delay }"
  >
    <slot></slot>
  </Motion.div>
</template>

<script setup lang="ts">
import { Motion } from '@motionone/vue'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  stagger: { type: Number, default: 0.12 },
  delay: { type: Number, default: 0 }
})
</script>
