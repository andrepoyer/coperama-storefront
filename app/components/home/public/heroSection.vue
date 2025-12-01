<template>
  <section class="relative bg-brand-primary">
    <div class="mx-0 w-full flex flex-col-reverse md:flex-row items-center md:min-h-[600px]">
      <div class="w-full flex flex-col md:h-[600px] justify-between text-center md:text-right md:w-1/3 text-white z-10  md:px-5 py-8 px-4 bg-brand-primary items-center">
        <div>
          <h1 class="md:text-4xl text-2xl font-bold leading-tight mb-5">
            Todo lo que tu <br class="hidden md:block"/>
            hotel necesita, en <br class="hidden md:block"/>
            un solo lugar
          </h1>
        </div>
        <div>
          <h2 class="text-base md:text-3xl font-medium mb-8 opacity-90">
            Nuestro comercio electrónico B2B le brinda las herramientas
            para que sus compras sean mejores y más fáciles.
          </h2>
        </div>
        <div class="md:self-end">
          <button class="bg-brand-accent text-white px-8 py-3 rounded-full font-bold flex gap-2 shadow-lg hover:scale-105 transition">
            <i-user-add class="h-6 w-6 self-center"/>
            ÚNETE A NOSOTROS
          </button>
        </div>
      </div>

      <div class="w-full md:w-2/3 relative h-full flex justify-center items-center">
        <NuxtImg
          src="/images/png/hero-image.png"
          class="w-full md:h-[600px] h-auto shadow-xl object-cover"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-bounce-slow {
  animation: bounce 3s infinite;
}
</style>
