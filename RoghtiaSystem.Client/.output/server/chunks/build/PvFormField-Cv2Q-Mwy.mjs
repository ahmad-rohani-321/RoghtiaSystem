globalThis.__timing__.logStart('Load chunks/build/PvFormField-Cv2Q-Mwy');import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PvFormField",
  __ssrInlineRender: true,
  props: {
    label: {},
    name: {},
    required: { type: Boolean },
    help: {},
    hint: {},
    error: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pv-field" }, _attrs))}>`);
      if (__props.label) {
        _push(`<label${ssrRenderAttr("for", __props.name)}>${ssrInterpolate(__props.label)}`);
        if (__props.required) {
          _push(`<span aria-hidden="true"> *</span>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.hint) {
          _push(`<small>${ssrInterpolate(__props.hint)}</small>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      if (__props.error) {
        _push(`<small class="pv-field-error" role="alert">${ssrInterpolate(__props.error)}</small>`);
      } else if (__props.help) {
        _push(`<small class="pv-field-help">${ssrInterpolate(__props.help)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PvFormField.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main, { __name: "PvFormField" });

export { __nuxt_component_2 as _ };;globalThis.__timing__.logEnd('Load chunks/build/PvFormField-Cv2Q-Mwy');
//# sourceMappingURL=PvFormField-Cv2Q-Mwy.mjs.map
