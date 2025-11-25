<template>
  <div class="p-4 flex flex-col gap-4">
    <div>
      <BaseButton variant="primary" @click="showLoginDialog = true"> Login </BaseButton>
    </div>
    <DialogLogin v-model:open="showLoginDialog" />
  </div>
</template>

<script setup>
defineOptions({
  layout: 'default'
})

const showLoginDialog = ref(false)
</script>
