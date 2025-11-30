<template>
  <div class="flex items-center justify-center gap-2 pt-2">
    <div class="relative inline-flex">
      <input
        id="remember"
        v-model="rememberMe"
        type="checkbox"
        class="checkbox rounded-full checkbox-sm border-2 border-brand-primary checked:border-brand-primary checked:bg-brand-primary peer"
      />
      <i-check
        v-show="rememberMe"
        class="w-3 h-3 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />
    </div>

    <label for="remember" :class="labelClasses">
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label?: string
  labelClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  label: 'RECUÉRDAME',
  labelClass: ''
})

const rememberMe = defineModel<boolean>({ default: false })

const labelClasses = computed(() => {
  const defaultClasses = 'text-xs md:text-sm cursor-pointer select-none'
  return [defaultClasses, props.labelClass]
})
</script>
