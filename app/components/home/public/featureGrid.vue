<template>
  <section class="bg-brand-secondary text-white py-8 md:px-14 flex justify-center">
    <div class="container mb-8">
      <div class="mb-5 px-4 md:px-0 text-center text-2xl font-bold md:my-14">
        <h2 class="text-2xl md:text-5xl font-bold">Con Coperama, comprar y ahorrar es más fácil</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 md:px-0">
        <div class="border-l-4 px-5 text-left h-auto">
          <div class="text-3xl my-5">
            <i-cart class="w-[60px] h-[60px]"/>
          </div>
          <h3 class="font-bold text-xl mb-2">Todos los productos y servicios que necesitas</h3>
          <p class="text-sm text-white font-normal my-5">Catálogo de +500.000 con más de 900 proveedores.</p>
        </div>
        <div class="border-l-4 px-5 text-left h-auto">
          <div class="text-3xl my-5">
            <i-dashboard class="w-[60px] h-[60px]"/>
          </div>
          <h3 class="font-bold text-xl mb-2">Centralice sus compras con una herramienta única</h3>
          <p class="text-sm text-white font-normal my-5">Es fácil y no se necesita entrenamiento.</p>
        </div>
        <div class="border-l-4 px-5 text-left h-auto">
          <div class="text-3xl my-5">
            <i-discount class="w-[60px] h-[60px]"/>
          </div>
          <h3 class="font-bold text-xl mb-2">Obtener rápidamente ofertas y promociones</h3>
          <p class="text-sm text-white font-normal my-5">Recibe alertas personalizadas.</p>
        </div>
        <div class="border-l-4 px-5 text-left h-auto">
          <div class="text-3xl my-5">
            <i-menu class="w-[60px] h-[60px]"/>
          </div>
          <h3 class="font-bold text-xl mb-2">Útiles características</h3>
          <p class="text-sm text-white font-normal my-5">Diseñado para facilitar sus tareas diarias.</p>
        </div>
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
