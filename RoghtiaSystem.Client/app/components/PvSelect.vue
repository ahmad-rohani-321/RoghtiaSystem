<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import Select from 'primevue/select'; import MultiSelect from 'primevue/multiselect'
defineOptions({ inheritAttrs:false })
const props=defineProps<{ items?: any[]; multiple?: boolean; searchable?: boolean; valueKey?: string; labelKey?: string; searchablePlaceholder?: string }>()
const model=defineModel<any>()
const first=computed(() => props.items?.[0] as Record<string, unknown> | undefined)
const optionLabel=computed(() => props.labelKey || (first.value && typeof first.value === 'object' && 'label' in first.value ? 'label' : undefined))
const optionValue=computed(() => props.valueKey || (first.value && typeof first.value === 'object' && 'value' in first.value ? 'value' : undefined))
</script>
<template><MultiSelect v-if="multiple" v-model="model" v-bind="$attrs" :options="items" :option-label="optionLabel" :option-value="optionValue" :filter="searchable" :filter-placeholder="searchablePlaceholder" /><Select v-else v-model="model" v-bind="$attrs" :options="items" :option-label="optionLabel" :option-value="optionValue" :filter="searchable" :filter-placeholder="searchablePlaceholder" /></template>