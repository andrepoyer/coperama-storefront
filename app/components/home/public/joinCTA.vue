<template>
  <section class="py-16 px-6 md:px-12 bg-primary-500 text-white text-center">
    <h2 class="text-3xl font-semibold mb-4">{{ data?.cta_title ?? '¿Listo para unirte a nosotros?' }}</h2>
    <p class="opacity-90 mb-6">{{ data?.cta_subtitle ?? '¡El proceso es corto, fácil y rápido!' }}</p>
    <BaseButton class="bg-white text-primary-700 px-8 py-3" @click="$emit('join')">{{ data?.cta_button_label ?? 'Únete a nosotros' }}</BaseButton>
  </section>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({ data: { type: Object, default: null } })
</script>
