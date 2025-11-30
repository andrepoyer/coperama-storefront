<template>
  <Teleport to="body">
    <div class="toast toast-end toast-bottom z-50">
      <TransitionGroup name="toast">
        <div
          v-for="toast in toasts"
          :key="toast.id"
          :class="alertClass(toast.type)"
          class="alert shadow-lg cursor-pointer"
          @click="remove(toast.id)"
        >
          <component :is="getIcon(toast.type)" class="w-5 h-5" />
          <span>{{ toast.message }}</span>
          <button class="btn btn-ghost btn-sm btn-circle" @click.stop="remove(toast.id)">
            <i-close class="w-4 h-4" />
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useToast } from '~/composables/useToast'

const { toasts, remove } = useToast()

const alertClass = (type: string) => {
  const classes = {
    info: 'alert-info',
    success: 'alert-success',
    warning: 'alert-warning',
    error: 'alert-error'
  }
  return classes[type as keyof typeof classes] || 'alert-info'
}

const getIcon = (type: string) => {
  const icons = {
    info: resolveComponent('i-check'),
    success: resolveComponent('i-check'),
    warning: resolveComponent('i-check'),
    error: resolveComponent('i-check')
  }
  return icons[type as keyof typeof icons] || icons.info
}
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.toast-move {
  transition: transform 0.3s ease;
}
</style>
