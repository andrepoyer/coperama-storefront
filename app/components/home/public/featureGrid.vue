<template>
  <section class="py-14 px-6 md:px-12 bg-white">
    <h2 class="text-2xl font-semibold mb-10">Con Coperama, comprar y ahorrar es más fácil</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <MotionFade v-for="f in items" :key="f.id">
        <featureCard :title="f.title" :description="f.description" />
      </MotionFade>
    </div>
  </section>
</template>

<script setup lang="ts">
import featureCard from '../public/featureCard.vue'
import MotionFade from '@/components/ui/motionFade.vue'
import type { IFeature } from '@/types/home'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  items: IFeature[]
}>()

</script>
