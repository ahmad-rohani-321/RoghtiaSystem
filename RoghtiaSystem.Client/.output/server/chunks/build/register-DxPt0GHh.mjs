globalThis.__timing__.logStart('Load chunks/build/register-DxPt0GHh');import { A as AccountForm_default } from './AccountForm-Ds8PKMJE.mjs';
import { a as useHead } from '../virtual/entry.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import './Form-DKt9N6vo.mjs';
import '@vueuse/core';
import './FormField-WNpvFFAW.mjs';
import './Label-CeDlFZe1.mjs';
import './Input-Bs-tvl7x.mjs';
import './Checkbox-CheFquWT.mjs';
import './useFormControl-yNWnq054.mjs';
import './useForwardScopeId-DagAJ5Oj.mjs';
import './VisuallyHiddenInput-BQ6nCFCd.mjs';
import './useId-BkktAd0v.mjs';
import './utils-BKhy4VZo.mjs';
import './RovingFocusGroup-DrT9jF6a.mjs';
import './useDirection-CEwcIFDz.mjs';
import '../_/nitro.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import './_plugin-vue_export-helper-DjkACiAr.mjs';
import 'nostics';
import 'nostics/formatters/ansi';
import 'vue-router';
import 'unhead/utils';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'tailwind-variants';
import '@vueuse/shared';
import 'tailwindcss/colors';

// app/pages/register.vue
var _sfc_main = {
	__name: "register",
	__ssrInlineRender: true,
	setup(__props) {
		useHead({ title: "Create account — RoghtiaSystem" });
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AccountForm_default, mergeProps({ mode: "register" }, _attrs), null, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/register-DxPt0GHh');
//# sourceMappingURL=register-DxPt0GHh.mjs.map
