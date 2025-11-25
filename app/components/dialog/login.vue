<template>
  <DialogRoot v-model:open="open">
    <DialogPortal>
      <DialogOverlay class="cop-dialog-overlay" />
      <DialogContent class="cop-dialog-content-login">
        <div class="grid md:grid-cols-2 h-full">
          <div class="block md:hidden">
            <NuxtImg
              src="/images/webp/authentication image-login-mobile.webp"
              class="w-full h-[200px] object-cover"
            />
          </div>
          <div class="hidden md:block">
            <NuxtImg
              src="/images/webp/authentication-image-login.webp"
              class="w-full h-[600px] object-cover"
            />
          </div>

          <div
            class="flex flex-col justify-between p-6 md:p-10 overflow-y-auto max-h-[calc(95vh-200px)] md:max-h-[600px]"
          >
            <div class="flex justify-end mb-4 md:mb-0">
              <button
                class="text-gray-400 hover:text-brand-primary transition-colors"
                @click="open = false"
              >
                <i-close class="w-6 h-6" />
              </button>
            </div>

            <div class="flex flex-col gap-[10px] md:gap-5">
              <DialogDescription
                class="font-normal md:font-bold text-[0.75rem] md:text-base text-brand-neutral-light uppercase tracking-wide"
              >
                OBTENGA MÁS RESULTADOS DE SU COMPRA DIARIA
              </DialogDescription>

              <DialogTitle class="text-[1.25rem] leading-tight md:text-[2rem] text-brand-primary">
                Inicie sesión para disfrutar de Coperama
              </DialogTitle>
            </div>

            <form class="space-y-4 mt-6 md:mt-0 md:space-y-6" @submit.prevent="handleLogin">
              <div class="space-y-4">
                <BaseInput
                  v-model="email"
                  icon="check"
                  type="email"
                  variant="secondary"
                  autocomplete="email"
                  placeholder="Correo electrónico"
                />

                <div class="flex flex-col gap-2">
                  <InputPassword v-model="password" placeholder="Contraseña" variant="secondary" />
                  <div class="text-left">
                    <a
                      class="text-xs md:text-sm text-teal-600 hover:text-teal-700 font-medium transition-colors"
                      href="#"
                    >
                      ¿OLVIDÓ SU CONTRASEÑA?
                    </a>
                  </div>
                </div>
              </div>

              <div class="flex flex-col gap-4 md:flex-row md:gap-[26px] items-center pt-2">
                <BaseButton type="submit" variant="primary" icon="user-login" class="w-fit">
                  LOGIN
                </BaseButton>
                <BaseCheckbox
                  v-model="rememberMe"
                  label="Recuérdame"
                  label-class="text-sm text-brand-neutral-light font-bold uppercase"
                />
              </div>
            </form>

            <div class="h-4 md:h-0"></div>
          </div>
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<script setup lang="ts">
const open = defineModel<boolean>('open')
const router = useRouter()
const { fetch: refreshSession } = useUserSession()

const email = ref('')
const password = ref('')
const rememberMe = ref(false)

const loading = ref(false)
const error = ref<string | null>(null)

const handleLogin = async () => {
  if (!email.value || !password.value) {
    error.value = 'Introduzca su correo electrónico y contraseña.'
    return
  }

  loading.value = true
  error.value = null

  try {
    await $fetch('/api/sap/login', {
      method: 'POST',
      body: {
        username: email.value,
        password: password.value,
        maxAge: rememberMe.value ? 2592000 : 3600
      }
    })

    await refreshSession()
    open.value = false
    router.push('/private-home')

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error('Erro de login:', err)
    if (err.statusCode === 401) {
      error.value = 'Correo electrónico o contraseña incorrectos.'
    } else {
      error.value = 'Ocurri&oacute; un error al iniciar sesión.'
    }
  } finally {
    loading.value = false
    router.push('/private-home')
  }
}
</script>
