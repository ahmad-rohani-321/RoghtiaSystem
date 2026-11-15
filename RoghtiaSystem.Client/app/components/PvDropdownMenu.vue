<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import Menu from 'primevue/menu'; defineProps<{items: any[]}>(); const menu=ref();
function normalize(items:any[]):any[]{return items.flat().map(item=>item?.type==='separator'?{separator:true}:{...item, icon:undefined, command:(event:any)=>{item?.onSelect?.(event);item?.click?.(event);item?.command?.(event)}})}
function toggle(event:Event){menu.value?.toggle(event)}
</script><template><span class="pv-menu-trigger" @click="toggle"><slot /></span><Menu ref="menu" :model="normalize(items)" popup /></template>