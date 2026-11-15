globalThis.__timing__.logStart('Load chunks/build/useMedications-sVQ_F9YE');import { defineComponent, useModel, computed, unref, mergeProps, mergeModels, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import script$1 from './select-DJTGldBa.mjs';
import script from './multiselect-CBXTKYXd.mjs';
import { b as useRequestFetch } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "PvSelectMenu",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PvSelectMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main, { __name: "PvSelectMenu" });
function useMedications() {
  const requestFetch = useRequestFetch();
  function list(query = {}) {
    return requestFetch("/api/medications", { query: { ...query }, retry: 0 });
  }
  function get(id) {
    return requestFetch(`/api/medications/${encodeURIComponent(id)}`, { retry: 0 });
  }
  function inputBody(input) {
    return { name: input.name, type: input.type, quantity: input.quantity, remarks: input.remarks };
  }
  async function create(input) {
    const medication = await $fetch("/api/medications", {
      method: "POST",
      body: inputBody(input),
      headers: { "x-roghtiasystem-request": "1" },
      retry: 0
    });
    return medication;
  }
  async function createBulk(items) {
    const medications = await $fetch("/api/medications/bulk", {
      method: "POST",
      body: { items: items.map(inputBody) },
      headers: { "x-roghtiasystem-request": "1" },
      retry: 0
    });
    return medications;
  }
  async function update(id, input) {
    const medication = await $fetch(`/api/medications/${encodeURIComponent(id)}`, {
      method: "PUT",
      body: inputBody(input),
      headers: { "x-roghtiasystem-request": "1" },
      retry: 0
    });
    return medication;
  }
  return { list, get, create, createBulk, update };
}

export { __nuxt_component_3 as _, useMedications as u };;globalThis.__timing__.logEnd('Load chunks/build/useMedications-sVQ_F9YE');
//# sourceMappingURL=useMedications-sVQ_F9YE.mjs.map
