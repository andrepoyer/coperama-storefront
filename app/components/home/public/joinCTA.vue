<template>
    <div class="mx-0 flex items-center w-auto">
      <div class="items-center justify-center flex-row grid md:flex">
        <div class="md:h-[600px] flex items-center">
          <div class="flex md:flex-row md:pl-6">
          <div class="flex flex-col items-center md:text-left text-center">
            <h2 class="text-brand-secondary font-bold md:text-5xl text-2xl leading-tight md:mb-5">
              ¿Listo para unirte a nosotros?
            </h2>
            <p class="text-gray-500 md:text-3xl text-base max-w-xl mx-auto leading-relaxed md:mb-14">
              ¡El proceso es corto, fácil y rápido!
            </p>
            <div class="md:self-end">
              <button class="bg-brand-accent text-white px-8 py-3 rounded-full font-bold flex gap-2 shadow-lg hover:scale-105 transition">
                <i-user-add class="h-6 w-6 self-center"/>
                ÚNETE A NOSOTROS
              </button>
            </div>
          </div>

        </div>
        </div>
        <div class="w-full relative h-full flex justify-center items-center">
          <NuxtImg
            src="/images/png/img-join-us.png"
            class="w-full md:h-[600px] h-auto shadow-xl object-cover"
          />
        </div>
      </div>
    </div>
</template>
