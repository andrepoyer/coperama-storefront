<template>
  <div class="w-full">
    <div :class="wrapperClasses">
      <slot name="prefix" />
      <input
        :id="id"
        ref="inputRef"
        :name="name"
        :type="type"
        v-bind="$attrs"
        :value="modelValue"
        :disabled="disabled"
        :required="required"
        :readonly="readonly"
        :maxlength="maxlength"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        class="h-full w-full bg-transparent py-2 text-base text-gray-700 placeholder-gray-400 outline-none transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <slot name="suffix" :icon-classes="iconClasses" :is-focused="isFocused">
        <component :is="`i-${icon}`" v-if="icon" :class="iconClasses" />
      </slot>
    </div>
    <p v-if="state === 'error' && errorMessage" class="mt-1 text-xs text-red-500">
      {{ errorMessage }}
    </p>
    <p v-if="hint && state !== 'error'" class="mt-1 text-xs text-gray-500">
      {{ hint }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string | number
  name?: string
  id?: string
  type?: string
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  icon?: string
  autocomplete?: string
  maxlength?: number
  state?: 'default' | 'error' | 'success'
  errorMessage?: string
  hint?: string
  variant?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
  autocomplete: 'off',
  state: 'default',
  disabled: false,
  readonly: false,
  required: false,
  variant: 'primary',
  name: undefined,
  id: undefined,
  placeholder: undefined,
  icon: undefined,
  maxlength: undefined,
  errorMessage: undefined,
  hint: undefined
})

const emit = defineEmits(['update:modelValue', 'focus', 'blur'])

const isFocused = ref(false)
const inputRef = ref<HTMLInputElement>()

const variantStyles = {
  primary: {
    border: 'border-brand-accent',
    icon: 'text-brand-accent'
  },
  secondary: {
    border: 'border-brand-secondary',
    icon: 'text-brand-secondary'
  }
}

/**
 * Handles an input event, emitting the updated model value.
 * @param {Event} event - The input event.
 */
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

/**
 * Handles a focus event, emitting the focus event and setting the isFocused value to true.
 * @param {FocusEvent} event - The focus event.
 */
const handleFocus = (event: FocusEvent) => {
  isFocused.value = true
  emit('focus', event)
}

/**
 * Handles a blur event, emitting the blur event and setting the isFocused value to false.
 * @param {FocusEvent} event - The blur event.
 */
const handleBlur = (event: FocusEvent) => {
  isFocused.value = false
  emit('blur', event)
}

/**
 * Computes the wrapper classes based on the input state and variant.
 * @returns {string} - The computed wrapper classes.
 */
const wrapperClasses = computed(() => {
  const base = [
    'flex items-center justify-between border-b-2 transition-colors duration-200',
    'bg-transparent',
    'pb-1'
  ]

  if (props.disabled) {
    base.push('border-gray-200 cursor-not-allowed bg-gray-50/50')
  } else if (props.state === 'error') {
    base.push('border-red-500')
  } else {
    base.push(variantStyles[props.variant].border)
  }

  return base.join(' ')
})

/**
 * Computes the icon classes based on the input state and variant.
 * @returns {string} - The computed icon classes.
 */
const iconClasses = computed(() => {
  const base = ['!size-[28px] transition-colors duration-200 ml-2']

  if (props.disabled) {
    return [...base, 'text-gray-300'].join(' ')
  }
  if (props.state === 'error') {
    return [...base, 'text-red-500'].join(' ')
  }
  return [...base, variantStyles[props.variant].icon].join(' ')
})

/**
 * Expose the focus, blur, and select methods for the input element.
 * @returns {Object} - An object containing the focus, blur, and select methods.
 */
defineExpose({
  focus: () => inputRef.value?.focus(),
  blur: () => inputRef.value?.blur(),
  select: () => inputRef.value?.select(),
  inputElement: inputRef
})
</script>
