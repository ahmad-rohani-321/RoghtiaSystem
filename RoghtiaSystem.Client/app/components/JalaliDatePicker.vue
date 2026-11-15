<script setup lang="ts">
import type { DateValue } from '@internationalized/date'
import Popover from 'primevue/popover'
import Select from 'primevue/select'

const date = defineModel<DateValue>({ required: true })
const panel = ref<InstanceType<typeof Popover>>()
const yearOptions = computed(() => Array.from({ length: 21 }, (_, index) => ({ label: localNumber(date.value.year - 10 + index), value: date.value.year - 10 + index })))
const monthOptions = computed(() => Array.from({ length: 12 }, (_, index) => { const value = index + 1; return { label: formatMonth(date.value.set({ month: value, day: 1 })), value } }))
const dayOptions = computed(() => Array.from({ length: date.value.calendar.getDaysInMonth(date.value) }, (_, index) => ({ label: localNumber(index + 1), value: index + 1 })))
function setPart(part: 'year' | 'month' | 'day', value: number) {
  const maximum = part === 'day' ? date.value.calendar.getDaysInMonth(date.value) : 31
  date.value = date.value.set({ [part]: value, day: part === 'day' ? Math.min(value, maximum) : Math.min(date.value.day, maximum) })
}
</script>
<template>
  <PvButton color="neutral" variant="outline" icon="i-lucide-calendar-days" size="sm" class="date-button" @click="panel?.toggle($event)"><span class="date-label">{{ formatDate(date) }}</span><PvIcon name="i-lucide-chevron-down" /></PvButton>
  <Popover ref="panel" class="jalali-picker"><div class="jalali-picker-panel"><div class="jalali-picker-title">Persian calendar</div><div class="jalali-picker-grid"><Select :model-value="date.day" :options="dayOptions" option-label="label" option-value="value" aria-label="Day" @update:model-value="setPart('day', $event)" /><Select :model-value="date.month" :options="monthOptions" option-label="label" option-value="value" aria-label="Month" @update:model-value="setPart('month', $event)" /><Select :model-value="date.year" :options="yearOptions" option-label="label" option-value="value" aria-label="Year" @update:model-value="setPart('year', $event)" /></div><PvButton type="button" block @click="panel?.hide()">Done</PvButton></div></Popover>
</template>
<style scoped>.jalali-picker-title{font-weight:700;margin-bottom:.75rem}.jalali-picker-grid{display:grid;grid-template-columns:5.5rem 9rem 7rem;gap:.5rem;margin-bottom:.75rem}@media(max-width:420px){.jalali-picker-grid{grid-template-columns:1fr}}</style>