globalThis.__timing__.logStart('Load chunks/build/medications-DYyg72-H');import { a as useHead, e as useAuth, K as useToast, L as useNuxtApp, _ as _sfc_main, b as _sfc_main$5, s as ssrRenderList$2, n as navigateTo, M as renderList$2 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './Input-Bs-tvl7x.mjs';
import { _ as _sfc_main$2 } from './Modal-BsBsKz59.mjs';
import { _ as _sfc_main$3 } from './Form-DKt9N6vo.mjs';
import { _ as _sfc_main$4 } from './FormField-WNpvFFAW.mjs';
import { u as useMedications, _ as _sfc_main$6 } from './useMedications-KL-k4pZy.mjs';
import { _ as _sfc_main$7 } from './Textarea-DcsECgx9.mjs';
import { l as localNumber } from './useDateFormatting-PLtQ78bC.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-DjkACiAr.mjs';
import { defineComponent, ref, computed, watch, withAsyncContext, mergeProps, withCtx, createTextVNode, unref, isRef, useModel, useTemplateRef, reactive, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, mergeModels, Fragment, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
import './useId-BkktAd0v.mjs';
import './overlay-BJM8aJ6z.mjs';
import 'aria-hidden';
import './Label-CeDlFZe1.mjs';
import './useKbd-CRGZM3iV.mjs';
import './useDirection-CEwcIFDz.mjs';
import './useFilter-dwXPCLOy.mjs';
import './PopperArrow-XrulOaaZ.mjs';
import '@floating-ui/vue';
import './useFormControl-yNWnq054.mjs';
import './VisuallyHiddenInput-BQ6nCFCd.mjs';
import './utils-BKhy4VZo.mjs';
import '@tanstack/vue-virtual';
import '@internationalized/date';

// app/components/MedicationForm.vue?vue&type=script&setup=true&lang.ts
var MedicationForm_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "MedicationForm",
	__ssrInlineRender: true,
	props: /*@__PURE__*/ mergeModels({ medication: {} }, {
		"open": {
			type: Boolean,
			default: false
		},
		"openModifiers": {}
	}),
	emits: /*@__PURE__*/ mergeModels(["saved"], ["update:open"]),
	setup(__props, { emit: __emit }) {
		const open = useModel(__props, "open");
		const props = __props;
		const emit = __emit;
		const api = useMedications();
		const auth = useAuth();
		const toast = useToast();
		const nuxtApp = useNuxtApp();
		const form = useTemplateRef("medicationForm");
		const pending = ref(false);
		const serviceMessage = ref("");
		const state = reactive({
			name: "",
			type: "Tablets",
			quantity: "0",
			remarks: ""
		});
		const editing = computed(() => props.medication !== null);
		const medicationTypes = [
			"Tablets",
			"Capsules",
			"Syrups",
			"Suspensions",
			"Solutions",
			"Drops",
			"Injections",
			"Creams",
			"Ointments",
			"Gels",
			"Lotions",
			"Sprays",
			"Inhalers",
			"Suppositories",
			"Powders",
			"Granules",
			"Patches",
			"Infusions (IV fluids)"
		];
		function populate() {
			Object.assign(state, {
				name: props.medication?.name ?? "",
				type: props.medication?.type ?? "Tablets",
				quantity: String(props.medication?.quantity ?? 0),
				remarks: props.medication?.remarks ?? ""
			});
			serviceMessage.value = "";
			form.value?.clear();
		}
		function validate(value) {
			const errors = [];
			if (!value.name.trim()) errors.push({
				name: "name",
				message: "Enter the medication name."
			});
			else if (value.name.trim().length > 200) errors.push({
				name: "name",
				message: "Name must not exceed 200 characters."
			});
			if (!value.type.trim()) errors.push({
				name: "type",
				message: "Enter the medication type."
			});
			else if (value.type.trim().length > 100) errors.push({
				name: "type",
				message: "Type must not exceed 100 characters."
			});
			if (String(value.quantity).trim() !== "" && (!Number.isInteger(Number(value.quantity)) || Number(value.quantity) < 0 || Number(value.quantity) > 2147483647)) errors.push({
				name: "quantity",
				message: "Quantity must be a whole number between 0 and 2147483647."
			});
			if (value.remarks.trim().length > 1e3) errors.push({
				name: "remarks",
				message: "Remarks must not exceed 1000 characters."
			});
			return errors;
		}
		function focusError(event) {
			if (event.errors[0]?.id) (void 0).getElementById(event.errors[0].id)?.focus();
		}
		async function save() {
			if (pending.value) return;
			pending.value = true;
			serviceMessage.value = "";
			const created = !editing.value;
			const input = {
				name: state.name.trim(),
				type: state.type.trim(),
				quantity: String(state.quantity).trim() === "" ? 0 : Number(state.quantity),
				remarks: state.remarks.trim()
			};
			let saved = null;
			try {
				saved = props.medication ? await api.update(props.medication.id, input) : await api.create(input);
			} catch (error) {
				const failure = error;
				const status = failure.statusCode || failure.status;
				const code = failure.data?.data?.code || failure.data?.code;
				const messages = {
					VALIDATION_ERROR: "Check the form details and try again.",
					DUPLICATE_MEDICATION: "A medication with this name already exists in your list.",
					NOT_FOUND: "Medication not found. Refresh the list and try again.",
					FORBIDDEN: "You do not have permission to make this change.",
					INVALID_ORIGIN: "Request rejected. Refresh the page and try again.",
					TOO_MANY_REQUESTS: "Too many attempts. Please try again later."
				};
				if (status === 401) {
					open.value = false;
					toast.add({
						title: "Sign in again",
						description: "Your session has expired. Please sign in again.",
						color: "warning"
					});
					try {
						await auth.refresh();
					} catch {}
					await nuxtApp.runWithContext(() => navigateTo("/login"));
					return;
				}
				serviceMessage.value = messages[code || ""] || (status === 403 ? messages.FORBIDDEN : status === 429 ? messages.TOO_MANY_REQUESTS : "Unable to save information. Please try again.");
				toast.add({
					title: "Medication could not be saved",
					description: serviceMessage.value,
					color: "error"
				});
			} finally {
				pending.value = false;
			}
			if (saved) {
				open.value = false;
				toast.add({
					title: created ? "Medication added" : "Medication updated",
					color: "success",
					icon: "i-lucide-circle-check"
				});
				emit("saved", saved, created);
			}
		}
		watch(open, (value) => {
			if (value) populate();
			else {
				Object.assign(state, {
					name: "",
					type: "Tablets",
					quantity: "0",
					remarks: ""
				});
				serviceMessage.value = "";
				form.value?.clear();
			}
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UModal = _sfc_main$2;
			const _component_UForm = _sfc_main$3;
			const _component_UIcon = _sfc_main$5;
			const _component_UFormField = _sfc_main$4;
			const _component_UInput = _sfc_main$1;
			const _component_USelectMenu = _sfc_main$6;
			const _component_UTextarea = _sfc_main$7;
			const _component_UButton = _sfc_main;
			_push(ssrRenderComponent(_component_UModal, mergeProps({
				open: open.value,
				title: unref(editing) ? "Edit medication" : "New medication",
				description: "Enter the medication name, type and quantity.",
				dismissible: !unref(pending),
				close: !unref(pending),
				dir: "ltr",
				ui: {
					content: "max-w-2xl min-w-0",
					wrapper: "min-w-0 pe-8",
					body: "min-w-0 min-h-0",
					title: "text-lg break-words",
					description: "text-base leading-7 break-words"
				},
				"onUpdate:open": (value) => {
					if (!unref(pending)) open.value = value;
				}
			}, _attrs), {
				body: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_UForm, {
						ref: "medicationForm",
						state: unref(state),
						validate,
						disabled: unref(pending),
						"loading-auto": false,
						novalidate: "",
						class: "medication-form",
						onSubmit: save,
						onError: focusError
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(`<div class="medication-owner" data-v-0f0fd1e6${_scopeId}>`);
								_push(ssrRenderComponent(_component_UIcon, {
									name: "i-lucide-user-round",
									"aria-hidden": "true"
								}, null, _parent, _scopeId));
								_push(`<span data-v-0f0fd1e6${_scopeId}>User: <bdi data-v-0f0fd1e6${_scopeId}>${ssrInterpolate(unref(auth).user.value?.userName)}</bdi></span>`);
								if (__props.medication) _push(`<span class="medication-reference" data-v-0f0fd1e6${_scopeId}>ID: ${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(__props.medication.id))}</span>`);
								else _push(`<!---->`);
								_push(`</div>`);
								_push(ssrRenderComponent(_component_UFormField, {
									name: "name",
									label: "Medication name",
									size: "lg",
									required: "",
									ui: { label: "text-base" }
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(ssrRenderComponent(_component_UInput, {
											modelValue: unref(state).name,
											"onUpdate:modelValue": ($event) => unref(state).name = $event,
											name: "name",
											dir: "auto",
											maxlength: 200,
											placeholder: "Enter medication name",
											autocomplete: "off",
											size: "xl",
											class: "w-full",
											ui: { base: "medication-input" }
										}, null, _parent, _scopeId));
										else return [createVNode(_component_UInput, {
											modelValue: unref(state).name,
											"onUpdate:modelValue": ($event) => unref(state).name = $event,
											name: "name",
											dir: "auto",
											maxlength: 200,
											placeholder: "Enter medication name",
											autocomplete: "off",
											size: "xl",
											class: "w-full",
											ui: { base: "medication-input" }
										}, null, 8, ["modelValue", "onUpdate:modelValue"])];
									}),
									_: 1
								}, _parent, _scopeId));
								_push(`<div class="medication-form-grid" data-v-0f0fd1e6${_scopeId}>`);
								_push(ssrRenderComponent(_component_UFormField, {
									name: "type",
									label: "Medication type",
									size: "lg",
									required: "",
									ui: { label: "text-base" }
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(ssrRenderComponent(_component_USelectMenu, {
											modelValue: unref(state).type,
											"onUpdate:modelValue": ($event) => unref(state).type = $event,
											items: medicationTypes,
											name: "type",
											searchable: "",
											"searchable-placeholder": "Search medication types",
											placeholder: "Select medication type",
											size: "xl",
											class: "w-full",
											ui: { base: "medication-input" }
										}, null, _parent, _scopeId));
										else return [createVNode(_component_USelectMenu, {
											modelValue: unref(state).type,
											"onUpdate:modelValue": ($event) => unref(state).type = $event,
											items: medicationTypes,
											name: "type",
											searchable: "",
											"searchable-placeholder": "Search medication types",
											placeholder: "Select medication type",
											size: "xl",
											class: "w-full",
											ui: { base: "medication-input" }
										}, null, 8, ["modelValue", "onUpdate:modelValue"])];
									}),
									_: 1
								}, _parent, _scopeId));
								_push(ssrRenderComponent(_component_UFormField, {
									name: "quantity",
									label: "Quantity",
									hint: "Optional · defaults to 0",
									size: "lg",
									ui: { label: "text-base" }
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(ssrRenderComponent(_component_UInput, {
											modelValue: unref(state).quantity,
											"onUpdate:modelValue": ($event) => unref(state).quantity = $event,
											name: "quantity",
											type: "number",
											inputmode: "numeric",
											min: 0,
											max: 2147483647,
											step: 1,
											size: "xl",
											class: "w-full",
											ui: { base: "medication-input" }
										}, null, _parent, _scopeId));
										else return [createVNode(_component_UInput, {
											modelValue: unref(state).quantity,
											"onUpdate:modelValue": ($event) => unref(state).quantity = $event,
											name: "quantity",
											type: "number",
											inputmode: "numeric",
											min: 0,
											max: 2147483647,
											step: 1,
											size: "xl",
											class: "w-full",
											ui: { base: "medication-input" }
										}, null, 8, ["modelValue", "onUpdate:modelValue"])];
									}),
									_: 1
								}, _parent, _scopeId));
								_push(`</div>`);
								_push(ssrRenderComponent(_component_UFormField, {
									name: "remarks",
									label: "Remarks",
									hint: "Optional",
									size: "lg",
									ui: { label: "text-base" }
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(ssrRenderComponent(_component_UTextarea, {
											modelValue: unref(state).remarks,
											"onUpdate:modelValue": ($event) => unref(state).remarks = $event,
											name: "remarks",
											dir: "auto",
											maxlength: 1e3,
											rows: 3,
											placeholder: "Enter any additional information",
											size: "xl",
											class: "w-full",
											ui: { base: "medication-input medication-remarks-input" }
										}, null, _parent, _scopeId));
										else return [createVNode(_component_UTextarea, {
											modelValue: unref(state).remarks,
											"onUpdate:modelValue": ($event) => unref(state).remarks = $event,
											name: "remarks",
											dir: "auto",
											maxlength: 1e3,
											rows: 3,
											placeholder: "Enter any additional information",
											size: "xl",
											class: "w-full",
											ui: { base: "medication-input medication-remarks-input" }
										}, null, 8, ["modelValue", "onUpdate:modelValue"])];
									}),
									_: 1
								}, _parent, _scopeId));
								if (unref(serviceMessage)) _push(`<p class="medication-message" role="alert" data-v-0f0fd1e6${_scopeId}>${ssrInterpolate(unref(serviceMessage))}</p>`);
								else _push(`<!---->`);
								_push(`<div class="medication-form-actions" data-v-0f0fd1e6${_scopeId}>`);
								_push(ssrRenderComponent(_component_UButton, {
									type: "submit",
									size: "lg",
									icon: "i-lucide-save",
									loading: unref(pending),
									disabled: unref(pending)
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(`${ssrInterpolate(unref(editing) ? "Save changes" : "Add medication")}`);
										else return [createTextVNode(toDisplayString(unref(editing) ? "Save changes" : "Add medication"), 1)];
									}),
									_: 1
								}, _parent, _scopeId));
								_push(ssrRenderComponent(_component_UButton, {
									type: "button",
									size: "lg",
									color: "neutral",
									variant: "outline",
									disabled: unref(pending),
									onClick: ($event) => open.value = false
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(`Cancel`);
										else return [createTextVNode("Cancel")];
									}),
									_: 1
								}, _parent, _scopeId));
								_push(`</div>`);
							} else return [
								createVNode("div", { class: "medication-owner" }, [
									createVNode(_component_UIcon, {
										name: "i-lucide-user-round",
										"aria-hidden": "true"
									}),
									createVNode("span", null, [createTextVNode("User: "), createVNode("bdi", null, toDisplayString(unref(auth).user.value?.userName), 1)]),
									__props.medication ? (openBlock(), createBlock("span", {
										key: 0,
										class: "medication-reference"
									}, "ID: " + toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(__props.medication.id)), 1)) : createCommentVNode("", true)
								]),
								createVNode(_component_UFormField, {
									name: "name",
									label: "Medication name",
									size: "lg",
									required: "",
									ui: { label: "text-base" }
								}, {
									default: withCtx(() => [createVNode(_component_UInput, {
										modelValue: unref(state).name,
										"onUpdate:modelValue": ($event) => unref(state).name = $event,
										name: "name",
										dir: "auto",
										maxlength: 200,
										placeholder: "Enter medication name",
										autocomplete: "off",
										size: "xl",
										class: "w-full",
										ui: { base: "medication-input" }
									}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
									_: 1
								}),
								createVNode("div", { class: "medication-form-grid" }, [createVNode(_component_UFormField, {
									name: "type",
									label: "Medication type",
									size: "lg",
									required: "",
									ui: { label: "text-base" }
								}, {
									default: withCtx(() => [createVNode(_component_USelectMenu, {
										modelValue: unref(state).type,
										"onUpdate:modelValue": ($event) => unref(state).type = $event,
										items: medicationTypes,
										name: "type",
										searchable: "",
										"searchable-placeholder": "Search medication types",
										placeholder: "Select medication type",
										size: "xl",
										class: "w-full",
										ui: { base: "medication-input" }
									}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
									_: 1
								}), createVNode(_component_UFormField, {
									name: "quantity",
									label: "Quantity",
									hint: "Optional · defaults to 0",
									size: "lg",
									ui: { label: "text-base" }
								}, {
									default: withCtx(() => [createVNode(_component_UInput, {
										modelValue: unref(state).quantity,
										"onUpdate:modelValue": ($event) => unref(state).quantity = $event,
										name: "quantity",
										type: "number",
										inputmode: "numeric",
										min: 0,
										max: 2147483647,
										step: 1,
										size: "xl",
										class: "w-full",
										ui: { base: "medication-input" }
									}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
									_: 1
								})]),
								createVNode(_component_UFormField, {
									name: "remarks",
									label: "Remarks",
									hint: "Optional",
									size: "lg",
									ui: { label: "text-base" }
								}, {
									default: withCtx(() => [createVNode(_component_UTextarea, {
										modelValue: unref(state).remarks,
										"onUpdate:modelValue": ($event) => unref(state).remarks = $event,
										name: "remarks",
										dir: "auto",
										maxlength: 1e3,
										rows: 3,
										placeholder: "Enter any additional information",
										size: "xl",
										class: "w-full",
										ui: { base: "medication-input medication-remarks-input" }
									}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
									_: 1
								}),
								unref(serviceMessage) ? (openBlock(), createBlock("p", {
									key: 0,
									class: "medication-message",
									role: "alert"
								}, toDisplayString(unref(serviceMessage)), 1)) : createCommentVNode("", true),
								createVNode("div", { class: "medication-form-actions" }, [createVNode(_component_UButton, {
									type: "submit",
									size: "lg",
									icon: "i-lucide-save",
									loading: unref(pending),
									disabled: unref(pending)
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(editing) ? "Save changes" : "Add medication"), 1)]),
									_: 1
								}, 8, ["loading", "disabled"]), createVNode(_component_UButton, {
									type: "button",
									size: "lg",
									color: "neutral",
									variant: "outline",
									disabled: unref(pending),
									onClick: ($event) => open.value = false
								}, {
									default: withCtx(() => [createTextVNode("Cancel")]),
									_: 1
								}, 8, ["disabled", "onClick"])])
							];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(_component_UForm, {
						ref: "medicationForm",
						state: unref(state),
						validate,
						disabled: unref(pending),
						"loading-auto": false,
						novalidate: "",
						class: "medication-form",
						onSubmit: save,
						onError: focusError
					}, {
						default: withCtx(() => [
							createVNode("div", { class: "medication-owner" }, [
								createVNode(_component_UIcon, {
									name: "i-lucide-user-round",
									"aria-hidden": "true"
								}),
								createVNode("span", null, [createTextVNode("User: "), createVNode("bdi", null, toDisplayString(unref(auth).user.value?.userName), 1)]),
								__props.medication ? (openBlock(), createBlock("span", {
									key: 0,
									class: "medication-reference"
								}, "ID: " + toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(__props.medication.id)), 1)) : createCommentVNode("", true)
							]),
							createVNode(_component_UFormField, {
								name: "name",
								label: "Medication name",
								size: "lg",
								required: "",
								ui: { label: "text-base" }
							}, {
								default: withCtx(() => [createVNode(_component_UInput, {
									modelValue: unref(state).name,
									"onUpdate:modelValue": ($event) => unref(state).name = $event,
									name: "name",
									dir: "auto",
									maxlength: 200,
									placeholder: "Enter medication name",
									autocomplete: "off",
									size: "xl",
									class: "w-full",
									ui: { base: "medication-input" }
								}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
								_: 1
							}),
							createVNode("div", { class: "medication-form-grid" }, [createVNode(_component_UFormField, {
								name: "type",
								label: "Medication type",
								size: "lg",
								required: "",
								ui: { label: "text-base" }
							}, {
								default: withCtx(() => [createVNode(_component_USelectMenu, {
									modelValue: unref(state).type,
									"onUpdate:modelValue": ($event) => unref(state).type = $event,
									items: medicationTypes,
									name: "type",
									searchable: "",
									"searchable-placeholder": "Search medication types",
									placeholder: "Select medication type",
									size: "xl",
									class: "w-full",
									ui: { base: "medication-input" }
								}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
								_: 1
							}), createVNode(_component_UFormField, {
								name: "quantity",
								label: "Quantity",
								hint: "Optional · defaults to 0",
								size: "lg",
								ui: { label: "text-base" }
							}, {
								default: withCtx(() => [createVNode(_component_UInput, {
									modelValue: unref(state).quantity,
									"onUpdate:modelValue": ($event) => unref(state).quantity = $event,
									name: "quantity",
									type: "number",
									inputmode: "numeric",
									min: 0,
									max: 2147483647,
									step: 1,
									size: "xl",
									class: "w-full",
									ui: { base: "medication-input" }
								}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
								_: 1
							})]),
							createVNode(_component_UFormField, {
								name: "remarks",
								label: "Remarks",
								hint: "Optional",
								size: "lg",
								ui: { label: "text-base" }
							}, {
								default: withCtx(() => [createVNode(_component_UTextarea, {
									modelValue: unref(state).remarks,
									"onUpdate:modelValue": ($event) => unref(state).remarks = $event,
									name: "remarks",
									dir: "auto",
									maxlength: 1e3,
									rows: 3,
									placeholder: "Enter any additional information",
									size: "xl",
									class: "w-full",
									ui: { base: "medication-input medication-remarks-input" }
								}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
								_: 1
							}),
							unref(serviceMessage) ? (openBlock(), createBlock("p", {
								key: 0,
								class: "medication-message",
								role: "alert"
							}, toDisplayString(unref(serviceMessage)), 1)) : createCommentVNode("", true),
							createVNode("div", { class: "medication-form-actions" }, [createVNode(_component_UButton, {
								type: "submit",
								size: "lg",
								icon: "i-lucide-save",
								loading: unref(pending),
								disabled: unref(pending)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(editing) ? "Save changes" : "Add medication"), 1)]),
								_: 1
							}, 8, ["loading", "disabled"]), createVNode(_component_UButton, {
								type: "button",
								size: "lg",
								color: "neutral",
								variant: "outline",
								disabled: unref(pending),
								onClick: ($event) => open.value = false
							}, {
								default: withCtx(() => [createTextVNode("Cancel")]),
								_: 1
							}, 8, ["disabled", "onClick"])])
						]),
						_: 1
					}, 8, ["state", "disabled"])];
				}),
				_: 1
			}, _parent));
		};
	}
});
// app/components/MedicationForm.vue
var _sfc_setup$2 = MedicationForm_vue_vue_type_script_setup_true_lang_default.setup;
MedicationForm_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MedicationForm.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var MedicationForm_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(MedicationForm_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-0f0fd1e6"]]), { __name: "MedicationForm" });
// app/components/MedicationBulkForm.vue?vue&type=script&setup=true&lang.ts
var MedicationBulkForm_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "MedicationBulkForm",
	__ssrInlineRender: true,
	props: {
		"open": {
			type: Boolean,
			default: false
		},
		"openModifiers": {}
	},
	emits: /*@__PURE__*/ mergeModels(["saved"], ["update:open"]),
	setup(__props, { emit: __emit }) {
		const open = useModel(__props, "open");
		const emit = __emit;
		const api = useMedications();
		const auth = useAuth();
		const toast = useToast();
		const nuxtApp = useNuxtApp();
		const pending = ref(false);
		const message = ref("");
		let nextRowId = 0;
		const rows = ref([]);
		const medicationTypes = [
			"Tablets",
			"Capsules",
			"Syrups",
			"Suspensions",
			"Solutions",
			"Drops",
			"Injections",
			"Creams",
			"Ointments",
			"Gels",
			"Lotions",
			"Sprays",
			"Inhalers",
			"Suppositories",
			"Powders",
			"Granules",
			"Patches",
			"Infusions (IV fluids)"
		];
		function createRow() {
			return {
				id: ++nextRowId,
				name: "",
				type: "Tablets",
				quantity: "",
				remarks: ""
			};
		}
		function asText(value) {
			return value == null ? "" : String(value);
		}
		function reset() {
			rows.value = [createRow(), createRow()];
			message.value = "";
		}
		function addRow() {
			if (rows.value.length >= 50) return;
			rows.value.push(createRow());
		}
		function removeRow(rowId) {
			if (pending.value) return;
			rows.value = rows.value.filter((row) => row.id !== rowId);
		}
		const filledRows = computed(() => rows.value.filter((row) => asText(row.name).trim() || asText(row.type).trim() || asText(row.quantity).trim() || asText(row.remarks).trim()));
		async function save() {
			if (pending.value) return;
			message.value = "";
			const items = [];
			for (const [index, row] of filledRows.value.entries()) {
				const name = asText(row.name).trim();
				const type = asText(row.type).trim();
				const quantityText = asText(row.quantity).trim();
				const remarks = asText(row.remarks).trim();
				const quantity = quantityText ? Number(quantityText) : 0;
				if (!name || name.length > 200 || !type || !Number.isInteger(quantity) || quantity < 0 || quantity > 2147483647 || remarks.length > 1e3) {
					message.value = `Check row ${index + 1}: enter a name, type, and valid whole-number quantity (0 or more).`;
					return;
				}
				items.push({
					name,
					type,
					quantity,
					remarks
				});
			}
			if (!items.length) {
				message.value = "Enter at least one medication before saving.";
				return;
			}
			const seenNames = /* @__PURE__ */ new Map();
			for (const [index, item] of items.entries()) {
				const normalizedName = item.name.trim().toLocaleLowerCase("en-US");
				const previousRow = seenNames.get(normalizedName);
				if (previousRow !== void 0) {
					message.value = `Rows ${previousRow} and ${index + 1} use the same medication name.`;
					return;
				}
				seenNames.set(normalizedName, index + 1);
			}
			pending.value = true;
			try {
				const saved = await api.createBulk(items);
				open.value = false;
				toast.add({
					title: `${saved.length} medications added`,
					color: "success",
					icon: "i-lucide-circle-check"
				});
				emit("saved", saved);
			} catch (error) {
				const failure = error;
				const status = failure.statusCode || failure.status;
				const code = failure.data?.data?.code || failure.data?.code;
				if (status === 401) {
					open.value = false;
					toast.add({
						title: "Sign in again",
						description: "Your session has expired. Please sign in again.",
						color: "warning"
					});
					try {
						await auth.refresh();
					} catch {}
					await nuxtApp.runWithContext(() => navigateTo("/login"));
					return;
				}
				message.value = code === "DUPLICATE_MEDICATION" ? "A medication with one of these names already exists in your list." : code === "VALIDATION_ERROR" ? "Check every medication row and try again." : status === 403 ? "You do not have permission to add these medications." : status === 429 ? "Too many attempts. Please try again later." : "Unable to add medications. Please try again.";
				toast.add({
					title: "Medications could not be added",
					description: message.value,
					color: "error"
				});
			} finally {
				pending.value = false;
			}
		}
		watch(open, (value) => {
			if (value) reset();
			else if (!pending.value) message.value = "";
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UModal = _sfc_main$2;
			const _component_UIcon = _sfc_main$5;
			const _component_UInput = _sfc_main$1;
			const _component_USelectMenu = _sfc_main$6;
			const _component_UButton = _sfc_main;
			_push(ssrRenderComponent(_component_UModal, mergeProps({
				open: open.value,
				title: "Bulk add medications",
				description: "Add several medications for your account in one save. Blank rows are ignored.",
				dismissible: !unref(pending),
				close: !unref(pending),
				dir: "ltr",
				ui: {
					content: "max-w-6xl min-w-0",
					wrapper: "min-w-0 pe-8",
					body: "min-w-0 min-h-0",
					title: "text-lg break-words",
					description: "text-base leading-7 break-words"
				},
				"onUpdate:open": (value) => {
					if (!unref(pending)) open.value = value;
				}
			}, _attrs), {
				body: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="bulk-medication-form" data-v-25a18f06${_scopeId}><div class="bulk-medication-owner" data-v-25a18f06${_scopeId}>`);
						_push(ssrRenderComponent(_component_UIcon, {
							name: "i-lucide-user-round",
							"aria-hidden": "true"
						}, null, _parent, _scopeId));
						_push(`<span data-v-25a18f06${_scopeId}>All medications will belong to <bdi data-v-25a18f06${_scopeId}>${ssrInterpolate(unref(auth).user.value?.userName)}</bdi>.</span><span data-v-25a18f06${_scopeId}>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(filledRows).length))} ready</span></div><div class="bulk-medication-fields" aria-hidden="true" data-v-25a18f06${_scopeId}><span data-v-25a18f06${_scopeId}>#</span><span data-v-25a18f06${_scopeId}>Medication name</span><span data-v-25a18f06${_scopeId}>Medication type</span><span data-v-25a18f06${_scopeId}>Quantity</span><span data-v-25a18f06${_scopeId}>Remarks</span><span data-v-25a18f06${_scopeId}></span></div><div class="bulk-medication-rows" data-v-25a18f06${_scopeId}><!--[-->`);
						ssrRenderList$2(unref(rows), (row, index) => {
							_push(`<div class="bulk-medication-row" data-v-25a18f06${_scopeId}><span class="bulk-medication-number" data-v-25a18f06${_scopeId}>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(index + 1))}</span>`);
							_push(ssrRenderComponent(_component_UInput, {
								modelValue: row.name,
								"onUpdate:modelValue": ($event) => row.name = $event,
								"aria-label": `Row ${index + 1} medication name`,
								maxlength: 200,
								placeholder: "Medication name",
								autocomplete: "off",
								size: "lg"
							}, null, _parent, _scopeId));
							_push(ssrRenderComponent(_component_USelectMenu, {
								modelValue: row.type,
								"onUpdate:modelValue": ($event) => row.type = $event,
								items: medicationTypes,
								"aria-label": `Row ${index + 1} medication type`,
								searchable: "",
								"searchable-placeholder": "Search types",
								placeholder: "Select type",
								size: "lg"
							}, null, _parent, _scopeId));
							_push(ssrRenderComponent(_component_UInput, {
								modelValue: row.quantity,
								"onUpdate:modelValue": ($event) => row.quantity = $event,
								"aria-label": `Row ${index + 1} quantity`,
								type: "number",
								inputmode: "numeric",
								min: "0",
								max: "2147483647",
								step: "1",
								placeholder: "0",
								size: "lg"
							}, null, _parent, _scopeId));
							_push(ssrRenderComponent(_component_UInput, {
								modelValue: row.remarks,
								"onUpdate:modelValue": ($event) => row.remarks = $event,
								"aria-label": `Row ${index + 1} remarks`,
								maxlength: 1e3,
								placeholder: "Optional",
								size: "lg"
							}, null, _parent, _scopeId));
							_push(ssrRenderComponent(_component_UButton, {
								type: "button",
								color: "error",
								variant: "ghost",
								icon: "i-lucide-trash-2",
								"aria-label": `Remove unsaved row ${index + 1}`,
								disabled: unref(pending),
								onClick: ($event) => removeRow(row.id)
							}, null, _parent, _scopeId));
							_push(`</div>`);
						});
						_push(`<!--]--></div><div class="bulk-medication-actions" data-v-25a18f06${_scopeId}>`);
						_push(ssrRenderComponent(_component_UButton, {
							type: "button",
							color: "neutral",
							variant: "outline",
							icon: "i-lucide-list-plus",
							disabled: unref(pending) || unref(rows).length >= 50,
							onClick: addRow
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Add row`);
								else return [createTextVNode("Add row")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`<span class="bulk-medication-limit" data-v-25a18f06${_scopeId}>Up to 50 medications per batch</span></div>`);
						if (unref(message)) _push(`<p class="bulk-medication-message" role="alert" data-v-25a18f06${_scopeId}>${ssrInterpolate(unref(message))}</p>`);
						else _push(`<!---->`);
						_push(`<div class="bulk-medication-footer" data-v-25a18f06${_scopeId}>`);
						_push(ssrRenderComponent(_component_UButton, {
							type: "button",
							color: "neutral",
							variant: "outline",
							disabled: unref(pending),
							onClick: reset
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Reset rows`);
								else return [createTextVNode("Reset rows")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`<div data-v-25a18f06${_scopeId}>`);
						_push(ssrRenderComponent(_component_UButton, {
							type: "button",
							color: "neutral",
							variant: "outline",
							disabled: unref(pending),
							onClick: ($event) => open.value = false
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Cancel`);
								else return [createTextVNode("Cancel")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_component_UButton, {
							type: "button",
							icon: "i-lucide-save",
							loading: unref(pending),
							disabled: unref(pending),
							onClick: save
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Save medications`);
								else return [createTextVNode("Save medications")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div></div>`);
					} else return [createVNode("div", { class: "bulk-medication-form" }, [
						createVNode("div", { class: "bulk-medication-owner" }, [
							createVNode(_component_UIcon, {
								name: "i-lucide-user-round",
								"aria-hidden": "true"
							}),
							createVNode("span", null, [
								createTextVNode("All medications will belong to "),
								createVNode("bdi", null, toDisplayString(unref(auth).user.value?.userName), 1),
								createTextVNode(".")
							]),
							createVNode("span", null, toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(filledRows).length)) + " ready", 1)
						]),
						createVNode("div", {
							class: "bulk-medication-fields",
							"aria-hidden": "true"
						}, [
							createVNode("span", null, "#"),
							createVNode("span", null, "Medication name"),
							createVNode("span", null, "Medication type"),
							createVNode("span", null, "Quantity"),
							createVNode("span", null, "Remarks"),
							createVNode("span")
						]),
						createVNode("div", { class: "bulk-medication-rows" }, [(openBlock(true), createBlock(Fragment, null, renderList$2(unref(rows), (row, index) => {
							return openBlock(), createBlock("div", {
								key: row.id,
								class: "bulk-medication-row"
							}, [
								createVNode("span", { class: "bulk-medication-number" }, toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(index + 1)), 1),
								createVNode(_component_UInput, {
									modelValue: row.name,
									"onUpdate:modelValue": ($event) => row.name = $event,
									"aria-label": `Row ${index + 1} medication name`,
									maxlength: 200,
									placeholder: "Medication name",
									autocomplete: "off",
									size: "lg"
								}, null, 8, [
									"modelValue",
									"onUpdate:modelValue",
									"aria-label"
								]),
								createVNode(_component_USelectMenu, {
									modelValue: row.type,
									"onUpdate:modelValue": ($event) => row.type = $event,
									items: medicationTypes,
									"aria-label": `Row ${index + 1} medication type`,
									searchable: "",
									"searchable-placeholder": "Search types",
									placeholder: "Select type",
									size: "lg"
								}, null, 8, [
									"modelValue",
									"onUpdate:modelValue",
									"aria-label"
								]),
								createVNode(_component_UInput, {
									modelValue: row.quantity,
									"onUpdate:modelValue": ($event) => row.quantity = $event,
									"aria-label": `Row ${index + 1} quantity`,
									type: "number",
									inputmode: "numeric",
									min: "0",
									max: "2147483647",
									step: "1",
									placeholder: "0",
									size: "lg"
								}, null, 8, [
									"modelValue",
									"onUpdate:modelValue",
									"aria-label"
								]),
								createVNode(_component_UInput, {
									modelValue: row.remarks,
									"onUpdate:modelValue": ($event) => row.remarks = $event,
									"aria-label": `Row ${index + 1} remarks`,
									maxlength: 1e3,
									placeholder: "Optional",
									size: "lg"
								}, null, 8, [
									"modelValue",
									"onUpdate:modelValue",
									"aria-label"
								]),
								createVNode(_component_UButton, {
									type: "button",
									color: "error",
									variant: "ghost",
									icon: "i-lucide-trash-2",
									"aria-label": `Remove unsaved row ${index + 1}`,
									disabled: unref(pending),
									onClick: ($event) => removeRow(row.id)
								}, null, 8, [
									"aria-label",
									"disabled",
									"onClick"
								])
							]);
						}), 128))]),
						createVNode("div", { class: "bulk-medication-actions" }, [createVNode(_component_UButton, {
							type: "button",
							color: "neutral",
							variant: "outline",
							icon: "i-lucide-list-plus",
							disabled: unref(pending) || unref(rows).length >= 50,
							onClick: addRow
						}, {
							default: withCtx(() => [createTextVNode("Add row")]),
							_: 1
						}, 8, ["disabled"]), createVNode("span", { class: "bulk-medication-limit" }, "Up to 50 medications per batch")]),
						unref(message) ? (openBlock(), createBlock("p", {
							key: 0,
							class: "bulk-medication-message",
							role: "alert"
						}, toDisplayString(unref(message)), 1)) : createCommentVNode("", true),
						createVNode("div", { class: "bulk-medication-footer" }, [createVNode(_component_UButton, {
							type: "button",
							color: "neutral",
							variant: "outline",
							disabled: unref(pending),
							onClick: reset
						}, {
							default: withCtx(() => [createTextVNode("Reset rows")]),
							_: 1
						}, 8, ["disabled"]), createVNode("div", null, [createVNode(_component_UButton, {
							type: "button",
							color: "neutral",
							variant: "outline",
							disabled: unref(pending),
							onClick: ($event) => open.value = false
						}, {
							default: withCtx(() => [createTextVNode("Cancel")]),
							_: 1
						}, 8, ["disabled", "onClick"]), createVNode(_component_UButton, {
							type: "button",
							icon: "i-lucide-save",
							loading: unref(pending),
							disabled: unref(pending),
							onClick: save
						}, {
							default: withCtx(() => [createTextVNode("Save medications")]),
							_: 1
						}, 8, ["loading", "disabled"])])])
					])];
				}),
				_: 1
			}, _parent));
		};
	}
});
// app/components/MedicationBulkForm.vue
var _sfc_setup$1 = MedicationBulkForm_vue_vue_type_script_setup_true_lang_default.setup;
MedicationBulkForm_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MedicationBulkForm.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var MedicationBulkForm_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(MedicationBulkForm_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-25a18f06"]]), { __name: "MedicationBulkForm" });
// app/pages/medications.vue?vue&type=script&setup=true&lang.ts
var pageSize = 10;
var medications_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "medications",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		useHead({ title: "Medications — RoghtiaSystem" });
		const api = useMedications();
		const auth = useAuth();
		const toast = useToast();
		const nuxtApp = useNuxtApp();
		const search = ref("");
		const appliedSearch = ref("");
		const page = ref(1);
		const result = ref({
			items: [],
			total: 0,
			page: 1,
			pageSize
		});
		const loading = ref(true);
		const loaded = ref(false);
		const serviceMessage = ref("");
		const formOpen = ref(false);
		const bulkFormOpen = ref(false);
		const selected = ref(null);
		const editingId = ref(null);
		const totalPages = computed(() => Math.max(1, Math.ceil(result.value.total / pageSize)));
		const rangeStart = computed(() => result.value.items.length ? (result.value.page - 1) * pageSize + 1 : 0);
		const rangeEnd = computed(() => rangeStart.value ? rangeStart.value + result.value.items.length - 1 : 0);
		let requestSequence = 0;
		let editSequence = 0;
		let searchTimer;
		async function handleExpiredSession() {
			result.value = {
				items: [],
				total: 0,
				page: 1,
				pageSize
			};
			formOpen.value = false;
			bulkFormOpen.value = false;
			try {
				await auth.refresh();
			} catch {}
			await nuxtApp.runWithContext(() => navigateTo("/login"));
		}
		async function load() {
			const sequence = ++requestSequence;
			const userId = auth.user.value?.id;
			loading.value = true;
			loaded.value = false;
			serviceMessage.value = "";
			try {
				const response = await api.list({
					page: page.value,
					pageSize,
					search: appliedSearch.value
				});
				if (sequence !== requestSequence || userId !== auth.user.value?.id) return;
				result.value = response;
				page.value = response.page;
				loaded.value = true;
				if (page.value > totalPages.value) {
					page.value = totalPages.value;
					await load();
				}
			} catch (error) {
				if (sequence !== requestSequence || userId !== auth.user.value?.id) return;
				const failure = error;
				const status = failure.statusCode || failure.status;
				if (status === 401) return await handleExpiredSession();
				serviceMessage.value = status === 429 ? "Too many attempts. Please try again later." : status === 403 ? "You do not have permission to view this information." : "Unable to load medications. Please try again.";
			} finally {
				if (sequence === requestSequence) loading.value = false;
			}
		}
		function applySearch() {
			clearTimeout(searchTimer);
			appliedSearch.value = search.value.trim();
			page.value = 1;
			load();
		}
		function changePage(value) {
			if (loading.value || value < 1 || value > totalPages.value) return;
			page.value = value;
			load();
		}
		function addMedication() {
			++editSequence;
			editingId.value = null;
			selected.value = null;
			formOpen.value = true;
		}
		async function editMedication(medication) {
			if (editingId.value !== null) return;
			const sequence = ++editSequence;
			const userId = auth.user.value?.id;
			editingId.value = medication.id;
			try {
				const fresh = await api.get(medication.id);
				if (sequence !== editSequence || userId !== auth.user.value?.id) return;
				selected.value = fresh;
				formOpen.value = true;
			} catch (error) {
				if (sequence !== editSequence || userId !== auth.user.value?.id) return;
				const failure = error;
				const status = failure.statusCode || failure.status;
				if (status === 401) return await handleExpiredSession();
				toast.add({
					title: "Unable to load information",
					description: status === 404 ? "Medication not found. Refresh the list." : "Please try again.",
					color: "error"
				});
			} finally {
				if (sequence === editSequence) editingId.value = null;
			}
		}
		async function onSaved(medication, created) {
			if (medication.user.id !== auth.user.value?.id) return;
			if (created) {
				clearTimeout(searchTimer);
				search.value = "";
				appliedSearch.value = "";
				page.value = 1;
				loaded.value = false;
			} else result.value.items = result.value.items.map((item) => item.id === medication.id ? medication : item);
			await load();
		}
		async function onBulkSaved(medications) {
			const userId = auth.user.value?.id;
			if (!userId || medications.some((medication) => medication.user.id !== userId)) return;
			clearTimeout(searchTimer);
			search.value = "";
			appliedSearch.value = "";
			page.value = 1;
			loaded.value = false;
			await load();
		}
		watch(search, () => {
			clearTimeout(searchTimer);
			if (search.value.trim() === appliedSearch.value) return;
			searchTimer = setTimeout(applySearch, 300);
		});
		watch(() => auth.user.value?.id, () => {
			++requestSequence;
			++editSequence;
			clearTimeout(searchTimer);
			result.value = {
				items: [],
				total: 0,
				page: 1,
				pageSize
			};
			loaded.value = false;
			selected.value = null;
			formOpen.value = false;
			bulkFormOpen.value = false;
			editingId.value = null;
		});
		[__temp, __restore] = withAsyncContext(() => load()), await __temp, __restore();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UButton = _sfc_main;
			const _component_UIcon = _sfc_main$5;
			const _component_UInput = _sfc_main$1;
			const _component_MedicationForm = MedicationForm_default;
			const _component_MedicationBulkForm = MedicationBulkForm_default;
			_push(`<section${ssrRenderAttrs(mergeProps({
				class: "medications-page",
				"aria-labelledby": "medications-title"
			}, _attrs))} data-v-50a03a13><header class="page-heading" data-v-50a03a13><div data-v-50a03a13><div class="eyebrow" data-v-50a03a13><span data-v-50a03a13></span> Your medication list</div><h1 id="medications-title" data-v-50a03a13>Medications</h1><p data-v-50a03a13>Register medications, view their details and keep them up to date.</p></div><div class="medication-create-actions" data-v-50a03a13>`);
			_push(ssrRenderComponent(_component_UButton, {
				type: "button",
				color: "neutral",
				variant: "outline",
				icon: "i-lucide-list-plus",
				size: "lg",
				class: "bulk-medication-button",
				onClick: ($event) => bulkFormOpen.value = true
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Bulk add`);
					else return [createTextVNode("Bulk add")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_UButton, {
				type: "button",
				icon: "i-lucide-plus",
				size: "lg",
				class: "add-medication-button",
				onClick: addMedication
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`New medication`);
					else return [createTextVNode("New medication")];
				}),
				_: 1
			}, _parent));
			_push(`</div></header><section class="panel medications-panel" aria-labelledby="medications-list-title"${ssrRenderAttr("aria-busy", unref(loading))} data-v-50a03a13><header class="medications-toolbar" data-v-50a03a13><div class="medications-list-heading" data-v-50a03a13><span class="medications-icon" aria-hidden="true" data-v-50a03a13>`);
			_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-pill" }, null, _parent));
			_push(`</span><div data-v-50a03a13><h2 id="medications-list-title" data-v-50a03a13>${ssrInterpolate(unref(appliedSearch) ? "Search results" : "Registered medications")}</h2><p aria-live="polite" data-v-50a03a13>${ssrInterpolate(unref(loaded) ? `${("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(result).total)} Medications` : "Your medications")}</p></div></div><form class="medications-search" role="search" data-v-50a03a13>`);
			_push(ssrRenderComponent(_component_UInput, {
				modelValue: unref(search),
				"onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
				name: "medicationSearch",
				icon: "i-lucide-search",
				placeholder: "Search by name or type",
				"aria-label": "Search medications",
				maxlength: 200,
				size: "xl",
				class: "w-full",
				ui: { base: "medications-search-input" }
			}, null, _parent));
			_push(ssrRenderComponent(_component_UButton, {
				type: "submit",
				size: "lg",
				color: "neutral",
				variant: "outline",
				loading: unref(loading),
				"aria-label": "Search medications"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Search`);
					else return [createTextVNode("Search")];
				}),
				_: 1
			}, _parent));
			_push(`</form></header>`);
			if (unref(serviceMessage)) {
				_push(`<div class="medications-error" role="alert" data-v-50a03a13>`);
				_push(ssrRenderComponent(_component_UIcon, {
					name: "i-lucide-circle-alert",
					"aria-hidden": "true"
				}, null, _parent));
				_push(`<p data-v-50a03a13>${ssrInterpolate(unref(serviceMessage))}</p>`);
				_push(ssrRenderComponent(_component_UButton, {
					type: "button",
					size: "lg",
					color: "neutral",
					variant: "outline",
					icon: "i-lucide-refresh-cw",
					loading: unref(loading),
					disabled: unref(loading),
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
				_push(`<div class="medications-state" role="status" data-v-50a03a13>`);
				_push(ssrRenderComponent(_component_UIcon, {
					name: "i-lucide-loader-circle",
					class: "animate-spin",
					"aria-hidden": "true"
				}, null, _parent));
				_push(`<p data-v-50a03a13>Loading medications…</p></div>`);
			} else if (unref(loaded) && unref(result).items.length) {
				_push(`<!--[--><div class="medications-table-wrap" data-v-50a03a13><table class="medications-table" data-v-50a03a13><caption class="sr-only" data-v-50a03a13>Your medication names, types, quantities and remarks</caption><thead data-v-50a03a13><tr data-v-50a03a13><th scope="col" data-v-50a03a13>No.</th><th scope="col" data-v-50a03a13>Medication name</th><th scope="col" data-v-50a03a13>Type</th><th scope="col" data-v-50a03a13>Quantity</th><th scope="col" data-v-50a03a13>Remarks</th><th scope="col" data-v-50a03a13><span class="sr-only" data-v-50a03a13>Edit</span></th></tr></thead><tbody data-v-50a03a13><!--[-->`);
				ssrRenderList$2(unref(result).items, (medication) => {
					_push(`<tr data-v-50a03a13><td class="medication-id" data-v-50a03a13>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(medication.id))}</td><th scope="row" data-v-50a03a13><bdi data-v-50a03a13>${ssrInterpolate(medication.name)}</bdi></th><td data-v-50a03a13><span class="medication-type" data-v-50a03a13><bdi data-v-50a03a13>${ssrInterpolate(medication.type)}</bdi></span></td><td data-v-50a03a13><span class="medication-quantity" data-v-50a03a13>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(medication.quantity))}</span></td><td data-v-50a03a13><p class="medication-remarks" dir="auto" data-v-50a03a13>${ssrInterpolate(medication.remarks || "—")}</p></td><td data-v-50a03a13>`);
					_push(ssrRenderComponent(_component_UButton, {
						type: "button",
						color: "neutral",
						variant: "ghost",
						icon: "i-lucide-pencil-line",
						size: "lg",
						loading: unref(editingId) === medication.id,
						disabled: unref(editingId) !== null,
						"aria-label": `${medication.name}: Edit`,
						onClick: ($event) => editMedication(medication)
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`Edit`);
							else return [createTextVNode("Edit")];
						}),
						_: 2
					}, _parent));
					_push(`</td></tr>`);
				});
				_push(`<!--]--></tbody></table></div><div class="medications-cards" data-v-50a03a13><!--[-->`);
				ssrRenderList$2(unref(result).items, (medication) => {
					_push(`<article class="medication-card" data-v-50a03a13><header data-v-50a03a13><div data-v-50a03a13><p class="medication-id" data-v-50a03a13>No. ${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(medication.id))}</p><h3 data-v-50a03a13><bdi data-v-50a03a13>${ssrInterpolate(medication.name)}</bdi></h3></div>`);
					_push(ssrRenderComponent(_component_UButton, {
						type: "button",
						color: "neutral",
						variant: "outline",
						icon: "i-lucide-pencil-line",
						size: "lg",
						loading: unref(editingId) === medication.id,
						disabled: unref(editingId) !== null,
						"aria-label": `${medication.name}: Edit`,
						onClick: ($event) => editMedication(medication)
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`Edit`);
							else return [createTextVNode("Edit")];
						}),
						_: 2
					}, _parent));
					_push(`</header><dl data-v-50a03a13><div data-v-50a03a13><dt data-v-50a03a13>Type</dt><dd data-v-50a03a13><bdi data-v-50a03a13>${ssrInterpolate(medication.type)}</bdi></dd></div><div data-v-50a03a13><dt data-v-50a03a13>Quantity</dt><dd class="medication-quantity" data-v-50a03a13>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(medication.quantity))}</dd></div>`);
					if (medication.remarks) _push(`<div class="medication-card-remarks" data-v-50a03a13><dt data-v-50a03a13>Remarks</dt><dd dir="auto" data-v-50a03a13>${ssrInterpolate(medication.remarks)}</dd></div>`);
					else _push(`<!---->`);
					_push(`</dl></article>`);
				});
				_push(`<!--]--></div><footer class="medications-pagination" data-v-50a03a13><p data-v-50a03a13>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(rangeStart)))}–${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(rangeEnd)))} of ${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(result).total))} medications</p><nav aria-label="Medication pagination" data-v-50a03a13>`);
				_push(ssrRenderComponent(_component_UButton, {
					type: "button",
					size: "lg",
					color: "neutral",
					variant: "outline",
					icon: "i-lucide-chevron-left",
					disabled: unref(loading) || unref(page) <= 1,
					"aria-label": "Previous page",
					onClick: ($event) => changePage(unref(page) - 1)
				}, null, _parent));
				_push(`<span aria-live="polite" data-v-50a03a13>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(page)))} / ${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(totalPages)))}</span>`);
				_push(ssrRenderComponent(_component_UButton, {
					type: "button",
					size: "lg",
					color: "neutral",
					variant: "outline",
					icon: "i-lucide-chevron-right",
					disabled: unref(loading) || unref(page) >= unref(totalPages),
					"aria-label": "Next page",
					onClick: ($event) => changePage(unref(page) + 1)
				}, null, _parent));
				_push(`</nav></footer><!--]-->`);
			} else if (unref(loaded) && !unref(serviceMessage)) {
				_push(`<div class="medications-state medications-empty" data-v-50a03a13><span class="medications-empty-icon" data-v-50a03a13>`);
				_push(ssrRenderComponent(_component_UIcon, {
					name: unref(appliedSearch) ? "i-lucide-search" : "i-lucide-pill",
					"aria-hidden": "true"
				}, null, _parent));
				_push(`</span><h3 data-v-50a03a13>${ssrInterpolate(unref(appliedSearch) ? "No medications found" : "No medications registered yet")}</h3><p data-v-50a03a13>${ssrInterpolate(unref(appliedSearch) ? "Try another name or type." : "Register your first medication with its name, type and quantity.")}</p>`);
				if (unref(appliedSearch)) _push(ssrRenderComponent(_component_UButton, {
					type: "button",
					size: "lg",
					color: "neutral",
					variant: "outline",
					onClick: ($event) => {
						search.value = "";
						applySearch();
					}
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Show all medications`);
						else return [createTextVNode("Show all medications")];
					}),
					_: 1
				}, _parent));
				else _push(ssrRenderComponent(_component_UButton, {
					type: "button",
					size: "lg",
					icon: "i-lucide-plus",
					onClick: addMedication
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`New medication`);
						else return [createTextVNode("New medication")];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else _push(`<!---->`);
			_push(`</section>`);
			_push(ssrRenderComponent(_component_MedicationForm, {
				open: unref(formOpen),
				"onUpdate:open": ($event) => isRef(formOpen) ? formOpen.value = $event : null,
				medication: unref(selected),
				onSaved
			}, null, _parent));
			_push(ssrRenderComponent(_component_MedicationBulkForm, {
				open: unref(bulkFormOpen),
				"onUpdate:open": ($event) => isRef(bulkFormOpen) ? bulkFormOpen.value = $event : null,
				onSaved: onBulkSaved
			}, null, _parent));
			_push(`</section>`);
		};
	}
});
// app/pages/medications.vue
var _sfc_setup = medications_vue_vue_type_script_setup_true_lang_default.setup;
medications_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/medications.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var medications_default = /*#__PURE__*/ _plugin_vue_export_helper_default(medications_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-50a03a13"]]);

export { medications_default as default };;globalThis.__timing__.logEnd('Load chunks/build/medications-DYyg72-H');
//# sourceMappingURL=medications-DYyg72-H.mjs.map
