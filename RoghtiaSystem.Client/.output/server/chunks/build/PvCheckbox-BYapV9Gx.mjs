globalThis.__timing__.logStart('Load chunks/build/PvCheckbox-BYapV9Gx');import { defineComponent, useModel, mergeProps, unref, mergeModels, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import script from './checkbox-DFdV5SYi.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PvCheckbox",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    label: {},
    name: {},
    disabled: { type: Boolean }
  }, {
    "modelValue": { type: Boolean },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({ class: "pv-check" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(script), {
        modelValue: model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        name: __props.name,
        disabled: __props.disabled,
        binary: ""
      }, null, _parent));
      if (__props.label) {
        _push(`<span>${ssrInterpolate(__props.label)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PvCheckbox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_8 = Object.assign(_sfc_main, { __name: "PvCheckbox" });

export { __nuxt_component_8 as _ };;globalThis.__timing__.logEnd('Load chunks/build/PvCheckbox-BYapV9Gx');
//# sourceMappingURL=PvCheckbox-BYapV9Gx.mjs.map
