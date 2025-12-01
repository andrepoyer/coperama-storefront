<template>
  <footer class="md:py-10 px-6 bg-brand-secondary text-white text-sm h-auto">
    <div class="flex md:justify-between flex-col md:flex-row justify-center items-center px-4 md:p-0 md:mb-10">
      <div class="md:pl-6 md:w-2/3 mt-8 md:mt-0">
        <NuxtImg
          src="/images/png/white-logo-footer.png"
          class="object-cover min-h-[80px] w-auto"
        />
      </div>
      <div class="text-xs px-4 mt-2.5 mb-5">
        <button class="bg-white font-bold text-brand-secondary flex items-center h-6 md:h-16 px-6 py-2 md:py-0 rounded-full text-base hover:bg-opacity-90">
          <span>ELEGIR PAÍS </span>
          <i-arrow-down class="w-4 h-4 md:h-6 md:w-12 pl-2" />
        </button>
      </div>
    </div>
    <hr class="border-spacing-0 mb-5 md:mb-10">
    <div class="text-xs md:text-base md:px-56 font-bold flex flex-col md:flex-row gap-2 text-center justify-center md:justify-between pb-8">
      <span>POLÍTICA DE COOKIES</span>
      <span>POLÍTICA DE PRIVACIDAD</span>
      <span>AVISO LEGAL</span>
      <span>CÓDIGO DE CONDUCTA</span>
    </div>
  </footer>
</template>
