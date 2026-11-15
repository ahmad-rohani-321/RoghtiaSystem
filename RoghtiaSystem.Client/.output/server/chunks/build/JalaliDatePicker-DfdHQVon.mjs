globalThis.__timing__.logStart('Load chunks/build/JalaliDatePicker-DfdHQVon');import { _ as __nuxt_component_5, a as __nuxt_component_1 } from './PvButton-5I-3PpYG.mjs';
import { l as localNumber, c as formatMonth, a as formatDate } from './useDateFormatting-C8ULAVEm.mjs';
import { defineComponent, useModel, ref, computed, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import script from './popover-DKZhm9w1.mjs';
import script$1 from './select-DJTGldBa.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-8jYXDYbZ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "JalaliDatePicker",
  __ssrInlineRender: true,
  props: {
    "modelValue": { required: true },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const date = useModel(__props, "modelValue");
    const panel = ref();
    const yearOptions = computed(() => Array.from({ length: 21 }, (_, index) => ({ label: localNumber(date.value.year - 10 + index), value: date.value.year - 10 + index })));
    const monthOptions = computed(() => Array.from({ length: 12 }, (_, index) => {
      const value = index + 1;
      return { label: formatMonth(date.value.set({ month: value, day: 1 })), value };
    }));
    const dayOptions = computed(() => Array.from({ length: date.value.calendar.getDaysInMonth(date.value) }, (_, index) => ({ label: localNumber(index + 1), value: index + 1 })));
    function setPart(part, value) {
      const maximum = part === "day" ? date.value.calendar.getDaysInMonth(date.value) : 31;
      date.value = date.value.set({ [part]: value, day: part === "day" ? Math.min(value, maximum) : Math.min(date.value.day, maximum) });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PvButton = __nuxt_component_5;
      const _component_PvIcon = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_PvButton, {
        color: "neutral",
        variant: "outline",
        icon: "i-lucide-calendar-days",
        size: "sm",
        class: "date-button",
        onClick: ($event) => unref(panel)?.toggle($event)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="date-label" data-v-d0855a90${_scopeId}>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(date.value))}</span>`);
            _push2(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-chevron-down" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "date-label" }, toDisplayString(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(date.value)), 1),
              createVNode(_component_PvIcon, { name: "i-lucide-chevron-down" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(script), {
        ref_key: "panel",
        ref: panel,
        class: "jalali-picker"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="jalali-picker-panel" data-v-d0855a90${_scopeId}><div class="jalali-picker-title" data-v-d0855a90${_scopeId}>Persian calendar</div><div class="jalali-picker-grid" data-v-d0855a90${_scopeId}>`);
            _push2(ssrRenderComponent(unref(script$1), {
              "model-value": date.value.day,
              options: unref(dayOptions),
              "option-label": "label",
              "option-value": "value",
              "aria-label": "Day",
              "onUpdate:modelValue": ($event) => setPart("day", $event)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(script$1), {
              "model-value": date.value.month,
              options: unref(monthOptions),
              "option-label": "label",
              "option-value": "value",
              "aria-label": "Month",
              "onUpdate:modelValue": ($event) => setPart("month", $event)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(script$1), {
              "model-value": date.value.year,
              options: unref(yearOptions),
              "option-label": "label",
              "option-value": "value",
              "aria-label": "Year",
              "onUpdate:modelValue": ($event) => setPart("year", $event)
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_PvButton, {
              type: "button",
              block: "",
              onClick: ($event) => unref(panel)?.hide()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Done`);
                } else {
                  return [
                    createTextVNode("Done")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "jalali-picker-panel" }, [
                createVNode("div", { class: "jalali-picker-title" }, "Persian calendar"),
                createVNode("div", { class: "jalali-picker-grid" }, [
                  createVNode(unref(script$1), {
                    "model-value": date.value.day,
                    options: unref(dayOptions),
                    "option-label": "label",
                    "option-value": "value",
                    "aria-label": "Day",
                    "onUpdate:modelValue": ($event) => setPart("day", $event)
                  }, null, 8, ["model-value", "options", "onUpdate:modelValue"]),
                  createVNode(unref(script$1), {
                    "model-value": date.value.month,
                    options: unref(monthOptions),
                    "option-label": "label",
                    "option-value": "value",
                    "aria-label": "Month",
                    "onUpdate:modelValue": ($event) => setPart("month", $event)
                  }, null, 8, ["model-value", "options", "onUpdate:modelValue"]),
                  createVNode(unref(script$1), {
                    "model-value": date.value.year,
                    options: unref(yearOptions),
                    "option-label": "label",
                    "option-value": "value",
                    "aria-label": "Year",
                    "onUpdate:modelValue": ($event) => setPart("year", $event)
                  }, null, 8, ["model-value", "options", "onUpdate:modelValue"])
                ]),
                createVNode(_component_PvButton, {
                  type: "button",
                  block: "",
                  onClick: ($event) => unref(panel)?.hide()
                }, {
                  default: withCtx(() => [
                    createTextVNode("Done")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/JalaliDatePicker.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-d0855a90"]]), { __name: "JalaliDatePicker" });

export { __nuxt_component_3 as _ };;globalThis.__timing__.logEnd('Load chunks/build/JalaliDatePicker-DfdHQVon');
//# sourceMappingURL=JalaliDatePicker-DfdHQVon.mjs.map
