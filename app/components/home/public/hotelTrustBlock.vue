<template>
  <section class="bg-brand-secondary text-white py-8 flex justify-center">
    <div class="container mb-8">
      <div class="mb-5 px-4 text-center text-2xl font-bold md:my-14">
        <h2 class="text-2xl md:text-5xl font-bold">Más de 1.500 hoteles ya confían en nosotros</h2>
        <p class="text-base font-medium text-brand-neutral-light pt-2.5">Estos son algunos de ellos</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-5 gap-8 md:px-0 px-0 mx-0">
        <NuxtImg
            src="/images/png/logo-negativa.png"
            class="w-full md:h-[600px] h-auto shadow-xl object-cover"
          />
      </div>
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
