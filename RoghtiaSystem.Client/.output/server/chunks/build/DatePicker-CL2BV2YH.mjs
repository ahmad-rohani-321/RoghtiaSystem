globalThis.__timing__.logStart('Load chunks/build/DatePicker-CL2BV2YH');import { _ as _sfc_main$2, b as _sfc_main$5, f as useComponentProps, g as useAppConfig, B as useForwardProps, Q as usePortal, t as tv, R as FieldGroupReset, O as useLocale, s as ssrRenderList$2, M as renderList$2 } from '../virtual/entry.mjs';
import { H as HoverCard, P as Popover, Y as YearRangePicker, a as YearPicker, M as MonthRangePicker, b as MonthPicker, R as RangeCalendar, C as Calendar, g as getWeekNumber } from './namespaced-Bh7Kc29b.mjs';
import { p as pointerDownOutside } from './overlay-BJM8aJ6z.mjs';
import { a as formatDate, D as DATE_LOCALE, l as localNumber, b as formatMonth, W as WEEKDAY_SHORT_LABELS } from './useDateFormatting-PLtQ78bC.mjs';
import { defineComponent, useModel, ref, mergeProps, isRef, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSlots, toRef, computed, renderSlot, toHandlers, openBlock, createBlock, createCommentVNode, watch, shallowRef, Fragment, useSSRContext } from 'vue';
import { T as defu } from '../_/nitro.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderSlot, ssrRenderClass } from 'vue/server-renderer';
import { reactivePick, reactiveOmit } from '@vueuse/core';
import { today, getLocalTimeZone } from '@internationalized/date';

// virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fpopover.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fpopover_default = { "slots": {
	"content": "bg-default shadow-lg rounded-md ring ring-default data-[state=open]:animate-[scale-in_100ms_var(--ease-out)] data-[state=closed]:animate-[scale-out_100ms_var(--ease-out)] origin-(--reka-popover-content-transform-origin) focus:outline-none pointer-events-auto",
	"arrow": "fill-bg stroke-default"
} };
// node_modules/@nuxt/ui/dist/runtime/components/Popover.vue
var _sfc_main$1 = {
	__name: "UPopover",
	__ssrInlineRender: true,
	props: {
		mode: {
			type: null,
			required: false,
			default: "click"
		},
		content: {
			type: Object,
			required: false
		},
		arrow: {
			type: [Boolean, Object],
			required: false
		},
		portal: {
			type: [Boolean, String],
			required: false,
			skipCheck: true,
			default: true
		},
		reference: {
			type: null,
			required: false
		},
		dismissible: {
			type: Boolean,
			required: false,
			default: true
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: null,
			required: false
		},
		defaultOpen: {
			type: Boolean,
			required: false
		},
		open: {
			type: Boolean,
			required: false
		},
		modal: {
			type: Boolean,
			required: false
		},
		openDelay: {
			type: Number,
			required: false,
			default: 0
		},
		closeDelay: {
			type: Number,
			required: false,
			default: 0
		},
		enableTouch: {
			type: Boolean,
			required: false
		}
	},
	emits: ["close:prevent", "update:open"],
	setup(__props, { emit: __emit }) {
		const _props = __props;
		const emits = __emit;
		const slots = useSlots();
		const props = useComponentProps("popover", _props);
		const appConfig = useAppConfig();
		const pick = props.mode === "hover" ? reactivePick(props, "defaultOpen", "open", "openDelay", "closeDelay", "enableTouch") : reactivePick(props, "defaultOpen", "open", "modal");
		const rootProps = useForwardProps(pick, emits);
		const portalProps = usePortal(toRef(() => props.portal));
		const contentProps = toRef(() => defu(props.content, {
			side: "bottom",
			sideOffset: 8,
			collisionPadding: 8
		}));
		const contentEvents = computed(() => {
			if (!props.dismissible) return ["interactOutside", "escapeKeyDown"].reduce((acc, curr) => {
				acc[curr] = (e) => {
					e.preventDefault();
					emits("close:prevent");
				};
				return acc;
			}, {});
			return { pointerDownOutside };
		});
		const arrowProps = toRef(() => defu(props.arrow, { rounded: true }));
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fpopover_default,
			...appConfig.ui?.popover || {}
		})({ side: contentProps.value.side }));
		const Component = computed(() => props.mode === "hover" ? HoverCard : Popover);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Component).Root, mergeProps(unref(rootProps), _attrs), {
				default: withCtx(({ open, close }, _push, _parent, _scopeId) => {
					if (_push) {
						if (!!slots.default) _push(ssrRenderComponent(unref(Component).Trigger, {
							"as-child": "",
							class: unref(props).class
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push, _parent, _scopeId);
								else return [renderSlot(_ctx.$slots, "default", { open })];
							}),
							_: 2
						}, _parent, _scopeId));
						else _push(`<!---->`);
						if ("Anchor" in Component.value && !!slots.anchor) _push(ssrRenderComponent(unref(Component).Anchor, { "as-child": "" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) ssrRenderSlot(_ctx.$slots, "anchor", close ? { close } : {}, null, _push, _parent, _scopeId);
								else return [renderSlot(_ctx.$slots, "anchor", close ? { close } : {})];
							}),
							_: 2
						}, _parent, _scopeId));
						else _push(`<!---->`);
						_push(ssrRenderComponent(unref(Component).Portal, unref(portalProps), {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(unref(FieldGroupReset), null, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(ssrRenderComponent(unref(Component).Content, mergeProps(contentProps.value, {
											reference: unref(props).reference ?? unref(props).content?.reference,
											"data-slot": "content",
											class: ui.value.content({ class: [!slots.default && unref(props).class, unref(props).ui?.content] })
										}, toHandlers(contentEvents.value)), {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) {
													ssrRenderSlot(_ctx.$slots, "content", close ? { close } : {}, null, _push, _parent, _scopeId);
													if (!!unref(props).arrow) _push(ssrRenderComponent(unref(Component).Arrow, mergeProps(arrowProps.value, {
														"data-slot": "arrow",
														class: ui.value.arrow({ class: unref(props).ui?.arrow })
													}), null, _parent, _scopeId));
													else _push(`<!---->`);
												} else return [renderSlot(_ctx.$slots, "content", close ? { close } : {}), !!unref(props).arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
													"data-slot": "arrow",
													class: ui.value.arrow({ class: unref(props).ui?.arrow })
												}), null, 16, ["class"])) : createCommentVNode("", true)];
											}),
											_: 2
										}, _parent, _scopeId));
										else return [createVNode(unref(Component).Content, mergeProps(contentProps.value, {
											reference: unref(props).reference ?? unref(props).content?.reference,
											"data-slot": "content",
											class: ui.value.content({ class: [!slots.default && unref(props).class, unref(props).ui?.content] })
										}, toHandlers(contentEvents.value)), {
											default: withCtx(() => [renderSlot(_ctx.$slots, "content", close ? { close } : {}), !!unref(props).arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
												"data-slot": "arrow",
												class: ui.value.arrow({ class: unref(props).ui?.arrow })
											}), null, 16, ["class"])) : createCommentVNode("", true)]),
											_: 2
										}, 1040, ["reference", "class"])];
									}),
									_: 2
								}, _parent, _scopeId));
								else return [createVNode(unref(FieldGroupReset), null, {
									default: withCtx(() => [createVNode(unref(Component).Content, mergeProps(contentProps.value, {
										reference: unref(props).reference ?? unref(props).content?.reference,
										"data-slot": "content",
										class: ui.value.content({ class: [!slots.default && unref(props).class, unref(props).ui?.content] })
									}, toHandlers(contentEvents.value)), {
										default: withCtx(() => [renderSlot(_ctx.$slots, "content", close ? { close } : {}), !!unref(props).arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
											"data-slot": "arrow",
											class: ui.value.arrow({ class: unref(props).ui?.arrow })
										}), null, 16, ["class"])) : createCommentVNode("", true)]),
										_: 2
									}, 1040, ["reference", "class"])]),
									_: 2
								}, 1024)];
							}),
							_: 2
						}, _parent, _scopeId));
					} else return [
						!!slots.default ? (openBlock(), createBlock(unref(Component).Trigger, {
							key: 0,
							"as-child": "",
							class: unref(props).class
						}, {
							default: withCtx(() => [renderSlot(_ctx.$slots, "default", { open })]),
							_: 2
						}, 1032, ["class"])) : createCommentVNode("", true),
						"Anchor" in Component.value && !!slots.anchor ? (openBlock(), createBlock(unref(Component).Anchor, {
							key: 1,
							"as-child": ""
						}, {
							default: withCtx(() => [renderSlot(_ctx.$slots, "anchor", close ? { close } : {})]),
							_: 2
						}, 1024)) : createCommentVNode("", true),
						createVNode(unref(Component).Portal, unref(portalProps), {
							default: withCtx(() => [createVNode(unref(FieldGroupReset), null, {
								default: withCtx(() => [createVNode(unref(Component).Content, mergeProps(contentProps.value, {
									reference: unref(props).reference ?? unref(props).content?.reference,
									"data-slot": "content",
									class: ui.value.content({ class: [!slots.default && unref(props).class, unref(props).ui?.content] })
								}, toHandlers(contentEvents.value)), {
									default: withCtx(() => [renderSlot(_ctx.$slots, "content", close ? { close } : {}), !!unref(props).arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
										"data-slot": "arrow",
										class: ui.value.arrow({ class: unref(props).ui?.arrow })
									}), null, 16, ["class"])) : createCommentVNode("", true)]),
									_: 2
								}, 1040, ["reference", "class"])]),
								_: 2
							}, 1024)]),
							_: 2
						}, 1040)
					];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$2 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Popover.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
// virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fcalendar.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fcalendar_default = {
	"slots": {
		"root": "",
		"header": "flex items-center justify-between",
		"body": "flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0",
		"heading": "flex-1 min-w-0 text-center",
		"headingLabel": "font-medium block truncate p-1.5",
		"grid": "w-full border-collapse select-none space-y-1 focus:outline-none",
		"gridRow": "grid",
		"gridWeekDaysRow": "mb-1 grid w-full grid-cols-7",
		"gridBody": "grid",
		"headCell": "rounded-md",
		"headCellWeek": "rounded-md text-muted",
		"cell": "relative text-center",
		"cellTrigger": ["m-0.5 relative flex items-center justify-center whitespace-nowrap focus-visible:outline-3 data-disabled:text-muted data-unavailable:line-through data-unavailable:text-muted data-unavailable:pointer-events-none data-today:font-semibold", "transition"],
		"cellWeek": "relative text-center text-muted"
	},
	"variants": {
		"color": {
			"primary": {
				"headCell": "text-primary",
				"cellTrigger": "outline-primary/25"
			},
			"secondary": {
				"headCell": "text-secondary",
				"cellTrigger": "outline-secondary/25"
			},
			"success": {
				"headCell": "text-success",
				"cellTrigger": "outline-success/25"
			},
			"info": {
				"headCell": "text-info",
				"cellTrigger": "outline-info/25"
			},
			"warning": {
				"headCell": "text-warning",
				"cellTrigger": "outline-warning/25"
			},
			"error": {
				"headCell": "text-error",
				"cellTrigger": "outline-error/25"
			},
			"neutral": {
				"headCell": "text-highlighted",
				"cellTrigger": "outline-inverted/25"
			}
		},
		"variant": {
			"solid": "",
			"outline": "",
			"soft": "",
			"subtle": ""
		},
		"size": {
			"xs": {
				"headingLabel": "text-xs",
				"cell": "text-xs",
				"cellWeek": "text-xs",
				"headCell": "text-[10px]",
				"headCellWeek": "text-[10px]",
				"body": "space-y-2 pt-2"
			},
			"sm": {
				"headingLabel": "text-xs",
				"headCell": "text-xs",
				"headCellWeek": "text-xs",
				"cellWeek": "text-xs",
				"cell": "text-xs"
			},
			"md": {
				"headingLabel": "text-sm",
				"headCell": "text-xs",
				"headCellWeek": "text-xs",
				"cellWeek": "text-xs",
				"cell": "text-sm"
			},
			"lg": {
				"headingLabel": "text-base",
				"headCell": "text-base",
				"headCellWeek": "text-base",
				"cellWeek": "text-base",
				"cell": "text-base"
			},
			"xl": {
				"headingLabel": "text-lg",
				"headCell": "text-lg",
				"headCellWeek": "text-lg",
				"cellWeek": "text-lg",
				"cell": "text-lg"
			}
		},
		"view": {
			"day": {
				"gridRow": "grid-cols-7 place-items-center",
				"cellTrigger": "rounded-full data-outside-view:text-muted"
			},
			"month": {
				"gridRow": "grid-cols-4",
				"cellTrigger": "rounded-md"
			},
			"year": {
				"gridRow": "grid-cols-4",
				"cellTrigger": "rounded-md"
			}
		},
		"weekNumbers": { "true": "" }
	},
	"compoundVariants": [
		{
			"color": "primary",
			"variant": "solid",
			"class": { "cellTrigger": "data-selected:bg-primary data-selected:text-inverted data-today:not-data-selected:text-primary data-highlighted:bg-primary/20 hover:not-data-selected:bg-primary/20" }
		},
		{
			"color": "secondary",
			"variant": "solid",
			"class": { "cellTrigger": "data-selected:bg-secondary data-selected:text-inverted data-today:not-data-selected:text-secondary data-highlighted:bg-secondary/20 hover:not-data-selected:bg-secondary/20" }
		},
		{
			"color": "success",
			"variant": "solid",
			"class": { "cellTrigger": "data-selected:bg-success data-selected:text-inverted data-today:not-data-selected:text-success data-highlighted:bg-success/20 hover:not-data-selected:bg-success/20" }
		},
		{
			"color": "info",
			"variant": "solid",
			"class": { "cellTrigger": "data-selected:bg-info data-selected:text-inverted data-today:not-data-selected:text-info data-highlighted:bg-info/20 hover:not-data-selected:bg-info/20" }
		},
		{
			"color": "warning",
			"variant": "solid",
			"class": { "cellTrigger": "data-selected:bg-warning data-selected:text-inverted data-today:not-data-selected:text-warning data-highlighted:bg-warning/20 hover:not-data-selected:bg-warning/20" }
		},
		{
			"color": "error",
			"variant": "solid",
			"class": { "cellTrigger": "data-selected:bg-error data-selected:text-inverted data-today:not-data-selected:text-error data-highlighted:bg-error/20 hover:not-data-selected:bg-error/20" }
		},
		{
			"color": "primary",
			"variant": "outline",
			"class": { "cellTrigger": "data-selected:ring data-selected:ring-inset data-selected:ring-primary/50 data-selected:text-primary data-selected:focus-visible:ring-primary data-today:not-data-selected:text-primary data-highlighted:bg-primary/10 hover:not-data-selected:bg-primary/10" }
		},
		{
			"color": "secondary",
			"variant": "outline",
			"class": { "cellTrigger": "data-selected:ring data-selected:ring-inset data-selected:ring-secondary/50 data-selected:text-secondary data-selected:focus-visible:ring-secondary data-today:not-data-selected:text-secondary data-highlighted:bg-secondary/10 hover:not-data-selected:bg-secondary/10" }
		},
		{
			"color": "success",
			"variant": "outline",
			"class": { "cellTrigger": "data-selected:ring data-selected:ring-inset data-selected:ring-success/50 data-selected:text-success data-selected:focus-visible:ring-success data-today:not-data-selected:text-success data-highlighted:bg-success/10 hover:not-data-selected:bg-success/10" }
		},
		{
			"color": "info",
			"variant": "outline",
			"class": { "cellTrigger": "data-selected:ring data-selected:ring-inset data-selected:ring-info/50 data-selected:text-info data-selected:focus-visible:ring-info data-today:not-data-selected:text-info data-highlighted:bg-info/10 hover:not-data-selected:bg-info/10" }
		},
		{
			"color": "warning",
			"variant": "outline",
			"class": { "cellTrigger": "data-selected:ring data-selected:ring-inset data-selected:ring-warning/50 data-selected:text-warning data-selected:focus-visible:ring-warning data-today:not-data-selected:text-warning data-highlighted:bg-warning/10 hover:not-data-selected:bg-warning/10" }
		},
		{
			"color": "error",
			"variant": "outline",
			"class": { "cellTrigger": "data-selected:ring data-selected:ring-inset data-selected:ring-error/50 data-selected:text-error data-selected:focus-visible:ring-error data-today:not-data-selected:text-error data-highlighted:bg-error/10 hover:not-data-selected:bg-error/10" }
		},
		{
			"color": "primary",
			"variant": "soft",
			"class": { "cellTrigger": "data-selected:bg-primary/10 data-selected:text-primary data-today:not-data-selected:text-primary data-highlighted:bg-primary/20 hover:not-data-selected:bg-primary/20" }
		},
		{
			"color": "secondary",
			"variant": "soft",
			"class": { "cellTrigger": "data-selected:bg-secondary/10 data-selected:text-secondary data-today:not-data-selected:text-secondary data-highlighted:bg-secondary/20 hover:not-data-selected:bg-secondary/20" }
		},
		{
			"color": "success",
			"variant": "soft",
			"class": { "cellTrigger": "data-selected:bg-success/10 data-selected:text-success data-today:not-data-selected:text-success data-highlighted:bg-success/20 hover:not-data-selected:bg-success/20" }
		},
		{
			"color": "info",
			"variant": "soft",
			"class": { "cellTrigger": "data-selected:bg-info/10 data-selected:text-info data-today:not-data-selected:text-info data-highlighted:bg-info/20 hover:not-data-selected:bg-info/20" }
		},
		{
			"color": "warning",
			"variant": "soft",
			"class": { "cellTrigger": "data-selected:bg-warning/10 data-selected:text-warning data-today:not-data-selected:text-warning data-highlighted:bg-warning/20 hover:not-data-selected:bg-warning/20" }
		},
		{
			"color": "error",
			"variant": "soft",
			"class": { "cellTrigger": "data-selected:bg-error/10 data-selected:text-error data-today:not-data-selected:text-error data-highlighted:bg-error/20 hover:not-data-selected:bg-error/20" }
		},
		{
			"color": "primary",
			"variant": "subtle",
			"class": { "cellTrigger": "data-selected:bg-primary/10 data-selected:text-primary data-selected:ring data-selected:ring-inset data-selected:ring-primary/25 data-selected:focus-visible:ring-primary data-today:not-data-selected:text-primary data-highlighted:bg-primary/20 hover:not-data-selected:bg-primary/20" }
		},
		{
			"color": "secondary",
			"variant": "subtle",
			"class": { "cellTrigger": "data-selected:bg-secondary/10 data-selected:text-secondary data-selected:ring data-selected:ring-inset data-selected:ring-secondary/25 data-selected:focus-visible:ring-secondary data-today:not-data-selected:text-secondary data-highlighted:bg-secondary/20 hover:not-data-selected:bg-secondary/20" }
		},
		{
			"color": "success",
			"variant": "subtle",
			"class": { "cellTrigger": "data-selected:bg-success/10 data-selected:text-success data-selected:ring data-selected:ring-inset data-selected:ring-success/25 data-selected:focus-visible:ring-success data-today:not-data-selected:text-success data-highlighted:bg-success/20 hover:not-data-selected:bg-success/20" }
		},
		{
			"color": "info",
			"variant": "subtle",
			"class": { "cellTrigger": "data-selected:bg-info/10 data-selected:text-info data-selected:ring data-selected:ring-inset data-selected:ring-info/25 data-selected:focus-visible:ring-info data-today:not-data-selected:text-info data-highlighted:bg-info/20 hover:not-data-selected:bg-info/20" }
		},
		{
			"color": "warning",
			"variant": "subtle",
			"class": { "cellTrigger": "data-selected:bg-warning/10 data-selected:text-warning data-selected:ring data-selected:ring-inset data-selected:ring-warning/25 data-selected:focus-visible:ring-warning data-today:not-data-selected:text-warning data-highlighted:bg-warning/20 hover:not-data-selected:bg-warning/20" }
		},
		{
			"color": "error",
			"variant": "subtle",
			"class": { "cellTrigger": "data-selected:bg-error/10 data-selected:text-error data-selected:ring data-selected:ring-inset data-selected:ring-error/25 data-selected:focus-visible:ring-error data-today:not-data-selected:text-error data-highlighted:bg-error/20 hover:not-data-selected:bg-error/20" }
		},
		{
			"color": "neutral",
			"variant": "solid",
			"class": { "cellTrigger": "data-selected:bg-inverted data-selected:text-inverted data-today:not-data-selected:text-highlighted data-highlighted:bg-inverted/20 hover:not-data-selected:bg-inverted/10" }
		},
		{
			"color": "neutral",
			"variant": "outline",
			"class": { "cellTrigger": "data-selected:ring data-selected:ring-inset data-selected:ring-accented data-selected:text-default data-selected:bg-default data-selected:focus-visible:ring-inverted data-today:not-data-selected:text-highlighted data-highlighted:bg-inverted/10 hover:not-data-selected:bg-inverted/10" }
		},
		{
			"color": "neutral",
			"variant": "soft",
			"class": { "cellTrigger": "data-selected:bg-elevated data-selected:text-default data-today:not-data-selected:text-highlighted data-highlighted:bg-inverted/20 hover:not-data-selected:bg-inverted/10" }
		},
		{
			"color": "neutral",
			"variant": "subtle",
			"class": { "cellTrigger": "data-selected:bg-elevated data-selected:text-default data-selected:ring data-selected:ring-inset data-selected:ring-accented data-selected:focus-visible:ring-inverted data-today:not-data-selected:text-highlighted data-highlighted:bg-inverted/20 hover:not-data-selected:bg-inverted/10" }
		},
		{
			"size": "xs",
			"view": "day",
			"class": { "cellTrigger": "size-6" }
		},
		{
			"size": "sm",
			"view": "day",
			"class": { "cellTrigger": "size-7" }
		},
		{
			"size": "md",
			"view": "day",
			"class": { "cellTrigger": "size-8" }
		},
		{
			"size": "lg",
			"view": "day",
			"class": { "cellTrigger": "size-9" }
		},
		{
			"size": "xl",
			"view": "day",
			"class": { "cellTrigger": "size-10" }
		},
		{
			"size": "xs",
			"view": ["month", "year"],
			"class": { "cellTrigger": "h-6 px-2" }
		},
		{
			"size": "sm",
			"view": ["month", "year"],
			"class": { "cellTrigger": "h-7 px-2" }
		},
		{
			"size": "md",
			"view": ["month", "year"],
			"class": { "cellTrigger": "h-8 px-3" }
		},
		{
			"size": "lg",
			"view": ["month", "year"],
			"class": { "cellTrigger": "h-9 px-4" }
		},
		{
			"size": "xl",
			"view": ["month", "year"],
			"class": { "cellTrigger": "h-10 px-5" }
		},
		{
			"view": "day",
			"weekNumbers": true,
			"class": {
				"gridRow": "grid-cols-8",
				"gridWeekDaysRow": "grid-cols-8 [&>*:first-child]:col-start-2"
			}
		}
	],
	"defaultVariants": {
		"size": "md",
		"color": "primary",
		"variant": "solid",
		"view": "day"
	}
};
// node_modules/@nuxt/ui/dist/runtime/components/Calendar.vue
var _sfc_main = {
	__name: "UCalendar",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false
		},
		type: {
			type: String,
			required: false,
			default: "date"
		},
		nextYearIcon: {
			type: null,
			required: false
		},
		nextYear: {
			type: Object,
			required: false
		},
		nextMonthIcon: {
			type: null,
			required: false
		},
		nextMonth: {
			type: Object,
			required: false
		},
		prevYearIcon: {
			type: null,
			required: false
		},
		prevYear: {
			type: Object,
			required: false
		},
		prevMonthIcon: {
			type: null,
			required: false
		},
		prevMonth: {
			type: Object,
			required: false
		},
		viewControl: {
			type: [Boolean, Object],
			required: false,
			default: true
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
		range: {
			type: Boolean,
			required: false
		},
		multiple: {
			type: Boolean,
			required: false
		},
		monthControls: {
			type: Boolean,
			required: false,
			default: true
		},
		yearControls: {
			type: Boolean,
			required: false,
			default: true
		},
		defaultValue: {
			type: null,
			required: false
		},
		modelValue: {
			type: null,
			required: false
		},
		weekNumbers: {
			type: Boolean,
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
		defaultPlaceholder: {
			type: Object,
			required: false
		},
		placeholder: {
			type: Object,
			required: false
		},
		allowNonContiguousRanges: {
			type: Boolean,
			required: false
		},
		pagedNavigation: {
			type: Boolean,
			required: false
		},
		preventDeselect: {
			type: Boolean,
			required: false
		},
		maximumDays: {
			type: Number,
			required: false
		},
		weekStartsOn: {
			type: Number,
			required: false
		},
		weekdayFormat: {
			type: String,
			required: false
		},
		fixedWeeks: {
			type: Boolean,
			required: false,
			default: true
		},
		maxValue: {
			type: Object,
			required: false
		},
		minValue: {
			type: Object,
			required: false
		},
		locale: {
			type: String,
			required: false
		},
		numberOfMonths: {
			type: Number,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		readonly: {
			type: Boolean,
			required: false
		},
		initialFocus: {
			type: Boolean,
			required: false
		},
		isDateDisabled: {
			type: Function,
			required: false
		},
		isDateUnavailable: {
			type: Function,
			required: false
		},
		isDateHighlightable: {
			type: Function,
			required: false
		},
		nextPage: {
			type: Function,
			required: false
		},
		prevPage: {
			type: Function,
			required: false
		},
		disableDaysOutsideCurrentView: {
			type: Boolean,
			required: false
		},
		fixedDate: {
			type: String,
			required: false
		},
		isMonthDisabled: {
			type: Function,
			required: false
		},
		isMonthUnavailable: {
			type: Function,
			required: false
		},
		isYearDisabled: {
			type: Function,
			required: false
		},
		isYearUnavailable: {
			type: Function,
			required: false
		}
	},
	emits: [
		"update:modelValue",
		"update:placeholder",
		"update:startValue",
		"update:validModelValue"
	],
	setup(__props, { emit: __emit }) {
		const _props = __props;
		const emits = __emit;
		const props = useComponentProps("calendar", _props);
		const { dir, t, locale } = useLocale();
		const appConfig = useAppConfig();
		const VIEWS = [
			"day",
			"month",
			"year"
		];
		const minView = computed(() => props.type === "year" ? "year" : props.type === "month" ? "month" : "day");
		const maxView = "year";
		const view = ref(minView.value);
		watch(() => props.type, () => {
			view.value = minView.value;
		});
		const switchable = computed(() => minView.value !== maxView);
		const isMinView = computed(() => view.value === minView.value);
		function clampView(value) {
			const min = VIEWS.indexOf(minView.value);
			const max = VIEWS.indexOf(maxView);
			return VIEWS[Math.min(Math.max(VIEWS.indexOf(value), min), max)];
		}
		function setView(value) {
			view.value = clampView(value);
		}
		function cycleView() {
			const max = VIEWS.indexOf(maxView);
			const next = VIEWS.indexOf(view.value) >= max ? minView.value : VIEWS[VIEWS.indexOf(view.value) + 1];
			view.value = next;
		}
		function resolveDateValue(value) {
			if (Array.isArray(value)) return value[0];
			if (!value) return;
			if ("start" in value || "end" in value) {
				const range = value;
				return range.start ?? range.end ?? void 0;
			}
			return value;
		}
		const placeholder = shallowRef(props.placeholder ?? resolveDateValue(props.modelValue) ?? resolveDateValue(props.defaultValue) ?? today(getLocalTimeZone()));
		watch(() => props.placeholder, (value) => {
			if (value) placeholder.value = value;
		});
		function setPlaceholder(date) {
			placeholder.value = date;
			emits("update:placeholder", date);
		}
		function onSelect(value) {
			if (isMinView.value) {
				emits("update:modelValue", value);
				return;
			}
			const resolved = resolveDateValue(value);
			if (resolved) setPlaceholder(resolved);
			setView(VIEWS[VIEWS.indexOf(view.value) - 1]);
		}
		function paginateYear(date, sign) {
			return sign === -1 ? date.subtract({ years: 1 }) : date.add({ years: 1 });
		}
		const Picker = computed(() => {
			const range = props.range && isMinView.value;
			if (view.value === "year") return range ? YearRangePicker : YearPicker;
			if (view.value === "month") return range ? MonthRangePicker : MonthPicker;
			return props.range ? RangeCalendar : Calendar;
		});
		const omittedProps = [
			"type",
			"placeholder",
			"range",
			"modelValue",
			"defaultValue",
			"color",
			"variant",
			"size",
			"monthControls",
			"yearControls",
			"viewControl",
			"class",
			"ui"
		];
		const dayOnlyProps = [
			"pagedNavigation",
			"weekStartsOn",
			"weekdayFormat",
			"fixedWeeks",
			"numberOfMonths",
			"isDateDisabled",
			"isDateUnavailable",
			"isDateHighlightable",
			"disableDaysOutsideCurrentView",
			"maximumDays"
		];
		const monthOnlyProps = ["isMonthDisabled", "isMonthUnavailable"];
		const yearOnlyProps = ["isYearDisabled", "isYearUnavailable"];
		const rangeOnlyProps = ["allowNonContiguousRanges", "fixedDate"];
		const rootProps = useForwardProps(reactiveOmit(props, (_, key) => omittedProps.includes(key) || view.value !== "day" && dayOnlyProps.includes(key) || view.value !== "month" && monthOnlyProps.includes(key) || view.value !== "year" && yearOnlyProps.includes(key) || !isMinView.value && rangeOnlyProps.includes(key)));
		function cellProps(cellDate, monthValue) {
			if (view.value === "month") return { month: cellDate };
			if (view.value === "year") return { year: cellDate };
			return {
				day: cellDate,
				month: monthValue
			};
		}
		const nextYearIcon = computed(() => props.nextYearIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronDoubleLeft : appConfig.ui.icons.chevronDoubleRight));
		const nextMonthIcon = computed(() => props.nextMonthIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronLeft : appConfig.ui.icons.chevronRight));
		const prevYearIcon = computed(() => props.prevYearIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronDoubleRight : appConfig.ui.icons.chevronDoubleLeft));
		const prevMonthIcon = computed(() => props.prevMonthIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronRight : appConfig.ui.icons.chevronLeft));
		const prevLabel = computed(() => view.value === "day" ? t("calendar.prevMonth") : t("calendar.prevYear"));
		const nextLabel = computed(() => view.value === "day" ? t("calendar.nextMonth") : t("calendar.nextYear"));
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fcalendar_default,
			...appConfig.ui?.calendar || {}
		})({
			color: props.color,
			size: props.size,
			variant: props.variant,
			weekNumbers: props.weekNumbers,
			view: view.value
		}));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Picker).Root, mergeProps(unref(rootProps), {
				"model-value": isMinView.value ? unref(props).modelValue : void 0,
				"default-value": isMinView.value ? unref(props).defaultValue : void 0,
				placeholder: placeholder.value,
				"data-slot": "root",
				class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] }),
				"onUpdate:placeholder": setPlaceholder,
				"onUpdate:modelValue": onSelect,
				"onUpdate:startValue": (value) => emits("update:startValue", value),
				"onUpdate:validModelValue": (value) => emits("update:validModelValue", value)
			}, _attrs), {
				default: withCtx(({ weekDays, grid, date }, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Picker).Header, {
							"data-slot": "header",
							class: ui.value.header({ class: unref(props).ui?.header })
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									if (view.value === "day" && unref(props).yearControls) _push(ssrRenderComponent(unref(Picker).Prev, {
										"prev-page": (date) => paginateYear(date, -1),
										"aria-label": unref(t)("calendar.prevYear"),
										"as-child": ""
									}, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(ssrRenderComponent(_sfc_main$2, mergeProps({
												icon: prevYearIcon.value,
												size: unref(props).size,
												color: "neutral",
												variant: "ghost"
											}, unref(props).prevYear), null, _parent, _scopeId));
											else return [createVNode(_sfc_main$2, mergeProps({
												icon: prevYearIcon.value,
												size: unref(props).size,
												color: "neutral",
												variant: "ghost"
											}, unref(props).prevYear), null, 16, ["icon", "size"])];
										}),
										_: 2
									}, _parent, _scopeId));
									else _push(`<!---->`);
									if (view.value !== "day" || unref(props).monthControls) _push(ssrRenderComponent(unref(Picker).Prev, {
										"aria-label": prevLabel.value,
										"as-child": ""
									}, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(ssrRenderComponent(_sfc_main$2, mergeProps({
												icon: prevMonthIcon.value,
												size: unref(props).size,
												color: "neutral",
												variant: "ghost"
											}, unref(props).prevMonth), null, _parent, _scopeId));
											else return [createVNode(_sfc_main$2, mergeProps({
												icon: prevMonthIcon.value,
												size: unref(props).size,
												color: "neutral",
												variant: "ghost"
											}, unref(props).prevMonth), null, 16, ["icon", "size"])];
										}),
										_: 2
									}, _parent, _scopeId));
									else _push(`<!---->`);
									_push(ssrRenderComponent(unref(Picker).Heading, {
										"data-slot": "heading",
										class: ui.value.heading({ class: unref(props).ui?.heading })
									}, {
										default: withCtx(({ headingValue }, _push, _parent, _scopeId) => {
											if (_push) ssrRenderSlot(_ctx.$slots, "heading", {
												value: headingValue,
												view: view.value,
												date,
												setView,
												setPlaceholder
											}, () => {
												if (switchable.value && unref(props).viewControl) _push(ssrRenderComponent(_sfc_main$2, mergeProps({
													label: headingValue,
													size: unref(props).size,
													color: "neutral",
													variant: "ghost",
													block: ""
												}, typeof unref(props).viewControl === "object" ? unref(props).viewControl : {}, { onClick: cycleView }), null, _parent, _scopeId));
												else _push(`<span data-slot="headingLabel" class="${ssrRenderClass(ui.value.headingLabel({ class: unref(props).ui?.headingLabel }))}"${_scopeId}>${ssrInterpolate(headingValue)}</span>`);
											}, _push, _parent, _scopeId);
											else return [renderSlot(_ctx.$slots, "heading", {
												value: headingValue,
												view: view.value,
												date,
												setView,
												setPlaceholder
											}, () => [switchable.value && unref(props).viewControl ? (openBlock(), createBlock(_sfc_main$2, mergeProps({
												key: 0,
												label: headingValue,
												size: unref(props).size,
												color: "neutral",
												variant: "ghost",
												block: ""
											}, typeof unref(props).viewControl === "object" ? unref(props).viewControl : {}, { onClick: cycleView }), null, 16, ["label", "size"])) : (openBlock(), createBlock("span", {
												key: 1,
												"data-slot": "headingLabel",
												class: ui.value.headingLabel({ class: unref(props).ui?.headingLabel })
											}, toDisplayString(headingValue), 3))])];
										}),
										_: 2
									}, _parent, _scopeId));
									if (view.value !== "day" || unref(props).monthControls) _push(ssrRenderComponent(unref(Picker).Next, {
										"aria-label": nextLabel.value,
										"as-child": ""
									}, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(ssrRenderComponent(_sfc_main$2, mergeProps({
												icon: nextMonthIcon.value,
												size: unref(props).size,
												color: "neutral",
												variant: "ghost"
											}, unref(props).nextMonth), null, _parent, _scopeId));
											else return [createVNode(_sfc_main$2, mergeProps({
												icon: nextMonthIcon.value,
												size: unref(props).size,
												color: "neutral",
												variant: "ghost"
											}, unref(props).nextMonth), null, 16, ["icon", "size"])];
										}),
										_: 2
									}, _parent, _scopeId));
									else _push(`<!---->`);
									if (view.value === "day" && unref(props).yearControls) _push(ssrRenderComponent(unref(Picker).Next, {
										"next-page": (date) => paginateYear(date, 1),
										"aria-label": unref(t)("calendar.nextYear"),
										"as-child": ""
									}, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(ssrRenderComponent(_sfc_main$2, mergeProps({
												icon: nextYearIcon.value,
												size: unref(props).size,
												color: "neutral",
												variant: "ghost"
											}, unref(props).nextYear), null, _parent, _scopeId));
											else return [createVNode(_sfc_main$2, mergeProps({
												icon: nextYearIcon.value,
												size: unref(props).size,
												color: "neutral",
												variant: "ghost"
											}, unref(props).nextYear), null, 16, ["icon", "size"])];
										}),
										_: 2
									}, _parent, _scopeId));
									else _push(`<!---->`);
								} else return [
									view.value === "day" && unref(props).yearControls ? (openBlock(), createBlock(unref(Picker).Prev, {
										key: 0,
										"prev-page": (date) => paginateYear(date, -1),
										"aria-label": unref(t)("calendar.prevYear"),
										"as-child": ""
									}, {
										default: withCtx(() => [createVNode(_sfc_main$2, mergeProps({
											icon: prevYearIcon.value,
											size: unref(props).size,
											color: "neutral",
											variant: "ghost"
										}, unref(props).prevYear), null, 16, ["icon", "size"])]),
										_: 1
									}, 8, ["prev-page", "aria-label"])) : createCommentVNode("", true),
									view.value !== "day" || unref(props).monthControls ? (openBlock(), createBlock(unref(Picker).Prev, {
										key: 1,
										"aria-label": prevLabel.value,
										"as-child": ""
									}, {
										default: withCtx(() => [createVNode(_sfc_main$2, mergeProps({
											icon: prevMonthIcon.value,
											size: unref(props).size,
											color: "neutral",
											variant: "ghost"
										}, unref(props).prevMonth), null, 16, ["icon", "size"])]),
										_: 1
									}, 8, ["aria-label"])) : createCommentVNode("", true),
									createVNode(unref(Picker).Heading, {
										"data-slot": "heading",
										class: ui.value.heading({ class: unref(props).ui?.heading })
									}, {
										default: withCtx(({ headingValue }) => [renderSlot(_ctx.$slots, "heading", {
											value: headingValue,
											view: view.value,
											date,
											setView,
											setPlaceholder
										}, () => [switchable.value && unref(props).viewControl ? (openBlock(), createBlock(_sfc_main$2, mergeProps({
											key: 0,
											label: headingValue,
											size: unref(props).size,
											color: "neutral",
											variant: "ghost",
											block: ""
										}, typeof unref(props).viewControl === "object" ? unref(props).viewControl : {}, { onClick: cycleView }), null, 16, ["label", "size"])) : (openBlock(), createBlock("span", {
											key: 1,
											"data-slot": "headingLabel",
											class: ui.value.headingLabel({ class: unref(props).ui?.headingLabel })
										}, toDisplayString(headingValue), 3))])]),
										_: 2
									}, 1032, ["class"]),
									view.value !== "day" || unref(props).monthControls ? (openBlock(), createBlock(unref(Picker).Next, {
										key: 2,
										"aria-label": nextLabel.value,
										"as-child": ""
									}, {
										default: withCtx(() => [createVNode(_sfc_main$2, mergeProps({
											icon: nextMonthIcon.value,
											size: unref(props).size,
											color: "neutral",
											variant: "ghost"
										}, unref(props).nextMonth), null, 16, ["icon", "size"])]),
										_: 1
									}, 8, ["aria-label"])) : createCommentVNode("", true),
									view.value === "day" && unref(props).yearControls ? (openBlock(), createBlock(unref(Picker).Next, {
										key: 3,
										"next-page": (date) => paginateYear(date, 1),
										"aria-label": unref(t)("calendar.nextYear"),
										"as-child": ""
									}, {
										default: withCtx(() => [createVNode(_sfc_main$2, mergeProps({
											icon: nextYearIcon.value,
											size: unref(props).size,
											color: "neutral",
											variant: "ghost"
										}, unref(props).nextYear), null, 16, ["icon", "size"])]),
										_: 1
									}, 8, ["next-page", "aria-label"])) : createCommentVNode("", true)
								];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: unref(props).ui?.body }))}"${_scopeId}><!--[-->`);
						ssrRenderList$2(Array.isArray(grid) ? grid : [grid], (month) => {
							_push(ssrRenderComponent(unref(Picker).Grid, {
								key: month.value.toString(),
								"data-slot": "grid",
								class: ui.value.grid({ class: unref(props).ui?.grid })
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) {
										if ("GridHead" in Picker.value) _push(ssrRenderComponent(unref(Picker).GridHead, null, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(ssrRenderComponent(unref(Picker).GridRow, {
													"data-slot": "gridWeekDaysRow",
													class: ui.value.gridWeekDaysRow({ class: unref(props).ui?.gridWeekDaysRow })
												}, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) {
															_push(`<!--[-->`);
															ssrRenderList$2(weekDays, (day) => {
																_push(ssrRenderComponent(unref(Picker).HeadCell, {
																	key: day,
																	"data-slot": "headCell",
																	class: ui.value.headCell({ class: unref(props).ui?.headCell })
																}, {
																	default: withCtx((_, _push, _parent, _scopeId) => {
																		if (_push) ssrRenderSlot(_ctx.$slots, "week-day", { day }, () => {
																			_push(`${ssrInterpolate(day)}`);
																		}, _push, _parent, _scopeId);
																		else return [renderSlot(_ctx.$slots, "week-day", { day }, () => [createTextVNode(toDisplayString(day), 1)])];
																	}),
																	_: 2
																}, _parent, _scopeId));
															});
															_push(`<!--]-->`);
														} else return [(openBlock(true), createBlock(Fragment, null, renderList$2(weekDays, (day) => {
															return openBlock(), createBlock(unref(Picker).HeadCell, {
																key: day,
																"data-slot": "headCell",
																class: ui.value.headCell({ class: unref(props).ui?.headCell })
															}, {
																default: withCtx(() => [renderSlot(_ctx.$slots, "week-day", { day }, () => [createTextVNode(toDisplayString(day), 1)])]),
																_: 2
															}, 1032, ["class"]);
														}), 128))];
													}),
													_: 2
												}, _parent, _scopeId));
												else return [createVNode(unref(Picker).GridRow, {
													"data-slot": "gridWeekDaysRow",
													class: ui.value.gridWeekDaysRow({ class: unref(props).ui?.gridWeekDaysRow })
												}, {
													default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList$2(weekDays, (day) => {
														return openBlock(), createBlock(unref(Picker).HeadCell, {
															key: day,
															"data-slot": "headCell",
															class: ui.value.headCell({ class: unref(props).ui?.headCell })
														}, {
															default: withCtx(() => [renderSlot(_ctx.$slots, "week-day", { day }, () => [createTextVNode(toDisplayString(day), 1)])]),
															_: 2
														}, 1032, ["class"]);
													}), 128))]),
													_: 2
												}, 1032, ["class"])];
											}),
											_: 2
										}, _parent, _scopeId));
										else _push(`<!---->`);
										_push(ssrRenderComponent(unref(Picker).GridBody, {
											"data-slot": "gridBody",
											class: ui.value.gridBody({ class: unref(props).ui?.gridBody })
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) {
													_push(`<!--[-->`);
													ssrRenderList$2(month.rows, (row, index) => {
														_push(ssrRenderComponent(unref(Picker).GridRow, {
															key: `row-${index}`,
															"data-slot": "gridRow",
															class: ui.value.gridRow({ class: unref(props).ui?.gridRow })
														}, {
															default: withCtx((_, _push, _parent, _scopeId) => {
																if (_push) {
																	if (view.value === "day" && unref(props).weekNumbers && row[0]) _push(`<td role="gridcell" data-slot="cellWeek" class="${ssrRenderClass(ui.value.cellWeek({ class: unref(props).ui?.cellWeek }))}"${_scopeId}>${ssrInterpolate(unref(getWeekNumber)(row[0], unref(props).locale ?? unref(locale).code))}</td>`);
																	else _push(`<!---->`);
																	_push(`<!--[-->`);
																	ssrRenderList$2(row, (cellDate) => {
																		_push(ssrRenderComponent(unref(Picker).Cell, {
																			key: cellDate.toString(),
																			date: cellDate,
																			"data-slot": "cell",
																			class: ui.value.cell({ class: unref(props).ui?.cell })
																		}, {
																			default: withCtx((_, _push, _parent, _scopeId) => {
																				if (_push) _push(ssrRenderComponent(unref(Picker).CellTrigger, mergeProps({ ref_for: true }, cellProps(cellDate, month.value), {
																					"data-slot": "cellTrigger",
																					class: ui.value.cellTrigger({ class: unref(props).ui?.cellTrigger })
																				}), {
																					default: withCtx((cell, _push, _parent, _scopeId) => {
																						if (_push) {
																							if (view.value === "day") ssrRenderSlot(_ctx.$slots, "day", { day: cellDate }, () => {
																								_push(`${ssrInterpolate(cellDate.day)}`);
																							}, _push, _parent, _scopeId);
																							else if (view.value === "month") ssrRenderSlot(_ctx.$slots, "month-cell", {
																								month: cellDate,
																								selected: cell.selected,
																								disabled: cell.disabled
																							}, () => {
																								_push(`${ssrInterpolate(cell.monthValue)}`);
																							}, _push, _parent, _scopeId);
																							else ssrRenderSlot(_ctx.$slots, "year-cell", {
																								year: cellDate,
																								selected: cell.selected,
																								disabled: cell.disabled
																							}, () => {
																								_push(`${ssrInterpolate(cell.yearValue)}`);
																							}, _push, _parent, _scopeId);
																						} else return [view.value === "day" ? renderSlot(_ctx.$slots, "day", { day: cellDate }, () => [createTextVNode(toDisplayString(cellDate.day), 1)], void 0, 0) : view.value === "month" ? renderSlot(_ctx.$slots, "month-cell", {
																							month: cellDate,
																							selected: cell.selected,
																							disabled: cell.disabled
																						}, () => [createTextVNode(toDisplayString(cell.monthValue), 1)], void 0, 1) : renderSlot(_ctx.$slots, "year-cell", {
																							year: cellDate,
																							selected: cell.selected,
																							disabled: cell.disabled
																						}, () => [createTextVNode(toDisplayString(cell.yearValue), 1)], void 0, 2)];
																					}),
																					_: 2
																				}, _parent, _scopeId));
																				else return [createVNode(unref(Picker).CellTrigger, mergeProps({ ref_for: true }, cellProps(cellDate, month.value), {
																					"data-slot": "cellTrigger",
																					class: ui.value.cellTrigger({ class: unref(props).ui?.cellTrigger })
																				}), {
																					default: withCtx((cell) => [view.value === "day" ? renderSlot(_ctx.$slots, "day", { day: cellDate }, () => [createTextVNode(toDisplayString(cellDate.day), 1)], void 0, 0) : view.value === "month" ? renderSlot(_ctx.$slots, "month-cell", {
																						month: cellDate,
																						selected: cell.selected,
																						disabled: cell.disabled
																					}, () => [createTextVNode(toDisplayString(cell.monthValue), 1)], void 0, 1) : renderSlot(_ctx.$slots, "year-cell", {
																						year: cellDate,
																						selected: cell.selected,
																						disabled: cell.disabled
																					}, () => [createTextVNode(toDisplayString(cell.yearValue), 1)], void 0, 2)]),
																					_: 2
																				}, 1040, ["class"])];
																			}),
																			_: 2
																		}, _parent, _scopeId));
																	});
																	_push(`<!--]-->`);
																} else return [view.value === "day" && unref(props).weekNumbers && row[0] ? (openBlock(), createBlock("td", {
																	key: 0,
																	role: "gridcell",
																	"data-slot": "cellWeek",
																	class: ui.value.cellWeek({ class: unref(props).ui?.cellWeek })
																}, toDisplayString(unref(getWeekNumber)(row[0], unref(props).locale ?? unref(locale).code)), 3)) : createCommentVNode("", true), (openBlock(true), createBlock(Fragment, null, renderList$2(row, (cellDate) => {
																	return openBlock(), createBlock(unref(Picker).Cell, {
																		key: cellDate.toString(),
																		date: cellDate,
																		"data-slot": "cell",
																		class: ui.value.cell({ class: unref(props).ui?.cell })
																	}, {
																		default: withCtx(() => [createVNode(unref(Picker).CellTrigger, mergeProps({ ref_for: true }, cellProps(cellDate, month.value), {
																			"data-slot": "cellTrigger",
																			class: ui.value.cellTrigger({ class: unref(props).ui?.cellTrigger })
																		}), {
																			default: withCtx((cell) => [view.value === "day" ? renderSlot(_ctx.$slots, "day", { day: cellDate }, () => [createTextVNode(toDisplayString(cellDate.day), 1)], void 0, 0) : view.value === "month" ? renderSlot(_ctx.$slots, "month-cell", {
																				month: cellDate,
																				selected: cell.selected,
																				disabled: cell.disabled
																			}, () => [createTextVNode(toDisplayString(cell.monthValue), 1)], void 0, 1) : renderSlot(_ctx.$slots, "year-cell", {
																				year: cellDate,
																				selected: cell.selected,
																				disabled: cell.disabled
																			}, () => [createTextVNode(toDisplayString(cell.yearValue), 1)], void 0, 2)]),
																			_: 2
																		}, 1040, ["class"])]),
																		_: 2
																	}, 1032, ["date", "class"]);
																}), 128))];
															}),
															_: 2
														}, _parent, _scopeId));
													});
													_push(`<!--]-->`);
												} else return [(openBlock(true), createBlock(Fragment, null, renderList$2(month.rows, (row, index) => {
													return openBlock(), createBlock(unref(Picker).GridRow, {
														key: `row-${index}`,
														"data-slot": "gridRow",
														class: ui.value.gridRow({ class: unref(props).ui?.gridRow })
													}, {
														default: withCtx(() => [view.value === "day" && unref(props).weekNumbers && row[0] ? (openBlock(), createBlock("td", {
															key: 0,
															role: "gridcell",
															"data-slot": "cellWeek",
															class: ui.value.cellWeek({ class: unref(props).ui?.cellWeek })
														}, toDisplayString(unref(getWeekNumber)(row[0], unref(props).locale ?? unref(locale).code)), 3)) : createCommentVNode("", true), (openBlock(true), createBlock(Fragment, null, renderList$2(row, (cellDate) => {
															return openBlock(), createBlock(unref(Picker).Cell, {
																key: cellDate.toString(),
																date: cellDate,
																"data-slot": "cell",
																class: ui.value.cell({ class: unref(props).ui?.cell })
															}, {
																default: withCtx(() => [createVNode(unref(Picker).CellTrigger, mergeProps({ ref_for: true }, cellProps(cellDate, month.value), {
																	"data-slot": "cellTrigger",
																	class: ui.value.cellTrigger({ class: unref(props).ui?.cellTrigger })
																}), {
																	default: withCtx((cell) => [view.value === "day" ? renderSlot(_ctx.$slots, "day", { day: cellDate }, () => [createTextVNode(toDisplayString(cellDate.day), 1)], void 0, 0) : view.value === "month" ? renderSlot(_ctx.$slots, "month-cell", {
																		month: cellDate,
																		selected: cell.selected,
																		disabled: cell.disabled
																	}, () => [createTextVNode(toDisplayString(cell.monthValue), 1)], void 0, 1) : renderSlot(_ctx.$slots, "year-cell", {
																		year: cellDate,
																		selected: cell.selected,
																		disabled: cell.disabled
																	}, () => [createTextVNode(toDisplayString(cell.yearValue), 1)], void 0, 2)]),
																	_: 2
																}, 1040, ["class"])]),
																_: 2
															}, 1032, ["date", "class"]);
														}), 128))]),
														_: 2
													}, 1032, ["class"]);
												}), 128))];
											}),
											_: 2
										}, _parent, _scopeId));
									} else return ["GridHead" in Picker.value ? (openBlock(), createBlock(unref(Picker).GridHead, { key: 0 }, {
										default: withCtx(() => [createVNode(unref(Picker).GridRow, {
											"data-slot": "gridWeekDaysRow",
											class: ui.value.gridWeekDaysRow({ class: unref(props).ui?.gridWeekDaysRow })
										}, {
											default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList$2(weekDays, (day) => {
												return openBlock(), createBlock(unref(Picker).HeadCell, {
													key: day,
													"data-slot": "headCell",
													class: ui.value.headCell({ class: unref(props).ui?.headCell })
												}, {
													default: withCtx(() => [renderSlot(_ctx.$slots, "week-day", { day }, () => [createTextVNode(toDisplayString(day), 1)])]),
													_: 2
												}, 1032, ["class"]);
											}), 128))]),
											_: 2
										}, 1032, ["class"])]),
										_: 2
									}, 1024)) : createCommentVNode("", true), createVNode(unref(Picker).GridBody, {
										"data-slot": "gridBody",
										class: ui.value.gridBody({ class: unref(props).ui?.gridBody })
									}, {
										default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList$2(month.rows, (row, index) => {
											return openBlock(), createBlock(unref(Picker).GridRow, {
												key: `row-${index}`,
												"data-slot": "gridRow",
												class: ui.value.gridRow({ class: unref(props).ui?.gridRow })
											}, {
												default: withCtx(() => [view.value === "day" && unref(props).weekNumbers && row[0] ? (openBlock(), createBlock("td", {
													key: 0,
													role: "gridcell",
													"data-slot": "cellWeek",
													class: ui.value.cellWeek({ class: unref(props).ui?.cellWeek })
												}, toDisplayString(unref(getWeekNumber)(row[0], unref(props).locale ?? unref(locale).code)), 3)) : createCommentVNode("", true), (openBlock(true), createBlock(Fragment, null, renderList$2(row, (cellDate) => {
													return openBlock(), createBlock(unref(Picker).Cell, {
														key: cellDate.toString(),
														date: cellDate,
														"data-slot": "cell",
														class: ui.value.cell({ class: unref(props).ui?.cell })
													}, {
														default: withCtx(() => [createVNode(unref(Picker).CellTrigger, mergeProps({ ref_for: true }, cellProps(cellDate, month.value), {
															"data-slot": "cellTrigger",
															class: ui.value.cellTrigger({ class: unref(props).ui?.cellTrigger })
														}), {
															default: withCtx((cell) => [view.value === "day" ? renderSlot(_ctx.$slots, "day", { day: cellDate }, () => [createTextVNode(toDisplayString(cellDate.day), 1)], void 0, 0) : view.value === "month" ? renderSlot(_ctx.$slots, "month-cell", {
																month: cellDate,
																selected: cell.selected,
																disabled: cell.disabled
															}, () => [createTextVNode(toDisplayString(cell.monthValue), 1)], void 0, 1) : renderSlot(_ctx.$slots, "year-cell", {
																year: cellDate,
																selected: cell.selected,
																disabled: cell.disabled
															}, () => [createTextVNode(toDisplayString(cell.yearValue), 1)], void 0, 2)]),
															_: 2
														}, 1040, ["class"])]),
														_: 2
													}, 1032, ["date", "class"]);
												}), 128))]),
												_: 2
											}, 1032, ["class"]);
										}), 128))]),
										_: 2
									}, 1032, ["class"])];
								}),
								_: 2
							}, _parent, _scopeId));
						});
						_push(`<!--]--></div>`);
					} else return [createVNode(unref(Picker).Header, {
						"data-slot": "header",
						class: ui.value.header({ class: unref(props).ui?.header })
					}, {
						default: withCtx(() => [
							view.value === "day" && unref(props).yearControls ? (openBlock(), createBlock(unref(Picker).Prev, {
								key: 0,
								"prev-page": (date) => paginateYear(date, -1),
								"aria-label": unref(t)("calendar.prevYear"),
								"as-child": ""
							}, {
								default: withCtx(() => [createVNode(_sfc_main$2, mergeProps({
									icon: prevYearIcon.value,
									size: unref(props).size,
									color: "neutral",
									variant: "ghost"
								}, unref(props).prevYear), null, 16, ["icon", "size"])]),
								_: 1
							}, 8, ["prev-page", "aria-label"])) : createCommentVNode("", true),
							view.value !== "day" || unref(props).monthControls ? (openBlock(), createBlock(unref(Picker).Prev, {
								key: 1,
								"aria-label": prevLabel.value,
								"as-child": ""
							}, {
								default: withCtx(() => [createVNode(_sfc_main$2, mergeProps({
									icon: prevMonthIcon.value,
									size: unref(props).size,
									color: "neutral",
									variant: "ghost"
								}, unref(props).prevMonth), null, 16, ["icon", "size"])]),
								_: 1
							}, 8, ["aria-label"])) : createCommentVNode("", true),
							createVNode(unref(Picker).Heading, {
								"data-slot": "heading",
								class: ui.value.heading({ class: unref(props).ui?.heading })
							}, {
								default: withCtx(({ headingValue }) => [renderSlot(_ctx.$slots, "heading", {
									value: headingValue,
									view: view.value,
									date,
									setView,
									setPlaceholder
								}, () => [switchable.value && unref(props).viewControl ? (openBlock(), createBlock(_sfc_main$2, mergeProps({
									key: 0,
									label: headingValue,
									size: unref(props).size,
									color: "neutral",
									variant: "ghost",
									block: ""
								}, typeof unref(props).viewControl === "object" ? unref(props).viewControl : {}, { onClick: cycleView }), null, 16, ["label", "size"])) : (openBlock(), createBlock("span", {
									key: 1,
									"data-slot": "headingLabel",
									class: ui.value.headingLabel({ class: unref(props).ui?.headingLabel })
								}, toDisplayString(headingValue), 3))])]),
								_: 2
							}, 1032, ["class"]),
							view.value !== "day" || unref(props).monthControls ? (openBlock(), createBlock(unref(Picker).Next, {
								key: 2,
								"aria-label": nextLabel.value,
								"as-child": ""
							}, {
								default: withCtx(() => [createVNode(_sfc_main$2, mergeProps({
									icon: nextMonthIcon.value,
									size: unref(props).size,
									color: "neutral",
									variant: "ghost"
								}, unref(props).nextMonth), null, 16, ["icon", "size"])]),
								_: 1
							}, 8, ["aria-label"])) : createCommentVNode("", true),
							view.value === "day" && unref(props).yearControls ? (openBlock(), createBlock(unref(Picker).Next, {
								key: 3,
								"next-page": (date) => paginateYear(date, 1),
								"aria-label": unref(t)("calendar.nextYear"),
								"as-child": ""
							}, {
								default: withCtx(() => [createVNode(_sfc_main$2, mergeProps({
									icon: nextYearIcon.value,
									size: unref(props).size,
									color: "neutral",
									variant: "ghost"
								}, unref(props).nextYear), null, 16, ["icon", "size"])]),
								_: 1
							}, 8, ["next-page", "aria-label"])) : createCommentVNode("", true)
						]),
						_: 2
					}, 1032, ["class"]), createVNode("div", {
						"data-slot": "body",
						class: ui.value.body({ class: unref(props).ui?.body })
					}, [(openBlock(true), createBlock(Fragment, null, renderList$2(Array.isArray(grid) ? grid : [grid], (month) => {
						return openBlock(), createBlock(unref(Picker).Grid, {
							key: month.value.toString(),
							"data-slot": "grid",
							class: ui.value.grid({ class: unref(props).ui?.grid })
						}, {
							default: withCtx(() => ["GridHead" in Picker.value ? (openBlock(), createBlock(unref(Picker).GridHead, { key: 0 }, {
								default: withCtx(() => [createVNode(unref(Picker).GridRow, {
									"data-slot": "gridWeekDaysRow",
									class: ui.value.gridWeekDaysRow({ class: unref(props).ui?.gridWeekDaysRow })
								}, {
									default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList$2(weekDays, (day) => {
										return openBlock(), createBlock(unref(Picker).HeadCell, {
											key: day,
											"data-slot": "headCell",
											class: ui.value.headCell({ class: unref(props).ui?.headCell })
										}, {
											default: withCtx(() => [renderSlot(_ctx.$slots, "week-day", { day }, () => [createTextVNode(toDisplayString(day), 1)])]),
											_: 2
										}, 1032, ["class"]);
									}), 128))]),
									_: 2
								}, 1032, ["class"])]),
								_: 2
							}, 1024)) : createCommentVNode("", true), createVNode(unref(Picker).GridBody, {
								"data-slot": "gridBody",
								class: ui.value.gridBody({ class: unref(props).ui?.gridBody })
							}, {
								default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList$2(month.rows, (row, index) => {
									return openBlock(), createBlock(unref(Picker).GridRow, {
										key: `row-${index}`,
										"data-slot": "gridRow",
										class: ui.value.gridRow({ class: unref(props).ui?.gridRow })
									}, {
										default: withCtx(() => [view.value === "day" && unref(props).weekNumbers && row[0] ? (openBlock(), createBlock("td", {
											key: 0,
											role: "gridcell",
											"data-slot": "cellWeek",
											class: ui.value.cellWeek({ class: unref(props).ui?.cellWeek })
										}, toDisplayString(unref(getWeekNumber)(row[0], unref(props).locale ?? unref(locale).code)), 3)) : createCommentVNode("", true), (openBlock(true), createBlock(Fragment, null, renderList$2(row, (cellDate) => {
											return openBlock(), createBlock(unref(Picker).Cell, {
												key: cellDate.toString(),
												date: cellDate,
												"data-slot": "cell",
												class: ui.value.cell({ class: unref(props).ui?.cell })
											}, {
												default: withCtx(() => [createVNode(unref(Picker).CellTrigger, mergeProps({ ref_for: true }, cellProps(cellDate, month.value), {
													"data-slot": "cellTrigger",
													class: ui.value.cellTrigger({ class: unref(props).ui?.cellTrigger })
												}), {
													default: withCtx((cell) => [view.value === "day" ? renderSlot(_ctx.$slots, "day", { day: cellDate }, () => [createTextVNode(toDisplayString(cellDate.day), 1)], void 0, 0) : view.value === "month" ? renderSlot(_ctx.$slots, "month-cell", {
														month: cellDate,
														selected: cell.selected,
														disabled: cell.disabled
													}, () => [createTextVNode(toDisplayString(cell.monthValue), 1)], void 0, 1) : renderSlot(_ctx.$slots, "year-cell", {
														year: cellDate,
														selected: cell.selected,
														disabled: cell.disabled
													}, () => [createTextVNode(toDisplayString(cell.yearValue), 1)], void 0, 2)]),
													_: 2
												}, 1040, ["class"])]),
												_: 2
											}, 1032, ["date", "class"]);
										}), 128))]),
										_: 2
									}, 1032, ["class"]);
								}), 128))]),
								_: 2
							}, 1032, ["class"])]),
							_: 2
						}, 1032, ["class"]);
					}), 128))], 2)];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$1 = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Calendar.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
