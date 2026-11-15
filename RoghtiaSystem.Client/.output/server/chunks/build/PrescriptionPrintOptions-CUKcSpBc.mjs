globalThis.__timing__.logStart('Load chunks/build/PrescriptionPrintOptions-CUKcSpBc');import { _ as __nuxt_component_8 } from './PvCheckbox-BYapV9Gx.mjs';
import { defineComponent, useModel, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-8jYXDYbZ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PrescriptionPrintOptions",
  __ssrInlineRender: true,
  props: {
    "a5": { type: Boolean, ...{ default: false } },
    "a5Modifiers": {},
    "grayscale": { type: Boolean, ...{ default: false } },
    "grayscaleModifiers": {}
  },
  emits: ["update:a5", "update:grayscale"],
  setup(__props) {
    const a5 = useModel(__props, "a5");
    const grayscale = useModel(__props, "grayscale");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PvCheckbox = __nuxt_component_8;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "prescription-print-options",
        role: "group",
        "aria-label": "Prescription print options"
      }, _attrs))} data-v-fb5298ea>`);
      _push(ssrRenderComponent(_component_PvCheckbox, {
        modelValue: a5.value,
        "onUpdate:modelValue": ($event) => a5.value = $event,
        label: "A5"
      }, null, _parent));
      _push(ssrRenderComponent(_component_PvCheckbox, {
        modelValue: grayscale.value,
        "onUpdate:modelValue": ($event) => grayscale.value = $event,
        label: "Grayscale"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PrescriptionPrintOptions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-fb5298ea"]]), { __name: "PrescriptionPrintOptions" });

export { __nuxt_component_2 as _ };;globalThis.__timing__.logEnd('Load chunks/build/PrescriptionPrintOptions-CUKcSpBc');
//# sourceMappingURL=PrescriptionPrintOptions-CUKcSpBc.mjs.map
