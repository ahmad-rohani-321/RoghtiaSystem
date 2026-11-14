globalThis.__timing__.logStart('Load chunks/build/useId-BkktAd0v');import { I as injectConfigProviderContext } from '../virtual/entry.mjs';
import * as vue from 'vue';

// node_modules/reka-ui/dist/shared/useId.js
var count = 0;
/**
* The `useId` function generates a unique identifier using a provided deterministic ID,
* a configured `<ConfigProvider>` ID source, Vue's native `useId`, or a fallback counter.
* @param {string | null | undefined} [deterministicId] - The `useId` function you provided takes an
* optional parameter `deterministicId`, which can be a string, null, or undefined. If
* `deterministicId` is provided, the function will return it. Otherwise, it will generate an id using
* the configured ID source.
*/
function useId$1(deterministicId, prefix = "reka") {
	let id;
	const configProviderContext = injectConfigProviderContext({ useId: void 0 });
	if (configProviderContext.useId) id = configProviderContext.useId();
	else if ("useId" in vue) id = vue.useId?.();
	else id = `${++count}`;
	return prefix ? `${prefix}-${id}` : id;
}

export { useId$1 as u };;globalThis.__timing__.logEnd('Load chunks/build/useId-BkktAd0v');
//# sourceMappingURL=useId-BkktAd0v.mjs.map
