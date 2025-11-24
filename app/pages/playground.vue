<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-4 gap-3">
    <div class="w-full h-36 bg-white rounded-lg shadow-2xl p-4 flex flex-col gap-4">
      <BaseInput
        v-model="email"
        icon="check"
        type="email"
        variant="secondary"
        autocomplete="email"
        placeholder="Correo electrónico"
      />

      <InputPassword v-model="password" placeholder="Contraseña" variant="secondary" />

      <br />
      {{ email }}
    </div>
    <div class="w-full h-36 bg-white rounded-lg shadow-2xl flex justify-center items-center gap-2">
      <BaseButton href="https://google.com" target="_blank" variant="primary" icon="user">
        Acesso Clientes
      </BaseButton>
      <BaseButton to="/" variant="secondary" icon="visibility"> Acesso Clientes </BaseButton>
      <BaseButton variant="primary" @click="showLoginDialog = true"> Login </BaseButton>
    </div>

    <DialogLogin v-model:open="showLoginDialog" />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  layout: 'default'
})

const email = ref('')
const password = ref('')
const showLoginDialog = ref(false)
</script>
