globalThis.__timing__.logStart('Load chunks/build/patients-CinF76gb');import { a as useHead, e as useAuth, K as useToast, L as useNuxtApp, _ as _sfc_main, b as _sfc_main$5, s as ssrRenderList$2, n as navigateTo } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './Input-Bs-tvl7x.mjs';
import { _ as _sfc_main$2 } from './Modal-BsBsKz59.mjs';
import { _ as _sfc_main$3 } from './Form-DKt9N6vo.mjs';
import { _ as _sfc_main$4 } from './FormField-WNpvFFAW.mjs';
import { _ as _sfc_main$6 } from './Select-BT5K87rT.mjs';
import { _ as _sfc_main$7 } from './Textarea-DcsECgx9.mjs';
import { u as usePatients } from './usePatients-ChuF3ImT.mjs';
import { l as localNumber } from './useDateFormatting-PLtQ78bC.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-DjkACiAr.mjs';
import { defineComponent, ref, computed, watch, withAsyncContext, mergeProps, withCtx, createTextVNode, unref, isRef, useModel, useTemplateRef, reactive, createVNode, toDisplayString, openBlock, createBlock, Fragment, createCommentVNode, mergeModels, useSSRContext } from 'vue';
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
import './useDirection-CEwcIFDz.mjs';
import './useFormControl-yNWnq054.mjs';
import './PopperArrow-XrulOaaZ.mjs';
import '@floating-ui/vue';
import '@internationalized/date';

