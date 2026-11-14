globalThis.__timing__.logStart('Load chunks/build/PINCodeModal-GmrNsRhT');import { _ as _sfc_main } from './Modal-BsBsKz59.mjs';
import { _ as _sfc_main$1 } from './Form-DKt9N6vo.mjs';
import { _ as _sfc_main$2 } from './FormField-WNpvFFAW.mjs';
import { _ as _sfc_main$3 } from './Input-Bs-tvl7x.mjs';
import { e as useAuth, K as useToast, _ as _sfc_main$4, $ as $fetch$1, n as navigateTo } from '../virtual/entry.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-DjkACiAr.mjs';
import { defineComponent, useModel, useTemplateRef, ref, reactive, watch, mergeProps, unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

// app/components/PINCodeModal.vue?vue&type=script&setup=true&lang.ts
var PINCodeModal_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "PINCodeModal",
	__ssrInlineRender: true,
	props: {
		"open": {
			type: Boolean,
			default: false
		},
		"openModifiers": {}
	},
	emits: ["update:open"],
	setup(__props) {
		const open = useModel(__props, "open");
		const auth = useAuth();
		const toast = useToast();
		const form = useTemplateRef("pinForm");
		const pending = ref(false);
		const serviceMessage = ref("");
		const credentials = reactive({
			currentPassword: "",
			pinCode: ""
		});
		function validate(state) {
			const errors = [];
			if (!state.currentPassword || state.currentPassword.length > 128) errors.push({
				name: "currentPassword",
				message: "Enter your current password."
			});
			if (!/^[0-9]{6,10}$/.test(state.pinCode)) errors.push({
				name: "pinCode",
				message: "PIN must contain 6 to 10 digits."
			});
			return errors;
		}
		function focusError(event) {
			if (event.errors[0]?.id) (void 0).getElementById(event.errors[0].id)?.focus();
		}
		async function submit() {
			if (pending.value) return;
			pending.value = true;
			serviceMessage.value = "";
			try {
				await $fetch$1("/api/auth/set-pin", {
					method: "POST",
					body: {
						currentPassword: credentials.currentPassword,
						pinCode: credentials.pinCode
					},
					headers: { "x-roghtiasystem-request": "1" },
					retry: 0
				});
				Object.assign(credentials, {
					currentPassword: "",
					pinCode: ""
				});
				open.value = false;
				toast.add({
					title: "PIN saved",
					description: "You can now use this PIN to reset a forgotten password.",
					color: "success",
					icon: "i-lucide-shield-check"
				});
			} catch (error) {
				const failure = error;
				const code = failure.data?.data?.code || failure.data?.code;
				const status = failure.statusCode || failure.status;
				const messages = {
					PASSWORD_INCORRECT: "Current password is incorrect.",
					VALIDATION_ERROR: "Check your password and PIN and try again.",
					TOO_MANY_REQUESTS: "Too many attempts. Please try again later.",
					INVALID_ORIGIN: "Refresh the page and try again."
				};
				if (status === 401 && code !== "PASSWORD_INCORRECT") {
					open.value = false;
					await auth.refresh();
					await navigateTo("/login");
					return;
				}
				serviceMessage.value = messages[code || ""] || "PIN could not be saved. Please try again.";
				if (code === "PASSWORD_INCORRECT") form.value?.setErrors([{
					name: "currentPassword",
					message: messages.PASSWORD_INCORRECT
				}]);
			} finally {
				pending.value = false;
			}
		}
		watch(open, (value) => {
			if (!value) {
				Object.assign(credentials, {
					currentPassword: "",
					pinCode: ""
				});
				serviceMessage.value = "";
				form.value?.clear();
			}
		});
		watch(credentials, () => {
			serviceMessage.value = "";
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UModal = _sfc_main;
			const _component_UForm = _sfc_main$1;
			const _component_UFormField = _sfc_main$2;
			const _component_UInput = _sfc_main$3;
			const _component_UButton = _sfc_main$4;
			_push(ssrRenderComponent(_component_UModal, mergeProps({
				open: open.value,
				title: "Recovery PIN",
				description: "Enter your current password and choose a PIN with 6 to 10 digits. Keep this PIN in a safe place.",
				close: !unref(pending),
				dismissible: !unref(pending),
				dir: "ltr",
				ui: {
					content: "max-w-lg min-w-0",
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
						ref: "pinForm",
						state: unref(credentials),
						validate,
						disabled: unref(pending),
						novalidate: "",
						class: "pin-form",
						onSubmit: submit,
						onError: focusError
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(ssrRenderComponent(_component_UFormField, {
									label: "Current password",
									name: "currentPassword",
									required: ""
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(ssrRenderComponent(_component_UInput, {
											modelValue: unref(credentials).currentPassword,
											"onUpdate:modelValue": ($event) => unref(credentials).currentPassword = $event,
											name: "currentPassword",
											type: "password",
											autocomplete: "current-password",
											placeholder: "Enter your current password",
											icon: "i-lucide-lock-keyhole",
											size: "xl",
											class: "w-full",
											ui: { base: "pin-input" }
										}, null, _parent, _scopeId));
										else return [createVNode(_component_UInput, {
											modelValue: unref(credentials).currentPassword,
											"onUpdate:modelValue": ($event) => unref(credentials).currentPassword = $event,
											name: "currentPassword",
											type: "password",
											autocomplete: "current-password",
											placeholder: "Enter your current password",
											icon: "i-lucide-lock-keyhole",
											size: "xl",
											class: "w-full",
											ui: { base: "pin-input" }
										}, null, 8, ["modelValue", "onUpdate:modelValue"])];
									}),
									_: 1
								}, _parent, _scopeId));
								_push(ssrRenderComponent(_component_UFormField, {
									label: "PIN",
									name: "pinCode",
									required: "",
									help: "6 to 10 digits"
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(ssrRenderComponent(_component_UInput, {
											modelValue: unref(credentials).pinCode,
											"onUpdate:modelValue": [($event) => unref(credentials).pinCode = $event, (value) => unref(credentials).pinCode = String(value || "").replace(/[^0-9]/g, "").slice(0, 10)],
											name: "pinCode",
											type: "text",
											inputmode: "numeric",
											dir: "ltr",
											autocomplete: "off",
											pattern: "[0-9]*",
											maxlength: "10",
											placeholder: "Enter new PIN",
											icon: "i-lucide-key-round",
											size: "xl",
											class: "w-full",
											ui: { base: "pin-input" }
										}, null, _parent, _scopeId));
										else return [createVNode(_component_UInput, {
											modelValue: unref(credentials).pinCode,
											"onUpdate:modelValue": [($event) => unref(credentials).pinCode = $event, (value) => unref(credentials).pinCode = String(value || "").replace(/[^0-9]/g, "").slice(0, 10)],
											name: "pinCode",
											type: "text",
											inputmode: "numeric",
											dir: "ltr",
											autocomplete: "off",
											pattern: "[0-9]*",
											maxlength: "10",
											placeholder: "Enter new PIN",
											icon: "i-lucide-key-round",
											size: "xl",
											class: "w-full",
											ui: { base: "pin-input" }
										}, null, 8, ["modelValue", "onUpdate:modelValue"])];
									}),
									_: 1
								}, _parent, _scopeId));
								if (unref(serviceMessage)) _push(`<p class="pin-message" role="alert" data-v-64618333${_scopeId}>${ssrInterpolate(unref(serviceMessage))}</p>`);
								else _push(`<!---->`);
								_push(`<div class="pin-actions" data-v-64618333${_scopeId}>`);
								_push(ssrRenderComponent(_component_UButton, {
									type: "submit",
									size: "lg",
									icon: "i-lucide-save",
									loading: unref(pending),
									disabled: unref(pending)
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(`Save PIN`);
										else return [createTextVNode("Save PIN")];
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
								createVNode(_component_UFormField, {
									label: "Current password",
									name: "currentPassword",
									required: ""
								}, {
									default: withCtx(() => [createVNode(_component_UInput, {
										modelValue: unref(credentials).currentPassword,
										"onUpdate:modelValue": ($event) => unref(credentials).currentPassword = $event,
										name: "currentPassword",
										type: "password",
										autocomplete: "current-password",
										placeholder: "Enter your current password",
										icon: "i-lucide-lock-keyhole",
										size: "xl",
										class: "w-full",
										ui: { base: "pin-input" }
									}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
									_: 1
								}),
								createVNode(_component_UFormField, {
									label: "PIN",
									name: "pinCode",
									required: "",
									help: "6 to 10 digits"
								}, {
									default: withCtx(() => [createVNode(_component_UInput, {
										modelValue: unref(credentials).pinCode,
										"onUpdate:modelValue": [($event) => unref(credentials).pinCode = $event, (value) => unref(credentials).pinCode = String(value || "").replace(/[^0-9]/g, "").slice(0, 10)],
										name: "pinCode",
										type: "text",
										inputmode: "numeric",
										dir: "ltr",
										autocomplete: "off",
										pattern: "[0-9]*",
										maxlength: "10",
										placeholder: "Enter new PIN",
										icon: "i-lucide-key-round",
										size: "xl",
										class: "w-full",
										ui: { base: "pin-input" }
									}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
									_: 1
								}),
								unref(serviceMessage) ? (openBlock(), createBlock("p", {
									key: 0,
									class: "pin-message",
									role: "alert"
								}, toDisplayString(unref(serviceMessage)), 1)) : createCommentVNode("", true),
								createVNode("div", { class: "pin-actions" }, [createVNode(_component_UButton, {
									type: "submit",
									size: "lg",
									icon: "i-lucide-save",
									loading: unref(pending),
									disabled: unref(pending)
								}, {
									default: withCtx(() => [createTextVNode("Save PIN")]),
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
						ref: "pinForm",
						state: unref(credentials),
						validate,
						disabled: unref(pending),
						novalidate: "",
						class: "pin-form",
						onSubmit: submit,
						onError: focusError
					}, {
						default: withCtx(() => [
							createVNode(_component_UFormField, {
								label: "Current password",
								name: "currentPassword",
								required: ""
							}, {
								default: withCtx(() => [createVNode(_component_UInput, {
									modelValue: unref(credentials).currentPassword,
									"onUpdate:modelValue": ($event) => unref(credentials).currentPassword = $event,
									name: "currentPassword",
									type: "password",
									autocomplete: "current-password",
									placeholder: "Enter your current password",
									icon: "i-lucide-lock-keyhole",
									size: "xl",
									class: "w-full",
									ui: { base: "pin-input" }
								}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
								_: 1
							}),
							createVNode(_component_UFormField, {
								label: "PIN",
								name: "pinCode",
								required: "",
								help: "6 to 10 digits"
							}, {
								default: withCtx(() => [createVNode(_component_UInput, {
									modelValue: unref(credentials).pinCode,
									"onUpdate:modelValue": [($event) => unref(credentials).pinCode = $event, (value) => unref(credentials).pinCode = String(value || "").replace(/[^0-9]/g, "").slice(0, 10)],
									name: "pinCode",
									type: "text",
									inputmode: "numeric",
									dir: "ltr",
									autocomplete: "off",
									pattern: "[0-9]*",
									maxlength: "10",
									placeholder: "Enter new PIN",
									icon: "i-lucide-key-round",
									size: "xl",
									class: "w-full",
									ui: { base: "pin-input" }
								}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
								_: 1
							}),
							unref(serviceMessage) ? (openBlock(), createBlock("p", {
								key: 0,
								class: "pin-message",
								role: "alert"
							}, toDisplayString(unref(serviceMessage)), 1)) : createCommentVNode("", true),
							createVNode("div", { class: "pin-actions" }, [createVNode(_component_UButton, {
								type: "submit",
								size: "lg",
								icon: "i-lucide-save",
								loading: unref(pending),
								disabled: unref(pending)
							}, {
								default: withCtx(() => [createTextVNode("Save PIN")]),
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
// app/components/PINCodeModal.vue
var _sfc_setup = PINCodeModal_vue_vue_type_script_setup_true_lang_default.setup;
PINCodeModal_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PINCodeModal.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var PINCodeModal_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(PINCodeModal_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-64618333"]]), { __name: "PINCodeModal" });

export { PINCodeModal_default as P };;globalThis.__timing__.logEnd('Load chunks/build/PINCodeModal-GmrNsRhT');
//# sourceMappingURL=PINCodeModal-GmrNsRhT.mjs.map
