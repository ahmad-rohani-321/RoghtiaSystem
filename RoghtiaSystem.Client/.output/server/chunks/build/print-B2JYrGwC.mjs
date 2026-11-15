globalThis.__timing__.logStart('Load chunks/build/print-B2JYrGwC');import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-8jYXDYbZ.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "print-layout" }, _attrs))} data-v-3eb1498a>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/print.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const print = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3eb1498a"]]);

export { print as default };;globalThis.__timing__.logEnd('Load chunks/build/print-B2JYrGwC');
//# sourceMappingURL=print-B2JYrGwC.mjs.map