// app/components/DatePicker.vue?vue&type=script&setup=true&lang.ts
var DatePicker_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "DatePicker",
	__ssrInlineRender: true,
	props: {
		"modelValue": { required: true },
		"modelModifiers": {}
	},
	emits: ["update:modelValue"],
	setup(__props) {
		const date = useModel(__props, "modelValue");
		const open = ref(false);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UPopover = _sfc_main$1;
			const _component_UButton = _sfc_main$2;
			const _component_UIcon = _sfc_main$5;
			const _component_UCalendar = _sfc_main;
			_push(ssrRenderComponent(_component_UPopover, mergeProps({
				open: unref(open),
				"onUpdate:open": ($event) => isRef(open) ? open.value = $event : null,
				content: { collisionPadding: 12 }
			}, _attrs), {
				content: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_UCalendar, {
						modelValue: date.value,
						"onUpdate:modelValue": [($event) => date.value = $event, ($event) => open.value = false],
						locale: "DATE_LOCALE" in _ctx ? _ctx.DATE_LOCALE : unref(DATE_LOCALE),
						"week-starts-on": 0,
						"fixed-weeks": false,
						"prevent-deselect": "",
						"weekday-format": "long",
						size: "sm",
						class: "w-72 max-w-[calc(100vw-2rem)] p-2.5",
						ui: {
							body: "pt-2",
							cellTrigger: "text-sm",
							headCell: "py-1 text-xs"
						}
					}, {
						heading: withCtx(({ date: visibleDate, view, value, setView }, _push, _parent, _scopeId) => {
							if (_push) _push(ssrRenderComponent(_component_UButton, {
								color: "neutral",
								variant: "ghost",
								size: "sm",
								block: "",
								onClick: ($event) => setView(view === "day" ? "month" : view === "month" ? "year" : "day")
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${ssrInterpolate(view === "day" ? `${("formatMonth" in _ctx ? _ctx.formatMonth : unref(formatMonth))(visibleDate)} ${("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(visibleDate.year)}` : view === "month" ? ("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(visibleDate.year) : ("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(value.trim()))}`);
									else return [createTextVNode(toDisplayString(view === "day" ? `${("formatMonth" in _ctx ? _ctx.formatMonth : unref(formatMonth))(visibleDate)} ${("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(visibleDate.year)}` : view === "month" ? ("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(visibleDate.year) : ("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(value.trim())), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							else return [createVNode(_component_UButton, {
								color: "neutral",
								variant: "ghost",
								size: "sm",
								block: "",
								onClick: ($event) => setView(view === "day" ? "month" : view === "month" ? "year" : "day")
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(view === "day" ? `${("formatMonth" in _ctx ? _ctx.formatMonth : unref(formatMonth))(visibleDate)} ${("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(visibleDate.year)}` : view === "month" ? ("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(visibleDate.year) : ("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(value.trim())), 1)]),
								_: 2
							}, 1032, ["onClick"])];
						}),
						"week-day": withCtx(({ day }, _push, _parent, _scopeId) => {
							if (_push) _push(`<span${ssrRenderAttr("aria-label", day)}${ssrRenderAttr("title", day)}${_scopeId}>${ssrInterpolate(("WEEKDAY_SHORT_LABELS" in _ctx ? _ctx.WEEKDAY_SHORT_LABELS : unref(WEEKDAY_SHORT_LABELS))[day] || day)}</span>`);
							else return [createVNode("span", {
								"aria-label": day,
								title: day
							}, toDisplayString(("WEEKDAY_SHORT_LABELS" in _ctx ? _ctx.WEEKDAY_SHORT_LABELS : unref(WEEKDAY_SHORT_LABELS))[day] || day), 9, ["aria-label", "title"])];
						}),
						day: withCtx(({ day }, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(day.day))}`);
							else return [createTextVNode(toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(day.day)), 1)];
						}),
						"month-cell": withCtx(({ month }, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(("formatMonth" in _ctx ? _ctx.formatMonth : unref(formatMonth))(month))}`);
							else return [createTextVNode(toDisplayString(("formatMonth" in _ctx ? _ctx.formatMonth : unref(formatMonth))(month)), 1)];
						}),
						"year-cell": withCtx(({ year }, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(year.year))}`);
							else return [createTextVNode(toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(year.year)), 1)];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(_component_UCalendar, {
						modelValue: date.value,
						"onUpdate:modelValue": [($event) => date.value = $event, ($event) => open.value = false],
						locale: "DATE_LOCALE" in _ctx ? _ctx.DATE_LOCALE : unref(DATE_LOCALE),
						"week-starts-on": 0,
						"fixed-weeks": false,
						"prevent-deselect": "",
						"weekday-format": "long",
						size: "sm",
						class: "w-72 max-w-[calc(100vw-2rem)] p-2.5",
						ui: {
							body: "pt-2",
							cellTrigger: "text-sm",
							headCell: "py-1 text-xs"
						}
					}, {
						heading: withCtx(({ date: visibleDate, view, value, setView }) => [createVNode(_component_UButton, {
							color: "neutral",
							variant: "ghost",
							size: "sm",
							block: "",
							onClick: ($event) => setView(view === "day" ? "month" : view === "month" ? "year" : "day")
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(view === "day" ? `${("formatMonth" in _ctx ? _ctx.formatMonth : unref(formatMonth))(visibleDate)} ${("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(visibleDate.year)}` : view === "month" ? ("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(visibleDate.year) : ("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(value.trim())), 1)]),
							_: 2
						}, 1032, ["onClick"])]),
						"week-day": withCtx(({ day }) => [createVNode("span", {
							"aria-label": day,
							title: day
						}, toDisplayString(("WEEKDAY_SHORT_LABELS" in _ctx ? _ctx.WEEKDAY_SHORT_LABELS : unref(WEEKDAY_SHORT_LABELS))[day] || day), 9, ["aria-label", "title"])]),
						day: withCtx(({ day }) => [createTextVNode(toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(day.day)), 1)]),
						"month-cell": withCtx(({ month }) => [createTextVNode(toDisplayString(("formatMonth" in _ctx ? _ctx.formatMonth : unref(formatMonth))(month)), 1)]),
						"year-cell": withCtx(({ year }) => [createTextVNode(toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(year.year)), 1)]),
						_: 1
					}, 8, [
						"modelValue",
						"onUpdate:modelValue",
						"locale"
					])];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_UButton, {
						color: "neutral",
						variant: "outline",
						icon: "i-lucide-calendar-days",
						size: "sm",
						class: "date-button"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(`<span class="date-label"${_scopeId}>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(date.value))}</span>`);
								_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-chevron-down" }, null, _parent, _scopeId));
							} else return [createVNode("span", { class: "date-label" }, toDisplayString(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(date.value)), 1), createVNode(_component_UIcon, { name: "i-lucide-chevron-down" })];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(_component_UButton, {
						color: "neutral",
						variant: "outline",
						icon: "i-lucide-calendar-days",
						size: "sm",
						class: "date-button"
					}, {
						default: withCtx(() => [createVNode("span", { class: "date-label" }, toDisplayString(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(date.value)), 1), createVNode(_component_UIcon, { name: "i-lucide-chevron-down" })]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
		};
	}
});
// app/components/DatePicker.vue
var _sfc_setup = DatePicker_vue_vue_type_script_setup_true_lang_default.setup;
DatePicker_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DatePicker.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var DatePicker_default = Object.assign(DatePicker_vue_vue_type_script_setup_true_lang_default, { __name: "DatePicker" });

export { DatePicker_default as D };;globalThis.__timing__.logEnd('Load chunks/build/DatePicker-CL2BV2YH');
//# sourceMappingURL=DatePicker-CL2BV2YH.mjs.map
