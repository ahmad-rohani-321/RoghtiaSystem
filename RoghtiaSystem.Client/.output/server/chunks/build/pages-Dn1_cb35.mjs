globalThis.__timing__.logStart('Load chunks/build/pages-Dn1_cb35');import { e as useAuth, K as useToast, _ as _sfc_main$2, b as _sfc_main$5, s as ssrRenderList$2, M as renderList$2, f as useComponentProps, O as useLocale, g as useAppConfig, t as tv, P as Primitive, y as _sfc_main$3$1, B as useForwardProps, v as useFormField, C as useForwardExpose, F as createContext } from '../virtual/entry.mjs';
import { _ as _sfc_main$3 } from './DropdownMenu-nRYKdlLO.mjs';
import { D as DatePicker_default } from './DatePicker-CL2BV2YH.mjs';
import { g as gregorianToday, f as formatDateTime, a as formatDate, c as formatTime, l as localNumber } from './useDateFormatting-PLtQ78bC.mjs';
import { _ as _sfc_main$4 } from './Input-Bs-tvl7x.mjs';
import { _ as _sfc_main$6 } from './Modal-BsBsKz59.mjs';
import { u as useFormControl } from './useFormControl-yNWnq054.mjs';
import { u as useForwardScopeId } from './useForwardScopeId-DagAJ5Oj.mjs';
import { V as VisuallyHiddenInput_default } from './VisuallyHiddenInput-BQ6nCFCd.mjs';
import { L as Label_default } from './Label-CeDlFZe1.mjs';
import { u as useTreatments } from './useTreatments-BArmYU3I.mjs';
import { defineComponent, shallowRef, ref, watch, computed, mergeProps, unref, withCtx, createTextVNode, createVNode, isRef, toDisplayString, openBlock, createBlock, Fragment, createCommentVNode, useSlots, renderSlot, useId, useAttrs, toRefs, createElementBlock, withKeys, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { reactivePick, useVModel } from '@vueuse/core';
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
import './useFilter-dwXPCLOy.mjs';

// node_modules/reka-ui/dist/Switch/SwitchRoot.js
var [injectSwitchRootContext, provideSwitchRootContext] = /*#__PURE__*/ createContext("SwitchRoot");
var SwitchRoot_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "SwitchRoot",
	props: {
		defaultValue: {
			type: null,
			required: false
		},
		modelValue: {
			type: null,
			required: false,
			default: void 0
		},
		disabled: {
			type: Boolean,
			required: false
		},
		id: {
			type: String,
			required: false
		},
		value: {
			type: String,
			required: false,
			default: "on"
		},
		trueValue: {
			type: null,
			required: false,
			default: () => true
		},
		falseValue: {
			type: null,
			required: false,
			default: () => false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "button"
		},
		name: {
			type: String,
			required: false
		},
		required: {
			type: Boolean,
			required: false
		}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const { disabled } = toRefs(props);
		const modelValue = useVModel(props, "modelValue", emit, {
			defaultValue: props.defaultValue ?? props.falseValue,
			passive: props.modelValue === void 0
		});
		const checked = computed(() => modelValue.value === props.trueValue);
		function toggleCheck() {
			if (disabled.value) return;
			modelValue.value = checked.value ? props.falseValue : props.trueValue;
		}
		const { forwardRef, currentElement } = useForwardExpose();
		const isFormControl = useFormControl(currentElement);
		const scopeIdAttrs = useForwardScopeId();
		const ariaLabel = computed(() => props.id && currentElement.value ? (void 0).querySelector(`[for="${props.id}"]`)?.innerText : void 0);
		provideSwitchRootContext({
			checked,
			toggleCheck,
			disabled
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(Primitive), mergeProps({
				id: _ctx.id,
				ref: unref(forwardRef),
				role: "switch",
				type: _ctx.as === "button" ? "button" : void 0,
				value: _ctx.value,
				"aria-label": _ctx.$attrs["aria-label"] || ariaLabel.value,
				"aria-checked": checked.value,
				"aria-required": _ctx.required,
				"data-state": checked.value ? "checked" : "unchecked",
				"data-disabled": unref(disabled) ? "" : void 0,
				"as-child": _ctx.asChild,
				as: _ctx.as,
				disabled: unref(disabled)
			}, {
				...unref(scopeIdAttrs),
				..._ctx.$attrs
			}, {
				onClick: toggleCheck,
				onKeydown: withKeys(withModifiers(toggleCheck, ["prevent"]), ["enter"])
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
					modelValue: unref(modelValue),
					checked: checked.value
				})]),
				_: 3
			}, 16, [
				"id",
				"type",
				"value",
				"aria-label",
				"aria-checked",
				"aria-required",
				"data-state",
				"data-disabled",
				"as-child",
				"as",
				"disabled",
				"onKeydown"
			]), unref(isFormControl) && _ctx.name ? (openBlock(), createBlock(unref(VisuallyHiddenInput_default), mergeProps({
				key: 0,
				type: "checkbox",
				name: _ctx.name,
				disabled: unref(disabled),
				required: _ctx.required,
				value: _ctx.value,
				checked: checked.value
			}, unref(scopeIdAttrs)), null, 16, [
				"name",
				"disabled",
				"required",
				"value",
				"checked"
			])) : createCommentVNode("v-if", true)], 64);
		};
	}
});
// node_modules/reka-ui/dist/Switch/SwitchThumb.js
var SwitchThumb_default = /* @__PURE__ */ defineComponent({
	__name: "SwitchThumb",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "span"
		}
	},
	setup(__props) {
		const rootContext = injectSwitchRootContext();
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				"data-state": unref(rootContext).checked.value ? "checked" : "unchecked",
				"data-disabled": unref(rootContext).disabled.value ? "" : void 0,
				"as-child": _ctx.asChild,
				as: _ctx.as
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, [
				"data-state",
				"data-disabled",
				"as-child",
				"as"
			]);
		};
	}
});
// virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Falert.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Falert_default = {
	"slots": {
		"root": "relative overflow-hidden w-full rounded-lg p-4 flex gap-2.5",
		"wrapper": "min-w-0 flex-1 flex flex-col",
		"title": "text-sm font-medium",
		"description": "text-sm opacity-90",
		"icon": "shrink-0 size-5",
		"avatar": "shrink-0",
		"avatarSize": "2xl",
		"actions": "flex flex-wrap gap-1.5 shrink-0",
		"close": "p-0"
	},
	"variants": {
		"color": {
			"primary": "",
			"secondary": "",
			"success": "",
			"info": "",
			"warning": "",
			"error": "",
			"neutral": ""
		},
		"variant": {
			"solid": "",
			"outline": "",
			"soft": "",
			"subtle": ""
		},
		"orientation": {
			"horizontal": {
				"root": "items-center",
				"actions": "items-center"
			},
			"vertical": {
				"root": "items-start",
				"actions": "items-start mt-2.5"
			}
		},
		"title": { "true": { "description": "mt-1" } }
	},
	"compoundVariants": [
		{
			"color": "primary",
			"variant": "solid",
			"class": { "root": "bg-primary text-inverted" }
		},
		{
			"color": "secondary",
			"variant": "solid",
			"class": { "root": "bg-secondary text-inverted" }
		},
		{
			"color": "success",
			"variant": "solid",
			"class": { "root": "bg-success text-inverted" }
		},
		{
			"color": "info",
			"variant": "solid",
			"class": { "root": "bg-info text-inverted" }
		},
		{
			"color": "warning",
			"variant": "solid",
			"class": { "root": "bg-warning text-inverted" }
		},
		{
			"color": "error",
			"variant": "solid",
			"class": { "root": "bg-error text-inverted" }
		},
		{
			"color": "primary",
			"variant": "outline",
			"class": { "root": "text-primary ring ring-inset ring-primary/25" }
		},
		{
			"color": "secondary",
			"variant": "outline",
			"class": { "root": "text-secondary ring ring-inset ring-secondary/25" }
		},
		{
			"color": "success",
			"variant": "outline",
			"class": { "root": "text-success ring ring-inset ring-success/25" }
		},
		{
			"color": "info",
			"variant": "outline",
			"class": { "root": "text-info ring ring-inset ring-info/25" }
		},
		{
			"color": "warning",
			"variant": "outline",
			"class": { "root": "text-warning ring ring-inset ring-warning/25" }
		},
		{
			"color": "error",
			"variant": "outline",
			"class": { "root": "text-error ring ring-inset ring-error/25" }
		},
		{
			"color": "primary",
			"variant": "soft",
			"class": { "root": "bg-primary/10 text-primary" }
		},
		{
			"color": "secondary",
			"variant": "soft",
			"class": { "root": "bg-secondary/10 text-secondary" }
		},
		{
			"color": "success",
			"variant": "soft",
			"class": { "root": "bg-success/10 text-success" }
		},
		{
			"color": "info",
			"variant": "soft",
			"class": { "root": "bg-info/10 text-info" }
		},
		{
			"color": "warning",
			"variant": "soft",
			"class": { "root": "bg-warning/10 text-warning" }
		},
		{
			"color": "error",
			"variant": "soft",
			"class": { "root": "bg-error/10 text-error" }
		},
		{
			"color": "primary",
			"variant": "subtle",
			"class": { "root": "bg-primary/10 text-primary ring ring-inset ring-primary/25" }
		},
		{
			"color": "secondary",
			"variant": "subtle",
			"class": { "root": "bg-secondary/10 text-secondary ring ring-inset ring-secondary/25" }
		},
		{
			"color": "success",
			"variant": "subtle",
			"class": { "root": "bg-success/10 text-success ring ring-inset ring-success/25" }
		},
		{
			"color": "info",
			"variant": "subtle",
			"class": { "root": "bg-info/10 text-info ring ring-inset ring-info/25" }
		},
		{
			"color": "warning",
			"variant": "subtle",
			"class": { "root": "bg-warning/10 text-warning ring ring-inset ring-warning/25" }
		},
		{
			"color": "error",
			"variant": "subtle",
			"class": { "root": "bg-error/10 text-error ring ring-inset ring-error/25" }
		},
		{
			"color": "neutral",
			"variant": "solid",
			"class": { "root": "text-inverted bg-inverted" }
		},
		{
			"color": "neutral",
			"variant": "outline",
			"class": { "root": "text-highlighted bg-default ring ring-inset ring-default" }
		},
		{
			"color": "neutral",
			"variant": "soft",
			"class": { "root": "text-highlighted bg-elevated/50" }
		},
		{
			"color": "neutral",
			"variant": "subtle",
			"class": { "root": "text-highlighted bg-elevated/50 ring ring-inset ring-accented" }
		}
	],
	"defaultVariants": {
		"color": "primary",
		"variant": "solid"
	}
};
// node_modules/@nuxt/ui/dist/runtime/components/Alert.vue
var _sfc_main$1 = {
	__name: "UAlert",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false
		},
		title: {
			type: String,
			required: false
		},
		description: {
			type: String,
			required: false
		},
		icon: {
			type: null,
			required: false
		},
		avatar: {
			type: Object,
			required: false
		},
		color: {
			type: null,
			required: false
		},
		variant: {
			type: null,
			required: false
		},
		orientation: {
			type: null,
			required: false,
			default: "vertical"
		},
		actions: {
			type: Array,
			required: false
		},
		close: {
			type: [Boolean, Object],
			required: false
		},
		closeIcon: {
			type: null,
			required: false
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		}
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const _props = __props;
		const emits = __emit;
		const slots = useSlots();
		const props = useComponentProps("alert", _props);
		const { t } = useLocale();
		const appConfig = useAppConfig();
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Falert_default,
			...appConfig.ui?.alert || {}
		})({
			color: props.color,
			variant: props.variant,
			orientation: props.orientation,
			title: !!props.title || !!slots.title
		}));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Primitive), mergeProps({
				as: unref(props).as,
				"data-orientation": unref(props).orientation,
				"data-slot": "root",
				class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] })
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
							if (unref(props).avatar) _push(ssrRenderComponent(_sfc_main$3$1, mergeProps({ size: unref(props).ui?.avatarSize || ui.value.avatarSize() }, unref(props).avatar, {
								"data-slot": "avatar",
								class: ui.value.avatar({ class: unref(props).ui?.avatar })
							}), null, _parent, _scopeId));
							else if (unref(props).icon) _push(ssrRenderComponent(_sfc_main$5, {
								name: unref(props).icon,
								"data-slot": "icon",
								class: ui.value.icon({ class: unref(props).ui?.icon })
							}, null, _parent, _scopeId));
							else _push(`<!---->`);
						}, _push, _parent, _scopeId);
						_push(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: unref(props).ui?.wrapper }))}"${_scopeId}>`);
						if (unref(props).title || !!slots.title) {
							_push(`<div data-slot="title" class="${ssrRenderClass(ui.value.title({ class: unref(props).ui?.title }))}"${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, "title", {}, () => {
								_push(`${ssrInterpolate(unref(props).title)}`);
							}, _push, _parent, _scopeId);
							_push(`</div>`);
						} else _push(`<!---->`);
						if (unref(props).description || !!slots.description) {
							_push(`<div data-slot="description" class="${ssrRenderClass(ui.value.description({ class: unref(props).ui?.description }))}"${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, "description", {}, () => {
								_push(`${ssrInterpolate(unref(props).description)}`);
							}, _push, _parent, _scopeId);
							_push(`</div>`);
						} else _push(`<!---->`);
						if (unref(props).orientation === "vertical" && (unref(props).actions?.length || !!slots.actions)) {
							_push(`<div data-slot="actions" class="${ssrRenderClass(ui.value.actions({ class: unref(props).ui?.actions }))}"${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
								_push(`<!--[-->`);
								ssrRenderList$2(unref(props).actions, (action, index) => {
									_push(ssrRenderComponent(_sfc_main$2, mergeProps({
										key: index,
										size: "xs"
									}, { ref_for: true }, action), null, _parent, _scopeId));
								});
								_push(`<!--]-->`);
							}, _push, _parent, _scopeId);
							_push(`</div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
						if (unref(props).orientation === "horizontal" && (unref(props).actions?.length || !!slots.actions) || unref(props).close) {
							_push(`<div data-slot="actions" class="${ssrRenderClass(ui.value.actions({
								class: unref(props).ui?.actions,
								orientation: "horizontal"
							}))}"${_scopeId}>`);
							if (unref(props).orientation === "horizontal" && (unref(props).actions?.length || !!slots.actions)) ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
								_push(`<!--[-->`);
								ssrRenderList$2(unref(props).actions, (action, index) => {
									_push(ssrRenderComponent(_sfc_main$2, mergeProps({
										key: index,
										size: "xs"
									}, { ref_for: true }, action), null, _parent, _scopeId));
								});
								_push(`<!--]-->`);
							}, _push, _parent, _scopeId);
							else _push(`<!---->`);
							ssrRenderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
								if (unref(props).close) _push(ssrRenderComponent(_sfc_main$2, mergeProps({
									icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
									color: "neutral",
									variant: "link",
									"aria-label": unref(t)("alert.close")
								}, typeof unref(props).close === "object" ? unref(props).close : {}, {
									"data-slot": "close",
									class: ui.value.close({ class: unref(props).ui?.close }),
									onClick: ($event) => emits("update:open", false)
								}), null, _parent, _scopeId));
								else _push(`<!---->`);
							}, _push, _parent, _scopeId);
							_push(`</div>`);
						} else _push(`<!---->`);
					} else return [
						renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [unref(props).avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
							key: 0,
							size: unref(props).ui?.avatarSize || ui.value.avatarSize()
						}, unref(props).avatar, {
							"data-slot": "avatar",
							class: ui.value.avatar({ class: unref(props).ui?.avatar })
						}), null, 16, ["size", "class"])) : unref(props).icon ? (openBlock(), createBlock(_sfc_main$5, {
							key: 1,
							name: unref(props).icon,
							"data-slot": "icon",
							class: ui.value.icon({ class: unref(props).ui?.icon })
						}, null, 8, ["name", "class"])) : createCommentVNode("", true)]),
						createVNode("div", {
							"data-slot": "wrapper",
							class: ui.value.wrapper({ class: unref(props).ui?.wrapper })
						}, [
							unref(props).title || !!slots.title ? (openBlock(), createBlock("div", {
								key: 0,
								"data-slot": "title",
								class: ui.value.title({ class: unref(props).ui?.title })
							}, [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])], 2)) : createCommentVNode("", true),
							unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
								key: 1,
								"data-slot": "description",
								class: ui.value.description({ class: unref(props).ui?.description })
							}, [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])], 2)) : createCommentVNode("", true),
							unref(props).orientation === "vertical" && (unref(props).actions?.length || !!slots.actions) ? (openBlock(), createBlock("div", {
								key: 2,
								"data-slot": "actions",
								class: ui.value.actions({ class: unref(props).ui?.actions })
							}, [renderSlot(_ctx.$slots, "actions", {}, () => [(openBlock(true), createBlock(Fragment, null, renderList$2(unref(props).actions, (action, index) => {
								return openBlock(), createBlock(_sfc_main$2, mergeProps({
									key: index,
									size: "xs"
								}, { ref_for: true }, action), null, 16);
							}), 128))])], 2)) : createCommentVNode("", true)
						], 2),
						unref(props).orientation === "horizontal" && (unref(props).actions?.length || !!slots.actions) || unref(props).close ? (openBlock(), createBlock("div", {
							key: 0,
							"data-slot": "actions",
							class: ui.value.actions({
								class: unref(props).ui?.actions,
								orientation: "horizontal"
							})
						}, [unref(props).orientation === "horizontal" && (unref(props).actions?.length || !!slots.actions) ? renderSlot(_ctx.$slots, "actions", {}, () => [(openBlock(true), createBlock(Fragment, null, renderList$2(unref(props).actions, (action, index) => {
							return openBlock(), createBlock(_sfc_main$2, mergeProps({
								key: index,
								size: "xs"
							}, { ref_for: true }, action), null, 16);
						}), 128))], void 0, 0) : createCommentVNode("", true), renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [unref(props).close ? (openBlock(), createBlock(_sfc_main$2, mergeProps({
							key: 0,
							icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
							color: "neutral",
							variant: "link",
							"aria-label": unref(t)("alert.close")
						}, typeof unref(props).close === "object" ? unref(props).close : {}, {
							"data-slot": "close",
							class: ui.value.close({ class: unref(props).ui?.close }),
							onClick: ($event) => emits("update:open", false)
						}), null, 16, [
							"icon",
							"aria-label",
							"class",
							"onClick"
						])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true)
					];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$4 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Alert.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
// app/components/StatCard.vue?vue&type=script&setup=true&lang.ts
var StatCard_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "StatCard",
	__ssrInlineRender: true,
	props: {
		label: {},
		value: {},
		icon: {},
		tone: {},
		unit: {}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UIcon = _sfc_main$5;
			_push(`<article${ssrRenderAttrs(mergeProps({ class: "stat-card panel" }, _attrs))}><div class="stat-top"><span>${ssrInterpolate(__props.label)}</span><span class="${ssrRenderClass([__props.tone, "stat-icon"])}">`);
			_push(ssrRenderComponent(_component_UIcon, { name: __props.icon }, null, _parent));
			_push(`</span></div><div class="stat-value">${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(__props.value))}<span class="stat-unit">${ssrInterpolate(__props.unit || "")}</span></div><div class="stat-bottom"><span><small>Updated from your clinic records</small></span></div></article>`);
		};
	}
});
// app/components/StatCard.vue
var _sfc_setup$3 = StatCard_vue_vue_type_script_setup_true_lang_default.setup;
StatCard_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StatCard.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var StatCard_default = Object.assign(StatCard_vue_vue_type_script_setup_true_lang_default, { __name: "StatCard" });
// app/components/WidgetPanel.vue?vue&type=script&setup=true&lang.ts
var WidgetPanel_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "WidgetPanel",
	__ssrInlineRender: true,
	props: {
		title: {},
		subtitle: {},
		icon: {}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UIcon = _sfc_main$5;
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "panel widget" }, _attrs))}><div class="widget-heading"><div><h2>`);
			if (__props.icon) _push(ssrRenderComponent(_component_UIcon, { name: __props.icon }, null, _parent));
			else _push(`<!---->`);
			_push(`${ssrInterpolate(__props.title)}</h2>`);
			if (__props.subtitle) _push(`<p>${ssrInterpolate(__props.subtitle)}</p>`);
			else _push(`<!---->`);
			_push(`</div>`);
			ssrRenderSlot(_ctx.$slots, "action", {}, null, _push, _parent);
			_push(`</div>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</section>`);
		};
	}
});
// app/components/WidgetPanel.vue
var _sfc_setup$2 = WidgetPanel_vue_vue_type_script_setup_true_lang_default.setup;
WidgetPanel_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WidgetPanel.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var WidgetPanel_default = Object.assign(WidgetPanel_vue_vue_type_script_setup_true_lang_default, { __name: "WidgetPanel" });
// virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fswitch.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fswitch_default = {
	"slots": {
		"root": "relative flex items-start",
		"base": ["inline-flex items-center shrink-0 rounded-full border-2 border-transparent focus-visible:outline-3 data-[state=unchecked]:bg-accented", "transition-[background] duration-200 ease-out"],
		"container": "flex items-center",
		"thumb": "group pointer-events-none rounded-full bg-default shadow-lg ring-0 transition-transform duration-200 ease-out motion-reduce:transition-none data-[state=unchecked]:translate-x-0 data-[state=unchecked]:rtl:-translate-x-0 flex items-center justify-center",
		"icon": ["absolute shrink-0 group-data-[state=unchecked]:text-dimmed opacity-0 size-10/12", "transition-[color,opacity] duration-200 ease-out"],
		"wrapper": "ms-2",
		"label": "block font-medium text-default",
		"description": "text-muted"
	},
	"variants": {
		"color": {
			"primary": {
				"base": "data-[state=checked]:bg-primary outline-primary/25",
				"icon": "group-data-[state=checked]:text-primary"
			},
			"secondary": {
				"base": "data-[state=checked]:bg-secondary outline-secondary/25",
				"icon": "group-data-[state=checked]:text-secondary"
			},
			"success": {
				"base": "data-[state=checked]:bg-success outline-success/25",
				"icon": "group-data-[state=checked]:text-success"
			},
			"info": {
				"base": "data-[state=checked]:bg-info outline-info/25",
				"icon": "group-data-[state=checked]:text-info"
			},
			"warning": {
				"base": "data-[state=checked]:bg-warning outline-warning/25",
				"icon": "group-data-[state=checked]:text-warning"
			},
			"error": {
				"base": "data-[state=checked]:bg-error outline-error/25",
				"icon": "group-data-[state=checked]:text-error"
			},
			"neutral": {
				"base": "data-[state=checked]:bg-inverted outline-inverted/25",
				"icon": "group-data-[state=checked]:text-highlighted"
			}
		},
		"size": {
			"xs": {
				"base": "w-7",
				"container": "h-4",
				"thumb": "size-3 data-[state=checked]:translate-x-3 data-[state=checked]:rtl:-translate-x-3",
				"wrapper": "text-xs"
			},
			"sm": {
				"base": "w-8",
				"container": "h-4",
				"thumb": "size-3.5 data-[state=checked]:translate-x-3.5 data-[state=checked]:rtl:-translate-x-3.5",
				"wrapper": "text-xs"
			},
			"md": {
				"base": "w-9",
				"container": "h-5",
				"thumb": "size-4 data-[state=checked]:translate-x-4 data-[state=checked]:rtl:-translate-x-4",
				"wrapper": "text-sm"
			},
			"lg": {
				"base": "w-10",
				"container": "h-5",
				"thumb": "size-4.5 data-[state=checked]:translate-x-4.5 data-[state=checked]:rtl:-translate-x-4.5",
				"wrapper": "text-sm"
			},
			"xl": {
				"base": "w-11",
				"container": "h-6",
				"thumb": "size-5 data-[state=checked]:translate-x-5 data-[state=checked]:rtl:-translate-x-5",
				"wrapper": "text-base"
			}
		},
		"checked": { "true": { "icon": "group-data-[state=checked]:opacity-100" } },
		"unchecked": { "true": { "icon": "group-data-[state=unchecked]:opacity-100" } },
		"loading": { "true": { "icon": "animate-spin" } },
		"highlight": { "true": "" },
		"required": { "true": { "label": "after:content-['*'] after:ms-0.5 after:text-error" } },
		"disabled": { "true": {
			"root": "opacity-75",
			"base": "cursor-not-allowed",
			"label": "cursor-not-allowed",
			"description": "cursor-not-allowed"
		} }
	},
	"compoundVariants": [
		{
			"color": "primary",
			"highlight": true,
			"class": { "base": "ring ring-primary" }
		},
		{
			"color": "secondary",
			"highlight": true,
			"class": { "base": "ring ring-secondary" }
		},
		{
			"color": "success",
			"highlight": true,
			"class": { "base": "ring ring-success" }
		},
		{
			"color": "info",
			"highlight": true,
			"class": { "base": "ring ring-info" }
		},
		{
			"color": "warning",
			"highlight": true,
			"class": { "base": "ring ring-warning" }
		},
		{
			"color": "error",
			"highlight": true,
			"class": { "base": "ring ring-error" }
		},
		{
			"color": "neutral",
			"highlight": true,
			"class": { "base": "ring ring-inverted" }
		}
	],
	"defaultVariants": {
		"color": "primary",
		"size": "md"
	}
};
// node_modules/@nuxt/ui/dist/runtime/components/Switch.vue
var _sfc_main = /*@__PURE__*/ Object.assign({ inheritAttrs: false }, {
	__name: "USwitch",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false
		},
		color: {
			type: null,
			required: false
		},
		size: {
			type: null,
			required: false
		},
		highlight: {
			type: Boolean,
			required: false
		},
		loading: {
			type: Boolean,
			required: false
		},
		loadingIcon: {
			type: null,
			required: false
		},
		checkedIcon: {
			type: null,
			required: false
		},
		uncheckedIcon: {
			type: null,
			required: false
		},
		label: {
			type: String,
			required: false
		},
		description: {
			type: String,
			required: false
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		id: {
			type: String,
			required: false
		},
		name: {
			type: String,
			required: false
		},
		required: {
			type: Boolean,
			required: false
		},
		value: {
			type: String,
			required: false
		},
		defaultValue: {
			type: null,
			required: false
		},
		modelValue: {
			type: null,
			required: false
		},
		trueValue: {
			type: null,
			required: false
		},
		falseValue: {
			type: null,
			required: false
		}
	},
	emits: ["change", "update:modelValue"],
	setup(__props, { emit: __emit }) {
		const _props = __props;
		const slots = useSlots();
		const emits = __emit;
		const props = useComponentProps("switch", _props);
		const appConfig = useAppConfig();
		const rootProps = useForwardProps(reactivePick(props, "required", "value", "defaultValue", "modelValue", "trueValue", "falseValue"), emits);
		const { id: _id, emitFormChange, emitFormInput, size: formFieldSize, color: formFieldColor, highlight: formFieldHighlight, name, disabled: formFieldDisabled, ariaAttrs } = useFormField(_props);
		const id = _id.value ?? useId();
		const color = computed(() => formFieldColor.value ?? props.color);
		const highlight = computed(() => formFieldHighlight.value ?? props.highlight);
		const size = computed(() => formFieldSize.value ?? props.size);
		const disabled = computed(() => formFieldDisabled.value ?? props.disabled);
		const attrs = useAttrs();
		const forwardedAttrs = computed(() => {
			const { "data-state": _, ...rest } = attrs;
			return rest;
		});
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fswitch_default,
			...appConfig.ui?.switch || {}
		})({
			size: size.value,
			color: color.value,
			highlight: highlight.value,
			required: props.required,
			loading: props.loading,
			disabled: disabled.value || props.loading
		}));
		function onUpdate(value) {
			const event = new Event("change", { target: { value } });
			emits("change", event);
			emitFormChange();
			emitFormInput();
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Primitive), mergeProps({
				as: unref(props).as,
				"data-slot": _ctx.$attrs["data-slot"] ?? "root",
				class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] })
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: unref(props).ui?.container }))}"${_scopeId}>`);
						_push(ssrRenderComponent(unref(SwitchRoot_default), mergeProps({ id: unref(id) }, {
							...unref(rootProps),
							...forwardedAttrs.value,
							...unref(ariaAttrs)
						}, {
							name: unref(name),
							disabled: disabled.value || unref(props).loading,
							"data-slot": "base",
							class: ui.value.base({ class: unref(props).ui?.base }),
							"onUpdate:modelValue": onUpdate
						}), {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(unref(SwitchThumb_default), {
									"data-slot": "thumb",
									class: ui.value.thumb({ class: unref(props).ui?.thumb })
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) {
											if (unref(props).loading) _push(ssrRenderComponent(_sfc_main$5, {
												name: unref(props).loadingIcon || unref(appConfig).ui.icons.loading,
												"data-slot": "icon",
												class: ui.value.icon({
													class: unref(props).ui?.icon,
													checked: true,
													unchecked: true
												})
											}, null, _parent, _scopeId));
											else {
												_push(`<!--[-->`);
												if (unref(props).checkedIcon) _push(ssrRenderComponent(_sfc_main$5, {
													name: unref(props).checkedIcon,
													"data-slot": "icon",
													class: ui.value.icon({
														class: unref(props).ui?.icon,
														checked: true
													})
												}, null, _parent, _scopeId));
												else _push(`<!---->`);
												if (unref(props).uncheckedIcon) _push(ssrRenderComponent(_sfc_main$5, {
													name: unref(props).uncheckedIcon,
													"data-slot": "icon",
													class: ui.value.icon({
														class: unref(props).ui?.icon,
														unchecked: true
													})
												}, null, _parent, _scopeId));
												else _push(`<!---->`);
												_push(`<!--]-->`);
											}
										} else return [unref(props).loading ? (openBlock(), createBlock(_sfc_main$5, {
											key: 0,
											name: unref(props).loadingIcon || unref(appConfig).ui.icons.loading,
											"data-slot": "icon",
											class: ui.value.icon({
												class: unref(props).ui?.icon,
												checked: true,
												unchecked: true
											})
										}, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [unref(props).checkedIcon ? (openBlock(), createBlock(_sfc_main$5, {
											key: 0,
											name: unref(props).checkedIcon,
											"data-slot": "icon",
											class: ui.value.icon({
												class: unref(props).ui?.icon,
												checked: true
											})
										}, null, 8, ["name", "class"])) : createCommentVNode("", true), unref(props).uncheckedIcon ? (openBlock(), createBlock(_sfc_main$5, {
											key: 1,
											name: unref(props).uncheckedIcon,
											"data-slot": "icon",
											class: ui.value.icon({
												class: unref(props).ui?.icon,
												unchecked: true
											})
										}, null, 8, ["name", "class"])) : createCommentVNode("", true)], 64))];
									}),
									_: 1
								}, _parent, _scopeId));
								else return [createVNode(unref(SwitchThumb_default), {
									"data-slot": "thumb",
									class: ui.value.thumb({ class: unref(props).ui?.thumb })
								}, {
									default: withCtx(() => [unref(props).loading ? (openBlock(), createBlock(_sfc_main$5, {
										key: 0,
										name: unref(props).loadingIcon || unref(appConfig).ui.icons.loading,
										"data-slot": "icon",
										class: ui.value.icon({
											class: unref(props).ui?.icon,
											checked: true,
											unchecked: true
										})
									}, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [unref(props).checkedIcon ? (openBlock(), createBlock(_sfc_main$5, {
										key: 0,
										name: unref(props).checkedIcon,
										"data-slot": "icon",
										class: ui.value.icon({
											class: unref(props).ui?.icon,
											checked: true
										})
									}, null, 8, ["name", "class"])) : createCommentVNode("", true), unref(props).uncheckedIcon ? (openBlock(), createBlock(_sfc_main$5, {
										key: 1,
										name: unref(props).uncheckedIcon,
										"data-slot": "icon",
										class: ui.value.icon({
											class: unref(props).ui?.icon,
											unchecked: true
										})
									}, null, 8, ["name", "class"])) : createCommentVNode("", true)], 64))]),
									_: 1
								}, 8, ["class"])];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div>`);
						if (unref(props).label || !!slots.label || unref(props).description || !!slots.description) {
							_push(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: unref(props).ui?.wrapper }))}"${_scopeId}>`);
							if (unref(props).label || !!slots.label) _push(ssrRenderComponent(unref(Label_default), {
								for: unref(id),
								"data-slot": "label",
								class: ui.value.label({ class: unref(props).ui?.label })
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) ssrRenderSlot(_ctx.$slots, "label", { label: unref(props).label }, () => {
										_push(`${ssrInterpolate(unref(props).label)}`);
									}, _push, _parent, _scopeId);
									else return [renderSlot(_ctx.$slots, "label", { label: unref(props).label }, () => [createTextVNode(toDisplayString(unref(props).label), 1)])];
								}),
								_: 3
							}, _parent, _scopeId));
							else _push(`<!---->`);
							if (unref(props).description || !!slots.description) {
								_push(`<p data-slot="description" class="${ssrRenderClass(ui.value.description({ class: unref(props).ui?.description }))}"${_scopeId}>`);
								ssrRenderSlot(_ctx.$slots, "description", { description: unref(props).description }, () => {
									_push(`${ssrInterpolate(unref(props).description)}`);
								}, _push, _parent, _scopeId);
								_push(`</p>`);
							} else _push(`<!---->`);
							_push(`</div>`);
						} else _push(`<!---->`);
					} else return [createVNode("div", {
						"data-slot": "container",
						class: ui.value.container({ class: unref(props).ui?.container })
					}, [createVNode(unref(SwitchRoot_default), mergeProps({ id: unref(id) }, {
						...unref(rootProps),
						...forwardedAttrs.value,
						...unref(ariaAttrs)
					}, {
						name: unref(name),
						disabled: disabled.value || unref(props).loading,
						"data-slot": "base",
						class: ui.value.base({ class: unref(props).ui?.base }),
						"onUpdate:modelValue": onUpdate
					}), {
						default: withCtx(() => [createVNode(unref(SwitchThumb_default), {
							"data-slot": "thumb",
							class: ui.value.thumb({ class: unref(props).ui?.thumb })
						}, {
							default: withCtx(() => [unref(props).loading ? (openBlock(), createBlock(_sfc_main$5, {
								key: 0,
								name: unref(props).loadingIcon || unref(appConfig).ui.icons.loading,
								"data-slot": "icon",
								class: ui.value.icon({
									class: unref(props).ui?.icon,
									checked: true,
									unchecked: true
								})
							}, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [unref(props).checkedIcon ? (openBlock(), createBlock(_sfc_main$5, {
								key: 0,
								name: unref(props).checkedIcon,
								"data-slot": "icon",
								class: ui.value.icon({
									class: unref(props).ui?.icon,
									checked: true
								})
							}, null, 8, ["name", "class"])) : createCommentVNode("", true), unref(props).uncheckedIcon ? (openBlock(), createBlock(_sfc_main$5, {
								key: 1,
								name: unref(props).uncheckedIcon,
								"data-slot": "icon",
								class: ui.value.icon({
									class: unref(props).ui?.icon,
									unchecked: true
								})
							}, null, 8, ["name", "class"])) : createCommentVNode("", true)], 64))]),
							_: 1
						}, 8, ["class"])]),
						_: 1
					}, 16, [
						"id",
						"name",
						"disabled",
						"class"
					])], 2), unref(props).label || !!slots.label || unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
						key: 0,
						"data-slot": "wrapper",
						class: ui.value.wrapper({ class: unref(props).ui?.wrapper })
					}, [unref(props).label || !!slots.label ? (openBlock(), createBlock(unref(Label_default), {
						key: 0,
						for: unref(id),
						"data-slot": "label",
						class: ui.value.label({ class: unref(props).ui?.label })
					}, {
						default: withCtx(() => [renderSlot(_ctx.$slots, "label", { label: unref(props).label }, () => [createTextVNode(toDisplayString(unref(props).label), 1)])]),
						_: 3
					}, 8, ["for", "class"])) : createCommentVNode("", true), unref(props).description || !!slots.description ? (openBlock(), createBlock("p", {
						key: 1,
						"data-slot": "description",
						class: ui.value.description({ class: unref(props).ui?.description })
					}, [renderSlot(_ctx.$slots, "description", { description: unref(props).description }, () => [createTextVNode(toDisplayString(unref(props).description), 1)])], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)];
				}),
				_: 3
			}, _parent));
		};
	}
});
var _sfc_setup$1 = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Switch.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
// app/pages/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		const { user } = useAuth();
		const { dashboard: loadDashboard } = useTreatments();
		const selectedDate = shallowRef(gregorianToday());
		const period = ref("Week");
		const search = ref("");
		const customize = ref(false);
		const detail = ref(null);
		const toast = useToast();
		const loading = ref(true);
		const refreshing = ref(false);
		const loadError = ref(false);
		const summary = ref(null);
		const lastUpdated = ref(null);
		const chartIndex = ref(6);
		let refreshRequested = false;
		const widgets = ref([
			{
				id: "visits",
				label: "Patient visits",
				visible: true
			},
			{
				id: "distribution",
				label: "Patient distribution",
				visible: true
			},
			{
				id: "patients",
				label: "Recent patients",
				visible: true
			},
			{
				id: "activity",
				label: "Recent activity",
				visible: true
			}
		]);
		async function refreshDashboard(showError = false) {
			if (refreshing.value) {
				refreshRequested = true;
				return;
			}
			refreshing.value = true;
			try {
				const dateParts = new Intl.DateTimeFormat("en-US", {
					timeZone: "Asia/Kabul",
					year: "numeric",
					month: "2-digit",
					day: "2-digit"
				}).formatToParts(selectedDate.value.toDate("Asia/Kabul"));
				const date = `${dateParts.find((part) => part.type === "year")?.value}-${dateParts.find((part) => part.type === "month")?.value}-${dateParts.find((part) => part.type === "day")?.value}`;
				summary.value = await loadDashboard(date, period.value);
				lastUpdated.value = /* @__PURE__ */ new Date();
				loadError.value = false;
			} catch {
				loadError.value = true;
				if (showError) toast.add({
					title: "Dashboard could not be refreshed",
					description: "Check your connection and try again.",
					color: "error",
					icon: "i-lucide-circle-alert"
				});
			} finally {
				refreshing.value = false;
				loading.value = false;
				if (refreshRequested) {
					refreshRequested = false;
					refreshDashboard();
				}
			}
		}
		watch(() => `${selectedDate.value.toString()}-${period.value}`, () => {});
		watch(widgets, (value) => {}, { deep: true });
		function move(index, delta) {
			const next = index + delta;
			if (next < 0 || next >= widgets.value.length) return;
			const list = [...widgets.value];
			[list[index], list[next]] = [list[next], list[index]];
			widgets.value = list;
		}
		const stats = computed(() => [
			{
				label: "Total patients",
				value: summary.value?.totalPatients ?? 0,
				icon: "i-lucide-users-round",
				tone: "teal",
				unit: "patients"
			},
			{
				label: "Patients seen today",
				value: summary.value?.patientsToday ?? 0,
				icon: "i-lucide-stethoscope",
				tone: "blue",
				unit: "patients"
			},
			{
				label: "Prescriptions today",
				value: summary.value?.prescriptionsToday ?? 0,
				icon: "i-lucide-clipboard-plus",
				tone: "purple",
				unit: "prescriptions"
			},
			{
				label: "Medication records",
				value: summary.value?.totalMedications ?? 0,
				icon: "i-lucide-capsule",
				tone: "orange",
				unit: "medications"
			}
		]);
		const chartRows = computed(() => {
			const rows = summary.value?.visits || [];
			if (period.value === "Month") return Array.from({ length: Math.ceil(rows.length / 7) }, (_, index) => {
				const week = rows.slice(index * 7, (index + 1) * 7);
				return {
					date: week[0]?.date || "",
					visits: week.reduce((sum, row) => sum + row.visits, 0),
					prescriptions: week.reduce((sum, row) => sum + row.prescriptions, 0)
				};
			});
			return rows;
		});
		const days = computed(() => chartRows.value.map((row) => {
			const date = /* @__PURE__ */ new Date(`${row.date}T12:00:00+04:30`);
			return new Intl.DateTimeFormat("en-US", {
				weekday: "long",
				timeZone: "Asia/Kabul"
			}).format(date);
		}));
		const chartValues = computed(() => chartRows.value.map((row) => row.visits));
		const totalVisits = computed(() => chartValues.value.reduce((sum, value) => sum + value, 0));
		const peakValue = computed(() => Math.max(1, ...chartValues.value));
		const chartPath = computed(() => {
			if (!chartValues.value.length) return "";
			const values = chartValues.value;
			return values.map((value, index) => ({
				x: values.length === 1 ? 350 : index * 700 / (values.length - 1),
				y: 150 - value / peakValue.value * 125
			})).map((point, index) => `${index ? "L" : "M"}${point.x} ${point.y}`).join(" ");
		});
		const chartAreaPath = computed(() => chartPath.value ? `${chartPath.value} L700 170 L0 170Z` : "");
		const distribution = computed(() => {
			const rows = chartRows.value;
			const patients = rows.reduce((sum, row) => sum + row.visits, 0);
			const prescriptions = rows.reduce((sum, row) => sum + row.prescriptions, 0);
			return [{
				label: "Visits with prescription",
				count: prescriptions,
				percent: patients ? Math.round(prescriptions / patients * 100) : 0,
				tone: "light"
			}, {
				label: "Visits without prescription",
				count: Math.max(0, patients - prescriptions),
				percent: patients ? Math.round(Math.max(0, patients - prescriptions) / patients * 100) : 0,
				tone: "pale"
			}];
		});
		const recentPatients = computed(() => {
			const query = search.value.trim().toLocaleLowerCase();
			const seen = /* @__PURE__ */ new Set();
			return (summary.value?.recentTreatments || []).filter((treatment) => {
				if (seen.has(treatment.patient.id) || query && !`${treatment.patient.name} ${treatment.patient.code} ${treatment.patient.phone}`.toLocaleLowerCase().includes(query)) return false;
				seen.add(treatment.patient.id);
				return true;
			}).slice(0, 6);
		});
		const recentActivity = computed(() => (summary.value?.recentTreatments || []).slice(0, 4).map((treatment) => ({
			id: treatment.id,
			title: treatment.medicationCount ? "Prescription recorded" : "Patient visit recorded",
			text: `${treatment.patient.name} · ${treatment.medicationCount} medication${treatment.medicationCount === 1 ? "" : "s"}`,
			icon: treatment.medicationCount ? "i-lucide-clipboard-plus" : "i-lucide-stethoscope",
			time: formatDateTime(treatment.recordedAtUtc)
		})));
		function patientTone(id) {
			return [
				"teal",
				"purple",
				"blue",
				"orange"
			][id % 4];
		}
		function initials(name) {
			return name.trim().split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toLocaleUpperCase();
		}
		function escapeSvg(value) {
			return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&apos;");
		}
		function printReport() {
			if (summary.value) (void 0).print();
		}
		function exportReport() {
			if (!summary.value) return;
			const rows = [
				["Metric", "Count"],
				...stats.value.map((stat) => [stat.label, stat.value]),
				["Visits in chart period", totalVisits.value]
			];
			const blob = new Blob(["﻿" + rows.map((row) => row.map((value) => `"${String(value).replaceAll("\"", "\"\"")}"`).join(",")).join("\r\n")], { type: "text/csv;charset=utf-8;" });
			const url = URL.createObjectURL(blob);
			const a = (void 0).createElement("a");
			a.href = url;
			a.download = `e-roghtia-dashboard-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
			a.click();
			URL.revokeObjectURL(url);
			toast.add({
				title: "Report downloaded",
				description: "The report contains current clinic data.",
				icon: "i-lucide-check"
			});
		}
		async function exportImage() {
			if (!summary.value) return;
			const width = 1600;
			const height = 1200;
			const cardValues = stats.value.map((stat, index) => {
				const x = 80 + index * 365;
				return `<rect x="${x}" y="190" width="335" height="130" rx="18" fill="#ffffff" stroke="#dce9e9"/><text x="${x + 24}" y="234" fill="#61777e" font-size="22">${escapeSvg(stat.label)}</text><text x="${x + 24}" y="290" fill="#1d454b" font-size="42" font-weight="700">${escapeSvg(stat.value)} <tspan fill="#82969a" font-size="19" font-weight="400">${escapeSvg(stat.unit)}</tspan></text>`;
			}).join("");
			const chartPoints = chartValues.value.map((value, index) => {
				return {
					x: chartValues.value.length === 1 ? 800 : 150 + index * 1300 / (chartValues.value.length - 1),
					y: 590 - value / peakValue.value * 220,
					value,
					date: chartRows.value[index]?.date || ""
				};
			});
			const chartSvg = `<path d="${chartPoints.map((point, index) => `${index ? "L" : "M"}${point.x},${point.y}`).join(" ")}" fill="none" stroke="#159f96" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>${chartPoints.map((point) => `<circle cx="${point.x}" cy="${point.y}" r="8" fill="#ffffff" stroke="#159f96" stroke-width="5"/>`).join("")}`;
			const rows = recentPatients.value.slice(0, 6).map((treatment, index) => {
				const y = 895 + index * 42;
				return `<text x="105" y="${y}" fill="#263f47" font-size="20">${escapeSvg(treatment.patient.name)}</text><text x="620" y="${y}" fill="#536b72" font-size="19">${escapeSvg(treatment.patient.code)}</text><text x="900" y="${y}" fill="#536b72" font-size="19">${escapeSvg(formatDateTime(treatment.recordedAtUtc))}</text><text x="1430" y="${y}" fill="#536b72" font-size="19" text-anchor="end">${escapeSvg(treatment.medicationCount)}</text><line x1="100" y1="${y + 14}" x2="1500" y2="${y + 14}" stroke="#e8eeee"/>`;
			}).join("");
			const reportDate = escapeSvg(formatDate(selectedDate.value));
			const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="100%" height="100%" fill="#f5f8fa"/><text x="80" y="90" fill="#147e78" font-size="24" font-weight="700">E-ROGHTIA HEALTHCARE</text><text x="80" y="145" fill="#193c43" font-size="38" font-weight="700">Dashboard report</text><text x="1515" y="100" fill="#536b72" font-size="20" text-anchor="end">${escapeSvg(user.value?.userName || "")} · ${reportDate} · ${escapeSvg(period.value)}</text>${cardValues}<rect x="80" y="355" width="900" height="360" rx="18" fill="#ffffff" stroke="#dce9e9"/><text x="110" y="405" fill="#263f47" font-size="24" font-weight="700">Patient visits</text><text x="945" y="405" fill="#61777e" font-size="19" text-anchor="end">${escapeSvg(totalVisits.value)} visits</text><line x1="140" y1="630" x2="940" y2="630" stroke="#e5eeee"/><line x1="140" y1="540" x2="940" y2="540" stroke="#e5eeee"/><line x1="140" y1="450" x2="940" y2="450" stroke="#e5eeee"/>${chartSvg}${chartPoints.map((point) => `<text x="${point.x}" y="675" fill="#71858b" font-size="16" text-anchor="middle">${escapeSvg(point.date.slice(5))}</text>`).join("")}<rect x="1005" y="355" width="515" height="360" rx="18" fill="#ffffff" stroke="#dce9e9"/><text x="1040" y="405" fill="#263f47" font-size="24" font-weight="700">Visit distribution</text>${distribution.value.map((entry, index) => {
				const y = 485 + index * 105;
				const barWidth = 420 * entry.percent / 100;
				return `<text x="1040" y="${y}" fill="#536b72" font-size="18">${escapeSvg(entry.label)}</text><text x="1480" y="${y}" fill="#263f47" font-size="18" text-anchor="end">${escapeSvg(entry.percent)}% · ${escapeSvg(entry.count)}</text><rect x="1040" y="${y + 18}" width="420" height="14" rx="7" fill="#e8f1f0"/><rect x="1040" y="${y + 18}" width="${barWidth}" height="14" rx="7" fill="${index ? "#99c9c3" : "#159f96"}"/>`;
			}).join("")}<rect x="80" y="755" width="1440" height="385" rx="18" fill="#ffffff" stroke="#dce9e9"/><text x="110" y="805" fill="#263f47" font-size="24" font-weight="700">Recent patients</text><text x="105" y="850" fill="#82969a" font-size="17">Patient</text><text x="620" y="850" fill="#82969a" font-size="17">Code</text><text x="900" y="850" fill="#82969a" font-size="17">Last visit</text><text x="1430" y="850" fill="#82969a" font-size="17" text-anchor="end">Prescriptions</text>${rows || "<text x=\"105\" y=\"900\" fill=\"#82969a\" font-size=\"20\">No recent visits recorded.</text>"}<text x="80" y="1170" fill="#82969a" font-size="16">Generated ${escapeSvg((/* @__PURE__ */ new Date()).toLocaleString())} · RoghtiaSystem</text></svg>`;
			const svgUrl = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml;charset=utf-8" }));
			try {
				const image = new Image();
				await new Promise((resolve, reject) => {
					image.onload = () => resolve();
					image.onerror = () => reject(/* @__PURE__ */ new Error("Image rendering failed."));
					image.src = svgUrl;
				});
				const canvas = (void 0).createElement("canvas");
				canvas.width = width;
				canvas.height = height;
				const context = canvas.getContext("2d");
				if (!context) throw new Error("Canvas is unavailable.");
				context.drawImage(image, 0, 0, width, height);
				const png = await new Promise((resolve, reject) => canvas.toBlob((blob) => blob ? resolve(blob) : reject(/* @__PURE__ */ new Error("PNG export failed.")), "image/png"));
				const pngUrl = URL.createObjectURL(png);
				const link = (void 0).createElement("a");
				link.href = pngUrl;
				link.download = `e-roghtia-dashboard-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.png`;
				link.click();
				URL.revokeObjectURL(pngUrl);
				toast.add({
					title: "Image downloaded",
					description: "The dashboard report was saved as a PNG image.",
					icon: "i-lucide-image"
				});
			} catch {
				toast.add({
					title: "Image export failed",
					description: "Please try again in a moment.",
					color: "error",
					icon: "i-lucide-circle-alert"
				});
			} finally {
				URL.revokeObjectURL(svgUrl);
			}
		}
		const exportItems = computed(() => [[
			{
				label: "Download CSV",
				icon: "i-lucide-file-spreadsheet",
				onSelect: exportReport
			},
			{
				label: "Print / Save as PDF",
				icon: "i-lucide-file-text",
				onSelect: printReport
			},
			{
				label: "Download PNG image",
				icon: "i-lucide-image",
				onSelect: () => exportImage()
			}
		]]);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UButton = _sfc_main$2;
			const _component_UDropdownMenu = _sfc_main$3;
			const _component_UIcon = _sfc_main$5;
			const _component_UAlert = _sfc_main$1;
			const _component_DatePicker = DatePicker_default;
			const _component_StatCard = StatCard_default;
			const _component_WidgetPanel = WidgetPanel_default;
			const _component_UInput = _sfc_main$4;
			const _component_UModal = _sfc_main$6;
			const _component_USwitch = _sfc_main;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard" }, _attrs))}><div class="page-heading"><div><div class="eyebrow"><span></span> A clear view of your clinic</div><h1>Healthcare overview</h1><p>Welcome, ${ssrInterpolate(unref(user)?.userName)}! Your care activity at a glance.</p></div><div class="heading-actions">`);
			_push(ssrRenderComponent(_component_UButton, {
				color: "neutral",
				variant: "outline",
				icon: "i-lucide-sliders-horizontal",
				onClick: ($event) => customize.value = true
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Customize dashboard`);
					else return [createTextVNode("Customize dashboard")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_UButton, {
				color: "neutral",
				variant: "outline",
				icon: "i-lucide-refresh-cw",
				loading: unref(refreshing),
				onClick: ($event) => refreshDashboard(true)
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Refresh`);
					else return [createTextVNode("Refresh")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_UDropdownMenu, { items: unref(exportItems) }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_UButton, {
						icon: "i-lucide-download",
						disabled: !unref(summary)
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`Export`);
							else return [createTextVNode("Export")];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(_component_UButton, {
						icon: "i-lucide-download",
						disabled: !unref(summary)
					}, {
						default: withCtx(() => [createTextVNode("Export")]),
						_: 1
					}, 8, ["disabled"])];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><section class="welcome-banner"><div class="welcome-copy"><span class="banner-label"><span class="live-dot"></span> Live clinic overview</span><h2>One step closer to a healthier life.</h2><p>Your dashboard uses the latest information saved for your clinic.</p><div class="banner-meta"><span>`);
			_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-calendar-days" }, null, _parent));
			_push(`${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(unref(selectedDate), true))}</span>`);
			if (unref(lastUpdated)) {
				_push(`<span>`);
				_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-refresh-cw" }, null, _parent));
				_push(`Updated ${ssrInterpolate(("formatTime" in _ctx ? _ctx.formatTime : unref(formatTime))(unref(lastUpdated)))}</span>`);
			} else _push(`<!---->`);
			_push(`</div></div><div class="medical-art" aria-hidden="true"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><span class="art-plus plus-one">+</span><span class="art-plus plus-two">+</span><div class="art-heart">`);
			_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-heart-pulse" }, null, _parent));
			_push(`</div><div class="art-float">`);
			_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-shield-check" }, null, _parent));
			_push(`<span>Care and trust</span></div><span class="art-dot"></span></div></section>`);
			if (unref(loadError)) _push(ssrRenderComponent(_component_UAlert, {
				color: "warning",
				variant: "subtle",
				icon: "i-lucide-circle-alert",
				title: "Some dashboard data could not be refreshed.",
				description: "Showing the latest data available. Use Refresh to try again.",
				class: "dashboard-alert"
			}, null, _parent));
			else _push(`<!---->`);
			_push(`<div class="filter-row"><div class="section-label"><span class="section-mark"></span><h2>Clinic overview</h2><span class="subtle">${ssrInterpolate(unref(period))} activity</span></div><div class="filters">`);
			_push(ssrRenderComponent(_component_DatePicker, {
				modelValue: unref(selectedDate),
				"onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null
			}, null, _parent));
			_push(`</div></div><div class="stats-grid">`);
			if (unref(loading)) {
				_push(`<!--[-->`);
				ssrRenderList$2(4, (n) => {
					_push(`<div class="stat-card panel dashboard-skeleton" aria-hidden="true"></div>`);
				});
				_push(`<!--]-->`);
			} else {
				_push(`<!--[-->`);
				ssrRenderList$2(unref(stats), (stat) => {
					_push(ssrRenderComponent(_component_StatCard, mergeProps({ key: stat.label }, { ref_for: true }, stat), null, _parent));
				});
				_push(`<!--]-->`);
			}
			_push(`</div><div class="widget-grid"><!--[-->`);
			ssrRenderList$2(unref(widgets).filter((w) => w.visible), (widget) => {
				_push(`<!--[-->`);
				if (widget.id === "visits") _push(ssrRenderComponent(_component_WidgetPanel, {
					class: "visits-widget",
					title: "Patient visits",
					subtitle: "Visits recorded over the selected period"
				}, {
					action: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<div class="period-switch"${_scopeId}><!--[-->`);
							ssrRenderList$2([
								"Day",
								"Week",
								"Month"
							], (p) => {
								_push(`<button class="${ssrRenderClass({ selected: unref(period) === p })}"${_scopeId}>${ssrInterpolate(p)}</button>`);
							});
							_push(`<!--]--></div>`);
						} else return [createVNode("div", { class: "period-switch" }, [(openBlock(), createBlock(Fragment, null, renderList$2([
							"Day",
							"Week",
							"Month"
						], (p) => {
							return createVNode("button", {
								key: p,
								class: { selected: unref(period) === p },
								onClick: ($event) => period.value = p
							}, toDisplayString(p), 11, ["onClick"]);
						}), 64))])];
					}),
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<div class="chart-summary"${_scopeId}><strong${_scopeId}>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(totalVisits)))}<small${_scopeId}>visits</small></strong><span class="chart-legend"${_scopeId}><span${_scopeId}><i${_scopeId}></i>All visits</span><span${_scopeId}><i class="legend-secondary"${_scopeId}></i>With prescription</span></span></div>`);
							if (unref(loading)) _push(`<div class="chart-loading"${_scopeId}>Loading clinic activity…</div>`);
							else if (!unref(chartRows).length) _push(`<div class="chart-loading"${_scopeId}>No visit data is available yet.</div>`);
							else {
								_push(`<div class="chart" role="group" aria-label="Patient visits chart"${_scopeId}><div class="chart-y"${_scopeId}><!--[-->`);
								ssrRenderList$2([
									1,
									.75,
									.5,
									.25,
									0
								], (n) => {
									_push(`<span${_scopeId}>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(Math.round(unref(peakValue) * n)))}</span>`);
								});
								_push(`<!--]--></div><div class="chart-body"${_scopeId}><div class="chart-lines"${_scopeId}><!--[-->`);
								ssrRenderList$2(5, (n) => {
									_push(`<i${_scopeId}></i>`);
								});
								_push(`<!--]--></div><svg viewBox="0 0 700 170" preserveAspectRatio="none" aria-hidden="true"${_scopeId}><defs${_scopeId}><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"${_scopeId}><stop offset="0%" stop-color="#20b4aa" stop-opacity=".22"${_scopeId}></stop><stop offset="100%" stop-color="#20b4aa" stop-opacity="0"${_scopeId}></stop></linearGradient></defs><path${ssrRenderAttr("d", unref(chartAreaPath))} fill="url(#area)"${_scopeId}></path><path${ssrRenderAttr("d", unref(chartPath))} fill="none" stroke="#16a99e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path>`);
								if (unref(chartRows).length > 1) _push(`<path${ssrRenderAttr("d", unref(chartRows).map((row, i) => `${i ? "L" : "M"}${unref(chartRows).length === 1 ? 350 : i * 700 / (unref(chartRows).length - 1)} ${150 - row.prescriptions / unref(peakValue) * 125}`).join(" "))} fill="none" stroke="#99c9cd" stroke-width="2" stroke-dasharray="6 5"${_scopeId}></path>`);
								else _push(`<!---->`);
								_push(`</svg><div class="chart-hover"${_scopeId}><!--[-->`);
								ssrRenderList$2(unref(days), (day, i) => {
									_push(`<button${ssrRenderAttr("aria-label", `${day}: ${("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(chartValues)[i] || 0)} visits`)}${_scopeId}>`);
									if (unref(chartIndex) === i) _push(`<span class="chart-tooltip"${_scopeId}>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(chartValues)[i] || 0))} visits<small${_scopeId}>${ssrInterpolate(("formatDateTime" in _ctx ? _ctx.formatDateTime : unref(formatDateTime))(`${unref(chartRows)[i]?.date}T08:00:00Z`))}</small></span>`);
									else _push(`<!---->`);
									_push(`</button>`);
								});
								_push(`<!--]--></div><div class="chart-x"${_scopeId}><!--[-->`);
								ssrRenderList$2(unref(days), (day, i) => {
									_push(`<span${ssrRenderAttr("title", day)}${_scopeId}><span class="chart-day-full"${_scopeId}>${ssrInterpolate(day.slice(0, 3))}</span><span class="chart-day-short"${_scopeId}>${ssrInterpolate(day.slice(0, 1))}</span></span>`);
								});
								_push(`<!--]--></div></div></div>`);
							}
						} else return [createVNode("div", { class: "chart-summary" }, [createVNode("strong", null, [createTextVNode(toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(totalVisits))), 1), createVNode("small", null, "visits")]), createVNode("span", { class: "chart-legend" }, [createVNode("span", null, [createVNode("i"), createTextVNode("All visits")]), createVNode("span", null, [createVNode("i", { class: "legend-secondary" }), createTextVNode("With prescription")])])]), unref(loading) ? (openBlock(), createBlock("div", {
							key: 0,
							class: "chart-loading"
						}, "Loading clinic activity…")) : !unref(chartRows).length ? (openBlock(), createBlock("div", {
							key: 1,
							class: "chart-loading"
						}, "No visit data is available yet.")) : (openBlock(), createBlock("div", {
							key: 2,
							class: "chart",
							role: "group",
							"aria-label": "Patient visits chart"
						}, [createVNode("div", { class: "chart-y" }, [(openBlock(), createBlock(Fragment, null, renderList$2([
							1,
							.75,
							.5,
							.25,
							0
						], (n) => {
							return createVNode("span", { key: n }, toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(Math.round(unref(peakValue) * n))), 1);
						}), 64))]), createVNode("div", { class: "chart-body" }, [
							createVNode("div", { class: "chart-lines" }, [(openBlock(), createBlock(Fragment, null, renderList$2(5, (n) => {
								return createVNode("i", { key: n });
							}), 64))]),
							(openBlock(), createBlock("svg", {
								viewBox: "0 0 700 170",
								preserveAspectRatio: "none",
								"aria-hidden": "true"
							}, [
								createVNode("defs", null, [createVNode("linearGradient", {
									id: "area",
									x1: "0",
									y1: "0",
									x2: "0",
									y2: "1"
								}, [createVNode("stop", {
									offset: "0%",
									"stop-color": "#20b4aa",
									"stop-opacity": ".22"
								}), createVNode("stop", {
									offset: "100%",
									"stop-color": "#20b4aa",
									"stop-opacity": "0"
								})])]),
								createVNode("path", {
									d: unref(chartAreaPath),
									fill: "url(#area)"
								}, null, 8, ["d"]),
								createVNode("path", {
									d: unref(chartPath),
									fill: "none",
									stroke: "#16a99e",
									"stroke-width": "3",
									"stroke-linecap": "round",
									"stroke-linejoin": "round"
								}, null, 8, ["d"]),
								unref(chartRows).length > 1 ? (openBlock(), createBlock("path", {
									key: 0,
									d: unref(chartRows).map((row, i) => `${i ? "L" : "M"}${unref(chartRows).length === 1 ? 350 : i * 700 / (unref(chartRows).length - 1)} ${150 - row.prescriptions / unref(peakValue) * 125}`).join(" "),
									fill: "none",
									stroke: "#99c9cd",
									"stroke-width": "2",
									"stroke-dasharray": "6 5"
								}, null, 8, ["d"])) : createCommentVNode("", true)
							])),
							createVNode("div", { class: "chart-hover" }, [(openBlock(true), createBlock(Fragment, null, renderList$2(unref(days), (day, i) => {
								return openBlock(), createBlock("button", {
									key: unref(chartRows)[i]?.date,
									"aria-label": `${day}: ${("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(chartValues)[i] || 0)} visits`,
									onMouseenter: ($event) => chartIndex.value = i,
									onFocus: ($event) => chartIndex.value = i,
									onClick: ($event) => chartIndex.value = i
								}, [unref(chartIndex) === i ? (openBlock(), createBlock("span", {
									key: 0,
									class: "chart-tooltip"
								}, [createTextVNode(toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(chartValues)[i] || 0)) + " visits", 1), createVNode("small", null, toDisplayString(("formatDateTime" in _ctx ? _ctx.formatDateTime : unref(formatDateTime))(`${unref(chartRows)[i]?.date}T08:00:00Z`)), 1)])) : createCommentVNode("", true)], 40, [
									"aria-label",
									"onMouseenter",
									"onFocus",
									"onClick"
								]);
							}), 128))]),
							createVNode("div", { class: "chart-x" }, [(openBlock(true), createBlock(Fragment, null, renderList$2(unref(days), (day, i) => {
								return openBlock(), createBlock("span", {
									key: day + i,
									title: day
								}, [createVNode("span", { class: "chart-day-full" }, toDisplayString(day.slice(0, 3)), 1), createVNode("span", { class: "chart-day-short" }, toDisplayString(day.slice(0, 1)), 1)], 8, ["title"]);
							}), 128))])
						])]))];
					}),
					_: 2
				}, _parent));
				else if (widget.id === "distribution") _push(ssrRenderComponent(_component_WidgetPanel, {
					class: "distribution-widget",
					title: "Visit distribution",
					subtitle: "Current chart period"
				}, {
					action: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(ssrRenderComponent(_component_UIcon, {
							name: "i-lucide-chart-pie",
							class: "muted-icon"
						}, null, _parent, _scopeId));
						else return [createVNode(_component_UIcon, {
							name: "i-lucide-chart-pie",
							class: "muted-icon"
						})];
					}),
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<div class="donut" style="${ssrRenderStyle({ "--distribution": `${unref(distribution)[1]?.percent || 0}%` })}"${_scopeId}><div${_scopeId}><strong${_scopeId}>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(totalVisits)))}</strong><span${_scopeId}>All visits</span></div></div><div class="distribution-list"${_scopeId}><!--[-->`);
							ssrRenderList$2(unref(distribution), (entry) => {
								_push(`<div${_scopeId}><span${_scopeId}><i class="${ssrRenderClass([entry.tone, "legend-dot"])}"${_scopeId}></i>${ssrInterpolate(entry.label)}</span><b${_scopeId}>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(entry.percent))}% <small${_scopeId}>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(entry.count))}</small></b></div>`);
							});
							_push(`<!--]--></div>`);
						} else return [createVNode("div", {
							class: "donut",
							style: { "--distribution": `${unref(distribution)[1]?.percent || 0}%` }
						}, [createVNode("div", null, [createVNode("strong", null, toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(totalVisits))), 1), createVNode("span", null, "All visits")])], 4), createVNode("div", { class: "distribution-list" }, [(openBlock(true), createBlock(Fragment, null, renderList$2(unref(distribution), (entry) => {
							return openBlock(), createBlock("div", { key: entry.label }, [createVNode("span", null, [createVNode("i", { class: ["legend-dot", entry.tone] }, null, 2), createTextVNode(toDisplayString(entry.label), 1)]), createVNode("b", null, [createTextVNode(toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(entry.percent)) + "% ", 1), createVNode("small", null, toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(entry.count)), 1)])]);
						}), 128))])];
					}),
					_: 2
				}, _parent));
				else if (widget.id === "patients") _push(ssrRenderComponent(_component_WidgetPanel, {
					class: "patients-widget",
					title: "Recent patients",
					subtitle: "Patients from your latest recorded visits"
				}, {
					action: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(ssrRenderComponent(_component_UButton, {
							to: "/patients",
							variant: "link",
							"trailing-icon": "i-lucide-arrow-right"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`All patients`);
								else return [createTextVNode("All patients")];
							}),
							_: 2
						}, _parent, _scopeId));
						else return [createVNode(_component_UButton, {
							to: "/patients",
							variant: "link",
							"trailing-icon": "i-lucide-arrow-right"
						}, {
							default: withCtx(() => [createTextVNode("All patients")]),
							_: 1
						})];
					}),
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<div class="table-search"${_scopeId}>`);
							_push(ssrRenderComponent(_component_UInput, {
								modelValue: unref(search),
								"onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
								icon: "i-lucide-search",
								placeholder: "Search patient name or ID...",
								"aria-label": "Search patients",
								class: "w-full"
							}, null, _parent, _scopeId));
							_push(`</div><div class="table-scroll"${_scopeId}><table${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>Patient</th><th${_scopeId}>Code</th><th${_scopeId}>Last visit</th><th${_scopeId}>Prescription</th><th${_scopeId}><span class="sr-only"${_scopeId}>Details</span></th></tr></thead><tbody${_scopeId}><!--[-->`);
							ssrRenderList$2(unref(recentPatients), (treatment) => {
								_push(`<tr${_scopeId}><td${_scopeId}><div class="patient-cell"${_scopeId}><span class="${ssrRenderClass([patientTone(treatment.patient.id), "patient-avatar"])}"${_scopeId}>${ssrInterpolate(initials(treatment.patient.name))}</span><span${_scopeId}><strong${_scopeId}>${ssrInterpolate(treatment.patient.name)}</strong><small${_scopeId}>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(treatment.patient.age))} years · ${ssrInterpolate(treatment.patient.gender)}</small></span></div></td><td${_scopeId}>${ssrInterpolate(treatment.patient.code)}</td><td class="time-cell"${_scopeId}>${ssrInterpolate(("formatDateTime" in _ctx ? _ctx.formatDateTime : unref(formatDateTime))(treatment.recordedAtUtc))}</td><td${_scopeId}>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(treatment.medicationCount))} items</td><td${_scopeId}>`);
								_push(ssrRenderComponent(_component_UButton, {
									icon: "i-lucide-chevron-right",
									variant: "ghost",
									color: "neutral",
									"aria-label": `${treatment.patient.name} Details`,
									onClick: ($event) => detail.value = treatment
								}, null, _parent, _scopeId));
								_push(`</td></tr>`);
							});
							_push(`<!--]-->`);
							if (!unref(loading) && !unref(recentPatients).length) _push(`<tr${_scopeId}><td colspan="5" class="empty-table"${_scopeId}>${ssrInterpolate(unref(search) ? "No matching patients found." : "No patient visits have been recorded yet.")}</td></tr>`);
							else _push(`<!---->`);
							_push(`</tbody></table></div><div class="table-footer"${_scopeId}><span${_scopeId}>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(recentPatients).length))} recent patients</span><span${_scopeId}><span class="live-dot"${_scopeId}></span>${ssrInterpolate(unref(refreshing) ? "Updating…" : "Live data")}</span></div>`);
						} else return [
							createVNode("div", { class: "table-search" }, [createVNode(_component_UInput, {
								modelValue: unref(search),
								"onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
								icon: "i-lucide-search",
								placeholder: "Search patient name or ID...",
								"aria-label": "Search patients",
								class: "w-full"
							}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
							createVNode("div", { class: "table-scroll" }, [createVNode("table", null, [createVNode("thead", null, [createVNode("tr", null, [
								createVNode("th", null, "Patient"),
								createVNode("th", null, "Code"),
								createVNode("th", null, "Last visit"),
								createVNode("th", null, "Prescription"),
								createVNode("th", null, [createVNode("span", { class: "sr-only" }, "Details")])
							])]), createVNode("tbody", null, [(openBlock(true), createBlock(Fragment, null, renderList$2(unref(recentPatients), (treatment) => {
								return openBlock(), createBlock("tr", { key: treatment.patient.id }, [
									createVNode("td", null, [createVNode("div", { class: "patient-cell" }, [createVNode("span", { class: ["patient-avatar", patientTone(treatment.patient.id)] }, toDisplayString(initials(treatment.patient.name)), 3), createVNode("span", null, [createVNode("strong", null, toDisplayString(treatment.patient.name), 1), createVNode("small", null, toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(treatment.patient.age)) + " years · " + toDisplayString(treatment.patient.gender), 1)])])]),
									createVNode("td", null, toDisplayString(treatment.patient.code), 1),
									createVNode("td", { class: "time-cell" }, toDisplayString(("formatDateTime" in _ctx ? _ctx.formatDateTime : unref(formatDateTime))(treatment.recordedAtUtc)), 1),
									createVNode("td", null, toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(treatment.medicationCount)) + " items", 1),
									createVNode("td", null, [createVNode(_component_UButton, {
										icon: "i-lucide-chevron-right",
										variant: "ghost",
										color: "neutral",
										"aria-label": `${treatment.patient.name} Details`,
										onClick: ($event) => detail.value = treatment
									}, null, 8, ["aria-label", "onClick"])])
								]);
							}), 128)), !unref(loading) && !unref(recentPatients).length ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
								colspan: "5",
								class: "empty-table"
							}, toDisplayString(unref(search) ? "No matching patients found." : "No patient visits have been recorded yet."), 1)])) : createCommentVNode("", true)])])]),
							createVNode("div", { class: "table-footer" }, [createVNode("span", null, toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(recentPatients).length)) + " recent patients", 1), createVNode("span", null, [createVNode("span", { class: "live-dot" }), createTextVNode(toDisplayString(unref(refreshing) ? "Updating…" : "Live data"), 1)])])
						];
					}),
					_: 2
				}, _parent));
				else if (widget.id === "activity") _push(ssrRenderComponent(_component_WidgetPanel, {
					class: "activity-widget",
					title: "Recent activity",
					subtitle: "Latest saved treatments"
				}, {
					action: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<span class="today-tag"${_scopeId}>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(summary)?.treatmentsToday || 0))} today</span>`);
						else return [createVNode("span", { class: "today-tag" }, toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(summary)?.treatmentsToday || 0)) + " today", 1)];
					}),
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							if (unref(loading)) _push(`<div class="chart-loading"${_scopeId}>Loading recent activity…</div>`);
							else if (!unref(recentActivity).length) _push(`<div class="chart-loading"${_scopeId}>No activity has been recorded yet.</div>`);
							else {
								_push(`<div class="timeline"${_scopeId}><!--[-->`);
								ssrRenderList$2(unref(recentActivity), (event, i) => {
									_push(`<div class="timeline-item"${_scopeId}><span class="${ssrRenderClass([[
										"teal",
										"blue",
										"purple",
										"orange"
									][i % 4], "timeline-icon"])}"${_scopeId}>`);
									_push(ssrRenderComponent(_component_UIcon, { name: event.icon }, null, _parent, _scopeId));
									_push(`</span><div${_scopeId}><h3${_scopeId}>${ssrInterpolate(event.title)}</h3><p${_scopeId}>${ssrInterpolate(event.text)}</p><small${_scopeId}>${ssrInterpolate(event.time)}</small></div></div>`);
								});
								_push(`<!--]--></div>`);
							}
							_push(`<div class="care-note"${_scopeId}>`);
							_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-heart-handshake" }, null, _parent, _scopeId));
							_push(`<div${_scopeId}><strong${_scopeId}>Better care starts with better organization.</strong><p${_scopeId}>RoghtiaSystem, your everyday partner.</p></div></div>`);
						} else return [unref(loading) ? (openBlock(), createBlock("div", {
							key: 0,
							class: "chart-loading"
						}, "Loading recent activity…")) : !unref(recentActivity).length ? (openBlock(), createBlock("div", {
							key: 1,
							class: "chart-loading"
						}, "No activity has been recorded yet.")) : (openBlock(), createBlock("div", {
							key: 2,
							class: "timeline"
						}, [(openBlock(true), createBlock(Fragment, null, renderList$2(unref(recentActivity), (event, i) => {
							return openBlock(), createBlock("div", {
								key: event.id,
								class: "timeline-item"
							}, [createVNode("span", { class: ["timeline-icon", [
								"teal",
								"blue",
								"purple",
								"orange"
							][i % 4]] }, [createVNode(_component_UIcon, { name: event.icon }, null, 8, ["name"])], 2), createVNode("div", null, [
								createVNode("h3", null, toDisplayString(event.title), 1),
								createVNode("p", null, toDisplayString(event.text), 1),
								createVNode("small", null, toDisplayString(event.time), 1)
							])]);
						}), 128))])), createVNode("div", { class: "care-note" }, [createVNode(_component_UIcon, { name: "i-lucide-heart-handshake" }), createVNode("div", null, [createVNode("strong", null, "Better care starts with better organization."), createVNode("p", null, "RoghtiaSystem, your everyday partner.")])])];
					}),
					_: 2
				}, _parent));
				else _push(`<!---->`);
				_push(`<!--]-->`);
			});
			_push(`<!--]--></div><footer class="page-footer"><span>RoghtiaSystem <span>·</span> Built for better care</span><span>`);
			_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-shield-check" }, null, _parent));
			_push(` Your care is our priority</span></footer>`);
			_push(ssrRenderComponent(_component_UModal, {
				open: unref(customize),
				"onUpdate:open": ($event) => isRef(customize) ? customize.value = $event : null,
				title: "Customize dashboard",
				description: "Show, hide or reorder widgets."
			}, {
				body: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<!--[-->`);
						ssrRenderList$2(unref(widgets), (w, i) => {
							_push(`<div class="widget-option"${_scopeId}>`);
							_push(ssrRenderComponent(_component_USwitch, {
								modelValue: w.visible,
								"onUpdate:modelValue": ($event) => w.visible = $event,
								label: w.label
							}, null, _parent, _scopeId));
							_push(`<div${_scopeId}>`);
							_push(ssrRenderComponent(_component_UButton, {
								icon: "i-lucide-arrow-up",
								variant: "ghost",
								disabled: i === 0,
								"aria-label": "Move up",
								onClick: ($event) => move(i, -1)
							}, null, _parent, _scopeId));
							_push(ssrRenderComponent(_component_UButton, {
								icon: "i-lucide-arrow-down",
								variant: "ghost",
								disabled: i === unref(widgets).length - 1,
								"aria-label": "Move down",
								onClick: ($event) => move(i, 1)
							}, null, _parent, _scopeId));
							_push(`</div></div>`);
						});
						_push(`<!--]--><p class="saved-note"${_scopeId}>Changes are saved automatically on this device.</p>`);
					} else return [(openBlock(true), createBlock(Fragment, null, renderList$2(unref(widgets), (w, i) => {
						return openBlock(), createBlock("div", {
							key: w.id,
							class: "widget-option"
						}, [createVNode(_component_USwitch, {
							modelValue: w.visible,
							"onUpdate:modelValue": ($event) => w.visible = $event,
							label: w.label
						}, null, 8, [
							"modelValue",
							"onUpdate:modelValue",
							"label"
						]), createVNode("div", null, [createVNode(_component_UButton, {
							icon: "i-lucide-arrow-up",
							variant: "ghost",
							disabled: i === 0,
							"aria-label": "Move up",
							onClick: ($event) => move(i, -1)
						}, null, 8, ["disabled", "onClick"]), createVNode(_component_UButton, {
							icon: "i-lucide-arrow-down",
							variant: "ghost",
							disabled: i === unref(widgets).length - 1,
							"aria-label": "Move down",
							onClick: ($event) => move(i, 1)
						}, null, 8, ["disabled", "onClick"])])]);
					}), 128)), createVNode("p", { class: "saved-note" }, "Changes are saved automatically on this device.")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_UModal, {
				open: !!unref(detail),
				title: "Patient visit summary",
				description: "Details from the selected patient's latest visit.",
				"onUpdate:open": ($event) => detail.value = null
			}, {
				body: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (unref(detail)) _push(`<div class="patient-detail"${_scopeId}><span class="${ssrRenderClass([patientTone(unref(detail).patient.id), "patient-avatar"])}"${_scopeId}>${ssrInterpolate(initials(unref(detail).patient.name))}</span><h2${_scopeId}>${ssrInterpolate(unref(detail).patient.name)}</h2><p${_scopeId}>${ssrInterpolate(unref(detail).patient.code)} · ${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(detail).patient.age))} years · ${ssrInterpolate(unref(detail).patient.gender)}</p><p${_scopeId}>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(detail).medicationCount))} prescribed medication items · ${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(detail).clinicalNoteCount))} clinical notes</p><p${_scopeId}>Blood pressure: <bdi dir="ltr"${_scopeId}>${ssrInterpolate(unref(detail).bloodPressure || "—")}</bdi></p><p${_scopeId}>${ssrInterpolate(("formatDateTime" in _ctx ? _ctx.formatDateTime : unref(formatDateTime))(unref(detail).recordedAtUtc))}</p></div>`);
						else _push(`<!---->`);
					} else return [unref(detail) ? (openBlock(), createBlock("div", {
						key: 0,
						class: "patient-detail"
					}, [
						createVNode("span", { class: ["patient-avatar", patientTone(unref(detail).patient.id)] }, toDisplayString(initials(unref(detail).patient.name)), 3),
						createVNode("h2", null, toDisplayString(unref(detail).patient.name), 1),
						createVNode("p", null, toDisplayString(unref(detail).patient.code) + " · " + toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(detail).patient.age)) + " years · " + toDisplayString(unref(detail).patient.gender), 1),
						createVNode("p", null, toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(detail).medicationCount)) + " prescribed medication items · " + toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(detail).clinicalNoteCount)) + " clinical notes", 1),
						createVNode("p", null, [createTextVNode("Blood pressure: "), createVNode("bdi", { dir: "ltr" }, toDisplayString(unref(detail).bloodPressure || "—"), 1)]),
						createVNode("p", null, toDisplayString(("formatDateTime" in _ctx ? _ctx.formatDateTime : unref(formatDateTime))(unref(detail).recordedAtUtc)), 1)
					])) : createCommentVNode("", true)];
				}),
				_: 1
			}, _parent));
			_push(`</div>`);
		};
	}
});
// app/pages/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var pages_default = index_vue_vue_type_script_setup_true_lang_default;

export { pages_default as default };;globalThis.__timing__.logEnd('Load chunks/build/pages-Dn1_cb35');
//# sourceMappingURL=pages-Dn1_cb35.mjs.map
