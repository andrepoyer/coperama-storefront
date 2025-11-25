<template>
  <div class="flex items-center justify-center gap-2 pt-2">
    <CheckboxRoot id="remember" v-model:checked="rememberMe" class="cop-base-checkbox">
      <CheckboxIndicator class="cop-base-checkbox-indicator">
        <i-check class="w-4 h-4 text-white" />
      </CheckboxIndicator>
    </CheckboxRoot>

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
  const defaultClasses = 'text-xs md:text-sm  cursor-pointer select-none'
  return [defaultClasses, props.labelClass]
})
</script>
