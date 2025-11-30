<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
useSeoMeta({
  title: 'Coperama - We buy together',
  description: 'We buy together',
  ogTitle: 'Coperama - We buy together',
  ogDescription: 'We buy together'
})

const currentTheme = 'light'
useHead({
  htmlAttrs: {
    'data-theme': currentTheme,
    class: ''
  }
})
</script>
