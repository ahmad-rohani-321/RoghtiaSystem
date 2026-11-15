globalThis.__timing__.logStart('Load chunks/build/PvButton-5I-3PpYG');import { _ as __nuxt_component_0 } from './nuxt-link-Ca5hbmYf.mjs';
import { defineComponent, computed, createVNode, resolveDynamicComponent, unref, mergeProps, withCtx, openBlock, createBlock, createCommentVNode, renderSlot, createSlots, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import * as LucideIcons from 'lucide-vue-next';
import { s as script$5 } from './server.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PvIcon",
  __ssrInlineRender: true,
  props: {
    name: {}
  },
  setup(__props) {
    const props = __props;
    const icon = computed(() => {
      const key = props.name.replace(/^i-lucide-/, "").split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join("");
      return LucideIcons[key] || LucideIcons.Circle;
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(icon)), mergeProps({
        class: "pv-icon",
        "aria-hidden": "true"
      }, _attrs), null), _parent);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PvIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "PvIcon" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PvButton",
  __ssrInlineRender: true,
  props: {
    to: {},
    icon: {},
    trailingIcon: {},
    color: {},
    variant: {},
    block: { type: Boolean },
    loading: { type: Boolean },
    disabled: { type: Boolean },
    type: { default: "button" },
    size: {}
  },
  setup(__props) {
    const props = __props;
    const severity = computed(() => props.color === "error" ? "danger" : props.color === "warning" ? "warn" : props.color === "success" ? "success" : props.color === "neutral" ? "secondary" : void 0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_PvIcon = __nuxt_component_1;
      if (__props.to) {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          to: __props.to,
          class: ["p-button p-component pv-button", [{ "p-button-outlined": __props.variant === "outline", "p-button-text": __props.variant === "ghost", "p-button-fluid": __props.block, "p-button-sm": __props.size === "sm", "p-button-lg": __props.size === "lg" || __props.size === "xl", "p-disabled": __props.disabled }, unref(severity) && `p-button-${unref(severity)}`]],
          "aria-disabled": __props.disabled
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (__props.icon) {
                _push2(ssrRenderComponent(_component_PvIcon, { name: __props.icon }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span class="p-button-label"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</span>`);
              if (__props.trailingIcon) {
                _push2(ssrRenderComponent(_component_PvIcon, { name: __props.trailingIcon }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                __props.icon ? (openBlock(), createBlock(_component_PvIcon, {
                  key: 0,
                  name: __props.icon
                }, null, 8, ["name"])) : createCommentVNode("", true),
                createVNode("span", { class: "p-button-label" }, [
                  renderSlot(_ctx.$slots, "default")
                ]),
                __props.trailingIcon ? (openBlock(), createBlock(_component_PvIcon, {
                  key: 1,
                  name: __props.trailingIcon
                }, null, 8, ["name"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(ssrRenderComponent(unref(script$5), mergeProps({
          type: __props.type,
          severity: unref(severity),
          outlined: __props.variant === "outline",
          text: __props.variant === "ghost" || __props.variant === "link",
          fluid: __props.block,
          loading: __props.loading,
          disabled: __props.disabled,
          size: __props.size === "sm" ? "small" : __props.size === "lg" || __props.size === "xl" ? "large" : void 0,
          class: "pv-button"
        }, _attrs), createSlots({
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              if (__props.trailingIcon) {
                _push2(ssrRenderComponent(_component_PvIcon, { name: __props.trailingIcon }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                renderSlot(_ctx.$slots, "default"),
                __props.trailingIcon ? (openBlock(), createBlock(_component_PvIcon, {
                  key: 0,
                  name: __props.trailingIcon
                }, null, 8, ["name"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, [
          __props.icon ? {
            name: "icon",
            fn: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_PvIcon, { name: __props.icon }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_PvIcon, { name: __props.icon }, null, 8, ["name"])
                ];
              }
            }),
            key: "0"
          } : void 0
        ]), _parent));
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PvButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main, { __name: "PvButton" });

export { __nuxt_component_5 as _, __nuxt_component_1 as a };;globalThis.__timing__.logEnd('Load chunks/build/PvButton-5I-3PpYG');
//# sourceMappingURL=PvButton-5I-3PpYG.mjs.map
