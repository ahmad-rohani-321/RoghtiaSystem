<script setup lang="ts">
import Button from 'primevue/button'
const props = withDefaults(defineProps<{ to?: string; icon?: string; trailingIcon?: string; color?: string; variant?: string; block?: boolean; loading?: boolean; disabled?: boolean; type?: 'button'|'submit'|'reset'; size?: string }>(), { type: 'button', to: undefined, icon: undefined, trailingIcon: undefined, color: undefined, variant: undefined, size: undefined })
const severity = computed(() => props.color === 'error' ? 'danger' : props.color === 'warning' ? 'warn' : props.color === 'success' ? 'success' : props.color === 'neutral' ? 'secondary' : undefined)
</script>
<template>
  <NuxtLink v-if="to" :to="to" class="p-button p-component pv-button" :class="[{ 'p-button-outlined': variant === 'outline', 'p-button-text': variant === 'ghost', 'p-button-fluid': block, 'p-button-sm': size === 'sm', 'p-button-lg': size === 'lg' || size === 'xl', 'p-disabled': disabled }, severity && `p-button-${severity}`]" :aria-disabled="disabled"><PvIcon v-if="icon" :name="icon" /><span class="p-button-label"><slot /></span><PvIcon v-if="trailingIcon" :name="trailingIcon" /></NuxtLink>
  <Button v-else :type="type" :severity="severity" :outlined="variant === 'outline'" :text="variant === 'ghost' || variant === 'link'" :fluid="block" :loading="loading" :disabled="disabled" :size="size === 'sm' ? 'small' : size === 'lg' || size === 'xl' ? 'large' : undefined" class="pv-button"><template v-if="icon" #icon><PvIcon :name="icon" /></template><slot /><PvIcon v-if="trailingIcon" :name="trailingIcon" /></Button>
</template>