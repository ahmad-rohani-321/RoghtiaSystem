globalThis.__timing__.logStart('Load chunks/build/useFormControl-yNWnq054');import { computed, toValue } from 'vue';
import { unrefElement } from '@vueuse/core';

// node_modules/reka-ui/dist/shared/useFormControl.js
function useFormControl(el) {
	return computed(() => toValue(el) ? Boolean(unrefElement(el)?.closest("form")) : true);
}

export { useFormControl as u };;globalThis.__timing__.logEnd('Load chunks/build/useFormControl-yNWnq054');
//# sourceMappingURL=useFormControl-yNWnq054.mjs.map
