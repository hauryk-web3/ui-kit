<template>
  <div class="input-wrapper">
    <label v-if="label" class="input-label">{{ label }}</label>
    <input
      :type="type || 'text'"
      :value="modelValue"
      @input="onInput"
      :placeholder="placeholder"
      class="input-field"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  label?: string;
  modelValue: string;
  type?: string;
  placeholder?: string;
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emits('update:modelValue', target.value);
}
</script>

<style lang="scss" scoped>
@import '../styles//utils/variables';

.input-wrapper {
  margin-bottom: 16px;
}

.input-label {
  display: block;
  margin-bottom: 4px;
  color: $color-text;
  font-weight: 600;
}

.input-field {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid $color-border;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
  color: $color-text;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: $color-border-focus;
    box-shadow: 0 0 3px $color-border-focus;
  }
}
</style>

