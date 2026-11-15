globalThis.__timing__.logStart('Load chunks/build/_id_-DuFoPlDs');import { _ as __nuxt_component_5, a as __nuxt_component_1 } from './PvButton-5I-3PpYG.mjs';
import { l as localNumber, f as formatDateTime } from './useDateFormatting-C8ULAVEm.mjs';
import { defineComponent, ref, reactive, mergeProps, unref, withCtx, createTextVNode, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { q as useRoute, w as createError, u as useHead, n as navigateTo } from './server.mjs';
import { u as usePatients } from './usePatients-Dx8VPMJC.mjs';
import { u as useTreatments } from './useTreatments-DdP0boja.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-8jYXDYbZ.mjs';
import './nuxt-link-Ca5hbmYf.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@primevue/core/base/style';
import '@primevue/core/basecomponent/style';
import '@primeuix/styles/autocomplete';
import '@primeuix/utils/object';
import '@primeuix/styles/cascadeselect';
import '@primeuix/styles/checkbox';
import '@primeuix/styles/checkboxgroup';
import '@primeuix/styles/colorpicker';
import '@primeuix/styles/datepicker';
import '@primeuix/styles/floatlabel';
import '@primeuix/styles/iconfield';
import '@primeuix/styles/iftalabel';
import '@primeuix/styles/inputchips';
import '@primeuix/styles/inputgroup';
import '@primeuix/styles/inputnumber';
import '@primeuix/styles/inputotp';
import '@primeuix/styles/inputtext';
import '@primeuix/styles/knob';
import '@primeuix/styles/listbox';
import '@primeuix/styles/multiselect';
import '@primeuix/styles/password';
import '@primeuix/styles/radiobutton';
import '@primeuix/styles/radiobuttongroup';
import '@primeuix/styles/rating';
import '@primeuix/styles/select';
import '@primeuix/styles/selectbutton';
import '@primeuix/styles/slider';
import '@primeuix/styles/textarea';
import '@primeuix/styles/togglebutton';
import '@primeuix/styles/toggleswitch';
import '@primeuix/styles/treeselect';
import '@primeuix/styles/button';
import '@primeuix/styles/buttongroup';
import '@primeuix/styles/speeddial';
import '@primeuix/styles/splitbutton';
import '@primeuix/styles/datatable';
import '@primeuix/styles/dataview';
import '@primeuix/styles/orderlist';
import '@primeuix/styles/organizationchart';
import '@primeuix/styles/paginator';
import '@primeuix/styles/picklist';
import '@primeuix/styles/tree';
import '@primeuix/styles/treetable';
import '@primeuix/styles/timeline';
import '@primeuix/styles/virtualscroller';
import '@primeuix/styles/accordion';
import '@primeuix/styles/card';
import '@primeuix/styles/divider';
import '@primeuix/styles/fieldset';
import '@primeuix/styles/panel';
import '@primeuix/styles/scrollpanel';
import '@primeuix/styles/splitter';
import '@primeuix/styles/stepper';
import '@primeuix/styles/tabview';
import '@primeuix/styles/tabs';
import '@primeuix/styles/toolbar';
import '@primeuix/styles/confirmdialog';
import '@primeuix/styles/confirmpopup';
import '@primeuix/styles/dialog';
import '@primeuix/styles/drawer';
import '@primeuix/styles/popover';
import '@primeuix/styles/fileupload';
import '@primeuix/styles/breadcrumb';
import '@primeuix/styles/contextmenu';
import '@primeuix/styles/dock';
import '@primeuix/styles/menu';
import '@primeuix/styles/menubar';
import '@primeuix/styles/megamenu';
import '@primeuix/styles/panelmenu';
import '@primeuix/styles/steps';
import '@primeuix/styles/tabmenu';
import '@primeuix/styles/tieredmenu';
import '@primeuix/styles/message';
import '@primeuix/styles/inlinemessage';
import '@primeuix/styles/toast';
import '@primeuix/styles/carousel';
import '@primeuix/styles/galleria';
import '@primeuix/styles/image';
import '@primeuix/styles/imagecompare';
import '@primeuix/styles/avatar';
import '@primeuix/styles/badge';
import '@primeuix/styles/blockui';
import '@primeuix/styles/chip';
import '@primeuix/styles/inplace';
import '@primeuix/styles/metergroup';
import '@primeuix/styles/overlaybadge';
import '@primeuix/styles/scrolltop';
import '@primeuix/styles/skeleton';
import '@primeuix/styles/progressbar';
import '@primeuix/styles/progressspinner';
import '@primeuix/styles/tag';
import '@primeuix/styles/terminal';
import '@primevue/forms/form/style';
import '@primevue/forms/formfield/style';
import '@primeuix/styles/tooltip';
import '@primeuix/styles/ripple';
import '@primeuix/styled';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'node:crypto';
import 'lucide-vue-next';
import '@internationalized/date';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@primeuix/styles/base';
import '@primeuix/utils/dom';
import '@primeuix/utils/zindex';
import '@primeuix/utils/uuid';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const patientId = Number(route.params.id);
    if (!Number.isInteger(patientId) || patientId < 1 || patientId > 2147483647) throw createError({ statusCode: 404 });
    const patientsApi = usePatients();
    const treatmentsApi = useTreatments();
    const patient = ref(null);
    const visits = ref([]);
    const details = reactive({});
    const expandedVisit = ref(null);
    const loading = ref(true);
    const loadingDetails = ref([]);
    const printing = ref(false);
    const printTimestamp = ref("");
    const errorMessage = ref("");
    const printError = ref("");
    const genders = { Male: "Male", Female: "Female", Other: "Other" };
    useHead(() => ({ title: patient.value ? patient.value.name + " — Patient history — RoghtiaSystem" : "Patient history — RoghtiaSystem" }));
    async function loadHistory() {
      loading.value = true;
      errorMessage.value = "";
      try {
        patient.value = await patientsApi.get(patientId);
        const allVisits = [];
        let page = 1;
        let total = 0;
        do {
          const response = await treatmentsApi.list({ patientId, page, pageSize: 100 });
          if (response.items.length === 0) break;
          allVisits.push(...response.items);
          total = response.total;
          page = response.page + 1;
        } while (allVisits.length < total);
        visits.value = allVisits;
      } catch (error) {
        const failure = error;
        const status = failure.statusCode || failure.status;
        if (status === 401) {
          await navigateTo({ path: "/login", query: { redirect: route.fullPath } });
          return;
        }
        errorMessage.value = status === 404 ? "This patient was not found or is not available to your account." : "Patient history could not be loaded. Check that the server is running, then try again.";
      } finally {
        loading.value = false;
      }
    }
    async function loadDetails(id) {
      if (details[id] || loadingDetails.value.includes(id)) return;
      loadingDetails.value = [...loadingDetails.value, id];
      try {
        const treatment = await treatmentsApi.get(id);
        if (treatment.patient.id !== patientId) throw new Error("Treatment does not belong to this patient.");
        details[id] = treatment;
      } catch {
        printError.value = "Some treatment details could not be loaded. Refresh the history and try again.";
      } finally {
        loadingDetails.value = loadingDetails.value.filter((value) => value !== id);
      }
    }
    async function printHistory() {
      if (!patient.value || loading.value || printing.value) return;
      printTimestamp.value = formatDateTime((/* @__PURE__ */ new Date()).toISOString());
      printing.value = true;
      printError.value = "";
      try {
        for (let index = 0; index < visits.value.length; index += 4) {
          await Promise.all(visits.value.slice(index, index + 4).map((visit) => loadDetails(visit.id)));
          if (printError.value) throw new Error(printError.value);
        }
        await nextTick();
        await (void 0).fonts.ready;
        await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
        (void 0).print();
      } catch {
        printError.value = "Unable to prepare the complete history for printing. Please try again.";
      } finally {
        printing.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PvButton = __nuxt_component_5;
      const _component_PvIcon = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "history-page",
        "aria-labelledby": "history-title",
        "aria-busy": unref(loading) || unref(printing)
      }, _attrs))} data-v-847cb994><header class="history-toolbar" data-v-847cb994><div data-v-847cb994><div class="eyebrow" data-v-847cb994><span data-v-847cb994></span> Patient record</div><h1 id="history-title" data-v-847cb994>Medical history</h1>`);
      if (unref(patient)) {
        _push(`<p data-v-847cb994>Complete visit and prescription history for <strong data-v-847cb994><bdi data-v-847cb994>${ssrInterpolate(unref(patient).name)}</bdi></strong>.</p>`);
      } else {
        _push(`<p data-v-847cb994>Patient visits, prescriptions, and treatment notes.</p>`);
      }
      _push(`</div><div class="history-actions" data-v-847cb994>`);
      _push(ssrRenderComponent(_component_PvButton, {
        to: "/patients",
        color: "neutral",
        variant: "outline",
        icon: "i-lucide-arrow-left"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Back to patients`);
          } else {
            return [
              createTextVNode("Back to patients")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(patient)) {
        _push(ssrRenderComponent(_component_PvButton, {
          type: "button",
          icon: "i-lucide-printer",
          loading: unref(printing),
          disabled: unref(loading) || unref(loadingDetails).length > 0,
          onClick: printHistory
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Print history`);
            } else {
              return [
                createTextVNode("Print history")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></header>`);
      if (unref(loading)) {
        _push(`<div class="history-state" role="status" data-v-847cb994>`);
        _push(ssrRenderComponent(_component_PvIcon, {
          name: "i-lucide-loader-circle",
          class: "animate-spin"
        }, null, _parent));
        _push(`Loading patient history…</div>`);
      } else if (unref(errorMessage)) {
        _push(`<div class="history-state history-error" role="alert" data-v-847cb994>`);
        _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-circle-alert" }, null, _parent));
        _push(`<p data-v-847cb994>${ssrInterpolate(unref(errorMessage))}</p>`);
        _push(ssrRenderComponent(_component_PvButton, {
          type: "button",
          color: "neutral",
          variant: "outline",
          icon: "i-lucide-refresh-cw",
          onClick: loadHistory
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Try again`);
            } else {
              return [
                createTextVNode("Try again")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else if (unref(patient)) {
        _push(`<!--[-->`);
        if (unref(printError)) {
          _push(`<div class="history-alert" role="alert" data-v-847cb994>`);
          _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-circle-alert" }, null, _parent));
          _push(`<span data-v-847cb994>${ssrInterpolate(unref(printError))}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<article class="history-sheet" aria-label="Patient medical history" data-v-847cb994><header class="patient-summary" data-v-847cb994><div class="patient-avatar" aria-hidden="true" data-v-847cb994>`);
        _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-user-round" }, null, _parent));
        _push(`</div><div class="patient-heading" data-v-847cb994><p data-v-847cb994>Patient</p><h2 data-v-847cb994><bdi data-v-847cb994>${ssrInterpolate(unref(patient).name)}</bdi></h2></div><div class="patient-code" data-v-847cb994><span data-v-847cb994>Patient code</span><strong dir="ltr" data-v-847cb994><bdi data-v-847cb994>${ssrInterpolate(unref(patient).code)}</bdi></strong></div><dl class="patient-demographics" data-v-847cb994><div data-v-847cb994><dt data-v-847cb994>Age</dt><dd data-v-847cb994>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(patient).age))} years</dd></div><div data-v-847cb994><dt data-v-847cb994>Gender</dt><dd data-v-847cb994>${ssrInterpolate(genders[unref(patient).gender] || unref(patient).gender)}</dd></div><div data-v-847cb994><dt data-v-847cb994>Phone</dt><dd dir="ltr" data-v-847cb994><bdi data-v-847cb994>${ssrInterpolate(unref(patient).phone || "—")}</bdi></dd></div><div data-v-847cb994><dt data-v-847cb994>Address</dt><dd data-v-847cb994><bdi data-v-847cb994>${ssrInterpolate(unref(patient).address || "—")}</bdi></dd></div></dl></header><section class="visit-section" aria-labelledby="visits-title" data-v-847cb994><header class="section-heading" data-v-847cb994><div data-v-847cb994><span class="section-icon" data-v-847cb994>`);
        _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-notebook-tabs" }, null, _parent));
        _push(`</span><div data-v-847cb994><h2 id="visits-title" data-v-847cb994>Visit history</h2><p data-v-847cb994>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(visits).length))} ${ssrInterpolate(unref(visits).length === 1 ? "visit" : "visits")} on record</p></div></div></header>`);
        if (unref(visits).length) {
          _push(`<div class="visit-list" data-v-847cb994><!--[-->`);
          ssrRenderList(unref(visits), (visit, index) => {
            _push(`<article class="visit-card" data-v-847cb994><button class="visit-toggle" type="button"${ssrRenderAttr("aria-expanded", unref(expandedVisit) === visit.id)}${ssrRenderAttr("aria-controls", "visit-detail-" + visit.id)} data-v-847cb994><span class="visit-number" data-v-847cb994>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(visits).length - index))}</span><span class="visit-summary" data-v-847cb994><strong data-v-847cb994>${ssrInterpolate(("formatDateTime" in _ctx ? _ctx.formatDateTime : unref(formatDateTime))(visit.recordedAtUtc))}</strong><small data-v-847cb994>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(visit.medicationCount))} medications <span aria-hidden="true" data-v-847cb994>·</span> BP ${ssrInterpolate(visit.bloodPressure || "—")}</small></span>`);
            _push(ssrRenderComponent(_component_PvIcon, {
              name: unref(expandedVisit) === visit.id ? "i-lucide-chevron-up" : "i-lucide-chevron-down",
              class: "visit-chevron",
              "aria-hidden": "true"
            }, null, _parent));
            _push(`</button>`);
            if (unref(expandedVisit) === visit.id || unref(printing)) {
              _push(`<div${ssrRenderAttr("id", "visit-detail-" + visit.id)} class="visit-detail" data-v-847cb994>`);
              if (unref(loadingDetails).includes(visit.id)) {
                _push(`<div class="detail-loading" role="status" data-v-847cb994>`);
                _push(ssrRenderComponent(_component_PvIcon, {
                  name: "i-lucide-loader-circle",
                  class: "animate-spin"
                }, null, _parent));
                _push(`Loading visit details…</div>`);
              } else if (unref(details)[visit.id]) {
                _push(`<!--[--><dl class="visit-vitals" data-v-847cb994><div data-v-847cb994><dt data-v-847cb994>Blood pressure</dt><dd data-v-847cb994>${ssrInterpolate(unref(details)[visit.id].bloodPressure || "—")}</dd></div><div data-v-847cb994><dt data-v-847cb994>Recorded</dt><dd data-v-847cb994>${ssrInterpolate(("formatDateTime" in _ctx ? _ctx.formatDateTime : unref(formatDateTime))(unref(details)[visit.id].recordedAtUtc))}</dd></div></dl>`);
                if (unref(details)[visit.id].prescriptionItems.length) {
                  _push(`<section class="detail-group" data-v-847cb994><h3 data-v-847cb994>`);
                  _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-capsule" }, null, _parent));
                  _push(` Medications</h3><div class="medication-table-wrap" data-v-847cb994><table class="medication-table" data-v-847cb994><thead data-v-847cb994><tr data-v-847cb994><th data-v-847cb994>#</th><th data-v-847cb994>Medication</th><th data-v-847cb994>Type</th><th data-v-847cb994>Dose</th><th data-v-847cb994>Frequency</th><th data-v-847cb994>Duration</th></tr></thead><tbody data-v-847cb994><!--[-->`);
                  ssrRenderList(unref(details)[visit.id].prescriptionItems, (item) => {
                    _push(`<tr data-v-847cb994><td data-v-847cb994>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.position))}</td><td data-v-847cb994><bdi data-v-847cb994>${ssrInterpolate(item.medicationName)}</bdi></td><td data-v-847cb994>${ssrInterpolate(item.medicationType)}</td><td data-v-847cb994>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.dose))}</td><td data-v-847cb994>${ssrInterpolate(item.frequency)}</td><td data-v-847cb994>${ssrInterpolate(item.duration)}</td></tr>`);
                  });
                  _push(`<!--]--></tbody></table></div></section>`);
                } else {
                  _push(`<!---->`);
                }
                if (unref(details)[visit.id].clinicalNotes.length) {
                  _push(`<section class="detail-group" data-v-847cb994><h3 data-v-847cb994>`);
                  _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-clipboard-list" }, null, _parent));
                  _push(` Clinical notes</h3><p data-v-847cb994>${ssrInterpolate(unref(details)[visit.id].clinicalNotes.map((item) => item.text).join(", "))}</p></section>`);
                } else {
                  _push(`<!---->`);
                }
                if (unref(details)[visit.id].additionalInstructionItems.length || unref(details)[visit.id].additionalInstructions) {
                  _push(`<section class="detail-group" data-v-847cb994><h3 data-v-847cb994>`);
                  _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-info" }, null, _parent));
                  _push(` Additional instructions</h3><p data-v-847cb994>${ssrInterpolate([...unref(details)[visit.id].additionalInstructionItems.map((item) => item.text), ...unref(details)[visit.id].additionalInstructions ? [unref(details)[visit.id].additionalInstructions] : []].join(", "))}</p></section>`);
                } else {
                  _push(`<!---->`);
                }
                if (unref(details)[visit.id].diagnostics.length) {
                  _push(`<section class="detail-group" data-v-847cb994><h3 data-v-847cb994>`);
                  _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-microscope" }, null, _parent));
                  _push(` Diagnostics</h3><p data-v-847cb994>${ssrInterpolate(unref(details)[visit.id].diagnostics.map((item) => item.text).join(", "))}</p></section>`);
                } else {
                  _push(`<!---->`);
                }
                if (unref(details)[visit.id].investigations.length) {
                  _push(`<section class="detail-group" data-v-847cb994><h3 data-v-847cb994>`);
                  _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-microscope" }, null, _parent));
                  _push(` Investigations</h3><p data-v-847cb994>${ssrInterpolate(unref(details)[visit.id].investigations.map((item) => item.text).join(", "))}</p></section>`);
                } else {
                  _push(`<!---->`);
                }
                _push(ssrRenderComponent(_component_PvButton, {
                  to: "/treatments/" + visit.id + "/print",
                  color: "neutral",
                  variant: "outline",
                  icon: "i-lucide-file-text",
                  class: "visit-prescription-link"
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(`Open prescription`);
                    } else {
                      return [
                        createTextVNode("Open prescription")
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
                _push(`<!--]-->`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</article>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="history-empty" data-v-847cb994><span data-v-847cb994>`);
          _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-calendar-x" }, null, _parent));
          _push(`</span><h3 data-v-847cb994>No visit history yet</h3><p data-v-847cb994>Treatments recorded for this patient will appear here.</p></div>`);
        }
        _push(`</section><footer class="history-print-footer" data-v-847cb994><span data-v-847cb994>RoghtiaSystem · Patient medical history</span>`);
        if (unref(printTimestamp)) {
          _push(`<span data-v-847cb994>Printed ${ssrInterpolate(unref(printTimestamp))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</footer></article><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/patient-history/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-847cb994"]]);

export { _id_ as default };;globalThis.__timing__.logEnd('Load chunks/build/_id_-DuFoPlDs');
//# sourceMappingURL=_id_-DuFoPlDs.mjs.map
