<script lang="ts" setup>
const props = defineProps<{
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}>();
</script>

<template>
  <button :type="type || 'button'" :disabled="disabled" class="button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import '../styles/utils/variables';

.button {
  padding: 10px 20px;
  background-color: $color-primary;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:disabled {
    background-color: $color-primary-disabled;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: darken($color-primary, 10%);
  }
}
</style>