// app/components/PatientForm.vue?vue&type=script&setup=true&lang.ts
var PatientForm_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "PatientForm",
	__ssrInlineRender: true,
	props: /*@__PURE__*/ mergeModels({ patient: {} }, {
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
		const api = usePatients();
		const auth = useAuth();
		const toast = useToast();
		const nuxtApp = useNuxtApp();
		const form = useTemplateRef("patientForm");
		const pending = ref(false);
		const serviceMessage = ref("");
		const state = reactive({
			name: "",
			phone: "",
			age: "",
			gender: "",
			address: ""
		});
		const editing = computed(() => props.patient !== null);
		const genders = [
			{
				label: "Male",
				value: "Male"
			},
			{
				label: "Female",
				value: "Female"
			},
			{
				label: "Other",
				value: "Other"
			}
		];
		function populate() {
			Object.assign(state, {
				name: props.patient?.name ?? "",
				phone: props.patient?.phone ?? "",
				age: props.patient ? String(props.patient.age) : "",
				gender: props.patient?.gender ?? "",
				address: props.patient?.address ?? ""
			});
			serviceMessage.value = "";
			form.value?.clear();
		}
		function validate(value) {
			const errors = [];
			if (!value.name.trim()) errors.push({
				name: "name",
				message: "Enter the patient name."
			});
			else if (value.name.trim().length > 200) errors.push({
				name: "name",
				message: "Name must not exceed 200 characters."
			});
			if (value.phone.length > 32) errors.push({
				name: "phone",
				message: "Phone must not exceed 32 characters."
			});
			if (!genders.some((item) => item.value === value.gender)) errors.push({
				name: "gender",
				message: "Select a gender."
			});
			if (String(value.age).trim() === "" || !Number.isInteger(Number(value.age)) || Number(value.age) < 0 || Number(value.age) > 150) errors.push({
				name: "age",
				message: "Age must be a whole number between 0 and 150."
			});
			if (value.address.length > 1e3) errors.push({
				name: "address",
				message: "Address must not exceed 1000 characters."
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
				phone: state.phone.trim(),
				age: Number(state.age),
				gender: state.gender,
				address: state.address.trim()
			};
			let saved = null;
			try {
				saved = props.patient ? await api.update(props.patient.id, input) : await api.create(input);
			} catch (error) {
				const failure = error;
				const status = failure.statusCode || failure.status;
				const code = failure.data?.data?.code || failure.data?.code;
				const messages = {
					VALIDATION_ERROR: "Check the form details and try again.",
					NOT_FOUND: "Patient not found. Refresh the list and try again.",
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
					title: "Patient could not be saved",
					description: serviceMessage.value,
					color: "error"
				});
			} finally {
				pending.value = false;
			}
			if (saved) {
				open.value = false;
				toast.add({
					title: created ? "Patient registered" : "Patient information updated",
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
					phone: "",
					age: "",
					gender: "",
					address: ""
				});
				serviceMessage.value = "";
				form.value?.clear();
			}
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UModal = _sfc_main$2;
			const _component_UForm = _sfc_main$3;
			const _component_UFormField = _sfc_main$4;
			const _component_UInput = _sfc_main$1;
			const _component_USelect = _sfc_main$6;
			const _component_UTextarea = _sfc_main$7;
			const _component_UButton = _sfc_main;
			_push(ssrRenderComponent(_component_UModal, mergeProps({
				open: open.value,
				title: unref(editing) ? "Edit patient" : "New patient",
				description: "Enter the patient information.",
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
						ref: "patientForm",
						state: unref(state),
						validate,
						disabled: unref(pending),
						"loading-auto": false,
						novalidate: "",
						class: "patient-form",
						onSubmit: save,
						onError: focusError
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(`<p class="patient-owner" data-v-c7434e45${_scopeId}>`);
								if (__props.patient) _push(`<!--[-->Code: <bdi data-v-c7434e45${_scopeId}>${ssrInterpolate(__props.patient.code)}</bdi> · ID: ${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(__props.patient.id))}<!--]-->`);
								else _push(`<!--[-->The patient code is generated automatically.<!--]-->`);
								_push(`</p>`);
								_push(ssrRenderComponent(_component_UFormField, {
									name: "name",
									label: "Patient name",
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
											autocomplete: "off",
											size: "xl",
											class: "w-full",
											ui: { base: "patient-input" }
										}, null, _parent, _scopeId));
										else return [createVNode(_component_UInput, {
											modelValue: unref(state).name,
											"onUpdate:modelValue": ($event) => unref(state).name = $event,
											name: "name",
											dir: "auto",
											maxlength: 200,
											autocomplete: "off",
											size: "xl",
											class: "w-full",
											ui: { base: "patient-input" }
										}, null, 8, ["modelValue", "onUpdate:modelValue"])];
									}),
									_: 1
								}, _parent, _scopeId));
								_push(`<div class="patient-form-grid" data-v-c7434e45${_scopeId}>`);
								_push(ssrRenderComponent(_component_UFormField, {
									name: "phone",
									label: "Phone",
									hint: "Optional",
									size: "lg",
									ui: { label: "text-base" }
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(ssrRenderComponent(_component_UInput, {
											modelValue: unref(state).phone,
											"onUpdate:modelValue": ($event) => unref(state).phone = $event,
											name: "phone",
											type: "tel",
											dir: "ltr",
											maxlength: 32,
											size: "xl",
											class: "w-full",
											ui: { base: "patient-input" }
										}, null, _parent, _scopeId));
										else return [createVNode(_component_UInput, {
											modelValue: unref(state).phone,
											"onUpdate:modelValue": ($event) => unref(state).phone = $event,
											name: "phone",
											type: "tel",
											dir: "ltr",
											maxlength: 32,
											size: "xl",
											class: "w-full",
											ui: { base: "patient-input" }
										}, null, 8, ["modelValue", "onUpdate:modelValue"])];
									}),
									_: 1
								}, _parent, _scopeId));
								_push(ssrRenderComponent(_component_UFormField, {
									name: "age",
									label: "Age (years)",
									size: "lg",
									required: "",
									ui: { label: "text-base" }
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(ssrRenderComponent(_component_UInput, {
											modelValue: unref(state).age,
											"onUpdate:modelValue": ($event) => unref(state).age = $event,
											name: "age",
											type: "number",
											inputmode: "numeric",
											min: 0,
											max: 150,
											step: 1,
											size: "xl",
											class: "w-full",
											ui: { base: "patient-input" }
										}, null, _parent, _scopeId));
										else return [createVNode(_component_UInput, {
											modelValue: unref(state).age,
											"onUpdate:modelValue": ($event) => unref(state).age = $event,
											name: "age",
											type: "number",
											inputmode: "numeric",
											min: 0,
											max: 150,
											step: 1,
											size: "xl",
											class: "w-full",
											ui: { base: "patient-input" }
										}, null, 8, ["modelValue", "onUpdate:modelValue"])];
									}),
									_: 1
								}, _parent, _scopeId));
								_push(ssrRenderComponent(_component_UFormField, {
									name: "gender",
									label: "Gender",
									size: "lg",
									required: "",
									ui: { label: "text-base" }
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(ssrRenderComponent(_component_USelect, {
											modelValue: unref(state).gender,
											"onUpdate:modelValue": ($event) => unref(state).gender = $event,
											name: "gender",
											items: genders,
											placeholder: "Select gender",
											size: "xl",
											class: "w-full",
											ui: { base: "patient-input" }
										}, null, _parent, _scopeId));
										else return [createVNode(_component_USelect, {
											modelValue: unref(state).gender,
											"onUpdate:modelValue": ($event) => unref(state).gender = $event,
											name: "gender",
											items: genders,
											placeholder: "Select gender",
											size: "xl",
											class: "w-full",
											ui: { base: "patient-input" }
										}, null, 8, ["modelValue", "onUpdate:modelValue"])];
									}),
									_: 1
								}, _parent, _scopeId));
								_push(`</div>`);
								_push(ssrRenderComponent(_component_UFormField, {
									name: "address",
									label: "Address",
									hint: "Optional",
									size: "lg",
									ui: { label: "text-base" }
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(ssrRenderComponent(_component_UTextarea, {
											modelValue: unref(state).address,
											"onUpdate:modelValue": ($event) => unref(state).address = $event,
											name: "address",
											dir: "auto",
											maxlength: 1e3,
											rows: 3,
											size: "xl",
											class: "w-full",
											ui: { base: "patient-input patient-address-input" }
										}, null, _parent, _scopeId));
										else return [createVNode(_component_UTextarea, {
											modelValue: unref(state).address,
											"onUpdate:modelValue": ($event) => unref(state).address = $event,
											name: "address",
											dir: "auto",
											maxlength: 1e3,
											rows: 3,
											size: "xl",
											class: "w-full",
											ui: { base: "patient-input patient-address-input" }
										}, null, 8, ["modelValue", "onUpdate:modelValue"])];
									}),
									_: 1
								}, _parent, _scopeId));
								if (unref(serviceMessage)) _push(`<p class="patient-message" role="alert" data-v-c7434e45${_scopeId}>${ssrInterpolate(unref(serviceMessage))}</p>`);
								else _push(`<!---->`);
								_push(`<div class="patient-form-actions" data-v-c7434e45${_scopeId}>`);
								_push(ssrRenderComponent(_component_UButton, {
									type: "submit",
									size: "lg",
									icon: "i-lucide-save",
									loading: unref(pending),
									disabled: unref(pending)
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(`${ssrInterpolate(unref(editing) ? "Save changes" : "Register patient")}`);
										else return [createTextVNode(toDisplayString(unref(editing) ? "Save changes" : "Register patient"), 1)];
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
								createVNode("p", { class: "patient-owner" }, [__props.patient ? (openBlock(), createBlock(Fragment, { key: 0 }, [
									createTextVNode("Code: "),
									createVNode("bdi", null, toDisplayString(__props.patient.code), 1),
									createTextVNode(" · ID: " + toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(__props.patient.id)), 1)
								], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [createTextVNode("The patient code is generated automatically.")], 64))]),
								createVNode(_component_UFormField, {
									name: "name",
									label: "Patient name",
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
										autocomplete: "off",
										size: "xl",
										class: "w-full",
										ui: { base: "patient-input" }
									}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
									_: 1
								}),
								createVNode("div", { class: "patient-form-grid" }, [
									createVNode(_component_UFormField, {
										name: "phone",
										label: "Phone",
										hint: "Optional",
										size: "lg",
										ui: { label: "text-base" }
									}, {
										default: withCtx(() => [createVNode(_component_UInput, {
											modelValue: unref(state).phone,
											"onUpdate:modelValue": ($event) => unref(state).phone = $event,
											name: "phone",
											type: "tel",
											dir: "ltr",
											maxlength: 32,
											size: "xl",
											class: "w-full",
											ui: { base: "patient-input" }
										}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
										_: 1
									}),
									createVNode(_component_UFormField, {
										name: "age",
										label: "Age (years)",
										size: "lg",
										required: "",
										ui: { label: "text-base" }
									}, {
										default: withCtx(() => [createVNode(_component_UInput, {
											modelValue: unref(state).age,
											"onUpdate:modelValue": ($event) => unref(state).age = $event,
											name: "age",
											type: "number",
											inputmode: "numeric",
											min: 0,
											max: 150,
											step: 1,
											size: "xl",
											class: "w-full",
											ui: { base: "patient-input" }
										}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
										_: 1
									}),
									createVNode(_component_UFormField, {
										name: "gender",
										label: "Gender",
										size: "lg",
										required: "",
										ui: { label: "text-base" }
									}, {
										default: withCtx(() => [createVNode(_component_USelect, {
											modelValue: unref(state).gender,
											"onUpdate:modelValue": ($event) => unref(state).gender = $event,
											name: "gender",
											items: genders,
											placeholder: "Select gender",
											size: "xl",
											class: "w-full",
											ui: { base: "patient-input" }
										}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
										_: 1
									})
								]),
								createVNode(_component_UFormField, {
									name: "address",
									label: "Address",
									hint: "Optional",
									size: "lg",
									ui: { label: "text-base" }
								}, {
									default: withCtx(() => [createVNode(_component_UTextarea, {
										modelValue: unref(state).address,
										"onUpdate:modelValue": ($event) => unref(state).address = $event,
										name: "address",
										dir: "auto",
										maxlength: 1e3,
										rows: 3,
										size: "xl",
										class: "w-full",
										ui: { base: "patient-input patient-address-input" }
									}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
									_: 1
								}),
								unref(serviceMessage) ? (openBlock(), createBlock("p", {
									key: 0,
									class: "patient-message",
									role: "alert"
								}, toDisplayString(unref(serviceMessage)), 1)) : createCommentVNode("", true),
								createVNode("div", { class: "patient-form-actions" }, [createVNode(_component_UButton, {
									type: "submit",
									size: "lg",
									icon: "i-lucide-save",
									loading: unref(pending),
									disabled: unref(pending)
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(editing) ? "Save changes" : "Register patient"), 1)]),
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
						ref: "patientForm",
						state: unref(state),
						validate,
						disabled: unref(pending),
						"loading-auto": false,
						novalidate: "",
						class: "patient-form",
						onSubmit: save,
						onError: focusError
					}, {
						default: withCtx(() => [
							createVNode("p", { class: "patient-owner" }, [__props.patient ? (openBlock(), createBlock(Fragment, { key: 0 }, [
								createTextVNode("Code: "),
								createVNode("bdi", null, toDisplayString(__props.patient.code), 1),
								createTextVNode(" · ID: " + toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(__props.patient.id)), 1)
							], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [createTextVNode("The patient code is generated automatically.")], 64))]),
							createVNode(_component_UFormField, {
								name: "name",
								label: "Patient name",
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
									autocomplete: "off",
									size: "xl",
									class: "w-full",
									ui: { base: "patient-input" }
								}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
								_: 1
							}),
							createVNode("div", { class: "patient-form-grid" }, [
								createVNode(_component_UFormField, {
									name: "phone",
									label: "Phone",
									hint: "Optional",
									size: "lg",
									ui: { label: "text-base" }
								}, {
									default: withCtx(() => [createVNode(_component_UInput, {
										modelValue: unref(state).phone,
										"onUpdate:modelValue": ($event) => unref(state).phone = $event,
										name: "phone",
										type: "tel",
										dir: "ltr",
										maxlength: 32,
										size: "xl",
										class: "w-full",
										ui: { base: "patient-input" }
									}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
									_: 1
								}),
								createVNode(_component_UFormField, {
									name: "age",
									label: "Age (years)",
									size: "lg",
									required: "",
									ui: { label: "text-base" }
								}, {
									default: withCtx(() => [createVNode(_component_UInput, {
										modelValue: unref(state).age,
										"onUpdate:modelValue": ($event) => unref(state).age = $event,
										name: "age",
										type: "number",
										inputmode: "numeric",
										min: 0,
										max: 150,
										step: 1,
										size: "xl",
										class: "w-full",
										ui: { base: "patient-input" }
									}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
									_: 1
								}),
								createVNode(_component_UFormField, {
									name: "gender",
									label: "Gender",
									size: "lg",
									required: "",
									ui: { label: "text-base" }
								}, {
									default: withCtx(() => [createVNode(_component_USelect, {
										modelValue: unref(state).gender,
										"onUpdate:modelValue": ($event) => unref(state).gender = $event,
										name: "gender",
										items: genders,
										placeholder: "Select gender",
										size: "xl",
										class: "w-full",
										ui: { base: "patient-input" }
									}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
									_: 1
								})
							]),
							createVNode(_component_UFormField, {
								name: "address",
								label: "Address",
								hint: "Optional",
								size: "lg",
								ui: { label: "text-base" }
							}, {
								default: withCtx(() => [createVNode(_component_UTextarea, {
									modelValue: unref(state).address,
									"onUpdate:modelValue": ($event) => unref(state).address = $event,
									name: "address",
									dir: "auto",
									maxlength: 1e3,
									rows: 3,
									size: "xl",
									class: "w-full",
									ui: { base: "patient-input patient-address-input" }
								}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
								_: 1
							}),
							unref(serviceMessage) ? (openBlock(), createBlock("p", {
								key: 0,
								class: "patient-message",
								role: "alert"
							}, toDisplayString(unref(serviceMessage)), 1)) : createCommentVNode("", true),
							createVNode("div", { class: "patient-form-actions" }, [createVNode(_component_UButton, {
								type: "submit",
								size: "lg",
								icon: "i-lucide-save",
								loading: unref(pending),
								disabled: unref(pending)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(editing) ? "Save changes" : "Register patient"), 1)]),
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
// app/components/PatientForm.vue
var _sfc_setup$1 = PatientForm_vue_vue_type_script_setup_true_lang_default.setup;
PatientForm_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PatientForm.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var PatientForm_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(PatientForm_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-c7434e45"]]), { __name: "PatientForm" });
// app/pages/patients.vue?vue&type=script&setup=true&lang.ts
var pageSize = 10;
var patients_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "patients",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		useHead({ title: "Patients — RoghtiaSystem" });
		const api = usePatients();
		const auth = useAuth();
		const toast = useToast();
		const nuxtApp = useNuxtApp();
		const search = ref("");
		const appliedSearch = ref("");
		const page = ref(1);
		const genders = {
			Male: "Male",
			Female: "Female",
			Other: "Other"
		};
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
				serviceMessage.value = status === 429 ? "Too many attempts. Please try again later." : status === 403 ? "You do not have permission to view this information." : "Unable to load patients. Please try again.";
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
		function addPatient() {
			++editSequence;
			editingId.value = null;
			selected.value = null;
			formOpen.value = true;
		}
		async function editPatient(patient) {
			if (editingId.value !== null) return;
			const sequence = ++editSequence;
			const userId = auth.user.value?.id;
			editingId.value = patient.id;
			try {
				const fresh = await api.get(patient.id);
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
					description: status === 404 ? "Patients not found. Refresh the list." : "Please try again.",
					color: "error"
				});
			} finally {
				if (sequence === editSequence) editingId.value = null;
			}
		}
		async function onSaved(patient, created) {
			if (patient.user.id !== auth.user.value?.id) return;
			if (created) {
				clearTimeout(searchTimer);
				search.value = "";
				appliedSearch.value = "";
				page.value = 1;
				loaded.value = false;
			} else result.value.items = result.value.items.map((item) => item.id === patient.id ? patient : item);
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
			editingId.value = null;
		});
		[__temp, __restore] = withAsyncContext(() => load()), await __temp, __restore();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UButton = _sfc_main;
			const _component_UIcon = _sfc_main$5;
			const _component_UInput = _sfc_main$1;
			const _component_PatientForm = PatientForm_default;
			_push(`<section${ssrRenderAttrs(mergeProps({
				class: "patients-page",
				"aria-labelledby": "patients-title"
			}, _attrs))} data-v-63013410><header class="page-heading" data-v-63013410><div data-v-63013410><div class="eyebrow" data-v-63013410><span data-v-63013410></span> Your patient list</div><h1 id="patients-title" data-v-63013410>Patients</h1><p data-v-63013410>Register patients, view their details and keep them up to date.</p></div>`);
			_push(ssrRenderComponent(_component_UButton, {
				type: "button",
				icon: "i-lucide-plus",
				size: "lg",
				class: "add-patient-button",
				onClick: addPatient
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`New patient`);
					else return [createTextVNode("New patient")];
				}),
				_: 1
			}, _parent));
			_push(`</header><section class="panel patients-panel" aria-labelledby="patients-list-title"${ssrRenderAttr("aria-busy", unref(loading))} data-v-63013410><header class="patients-toolbar" data-v-63013410><div class="patients-list-heading" data-v-63013410><span class="patients-icon" aria-hidden="true" data-v-63013410>`);
			_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-users-round" }, null, _parent));
			_push(`</span><div data-v-63013410><h2 id="patients-list-title" data-v-63013410>${ssrInterpolate(unref(appliedSearch) ? "Search results" : "Registered patients")}</h2><p aria-live="polite" data-v-63013410>${ssrInterpolate(unref(loaded) ? `${("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(result).total)} Patients` : "Your patients")}</p></div></div><form class="patients-search" role="search" data-v-63013410>`);
			_push(ssrRenderComponent(_component_UInput, {
				modelValue: unref(search),
				"onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
				name: "patientSearch",
				icon: "i-lucide-search",
				placeholder: "Search by name, code or phone",
				"aria-label": "Search patients",
				maxlength: 200,
				size: "xl",
				class: "w-full",
				ui: { base: "patients-search-input" }
			}, null, _parent));
			_push(ssrRenderComponent(_component_UButton, {
				type: "submit",
				size: "lg",
				color: "neutral",
				variant: "outline",
				loading: unref(loading),
				"aria-label": "Search patients"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Search`);
					else return [createTextVNode("Search")];
				}),
				_: 1
			}, _parent));
			_push(`</form></header>`);
			if (unref(serviceMessage)) {
				_push(`<div class="patients-error" role="alert" data-v-63013410>`);
				_push(ssrRenderComponent(_component_UIcon, {
					name: "i-lucide-circle-alert",
					"aria-hidden": "true"
				}, null, _parent));
				_push(`<p data-v-63013410>${ssrInterpolate(unref(serviceMessage))}</p>`);
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
				_push(`<div class="patients-state" role="status" data-v-63013410>`);
				_push(ssrRenderComponent(_component_UIcon, {
					name: "i-lucide-loader-circle",
					class: "animate-spin",
					"aria-hidden": "true"
				}, null, _parent));
				_push(`<p data-v-63013410>Loading patients…</p></div>`);
			} else if (unref(loaded) && unref(result).items.length) {
				_push(`<!--[--><div class="patients-table-wrap" data-v-63013410><table class="patients-table" data-v-63013410><caption class="sr-only" data-v-63013410>Your patient information</caption><thead data-v-63013410><tr data-v-63013410><th scope="col" data-v-63013410>No.</th><th scope="col" data-v-63013410>Patient name</th><th scope="col" data-v-63013410>Code</th><th scope="col" data-v-63013410>Phone</th><th scope="col" data-v-63013410>Age</th><th scope="col" data-v-63013410>Gender</th><th scope="col" data-v-63013410>Address</th><th scope="col" data-v-63013410><span class="sr-only" data-v-63013410>Patient actions</span></th></tr></thead><tbody data-v-63013410><!--[-->`);
				ssrRenderList$2(unref(result).items, (patient) => {
					_push(`<tr data-v-63013410><td class="patient-id" data-v-63013410>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(patient.id))}</td><th scope="row" data-v-63013410><bdi data-v-63013410>${ssrInterpolate(patient.name)}</bdi></th><td data-v-63013410><bdi data-v-63013410>${ssrInterpolate(patient.code)}</bdi></td><td data-v-63013410><bdi dir="ltr" data-v-63013410>${ssrInterpolate(patient.phone || "—")}</bdi></td><td data-v-63013410><span class="patient-quantity" data-v-63013410>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(patient.age))}</span></td><td data-v-63013410>${ssrInterpolate(genders[patient.gender])}</td><td data-v-63013410><p class="patient-remarks" dir="auto" data-v-63013410>${ssrInterpolate(patient.address || "—")}</p></td><td data-v-63013410><div class="patient-actions" data-v-63013410>`);
					_push(ssrRenderComponent(_component_UButton, {
						to: `/patient-history/${patient.id}`,
						color: "neutral",
						variant: "outline",
						icon: "i-lucide-notebook-tabs",
						size: "lg"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`History`);
							else return [createTextVNode("History")];
						}),
						_: 2
					}, _parent));
					_push(ssrRenderComponent(_component_UButton, {
						type: "button",
						color: "neutral",
						variant: "ghost",
						icon: "i-lucide-pencil-line",
						size: "lg",
						loading: unref(editingId) === patient.id,
						disabled: unref(editingId) !== null,
						"aria-label": `${patient.name}: Edit`,
						onClick: ($event) => editPatient(patient)
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`Edit`);
							else return [createTextVNode("Edit")];
						}),
						_: 2
					}, _parent));
					_push(`</div></td></tr>`);
				});
				_push(`<!--]--></tbody></table></div><div class="patients-cards" data-v-63013410><!--[-->`);
				ssrRenderList$2(unref(result).items, (patient) => {
					_push(`<article class="patient-card" data-v-63013410><header data-v-63013410><div data-v-63013410><p class="patient-id" data-v-63013410>No. ${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(patient.id))}</p><h3 data-v-63013410><bdi data-v-63013410>${ssrInterpolate(patient.name)}</bdi></h3></div><div class="patient-card-actions" data-v-63013410>`);
					_push(ssrRenderComponent(_component_UButton, {
						to: `/patient-history/${patient.id}`,
						color: "neutral",
						variant: "outline",
						icon: "i-lucide-notebook-tabs",
						size: "lg"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`History`);
							else return [createTextVNode("History")];
						}),
						_: 2
					}, _parent));
					_push(ssrRenderComponent(_component_UButton, {
						type: "button",
						color: "neutral",
						variant: "outline",
						icon: "i-lucide-pencil-line",
						size: "lg",
						loading: unref(editingId) === patient.id,
						disabled: unref(editingId) !== null,
						"aria-label": `${patient.name}: Edit`,
						onClick: ($event) => editPatient(patient)
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`Edit`);
							else return [createTextVNode("Edit")];
						}),
						_: 2
					}, _parent));
					_push(`</div></header><dl data-v-63013410><div data-v-63013410><dt data-v-63013410>Code</dt><dd data-v-63013410><bdi data-v-63013410>${ssrInterpolate(patient.code)}</bdi></dd></div><div data-v-63013410><dt data-v-63013410>Phone</dt><dd data-v-63013410><bdi dir="ltr" data-v-63013410>${ssrInterpolate(patient.phone || "—")}</bdi></dd></div><div data-v-63013410><dt data-v-63013410>Gender</dt><dd data-v-63013410>${ssrInterpolate(genders[patient.gender])}</dd></div><div data-v-63013410><dt data-v-63013410>Age</dt><dd class="patient-quantity" data-v-63013410>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(patient.age))}</dd></div>`);
					if (patient.address) _push(`<div class="patient-card-remarks" data-v-63013410><dt data-v-63013410>Address</dt><dd dir="auto" data-v-63013410>${ssrInterpolate(patient.address)}</dd></div>`);
					else _push(`<!---->`);
					_push(`</dl></article>`);
				});
				_push(`<!--]--></div><footer class="patients-pagination" data-v-63013410><p data-v-63013410>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(rangeStart)))}–${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(rangeEnd)))} of ${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(result).total))} patients</p><nav aria-label="Patient pagination" data-v-63013410>`);
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
				_push(`<span aria-live="polite" data-v-63013410>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(page)))} / ${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(totalPages)))}</span>`);
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
				_push(`<div class="patients-state patients-empty" data-v-63013410><span class="patients-empty-icon" data-v-63013410>`);
				_push(ssrRenderComponent(_component_UIcon, {
					name: unref(appliedSearch) ? "i-lucide-search" : "i-lucide-users-round",
					"aria-hidden": "true"
				}, null, _parent));
				_push(`</span><h3 data-v-63013410>${ssrInterpolate(unref(appliedSearch) ? "No patients found" : "No patients registered yet")}</h3><p data-v-63013410>${ssrInterpolate(unref(appliedSearch) ? "Try another name, code or phone number." : "Register your first patient.")}</p>`);
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
						if (_push) _push(`Show all patients`);
						else return [createTextVNode("Show all patients")];
					}),
					_: 1
				}, _parent));
				else _push(ssrRenderComponent(_component_UButton, {
					type: "button",
					size: "lg",
					icon: "i-lucide-plus",
					onClick: addPatient
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`New patient`);
						else return [createTextVNode("New patient")];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else _push(`<!---->`);
			_push(`</section>`);
			_push(ssrRenderComponent(_component_PatientForm, {
				open: unref(formOpen),
				"onUpdate:open": ($event) => isRef(formOpen) ? formOpen.value = $event : null,
				patient: unref(selected),
				onSaved
			}, null, _parent));
			_push(`</section>`);
		};
	}
});
// app/pages/patients.vue
var _sfc_setup = patients_vue_vue_type_script_setup_true_lang_default.setup;
patients_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/patients.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var patients_default = /*#__PURE__*/ _plugin_vue_export_helper_default(patients_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-63013410"]]);

export { patients_default as default };;globalThis.__timing__.logEnd('Load chunks/build/patients-CinF76gb');
//# sourceMappingURL=patients-CinF76gb.mjs.map
