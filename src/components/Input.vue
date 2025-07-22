<template>
  <div class="input-wrapper">
    <label v-if="label" class="input-label">{{ label }}</label>
    <div class="input-inner">
      <slot name="prependIcon" />
      
      <input
        :type="type || 'text'"
        :value="modelValue"
        @input="onInput"
        :placeholder="placeholder"
        class="input-field"
      />
      
      <slot name="appendIcon" />
  </div>
  </div>
  <div v-if="errorMessage" class="input-error-message">{{ errorMessage }}</div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
import { ref, watch, computed } from 'vue';

const props = defineProps<{
  label?: string;
  modelValue: string;
  type?: string;
  placeholder?: string;
  rules?: ((value: string) => string | true)[];
  error?: string;
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const internalError = ref('');

watch(
  () => props.modelValue,
  (value) => {
    if (props.rules) {
      for (const rule of props.rules) {
        const result = rule(value);
        if (result !== true) {
          internalError.value = result;
          return;
        }
      }
    }
    internalError.value = '';
  },
  { immediate: true }
);

const errorMessage = computed(() => {
  return props.error || internalError.value;
});

function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emits('update:modelValue', target.value);
}
</script>

<style lang="scss" scoped>
@import '../styles//utils/_variables';

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

.input-error {
  border-color: $color-danger;
  box-shadow: 0 0 3px $color-danger;
}

.input-error-message {
  color: $color-danger;
  font-size: 14px;
  margin-top: 4px;
}

.input-inner {
  display: flex;
  align-items: center;
  position: relative;
}

.input-field {
  flex: 1;
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid $color-border;
  border-radius: 4px;
}

</style>

