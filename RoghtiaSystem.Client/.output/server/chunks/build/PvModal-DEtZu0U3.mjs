globalThis.__timing__.logStart('Load chunks/build/PvModal-DEtZu0U3');import { defineComponent, useModel, unref, mergeProps, createSlots, withCtx, openBlock, createBlock, toDisplayString, createCommentVNode, renderSlot, mergeModels, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { g as script$2 } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PvModal",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    title: {},
    description: {},
    dismissible: { type: Boolean },
    close: { type: Boolean }
  }, {
    "open": { type: Boolean, ...{ default: false } },
    "openModifiers": {}
  }),
  emits: ["update:open"],
  setup(__props) {
    const open = useModel(__props, "open");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(script$2), mergeProps({
        visible: open.value,
        "onUpdate:visible": ($event) => open.value = $event,
        modal: "",
        header: __props.title,
        closable: __props.close !== false,
        "dismissable-mask": __props.dismissible !== false,
        class: "pv-dialog"
      }, _attrs), createSlots({
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.description) {
              _push2(`<p class="pv-dialog-description"${_scopeId}>${ssrInterpolate(__props.description)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "body", {}, () => {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              __props.description ? (openBlock(), createBlock("p", {
                key: 0,
                class: "pv-dialog-description"
              }, toDisplayString(__props.description), 1)) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "body", {}, () => [
                renderSlot(_ctx.$slots, "default")
              ])
            ];
          }
        }),
        _: 2
      }, [
        _ctx.$slots.footer ? {
          name: "footer",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "footer")
              ];
            }
          }),
          key: "0"
        } : void 0
      ]), _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PvModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "PvModal" });

export { __nuxt_component_0 as _ };;globalThis.__timing__.logEnd('Load chunks/build/PvModal-DEtZu0U3');
//# sourceMappingURL=PvModal-DEtZu0U3.mjs.map
