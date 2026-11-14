globalThis.__timing__.logStart('Load chunks/build/settings-CZDKPpUH');import { a as useHead, e as useAuth, K as useToast, b as _sfc_main$5, _ as _sfc_main$1, s as ssrRenderList$2, M as renderList$2, n as navigateTo, f as useComponentProps, g as useAppConfig, O as useLocale, v as useFormField, t as tv, y as _sfc_main$3$1, P as Primitive, V as VisuallyHidden_default } from '../virtual/entry.mjs';
import { _ as _sfc_main$2 } from './Form-DKt9N6vo.mjs';
import { _ as _sfc_main$3 } from './FormField-WNpvFFAW.mjs';
import { _ as _sfc_main$4 } from './Textarea-DcsECgx9.mjs';
import { _ as _sfc_main$6 } from './Input-Bs-tvl7x.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-DjkACiAr.mjs';
import { _ as _sfc_main$7 } from './Modal-BsBsKz59.mjs';
import { P as PINCodeModal_default } from './PINCodeModal-GmrNsRhT.mjs';
import { u as useDoctorInformation } from './useDoctorInformation-DXDs7ZGz.mjs';
import { defineComponent, useTemplateRef, ref, reactive, computed, mergeProps, unref, withCtx, createTextVNode, openBlock, createBlock, createVNode, Fragment, toDisplayString, createCommentVNode, isRef, useModel, useId, watch, mergeModels, useSlots, toRefs, toRef, renderSlot, withModifiers, resolveDynamicComponent, withKeys, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderSlot, ssrRenderVNode } from 'vue/server-renderer';
import { createReusableTemplate } from '@vueuse/core';
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
import './Label-CeDlFZe1.mjs';
import './useId-BkktAd0v.mjs';
import './overlay-BJM8aJ6z.mjs';
import 'aria-hidden';

