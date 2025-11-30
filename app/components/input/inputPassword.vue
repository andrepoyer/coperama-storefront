<template>
  <div class="w-full">
    <BaseInput
      :id="id"
      v-model="internalValue"
      :hint="hint"
      :state="state"
      :variant="variant"
      :disabled="disabled"
      :required="required"
      :maxlength="maxlength"
      :name="name || 'password'"
      :error-message="errorMessage"
      :type="showPassword ? 'text' : 'password'"
      :placeholder="placeholder || 'Your password'"
      :autocomplete="autocomplete || 'current-password'"
    >
      <template #suffix="{ iconClasses }">
        <button
          type="button"
          :disabled="disabled"
          :aria-label="showPassword ? 'Hide password' : 'Show password'"
          class="ml-2 transition-colors duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          @click="togglePassword"
        >
          <component
            :is="showPassword ? 'i-visibility' : 'i-visibility-off'"
            :class="iconClasses"
          />
        </button>
      </template>
    </BaseInput>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string
  id?: string
  name?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  autocomplete?: string
  maxlength?: number
  state?: 'default' | 'error' | 'success'
  errorMessage?: string
  hint?: string
  variant?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  state: 'default',
  variant: 'primary',
  id: undefined,
  name: undefined,
  placeholder: undefined,
  autocomplete: undefined,
  maxlength: undefined,
  errorMessage: undefined,
  hint: undefined,
  disabled: false,
  required: false
})

const emit = defineEmits(['update:modelValue'])

const showPassword = ref(false)

const internalValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const togglePassword = () => {
  showPassword.value = !showPassword.value
}
</script>
