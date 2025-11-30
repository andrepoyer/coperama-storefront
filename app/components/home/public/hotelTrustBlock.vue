<template>
  <section class="py-6 px-6 md:px-12 bg-gray-100">
    <div class="bg-white p-6 rounded-xl shadow-sm">
      <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
      <p class="text-sm text-gray-600 mb-4">{{ subtitle }}</p>

      <StaggerList :stagger="0.14">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Motion.div
            v-for="logo in logos"
            :key="logo.id"
            :initial="{ scale: 0.9, opacity: 0 }"
            :animate="{ scale: 1, opacity: 1 }"
            :transition="{ duration: 0.4 }"
            class="bg-white p-3 flex items-center justify-center rounded-md"
          >
            <NuxtImg :src="logo.logo?.url || '/placeholder-logo.png'" alt="logo" class="object-contain h-16" />
          </Motion.div>
        </div>
      </StaggerList>
    </div>
  </section>
</template>

<script setup lang="ts">
import StaggerList from '@/components/ui/staggerList.vue'
import { Motion } from '@motionone/vue'
import { NuxtImg } from '#components'
import type { IHotelLogo } from '@/types/home';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  logos: IHotelLogo[]
  title?: string
  subtitle?: string
}>()
</script>
