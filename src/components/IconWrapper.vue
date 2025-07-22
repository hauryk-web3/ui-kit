<template>
  <span
    class="icon-wrapper"
    :style="{ width: size + 'px', height: size + 'px'}"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

const sizeMap = {
  small: 16,
  medium: 24,
  large: 32,
} as const;

type SizeType = keyof typeof sizeMap;

const props = defineProps<{
  size?: SizeType,
}>();

const size = props.size ?? 'medium';

</script>

<style scoped lang="scss">
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 
    color 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;

  transform: scale(1);
  box-shadow: none;
}

.icon-wrapper:hover {
  transform: scale(1.09);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
