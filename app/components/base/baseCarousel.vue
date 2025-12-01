<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const modules = [Pagination, Autoplay];
const slidesData = [
  {
    id: 1,
    preTitle: 'Valoramos su trabajo y su tiempo',
    mainTitle: 'Todo lo que necesita en un único lugar',
    description: 'Más de 900 proveedores a su disposición dentro de la plataforma'
  },
  {
    id: 2,
    preTitle: 'Simplicidad y eficiencia',
    mainTitle: 'Gestione sus proyectos fácilmente',
    description: 'Herramientas intuitivas diseñadas para optimizar su flujo de trabajo diario.'
  },
  {
    id: 3,
    preTitle: 'Soporte dedicado',
    mainTitle: 'Estamos aquí para ayudarle',
    description: 'Nuestro equipo de expertos está disponible 24/7 para resolver sus dudas.'
  },
    {
    id: 4,
    preTitle: 'Seguridad garantizada',
    mainTitle: 'Sus datos están protegidos',
    description: 'Utilizamos los más altos estándares de encriptación para su tranquilidad.'
  },
];
</script>

<template>
  <div class="bg-white w-max relative mx-auto h-auto shadow-sm container-size mb-8">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="30"
      navigation
      :pagination="{ clickable: true}"
      :autoplay="false"
      class="my-swiper-container"
    >
      <swiper-slide v-for="slide in slidesData" :key="slide.id">
        <div class="flex md:flex-row md:pl-6">
          <div class="flex flex-col items-center md:text-left text-center">
            <span class="text-brand-primary font-medium text-base md:text-3xl sm:text-lg md:mb-14 mb-3 md:self-start">
              {{ slide.preTitle }}
            </span>
            <h2 class="text-brand-secondary font-bold md:text-5xl text-2xl leading-tight mb-4 md:mb-5">
              {{ slide.mainTitle }}
            </h2>
            <p class="text-brand-neutral-light md:text-3xl font-medium text-base max-w-xl mx-auto leading-relaxed md:mb-14 md:ml-0">
              {{ slide.description }}
            </p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>

.container-size {
  width: 100vw;
}

:deep(.swiper-pagination) {
    top: 0 !important;
    margin-top: 32px !important;
    @apply flex items-start mt-8 text-center justify-center;
}

@media(max-width: 768px) {
  .my-swiper-container {
    @apply pt-16;
  }
}

@media(min-width: 768px) {
  .container-size {
    width: 40vw;
  }
  :deep(.swiper-pagination) {
    top:unset !important;
    bottom: 0.1 !important;
    padding-left: 24px;
    @apply flex justify-start items-end mt-4;
  }
}

:deep(.swiper-pagination-bullet) {
  width: 20px;
  height: 20px;
  margin-left: 20px !important;
  margin-right: 20px !important;
  @apply bg-gray-400 opacity-100 mx-2 transition-all duration-300;
}

:deep(.swiper-pagination-bullet-active) {
  @apply bg-brand-primary transform scale-110;
}
</style>
