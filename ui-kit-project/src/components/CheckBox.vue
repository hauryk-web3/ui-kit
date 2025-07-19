<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  modelValue: boolean;
  label?: string;
  disabled?: boolean;
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

function toggle() {
  if (!props.disabled) {
    emits('update:modelValue', !props.modelValue);
  }
}
</script>

<template>
  <label class="checkbox-container" :class="{ disabled }">
    <input
      type="checkbox"
      class="checkbox-input"
      :checked="modelValue"
      @change="toggle"
      :disabled="disabled"
    />
    <span class="checkbox-custom" />
    <span v-if="label" class="checkbox-label">{{ label }}</span>
  </label>
</template>

<style scoped lang="scss">
@import '../styles/utils/variables';


.checkbox-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  &.disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.checkbox-custom {
  width: 16px;
  height: 16px;
  border: 2px solid $color-border;
  border-radius: 4px;
  position: relative;
  transition: background-color 0.2s, border-color 0.2s;
  margin-right: 8px;

  &::after {
    content: '';
    position: absolute;
    display: none;
    left: 4px;
    top: 0px;
    width: 4px;
    height: 8px;
    border: solid $color-primary;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
}

.checkbox-input:checked + .checkbox-custom::after {
  display: block;
}

.checkbox-input:checked + .checkbox-custom {
  border-color: $color-primary;
  background-color: lighten($color-primary, 40%);
}

.checkbox-label {
  font-size: 14px;
  color: $color-text;
}
</style>
