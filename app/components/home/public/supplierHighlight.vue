<template>
  <section class="py-8 px-6 md:px-12 bg-gray-100">
    <div class="bg-white p-6 rounded-xl shadow-sm">
      <h3 class="text-xl font-semibold mb-2">{{ data?.suppliers_title ?? 'Todo lo que necesita en un único lugar' }}</h3>
      <p class="text-sm text-gray-600">{{ data?.suppliers_subtitle ?? 'Más de 900 proveedores a su disposición dentro de la plataforma' }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({ data: { type: Object, default: null } })
</script>
