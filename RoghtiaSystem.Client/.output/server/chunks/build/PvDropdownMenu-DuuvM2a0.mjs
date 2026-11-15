globalThis.__timing__.logStart('Load chunks/build/PvDropdownMenu-DuuvM2a0');import { defineComponent, ref, unref, useSSRContext } from 'vue';
import { ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';
import script from './menu-DHen2e_g.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PvDropdownMenu",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    const menu = ref();
    function normalize(items) {
      return items.flat().map((item) => item?.type === "separator" ? { separator: true } : { ...item, icon: void 0, command: (event) => {
        item?.onSelect?.(event);
        item?.click?.(event);
        item?.command?.(event);
      } });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><span class="pv-menu-trigger">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
      _push(ssrRenderComponent(unref(script), {
        ref_key: "menu",
        ref: menu,
        model: normalize(__props.items),
        popup: ""
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PvDropdownMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main, { __name: "PvDropdownMenu" });

export { __nuxt_component_6 as _ };;globalThis.__timing__.logEnd('Load chunks/build/PvDropdownMenu-DuuvM2a0');
//# sourceMappingURL=PvDropdownMenu-DuuvM2a0.mjs.map
