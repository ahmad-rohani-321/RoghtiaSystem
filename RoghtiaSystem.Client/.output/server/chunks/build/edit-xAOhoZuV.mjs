globalThis.__timing__.logStart('Load chunks/build/edit-xAOhoZuV');import { T as TreatmentEditor_default } from './TreatmentEditor-BIAt6Y2G.mjs';
import { u as useRoute$1, c as createError$2 } from '../virtual/entry.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import './FormField-WNpvFFAW.mjs';
import './Label-CeDlFZe1.mjs';
import './Input-Bs-tvl7x.mjs';
import '@vueuse/core';
import './Select-BT5K87rT.mjs';
import './useDirection-CEwcIFDz.mjs';
import './useFormControl-yNWnq054.mjs';
import './PopperArrow-XrulOaaZ.mjs';
import '@vueuse/shared';
import '@floating-ui/vue';
import './overlay-BJM8aJ6z.mjs';
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
import 'aria-hidden';
import './useId-BkktAd0v.mjs';
import './Textarea-DcsECgx9.mjs';
import './useMedications-KL-k4pZy.mjs';
import './useKbd-CRGZM3iV.mjs';
import './useFilter-dwXPCLOy.mjs';
import './VisuallyHiddenInput-BQ6nCFCd.mjs';
import './utils-BKhy4VZo.mjs';
import '@tanstack/vue-virtual';
import './Checkbox-CheFquWT.mjs';
import './useForwardScopeId-DagAJ5Oj.mjs';
import './RovingFocusGroup-DrT9jF6a.mjs';
import './PrescriptionPrintOptions-KTvYvYqN.mjs';
import './_plugin-vue_export-helper-DjkACiAr.mjs';
import './Modal-BsBsKz59.mjs';
import './useTreatments-BArmYU3I.mjs';
import './useDateFormatting-PLtQ78bC.mjs';
import '@internationalized/date';
import './usePatients-ChuF3ImT.mjs';
import './useDoctorInformation-DXDs7ZGz.mjs';
import '../_/treatment.mjs';
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
import 'tailwindcss/colors';

// app/pages/treatments/[id]/edit.vue?vue&type=script&setup=true&lang.ts
var edit_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "edit",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute$1();
		const id = Number(route.params.id);
		if (!Number.isInteger(id) || id < 1 || id > 2147483647) throw createError$2({ statusCode: 404 });
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(TreatmentEditor_default, mergeProps({ "treatment-id": unref(id) }, _attrs), null, _parent));
		};
	}
});
// app/pages/treatments/[id]/edit.vue
var _sfc_setup = edit_vue_vue_type_script_setup_true_lang_default.setup;
edit_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/treatments/[id]/edit.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var edit_default = edit_vue_vue_type_script_setup_true_lang_default;

export { edit_default as default };;globalThis.__timing__.logEnd('Load chunks/build/edit-xAOhoZuV');
//# sourceMappingURL=edit-xAOhoZuV.mjs.map
