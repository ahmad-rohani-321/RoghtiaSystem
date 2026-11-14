globalThis.__timing__.logStart('Load chunks/build/treatments-B2hrRNpk');import { a as useHead, e as useAuth, K as useToast, _ as _sfc_main, b as _sfc_main$5, s as ssrRenderList$2, n as navigateTo, M as renderList$2 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './Input-Bs-tvl7x.mjs';
import { D as DatePicker_default } from './DatePicker-CL2BV2YH.mjs';
import { _ as _sfc_main$2 } from './Modal-BsBsKz59.mjs';
import { g as gregorianToday, l as localNumber, a as formatDate, f as formatDateTime } from './useDateFormatting-PLtQ78bC.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-DjkACiAr.mjs';
import { u as useTreatments } from './useTreatments-BArmYU3I.mjs';
import { defineComponent, ref, shallowRef, computed, watch, withAsyncContext, mergeProps, withCtx, createTextVNode, unref, toDisplayString, isRef, useModel, openBlock, createBlock, createVNode, Fragment, createCommentVNode, mergeModels, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
import './namespaced-Bh7Kc29b.mjs';
import './useKbd-CRGZM3iV.mjs';
import './useDirection-CEwcIFDz.mjs';
import './PopperArrow-XrulOaaZ.mjs';
import '@floating-ui/vue';
import './overlay-BJM8aJ6z.mjs';
import 'aria-hidden';
import './RovingFocusGroup-DrT9jF6a.mjs';
import './utils-BKhy4VZo.mjs';
import './useId-BkktAd0v.mjs';
import '@internationalized/date';

// app/components/TreatmentDetail.vue?vue&type=script&setup=true&lang.ts
var TreatmentDetail_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "TreatmentDetail",
	__ssrInlineRender: true,
	props: /*@__PURE__*/ mergeModels({ treatment: {} }, {
		"open": {
			type: Boolean,
			default: false
		},
		"openModifiers": {}
	}),
	emits: ["update:open"],
	setup(__props) {
		const open = useModel(__props, "open");
		const props = __props;
		const genders = {
			Male: "Male",
			Female: "Female",
			Other: "Other"
		};
		const recordedDate = computed(() => props.treatment ? formatDateTime(props.treatment.recordedAtUtc) : "");
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$2, mergeProps({
				open: open.value,
				"onUpdate:open": ($event) => open.value = $event,
				title: "Treatment details",
				description: "Saved information and prescription",
				dir: "ltr",
				ui: {
					content: "w-[min(880px,calc(100vw-1.5rem))] max-w-none min-w-0",
					body: "min-w-0"
				}
			}, _attrs), {
				body: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (__props.treatment) {
							_push(`<div class="treatment-detail" data-v-41588deb${_scopeId}><div class="detail-header" data-v-41588deb${_scopeId}><div data-v-41588deb${_scopeId}><h3 data-v-41588deb${_scopeId}><bdi data-v-41588deb${_scopeId}>${ssrInterpolate(__props.treatment.patient.name)}</bdi></h3><p data-v-41588deb${_scopeId}>${ssrInterpolate(__props.treatment.patient.code)} · ${ssrInterpolate(unref(recordedDate))}</p></div><span class="detail-badge" data-v-41588deb${_scopeId}>Treatments #${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(__props.treatment.id))}</span></div><dl class="detail-facts" data-v-41588deb${_scopeId}><div data-v-41588deb${_scopeId}><dt data-v-41588deb${_scopeId}>Age</dt><dd data-v-41588deb${_scopeId}>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(__props.treatment.patient.age))} years</dd></div><div data-v-41588deb${_scopeId}><dt data-v-41588deb${_scopeId}>Gender</dt><dd data-v-41588deb${_scopeId}>${ssrInterpolate(genders[__props.treatment.patient.gender] || __props.treatment.patient.gender)}</dd></div><div data-v-41588deb${_scopeId}><dt data-v-41588deb${_scopeId}>Phone</dt><dd dir="ltr" data-v-41588deb${_scopeId}>${ssrInterpolate(__props.treatment.patient.phone || "—")}</dd></div><div data-v-41588deb${_scopeId}><dt data-v-41588deb${_scopeId}>Blood pressure</dt><dd dir="ltr" data-v-41588deb${_scopeId}>${ssrInterpolate(__props.treatment.bloodPressure || "—")}</dd></div></dl>`);
							if (__props.treatment.clinicalNotes.length) {
								_push(`<div class="detail-notes" data-v-41588deb${_scopeId}><h4 data-v-41588deb${_scopeId}>Clinical notes</h4><div data-v-41588deb${_scopeId}><!--[-->`);
								ssrRenderList$2(__props.treatment.clinicalNotes, (note) => {
									_push(`<span data-v-41588deb${_scopeId}>${ssrInterpolate(note.text)}</span>`);
								});
								_push(`<!--]--></div></div>`);
							} else _push(`<!---->`);
							if (__props.treatment.additionalInstructions) _push(`<div class="detail-notes" data-v-41588deb${_scopeId}><h4 data-v-41588deb${_scopeId}>Additional instructions</h4><p class="additional-instructions" data-v-41588deb${_scopeId}>${ssrInterpolate(__props.treatment.additionalInstructions)}</p></div>`);
							else _push(`<!---->`);
							if (__props.treatment.diagnostics?.length || !__props.treatment.diagnostics?.length && !__props.treatment.investigations?.length && __props.treatment.diagnosticInvestigations.length) {
								_push(`<div class="detail-notes" data-v-41588deb${_scopeId}><h4 data-v-41588deb${_scopeId}>Diagnostics</h4><div data-v-41588deb${_scopeId}><!--[-->`);
								ssrRenderList$2(__props.treatment.diagnostics?.length || __props.treatment.investigations?.length ? __props.treatment.diagnostics || [] : __props.treatment.diagnosticInvestigations, (item) => {
									_push(`<span data-v-41588deb${_scopeId}>${ssrInterpolate(item.text)}</span>`);
								});
								_push(`<!--]--></div></div>`);
							} else _push(`<!---->`);
							if (__props.treatment.investigations?.length) {
								_push(`<div class="detail-notes" data-v-41588deb${_scopeId}><h4 data-v-41588deb${_scopeId}>Investigations</h4><div data-v-41588deb${_scopeId}><!--[-->`);
								ssrRenderList$2(__props.treatment.investigations, (item) => {
									_push(`<span data-v-41588deb${_scopeId}>${ssrInterpolate(item.text)}</span>`);
								});
								_push(`<!--]--></div></div>`);
							} else _push(`<!---->`);
							_push(`<div class="detail-medicines" data-v-41588deb${_scopeId}><h4 data-v-41588deb${_scopeId}>Prescription</h4>`);
							if (__props.treatment.prescriptionItems.length) {
								_push(`<div class="detail-table-wrap" data-v-41588deb${_scopeId}><table data-v-41588deb${_scopeId}><thead data-v-41588deb${_scopeId}><tr data-v-41588deb${_scopeId}><th data-v-41588deb${_scopeId}>No.</th><th data-v-41588deb${_scopeId}>Medications</th><th data-v-41588deb${_scopeId}>Type</th><th data-v-41588deb${_scopeId}>Dose</th><th data-v-41588deb${_scopeId}>Frequency</th><th data-v-41588deb${_scopeId}>Duration</th></tr></thead><tbody data-v-41588deb${_scopeId}><!--[-->`);
								ssrRenderList$2(__props.treatment.prescriptionItems, (item) => {
									_push(`<tr data-v-41588deb${_scopeId}><td data-v-41588deb${_scopeId}>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.position))}</td><td data-v-41588deb${_scopeId}><bdi data-v-41588deb${_scopeId}>${ssrInterpolate(item.medicationName)}</bdi></td><td data-v-41588deb${_scopeId}>${ssrInterpolate(item.medicationType)}</td><td data-v-41588deb${_scopeId}>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.dose))}</td><td data-v-41588deb${_scopeId}>${ssrInterpolate(item.frequency)}</td><td data-v-41588deb${_scopeId}>${ssrInterpolate(item.duration)}</td></tr>`);
								});
								_push(`<!--]--></tbody></table></div>`);
							} else _push(`<p class="detail-empty" data-v-41588deb${_scopeId}>No medications prescribed for this treatment.</p>`);
							_push(`</div></div>`);
						} else _push(`<!---->`);
					} else return [__props.treatment ? (openBlock(), createBlock("div", {
						key: 0,
						class: "treatment-detail"
					}, [
						createVNode("div", { class: "detail-header" }, [createVNode("div", null, [createVNode("h3", null, [createVNode("bdi", null, toDisplayString(__props.treatment.patient.name), 1)]), createVNode("p", null, toDisplayString(__props.treatment.patient.code) + " · " + toDisplayString(unref(recordedDate)), 1)]), createVNode("span", { class: "detail-badge" }, "Treatments #" + toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(__props.treatment.id)), 1)]),
						createVNode("dl", { class: "detail-facts" }, [
							createVNode("div", null, [createVNode("dt", null, "Age"), createVNode("dd", null, toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(__props.treatment.patient.age)) + " years", 1)]),
							createVNode("div", null, [createVNode("dt", null, "Gender"), createVNode("dd", null, toDisplayString(genders[__props.treatment.patient.gender] || __props.treatment.patient.gender), 1)]),
							createVNode("div", null, [createVNode("dt", null, "Phone"), createVNode("dd", { dir: "ltr" }, toDisplayString(__props.treatment.patient.phone || "—"), 1)]),
							createVNode("div", null, [createVNode("dt", null, "Blood pressure"), createVNode("dd", { dir: "ltr" }, toDisplayString(__props.treatment.bloodPressure || "—"), 1)])
						]),
						__props.treatment.clinicalNotes.length ? (openBlock(), createBlock("div", {
							key: 0,
							class: "detail-notes"
						}, [createVNode("h4", null, "Clinical notes"), createVNode("div", null, [(openBlock(true), createBlock(Fragment, null, renderList$2(__props.treatment.clinicalNotes, (note) => {
							return openBlock(), createBlock("span", { key: note.id }, toDisplayString(note.text), 1);
						}), 128))])])) : createCommentVNode("", true),
						__props.treatment.additionalInstructions ? (openBlock(), createBlock("div", {
							key: 1,
							class: "detail-notes"
						}, [createVNode("h4", null, "Additional instructions"), createVNode("p", { class: "additional-instructions" }, toDisplayString(__props.treatment.additionalInstructions), 1)])) : createCommentVNode("", true),
						__props.treatment.diagnostics?.length || !__props.treatment.diagnostics?.length && !__props.treatment.investigations?.length && __props.treatment.diagnosticInvestigations.length ? (openBlock(), createBlock("div", {
							key: 2,
							class: "detail-notes"
						}, [createVNode("h4", null, "Diagnostics"), createVNode("div", null, [(openBlock(true), createBlock(Fragment, null, renderList$2(__props.treatment.diagnostics?.length || __props.treatment.investigations?.length ? __props.treatment.diagnostics || [] : __props.treatment.diagnosticInvestigations, (item) => {
							return openBlock(), createBlock("span", { key: item.id }, toDisplayString(item.text), 1);
						}), 128))])])) : createCommentVNode("", true),
						__props.treatment.investigations?.length ? (openBlock(), createBlock("div", {
							key: 3,
							class: "detail-notes"
						}, [createVNode("h4", null, "Investigations"), createVNode("div", null, [(openBlock(true), createBlock(Fragment, null, renderList$2(__props.treatment.investigations, (item) => {
							return openBlock(), createBlock("span", { key: item.id }, toDisplayString(item.text), 1);
						}), 128))])])) : createCommentVNode("", true),
						createVNode("div", { class: "detail-medicines" }, [createVNode("h4", null, "Prescription"), __props.treatment.prescriptionItems.length ? (openBlock(), createBlock("div", {
							key: 0,
							class: "detail-table-wrap"
						}, [createVNode("table", null, [createVNode("thead", null, [createVNode("tr", null, [
							createVNode("th", null, "No."),
							createVNode("th", null, "Medications"),
							createVNode("th", null, "Type"),
							createVNode("th", null, "Dose"),
							createVNode("th", null, "Frequency"),
							createVNode("th", null, "Duration")
						])]), createVNode("tbody", null, [(openBlock(true), createBlock(Fragment, null, renderList$2(__props.treatment.prescriptionItems, (item) => {
							return openBlock(), createBlock("tr", { key: item.id }, [
								createVNode("td", null, toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.position)), 1),
								createVNode("td", null, [createVNode("bdi", null, toDisplayString(item.medicationName), 1)]),
								createVNode("td", null, toDisplayString(item.medicationType), 1),
								createVNode("td", null, toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.dose)), 1),
								createVNode("td", null, toDisplayString(item.frequency), 1),
								createVNode("td", null, toDisplayString(item.duration), 1)
							]);
						}), 128))])])])) : (openBlock(), createBlock("p", {
							key: 1,
							class: "detail-empty"
						}, "No medications prescribed for this treatment."))])
					])) : createCommentVNode("", true)];
				}),
				_: 1
			}, _parent));
		};
	}
});
// app/components/TreatmentDetail.vue
var _sfc_setup$2 = TreatmentDetail_vue_vue_type_script_setup_true_lang_default.setup;
TreatmentDetail_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TreatmentDetail.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var TreatmentDetail_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(TreatmentDetail_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-41588deb"]]), { __name: "TreatmentDetail" });
// app/components/TreatmentListing.vue?vue&type=script&setup=true&lang.ts
var pageSize = 10;
var TreatmentListing_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "TreatmentListing",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const api = useTreatments();
		const auth = useAuth();
		const toast = useToast();
		const mode = ref("today");
		const selectedDate = shallowRef(gregorianToday());
		const patientName = ref("");
		const appliedName = ref("");
		const page = ref(1);
		const result = ref({
			items: [],
			total: 0,
			page: 1,
			pageSize
		});
		const loading = ref(true);
		const loaded = ref(false);
		const errorMessage = ref("");
		const detail = ref(null);
		const detailOpen = ref(false);
		const detailLoadingId = ref(null);
		const totalPages = computed(() => Math.max(1, Math.ceil(result.value.total / pageSize)));
		let sequence = 0;
		let searchTimer;
		function dateRange() {
			const date = mode.value === "today" ? gregorianToday() : selectedDate.value;
			let start = date;
			if (mode.value === "week") {
				const weekday = new Date(date.toDate("Asia/Kabul").getTime() + 162e5).getUTCDay();
				start = date.subtract({ days: (weekday + 1) % 7 });
			} else if (mode.value === "month") start = date.set({ day: 1 });
			const end = mode.value === "month" ? start.add({ months: 1 }) : start.add({ days: mode.value === "week" ? 7 : 1 });
			return {
				fromUtc: start.toDate("Asia/Kabul").toISOString(),
				toUtc: end.toDate("Asia/Kabul").toISOString()
			};
		}
		async function load() {
			const current = ++sequence;
			const userId = auth.user.value?.id;
			loading.value = true;
			errorMessage.value = "";
			try {
				const response = await api.list({
					page: page.value,
					pageSize,
					patientName: appliedName.value,
					...dateRange()
				});
				if (current !== sequence || userId !== auth.user.value?.id) return;
				result.value = response;
				loaded.value = true;
				if (page.value > totalPages.value) {
					page.value = totalPages.value;
					await load();
				}
			} catch (error) {
				if (current !== sequence || userId !== auth.user.value?.id) return;
				const failure = error;
				if ((failure.statusCode || failure.status) === 401) {
					toast.add({
						title: "Sign in again",
						description: "Your session has expired.",
						color: "warning"
					});
					await navigateTo("/login");
					return;
				}
				errorMessage.value = "Unable to load treatments. Please try again.";
			} finally {
				if (current === sequence) loading.value = false;
			}
		}
		function changeMode(value) {
			mode.value = value;
			page.value = 1;
			load();
		}
		function changePage(value) {
			if (value < 1 || value > totalPages.value || loading.value) return;
			page.value = value;
			load();
		}
		function applyName() {
			clearTimeout(searchTimer);
			appliedName.value = patientName.value.trim();
			page.value = 1;
			load();
		}
		function moveDay(days) {
			selectedDate.value = selectedDate.value.add({ days });
		}
		async function showDetail(item) {
			if (detailLoadingId.value !== null) return;
			detailLoadingId.value = item.id;
			try {
				detail.value = await api.get(item.id);
				detailOpen.value = true;
			} catch (error) {
				const failure = error;
				if ((failure.statusCode || failure.status) === 401) await navigateTo("/login");
				else toast.add({
					title: "Unable to load details",
					description: "Please try again.",
					color: "error"
				});
			} finally {
				detailLoadingId.value = null;
			}
		}
		watch(selectedDate, () => {
			if (mode.value !== "today") {
				page.value = 1;
				load();
			}
		});
		watch(patientName, () => {
			clearTimeout(searchTimer);
			if (patientName.value.trim() !== appliedName.value) searchTimer = setTimeout(applyName, 350);
		});
		watch(() => auth.user.value?.id, () => {
			++sequence;
			result.value = {
				items: [],
				total: 0,
				page: 1,
				pageSize
			};
			detail.value = null;
			detailOpen.value = false;
			load();
		});
		[__temp, __restore] = withAsyncContext(() => load()), await __temp, __restore();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UButton = _sfc_main;
			const _component_UIcon = _sfc_main$5;
			const _component_UInput = _sfc_main$1;
			const _component_DatePicker = DatePicker_default;
			const _component_TreatmentDetail = TreatmentDetail_default;
			_push(`<section${ssrRenderAttrs(mergeProps({
				class: "treatment-list",
				"aria-label": "Treatments"
			}, _attrs))} data-v-9670c61c><header class="page-heading" data-v-9670c61c><div data-v-9670c61c><div class="eyebrow" data-v-9670c61c><span data-v-9670c61c></span> Patient care</div><h1 data-v-9670c61c>Treatments</h1><p data-v-9670c61c>View patient treatments and record a new treatment.</p></div>`);
			_push(ssrRenderComponent(_component_UButton, {
				to: "/treatments/new",
				icon: "i-lucide-plus",
				size: "lg",
				class: "new-button"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`New treatment`);
					else return [createTextVNode("New treatment")];
				}),
				_: 1
			}, _parent));
			_push(`</header><section class="panel list-panel" aria-label="Treatment list"${ssrRenderAttr("aria-busy", unref(loading))} data-v-9670c61c><div class="filter-area" data-v-9670c61c><div class="filter-heading" data-v-9670c61c><span class="filter-icon" data-v-9670c61c>`);
			_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-stethoscope" }, null, _parent));
			_push(`</span><div data-v-9670c61c><h2 data-v-9670c61c>Treatment list</h2><p aria-live="polite" data-v-9670c61c>${ssrInterpolate(unref(loaded) ? `${("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(result).total)} records` : "Loading records")}</p></div></div><div class="range-buttons" role="group" aria-label="Date filter" data-v-9670c61c><!--[-->`);
			ssrRenderList$2([
				["today", "Today"],
				["date", "Specific date"],
				["day", "Day"],
				["week", "Week"],
				["month", "Month"]
			], (option) => {
				_push(ssrRenderComponent(_component_UButton, {
					key: option[0],
					type: "button",
					size: "sm",
					color: unref(mode) === option[0] ? "primary" : "neutral",
					variant: unref(mode) === option[0] ? "solid" : "ghost",
					"aria-pressed": unref(mode) === option[0],
					onClick: ($event) => changeMode(option[0])
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(option[1])}`);
						else return [createTextVNode(toDisplayString(option[1]), 1)];
					}),
					_: 2
				}, _parent));
			});
			_push(`<!--]--></div><div class="filter-controls" data-v-9670c61c><form class="name-search" role="search" data-v-9670c61c>`);
			_push(ssrRenderComponent(_component_UInput, {
				modelValue: unref(patientName),
				"onUpdate:modelValue": ($event) => isRef(patientName) ? patientName.value = $event : null,
				icon: "i-lucide-search",
				placeholder: "Search patient name",
				"aria-label": "Patient name",
				maxlength: 200,
				size: "lg",
				class: "w-full"
			}, null, _parent));
			_push(ssrRenderComponent(_component_UButton, {
				type: "submit",
				color: "neutral",
				variant: "outline",
				size: "lg"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Search`);
					else return [createTextVNode("Search")];
				}),
				_: 1
			}, _parent));
			_push(`</form>`);
			if (unref(mode) !== "today") {
				_push(`<div class="date-controls" data-v-9670c61c>`);
				if (unref(mode) === "day") _push(ssrRenderComponent(_component_UButton, {
					type: "button",
					icon: "i-lucide-chevron-left",
					color: "neutral",
					variant: "outline",
					"aria-label": "Previous day",
					onClick: ($event) => moveDay(-1)
				}, null, _parent));
				else _push(`<!---->`);
				_push(ssrRenderComponent(_component_DatePicker, {
					modelValue: unref(selectedDate),
					"onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null
				}, null, _parent));
				if (unref(mode) === "day") _push(ssrRenderComponent(_component_UButton, {
					type: "button",
					icon: "i-lucide-chevron-right",
					color: "neutral",
					variant: "outline",
					"aria-label": "Next day",
					onClick: ($event) => moveDay(1)
				}, null, _parent));
				else _push(`<!---->`);
				_push(`</div>`);
			} else _push(`<span class="today-label" data-v-9670c61c>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(("gregorianToday" in _ctx ? _ctx.gregorianToday : unref(gregorianToday))()))}</span>`);
			_push(`</div></div>`);
			if (unref(errorMessage)) {
				_push(`<div class="list-error" role="alert" data-v-9670c61c>`);
				_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-circle-alert" }, null, _parent));
				_push(`<span data-v-9670c61c>${ssrInterpolate(unref(errorMessage))}</span>`);
				_push(ssrRenderComponent(_component_UButton, {
					color: "neutral",
					variant: "outline",
					onClick: load
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Try again`);
						else return [createTextVNode("Try again")];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else _push(`<!---->`);
			if (unref(loading)) {
				_push(`<div class="list-state" role="status" data-v-9670c61c>`);
				_push(ssrRenderComponent(_component_UIcon, {
					name: "i-lucide-loader-circle",
					class: "animate-spin"
				}, null, _parent));
				_push(`<p data-v-9670c61c>Loading information…</p></div>`);
			} else if (unref(loaded) && unref(result).items.length) {
				_push(`<!--[--><div class="table-wrap" data-v-9670c61c><table data-v-9670c61c><caption class="sr-only" data-v-9670c61c>Recorded treatments</caption><thead data-v-9670c61c><tr data-v-9670c61c><th data-v-9670c61c>Patient</th><th data-v-9670c61c>Code</th><th data-v-9670c61c>Date</th><th data-v-9670c61c>Blood pressure</th><th data-v-9670c61c>Medications</th><th data-v-9670c61c>Notes</th><th data-v-9670c61c><span class="sr-only" data-v-9670c61c>Actions</span></th></tr></thead><tbody data-v-9670c61c><!--[-->`);
				ssrRenderList$2(unref(result).items, (item) => {
					_push(`<tr data-v-9670c61c><td data-v-9670c61c><strong data-v-9670c61c><bdi data-v-9670c61c>${ssrInterpolate(item.patient.name)}</bdi></strong></td><td data-v-9670c61c>${ssrInterpolate(item.patient.code)}</td><td data-v-9670c61c>${ssrInterpolate(("formatDateTime" in _ctx ? _ctx.formatDateTime : unref(formatDateTime))(item.recordedAtUtc))}</td><td dir="ltr" data-v-9670c61c>${ssrInterpolate(item.bloodPressure || "—")}</td><td data-v-9670c61c>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.medicationCount))}</td><td data-v-9670c61c>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.clinicalNoteCount))}</td><td data-v-9670c61c><div class="row-actions" data-v-9670c61c>`);
					_push(ssrRenderComponent(_component_UButton, {
						type: "button",
						color: "neutral",
						variant: "ghost",
						icon: "i-lucide-eye",
						loading: unref(detailLoadingId) === item.id,
						disabled: unref(detailLoadingId) !== null,
						onClick: ($event) => showDetail(item)
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`Details`);
							else return [createTextVNode("Details")];
						}),
						_: 2
					}, _parent));
					_push(ssrRenderComponent(_component_UButton, {
						to: `/treatments/${item.id}/edit`,
						color: "neutral",
						variant: "ghost",
						icon: "i-lucide-pencil-line"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`Edit`);
							else return [createTextVNode("Edit")];
						}),
						_: 2
					}, _parent));
					_push(ssrRenderComponent(_component_UButton, {
						to: `/treatments/${item.id}/print`,
						color: "neutral",
						variant: "ghost",
						icon: "i-lucide-printer"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`Print`);
							else return [createTextVNode("Print")];
						}),
						_: 2
					}, _parent));
					_push(`</div></td></tr>`);
				});
				_push(`<!--]--></tbody></table></div><div class="mobile-list" data-v-9670c61c><!--[-->`);
				ssrRenderList$2(unref(result).items, (item) => {
					_push(`<article class="treatment-card" data-v-9670c61c><header data-v-9670c61c><div data-v-9670c61c><h3 data-v-9670c61c><bdi data-v-9670c61c>${ssrInterpolate(item.patient.name)}</bdi></h3><p data-v-9670c61c>${ssrInterpolate(item.patient.code)} · ${ssrInterpolate(("formatDateTime" in _ctx ? _ctx.formatDateTime : unref(formatDateTime))(item.recordedAtUtc))}</p></div><span class="medicine-count" data-v-9670c61c>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.medicationCount))} Medications</span></header><div class="card-meta" data-v-9670c61c><span data-v-9670c61c>BP: <bdi dir="ltr" data-v-9670c61c>${ssrInterpolate(item.bloodPressure || "—")}</bdi></span><span data-v-9670c61c>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.clinicalNoteCount))} Notes</span></div><div class="card-actions" data-v-9670c61c>`);
					_push(ssrRenderComponent(_component_UButton, {
						type: "button",
						color: "neutral",
						variant: "outline",
						icon: "i-lucide-eye",
						loading: unref(detailLoadingId) === item.id,
						disabled: unref(detailLoadingId) !== null,
						onClick: ($event) => showDetail(item)
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`Details`);
							else return [createTextVNode("Details")];
						}),
						_: 2
					}, _parent));
					_push(ssrRenderComponent(_component_UButton, {
						to: `/treatments/${item.id}/edit`,
						color: "neutral",
						variant: "outline",
						icon: "i-lucide-pencil-line"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`Edit`);
							else return [createTextVNode("Edit")];
						}),
						_: 2
					}, _parent));
					_push(ssrRenderComponent(_component_UButton, {
						to: `/treatments/${item.id}/print`,
						color: "neutral",
						variant: "outline",
						icon: "i-lucide-printer"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`Print`);
							else return [createTextVNode("Print")];
						}),
						_: 2
					}, _parent));
					_push(`</div></article>`);
				});
				_push(`<!--]--></div><footer class="list-footer" data-v-9670c61c><span data-v-9670c61c>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))((unref(page) - 1) * pageSize + 1))}–${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))((unref(page) - 1) * pageSize + unref(result).items.length))} of ${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(result).total))}</span><nav aria-label="pages" data-v-9670c61c>`);
				_push(ssrRenderComponent(_component_UButton, {
					icon: "i-lucide-chevron-left",
					color: "neutral",
					variant: "outline",
					disabled: unref(page) <= 1 || unref(loading),
					"aria-label": "Previous page",
					onClick: ($event) => changePage(unref(page) - 1)
				}, null, _parent));
				_push(`<span data-v-9670c61c>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(page)))} / ${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(totalPages)))}</span>`);
				_push(ssrRenderComponent(_component_UButton, {
					icon: "i-lucide-chevron-right",
					color: "neutral",
					variant: "outline",
					disabled: unref(page) >= unref(totalPages) || unref(loading),
					"aria-label": "Next page",
					onClick: ($event) => changePage(unref(page) + 1)
				}, null, _parent));
				_push(`</nav></footer><!--]-->`);
			} else if (unref(loaded) && !unref(errorMessage)) {
				_push(`<div class="list-state" data-v-9670c61c><span class="empty-icon" data-v-9670c61c>`);
				_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-clipboard-list" }, null, _parent));
				_push(`</span><h3 data-v-9670c61c>${ssrInterpolate(unref(appliedName) ? "Patient not found" : "No treatments in this period")}</h3><p data-v-9670c61c>${ssrInterpolate(unref(appliedName) ? "Try another name or change the date range." : "Record a new treatment or choose another date.")}</p>`);
				_push(ssrRenderComponent(_component_UButton, {
					to: "/treatments/new",
					icon: "i-lucide-plus"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`New treatment`);
						else return [createTextVNode("New treatment")];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else _push(`<!---->`);
			_push(`</section>`);
			if (unref(detail)) _push(ssrRenderComponent(_component_TreatmentDetail, {
				open: unref(detailOpen),
				"onUpdate:open": ($event) => isRef(detailOpen) ? detailOpen.value = $event : null,
				treatment: unref(detail)
			}, null, _parent));
			else _push(`<!---->`);
			_push(`</section>`);
		};
	}
});
// app/components/TreatmentListing.vue
var _sfc_setup$1 = TreatmentListing_vue_vue_type_script_setup_true_lang_default.setup;
TreatmentListing_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TreatmentListing.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var TreatmentListing_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(TreatmentListing_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-9670c61c"]]), { __name: "TreatmentListing" });
// app/pages/treatments/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		useHead({ title: "Treatments — RoghtiaSystem" });
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(TreatmentListing_default, _attrs, null, _parent));
		};
	}
});
// app/pages/treatments/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/treatments/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var treatments_default = index_vue_vue_type_script_setup_true_lang_default;

export { treatments_default as default };;globalThis.__timing__.logEnd('Load chunks/build/treatments-B2hrRNpk');
//# sourceMappingURL=treatments-B2hrRNpk.mjs.map
