<script setup lang="ts">
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
defineOptions({ inheritAttrs: false })
const model = defineModel<string | number | null | undefined>()
const textModel = computed({ get: () => model.value == null ? '' : String(model.value), set: (value: string | undefined) => { model.value = value ?? '' } })
defineProps<{ icon?: string; loading?: boolean }>()
</script>
<template><IconField class="pv-input-wrap"><InputIcon v-if="icon"><PvIcon :name="icon" /></InputIcon><InputText v-model="textModel" v-bind="$attrs" class="pv-input" /><span v-if="$slots.trailing" class="pv-input-trailing"><slot name="trailing" /></span><PvIcon v-else-if="loading" name="i-lucide-loader-circle" class="animate-spin" /></IconField></template>