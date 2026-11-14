globalThis.__timing__.logStart('Load chunks/build/print-C89Wam4N');import { u as useRoute$1, c as createError$2, e as useAuth, K as useToast, a as useHead, b as _sfc_main$5, _ as _sfc_main, s as ssrRenderList$2, n as navigateTo } from '../virtual/entry.mjs';
import { P as PrescriptionPrintOptions_default } from './PrescriptionPrintOptions-KTvYvYqN.mjs';
import { u as useTreatments } from './useTreatments-BArmYU3I.mjs';
import { u as useDoctorInformation } from './useDoctorInformation-DXDs7ZGz.mjs';
import { f as formatDateTime, l as localNumber } from './useDateFormatting-PLtQ78bC.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-DjkACiAr.mjs';
import { defineComponent, ref, computed, watch, mergeProps, unref, withCtx, createTextVNode, isRef, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import 'nostics';
import 'nostics/formatters/ansi';
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
import 'vue-router';
import 'unhead/utils';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@vueuse/core';
import 'tailwind-variants';
import '@vueuse/shared';
import 'tailwindcss/colors';
import './Checkbox-CheFquWT.mjs';
import './useFormControl-yNWnq054.mjs';
import './useForwardScopeId-DagAJ5Oj.mjs';
import './VisuallyHiddenInput-BQ6nCFCd.mjs';
import './useId-BkktAd0v.mjs';
import './utils-BKhy4VZo.mjs';
import './RovingFocusGroup-DrT9jF6a.mjs';
import './useDirection-CEwcIFDz.mjs';
import './Label-CeDlFZe1.mjs';
import '@internationalized/date';

// app/pages/treatments/[id]/print.vue?vue&type=script&setup=true&lang.ts
var print_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "print",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute$1();
		const id = Number(route.params.id);
		if (!Number.isInteger(id) || id < 1 || id > 2147483647) throw createError$2({ statusCode: 404 });
		const api = useTreatments();
		const doctor = useDoctorInformation();
		const auth = useAuth();
		const treatment = ref(null);
		const loading = ref(true);
		const loadError = ref("");
		const requestPending = ref(false);
		const printPending = ref(false);
		const printAsA5 = ref(route.query.a5 === "1");
		const printGrayscale = ref(route.query.grayscale === "1");
		const printPreferencesReady = ref(false);
		const toast = useToast();
		let printPreferencesSaveTask = Promise.resolve();
		const info = computed(() => doctor.information.value);
		const doctorName = computed(() => info.value?.doctorNameEnglish || auth.user.value?.userName || "Doctor");
		const doctorNamePashto = computed(() => info.value?.doctorNamePashto?.trim() || "");
		const profession = computed(() => info.value?.doctorProfessionEnglish || "");
		const professionPashto = computed(() => info.value?.doctorProfessionPashto?.trim() || "");
		const hospitalLogo = computed(() => info.value?.hospitalLogo || null);
		const hospitalName = computed(() => info.value?.hospitalNamePashto?.trim() || "");
		const hospitalAddress = computed(() => info.value?.hospitalAddress?.trim() || "");
		const hospitalPhoneNumbers = computed(() => info.value?.hospitalPhoneNumbers?.trim() || "");
		const doctorLogo = computed(() => info.value?.doctorLogo || null);
		const genders = {
			Male: "Male",
			Female: "Female",
			Other: "Other"
		};
		const dateParts = computed(() => (treatment.value ? formatDateTime(treatment.value.recordedAtUtc) : "").split(", "));
		const prescriptionNumber = computed(() => {
			if (!treatment.value) return "";
			return `RX-${new Date(treatment.value.recordedAtUtc).getUTCFullYear()}-${String(treatment.value.id).padStart(6, "0")}`;
		});
		const clinicalNotesText = computed(() => treatment.value?.clinicalNotes.map((note) => note.text.trim()).filter(Boolean).join(", ") || "");
		const additionalInstructionsText = computed(() => {
			const items = treatment.value?.additionalInstructionItems.map((item) => item.text.trim()).filter(Boolean) || [];
			const legacy = treatment.value?.additionalInstructions?.trim().replace(/\s*[\r\n]+\s*/g, ", ");
			if (legacy) items.push(legacy);
			return items.join(", ");
		});
		const diagnosticsText = computed(() => {
			return (Boolean(treatment.value?.diagnostics?.length || treatment.value?.investigations?.length) ? treatment.value?.diagnostics || [] : treatment.value?.diagnosticInvestigations || []).map((item) => item.text.trim()).filter(Boolean).join(", ");
		});
		const investigationsText = computed(() => treatment.value?.investigations.map((item) => item.text.trim()).filter(Boolean).join(", ") || "");
		async function printDocument() {
			if (!treatment.value || loading.value || loadError.value || printPending.value) return;
			printPending.value = true;
			await printPreferencesSaveTask;
			const pageStyle = (void 0).createElement("style");
			pageStyle.textContent = `@media print { @page { size: ${printAsA5.value ? "A5" : "A4"} portrait; margin: ${printAsA5.value ? "7mm" : "0 0 30mm 0"}; } }`;
			(void 0).head.append(pageStyle);
			try {
				await nextTick();
				await (void 0).fonts.ready;
				await Promise.all(Array.from((void 0).querySelectorAll(".print-sheet img")).map((image) => image.decode().catch(() => {})));
				await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
				(void 0).print();
			} finally {
				pageStyle.remove();
				printPending.value = false;
			}
		}
		async function loadTreatment() {
			if (requestPending.value) return;
			requestPending.value = true;
			loading.value = true;
			loadError.value = "";
			try {
				treatment.value = await api.get(id);
				try {
					const savedPreferences = await doctor.load(true);
					if (route.query.a5 === void 0) printAsA5.value = !!savedPreferences?.printOnA5;
					if (route.query.grayscale === void 0) printGrayscale.value = !!savedPreferences?.printGrayscale;
				} catch {}
				printPreferencesReady.value = true;
			} catch (error) {
				const failure = error;
				const status = failure.statusCode || failure.status;
				if (status === 401) {
					await navigateTo({
						path: "/login",
						query: { redirect: route.fullPath }
					});
					return;
				}
				loadError.value = status === 404 ? "This treatment was not found or is no longer available to your account." : "The treatment could not be loaded. Check that the server is running, then try again.";
			} finally {
				requestPending.value = false;
				loading.value = false;
			}
			if (route.query.auto === "1" && treatment.value && !loadError.value) await printDocument();
		}
		watch([printAsA5, printGrayscale], ([printOnA5, printGrayscaleValue]) => {
			if (!printPreferencesReady.value) return;
			printPreferencesSaveTask = printPreferencesSaveTask.then(async () => {
				try {
					await doctor.savePrintPreferences({
						printOnA5,
						printGrayscale: printGrayscaleValue
					});
				} catch {
					toast.add({
						title: "Print preferences not saved",
						description: "Please try again.",
						color: "error"
					});
				}
			});
		});
		useHead({ title: `Prescription ${prescriptionNumber.value} — RoghtiaSystem` });
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UIcon = _sfc_main$5;
			const _component_UButton = _sfc_main;
			const _component_PrescriptionPrintOptions = PrescriptionPrintOptions_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: ["print-page", { "print-page-a5": unref(printAsA5) }] }, _attrs))} data-v-740057eb>`);
			if (unref(loading)) {
				_push(`<div class="print-state" role="status" data-v-740057eb>`);
				_push(ssrRenderComponent(_component_UIcon, {
					name: "i-lucide-loader-circle",
					class: "animate-spin"
				}, null, _parent));
				_push(`Loading treatment…</div>`);
			} else if (unref(loadError)) {
				_push(`<div class="print-state print-error" role="alert" data-v-740057eb><span data-v-740057eb>${ssrInterpolate(unref(loadError))}</span>`);
				_push(ssrRenderComponent(_component_UButton, {
					type: "button",
					color: "neutral",
					variant: "outline",
					icon: "i-lucide-refresh-cw",
					onClick: loadTreatment
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Try again`);
						else return [createTextVNode("Try again")];
					}),
					_: 1
				}, _parent));
				_push(ssrRenderComponent(_component_UButton, {
					to: "/treatments",
					color: "neutral",
					variant: "ghost"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Back`);
						else return [createTextVNode("Back")];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else if (unref(treatment)) {
				_push(`<!--[--><div class="print-toolbar" data-v-740057eb>`);
				_push(ssrRenderComponent(_component_UButton, {
					to: "/treatments",
					color: "neutral",
					variant: "outline",
					icon: "i-lucide-arrow-left"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Back`);
						else return [createTextVNode("Back")];
					}),
					_: 1
				}, _parent));
				_push(`<div class="print-toolbar-actions" data-v-740057eb>`);
				_push(ssrRenderComponent(_component_UButton, {
					to: "/treatments/new",
					color: "primary",
					variant: "soft",
					icon: "i-lucide-plus"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`New`);
						else return [createTextVNode("New")];
					}),
					_: 1
				}, _parent));
				_push(ssrRenderComponent(_component_PrescriptionPrintOptions, {
					a5: unref(printAsA5),
					"onUpdate:a5": ($event) => isRef(printAsA5) ? printAsA5.value = $event : null,
					grayscale: unref(printGrayscale),
					"onUpdate:grayscale": ($event) => isRef(printGrayscale) ? printGrayscale.value = $event : null
				}, null, _parent));
				_push(ssrRenderComponent(_component_UButton, {
					type: "button",
					icon: "i-lucide-printer",
					loading: unref(printPending),
					onClick: printDocument
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Print`);
						else return [createTextVNode("Print")];
					}),
					_: 1
				}, _parent));
				_push(`</div></div><article class="${ssrRenderClass([{
					"print-sheet-a5": unref(printAsA5),
					"print-sheet-grayscale": unref(printGrayscale)
				}, "print-sheet"])}" dir="ltr" aria-label="Printable treatment prescription" data-v-740057eb>`);
				if (unref(doctorLogo)) _push(`<img class="doctor-watermark"${ssrRenderAttr("src", unref(doctorLogo))} alt="" aria-hidden="true" data-v-740057eb>`);
				else _push(`<!---->`);
				_push(`<header class="sheet-header" data-v-740057eb><div class="doctor-brand doctor-brand-en" data-v-740057eb>`);
				if (unref(hospitalLogo)) _push(`<img class="hospital-logo"${ssrRenderAttr("src", unref(hospitalLogo))} alt="Hospital logo" data-v-740057eb>`);
				else _push(`<!---->`);
				_push(`<div class="doctor-credentials" data-v-740057eb><h2 data-v-740057eb><bdi data-v-740057eb>${ssrInterpolate(unref(doctorName))}</bdi></h2>`);
				if (unref(profession)) _push(`<p data-v-740057eb><bdi data-v-740057eb>${ssrInterpolate(unref(profession))}</bdi></p>`);
				else _push(`<!---->`);
				_push(`</div></div><div class="doctor-logo-frame" data-v-740057eb>`);
				if (unref(doctorLogo)) _push(`<img${ssrRenderAttr("src", unref(doctorLogo))} alt="Doctor logo" data-v-740057eb>`);
				else _push(`<!---->`);
				_push(`</div><div class="doctor-brand doctor-brand-ps" dir="rtl" data-v-740057eb>`);
				if (unref(hospitalName)) _push(`<h2 class="hospital-name" data-v-740057eb><bdi data-v-740057eb>${ssrInterpolate(unref(hospitalName))}</bdi></h2>`);
				else _push(`<!---->`);
				if (unref(doctorNamePashto)) _push(`<p class="doctor-name-ps" data-v-740057eb><bdi data-v-740057eb>${ssrInterpolate(unref(doctorNamePashto))}</bdi></p>`);
				else _push(`<!---->`);
				if (unref(professionPashto)) _push(`<p data-v-740057eb><bdi data-v-740057eb>${ssrInterpolate(unref(professionPashto))}</bdi></p>`);
				else _push(`<!---->`);
				_push(`</div></header><section class="patient-box" data-v-740057eb><h2 data-v-740057eb>`);
				_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-user-round" }, null, _parent));
				_push(` Patient information</h2><div class="patient-grid" data-v-740057eb><dl data-v-740057eb><div data-v-740057eb><dt data-v-740057eb>Name</dt><dd data-v-740057eb><bdi data-v-740057eb>${ssrInterpolate(unref(treatment).patient.name)}</bdi></dd></div><div data-v-740057eb><dt data-v-740057eb>Code</dt><dd dir="ltr" data-v-740057eb>${ssrInterpolate(unref(treatment).patient.code)}</dd></div><div data-v-740057eb><dt data-v-740057eb>Age / Gender</dt><dd data-v-740057eb>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(treatment).patient.age))} years / ${ssrInterpolate(genders[unref(treatment).patient.gender] || unref(treatment).patient.gender)}</dd></div><div data-v-740057eb><dt data-v-740057eb>Phone</dt><dd dir="ltr" data-v-740057eb>${ssrInterpolate(unref(treatment).patient.phone || "—")}</dd></div></dl><dl data-v-740057eb><div data-v-740057eb><dt data-v-740057eb>Date</dt><dd data-v-740057eb>${ssrInterpolate(unref(dateParts)[0])}</dd></div><div data-v-740057eb><dt data-v-740057eb>Time</dt><dd dir="ltr" data-v-740057eb>${ssrInterpolate(unref(dateParts)[1])}</dd></div><div data-v-740057eb><dt data-v-740057eb>Blood pressure</dt><dd dir="ltr" data-v-740057eb>${ssrInterpolate(unref(treatment).bloodPressure || "—")}</dd></div><div data-v-740057eb><dt data-v-740057eb>Address</dt><dd data-v-740057eb><bdi data-v-740057eb>${ssrInterpolate(unref(treatment).patient.address || "—")}</bdi></dd></div></dl></div></section>`);
				if (unref(treatment).prescriptionItems.length) {
					_push(`<!--[--><div class="rx-heading" data-v-740057eb><div class="rx-title" data-v-740057eb><span class="rx-mark" data-v-740057eb>R<sub data-v-740057eb>x</sub></span><h2 data-v-740057eb>Prescription</h2></div></div><section class="prescription-section" aria-label="Prescription medications" data-v-740057eb><table data-v-740057eb><thead data-v-740057eb><tr data-v-740057eb><th data-v-740057eb>#</th><th data-v-740057eb>Medications</th><th data-v-740057eb>Type</th><th data-v-740057eb>Dose</th><th data-v-740057eb>Frequency</th><th data-v-740057eb>Duration</th></tr></thead><tbody data-v-740057eb><!--[-->`);
					ssrRenderList$2(unref(treatment).prescriptionItems, (item) => {
						_push(`<tr data-v-740057eb><td data-v-740057eb><span class="number-circle" data-v-740057eb>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.position))}</span></td><td class="medicine-name" data-v-740057eb><bdi data-v-740057eb>${ssrInterpolate(item.medicationName)}</bdi></td><td data-v-740057eb>${ssrInterpolate(item.medicationType)}</td><td data-v-740057eb>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.dose))}</td><td data-v-740057eb>${ssrInterpolate(item.frequency)}</td><td data-v-740057eb>${ssrInterpolate(item.duration)}</td></tr>`);
					});
					_push(`<!--]--></tbody></table></section><!--]-->`);
				} else _push(`<!---->`);
				if (unref(clinicalNotesText) || unref(additionalInstructionsText) || unref(diagnosticsText) || unref(investigationsText)) {
					_push(`<div class="prescription-notes-grid" data-v-740057eb>`);
					if (unref(clinicalNotesText)) {
						_push(`<section class="notes-box rx-note-box" data-v-740057eb><h2 data-v-740057eb>`);
						_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-clipboard-list" }, null, _parent));
						_push(` Clinical notes</h2><p data-v-740057eb><bdi data-v-740057eb>${ssrInterpolate(unref(clinicalNotesText))}</bdi></p></section>`);
					} else _push(`<!---->`);
					if (unref(additionalInstructionsText)) {
						_push(`<section class="instructions-box rx-note-box" aria-label="Additional instructions" data-v-740057eb><h2 data-v-740057eb>`);
						_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-info" }, null, _parent));
						_push(` Additional instructions</h2><p data-v-740057eb><bdi data-v-740057eb>${ssrInterpolate(unref(additionalInstructionsText))}</bdi></p></section>`);
					} else _push(`<!---->`);
					if (unref(diagnosticsText)) {
						_push(`<section class="instructions-box rx-note-box" aria-label="Diagnostics" data-v-740057eb><h2 data-v-740057eb>`);
						_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-microscope" }, null, _parent));
						_push(` Diagnostics</h2><p data-v-740057eb><bdi data-v-740057eb>${ssrInterpolate(unref(diagnosticsText))}</bdi></p></section>`);
					} else _push(`<!---->`);
					if (unref(investigationsText)) {
						_push(`<section class="instructions-box rx-note-box" aria-label="Investigations" data-v-740057eb><h2 data-v-740057eb>`);
						_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-microscope" }, null, _parent));
						_push(` Investigations</h2><p data-v-740057eb><bdi data-v-740057eb>${ssrInterpolate(unref(investigationsText))}</bdi></p></section>`);
					} else _push(`<!---->`);
					_push(`</div>`);
				} else _push(`<!---->`);
				_push(`<footer class="sheet-footer" data-v-740057eb><div class="signature-block" data-v-740057eb><strong data-v-740057eb>Free follow up upto 3 days</strong></div><div class="footer-date" data-v-740057eb><span data-v-740057eb>Doctor signature: ________________</span></div>`);
				if (unref(hospitalAddress) || unref(hospitalPhoneNumbers)) {
					_push(`<div class="hospital-footer" data-v-740057eb>`);
					if (unref(hospitalAddress)) _push(`<span data-v-740057eb>Address: <bdi data-v-740057eb>${ssrInterpolate(unref(hospitalAddress))}</bdi></span>`);
					else _push(`<!---->`);
					if (unref(hospitalPhoneNumbers)) _push(`<span dir="ltr" data-v-740057eb>Phone: ${ssrInterpolate(unref(hospitalPhoneNumbers))}</span>`);
					else _push(`<!---->`);
					_push(`</div>`);
				} else _push(`<!---->`);
				_push(`</footer><div class="green-wave" aria-hidden="true" data-v-740057eb></div></article><!--]-->`);
			} else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
// app/pages/treatments/[id]/print.vue
var _sfc_setup = print_vue_vue_type_script_setup_true_lang_default.setup;
print_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/treatments/[id]/print.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var print_default = /*#__PURE__*/ _plugin_vue_export_helper_default(print_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-740057eb"]]);

export { print_default as default };;globalThis.__timing__.logEnd('Load chunks/build/print-C89Wam4N');
//# sourceMappingURL=print-C89Wam4N.mjs.map
