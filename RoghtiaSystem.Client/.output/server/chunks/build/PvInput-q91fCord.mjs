globalThis.__timing__.logStart('Load chunks/build/PvInput-q91fCord');import { a as __nuxt_component_1 } from './PvButton-5I-3PpYG.mjs';
import { defineComponent, useModel, computed, unref, mergeProps, withCtx, createVNode, isRef, openBlock, createBlock, createCommentVNode, renderSlot, mergeModels, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import script$2 from './inputtext-BSmculv6.mjs';
import script from './iconfield-15oSaR08.mjs';
import script$1 from './inputicon-CGOzj3pd.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "PvInput",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    icon: {},
    loading: { type: Boolean }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const textModel = computed({ get: () => model.value == null ? "" : String(model.value), set: (value) => {
      model.value = value ?? "";
    } });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PvIcon = __nuxt_component_1;
      _push(ssrRenderComponent(unref(script), mergeProps({ class: "pv-input-wrap" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.icon) {
              _push2(ssrRenderComponent(unref(script$1), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_PvIcon, { name: __props.icon }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_PvIcon, { name: __props.icon }, null, 8, ["name"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(script$2), mergeProps({
              modelValue: unref(textModel),
              "onUpdate:modelValue": ($event) => isRef(textModel) ? textModel.value = $event : null
            }, _ctx.$attrs, { class: "pv-input" }), null, _parent2, _scopeId));
            if (_ctx.$slots.trailing) {
              _push2(`<span class="pv-input-trailing"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "trailing", {}, null, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else if (__props.loading) {
              _push2(ssrRenderComponent(_component_PvIcon, {
                name: "i-lucide-loader-circle",
                class: "animate-spin"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.icon ? (openBlock(), createBlock(unref(script$1), { key: 0 }, {
                default: withCtx(() => [
                  createVNode(_component_PvIcon, { name: __props.icon }, null, 8, ["name"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(unref(script$2), mergeProps({
                modelValue: unref(textModel),
                "onUpdate:modelValue": ($event) => isRef(textModel) ? textModel.value = $event : null
              }, _ctx.$attrs, { class: "pv-input" }), null, 16, ["modelValue", "onUpdate:modelValue"]),
              _ctx.$slots.trailing ? (openBlock(), createBlock("span", {
                key: 1,
                class: "pv-input-trailing"
              }, [
                renderSlot(_ctx.$slots, "trailing")
              ])) : __props.loading ? (openBlock(), createBlock(_component_PvIcon, {
                key: 2,
                name: "i-lucide-loader-circle",
                class: "animate-spin"
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PvInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main, { __name: "PvInput" });

export { __nuxt_component_3 as _ };;globalThis.__timing__.logEnd('Load chunks/build/PvInput-q91fCord');
//# sourceMappingURL=PvInput-q91fCord.mjs.map
