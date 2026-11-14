<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  icon?: string
}>()
</script>
<template><section class="panel widget"><div class="widget-heading"><div><h2><UIcon v-if="icon" :name="icon" />{{ title }}</h2><p v-if="subtitle">{{ subtitle }}</p></div><slot name="action" /></div><slot /></section></template>
