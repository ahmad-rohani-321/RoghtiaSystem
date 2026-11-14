globalThis.__timing__.logStart('Load chunks/build/reset-password-Dgs4HBdC');import { a as useHead, b as _sfc_main$5, _ as _sfc_main$4, N as NuxtLink, $ as $fetch$1 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './Form-DKt9N6vo.mjs';
import { _ as _sfc_main$2 } from './FormField-WNpvFFAW.mjs';
import { _ as _sfc_main$3 } from './Input-Bs-tvl7x.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-DjkACiAr.mjs';
import { reactive, ref, mergeProps, unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
import './Label-CeDlFZe1.mjs';

// app/pages/reset-password.vue
var _sfc_main = {
	__name: "reset-password",
	__ssrInlineRender: true,
	setup(__props) {
		useHead({ title: "Reset password — RoghtiaSystem" });
		const verification = reactive({
			userName: "",
			pinCode: ""
		});
		const replacement = reactive({
			newPassword: "",
			confirmPassword: ""
		});
		const step = ref("verify");
		const pending = ref(false);
		const message = ref("");
		const showPassword = ref(false);
		function validateVerification(state) {
			const errors = [];
			if (!state.userName?.trim() || state.userName.trim().length > 64) errors.push({
				name: "userName",
				message: "Enter a valid username."
			});
			if (!/^[0-9]{6,10}$/.test(state.pinCode)) errors.push({
				name: "pinCode",
				message: "PIN must contain 6 to 10 digits."
			});
			return errors;
		}
		function validateReplacement(state) {
			const errors = [];
			if (state.newPassword.length < 8 || state.newPassword.length > 128) errors.push({
				name: "newPassword",
				message: "New password must contain 8 to 128 characters."
			});
			if (state.newPassword === verification.pinCode) errors.push({
				name: "newPassword",
				message: "Password must differ from the PIN code."
			});
			if (state.confirmPassword !== state.newPassword) errors.push({
				name: "confirmPassword",
				message: "Passwords do not match."
			});
			return errors;
		}
		function showRequestError(error) {
			const code = error?.data?.data?.code || error?.data?.code || ((error?.statusCode || error?.status) === 401 ? "INVALID_PIN" : "");
			const messages = {
				INVALID_PIN: "Username or PIN is incorrect. Please try again.",
				VALIDATION_ERROR: "Check the information and try again.",
				TOO_MANY_REQUESTS: "Too many attempts. Please try again later.",
				RESET_CONFLICT: "Unable to change password. Please try again.",
				INVALID_ORIGIN: "Refresh the page and try again."
			};
			if (code === "INVALID_PIN") {
				step.value = "verify";
				verification.pinCode = "";
				replacement.newPassword = "";
				replacement.confirmPassword = "";
			}
			message.value = messages[code] || "Unable to connect to the server. Please try again.";
		}
		async function verify() {
			if (pending.value) return;
			pending.value = true;
			message.value = "";
			try {
				await $fetch$1("/api/auth/verify-pin", {
					method: "POST",
					body: {
						userName: verification.userName.trim(),
						pinCode: verification.pinCode
					},
					headers: { "x-roghtiasystem-request": "1" },
					retry: 0
				});
				step.value = "replace";
			} catch (error) {
				showRequestError(error);
			} finally {
				pending.value = false;
			}
		}
		async function resetPassword() {
			if (pending.value) return;
			pending.value = true;
			message.value = "";
			try {
				await $fetch$1("/api/auth/reset-password", {
					method: "POST",
					body: {
						userName: verification.userName.trim(),
						pinCode: verification.pinCode,
						newPassword: replacement.newPassword
					},
					headers: { "x-roghtiasystem-request": "1" },
					retry: 0
				});
				verification.pinCode = "";
				replacement.newPassword = "";
				replacement.confirmPassword = "";
				step.value = "done";
			} catch (error) {
				showRequestError(error);
			} finally {
				pending.value = false;
			}
		}
		function focusError(event) {
			if (event.errors?.[0]?.id) (void 0).getElementById(event.errors[0].id)?.focus();
		}
		function updatePIN(value) {
			verification.pinCode = String(value || "").replace(/[^0-9]/g, "").slice(0, 10);
			message.value = "";
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UIcon = _sfc_main$5;
			const _component_UForm = _sfc_main$1;
			const _component_UFormField = _sfc_main$2;
			const _component_UInput = _sfc_main$3;
			const _component_UButton = _sfc_main$4;
			const _component_NuxtLink = NuxtLink;
			_push(`<main${ssrRenderAttrs(mergeProps({
				class: "reset-page",
				"aria-labelledby": "reset-title"
			}, _attrs))} data-v-e9b2ec5d><section class="reset-card" data-v-e9b2ec5d><div class="reset-intro" data-v-e9b2ec5d><span class="brand-icon reset-logo" aria-hidden="true" data-v-e9b2ec5d>`);
			_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-heart-pulse" }, null, _parent));
			_push(`</span><span class="reset-brand" data-v-e9b2ec5d>RoghtiaSystem<span data-v-e9b2ec5d>.</span></span><h1 id="reset-title" data-v-e9b2ec5d>Reset password</h1>`);
			if (unref(step) === "verify") _push(`<p data-v-e9b2ec5d>Enter your username and the PIN you chose when creating your account.</p>`);
			else if (unref(step) === "replace") _push(`<p data-v-e9b2ec5d>PIN verified. Choose a new password.</p>`);
			else _push(`<p data-v-e9b2ec5d>Your password has changed. Sign in with your new password.</p>`);
			_push(`</div>`);
			if (unref(step) === "verify") _push(ssrRenderComponent(_component_UForm, {
				state: unref(verification),
				validate: validateVerification,
				disabled: unref(pending),
				novalidate: "",
				class: "reset-form",
				onSubmit: verify,
				onError: focusError
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_component_UFormField, {
							label: "Username",
							name: "userName",
							required: ""
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(_component_UInput, {
									modelValue: unref(verification).userName,
									"onUpdate:modelValue": [($event) => unref(verification).userName = $event, ($event) => message.value = ""],
									name: "userName",
									autocomplete: "username",
									autocapitalize: "none",
									spellcheck: false,
									placeholder: "Enter your username",
									icon: "i-lucide-user-round",
									size: "xl",
									class: "w-full",
									ui: { base: "reset-input" }
								}, null, _parent, _scopeId));
								else return [createVNode(_component_UInput, {
									modelValue: unref(verification).userName,
									"onUpdate:modelValue": [($event) => unref(verification).userName = $event, ($event) => message.value = ""],
									name: "userName",
									autocomplete: "username",
									autocapitalize: "none",
									spellcheck: false,
									placeholder: "Enter your username",
									icon: "i-lucide-user-round",
									size: "xl",
									class: "w-full",
									ui: { base: "reset-input" }
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
									modelValue: unref(verification).pinCode,
									"onUpdate:modelValue": [($event) => unref(verification).pinCode = $event, updatePIN],
									name: "pinCode",
									type: "text",
									inputmode: "numeric",
									dir: "ltr",
									autocomplete: "off",
									pattern: "[0-9]*",
									maxlength: "10",
									placeholder: "Enter your PIN",
									icon: "i-lucide-key-round",
									size: "xl",
									class: "w-full",
									ui: { base: "reset-input" }
								}, null, _parent, _scopeId));
								else return [createVNode(_component_UInput, {
									modelValue: unref(verification).pinCode,
									"onUpdate:modelValue": [($event) => unref(verification).pinCode = $event, updatePIN],
									name: "pinCode",
									type: "text",
									inputmode: "numeric",
									dir: "ltr",
									autocomplete: "off",
									pattern: "[0-9]*",
									maxlength: "10",
									placeholder: "Enter your PIN",
									icon: "i-lucide-key-round",
									size: "xl",
									class: "w-full",
									ui: { base: "reset-input" }
								}, null, 8, ["modelValue", "onUpdate:modelValue"])];
							}),
							_: 1
						}, _parent, _scopeId));
						if (unref(message)) _push(`<p class="reset-message" role="alert" data-v-e9b2ec5d${_scopeId}>${ssrInterpolate(unref(message))}</p>`);
						else _push(`<!---->`);
						_push(ssrRenderComponent(_component_UButton, {
							type: "submit",
							size: "xl",
							block: "",
							loading: unref(pending),
							disabled: unref(pending),
							"trailing-icon": "i-lucide-arrow-right",
							class: "reset-submit"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Verify PIN`);
								else return [createTextVNode("Verify PIN")];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [
						createVNode(_component_UFormField, {
							label: "Username",
							name: "userName",
							required: ""
						}, {
							default: withCtx(() => [createVNode(_component_UInput, {
								modelValue: unref(verification).userName,
								"onUpdate:modelValue": [($event) => unref(verification).userName = $event, ($event) => message.value = ""],
								name: "userName",
								autocomplete: "username",
								autocapitalize: "none",
								spellcheck: false,
								placeholder: "Enter your username",
								icon: "i-lucide-user-round",
								size: "xl",
								class: "w-full",
								ui: { base: "reset-input" }
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
								modelValue: unref(verification).pinCode,
								"onUpdate:modelValue": [($event) => unref(verification).pinCode = $event, updatePIN],
								name: "pinCode",
								type: "text",
								inputmode: "numeric",
								dir: "ltr",
								autocomplete: "off",
								pattern: "[0-9]*",
								maxlength: "10",
								placeholder: "Enter your PIN",
								icon: "i-lucide-key-round",
								size: "xl",
								class: "w-full",
								ui: { base: "reset-input" }
							}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
							_: 1
						}),
						unref(message) ? (openBlock(), createBlock("p", {
							key: 0,
							class: "reset-message",
							role: "alert"
						}, toDisplayString(unref(message)), 1)) : createCommentVNode("", true),
						createVNode(_component_UButton, {
							type: "submit",
							size: "xl",
							block: "",
							loading: unref(pending),
							disabled: unref(pending),
							"trailing-icon": "i-lucide-arrow-right",
							class: "reset-submit"
						}, {
							default: withCtx(() => [createTextVNode("Verify PIN")]),
							_: 1
						}, 8, ["loading", "disabled"])
					];
				}),
				_: 1
			}, _parent));
			else if (unref(step) === "replace") _push(ssrRenderComponent(_component_UForm, {
				state: unref(replacement),
				validate: validateReplacement,
				disabled: unref(pending),
				novalidate: "",
				class: "reset-form",
				onSubmit: resetPassword,
				onError: focusError
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_component_UFormField, {
							label: "New password",
							name: "newPassword",
							required: ""
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(_component_UInput, {
									modelValue: unref(replacement).newPassword,
									"onUpdate:modelValue": [($event) => unref(replacement).newPassword = $event, ($event) => message.value = ""],
									name: "newPassword",
									type: unref(showPassword) ? "text" : "password",
									autocomplete: "new-password",
									placeholder: "Enter new password",
									icon: "i-lucide-lock-keyhole",
									size: "xl",
									class: "w-full",
									ui: { base: "reset-input" }
								}, {
									trailing: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(ssrRenderComponent(_component_UButton, {
											type: "button",
											color: "neutral",
											variant: "ghost",
											size: "sm",
											icon: unref(showPassword) ? "i-lucide-eye-off" : "i-lucide-eye",
											"aria-label": unref(showPassword) ? "Hide password" : "Show password",
											"aria-pressed": unref(showPassword),
											onClick: ($event) => showPassword.value = !unref(showPassword)
										}, null, _parent, _scopeId));
										else return [createVNode(_component_UButton, {
											type: "button",
											color: "neutral",
											variant: "ghost",
											size: "sm",
											icon: unref(showPassword) ? "i-lucide-eye-off" : "i-lucide-eye",
											"aria-label": unref(showPassword) ? "Hide password" : "Show password",
											"aria-pressed": unref(showPassword),
											onClick: ($event) => showPassword.value = !unref(showPassword)
										}, null, 8, [
											"icon",
											"aria-label",
											"aria-pressed",
											"onClick"
										])];
									}),
									_: 1
								}, _parent, _scopeId));
								else return [createVNode(_component_UInput, {
									modelValue: unref(replacement).newPassword,
									"onUpdate:modelValue": [($event) => unref(replacement).newPassword = $event, ($event) => message.value = ""],
									name: "newPassword",
									type: unref(showPassword) ? "text" : "password",
									autocomplete: "new-password",
									placeholder: "Enter new password",
									icon: "i-lucide-lock-keyhole",
									size: "xl",
									class: "w-full",
									ui: { base: "reset-input" }
								}, {
									trailing: withCtx(() => [createVNode(_component_UButton, {
										type: "button",
										color: "neutral",
										variant: "ghost",
										size: "sm",
										icon: unref(showPassword) ? "i-lucide-eye-off" : "i-lucide-eye",
										"aria-label": unref(showPassword) ? "Hide password" : "Show password",
										"aria-pressed": unref(showPassword),
										onClick: ($event) => showPassword.value = !unref(showPassword)
									}, null, 8, [
										"icon",
										"aria-label",
										"aria-pressed",
										"onClick"
									])]),
									_: 1
								}, 8, [
									"modelValue",
									"onUpdate:modelValue",
									"type"
								])];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_component_UFormField, {
							label: "Confirm new password",
							name: "confirmPassword",
							required: ""
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(_component_UInput, {
									modelValue: unref(replacement).confirmPassword,
									"onUpdate:modelValue": [($event) => unref(replacement).confirmPassword = $event, ($event) => message.value = ""],
									name: "confirmPassword",
									type: unref(showPassword) ? "text" : "password",
									autocomplete: "new-password",
									placeholder: "Confirm new password",
									icon: "i-lucide-lock-keyhole",
									size: "xl",
									class: "w-full",
									ui: { base: "reset-input" }
								}, null, _parent, _scopeId));
								else return [createVNode(_component_UInput, {
									modelValue: unref(replacement).confirmPassword,
									"onUpdate:modelValue": [($event) => unref(replacement).confirmPassword = $event, ($event) => message.value = ""],
									name: "confirmPassword",
									type: unref(showPassword) ? "text" : "password",
									autocomplete: "new-password",
									placeholder: "Confirm new password",
									icon: "i-lucide-lock-keyhole",
									size: "xl",
									class: "w-full",
									ui: { base: "reset-input" }
								}, null, 8, [
									"modelValue",
									"onUpdate:modelValue",
									"type"
								])];
							}),
							_: 1
						}, _parent, _scopeId));
						if (unref(message)) _push(`<p class="reset-message" role="alert" data-v-e9b2ec5d${_scopeId}>${ssrInterpolate(unref(message))}</p>`);
						else _push(`<!---->`);
						_push(ssrRenderComponent(_component_UButton, {
							type: "submit",
							size: "xl",
							block: "",
							loading: unref(pending),
							disabled: unref(pending),
							"trailing-icon": "i-lucide-arrow-right",
							class: "reset-submit"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Change password`);
								else return [createTextVNode("Change password")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_component_UButton, {
							type: "button",
							color: "neutral",
							variant: "ghost",
							size: "lg",
							block: "",
							disabled: unref(pending),
							onClick: ($event) => step.value = "verify"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Back to PIN verification`);
								else return [createTextVNode("Back to PIN verification")];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [
						createVNode(_component_UFormField, {
							label: "New password",
							name: "newPassword",
							required: ""
						}, {
							default: withCtx(() => [createVNode(_component_UInput, {
								modelValue: unref(replacement).newPassword,
								"onUpdate:modelValue": [($event) => unref(replacement).newPassword = $event, ($event) => message.value = ""],
								name: "newPassword",
								type: unref(showPassword) ? "text" : "password",
								autocomplete: "new-password",
								placeholder: "Enter new password",
								icon: "i-lucide-lock-keyhole",
								size: "xl",
								class: "w-full",
								ui: { base: "reset-input" }
							}, {
								trailing: withCtx(() => [createVNode(_component_UButton, {
									type: "button",
									color: "neutral",
									variant: "ghost",
									size: "sm",
									icon: unref(showPassword) ? "i-lucide-eye-off" : "i-lucide-eye",
									"aria-label": unref(showPassword) ? "Hide password" : "Show password",
									"aria-pressed": unref(showPassword),
									onClick: ($event) => showPassword.value = !unref(showPassword)
								}, null, 8, [
									"icon",
									"aria-label",
									"aria-pressed",
									"onClick"
								])]),
								_: 1
							}, 8, [
								"modelValue",
								"onUpdate:modelValue",
								"type"
							])]),
							_: 1
						}),
						createVNode(_component_UFormField, {
							label: "Confirm new password",
							name: "confirmPassword",
							required: ""
						}, {
							default: withCtx(() => [createVNode(_component_UInput, {
								modelValue: unref(replacement).confirmPassword,
								"onUpdate:modelValue": [($event) => unref(replacement).confirmPassword = $event, ($event) => message.value = ""],
								name: "confirmPassword",
								type: unref(showPassword) ? "text" : "password",
								autocomplete: "new-password",
								placeholder: "Confirm new password",
								icon: "i-lucide-lock-keyhole",
								size: "xl",
								class: "w-full",
								ui: { base: "reset-input" }
							}, null, 8, [
								"modelValue",
								"onUpdate:modelValue",
								"type"
							])]),
							_: 1
						}),
						unref(message) ? (openBlock(), createBlock("p", {
							key: 0,
							class: "reset-message",
							role: "alert"
						}, toDisplayString(unref(message)), 1)) : createCommentVNode("", true),
						createVNode(_component_UButton, {
							type: "submit",
							size: "xl",
							block: "",
							loading: unref(pending),
							disabled: unref(pending),
							"trailing-icon": "i-lucide-arrow-right",
							class: "reset-submit"
						}, {
							default: withCtx(() => [createTextVNode("Change password")]),
							_: 1
						}, 8, ["loading", "disabled"]),
						createVNode(_component_UButton, {
							type: "button",
							color: "neutral",
							variant: "ghost",
							size: "lg",
							block: "",
							disabled: unref(pending),
							onClick: ($event) => step.value = "verify"
						}, {
							default: withCtx(() => [createTextVNode("Back to PIN verification")]),
							_: 1
						}, 8, ["disabled", "onClick"])
					];
				}),
				_: 1
			}, _parent));
			else {
				_push(`<div class="reset-done" role="status" data-v-e9b2ec5d>`);
				_push(ssrRenderComponent(_component_UIcon, {
					name: "i-lucide-circle-check",
					"aria-hidden": "true"
				}, null, _parent));
				_push(`<p data-v-e9b2ec5d>New password saved. Previous sessions have ended.</p></div>`);
			}
			_push(`<p class="reset-switch" data-v-e9b2ec5d>`);
			_push(ssrRenderComponent(_component_NuxtLink, { to: "/login" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Return to sign in`);
					else return [createTextVNode("Return to sign in")];
				}),
				_: 1
			}, _parent));
			_push(`</p></section></main>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reset-password.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var reset_password_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-e9b2ec5d"]]);

export { reset_password_default as default };;globalThis.__timing__.logEnd('Load chunks/build/reset-password-Dgs4HBdC');
//# sourceMappingURL=reset-password-Dgs4HBdC.mjs.map
