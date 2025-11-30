<template>
  <header class="w-full bg-white shadow-sm">
    <div class="container mx-auto px-4 py-3 grid-cols-1 block text-center md:items-center md:justify-between md:grid-cols-3 md:flex">
      <NuxtLink to="/" class="flex gap-3 justify-center md:align-middle">
        <NuxtImg src="/images/svg/logo.svg" alt="Coperama" width="140" height="40"/>
      </NuxtLink>

      <div class="block md:flex items-center gap-2 order">
        <button class="p-2 rounded-md hover:bg-gray-100">¿ERES UN PROVEEDOR?</button>
        <div class="p-4 flex flex-col gap-4">
          <div>
            <BaseButton variant="primary" @click="showLoginDialog = true"> ACCESO CLIENTES </BaseButton>
          </div>
          <DialogLogin v-model:open="showLoginDialog" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { NuxtImg } from '#components'
  const showLoginDialog = ref(false)
</script>
