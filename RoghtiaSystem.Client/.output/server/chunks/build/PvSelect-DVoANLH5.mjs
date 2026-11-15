globalThis.__timing__.logStart('Load chunks/build/PvSelect-DVoANLH5');import { defineComponent, useModel, computed, unref, mergeProps, mergeModels, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import script$1 from './select-DJTGldBa.mjs';
import script from './multiselect-CBXTKYXd.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "PvSelect",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    items: {},
    multiple: { type: Boolean },
    searchable: { type: Boolean },
    valueKey: {},
    labelKey: {},
    searchablePlaceholder: {}
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const model = useModel(__props, "modelValue");
    const first = computed(() => props.items?.[0]);
    const optionLabel = computed(() => props.labelKey || (first.value && typeof first.value === "object" && "label" in first.value ? "label" : void 0));
    const optionValue = computed(() => props.valueKey || (first.value && typeof first.value === "object" && "value" in first.value ? "value" : void 0));
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.multiple) {
        _push(ssrRenderComponent(unref(script), mergeProps({
          modelValue: model.value,
          "onUpdate:modelValue": ($event) => model.value = $event
        }, _ctx.$attrs, {
          options: __props.items,
          "option-label": unref(optionLabel),
          "option-value": unref(optionValue),
          filter: __props.searchable,
          "filter-placeholder": __props.searchablePlaceholder
        }, _attrs), null, _parent));
      } else {
        _push(ssrRenderComponent(unref(script$1), mergeProps({
          modelValue: model.value,
          "onUpdate:modelValue": ($event) => model.value = $event
        }, _ctx.$attrs, {
          options: __props.items,
          "option-label": unref(optionLabel),
          "option-value": unref(optionValue),
          filter: __props.searchable,
          "filter-placeholder": __props.searchablePlaceholder
        }, _attrs), null, _parent));
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PvSelect.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main, { __name: "PvSelect" });

export { __nuxt_component_4 as _ };;globalThis.__timing__.logEnd('Load chunks/build/PvSelect-DVoANLH5');
//# sourceMappingURL=PvSelect-DVoANLH5.mjs.map
