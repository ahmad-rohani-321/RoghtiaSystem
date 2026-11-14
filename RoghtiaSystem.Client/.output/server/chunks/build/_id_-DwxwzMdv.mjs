globalThis.__timing__.logStart('Load chunks/build/_id_-DwxwzMdv');import { u as useRoute$1, c as createError$2, a as useHead, _ as _sfc_main, b as _sfc_main$5, s as ssrRenderList$2, n as navigateTo } from '../virtual/entry.mjs';
import { u as usePatients } from './usePatients-ChuF3ImT.mjs';
import { u as useTreatments } from './useTreatments-BArmYU3I.mjs';
import { l as localNumber, f as formatDateTime } from './useDateFormatting-PLtQ78bC.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-DjkACiAr.mjs';
import { defineComponent, ref, reactive, mergeProps, unref, withCtx, createTextVNode, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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
import '@internationalized/date';

// app/pages/patient-history/[id].vue?vue&type=script&setup=true&lang.ts
var _id__vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "[id]",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute$1();
		const patientId = Number(route.params.id);
		if (!Number.isInteger(patientId) || patientId < 1 || patientId > 2147483647) throw createError$2({ statusCode: 404 });
		const patientsApi = usePatients();
		const treatmentsApi = useTreatments();
		const patient = ref(null);
		const visits = ref([]);
		const details = reactive({});
		const expandedVisit = ref(null);
		const loading = ref(true);
		const loadingDetails = ref([]);
		const printing = ref(false);
		const printTimestamp = ref("");
		const errorMessage = ref("");
		const printError = ref("");
		const genders = {
			Male: "Male",
			Female: "Female",
			Other: "Other"
		};
		useHead(() => ({ title: patient.value ? patient.value.name + " — Patient history — RoghtiaSystem" : "Patient history — RoghtiaSystem" }));
		async function loadHistory() {
			loading.value = true;
			errorMessage.value = "";
			try {
				patient.value = await patientsApi.get(patientId);
				const allVisits = [];
				let page = 1;
				let total = 0;
				do {
					const response = await treatmentsApi.list({
						patientId,
						page,
						pageSize: 100
					});
					if (response.items.length === 0) break;
					allVisits.push(...response.items);
					total = response.total;
					page = response.page + 1;
				} while (allVisits.length < total);
				visits.value = allVisits;
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
				errorMessage.value = status === 404 ? "This patient was not found or is not available to your account." : "Patient history could not be loaded. Check that the server is running, then try again.";
			} finally {
				loading.value = false;
			}
		}
		async function loadDetails(id) {
			if (details[id] || loadingDetails.value.includes(id)) return;
			loadingDetails.value = [...loadingDetails.value, id];
			try {
				const treatment = await treatmentsApi.get(id);
				if (treatment.patient.id !== patientId) throw new Error("Treatment does not belong to this patient.");
				details[id] = treatment;
			} catch {
				printError.value = "Some treatment details could not be loaded. Refresh the history and try again.";
			} finally {
				loadingDetails.value = loadingDetails.value.filter((value) => value !== id);
			}
		}
		async function printHistory() {
			if (!patient.value || loading.value || printing.value) return;
			printTimestamp.value = formatDateTime((/* @__PURE__ */ new Date()).toISOString());
			printing.value = true;
			printError.value = "";
			try {
				for (let index = 0; index < visits.value.length; index += 4) {
					await Promise.all(visits.value.slice(index, index + 4).map((visit) => loadDetails(visit.id)));
					if (printError.value) throw new Error(printError.value);
				}
				await nextTick();
				await (void 0).fonts.ready;
				await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
				(void 0).print();
			} catch {
				printError.value = "Unable to prepare the complete history for printing. Please try again.";
			} finally {
				printing.value = false;
			}
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UButton = _sfc_main;
			const _component_UIcon = _sfc_main$5;
			_push(`<section${ssrRenderAttrs(mergeProps({
				class: "history-page",
				"aria-labelledby": "history-title",
				"aria-busy": unref(loading) || unref(printing)
			}, _attrs))} data-v-b144b699><header class="history-toolbar" data-v-b144b699><div data-v-b144b699><div class="eyebrow" data-v-b144b699><span data-v-b144b699></span> Patient record</div><h1 id="history-title" data-v-b144b699>Medical history</h1>`);
			if (unref(patient)) _push(`<p data-v-b144b699>Complete visit and prescription history for <strong data-v-b144b699><bdi data-v-b144b699>${ssrInterpolate(unref(patient).name)}</bdi></strong>.</p>`);
			else _push(`<p data-v-b144b699>Patient visits, prescriptions, and treatment notes.</p>`);
			_push(`</div><div class="history-actions" data-v-b144b699>`);
			_push(ssrRenderComponent(_component_UButton, {
				to: "/patients",
				color: "neutral",
				variant: "outline",
				icon: "i-lucide-arrow-left"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Back to patients`);
					else return [createTextVNode("Back to patients")];
				}),
				_: 1
			}, _parent));
			if (unref(patient)) _push(ssrRenderComponent(_component_UButton, {
				type: "button",
				icon: "i-lucide-printer",
				loading: unref(printing),
				disabled: unref(loading) || unref(loadingDetails).length > 0,
				onClick: printHistory
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Print history`);
					else return [createTextVNode("Print history")];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			_push(`</div></header>`);
			if (unref(loading)) {
				_push(`<div class="history-state" role="status" data-v-b144b699>`);
				_push(ssrRenderComponent(_component_UIcon, {
					name: "i-lucide-loader-circle",
					class: "animate-spin"
				}, null, _parent));
				_push(`Loading patient history…</div>`);
			} else if (unref(errorMessage)) {
				_push(`<div class="history-state history-error" role="alert" data-v-b144b699>`);
				_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-circle-alert" }, null, _parent));
				_push(`<p data-v-b144b699>${ssrInterpolate(unref(errorMessage))}</p>`);
				_push(ssrRenderComponent(_component_UButton, {
					type: "button",
					color: "neutral",
					variant: "outline",
					icon: "i-lucide-refresh-cw",
					onClick: loadHistory
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Try again`);
						else return [createTextVNode("Try again")];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else if (unref(patient)) {
				_push(`<!--[-->`);
				if (unref(printError)) {
					_push(`<div class="history-alert" role="alert" data-v-b144b699>`);
					_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-circle-alert" }, null, _parent));
					_push(`<span data-v-b144b699>${ssrInterpolate(unref(printError))}</span></div>`);
				} else _push(`<!---->`);
				_push(`<article class="history-sheet" aria-label="Patient medical history" data-v-b144b699><header class="patient-summary" data-v-b144b699><div class="patient-avatar" aria-hidden="true" data-v-b144b699>`);
				_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-user-round" }, null, _parent));
				_push(`</div><div class="patient-heading" data-v-b144b699><p data-v-b144b699>Patient</p><h2 data-v-b144b699><bdi data-v-b144b699>${ssrInterpolate(unref(patient).name)}</bdi></h2></div><div class="patient-code" data-v-b144b699><span data-v-b144b699>Patient code</span><strong dir="ltr" data-v-b144b699><bdi data-v-b144b699>${ssrInterpolate(unref(patient).code)}</bdi></strong></div><dl class="patient-demographics" data-v-b144b699><div data-v-b144b699><dt data-v-b144b699>Age</dt><dd data-v-b144b699>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(patient).age))} years</dd></div><div data-v-b144b699><dt data-v-b144b699>Gender</dt><dd data-v-b144b699>${ssrInterpolate(genders[unref(patient).gender] || unref(patient).gender)}</dd></div><div data-v-b144b699><dt data-v-b144b699>Phone</dt><dd dir="ltr" data-v-b144b699><bdi data-v-b144b699>${ssrInterpolate(unref(patient).phone || "—")}</bdi></dd></div><div data-v-b144b699><dt data-v-b144b699>Address</dt><dd data-v-b144b699><bdi data-v-b144b699>${ssrInterpolate(unref(patient).address || "—")}</bdi></dd></div></dl></header><section class="visit-section" aria-labelledby="visits-title" data-v-b144b699><header class="section-heading" data-v-b144b699><div data-v-b144b699><span class="section-icon" data-v-b144b699>`);
				_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-notebook-tabs" }, null, _parent));
				_push(`</span><div data-v-b144b699><h2 id="visits-title" data-v-b144b699>Visit history</h2><p data-v-b144b699>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(visits).length))} ${ssrInterpolate(unref(visits).length === 1 ? "visit" : "visits")} on record</p></div></div></header>`);
				if (unref(visits).length) {
					_push(`<div class="visit-list" data-v-b144b699><!--[-->`);
					ssrRenderList$2(unref(visits), (visit, index) => {
						_push(`<article class="visit-card" data-v-b144b699><button class="visit-toggle" type="button"${ssrRenderAttr("aria-expanded", unref(expandedVisit) === visit.id)}${ssrRenderAttr("aria-controls", "visit-detail-" + visit.id)} data-v-b144b699><span class="visit-number" data-v-b144b699>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(visits).length - index))}</span><span class="visit-summary" data-v-b144b699><strong data-v-b144b699>${ssrInterpolate(("formatDateTime" in _ctx ? _ctx.formatDateTime : unref(formatDateTime))(visit.recordedAtUtc))}</strong><small data-v-b144b699>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(visit.medicationCount))} medications <span aria-hidden="true" data-v-b144b699>·</span> BP ${ssrInterpolate(visit.bloodPressure || "—")}</small></span>`);
						_push(ssrRenderComponent(_component_UIcon, {
							name: unref(expandedVisit) === visit.id ? "i-lucide-chevron-up" : "i-lucide-chevron-down",
							class: "visit-chevron",
							"aria-hidden": "true"
						}, null, _parent));
						_push(`</button>`);
						if (unref(expandedVisit) === visit.id || unref(printing)) {
							_push(`<div${ssrRenderAttr("id", "visit-detail-" + visit.id)} class="visit-detail" data-v-b144b699>`);
							if (unref(loadingDetails).includes(visit.id)) {
								_push(`<div class="detail-loading" role="status" data-v-b144b699>`);
								_push(ssrRenderComponent(_component_UIcon, {
									name: "i-lucide-loader-circle",
									class: "animate-spin"
								}, null, _parent));
								_push(`Loading visit details…</div>`);
							} else if (unref(details)[visit.id]) {
								_push(`<!--[--><dl class="visit-vitals" data-v-b144b699><div data-v-b144b699><dt data-v-b144b699>Blood pressure</dt><dd data-v-b144b699>${ssrInterpolate(unref(details)[visit.id].bloodPressure || "—")}</dd></div><div data-v-b144b699><dt data-v-b144b699>Recorded</dt><dd data-v-b144b699>${ssrInterpolate(("formatDateTime" in _ctx ? _ctx.formatDateTime : unref(formatDateTime))(unref(details)[visit.id].recordedAtUtc))}</dd></div></dl>`);
								if (unref(details)[visit.id].prescriptionItems.length) {
									_push(`<section class="detail-group" data-v-b144b699><h3 data-v-b144b699>`);
									_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-capsule" }, null, _parent));
									_push(` Medications</h3><div class="medication-table-wrap" data-v-b144b699><table class="medication-table" data-v-b144b699><thead data-v-b144b699><tr data-v-b144b699><th data-v-b144b699>#</th><th data-v-b144b699>Medication</th><th data-v-b144b699>Type</th><th data-v-b144b699>Dose</th><th data-v-b144b699>Frequency</th><th data-v-b144b699>Duration</th></tr></thead><tbody data-v-b144b699><!--[-->`);
									ssrRenderList$2(unref(details)[visit.id].prescriptionItems, (item) => {
										_push(`<tr data-v-b144b699><td data-v-b144b699>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.position))}</td><td data-v-b144b699><bdi data-v-b144b699>${ssrInterpolate(item.medicationName)}</bdi></td><td data-v-b144b699>${ssrInterpolate(item.medicationType)}</td><td data-v-b144b699>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.dose))}</td><td data-v-b144b699>${ssrInterpolate(item.frequency)}</td><td data-v-b144b699>${ssrInterpolate(item.duration)}</td></tr>`);
									});
									_push(`<!--]--></tbody></table></div></section>`);
								} else _push(`<!---->`);
								if (unref(details)[visit.id].clinicalNotes.length) {
									_push(`<section class="detail-group" data-v-b144b699><h3 data-v-b144b699>`);
									_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-clipboard-list" }, null, _parent));
									_push(` Clinical notes</h3><p data-v-b144b699>${ssrInterpolate(unref(details)[visit.id].clinicalNotes.map((item) => item.text).join(", "))}</p></section>`);
								} else _push(`<!---->`);
								if (unref(details)[visit.id].additionalInstructionItems.length || unref(details)[visit.id].additionalInstructions) {
									_push(`<section class="detail-group" data-v-b144b699><h3 data-v-b144b699>`);
									_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-info" }, null, _parent));
									_push(` Additional instructions</h3><p data-v-b144b699>${ssrInterpolate([...unref(details)[visit.id].additionalInstructionItems.map((item) => item.text), ...unref(details)[visit.id].additionalInstructions ? [unref(details)[visit.id].additionalInstructions] : []].join(", "))}</p></section>`);
								} else _push(`<!---->`);
								if (unref(details)[visit.id].diagnostics.length) {
									_push(`<section class="detail-group" data-v-b144b699><h3 data-v-b144b699>`);
									_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-microscope" }, null, _parent));
									_push(` Diagnostics</h3><p data-v-b144b699>${ssrInterpolate(unref(details)[visit.id].diagnostics.map((item) => item.text).join(", "))}</p></section>`);
								} else _push(`<!---->`);
								if (unref(details)[visit.id].investigations.length) {
									_push(`<section class="detail-group" data-v-b144b699><h3 data-v-b144b699>`);
									_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-microscope" }, null, _parent));
									_push(` Investigations</h3><p data-v-b144b699>${ssrInterpolate(unref(details)[visit.id].investigations.map((item) => item.text).join(", "))}</p></section>`);
								} else _push(`<!---->`);
								_push(ssrRenderComponent(_component_UButton, {
									to: "/treatments/" + visit.id + "/print",
									color: "neutral",
									variant: "outline",
									icon: "i-lucide-file-text",
									class: "visit-prescription-link"
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(`Open prescription`);
										else return [createTextVNode("Open prescription")];
									}),
									_: 2
								}, _parent));
								_push(`<!--]-->`);
							} else _push(`<!---->`);
							_push(`</div>`);
						} else _push(`<!---->`);
						_push(`</article>`);
					});
					_push(`<!--]--></div>`);
				} else {
					_push(`<div class="history-empty" data-v-b144b699><span data-v-b144b699>`);
					_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-calendar-x" }, null, _parent));
					_push(`</span><h3 data-v-b144b699>No visit history yet</h3><p data-v-b144b699>Treatments recorded for this patient will appear here.</p></div>`);
				}
				_push(`</section><footer class="history-print-footer" data-v-b144b699><span data-v-b144b699>RoghtiaSystem · Patient medical history</span>`);
				if (unref(printTimestamp)) _push(`<span data-v-b144b699>Printed ${ssrInterpolate(unref(printTimestamp))}</span>`);
				else _push(`<!---->`);
				_push(`</footer></article><!--]-->`);
			} else _push(`<!---->`);
			_push(`</section>`);
		};
	}
});
// app/pages/patient-history/[id].vue
var _sfc_setup = _id__vue_vue_type_script_setup_true_lang_default.setup;
_id__vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/patient-history/[id].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _id__default = /*#__PURE__*/ _plugin_vue_export_helper_default(_id__vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-b144b699"]]);

export { _id__default as default };;globalThis.__timing__.logEnd('Load chunks/build/_id_-DwxwzMdv');
//# sourceMappingURL=_id_-DwxwzMdv.mjs.map
