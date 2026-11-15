globalThis.__timing__.logStart('Load chunks/build/PvForm-Cood2pqT');import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PvForm",
  __ssrInlineRender: true,
  props: {
    state: {},
    validate: { type: Function },
    disabled: { type: Boolean }
  },
  emits: ["submit", "error"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const manualErrors = ref([]);
    function clear() {
      manualErrors.value = [];
    }
    function setErrors(errors) {
      manualErrors.value = errors;
    }
    function getErrors(name) {
      return name ? manualErrors.value.filter((error) => error.name === name || error.id === name) : manualErrors.value;
    }
    __expose({ clear, setErrors, getErrors });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ "aria-disabled": __props.disabled }, _attrs))}><fieldset${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""} class="pv-form-fieldset">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</fieldset></form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PvForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "PvForm" });

export { __nuxt_component_1 as _ };;globalThis.__timing__.logEnd('Load chunks/build/PvForm-Cood2pqT');
//# sourceMappingURL=PvForm-Cood2pqT.mjs.map
