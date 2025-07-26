<template>
  <div class="loader" :class="[`loader--${size}`, { 'loader--inline': inline }]"></div>
</template>

<script setup lang="ts">
defineProps<{
  size?: 'sm' | 'md' | 'lg';
  inline?: boolean;
}>();
</script>

<style scoped lang="scss">
.loader {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  &--sm {
    width: 20px;
    height: 20px;
  }

  &--md {
    width: 32px;
    height: 32px;
  }

  &--lg {
    width: 48px;
    height: 48px;
  }

  &--inline {
    display: inline-block;
    vertical-align: middle;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