// node_modules/@nuxt/ui/dist/runtime/composables/useFileUpload.js
function parseAcceptToDataTypes(accept) {
	if (!accept || accept === "*") return [];
	return accept.split(",").map((type) => {
		const trimmedType = type.trim();
		if (trimmedType.includes("/") && trimmedType.endsWith("/*")) return trimmedType.split("/")[0] || trimmedType;
		return trimmedType;
	}).filter((type) => {
		return !type.startsWith(".");
	});
}
function useFileUpload(options) {
	const { accept = "*"} = options;
	const inputRef = ref();
	const dropzoneRef = ref();
	computed(() => parseAcceptToDataTypes(unref(accept)));
	const isDragging = ref(false);
	const fileDialog = reactive({ open: () => {} });
	function open() {
		fileDialog.open();
	}
	return {
		isDragging,
		open,
		inputRef,
		dropzoneRef
	};
}
// virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Ffile-upload.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Ffile_upload_default = {
	"slots": {
		"root": "relative flex flex-col",
		"base": ["w-full flex-1 bg-default border border-default flex flex-col gap-2 items-stretch justify-center rounded-lg focus-visible:outline-3", "transition-[background] ease-out"],
		"wrapper": "flex flex-col items-center justify-center text-center",
		"icon": "shrink-0",
		"avatar": "shrink-0",
		"label": "font-medium text-default mt-2",
		"description": "text-muted mt-1",
		"actions": "flex flex-wrap gap-1.5 shrink-0 mt-4",
		"files": "",
		"file": "relative",
		"fileLeadingAvatar": "shrink-0",
		"fileWrapper": "flex flex-col min-w-0",
		"fileName": "text-default truncate",
		"fileSize": "text-muted truncate",
		"fileTrailingButton": ""
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
			"area": {
				"wrapper": "px-4 py-3",
				"base": "p-4"
			},
			"button": {}
		},
		"size": {
			"xs": {
				"base": "text-xs",
				"icon": "size-4",
				"file": "text-xs px-2 py-1 gap-1",
				"fileWrapper": "flex-row gap-1"
			},
			"sm": {
				"base": "text-xs",
				"icon": "size-4",
				"file": "text-xs px-2.5 py-1.5 gap-1.5",
				"fileWrapper": "flex-row gap-1"
			},
			"md": {
				"base": "text-sm",
				"icon": "size-5",
				"file": "text-xs px-2.5 py-1.5 gap-1.5"
			},
			"lg": {
				"base": "text-sm",
				"icon": "size-5",
				"file": "text-sm px-3 py-2 gap-2",
				"fileSize": "text-xs"
			},
			"xl": {
				"base": "text-base",
				"icon": "size-6",
				"file": "text-sm px-3 py-2 gap-2"
			}
		},
		"layout": {
			"list": {
				"root": "gap-2 items-start",
				"files": "flex flex-col w-full gap-2",
				"file": "min-w-0 flex items-center border border-default rounded-md w-full",
				"fileTrailingButton": "ms-auto"
			},
			"grid": {
				"fileWrapper": "hidden",
				"fileLeadingAvatar": "size-full rounded-lg",
				"fileTrailingButton": "absolute -top-1.5 -end-1.5 p-0 rounded-full border-2 border-bg"
			}
		},
		"position": {
			"inside": "",
			"outside": ""
		},
		"dropzone": { "true": "border-dashed data-[dragging=true]:bg-elevated/25" },
		"interactive": { "true": "" },
		"highlight": { "true": "" },
		"multiple": { "true": "" },
		"disabled": { "true": "cursor-not-allowed opacity-75" }
	},
	"compoundVariants": [
		{
			"color": "primary",
			"class": "outline-primary/25 focus-visible:outline-3 focus-visible:border-primary"
		},
		{
			"color": "secondary",
			"class": "outline-secondary/25 focus-visible:outline-3 focus-visible:border-secondary"
		},
		{
			"color": "success",
			"class": "outline-success/25 focus-visible:outline-3 focus-visible:border-success"
		},
		{
			"color": "info",
			"class": "outline-info/25 focus-visible:outline-3 focus-visible:border-info"
		},
		{
			"color": "warning",
			"class": "outline-warning/25 focus-visible:outline-3 focus-visible:border-warning"
		},
		{
			"color": "error",
			"class": "outline-error/25 focus-visible:outline-3 focus-visible:border-error"
		},
		{
			"color": "primary",
			"highlight": true,
			"class": "border-primary"
		},
		{
			"color": "secondary",
			"highlight": true,
			"class": "border-secondary"
		},
		{
			"color": "success",
			"highlight": true,
			"class": "border-success"
		},
		{
			"color": "info",
			"highlight": true,
			"class": "border-info"
		},
		{
			"color": "warning",
			"highlight": true,
			"class": "border-warning"
		},
		{
			"color": "error",
			"highlight": true,
			"class": "border-error"
		},
		{
			"color": "neutral",
			"class": "outline-inverted/25 focus-visible:outline-3 focus-visible:border-inverted"
		},
		{
			"color": "neutral",
			"highlight": true,
			"class": "border-inverted"
		},
		{
			"size": "xs",
			"layout": "list",
			"class": { "fileTrailingButton": "-me-1" }
		},
		{
			"size": "sm",
			"layout": "list",
			"class": { "fileTrailingButton": "-me-1.5" }
		},
		{
			"size": "md",
			"layout": "list",
			"class": { "fileTrailingButton": "-me-1.5" }
		},
		{
			"size": "lg",
			"layout": "list",
			"class": { "fileTrailingButton": "-me-2" }
		},
		{
			"size": "xl",
			"layout": "list",
			"class": { "fileTrailingButton": "-me-2" }
		},
		{
			"variant": "button",
			"size": "xs",
			"class": { "base": "p-1" }
		},
		{
			"variant": "button",
			"size": "sm",
			"class": { "base": "p-1.5" }
		},
		{
			"variant": "button",
			"size": "md",
			"class": { "base": "p-1.5" }
		},
		{
			"variant": "button",
			"size": "lg",
			"class": { "base": "p-2" }
		},
		{
			"variant": "button",
			"size": "xl",
			"class": { "base": "p-2" }
		},
		{
			"layout": "grid",
			"multiple": true,
			"class": {
				"files": "grid grid-cols-2 md:grid-cols-3 gap-4 w-full",
				"file": "p-0 aspect-square"
			}
		},
		{
			"layout": "grid",
			"multiple": false,
			"class": { "file": "absolute inset-0 p-0" }
		},
		{
			"interactive": true,
			"disabled": false,
			"class": "hover:bg-elevated/25"
		}
	],
	"defaultVariants": {
		"color": "primary",
		"variant": "area",
		"size": "md"
	}
};
// node_modules/@nuxt/ui/dist/runtime/components/FileUpload.vue
var _sfc_main = /*@__PURE__*/ Object.assign({ inheritAttrs: false }, {
	__name: "UFileUpload",
	__ssrInlineRender: true,
	props: /*@__PURE__*/ mergeModels({
		as: {
			type: null,
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
		icon: {
			type: [String, Boolean],
			required: false,
			skipCheck: true
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
		layout: {
			type: null,
			required: false,
			default: "grid"
		},
		position: {
			type: null,
			required: false,
			default: "outside"
		},
		highlight: {
			type: Boolean,
			required: false
		},
		accept: {
			type: String,
			required: false,
			default: "*"
		},
		multiple: {
			type: Boolean,
			required: false,
			default: false
		},
		reset: {
			type: Boolean,
			required: false,
			default: false
		},
		dropzone: {
			type: Boolean,
			required: false,
			default: true
		},
		interactive: {
			type: Boolean,
			required: false,
			default: true
		},
		required: {
			type: Boolean,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		fileIcon: {
			type: null,
			required: false
		},
		fileImage: {
			type: Boolean,
			required: false,
			default: true
		},
		fileDelete: {
			type: [Boolean, Object],
			required: false,
			default: true
		},
		fileDeleteIcon: {
			type: null,
			required: false
		},
		preview: {
			type: Boolean,
			required: false,
			default: true
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		}
	}, {
		"modelValue": { type: null },
		"modelModifiers": {}
	}),
	emits: /*@__PURE__*/ mergeModels(["change"], ["update:modelValue"]),
	setup(__props, { expose: __expose, emit: __emit }) {
		const _props = __props;
		const emits = __emit;
		const slots = useSlots();
		const modelValue = useModel(__props, "modelValue");
		const props = useComponentProps("fileUpload", _props);
		const appConfig = useAppConfig();
		const { t } = useLocale();
		const [DefineFilesTemplate, ReuseFilesTemplate] = createReusableTemplate();
		const { accept, multiple, reset } = toRefs(_props);
		const { isDragging, open, inputRef, dropzoneRef } = useFileUpload({
			accept,
			dropzone: props.dropzone});
		const { emitFormInput, emitFormChange, id, name, size: formFieldSize, color: formFieldColor, highlight: formFieldHighlight, disabled: formFieldDisabled, ariaAttrs } = useFormField(_props);
		const color = computed(() => formFieldColor.value ?? props.color);
		const highlight = computed(() => formFieldHighlight.value ?? props.highlight);
		const size = computed(() => formFieldSize.value ?? props.size);
		const disabled = computed(() => formFieldDisabled.value ?? props.disabled);
		const variant = computed(() => props.multiple ? "area" : props.variant);
		const layout = computed(() => props.variant === "button" && !props.multiple ? "grid" : props.layout);
		const position = computed(() => {
			if (layout.value === "grid" && props.multiple) return "inside";
			if (variant.value === "button") return "outside";
			return props.position;
		});
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Ffile_upload_default,
			...appConfig.ui?.fileUpload || {}
		})({
			dropzone: props.dropzone,
			interactive: props.interactive,
			color: color.value,
			size: size.value,
			variant: variant.value,
			layout: layout.value,
			position: position.value,
			multiple: props.multiple,
			highlight: highlight.value,
			disabled: disabled.value
		}));
		function createObjectUrl(file) {
			if (!props.fileImage) return void 0;
			return URL.createObjectURL(file);
		}
		function formatFileSize(bytes) {
			if (bytes === 0) return "0B";
			const k = 1024;
			const sizes = [
				"B",
				"KB",
				"MB",
				"GB"
			];
			const i = Math.floor(Math.log(bytes) / Math.log(k));
			const value = bytes / Math.pow(k, i);
			return `${i === 0 ? value.toString() : value.toFixed(0)}${sizes[i]}`;
		}
		function onUpdate(files, reset2 = false) {
			if (disabled.value) return;
			if (props.multiple) {
				if (reset2) modelValue.value = files;
				else {
					const existingFiles = modelValue.value || [];
					modelValue.value = [...existingFiles, ...files || []];
				}
			} else modelValue.value = files?.[0] ?? null;
			const event = new Event("change", { target: { value: modelValue.value } });
			emits("change", event);
			emitFormChange();
			emitFormInput();
		}
		function removeFile(index) {
			if (!modelValue.value) return;
			if (!props.multiple || index === void 0) {
				onUpdate([], true);
				dropzoneRef.value?.focus();
				return;
			}
			const files = [...modelValue.value];
			files.splice(index, 1);
			onUpdate(files, true);
			dropzoneRef.value?.focus();
		}
		watch(modelValue, (newValue) => {
			if ((props.multiple ? !newValue?.length : !newValue) && inputRef.value?.$el) inputRef.value.$el.value = "";
		});
		__expose({
			inputRef: toRef(() => inputRef.value?.$el),
			dropzoneRef
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(DefineFilesTemplate), null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (unref(props).preview && modelValue.value && (Array.isArray(modelValue.value) ? modelValue.value.length : true)) {
							_push(`<!--[-->`);
							ssrRenderSlot(_ctx.$slots, "files-top", {
								files: modelValue.value,
								open: unref(open),
								removeFile
							}, null, _push, _parent, _scopeId);
							_push(`<div data-slot="files" class="${ssrRenderClass(ui.value.files({ class: unref(props).ui?.files }))}"${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, "files", {
								files: modelValue.value,
								removeFile
							}, () => {
								_push(`<!--[-->`);
								ssrRenderList$2(Array.isArray(modelValue.value) ? modelValue.value : [modelValue.value], (file, index) => {
									_push(`<div data-slot="file" class="${ssrRenderClass(ui.value.file({ class: unref(props).ui?.file }))}"${_scopeId}>`);
									ssrRenderSlot(_ctx.$slots, "file", {
										file,
										index,
										removeFile
									}, () => {
										ssrRenderSlot(_ctx.$slots, "file-leading", {
											file,
											index,
											ui: ui.value
										}, () => {
											_push(ssrRenderComponent(_sfc_main$3$1, {
												as: { img: "img" },
												src: createObjectUrl(file),
												icon: unref(props).fileIcon || unref(appConfig).ui.icons.file,
												size: size.value,
												"data-slot": "fileLeadingAvatar",
												class: ui.value.fileLeadingAvatar({ class: unref(props).ui?.fileLeadingAvatar })
											}, null, _parent, _scopeId));
										}, _push, _parent, _scopeId);
										_push(`<div data-slot="fileWrapper" class="${ssrRenderClass(ui.value.fileWrapper({ class: unref(props).ui?.fileWrapper }))}"${_scopeId}><span data-slot="fileName" class="${ssrRenderClass(ui.value.fileName({ class: unref(props).ui?.fileName }))}"${_scopeId}>`);
										ssrRenderSlot(_ctx.$slots, "file-name", {
											file,
											index
										}, () => {
											_push(`${ssrInterpolate(file.name)}`);
										}, _push, _parent, _scopeId);
										_push(`</span><span data-slot="fileSize" class="${ssrRenderClass(ui.value.fileSize({ class: unref(props).ui?.fileSize }))}"${_scopeId}>`);
										ssrRenderSlot(_ctx.$slots, "file-size", {
											file,
											index
										}, () => {
											_push(`${ssrInterpolate(formatFileSize(file.size))}`);
										}, _push, _parent, _scopeId);
										_push(`</span></div>`);
										ssrRenderSlot(_ctx.$slots, "file-trailing", {
											file,
											index,
											ui: ui.value,
											removeFile
										}, () => {
											if (unref(props).fileDelete) _push(ssrRenderComponent(_sfc_main$1, mergeProps({ color: "neutral" }, { ref_for: true }, {
												...layout.value === "grid" ? {
													variant: "solid",
													size: "xs"
												} : {
													variant: "link",
													size: size.value
												},
												...typeof unref(props).fileDelete === "object" ? unref(props).fileDelete : void 0
											}, {
												"aria-label": unref(t)("fileUpload.removeFile", { filename: file.name }),
												"trailing-icon": unref(props).fileDeleteIcon || unref(appConfig).ui.icons.close,
												"data-slot": "fileTrailingButton",
												class: ui.value.fileTrailingButton({ class: unref(props).ui?.fileTrailingButton }),
												onClick: ($event) => removeFile(index)
											}), null, _parent, _scopeId));
											else _push(`<!---->`);
										}, _push, _parent, _scopeId);
									}, _push, _parent, _scopeId);
									_push(`</div>`);
								});
								_push(`<!--]-->`);
							}, _push, _parent, _scopeId);
							_push(`</div>`);
							ssrRenderSlot(_ctx.$slots, "files-bottom", {
								files: modelValue.value,
								open: unref(open),
								removeFile
							}, null, _push, _parent, _scopeId);
							_push(`<!--]-->`);
						} else _push(`<!---->`);
					} else return [unref(props).preview && modelValue.value && (Array.isArray(modelValue.value) ? modelValue.value.length : true) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
						renderSlot(_ctx.$slots, "files-top", {
							files: modelValue.value,
							open: unref(open),
							removeFile
						}),
						createVNode("div", {
							"data-slot": "files",
							class: ui.value.files({ class: unref(props).ui?.files })
						}, [renderSlot(_ctx.$slots, "files", {
							files: modelValue.value,
							removeFile
						}, () => [(openBlock(true), createBlock(Fragment, null, renderList$2(Array.isArray(modelValue.value) ? modelValue.value : [modelValue.value], (file, index) => {
							return openBlock(), createBlock("div", {
								key: file.name,
								"data-slot": "file",
								class: ui.value.file({ class: unref(props).ui?.file })
							}, [renderSlot(_ctx.$slots, "file", {
								file,
								index,
								removeFile
							}, () => [
								renderSlot(_ctx.$slots, "file-leading", {
									file,
									index,
									ui: ui.value
								}, () => [createVNode(_sfc_main$3$1, {
									as: { img: "img" },
									src: createObjectUrl(file),
									icon: unref(props).fileIcon || unref(appConfig).ui.icons.file,
									size: size.value,
									"data-slot": "fileLeadingAvatar",
									class: ui.value.fileLeadingAvatar({ class: unref(props).ui?.fileLeadingAvatar })
								}, null, 8, [
									"src",
									"icon",
									"size",
									"class"
								])]),
								createVNode("div", {
									"data-slot": "fileWrapper",
									class: ui.value.fileWrapper({ class: unref(props).ui?.fileWrapper })
								}, [createVNode("span", {
									"data-slot": "fileName",
									class: ui.value.fileName({ class: unref(props).ui?.fileName })
								}, [renderSlot(_ctx.$slots, "file-name", {
									file,
									index
								}, () => [createTextVNode(toDisplayString(file.name), 1)])], 2), createVNode("span", {
									"data-slot": "fileSize",
									class: ui.value.fileSize({ class: unref(props).ui?.fileSize })
								}, [renderSlot(_ctx.$slots, "file-size", {
									file,
									index
								}, () => [createTextVNode(toDisplayString(formatFileSize(file.size)), 1)])], 2)], 2),
								renderSlot(_ctx.$slots, "file-trailing", {
									file,
									index,
									ui: ui.value,
									removeFile
								}, () => [unref(props).fileDelete ? (openBlock(), createBlock(_sfc_main$1, mergeProps({
									key: 0,
									color: "neutral"
								}, { ref_for: true }, {
									...layout.value === "grid" ? {
										variant: "solid",
										size: "xs"
									} : {
										variant: "link",
										size: size.value
									},
									...typeof unref(props).fileDelete === "object" ? unref(props).fileDelete : void 0
								}, {
									"aria-label": unref(t)("fileUpload.removeFile", { filename: file.name }),
									"trailing-icon": unref(props).fileDeleteIcon || unref(appConfig).ui.icons.close,
									"data-slot": "fileTrailingButton",
									class: ui.value.fileTrailingButton({ class: unref(props).ui?.fileTrailingButton }),
									onClick: withModifiers(($event) => removeFile(index), ["stop", "prevent"])
								}), null, 16, [
									"aria-label",
									"trailing-icon",
									"class",
									"onClick"
								])) : createCommentVNode("", true)])
							])], 2);
						}), 128))])], 2),
						renderSlot(_ctx.$slots, "files-bottom", {
							files: modelValue.value,
							open: unref(open),
							removeFile
						})
					], 64)) : createCommentVNode("", true)];
				}),
				_: 3
			}, _parent));
			_push(ssrRenderComponent(unref(Primitive), {
				as: unref(props).as,
				"data-slot": _ctx.$attrs["data-slot"] ?? "root",
				class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] })
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						ssrRenderSlot(_ctx.$slots, "default", {
							open: unref(open),
							removeFile,
							ui: ui.value
						}, () => {
							ssrRenderVNode(_push, createVNode(resolveDynamicComponent(variant.value === "button" ? "button" : "div"), {
								ref_key: "dropzoneRef",
								ref: dropzoneRef,
								type: variant.value === "button" ? "button" : void 0,
								role: variant.value === "button" ? void 0 : "button",
								disabled: variant.value === "button" ? disabled.value : void 0,
								"aria-disabled": variant.value === "button" ? void 0 : disabled.value || void 0,
								"data-dragging": unref(isDragging),
								"data-slot": "base",
								class: ui.value.base({ class: unref(props).ui?.base }),
								tabindex: unref(props).interactive && !disabled.value ? 0 : -1,
								onClick: ($event) => unref(props).interactive && !disabled.value && unref(open)(),
								onKeydown: () => {},
								onKeyup: ($event) => unref(props).interactive && !disabled.value && unref(open)()
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) {
										if (position.value === "inside") _push(ssrRenderComponent(unref(ReuseFilesTemplate), null, null, _parent, _scopeId));
										else _push(`<!---->`);
										if (position.value === "inside" ? !unref(props).preview || (unref(multiple) ? !modelValue.value?.length : !modelValue.value) : true) {
											_push(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: unref(props).ui?.wrapper }))}"${_scopeId}>`);
											ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
												if (unref(props).icon !== false) {
													_push(`<!--[-->`);
													if (variant.value === "button") _push(ssrRenderComponent(_sfc_main$5, {
														name: unref(props).icon ?? unref(appConfig).ui.icons.upload,
														"data-slot": "icon",
														class: ui.value.icon({ class: unref(props).ui?.icon })
													}, null, _parent, _scopeId));
													else _push(ssrRenderComponent(_sfc_main$3$1, {
														icon: unref(props).icon ?? unref(appConfig).ui.icons.upload,
														size: size.value,
														"data-slot": "avatar",
														class: ui.value.avatar({ class: unref(props).ui?.avatar })
													}, null, _parent, _scopeId));
													_push(`<!--]-->`);
												} else _push(`<!---->`);
											}, _push, _parent, _scopeId);
											if (variant.value !== "button") {
												_push(`<!--[-->`);
												if (unref(props).label || !!slots.label) {
													_push(`<div data-slot="label" class="${ssrRenderClass(ui.value.label({ class: unref(props).ui?.label }))}"${_scopeId}>`);
													ssrRenderSlot(_ctx.$slots, "label", {}, () => {
														_push(`${ssrInterpolate(unref(props).label)}`);
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
												if (!!slots.actions) {
													_push(`<div data-slot="actions" class="${ssrRenderClass(ui.value.actions({ class: unref(props).ui?.actions }))}"${_scopeId}>`);
													ssrRenderSlot(_ctx.$slots, "actions", {
														files: modelValue.value,
														open: unref(open),
														removeFile
													}, null, _push, _parent, _scopeId);
													_push(`</div>`);
												} else _push(`<!---->`);
												_push(`<!--]-->`);
											} else _push(`<!---->`);
											_push(`</div>`);
										} else _push(`<!---->`);
									} else return [position.value === "inside" ? (openBlock(), createBlock(unref(ReuseFilesTemplate), { key: 0 })) : createCommentVNode("", true), (position.value === "inside" ? !unref(props).preview || (unref(multiple) ? !modelValue.value?.length : !modelValue.value) : true) ? (openBlock(), createBlock("div", {
										key: 1,
										"data-slot": "wrapper",
										class: ui.value.wrapper({ class: unref(props).ui?.wrapper })
									}, [renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [unref(props).icon !== false ? (openBlock(), createBlock(Fragment, { key: 0 }, [variant.value === "button" ? (openBlock(), createBlock(_sfc_main$5, {
										key: 0,
										name: unref(props).icon ?? unref(appConfig).ui.icons.upload,
										"data-slot": "icon",
										class: ui.value.icon({ class: unref(props).ui?.icon })
									}, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$3$1, {
										key: 1,
										icon: unref(props).icon ?? unref(appConfig).ui.icons.upload,
										size: size.value,
										"data-slot": "avatar",
										class: ui.value.avatar({ class: unref(props).ui?.avatar })
									}, null, 8, [
										"icon",
										"size",
										"class"
									]))], 64)) : createCommentVNode("", true)]), variant.value !== "button" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
										unref(props).label || !!slots.label ? (openBlock(), createBlock("div", {
											key: 0,
											"data-slot": "label",
											class: ui.value.label({ class: unref(props).ui?.label })
										}, [renderSlot(_ctx.$slots, "label", {}, () => [createTextVNode(toDisplayString(unref(props).label), 1)])], 2)) : createCommentVNode("", true),
										unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
											key: 1,
											"data-slot": "description",
											class: ui.value.description({ class: unref(props).ui?.description })
										}, [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])], 2)) : createCommentVNode("", true),
										!!slots.actions ? (openBlock(), createBlock("div", {
											key: 2,
											"data-slot": "actions",
											class: ui.value.actions({ class: unref(props).ui?.actions })
										}, [renderSlot(_ctx.$slots, "actions", {
											files: modelValue.value,
											open: unref(open),
											removeFile
										})], 2)) : createCommentVNode("", true)
									], 64)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)];
								}),
								_: 3
							}), _parent, _scopeId);
							if (position.value === "outside") _push(ssrRenderComponent(unref(ReuseFilesTemplate), null, null, _parent, _scopeId));
							else _push(`<!---->`);
						}, _push, _parent, _scopeId);
						_push(ssrRenderComponent(unref(VisuallyHidden_default), mergeProps({
							id: unref(id),
							ref_key: "inputRef",
							ref: inputRef,
							as: "input",
							type: "file",
							feature: "fully-hidden",
							name: unref(name),
							accept: unref(accept),
							multiple: unref(multiple),
							required: unref(props).required,
							disabled: disabled.value
						}, {
							..._ctx.$attrs,
							...unref(ariaAttrs),
							"data-slot": void 0
						}), null, _parent, _scopeId));
					} else return [renderSlot(_ctx.$slots, "default", {
						open: unref(open),
						removeFile,
						ui: ui.value
					}, () => [(openBlock(), createBlock(resolveDynamicComponent(variant.value === "button" ? "button" : "div"), {
						ref_key: "dropzoneRef",
						ref: dropzoneRef,
						type: variant.value === "button" ? "button" : void 0,
						role: variant.value === "button" ? void 0 : "button",
						disabled: variant.value === "button" ? disabled.value : void 0,
						"aria-disabled": variant.value === "button" ? void 0 : disabled.value || void 0,
						"data-dragging": unref(isDragging),
						"data-slot": "base",
						class: ui.value.base({ class: unref(props).ui?.base }),
						tabindex: unref(props).interactive && !disabled.value ? 0 : -1,
						onClick: ($event) => unref(props).interactive && !disabled.value && unref(open)(),
						onKeydown: withKeys(withModifiers(() => {}, ["prevent"]), ["space"]),
						onKeyup: withKeys(($event) => unref(props).interactive && !disabled.value && unref(open)(), ["enter", "space"])
					}, {
						default: withCtx(() => [position.value === "inside" ? (openBlock(), createBlock(unref(ReuseFilesTemplate), { key: 0 })) : createCommentVNode("", true), (position.value === "inside" ? !unref(props).preview || (unref(multiple) ? !modelValue.value?.length : !modelValue.value) : true) ? (openBlock(), createBlock("div", {
							key: 1,
							"data-slot": "wrapper",
							class: ui.value.wrapper({ class: unref(props).ui?.wrapper })
						}, [renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [unref(props).icon !== false ? (openBlock(), createBlock(Fragment, { key: 0 }, [variant.value === "button" ? (openBlock(), createBlock(_sfc_main$5, {
							key: 0,
							name: unref(props).icon ?? unref(appConfig).ui.icons.upload,
							"data-slot": "icon",
							class: ui.value.icon({ class: unref(props).ui?.icon })
						}, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$3$1, {
							key: 1,
							icon: unref(props).icon ?? unref(appConfig).ui.icons.upload,
							size: size.value,
							"data-slot": "avatar",
							class: ui.value.avatar({ class: unref(props).ui?.avatar })
						}, null, 8, [
							"icon",
							"size",
							"class"
						]))], 64)) : createCommentVNode("", true)]), variant.value !== "button" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
							unref(props).label || !!slots.label ? (openBlock(), createBlock("div", {
								key: 0,
								"data-slot": "label",
								class: ui.value.label({ class: unref(props).ui?.label })
							}, [renderSlot(_ctx.$slots, "label", {}, () => [createTextVNode(toDisplayString(unref(props).label), 1)])], 2)) : createCommentVNode("", true),
							unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
								key: 1,
								"data-slot": "description",
								class: ui.value.description({ class: unref(props).ui?.description })
							}, [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])], 2)) : createCommentVNode("", true),
							!!slots.actions ? (openBlock(), createBlock("div", {
								key: 2,
								"data-slot": "actions",
								class: ui.value.actions({ class: unref(props).ui?.actions })
							}, [renderSlot(_ctx.$slots, "actions", {
								files: modelValue.value,
								open: unref(open),
								removeFile
							})], 2)) : createCommentVNode("", true)
						], 64)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)]),
						_: 3
					}, 40, [
						"type",
						"role",
						"disabled",
						"aria-disabled",
						"data-dragging",
						"class",
						"tabindex",
						"onClick",
						"onKeydown",
						"onKeyup"
					])), position.value === "outside" ? (openBlock(), createBlock(unref(ReuseFilesTemplate), { key: 0 })) : createCommentVNode("", true)]), createVNode(unref(VisuallyHidden_default), mergeProps({
						id: unref(id),
						ref_key: "inputRef",
						ref: inputRef,
						as: "input",
						type: "file",
						feature: "fully-hidden",
						name: unref(name),
						accept: unref(accept),
						multiple: unref(multiple),
						required: unref(props).required,
						disabled: disabled.value
					}, {
						..._ctx.$attrs,
						...unref(ariaAttrs),
						"data-slot": void 0
					}), null, 16, [
						"id",
						"name",
						"accept",
						"multiple",
						"required",
						"disabled"
					])];
				}),
				_: 3
			}, _parent));
			_push(`<!--]-->`);
		};
	}
});
var _sfc_setup$2 = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/FileUpload.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
// app/components/SettingsImageInput.vue?vue&type=script&setup=true&lang.ts
var SettingsImageInput_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SettingsImageInput",
	__ssrInlineRender: true,
	props: /*@__PURE__*/ mergeModels({
		name: {},
		label: {},
		current: {},
		disabled: { type: Boolean },
		portrait: { type: Boolean }
	}, {
		"modelValue": { default: null },
		"modelModifiers": {},
		"removed": {
			type: Boolean,
			default: false
		},
		"removedModifiers": {}
	}),
	emits: ["update:modelValue", "update:removed"],
	setup(__props) {
		const props = __props;
		const file = useModel(__props, "modelValue");
		const removed = useModel(__props, "removed");
		const localError = ref("");
		const objectUrl = ref("");
		const imageFailed = ref(false);
		const errorId = useId();
		const preview = computed(() => objectUrl.value || (!removed.value ? props.current : null));
		function releasePreview() {
			if (objectUrl.value) URL.revokeObjectURL(objectUrl.value);
			objectUrl.value = "";
		}
		function select(value) {
			if (props.disabled) return;
			localError.value = "";
			if (!value) return;
			if (![
				"image/png",
				"image/jpeg",
				"image/webp"
			].includes(value.type)) {
				localError.value = "Only PNG, JPEG and WebP images are accepted.";
				return;
			}
			if (value.size > 2097152 || value.size === 0) {
				localError.value = "Image must not be empty or larger than 2 MB.";
				return;
			}
			file.value = value;
			removed.value = false;
		}
		function remove() {
			file.value = null;
			removed.value = !!props.current;
			localError.value = "";
		}
		function undo() {
			file.value = null;
			removed.value = false;
			localError.value = "";
		}
		watch(file, (value) => {
			releasePreview();
		}, { immediate: true });
		watch(preview, () => {
			imageFailed.value = false;
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UFormField = _sfc_main$3;
			const _component_UIcon = _sfc_main$5;
			const _component_UFileUpload = _sfc_main;
			const _component_UButton = _sfc_main$1;
			_push(ssrRenderComponent(_component_UFormField, mergeProps({
				label: __props.label,
				name: __props.name,
				error: unref(localError) || void 0,
				size: "lg",
				class: "settings-image-field",
				ui: { label: "text-base" }
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="image-editor" data-v-393fb65e${_scopeId}><div class="${ssrRenderClass([{ portrait: __props.portrait }, "image-preview"])}" data-v-393fb65e${_scopeId}>`);
						if (unref(preview) && !unref(imageFailed)) _push(`<img${ssrRenderAttr("src", unref(preview))}${ssrRenderAttr("alt", __props.label)} data-v-393fb65e${_scopeId}>`);
						else {
							_push(`<div class="image-placeholder" data-v-393fb65e${_scopeId}>`);
							_push(ssrRenderComponent(_component_UIcon, {
								name: __props.portrait ? "i-lucide-user-round" : "i-lucide-image",
								"aria-hidden": "true"
							}, null, _parent, _scopeId));
							_push(`<span data-v-393fb65e${_scopeId}>${ssrInterpolate(removed.value ? "Image will be removed" : "No image selected")}</span></div>`);
						}
						_push(`</div><p class="image-description" data-v-393fb65e${_scopeId}>PNG, JPEG or WebP · up to 2 MB</p>`);
						if (file.value) _push(`<p class="image-filename" dir="auto" data-v-393fb65e${_scopeId}>${ssrInterpolate(file.value.name)}</p>`);
						else _push(`<!---->`);
						_push(ssrRenderComponent(_component_UFileUpload, {
							"model-value": file.value,
							name: __props.name,
							disabled: __props.disabled,
							accept: "image/png,image/jpeg,image/webp",
							multiple: false,
							preview: false,
							dropzone: false,
							class: "w-full min-w-0",
							reset: "",
							"onUpdate:modelValue": select
						}, {
							default: withCtx(({ open: chooseFile }, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(_component_UButton, {
									type: "button",
									color: "neutral",
									variant: "outline",
									size: "lg",
									block: "",
									icon: "i-lucide-upload",
									disabled: __props.disabled,
									"aria-label": `${__props.label}: Choose image`,
									"aria-invalid": !!unref(localError),
									"aria-describedby": unref(localError) ? unref(errorId) : void 0,
									onClick: ($event) => chooseFile()
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(`Choose image`);
										else return [createTextVNode("Choose image")];
									}),
									_: 2
								}, _parent, _scopeId));
								else return [createVNode(_component_UButton, {
									type: "button",
									color: "neutral",
									variant: "outline",
									size: "lg",
									block: "",
									icon: "i-lucide-upload",
									disabled: __props.disabled,
									"aria-label": `${__props.label}: Choose image`,
									"aria-invalid": !!unref(localError),
									"aria-describedby": unref(localError) ? unref(errorId) : void 0,
									onClick: ($event) => chooseFile()
								}, {
									default: withCtx(() => [createTextVNode("Choose image")]),
									_: 1
								}, 8, [
									"disabled",
									"aria-label",
									"aria-invalid",
									"aria-describedby",
									"onClick"
								])];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`<span${ssrRenderAttr("id", unref(errorId))} class="sr-only" role="status" aria-live="polite" data-v-393fb65e${_scopeId}>${ssrInterpolate(unref(localError))}</span>`);
						if (unref(preview) || file.value || removed.value) {
							_push(`<div class="image-actions" data-v-393fb65e${_scopeId}>`);
							if (unref(preview)) _push(ssrRenderComponent(_component_UButton, {
								type: "button",
								color: "neutral",
								variant: "ghost",
								size: "sm",
								icon: "i-lucide-trash-2",
								disabled: __props.disabled,
								"aria-label": `${__props.label}: Remove image`,
								onClick: remove
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`Remove`);
									else return [createTextVNode("Remove")];
								}),
								_: 1
							}, _parent, _scopeId));
							else _push(`<!---->`);
							if (file.value || removed.value) _push(ssrRenderComponent(_component_UButton, {
								type: "button",
								color: "neutral",
								variant: "ghost",
								size: "sm",
								icon: "i-lucide-undo-2",
								disabled: __props.disabled,
								onClick: undo
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`Restore`);
									else return [createTextVNode("Restore")];
								}),
								_: 1
							}, _parent, _scopeId));
							else _push(`<!---->`);
							_push(`</div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
					} else return [createVNode("div", { class: "image-editor" }, [
						createVNode("div", { class: ["image-preview", { portrait: __props.portrait }] }, [unref(preview) && !unref(imageFailed) ? (openBlock(), createBlock("img", {
							key: 0,
							src: unref(preview),
							alt: __props.label,
							onError: ($event) => imageFailed.value = true
						}, null, 40, [
							"src",
							"alt",
							"onError"
						])) : (openBlock(), createBlock("div", {
							key: 1,
							class: "image-placeholder"
						}, [createVNode(_component_UIcon, {
							name: __props.portrait ? "i-lucide-user-round" : "i-lucide-image",
							"aria-hidden": "true"
						}, null, 8, ["name"]), createVNode("span", null, toDisplayString(removed.value ? "Image will be removed" : "No image selected"), 1)]))], 2),
						createVNode("p", { class: "image-description" }, "PNG, JPEG or WebP · up to 2 MB"),
						file.value ? (openBlock(), createBlock("p", {
							key: 0,
							class: "image-filename",
							dir: "auto"
						}, toDisplayString(file.value.name), 1)) : createCommentVNode("", true),
						createVNode(_component_UFileUpload, {
							"model-value": file.value,
							name: __props.name,
							disabled: __props.disabled,
							accept: "image/png,image/jpeg,image/webp",
							multiple: false,
							preview: false,
							dropzone: false,
							class: "w-full min-w-0",
							reset: "",
							"onUpdate:modelValue": select
						}, {
							default: withCtx(({ open: chooseFile }) => [createVNode(_component_UButton, {
								type: "button",
								color: "neutral",
								variant: "outline",
								size: "lg",
								block: "",
								icon: "i-lucide-upload",
								disabled: __props.disabled,
								"aria-label": `${__props.label}: Choose image`,
								"aria-invalid": !!unref(localError),
								"aria-describedby": unref(localError) ? unref(errorId) : void 0,
								onClick: ($event) => chooseFile()
							}, {
								default: withCtx(() => [createTextVNode("Choose image")]),
								_: 1
							}, 8, [
								"disabled",
								"aria-label",
								"aria-invalid",
								"aria-describedby",
								"onClick"
							])]),
							_: 1
						}, 8, [
							"model-value",
							"name",
							"disabled"
						]),
						createVNode("span", {
							id: unref(errorId),
							class: "sr-only",
							role: "status",
							"aria-live": "polite"
						}, toDisplayString(unref(localError)), 9, ["id"]),
						unref(preview) || file.value || removed.value ? (openBlock(), createBlock("div", {
							key: 1,
							class: "image-actions"
						}, [unref(preview) ? (openBlock(), createBlock(_component_UButton, {
							key: 0,
							type: "button",
							color: "neutral",
							variant: "ghost",
							size: "sm",
							icon: "i-lucide-trash-2",
							disabled: __props.disabled,
							"aria-label": `${__props.label}: Remove image`,
							onClick: remove
						}, {
							default: withCtx(() => [createTextVNode("Remove")]),
							_: 1
						}, 8, ["disabled", "aria-label"])) : createCommentVNode("", true), file.value || removed.value ? (openBlock(), createBlock(_component_UButton, {
							key: 1,
							type: "button",
							color: "neutral",
							variant: "ghost",
							size: "sm",
							icon: "i-lucide-undo-2",
							disabled: __props.disabled,
							onClick: undo
						}, {
							default: withCtx(() => [createTextVNode("Restore")]),
							_: 1
						}, 8, ["disabled"])) : createCommentVNode("", true)])) : createCommentVNode("", true)
					])];
				}),
				_: 1
			}, _parent));
		};
	}
});
// app/components/SettingsImageInput.vue
var _sfc_setup$1 = SettingsImageInput_vue_vue_type_script_setup_true_lang_default.setup;
SettingsImageInput_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SettingsImageInput.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var SettingsImageInput_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(SettingsImageInput_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-393fb65e"]]), { __name: "SettingsImageInput" });
// app/pages/settings.vue?vue&type=script&setup=true&lang.ts
var settings_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "settings",
	__ssrInlineRender: true,
	setup(__props) {
		useHead({ title: "Settings — RoghtiaSystem" });
		const profile = useDoctorInformation();
		const auth = useAuth();
		const toast = useToast();
		const doctorForm = useTemplateRef("doctorForm");
		const loading = ref(true);
		const loaded = ref(false);
		const pending = ref(false);
		const resetOpen = ref(false);
		const pinOpen = ref(false);
		const serviceMessage = ref("");
		const revision = ref(0);
		const fields = [
			{
				name: "doctorNamePashto",
				label: "Doctor name (Pashto)",
				max: 160,
				direction: "auto"
			},
			{
				name: "doctorNameEnglish",
				label: "Doctor name (English)",
				max: 160,
				direction: "ltr"
			},
			{
				name: "doctorProfessionPashto",
				label: "Doctor profession (Pashto)",
				max: 200,
				direction: "auto",
				multiline: true
			},
			{
				name: "doctorProfessionEnglish",
				label: "Doctor profession (English)",
				max: 200,
				direction: "ltr",
				multiline: true
			},
			{
				name: "hospitalNamePashto",
				label: "Hospital name (Pashto)",
				max: 200,
				direction: "auto"
			},
			{
				name: "hospitalAddress",
				label: "Hospital address",
				max: 300,
				direction: "auto"
			},
			{
				name: "hospitalPhoneNumbers",
				label: "Hospital phone number(s)",
				max: 300,
				direction: "ltr"
			}
		];
		const imageFields = [
			{
				name: "doctorPhoto",
				label: "Doctor photo",
				portrait: true
			},
			{
				name: "doctorLogo",
				label: "Doctor logo"
			},
			{
				name: "hospitalLogo",
				label: "Hospital logo"
			}
		];
		const form = reactive({
			doctorNameEnglish: "",
			doctorNamePashto: "",
			doctorProfessionPashto: "",
			doctorProfessionEnglish: "",
			hospitalNamePashto: "",
			hospitalAddress: "",
			hospitalPhoneNumbers: ""
		});
		const baseline = ref(JSON.stringify(form));
		const images = reactive({
			doctorPhoto: {
				file: null,
				removed: false
			},
			doctorLogo: {
				file: null,
				removed: false
			},
			hospitalLogo: {
				file: null,
				removed: false
			}
		});
		const dirty = computed(() => JSON.stringify(form) !== baseline.value || imageFields.some((field) => !!images[field.name].file || images[field.name].removed));
		const busy = computed(() => loading.value || pending.value);
		const canReset = computed(() => loaded.value && !busy.value && (profile.information.value?.exists || dirty.value));
		function populate(value) {
			for (const field of fields) form[field.name] = value?.[field.name] || "";
			for (const field of imageFields) Object.assign(images[field.name], {
				file: null,
				removed: false
			});
			baseline.value = JSON.stringify(form);
			revision.value++;
			doctorForm.value?.clear();
		}
		function validate(state) {
			const errors = [];
			for (const field of fields) if (state[field.name].trim().length > field.max) errors.push({
				name: field.name,
				message: `This field must not exceed ${field.max === 160 ? "160" : "200"} characters.`
			});
			for (const field of imageFields) {
				const file = images[field.name].file;
				if (!file) continue;
				if (![
					"image/png",
					"image/jpeg",
					"image/webp"
				].includes(file.type)) errors.push({
					name: field.name,
					message: "Only PNG, JPEG and WebP images are accepted."
				});
				if (file.size === 0 || file.size > 2097152) errors.push({
					name: field.name,
					message: "Image must not be empty or larger than 2 MB."
				});
			}
			return errors;
		}
		function focusError(event) {
			if (event.errors[0]?.id) (void 0).getElementById(event.errors[0].id)?.focus();
		}
		async function showError(error, title, notify = true) {
			const failure = error;
			const code = failure.data?.data?.code || failure.data?.code;
			const status = failure.statusCode || failure.status;
			const messages = {
				INVALID_IMAGE: "Invalid image. Select a valid PNG, JPEG or WebP image.",
				IMAGE_TOO_LARGE: "Each image must not exceed 2 MB.",
				VALIDATION_ERROR: "Check the information and images, then try again.",
				DOCTOR_INFORMATION_EXISTS: "Your information has already been saved. Refresh the page and try again.",
				NOT_FOUND: "Information not found. Refresh the page and try again.",
				TOO_MANY_REQUESTS: "Too many attempts. Please try again later.",
				INVALID_ORIGIN: "Request rejected. Refresh the page and try again."
			};
			if (status === 401) {
				toast.add({
					title: "Sign in again",
					description: "Your session has expired. Please sign in again.",
					color: "warning"
				});
				resetOpen.value = false;
				await auth.refresh();
				await navigateTo("/login");
				return;
			}
			serviceMessage.value = messages[code || ""] || (status === 429 ? messages.TOO_MANY_REQUESTS : "Unable to connect to the server. Please try again.");
			if (notify) toast.add({
				title,
				description: serviceMessage.value,
				color: "error"
			});
		}
		async function loadInformation() {
			if (pending.value) return;
			loading.value = true;
			loaded.value = false;
			serviceMessage.value = "";
			try {
				populate(await profile.load(true));
				loaded.value = true;
			} catch (error) {
				await showError(error, "Unable to load information", false);
			} finally {
				loading.value = false;
			}
		}
		async function save() {
			if (busy.value || !loaded.value || !dirty.value) return;
			pending.value = true;
			serviceMessage.value = "";
			try {
				const body = new FormData();
				for (const field of fields) body.set(field.name, form[field.name].trim());
				body.set("printOnA5", String(profile.information.value?.printOnA5 ?? false));
				body.set("printGrayscale", String(profile.information.value?.printGrayscale ?? false));
				for (const field of imageFields) {
					const image = images[field.name];
					if (image.file) body.set(field.name, image.file);
					const removeField = `remove${field.name[0].toUpperCase()}${field.name.slice(1)}`;
					body.set(removeField, String(image.removed));
				}
				populate(await profile.save(body));
				toast.add({
					title: "Information saved",
					description: "Your doctor information has been updated.",
					color: "success",
					icon: "i-lucide-circle-check"
				});
			} catch (error) {
				await showError(error, "Information could not be saved");
			} finally {
				pending.value = false;
			}
		}
		async function reset() {
			if (!canReset.value) return;
			pending.value = true;
			serviceMessage.value = "";
			try {
				populate(await profile.reset());
				resetOpen.value = false;
				toast.add({
					title: "Defaults restored",
					description: "Your doctor information and images have been cleared.",
					color: "success"
				});
			} catch (error) {
				await showError(error, "Unable to restore defaults");
			} finally {
				pending.value = false;
			}
		}
		function confirmReset() {
			serviceMessage.value = "";
			resetOpen.value = true;
		}
		if (profile.information.value) {
			populate(profile.information.value);
			loaded.value = true;
			loading.value = false;
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UIcon = _sfc_main$5;
			const _component_UButton = _sfc_main$1;
			const _component_UForm = _sfc_main$2;
			const _component_UFormField = _sfc_main$3;
			const _component_UTextarea = _sfc_main$4;
			const _component_UInput = _sfc_main$6;
			const _component_SettingsImageInput = SettingsImageInput_default;
			const _component_UModal = _sfc_main$7;
			const _component_PINCodeModal = PINCodeModal_default;
			_push(`<section${ssrRenderAttrs(mergeProps({
				class: "settings-page",
				"aria-labelledby": "settings-title"
			}, _attrs))} data-v-c27da573><div class="page-heading" data-v-c27da573><div data-v-c27da573><div class="eyebrow" data-v-c27da573><span data-v-c27da573></span> Your account, your information</div><h1 id="settings-title" data-v-c27da573>Settings</h1><p data-v-c27da573>Manage doctor and hospital information here.</p></div></div><section class="panel doctor-settings" aria-labelledby="doctor-information-title"${ssrRenderAttr("aria-busy", unref(busy))} data-v-c27da573><header class="settings-section-heading" data-v-c27da573><span class="settings-section-icon" aria-hidden="true" data-v-c27da573>`);
			_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-stethoscope" }, null, _parent));
			_push(`</span><div data-v-c27da573><h2 id="doctor-information-title" data-v-c27da573>Doctor information</h2><p data-v-c27da573>Save names, profession and images for your account.</p></div></header>`);
			if (unref(loading)) {
				_push(`<div class="settings-state" role="status" data-v-c27da573>`);
				_push(ssrRenderComponent(_component_UIcon, {
					name: "i-lucide-loader-circle",
					class: "animate-spin",
					"aria-hidden": "true"
				}, null, _parent));
				_push(`<p data-v-c27da573>Loading information…</p></div>`);
			} else if (!unref(loaded)) {
				_push(`<div class="settings-state" data-v-c27da573>`);
				_push(ssrRenderComponent(_component_UIcon, {
					name: "i-lucide-cloud-off",
					"aria-hidden": "true"
				}, null, _parent));
				_push(`<p role="alert" data-v-c27da573>${ssrInterpolate(unref(serviceMessage) || "Unable to load information.")}</p>`);
				_push(ssrRenderComponent(_component_UButton, {
					type: "button",
					color: "neutral",
					variant: "outline",
					size: "lg",
					icon: "i-lucide-refresh-cw",
					onClick: loadInformation
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Try again`);
						else return [createTextVNode("Try again")];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else _push(ssrRenderComponent(_component_UForm, {
				ref_key: "doctorForm",
				ref: doctorForm,
				state: unref(form),
				validate,
				disabled: unref(busy),
				novalidate: "",
				class: "doctor-form",
				onSubmit: save,
				onError: focusError
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="settings-text-grid" data-v-c27da573${_scopeId}><!--[-->`);
						ssrRenderList$2(fields, (field) => {
							_push(ssrRenderComponent(_component_UFormField, {
								key: field.name,
								label: field.label,
								name: field.name,
								size: "lg",
								class: { "full-width": field.name.startsWith("hospital") || field.multiline },
								ui: { label: "text-base" }
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) {
										if (field.multiline) _push(ssrRenderComponent(_component_UTextarea, {
											modelValue: unref(form)[field.name],
											"onUpdate:modelValue": ($event) => unref(form)[field.name] = $event,
											name: field.name,
											dir: field.direction,
											maxlength: field.max,
											placeholder: field.label,
											spellcheck: false,
											rows: 3,
											class: "w-full",
											ui: { base: "settings-input" }
										}, null, _parent, _scopeId));
										else _push(ssrRenderComponent(_component_UInput, {
											modelValue: unref(form)[field.name],
											"onUpdate:modelValue": ($event) => unref(form)[field.name] = $event,
											name: field.name,
											dir: field.direction,
											maxlength: field.max,
											placeholder: field.name === "hospitalPhoneNumbers" ? "Separate multiple phone numbers with commas" : field.label,
											spellcheck: false,
											autocomplete: "off",
											size: "xl",
											class: "w-full",
											ui: { base: "settings-input" }
										}, null, _parent, _scopeId));
									} else return [field.multiline ? (openBlock(), createBlock(_component_UTextarea, {
										key: 0,
										modelValue: unref(form)[field.name],
										"onUpdate:modelValue": ($event) => unref(form)[field.name] = $event,
										name: field.name,
										dir: field.direction,
										maxlength: field.max,
										placeholder: field.label,
										spellcheck: false,
										rows: 3,
										class: "w-full",
										ui: { base: "settings-input" }
									}, null, 8, [
										"modelValue",
										"onUpdate:modelValue",
										"name",
										"dir",
										"maxlength",
										"placeholder"
									])) : (openBlock(), createBlock(_component_UInput, {
										key: 1,
										modelValue: unref(form)[field.name],
										"onUpdate:modelValue": ($event) => unref(form)[field.name] = $event,
										name: field.name,
										dir: field.direction,
										maxlength: field.max,
										placeholder: field.name === "hospitalPhoneNumbers" ? "Separate multiple phone numbers with commas" : field.label,
										spellcheck: false,
										autocomplete: "off",
										size: "xl",
										class: "w-full",
										ui: { base: "settings-input" }
									}, null, 8, [
										"modelValue",
										"onUpdate:modelValue",
										"name",
										"dir",
										"maxlength",
										"placeholder"
									]))];
								}),
								_: 2
							}, _parent, _scopeId));
						});
						_push(`<!--]--></div><div class="settings-images-section" data-v-c27da573${_scopeId}><h3 data-v-c27da573${_scopeId}>Photos and logos</h3><p class="settings-section-note" data-v-c27da573${_scopeId}>Image changes are applied when you save.</p><div class="settings-images-grid" data-v-c27da573${_scopeId}><!--[-->`);
						ssrRenderList$2(imageFields, (field) => {
							_push(ssrRenderComponent(_component_SettingsImageInput, {
								key: `${unref(revision)}-${field.name}`,
								modelValue: unref(images)[field.name].file,
								"onUpdate:modelValue": ($event) => unref(images)[field.name].file = $event,
								removed: unref(images)[field.name].removed,
								"onUpdate:removed": ($event) => unref(images)[field.name].removed = $event,
								name: field.name,
								label: field.label,
								current: unref(profile).information.value?.[field.name],
								portrait: field.portrait,
								disabled: unref(busy)
							}, null, _parent, _scopeId));
						});
						_push(`<!--]--></div></div>`);
						if (unref(serviceMessage)) _push(`<p class="settings-message" role="alert" data-v-c27da573${_scopeId}>${ssrInterpolate(unref(serviceMessage))}</p>`);
						else _push(`<!---->`);
						_push(`<footer class="settings-actions" data-v-c27da573${_scopeId}><span class="settings-save-state" aria-live="polite" data-v-c27da573${_scopeId}>`);
						_push(ssrRenderComponent(_component_UIcon, {
							name: unref(dirty) ? "i-lucide-pencil-line" : "i-lucide-circle-check",
							"aria-hidden": "true"
						}, null, _parent, _scopeId));
						_push(`${ssrInterpolate(unref(dirty) ? "You have unsaved changes" : "All information is up to date")}</span><div class="settings-buttons" data-v-c27da573${_scopeId}>`);
						_push(ssrRenderComponent(_component_UButton, {
							type: "button",
							color: "neutral",
							variant: "outline",
							size: "lg",
							icon: "i-lucide-rotate-ccw",
							disabled: !unref(canReset),
							onClick: confirmReset
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Reset`);
								else return [createTextVNode("Reset")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_component_UButton, {
							type: "submit",
							size: "lg",
							icon: "i-lucide-save",
							loading: unref(pending) && !unref(resetOpen),
							disabled: unref(busy) || !unref(dirty)
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Save changes`);
								else return [createTextVNode("Save changes")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></footer>`);
					} else return [
						createVNode("div", { class: "settings-text-grid" }, [(openBlock(), createBlock(Fragment, null, renderList$2(fields, (field) => {
							return createVNode(_component_UFormField, {
								key: field.name,
								label: field.label,
								name: field.name,
								size: "lg",
								class: { "full-width": field.name.startsWith("hospital") || field.multiline },
								ui: { label: "text-base" }
							}, {
								default: withCtx(() => [field.multiline ? (openBlock(), createBlock(_component_UTextarea, {
									key: 0,
									modelValue: unref(form)[field.name],
									"onUpdate:modelValue": ($event) => unref(form)[field.name] = $event,
									name: field.name,
									dir: field.direction,
									maxlength: field.max,
									placeholder: field.label,
									spellcheck: false,
									rows: 3,
									class: "w-full",
									ui: { base: "settings-input" }
								}, null, 8, [
									"modelValue",
									"onUpdate:modelValue",
									"name",
									"dir",
									"maxlength",
									"placeholder"
								])) : (openBlock(), createBlock(_component_UInput, {
									key: 1,
									modelValue: unref(form)[field.name],
									"onUpdate:modelValue": ($event) => unref(form)[field.name] = $event,
									name: field.name,
									dir: field.direction,
									maxlength: field.max,
									placeholder: field.name === "hospitalPhoneNumbers" ? "Separate multiple phone numbers with commas" : field.label,
									spellcheck: false,
									autocomplete: "off",
									size: "xl",
									class: "w-full",
									ui: { base: "settings-input" }
								}, null, 8, [
									"modelValue",
									"onUpdate:modelValue",
									"name",
									"dir",
									"maxlength",
									"placeholder"
								]))]),
								_: 2
							}, 1032, [
								"label",
								"name",
								"class"
							]);
						}), 64))]),
						createVNode("div", { class: "settings-images-section" }, [
							createVNode("h3", null, "Photos and logos"),
							createVNode("p", { class: "settings-section-note" }, "Image changes are applied when you save."),
							createVNode("div", { class: "settings-images-grid" }, [(openBlock(), createBlock(Fragment, null, renderList$2(imageFields, (field) => {
								return createVNode(_component_SettingsImageInput, {
									key: `${unref(revision)}-${field.name}`,
									modelValue: unref(images)[field.name].file,
									"onUpdate:modelValue": ($event) => unref(images)[field.name].file = $event,
									removed: unref(images)[field.name].removed,
									"onUpdate:removed": ($event) => unref(images)[field.name].removed = $event,
									name: field.name,
									label: field.label,
									current: unref(profile).information.value?.[field.name],
									portrait: field.portrait,
									disabled: unref(busy)
								}, null, 8, [
									"modelValue",
									"onUpdate:modelValue",
									"removed",
									"onUpdate:removed",
									"name",
									"label",
									"current",
									"portrait",
									"disabled"
								]);
							}), 64))])
						]),
						unref(serviceMessage) ? (openBlock(), createBlock("p", {
							key: 0,
							class: "settings-message",
							role: "alert"
						}, toDisplayString(unref(serviceMessage)), 1)) : createCommentVNode("", true),
						createVNode("footer", { class: "settings-actions" }, [createVNode("span", {
							class: "settings-save-state",
							"aria-live": "polite"
						}, [createVNode(_component_UIcon, {
							name: unref(dirty) ? "i-lucide-pencil-line" : "i-lucide-circle-check",
							"aria-hidden": "true"
						}, null, 8, ["name"]), createTextVNode(toDisplayString(unref(dirty) ? "You have unsaved changes" : "All information is up to date"), 1)]), createVNode("div", { class: "settings-buttons" }, [createVNode(_component_UButton, {
							type: "button",
							color: "neutral",
							variant: "outline",
							size: "lg",
							icon: "i-lucide-rotate-ccw",
							disabled: !unref(canReset),
							onClick: confirmReset
						}, {
							default: withCtx(() => [createTextVNode("Reset")]),
							_: 1
						}, 8, ["disabled"]), createVNode(_component_UButton, {
							type: "submit",
							size: "lg",
							icon: "i-lucide-save",
							loading: unref(pending) && !unref(resetOpen),
							disabled: unref(busy) || !unref(dirty)
						}, {
							default: withCtx(() => [createTextVNode("Save changes")]),
							_: 1
						}, 8, ["loading", "disabled"])])])
					];
				}),
				_: 1
			}, _parent));
			_push(`</section>`);
			_push(ssrRenderComponent(_component_UModal, {
				open: unref(resetOpen),
				title: "Restore defaults",
				description: "Your saved doctor information and all three images will be cleared. This action cannot be undone.",
				dismissible: !unref(pending),
				close: !unref(pending),
				dir: "ltr",
				ui: {
					content: "min-w-0",
					wrapper: "min-w-0 pe-8",
					body: "min-w-0 min-h-0",
					title: "text-lg break-words",
					description: "text-base leading-8 break-words"
				},
				"onUpdate:open": (value) => {
					if (!unref(pending)) resetOpen.value = value;
				}
			}, {
				body: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<p data-v-c27da573${_scopeId}>Reset all information to defaults?</p>`);
						if (unref(serviceMessage)) _push(`<p class="settings-message" role="alert" data-v-c27da573${_scopeId}>${ssrInterpolate(unref(serviceMessage))}</p>`);
						else _push(`<!---->`);
					} else return [createVNode("p", null, "Reset all information to defaults?"), unref(serviceMessage) ? (openBlock(), createBlock("p", {
						key: 0,
						class: "settings-message",
						role: "alert"
					}, toDisplayString(unref(serviceMessage)), 1)) : createCommentVNode("", true)];
				}),
				footer: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="settings-reset-actions" data-v-c27da573${_scopeId}>`);
						_push(ssrRenderComponent(_component_UButton, {
							type: "button",
							size: "lg",
							icon: "i-lucide-rotate-ccw",
							loading: unref(pending),
							disabled: unref(pending),
							onClick: reset
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Yes, reset`);
								else return [createTextVNode("Yes, reset")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_component_UButton, {
							type: "button",
							size: "lg",
							color: "neutral",
							variant: "outline",
							disabled: unref(pending),
							onClick: ($event) => resetOpen.value = false
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Cancel`);
								else return [createTextVNode("Cancel")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div>`);
					} else return [createVNode("div", { class: "settings-reset-actions" }, [createVNode(_component_UButton, {
						type: "button",
						size: "lg",
						icon: "i-lucide-rotate-ccw",
						loading: unref(pending),
						disabled: unref(pending),
						onClick: reset
					}, {
						default: withCtx(() => [createTextVNode("Yes, reset")]),
						_: 1
					}, 8, ["loading", "disabled"]), createVNode(_component_UButton, {
						type: "button",
						size: "lg",
						color: "neutral",
						variant: "outline",
						disabled: unref(pending),
						onClick: ($event) => resetOpen.value = false
					}, {
						default: withCtx(() => [createTextVNode("Cancel")]),
						_: 1
					}, 8, ["disabled", "onClick"])])];
				}),
				_: 1
			}, _parent));
			_push(`<section class="panel pin-settings" aria-labelledby="pin-settings-title" data-v-c27da573><header class="settings-section-heading" data-v-c27da573><span class="settings-section-icon" aria-hidden="true" data-v-c27da573>`);
			_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-key-round" }, null, _parent));
			_push(`</span><div data-v-c27da573><h2 id="pin-settings-title" data-v-c27da573>Password recovery PIN</h2><p data-v-c27da573>Choose a recovery PIN or update it. Existing accounts can also set a PIN here.</p></div></header><div class="pin-settings-action" data-v-c27da573>`);
			_push(ssrRenderComponent(_component_UButton, {
				type: "button",
				size: "lg",
				icon: "i-lucide-shield-check",
				onClick: ($event) => pinOpen.value = true
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Set or change PIN`);
					else return [createTextVNode("Set or change PIN")];
				}),
				_: 1
			}, _parent));
			_push(`</div></section>`);
			_push(ssrRenderComponent(_component_PINCodeModal, {
				open: unref(pinOpen),
				"onUpdate:open": ($event) => isRef(pinOpen) ? pinOpen.value = $event : null
			}, null, _parent));
			_push(`</section>`);
		};
	}
});
// app/pages/settings.vue
var _sfc_setup = settings_vue_vue_type_script_setup_true_lang_default.setup;
settings_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var settings_default = /*#__PURE__*/ _plugin_vue_export_helper_default(settings_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-c27da573"]]);

export { settings_default as default };;globalThis.__timing__.logEnd('Load chunks/build/settings-CZDKPpUH');
//# sourceMappingURL=settings-CZDKPpUH.mjs.map
