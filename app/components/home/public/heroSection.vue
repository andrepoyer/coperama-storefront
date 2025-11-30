<template>
  <section class="relative bg-cover bg-center py-16 px-6 md:px-12" :style="bgStyle">
    <div class="max-w-xl">
      <h1 class="text-3xl md:text-4xl font-bold leading-tight text-white mb-4">{{ data?.hero_title }}</h1>
      <p class="text-base text-white/90 mb-6">{{ data?.hero_subtitle }}</p>
      <baseButton class="px-6 py-3 text-lg" @click="$emit('cta')">{{ data?.cta_button_label || 'Únete a nosotros' }}</baseButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import '../../base/baseButton.vue'
import { computed } from 'vue'
const props = defineProps({
  data: { type: Object, default: null }
})
const bgStyle = computed(() => {
  const url = props.data?.hero_image?.url ?? '/hero-mobile.svg'
  return `background-image: linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url('${url}')`
})
</script>
