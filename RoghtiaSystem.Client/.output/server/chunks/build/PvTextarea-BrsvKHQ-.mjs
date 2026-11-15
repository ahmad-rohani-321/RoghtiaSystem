globalThis.__timing__.logStart('Load chunks/build/PvTextarea-BrsvKHQ-');import { defineComponent, useModel, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import script from './textarea-B_UERJje.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "PvTextarea",
  __ssrInlineRender: true,
  props: {
    "modelValue": {},
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(script), mergeProps({
        modelValue: model.value,
        "onUpdate:modelValue": ($event) => model.value = $event
      }, _ctx.$attrs, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PvTextarea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main, { __name: "PvTextarea" });

export { __nuxt_component_6 as _ };;globalThis.__timing__.logEnd('Load chunks/build/PvTextarea-BrsvKHQ-');
//# sourceMappingURL=PvTextarea-BrsvKHQ-.mjs.map
