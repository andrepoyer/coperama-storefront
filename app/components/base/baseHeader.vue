<template>
  <header class="w-full bg-white top-0 z-50 md:mb-0 mb-1"> <!--FOR-LATER: class to stick de menu at the top - 'sticky'-->
    <div class="mx-auto px-4 py-3 md:flex-row items-center justify-between flex-col flex ">
      <div class="flex items-center md:pl-6 py-2 md:w-2/3">
        <NuxtImg
          src="/images/svg/logo.svg"
          class="object-cover min-h-[80px]"
        />
      </div>
      <div class="flex-col flex items-center justify-end md:w-1/3 mt-0.5 md:mt-0 md:pr-6 md:flex-row-reverse">
        <button
              class="bg-brand-accent text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg hover:scale-105 transition mb-2.5 md:mb-0"
              @click="showLoginDialog = true"
          >
          <i-user class="h-5 w-5"/>
          Acceso Clientes
        </button>
        <DialogLogin v-model:open="showLoginDialog" />
        <a href="#" class="md:text-brand-secondary-dark text-base font-bold hover:text-brand-primary-dark md:pr-12">¿ERES UN PROVEEDOR?</a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineOptions({
  layout: 'default'
})

const showLoginDialog = ref(false)
</script>
