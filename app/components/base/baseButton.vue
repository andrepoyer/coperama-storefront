<template>
  <component
    :is="componentTag"
    :to="to"
    :href="href"
    :type="!to && !href ? type : undefined"
    :disabled="disabled"
    :class="computedClasses"
  >
    <span class="flex items-center gap-5">
      <slot name="icon-left" />
      <component :is="`i-${icon}`" v-if="icon" class="w-6 h-6 transition-colors duration-200" />
      <slot />
      <slot name="icon-right" />
    </span>
  </component>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  to?: string | object
  href?: string
  disabled?: boolean
  block?: boolean
  type?: 'button' | 'submit' | 'reset'
  icon?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  type: 'button',
  to: undefined,
  href: undefined,
  disabled: false,
  block: false,
  icon: undefined
})

const variantClasses: Record<string, string> = {
  primary: ['bg-brand-accent text-white', 'hover:bg-brand-accent-dark hover:text-white'].join(' '),
  secondary: ['bg-ui-bg text-brand-secondary', 'hover:bg-brand-secondary hover:text-white'].join(
    ' '
  )
}

/**
 * Computes the wrapper classes based on the input state and variant.
 * @returns {string} - The computed wrapper classes.
 */
const computedClasses = computed(() => {
  const base = [
    'group uppercase font-bold inline-flex items-center justify-center rounded-full transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none',
    'py-[18px] px-[25px] text-sm md:px-[30px] md:text-base',
    variantClasses[props.variant],
    props.block ? 'w-full' : ''
  ]

  return base.join(' ')
})

/**
 * Computes the component tag based on the props.
 * @returns {string} - The computed component tag.
 */
const componentTag = computed(() => {
  if (props.to) return resolveComponent('NuxtLink')
  if (props.href) return 'a'
  return 'button'
})
</script>
