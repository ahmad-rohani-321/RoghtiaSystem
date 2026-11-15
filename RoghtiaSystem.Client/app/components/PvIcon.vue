<script setup lang="ts">
import * as LucideIcons from 'lucide-vue-next'
import type { Component } from 'vue'
const props = defineProps<{ name: string }>()
const icon = computed<Component>(() => {
  const key = props.name.replace(/^i-lucide-/, '').split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('')
  return (LucideIcons as unknown as Record<string, Component>)[key] || LucideIcons.Circle
})
</script>
<template><component :is="icon" class="pv-icon" aria-hidden="true" /></template>