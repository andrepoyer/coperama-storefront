<template>
  <div class="mx-0 flex flex-col-reverse md:flex-row items-center w-auto justify-center">
    <div class="md:h-[600px] flex items-center flex-row md:pl-6 md:mr-10">
      <div class="flex flex-col items-center text-center md:text-right md:top-0 justify-between md:h-full md:py-10">
        <div>
          <h2 class="text-brand-secondary font-bold md:text-5xl text-2xl md:mb-5 pt-8">
            ¿Listo para unirte a nosotros?
          </h2>
          <p class="text-gray-500 md:text-3xl text-base md:text-right max-w-xl mx-auto md:mr-0 md:mb-14 pt-4">
            ¡El proceso es corto, fácil y rápido!
          </p>
        </div>
        <div class="md:self-end pt-5">
          <button class="bg-brand-accent text-white px-8 py-3 rounded-full font-bold flex gap-2 shadow-lg hover:scale-105 transition mb-8 items-center">
            <i-user-add class="h-6 w-6 md:h-12 md:w-12 self-center"/>
            ÚNETE A NOSOTROS
          </button>
        </div>
      </div>
    </div>
    <div class="w-full relative h-full flex justify-center md:w-3/5">
      <NuxtImg
        src="/images/png/img-join-us.png"
        class="w-full md:h-[600px] h-auto shadow-xl object-cover"
      />
    </div>
  </div>
</template>
