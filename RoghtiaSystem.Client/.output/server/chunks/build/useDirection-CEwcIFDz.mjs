globalThis.__timing__.logStart('Load chunks/build/useDirection-CEwcIFDz');import { I as injectConfigProviderContext } from '../virtual/entry.mjs';
import { ref, computed } from 'vue';

// node_modules/reka-ui/dist/shared/useDirection.js
/**
* The `useDirection` function provides a way to access the current direction in your application.
* @param {Ref<Direction | undefined>} [dir] - An optional ref containing the direction (ltr or rtl).
* @returns  computed value that combines with the resolved direction.
*/
function useDirection(dir) {
	const context = injectConfigProviderContext({ dir: ref("ltr") });
	return computed(() => dir?.value || context.dir?.value || "ltr");
}

export { useDirection as u };;globalThis.__timing__.logEnd('Load chunks/build/useDirection-CEwcIFDz');
//# sourceMappingURL=useDirection-CEwcIFDz.mjs.map
