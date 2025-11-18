<template>
  <div class="min-h-screen flex items-center justify-center px-4">
    <div class="max-w-md w-full bg-white rounded-lg shadow-2xl p-8">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800">Bem-vindo</h1>
        <p class="text-gray-600 mt-2">Faça login para continuar</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  layout: 'auth'
})
</script>