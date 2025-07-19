<script lang="ts" setup>
defineProps<{
  outlined?: boolean
}>();
</script>

<template>
  <div class="card" :class="{ outlined }">
    <div v-if="$slots.title" class="card-title">
      <slot name="title" />
    </div>

    <div class="card-content">
      <slot />
    </div>

    <div v-if="$slots.actions" class="card-actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../styles/utils/variables';

.card {
  border-radius: $border-radius * 2;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  transition: box-shadow 0.3s ease;

  &.outlined {
    box-shadow: none;
    border: 1px solid $color-border;
  }

  .card-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 12px;
    color: $color-text;
  }

  .card-content {
    font-size: 14px;
    color: $color-text;
  }

  .card-actions {
    margin-top: 16px;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }
}
</style>
