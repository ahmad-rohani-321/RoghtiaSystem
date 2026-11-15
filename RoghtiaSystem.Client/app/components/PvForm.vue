<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FormError } from '~/types/ui'
const props=defineProps<{ state: Record<string, unknown>; validate?: (state: any) => FormError[]; disabled?: boolean }>()
const emit=defineEmits<{ submit:[event:{data:Record<string, unknown>}]; error:[event:{errors:FormError[]}] }>()
const manualErrors=ref<FormError[]>([])
function clear(){manualErrors.value=[]}
function setErrors(errors:FormError[]){manualErrors.value=errors}
function getErrors(name?:string){return name ? manualErrors.value.filter(error => error.name === name || error.id === name) : manualErrors.value}
function submit(){ const errors=[...(props.validate?.(props.state) || []),...manualErrors.value]; if(errors.length) emit('error',{errors}); else emit('submit',{data:props.state}) }
defineExpose({clear,setErrors,getErrors})
</script>
<template><form :aria-disabled="disabled" @submit.prevent="submit"><fieldset :disabled="disabled" class="pv-form-fieldset"><slot /></fieldset></form></template>