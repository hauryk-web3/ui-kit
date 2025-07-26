<template>
  <div class="toaster" role="alert" aria-live="assertive" aria-atomic="true">
    <transition-group name="toast" tag="div" class="toast-list">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        :class="['toast', `toast--${toast.type}`]"
      >
        <div class="toast-message">{{ toast.message }}</div>
        <button class="toast-close" @click="removeToast(toast.id)" aria-label="Close notification">×</button>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '../composables/userToast';

const { toasts, removeToast } = useToast();
</script>

<style scoped lang="scss">
.toaster {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 9999;
  width: 320px;
}

.toast-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.toast {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1rem;
  border-radius: 6px;
  color: #fff;
  font-weight: 600;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  user-select: none;
}

.toast--success {
  background-color: #38a169;
}

.toast--error {
  background-color: #e53e3e;
}

.toast--info {
  background-color: #3182ce;
}

.toast-close {
  background: none;
  border: none;
  color: inherit;
  font-size: 1.4rem;
  cursor: pointer;
  line-height: 1;
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
