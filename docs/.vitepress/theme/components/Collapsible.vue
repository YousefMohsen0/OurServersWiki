<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  title?: string
  type?: 'tip' | 'warning' | 'danger' | 'info'
}>()

const open = ref(false)
</script>

<template>
  <details
    class="details custom-block wotaku-collapsible"
    :class="type"
    :open="open || undefined"
    @toggle="open = ($event.target as HTMLDetailsElement).open"
  >
    <summary>
      <span v-if="open" class="collapsible-arrow">▼</span>
      <span v-else class="collapsible-arrow">▶</span>
      {{ title || 'Details' }}
    </summary>
    <slot />
  </details>
</template>

<style scoped>
summary {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.4em;
  cursor: pointer;
  font-weight: 600;
}

summary::-webkit-details-marker {
  display: none;
}

.collapsible-arrow {
  font-size: 0.75em;
  flex-shrink: 0;
}

.details {
  background-color: var(--vp-collapsible-bg, color-mix(in srgb, var(--vp-c-brand-1) 15%, transparent));
  color: var(--vp-collapsible-text, var(--vp-c-text-1));
  border: 1px solid var(--vp-collapsible-border, var(--vp-c-brand-soft));
  border-radius: 8px;
  padding: 16px 20px;
  margin: 16px 0;
}

.tip {
  background-color: var(--vp-custom-block-tip-bg);
  color: var(--vp-custom-block-tip-text);
  border-color: var(--vp-custom-block-tip-border);
}

.warning {
  background-color: var(--vp-custom-block-warning-bg);
  color: var(--vp-custom-block-warning-text);
  border-color: var(--vp-custom-block-warning-border);
}

.danger {
  background-color: var(--vp-custom-block-danger-bg);
  color: var(--vp-custom-block-danger-text);
  border-color: var(--vp-custom-block-danger-border);
}

.info {
  background-color: var(--vp-custom-block-info-bg);
  color: var(--vp-custom-block-info-text);
  border-color: var(--vp-custom-block-info-border);
}
</style>