<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
</script>

<template>
  <div>
    <h1>Bem-vindo à área restrita!</h1>
    <p>Você só vê isso se estiver logado.</p>
  </div>
</template>
