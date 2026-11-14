globalThis.__timing__.logStart('Load chunks/build/Checkbox-CheFquWT');import { f as useComponentProps, g as useAppConfig, B as useForwardProps, v as useFormField, t as tv, P as Primitive, b as _sfc_main$5, C as useForwardExpose, D as isNullish, E as Presence_default, F as createContext, G as useCollection } from '../virtual/entry.mjs';
import { u as useFormControl } from './useFormControl-yNWnq054.mjs';
import { u as useForwardScopeId } from './useForwardScopeId-DagAJ5Oj.mjs';
import { V as VisuallyHiddenInput_default } from './VisuallyHiddenInput-BQ6nCFCd.mjs';
import { u as useId$1 } from './useId-BkktAd0v.mjs';
import { g as getFocusIntent, w as wrapArray, f as focusFirst } from './utils-BKhy4VZo.mjs';
import { i as injectRovingFocusGroupContext } from './RovingFocusGroup-DrT9jF6a.mjs';
import { L as Label_default } from './Label-CeDlFZe1.mjs';
import { useSlots, useId, computed, useAttrs, unref, mergeProps, withCtx, openBlock, createBlock, createCommentVNode, createVNode, resolveDynamicComponent, renderSlot, createTextVNode, toDisplayString, defineComponent, createElementBlock, Fragment, withKeys, withModifiers, watch, nextTick, useSSRContext } from 'vue';
import { a5 as isEqual } from '../_/nitro.mjs';
import { ssrRenderComponent, ssrRenderClass, ssrRenderVNode, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { reactivePick, useVModel } from '@vueuse/core';

// node_modules/reka-ui/dist/shared/isValueEqualOrExist.js
/**
* The function `isValueEqualOrExist` checks if a value is equal to or exists in another value or
* array.
* @param {T | T[] | undefined} base - It represents the base value that you want to compare with the `current` value.
* @param {T | T[] | undefined} current - The `current` parameter represents the current value that you want to compare with the `base` value or values.
* @returns The `isValueEqualOrExist` function returns a boolean value. It checks if the `base` value
* is equal to the `current` value or if the `current` value exists within the `base` value. The
* function handles cases where `base` can be a single value, an array of values, or undefined.
*/
function isValueEqualOrExist(base, current) {
	if (isNullish(base)) return false;
	if (Array.isArray(base)) return base.some((val) => isEqual(val, current));
	else return isEqual(base, current);
}
// node_modules/reka-ui/dist/RovingFocus/RovingFocusItem.js
var RovingFocusItem_default = /* @__PURE__ */ defineComponent({
	__name: "RovingFocusItem",
	props: {
		tabStopId: {
			type: String,
			required: false
		},
		focusable: {
			type: Boolean,
			required: false,
			default: true
		},
		active: {
			type: Boolean,
			required: false
		},
		allowShiftKey: {
			type: Boolean,
			required: false
		},
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
		const props = __props;
		const context = injectRovingFocusGroupContext();
		const randomId = useId$1();
		const id = computed(() => props.tabStopId || randomId);
		const isCurrentTabStop = computed(() => context.currentTabStopId.value === id.value);
		const { getItems, CollectionItem } = useCollection();
		watch(() => props.focusable, (newVal, oldVal) => {
			if (newVal === oldVal) return;
			if (newVal) context.onFocusableItemAdd();
			else context.onFocusableItemRemove();
		});
		function handleKeydown(event) {
			if (event.key === "Tab" && event.shiftKey) {
				context.onItemShiftTab();
				return;
			}
			if (event.target !== event.currentTarget) return;
			const focusIntent = getFocusIntent(event, context.orientation.value, context.dir.value);
			if (focusIntent !== void 0) {
				if (event.metaKey || event.ctrlKey || event.altKey || (props.allowShiftKey ? false : event.shiftKey)) return;
				event.preventDefault();
				let candidateNodes = [...getItems().map((i) => i.ref).filter((i) => i.dataset.disabled !== "")];
				if (focusIntent === "last") candidateNodes.reverse();
				else if (focusIntent === "prev" || focusIntent === "next") {
					if (focusIntent === "prev") candidateNodes.reverse();
					const currentIndex = candidateNodes.indexOf(event.currentTarget);
					candidateNodes = context.loop.value ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
				}
				nextTick(() => focusFirst(candidateNodes));
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CollectionItem), null, {
				default: withCtx(() => [createVNode(unref(Primitive), {
					tabindex: isCurrentTabStop.value ? 0 : -1,
					"data-orientation": unref(context).orientation.value,
					"data-active": _ctx.active ? "" : void 0,
					"data-disabled": !_ctx.focusable ? "" : void 0,
					as: _ctx.as,
					"as-child": _ctx.asChild,
					onMousedown: _cache[0] || (_cache[0] = (event) => {
						if (!_ctx.focusable) event.preventDefault();
						else unref(context).onItemFocus(id.value);
					}),
					onFocus: _cache[1] || (_cache[1] = ($event) => unref(context).onItemFocus(id.value)),
					onKeydown: handleKeydown
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 8, [
					"tabindex",
					"data-orientation",
					"data-active",
					"data-disabled",
					"as",
					"as-child"
				])]),
				_: 3
			});
		};
	}
});
// node_modules/reka-ui/dist/Checkbox/CheckboxGroupRoot.js
var [injectCheckboxGroupRootContext] = /*#__PURE__*/ createContext("CheckboxGroupRoot");
// node_modules/reka-ui/dist/Checkbox/utils.js
function isIndeterminate(checked) {
	return checked === "indeterminate";
}
function getState(checked) {
	return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
// node_modules/reka-ui/dist/Checkbox/CheckboxRoot.js
var [injectCheckboxRootContext, provideCheckboxRootContext] = /*#__PURE__*/ createContext("CheckboxRoot");
var CheckboxRoot_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "CheckboxRoot",
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
		value: {
			type: null,
			required: false,
			default: "on"
		},
		id: {
			type: String,
			required: false
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
		const emits = __emit;
		const { forwardRef, currentElement } = useForwardExpose();
		const checkboxGroupContext = injectCheckboxGroupRootContext(null);
		const modelValue = useVModel(props, "modelValue", emits, {
			defaultValue: props.defaultValue ?? props.falseValue,
			passive: props.modelValue === void 0
		});
		const disabled = computed(() => checkboxGroupContext?.disabled.value || props.disabled);
		const isChecked = computed(() => isEqual(modelValue.value, props.trueValue));
		const checkboxState = computed(() => {
			if (!isNullish(checkboxGroupContext?.modelValue.value)) return isValueEqualOrExist(checkboxGroupContext.modelValue.value, props.value);
			else {
				if (modelValue.value === "indeterminate") return "indeterminate";
				return isChecked.value;
			}
		});
		function handleClick() {
			if (!isNullish(checkboxGroupContext?.modelValue.value)) {
				const modelValueArray = [...checkboxGroupContext.modelValue.value || []];
				if (isValueEqualOrExist(modelValueArray, props.value)) {
					const index = modelValueArray.findIndex((i) => isEqual(i, props.value));
					modelValueArray.splice(index, 1);
				} else modelValueArray.push(props.value);
				checkboxGroupContext.modelValue.value = modelValueArray;
			} else if (modelValue.value === "indeterminate") modelValue.value = props.trueValue;
			else modelValue.value = isChecked.value ? props.falseValue : props.trueValue;
		}
		const isFormControl = useFormControl(currentElement);
		const scopeIdAttrs = useForwardScopeId();
		const attrs = useAttrs();
		const ariaLabel = computed(() => {
			if (attrs["aria-label"]) return void 0;
			return props.id && currentElement.value ? (void 0).querySelector(`[for="${props.id}"]`)?.innerText : void 0;
		});
		provideCheckboxRootContext({
			disabled,
			state: checkboxState
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [(openBlock(), createBlock(resolveDynamicComponent(unref(checkboxGroupContext)?.rovingFocus.value ? unref(RovingFocusItem_default) : unref(Primitive)), mergeProps({
				..._ctx.$attrs,
				...unref(scopeIdAttrs)
			}, {
				id: _ctx.id,
				ref: unref(forwardRef),
				role: "checkbox",
				"as-child": _ctx.asChild,
				as: _ctx.as,
				type: _ctx.as === "button" ? "button" : void 0,
				"aria-checked": unref(isIndeterminate)(checkboxState.value) ? "mixed" : checkboxState.value,
				"aria-required": _ctx.required,
				"aria-label": _ctx.$attrs["aria-label"] || ariaLabel.value,
				"data-state": unref(getState)(checkboxState.value),
				"data-disabled": disabled.value ? "" : void 0,
				disabled: disabled.value,
				focusable: unref(checkboxGroupContext)?.rovingFocus.value ? !disabled.value : void 0,
				onKeydown: withKeys(withModifiers(() => {}, ["prevent"]), ["enter"]),
				onClick: handleClick
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
					modelValue: unref(modelValue),
					state: checkboxState.value
				})]),
				_: 3
			}, 16, [
				"id",
				"as-child",
				"as",
				"type",
				"aria-checked",
				"aria-required",
				"aria-label",
				"data-state",
				"data-disabled",
				"disabled",
				"focusable",
				"onKeydown"
			])), unref(isFormControl) && _ctx.name && !unref(checkboxGroupContext) ? (openBlock(), createBlock(unref(VisuallyHiddenInput_default), mergeProps({
				key: 0,
				type: "checkbox",
				checked: !!checkboxState.value,
				name: _ctx.name,
				value: _ctx.value,
				disabled: disabled.value,
				required: _ctx.required
			}, unref(scopeIdAttrs)), null, 16, [
				"checked",
				"name",
				"value",
				"disabled",
				"required"
			])) : createCommentVNode("v-if", true)], 64);
		};
	}
});
// node_modules/reka-ui/dist/Checkbox/CheckboxIndicator.js
var CheckboxIndicator_default = /* @__PURE__ */ defineComponent({
	__name: "CheckboxIndicator",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
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
		const { forwardRef } = useForwardExpose();
		const rootContext = injectCheckboxRootContext();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Presence_default), { present: _ctx.forceMount || unref(isIndeterminate)(unref(rootContext).state.value) || unref(rootContext).state.value === true }, {
				default: withCtx(() => [createVNode(unref(Primitive), mergeProps({
					ref: unref(forwardRef),
					"data-state": unref(getState)(unref(rootContext).state.value),
					"data-disabled": unref(rootContext).disabled.value ? "" : void 0,
					style: { pointerEvents: "none" },
					"as-child": _ctx.asChild,
					as: _ctx.as
				}, _ctx.$attrs), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16, [
					"data-state",
					"data-disabled",
					"as-child",
					"as"
				])]),
				_: 3
			}, 8, ["present"]);
		};
	}
});
// virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fcheckbox.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fcheckbox_default = {
	"slots": {
		"root": "relative flex items-start",
		"container": "flex items-center",
		"base": "rounded-sm ring ring-inset ring-accented overflow-hidden focus-visible:outline-none",
		"indicator": "flex items-center justify-center size-full text-inverted",
		"icon": "shrink-0",
		"wrapper": "w-full",
		"label": "block font-medium text-default",
		"description": "text-muted"
	},
	"variants": {
		"color": {
			"primary": { "indicator": "bg-primary" },
			"secondary": { "indicator": "bg-secondary" },
			"success": { "indicator": "bg-success" },
			"info": { "indicator": "bg-info" },
			"warning": { "indicator": "bg-warning" },
			"error": { "indicator": "bg-error" },
			"neutral": { "indicator": "bg-inverted" }
		},
		"variant": {
			"list": { "root": "" },
			"card": { "root": ["border border-default rounded-lg hover:not-has-disabled:not-has-focus-visible:not-has-data-[state=checked]:bg-elevated/50", "transition-colors"] }
		},
		"indicator": {
			"start": {
				"root": "flex-row",
				"wrapper": "ms-2"
			},
			"end": {
				"root": "flex-row-reverse",
				"wrapper": "me-2"
			},
			"hidden": {
				"base": "sr-only",
				"wrapper": "flex flex-col items-center gap-1 text-center"
			}
		},
		"size": {
			"xs": {
				"base": "size-3",
				"icon": "size-2.5",
				"container": "h-4",
				"wrapper": "text-xs"
			},
			"sm": {
				"base": "size-3.5",
				"icon": "size-3",
				"container": "h-4",
				"wrapper": "text-xs"
			},
			"md": {
				"base": "size-4",
				"icon": "size-3.5",
				"container": "h-5",
				"wrapper": "text-sm"
			},
			"lg": {
				"base": "size-4.5",
				"icon": "size-4",
				"container": "h-5",
				"wrapper": "text-sm"
			},
			"xl": {
				"base": "size-5",
				"icon": "size-4.5",
				"container": "h-6",
				"wrapper": "text-base"
			}
		},
		"required": { "true": { "label": "after:content-['*'] after:ms-0.5 after:text-error" } },
		"disabled": { "true": {
			"root": "opacity-75",
			"base": "cursor-not-allowed",
			"label": "cursor-not-allowed",
			"description": "cursor-not-allowed"
		} },
		"highlight": {
			"true": "",
			"false": ""
		},
		"checked": { "true": "" }
	},
	"compoundVariants": [
		{
			"indicator": "hidden",
			"class": { "container": "h-auto" }
		},
		{
			"variant": "card",
			"highlight": false,
			"class": { "root": "hover:not-has-disabled:not-has-focus-visible:not-has-data-[state=checked]:border-accented" }
		},
		{
			"size": "xs",
			"indicator": "hidden",
			"class": { "icon": "size-3" }
		},
		{
			"size": "sm",
			"indicator": "hidden",
			"class": { "icon": "size-3.5" }
		},
		{
			"size": "md",
			"indicator": "hidden",
			"class": { "icon": "size-4" }
		},
		{
			"size": "lg",
			"indicator": "hidden",
			"class": { "icon": "size-4.5" }
		},
		{
			"size": "xl",
			"indicator": "hidden",
			"class": { "icon": "size-5" }
		},
		{
			"size": "xs",
			"variant": "card",
			"class": { "root": "p-2.5" }
		},
		{
			"size": "sm",
			"variant": "card",
			"class": { "root": "p-3" }
		},
		{
			"size": "md",
			"variant": "card",
			"class": { "root": "p-3.5" }
		},
		{
			"size": "lg",
			"variant": "card",
			"class": { "root": "p-4" }
		},
		{
			"size": "xl",
			"variant": "card",
			"class": { "root": "p-4.5" }
		},
		{
			"color": "primary",
			"variant": "list",
			"indicator": ["start", "end"],
			"class": { "base": "outline-primary/25 focus-visible:outline-solid focus-visible:outline-3 focus-visible:ring-primary" }
		},
		{
			"color": "secondary",
			"variant": "list",
			"indicator": ["start", "end"],
			"class": { "base": "outline-secondary/25 focus-visible:outline-solid focus-visible:outline-3 focus-visible:ring-secondary" }
		},
		{
			"color": "success",
			"variant": "list",
			"indicator": ["start", "end"],
			"class": { "base": "outline-success/25 focus-visible:outline-solid focus-visible:outline-3 focus-visible:ring-success" }
		},
		{
			"color": "info",
			"variant": "list",
			"indicator": ["start", "end"],
			"class": { "base": "outline-info/25 focus-visible:outline-solid focus-visible:outline-3 focus-visible:ring-info" }
		},
		{
			"color": "warning",
			"variant": "list",
			"indicator": ["start", "end"],
			"class": { "base": "outline-warning/25 focus-visible:outline-solid focus-visible:outline-3 focus-visible:ring-warning" }
		},
		{
			"color": "error",
			"variant": "list",
			"indicator": ["start", "end"],
			"class": { "base": "outline-error/25 focus-visible:outline-solid focus-visible:outline-3 focus-visible:ring-error" }
		},
		{
			"color": "neutral",
			"variant": "list",
			"indicator": ["start", "end"],
			"class": { "base": "outline-inverted/25 focus-visible:outline-solid focus-visible:outline-3 focus-visible:ring-inverted" }
		},
		{
			"color": "primary",
			"variant": "card",
			"class": { "root": "outline-primary/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-primary has-focus-visible:z-[1]" }
		},
		{
			"color": "secondary",
			"variant": "card",
			"class": { "root": "outline-secondary/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-secondary has-focus-visible:z-[1]" }
		},
		{
			"color": "success",
			"variant": "card",
			"class": { "root": "outline-success/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-success has-focus-visible:z-[1]" }
		},
		{
			"color": "info",
			"variant": "card",
			"class": { "root": "outline-info/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-info has-focus-visible:z-[1]" }
		},
		{
			"color": "warning",
			"variant": "card",
			"class": { "root": "outline-warning/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-warning has-focus-visible:z-[1]" }
		},
		{
			"color": "error",
			"variant": "card",
			"class": { "root": "outline-error/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-error has-focus-visible:z-[1]" }
		},
		{
			"color": "neutral",
			"variant": "card",
			"class": { "root": "outline-inverted/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-inverted has-focus-visible:z-[1]" }
		},
		{
			"color": "primary",
			"variant": "list",
			"indicator": "hidden",
			"class": { "root": "outline-primary/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-primary has-focus-visible:z-[1]" }
		},
		{
			"color": "secondary",
			"variant": "list",
			"indicator": "hidden",
			"class": { "root": "outline-secondary/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-secondary has-focus-visible:z-[1]" }
		},
		{
			"color": "success",
			"variant": "list",
			"indicator": "hidden",
			"class": { "root": "outline-success/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-success has-focus-visible:z-[1]" }
		},
		{
			"color": "info",
			"variant": "list",
			"indicator": "hidden",
			"class": { "root": "outline-info/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-info has-focus-visible:z-[1]" }
		},
		{
			"color": "warning",
			"variant": "list",
			"indicator": "hidden",
			"class": { "root": "outline-warning/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-warning has-focus-visible:z-[1]" }
		},
		{
			"color": "error",
			"variant": "list",
			"indicator": "hidden",
			"class": { "root": "outline-error/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-error has-focus-visible:z-[1]" }
		},
		{
			"color": "neutral",
			"variant": "list",
			"indicator": "hidden",
			"class": { "root": "outline-inverted/25 has-focus-visible:outline-3 not-has-disabled:has-focus-visible:border-inverted has-focus-visible:z-[1]" }
		},
		{
			"color": "primary",
			"variant": "card",
			"class": { "root": "has-data-[state=checked]:border-primary/50 has-data-[state=checked]:bg-primary/10" }
		},
		{
			"color": "secondary",
			"variant": "card",
			"class": { "root": "has-data-[state=checked]:border-secondary/50 has-data-[state=checked]:bg-secondary/10" }
		},
		{
			"color": "success",
			"variant": "card",
			"class": { "root": "has-data-[state=checked]:border-success/50 has-data-[state=checked]:bg-success/10" }
		},
		{
			"color": "info",
			"variant": "card",
			"class": { "root": "has-data-[state=checked]:border-info/50 has-data-[state=checked]:bg-info/10" }
		},
		{
			"color": "warning",
			"variant": "card",
			"class": { "root": "has-data-[state=checked]:border-warning/50 has-data-[state=checked]:bg-warning/10" }
		},
		{
			"color": "error",
			"variant": "card",
			"class": { "root": "has-data-[state=checked]:border-error/50 has-data-[state=checked]:bg-error/10" }
		},
		{
			"color": "neutral",
			"variant": "card",
			"class": { "root": "has-data-[state=checked]:border-inverted/50 has-data-[state=checked]:bg-elevated" }
		},
		{
			"variant": "card",
			"disabled": true,
			"class": { "root": "cursor-not-allowed" }
		},
		{
			"color": "primary",
			"indicator": "hidden",
			"highlight": true,
			"class": { "root": "not-has-disabled:border-primary not-has-disabled:has-data-[state=checked]:border-primary" }
		},
		{
			"color": "secondary",
			"indicator": "hidden",
			"highlight": true,
			"class": { "root": "not-has-disabled:border-secondary not-has-disabled:has-data-[state=checked]:border-secondary" }
		},
		{
			"color": "success",
			"indicator": "hidden",
			"highlight": true,
			"class": { "root": "not-has-disabled:border-success not-has-disabled:has-data-[state=checked]:border-success" }
		},
		{
			"color": "info",
			"indicator": "hidden",
			"highlight": true,
			"class": { "root": "not-has-disabled:border-info not-has-disabled:has-data-[state=checked]:border-info" }
		},
		{
			"color": "warning",
			"indicator": "hidden",
			"highlight": true,
			"class": { "root": "not-has-disabled:border-warning not-has-disabled:has-data-[state=checked]:border-warning" }
		},
		{
			"color": "error",
			"indicator": "hidden",
			"highlight": true,
			"class": { "root": "not-has-disabled:border-error not-has-disabled:has-data-[state=checked]:border-error" }
		},
		{
			"color": "neutral",
			"indicator": "hidden",
			"highlight": true,
			"class": { "root": "not-has-disabled:border-inverted not-has-disabled:has-data-[state=checked]:border-inverted" }
		},
		{
			"color": "primary",
			"highlight": true,
			"class": { "base": "ring-primary" }
		},
		{
			"color": "secondary",
			"highlight": true,
			"class": { "base": "ring-secondary" }
		},
		{
			"color": "success",
			"highlight": true,
			"class": { "base": "ring-success" }
		},
		{
			"color": "info",
			"highlight": true,
			"class": { "base": "ring-info" }
		},
		{
			"color": "warning",
			"highlight": true,
			"class": { "base": "ring-warning" }
		},
		{
			"color": "error",
			"highlight": true,
			"class": { "base": "ring-error" }
		},
		{
			"color": "neutral",
			"highlight": true,
			"class": { "base": "ring-inverted" }
		}
	],
	"defaultVariants": {
		"highlight": false,
		"size": "md",
		"color": "primary",
		"variant": "list",
		"indicator": "start"
	}
};
// node_modules/@nuxt/ui/dist/runtime/components/Checkbox.vue
var _sfc_main = /*@__PURE__*/ Object.assign({ inheritAttrs: false }, {
	__name: "UCheckbox",
	__ssrInlineRender: true,
	props: {
		as: {
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
		color: {
			type: null,
			required: false
		},
		variant: {
			type: null,
			required: false
		},
		size: {
			type: null,
			required: false
		},
		indicator: {
			type: null,
			required: false
		},
		highlight: {
			type: Boolean,
			required: false
		},
		icon: {
			type: null,
			required: false
		},
		indeterminateIcon: {
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
		},
		disabled: {
			type: Boolean,
			required: false
		},
		required: {
			type: Boolean,
			required: false
		},
		name: {
			type: String,
			required: false
		},
		value: {
			type: null,
			required: false
		},
		id: {
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
		const props = useComponentProps("checkbox", _props);
		const appConfig = useAppConfig();
		const rootProps = useForwardProps(reactivePick(props, "required", "value", "defaultValue", "modelValue", "trueValue", "falseValue"), emits);
		const { id: _id, emitFormChange, emitFormInput, size: formFieldSize, color: formFieldColor, highlight: formFieldHighlight, name, disabled: formFieldDisabled, ariaAttrs } = useFormField(_props);
		const id = _id.value ?? useId();
		const color = computed(() => formFieldColor.value ?? props.color);
		const highlight = computed(() => formFieldHighlight.value ?? props.highlight);
		const size = computed(() => formFieldSize.value ?? props.size);
		const disabled = computed(() => formFieldDisabled.value ?? props.disabled);
		const labelIcon = computed(() => props.indicator === "hidden" ? props.icon : void 0);
		const attrs = useAttrs();
		const forwardedAttrs = computed(() => {
			const { "data-state": _, ...rest } = attrs;
			return rest;
		});
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fcheckbox_default,
			...appConfig.ui?.checkbox || {}
		})({
			size: size.value,
			color: color.value,
			variant: props.variant,
			indicator: props.indicator,
			highlight: highlight.value,
			required: props.required,
			disabled: disabled.value
		}));
		function onUpdate(value) {
			const event = new Event("change", { target: { value } });
			emits("change", event);
			emitFormChange();
			emitFormInput();
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Primitive), mergeProps({
				as: !unref(props).variant || unref(props).variant === "list" ? unref(props).as : unref(Label_default),
				"data-slot": _ctx.$attrs["data-slot"] ?? "root",
				class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] })
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: unref(props).ui?.container }))}"${_scopeId}>`);
						_push(ssrRenderComponent(unref(CheckboxRoot_default), mergeProps({ id: unref(id) }, {
							...unref(rootProps),
							...forwardedAttrs.value,
							...unref(ariaAttrs)
						}, {
							name: unref(name),
							disabled: disabled.value,
							"data-slot": "base",
							class: ui.value.base({ class: unref(props).ui?.base }),
							"onUpdate:modelValue": onUpdate
						}), {
							default: withCtx(({ state }, _push, _parent, _scopeId) => {
								if (_push) {
									if (unref(props).indicator !== "hidden") _push(ssrRenderComponent(unref(CheckboxIndicator_default), {
										"data-slot": "indicator",
										class: ui.value.indicator({ class: unref(props).ui?.indicator })
									}, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) {
												if (state === "indeterminate") _push(ssrRenderComponent(_sfc_main$5, {
													name: unref(props).indeterminateIcon || unref(appConfig).ui.icons.minus,
													"data-slot": "icon",
													class: ui.value.icon({ class: unref(props).ui?.icon })
												}, null, _parent, _scopeId));
												else _push(ssrRenderComponent(_sfc_main$5, {
													name: unref(props).icon || unref(appConfig).ui.icons.check,
													"data-slot": "icon",
													class: ui.value.icon({ class: unref(props).ui?.icon })
												}, null, _parent, _scopeId));
											} else return [state === "indeterminate" ? (openBlock(), createBlock(_sfc_main$5, {
												key: 0,
												name: unref(props).indeterminateIcon || unref(appConfig).ui.icons.minus,
												"data-slot": "icon",
												class: ui.value.icon({ class: unref(props).ui?.icon })
											}, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$5, {
												key: 1,
												name: unref(props).icon || unref(appConfig).ui.icons.check,
												"data-slot": "icon",
												class: ui.value.icon({ class: unref(props).ui?.icon })
											}, null, 8, ["name", "class"]))];
										}),
										_: 2
									}, _parent, _scopeId));
									else _push(`<!---->`);
								} else return [unref(props).indicator !== "hidden" ? (openBlock(), createBlock(unref(CheckboxIndicator_default), {
									key: 0,
									"data-slot": "indicator",
									class: ui.value.indicator({ class: unref(props).ui?.indicator })
								}, {
									default: withCtx(() => [state === "indeterminate" ? (openBlock(), createBlock(_sfc_main$5, {
										key: 0,
										name: unref(props).indeterminateIcon || unref(appConfig).ui.icons.minus,
										"data-slot": "icon",
										class: ui.value.icon({ class: unref(props).ui?.icon })
									}, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$5, {
										key: 1,
										name: unref(props).icon || unref(appConfig).ui.icons.check,
										"data-slot": "icon",
										class: ui.value.icon({ class: unref(props).ui?.icon })
									}, null, 8, ["name", "class"]))]),
									_: 2
								}, 1032, ["class"])) : createCommentVNode("", true)];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div>`);
						if (labelIcon.value || unref(props).label || !!slots.label || unref(props).description || !!slots.description) {
							_push(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: unref(props).ui?.wrapper }))}"${_scopeId}>`);
							if (labelIcon.value) _push(ssrRenderComponent(_sfc_main$5, {
								name: labelIcon.value,
								"data-slot": "icon",
								class: ui.value.icon({ class: unref(props).ui?.icon })
							}, null, _parent, _scopeId));
							else _push(`<!---->`);
							if (unref(props).label || !!slots.label) ssrRenderVNode(_push, createVNode(resolveDynamicComponent(!unref(props).variant || unref(props).variant === "list" ? unref(Label_default) : "p"), {
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
							}), _parent, _scopeId);
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
					}, [createVNode(unref(CheckboxRoot_default), mergeProps({ id: unref(id) }, {
						...unref(rootProps),
						...forwardedAttrs.value,
						...unref(ariaAttrs)
					}, {
						name: unref(name),
						disabled: disabled.value,
						"data-slot": "base",
						class: ui.value.base({ class: unref(props).ui?.base }),
						"onUpdate:modelValue": onUpdate
					}), {
						default: withCtx(({ state }) => [unref(props).indicator !== "hidden" ? (openBlock(), createBlock(unref(CheckboxIndicator_default), {
							key: 0,
							"data-slot": "indicator",
							class: ui.value.indicator({ class: unref(props).ui?.indicator })
						}, {
							default: withCtx(() => [state === "indeterminate" ? (openBlock(), createBlock(_sfc_main$5, {
								key: 0,
								name: unref(props).indeterminateIcon || unref(appConfig).ui.icons.minus,
								"data-slot": "icon",
								class: ui.value.icon({ class: unref(props).ui?.icon })
							}, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$5, {
								key: 1,
								name: unref(props).icon || unref(appConfig).ui.icons.check,
								"data-slot": "icon",
								class: ui.value.icon({ class: unref(props).ui?.icon })
							}, null, 8, ["name", "class"]))]),
							_: 2
						}, 1032, ["class"])) : createCommentVNode("", true)]),
						_: 1
					}, 16, [
						"id",
						"name",
						"disabled",
						"class"
					])], 2), labelIcon.value || unref(props).label || !!slots.label || unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
						key: 0,
						"data-slot": "wrapper",
						class: ui.value.wrapper({ class: unref(props).ui?.wrapper })
					}, [
						labelIcon.value ? (openBlock(), createBlock(_sfc_main$5, {
							key: 0,
							name: labelIcon.value,
							"data-slot": "icon",
							class: ui.value.icon({ class: unref(props).ui?.icon })
						}, null, 8, ["name", "class"])) : createCommentVNode("", true),
						unref(props).label || !!slots.label ? (openBlock(), createBlock(resolveDynamicComponent(!unref(props).variant || unref(props).variant === "list" ? unref(Label_default) : "p"), {
							key: 1,
							for: unref(id),
							"data-slot": "label",
							class: ui.value.label({ class: unref(props).ui?.label })
						}, {
							default: withCtx(() => [renderSlot(_ctx.$slots, "label", { label: unref(props).label }, () => [createTextVNode(toDisplayString(unref(props).label), 1)])]),
							_: 3
						}, 8, ["for", "class"])) : createCommentVNode("", true),
						unref(props).description || !!slots.description ? (openBlock(), createBlock("p", {
							key: 2,
							"data-slot": "description",
							class: ui.value.description({ class: unref(props).ui?.description })
						}, [renderSlot(_ctx.$slots, "description", { description: unref(props).description }, () => [createTextVNode(toDisplayString(unref(props).description), 1)])], 2)) : createCommentVNode("", true)
					], 2)) : createCommentVNode("", true)];
				}),
				_: 3
			}, _parent));
		};
	}
});
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Checkbox.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };;globalThis.__timing__.logEnd('Load chunks/build/Checkbox-CheFquWT');
//# sourceMappingURL=Checkbox-CheFquWT.mjs.map
