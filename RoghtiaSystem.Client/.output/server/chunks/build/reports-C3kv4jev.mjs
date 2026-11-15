globalThis.__timing__.logStart('Load chunks/build/reports-C3kv4jev');import { _ as __nuxt_component_5, a as __nuxt_component_1 } from './PvButton-5I-3PpYG.mjs';
import { _ as __nuxt_component_3 } from './JalaliDatePicker-DfdHQVon.mjs';
import { g as gregorianToday, a as formatDate, l as localNumber } from './useDateFormatting-C8ULAVEm.mjs';
import { defineComponent, ref, shallowRef, computed, watch, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, isRef, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { parseDate } from '@internationalized/date';
import { u as useHead, b as useRequestFetch, a as useAuth, n as navigateTo } from './server.mjs';
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
import './popover-DKZhm9w1.mjs';
import '@primeuix/utils/dom';
import '@primeuix/utils/zindex';
import './index-B4jBjTcY.mjs';
import './index-CcIHcsH8.mjs';
import '@primeuix/utils/eventbus';
import 'vue-router';
import '@primeuix/utils';
import '@primeuix/styles/base';
import '@primeuix/utils/uuid';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import './select-DJTGldBa.mjs';
import './index-D3JEO8Ne.mjs';
import './index-hAkpgtKq.mjs';
import './index-BQp-zogj.mjs';
import './iconfield-15oSaR08.mjs';
import './inputicon-CGOzj3pd.mjs';
import './inputtext-BSmculv6.mjs';
import './index-C7uVuEHH.mjs';
import './index-CF4f6bc-.mjs';
import './virtualscroller-BfPLvQQ9.mjs';

const lowStockLimit = 10;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "reports",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({ title: "Reports — RoghtiaSystem" });
    const api = useRequestFetch();
    const auth = useAuth();
    const today = gregorianToday();
    const period = ref("month");
    const fromDate = shallowRef(today.set({ day: 1 }));
    const toDate = shallowRef(today);
    const data = ref(null);
    const loading = ref(false);
    const error = ref("");
    const activePrint = ref("");
    const lowStockItems = computed(() => data.value?.medications.filter((item) => item.currentQuantity <= lowStockLimit) || []);
    const noVisitPatients = computed(() => data.value?.patients.filter((item) => item.visits === 0) || []);
    const ageBands = computed(() => {
      const bands = [{ label: "0–17", min: 0, max: 17 }, { label: "18–35", min: 18, max: 35 }, { label: "36–59", min: 36, max: 59 }, { label: "60+", min: 60, max: 150 }];
      return bands.map((band) => ({ ...band, count: data.value?.patients.filter((patient) => patient.age >= band.min && patient.age <= band.max).length || 0 }));
    });
    const genderCounts = computed(() => ["Male", "Female", "Other"].map((gender) => ({ gender, count: data.value?.patients.filter((patient) => patient.gender === gender).length || 0 })));
    const rangeLabel = computed(() => period.value === "custom" ? `${formatDate(fromDate.value)} — ${formatDate(toDate.value)}` : period.value === "week" ? "Last 7 days" : period.value === "year" ? "Current Gregorian year" : "Current Gregorian month");
    function reportRange() {
      const endDate = gregorianToday();
      if (period.value === "week") return { from: endDate.subtract({ days: 6 }), to: endDate };
      if (period.value === "year") return { from: endDate.set({ month: 1, day: 1 }), to: endDate };
      if (period.value === "month") return { from: endDate.set({ day: 1 }), to: endDate };
      return { from: fromDate.value, to: toDate.value };
    }
    async function loadReports() {
      if (loading.value) return;
      error.value = "";
      const { from, to } = reportRange();
      if (from.compare(to) > 0) {
        error.value = "The start date must be on or before the end date.";
        return;
      }
      const fromUtc = from.toDate("Asia/Kabul").toISOString();
      const toUtc = to.add({ days: 1 }).toDate("Asia/Kabul").toISOString();
      loading.value = true;
      try {
        data.value = await api("/api/reports", { query: { fromUtc, toUtc }, retry: 0 });
      } catch (failure) {
        const response = failure;
        const status = response.statusCode || response.status;
        if (status === 401) {
          await auth.refresh();
          await navigateTo("/login");
          return;
        }
        error.value = status === 400 ? "Choose a valid date range of up to one year." : "Unable to load reports. Please check the connection and try again.";
      } finally {
        loading.value = false;
      }
    }
    async function printReport(id) {
      activePrint.value = id;
      await nextTick();
      (void 0).print();
    }
    watch(period, () => {
      if (period.value !== "custom") void loadReports();
    });
    watch([fromDate, toDate], () => {
      if (period.value === "custom") void loadReports();
    });
    [__temp, __restore] = withAsyncContext(() => loadReports()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PvButton = __nuxt_component_5;
      const _component_PvIcon = __nuxt_component_1;
      const _component_JalaliDatePicker = __nuxt_component_3;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "reports-page",
        "aria-labelledby": "reports-title"
      }, _attrs))} data-v-50883a04><header class="page-heading reports-heading" data-v-50883a04><div data-v-50883a04><div class="eyebrow" data-v-50883a04><span data-v-50883a04></span> Clinic analytics</div><h1 id="reports-title" data-v-50883a04>Reports</h1><p data-v-50883a04>Review your patients, treatments, medication stock, clinical notes, and instructions.</p></div>`);
      _push(ssrRenderComponent(_component_PvButton, {
        type: "button",
        color: "neutral",
        variant: "outline",
        icon: "i-lucide-refresh-cw",
        loading: unref(loading),
        onClick: loadReports
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Refresh reports`);
          } else {
            return [
              createTextVNode("Refresh reports")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header><section class="panel report-filters" aria-label="Report date range" data-v-50883a04><div class="filter-copy" data-v-50883a04><span class="filter-icon" data-v-50883a04>`);
      _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-calendar-range" }, null, _parent));
      _push(`</span><div data-v-50883a04><h2 data-v-50883a04>Reporting period</h2><p data-v-50883a04>${ssrInterpolate(unref(rangeLabel))} · Kabul local time</p></div></div><div class="period-options" role="group" aria-label="Choose reporting period" data-v-50883a04><!--[-->`);
      ssrRenderList([["week", "7 days"], ["month", "This month"], ["year", "This year"], ["custom", "Custom"]], (option) => {
        _push(ssrRenderComponent(_component_PvButton, {
          key: option[0],
          type: "button",
          color: unref(period) === option[0] ? "primary" : "neutral",
          variant: unref(period) === option[0] ? "solid" : "outline",
          "aria-pressed": unref(period) === option[0],
          onClick: ($event) => period.value = option[0]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(option[1])}`);
            } else {
              return [
                createTextVNode(toDisplayString(option[1]), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      if (unref(period) === "custom") {
        _push(`<div class="custom-dates" data-v-50883a04><label data-v-50883a04>From `);
        _push(ssrRenderComponent(_component_JalaliDatePicker, {
          modelValue: unref(fromDate),
          "onUpdate:modelValue": ($event) => isRef(fromDate) ? fromDate.value = $event : null
        }, null, _parent));
        _push(`</label><label data-v-50883a04>Through `);
        _push(ssrRenderComponent(_component_JalaliDatePicker, {
          modelValue: unref(toDate),
          "onUpdate:modelValue": ($event) => isRef(toDate) ? toDate.value = $event : null
        }, null, _parent));
        _push(`</label>`);
        _push(ssrRenderComponent(_component_PvButton, {
          type: "button",
          icon: "i-lucide-search",
          loading: unref(loading),
          onClick: loadReports
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Apply`);
            } else {
              return [
                createTextVNode("Apply")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
      if (unref(loading) && !unref(data)) {
        _push(`<div class="report-state" role="status" data-v-50883a04>`);
        _push(ssrRenderComponent(_component_PvIcon, {
          name: "i-lucide-loader-circle",
          class: "animate-spin"
        }, null, _parent));
        _push(`<span data-v-50883a04>Preparing your reports…</span></div>`);
      } else if (unref(error) && !unref(data)) {
        _push(`<div class="report-error" role="alert" data-v-50883a04>`);
        _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-circle-alert" }, null, _parent));
        _push(`<span data-v-50883a04>${ssrInterpolate(unref(error))}</span>`);
        _push(ssrRenderComponent(_component_PvButton, {
          type: "button",
          color: "neutral",
          variant: "outline",
          onClick: loadReports
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
      } else {
        _push(`<!---->`);
      }
      if (unref(data)) {
        _push(`<!--[-->`);
        if (unref(error)) {
          _push(`<div class="report-error" role="alert" data-v-50883a04>`);
          _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-circle-alert" }, null, _parent));
          _push(`<span data-v-50883a04>${ssrInterpolate(unref(error))}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="report-summary" aria-label="Period summary" data-v-50883a04><article class="summary-card" data-v-50883a04><span class="summary-icon" data-v-50883a04>`);
        _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-stethoscope" }, null, _parent));
        _push(`</span><div data-v-50883a04><p data-v-50883a04>Treatments</p><strong data-v-50883a04>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(data).treatments.total))}</strong></div></article><article class="summary-card" data-v-50883a04><span class="summary-icon blue" data-v-50883a04>`);
        _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-notebook-pen" }, null, _parent));
        _push(`</span><div data-v-50883a04><p data-v-50883a04>With prescription</p><strong data-v-50883a04>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(data).treatments.withPrescription))}</strong></div></article><article class="summary-card" data-v-50883a04><span class="summary-icon purple" data-v-50883a04>`);
        _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-users-round" }, null, _parent));
        _push(`</span><div data-v-50883a04><p data-v-50883a04>Patients</p><strong data-v-50883a04>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(data).patients.length))}</strong></div></article><article class="summary-card" data-v-50883a04><span class="summary-icon orange" data-v-50883a04>`);
        _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-pill" }, null, _parent));
        _push(`</span><div data-v-50883a04><p data-v-50883a04>Medication types</p><strong data-v-50883a04>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(new Set(unref(data).medications.map((item) => item.type)).size))}</strong></div></article></div><section class="${ssrRenderClass([{ "print-target": unref(activePrint) === "treatments" }, "panel report-section"])}" aria-labelledby="treatment-report-title" data-v-50883a04><header class="report-section-heading" data-v-50883a04><div data-v-50883a04><span class="report-section-icon" data-v-50883a04>`);
        _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-activity" }, null, _parent));
        _push(`</span><div data-v-50883a04><h2 id="treatment-report-title" data-v-50883a04>Treatment and prescription report</h2><p data-v-50883a04>Visit volume and patients seen during ${ssrInterpolate(unref(rangeLabel).toLowerCase())}.</p></div></div>`);
        _push(ssrRenderComponent(_component_PvButton, {
          class: "print-action",
          type: "button",
          color: "neutral",
          variant: "outline",
          icon: "i-lucide-printer",
          onClick: ($event) => printReport("treatments")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Print / PDF`);
            } else {
              return [
                createTextVNode("Print / PDF")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</header><div class="report-two-column" data-v-50883a04><div data-v-50883a04><h3 data-v-50883a04>Treatments by day</h3>`);
        if (unref(data).treatments.byDay.length) {
          _push(`<div class="daily-bars" data-v-50883a04><!--[-->`);
          ssrRenderList(unref(data).treatments.byDay, (day) => {
            _push(`<div class="daily-row" data-v-50883a04><time data-v-50883a04>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(unref(parseDate)(day.date)))}</time><div class="bar-track" data-v-50883a04><span style="${ssrRenderStyle({ width: `${Math.max(4, day.treatments / Math.max(...unref(data).treatments.byDay.map((item) => item.treatments)) * 100)}%` })}" data-v-50883a04></span></div><b data-v-50883a04>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(day.treatments))}</b><small data-v-50883a04>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(day.prescriptions))} Rx</small></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<p class="empty-report" data-v-50883a04>No treatments were recorded in this period.</p>`);
        }
        _push(`</div><div data-v-50883a04><h3 data-v-50883a04>Most visited patients</h3>`);
        if (unref(data).treatments.mostVisitedPatients.length) {
          _push(`<div class="report-table-wrap" data-v-50883a04><table data-v-50883a04><thead data-v-50883a04><tr data-v-50883a04><th data-v-50883a04>Patient</th><th data-v-50883a04>Code</th><th data-v-50883a04>Visits</th></tr></thead><tbody data-v-50883a04><!--[-->`);
          ssrRenderList(unref(data).treatments.mostVisitedPatients, (patient) => {
            _push(`<tr data-v-50883a04><td data-v-50883a04><bdi data-v-50883a04>${ssrInterpolate(patient.patientName)}</bdi></td><td data-v-50883a04><bdi data-v-50883a04>${ssrInterpolate(patient.patientCode)}</bdi></td><td data-v-50883a04>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(patient.visits))}</td></tr>`);
          });
          _push(`<!--]--></tbody></table></div>`);
        } else {
          _push(`<p class="empty-report" data-v-50883a04>No patient visits in this period.</p>`);
        }
        _push(`</div></div></section><section class="${ssrRenderClass([{ "print-target": unref(activePrint) === "medications" }, "panel report-section"])}" aria-labelledby="medication-report-title" data-v-50883a04><header class="report-section-heading" data-v-50883a04><div data-v-50883a04><span class="report-section-icon blue" data-v-50883a04>`);
        _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-pill" }, null, _parent));
        _push(`</span><div data-v-50883a04><h2 id="medication-report-title" data-v-50883a04>Medication and stock report</h2><p data-v-50883a04>Current balances plus prescription and recorded stock deduction in this period. Low stock means ${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(lowStockLimit))} or fewer.</p></div></div>`);
        _push(ssrRenderComponent(_component_PvButton, {
          class: "print-action",
          type: "button",
          color: "neutral",
          variant: "outline",
          icon: "i-lucide-printer",
          onClick: ($event) => printReport("medications")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Print / PDF`);
            } else {
              return [
                createTextVNode("Print / PDF")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</header><div class="stock-highlights" data-v-50883a04><span data-v-50883a04><b data-v-50883a04>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(data).medications.length))}</b> medications</span><span class="warning-text" data-v-50883a04><b data-v-50883a04>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(lowStockItems).length))}</b> low or out of stock</span><span data-v-50883a04><b data-v-50883a04>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(data).medications.reduce((sum, item) => sum + item.prescriptionLines, 0)))}</b> prescribed lines</span></div><div class="report-table-wrap" data-v-50883a04><table data-v-50883a04><thead data-v-50883a04><tr data-v-50883a04><th data-v-50883a04>Medication</th><th data-v-50883a04>Type</th><th data-v-50883a04>Current quantity</th><th data-v-50883a04>Prescription lines</th><th data-v-50883a04>Prescribed dose</th><th data-v-50883a04>Recorded deducted dose</th></tr></thead><tbody data-v-50883a04><!--[-->`);
        ssrRenderList(unref(data).medications, (item) => {
          _push(`<tr data-v-50883a04><th scope="row" data-v-50883a04><bdi data-v-50883a04>${ssrInterpolate(item.name)}</bdi></th><td data-v-50883a04><bdi data-v-50883a04>${ssrInterpolate(item.type)}</bdi></td><td data-v-50883a04><span class="${ssrRenderClass({ "warning-text": item.currentQuantity <= lowStockLimit })}" data-v-50883a04>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.currentQuantity))}</span></td><td data-v-50883a04>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.prescriptionLines))}</td><td data-v-50883a04>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.prescribedDose))}</td><td data-v-50883a04>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.deductedDose))}</td></tr>`);
        });
        _push(`<!--]-->`);
        if (!unref(data).medications.length) {
          _push(`<tr data-v-50883a04><td colspan="6" class="empty-report" data-v-50883a04>No medications are registered.</td></tr>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</tbody></table></div><p class="report-footnote" data-v-50883a04>Current quantity is the latest stored balance. Deducted dose includes prescription rows whose stock deduction was recorded; this is not a full stock transaction history.</p></section><section class="${ssrRenderClass([{ "print-target": unref(activePrint) === "patients" }, "panel report-section"])}" aria-labelledby="patient-report-title" data-v-50883a04><header class="report-section-heading" data-v-50883a04><div data-v-50883a04><span class="report-section-icon purple" data-v-50883a04>`);
        _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-users-round" }, null, _parent));
        _push(`</span><div data-v-50883a04><h2 id="patient-report-title" data-v-50883a04>Patient report</h2><p data-v-50883a04>Patient directory and visit activity during ${ssrInterpolate(unref(rangeLabel).toLowerCase())}.</p></div></div>`);
        _push(ssrRenderComponent(_component_PvButton, {
          class: "print-action",
          type: "button",
          color: "neutral",
          variant: "outline",
          icon: "i-lucide-printer",
          onClick: ($event) => printReport("patients")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Print / PDF`);
            } else {
              return [
                createTextVNode("Print / PDF")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</header><div class="demographic-highlights" data-v-50883a04><div data-v-50883a04><h3 data-v-50883a04>By gender</h3><!--[-->`);
        ssrRenderList(unref(genderCounts), (item) => {
          _push(`<p data-v-50883a04><span data-v-50883a04>${ssrInterpolate(item.gender)}</span><b data-v-50883a04>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.count))}</b></p>`);
        });
        _push(`<!--]--></div><div data-v-50883a04><h3 data-v-50883a04>By age</h3><!--[-->`);
        ssrRenderList(unref(ageBands), (band) => {
          _push(`<p data-v-50883a04><span data-v-50883a04>${ssrInterpolate(band.label)} years</span><b data-v-50883a04>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(band.count))}</b></p>`);
        });
        _push(`<!--]--></div><div data-v-50883a04><h3 data-v-50883a04>Visit status</h3><p data-v-50883a04><span data-v-50883a04>Visited this period</span><b data-v-50883a04>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(data).patients.filter((item) => item.visits > 0).length))}</b></p><p data-v-50883a04><span data-v-50883a04>No visit this period</span><b data-v-50883a04>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(noVisitPatients).length))}</b></p></div></div><div class="report-table-wrap" data-v-50883a04><table data-v-50883a04><thead data-v-50883a04><tr data-v-50883a04><th data-v-50883a04>Code</th><th data-v-50883a04>Patient</th><th data-v-50883a04>Phone</th><th data-v-50883a04>Age</th><th data-v-50883a04>Gender</th><th data-v-50883a04>Visits in period</th><th data-v-50883a04>Address</th></tr></thead><tbody data-v-50883a04><!--[-->`);
        ssrRenderList(unref(data).patients, (patient) => {
          _push(`<tr data-v-50883a04><td data-v-50883a04><bdi data-v-50883a04>${ssrInterpolate(patient.code)}</bdi></td><th scope="row" data-v-50883a04><bdi data-v-50883a04>${ssrInterpolate(patient.name)}</bdi></th><td data-v-50883a04><bdi dir="ltr" data-v-50883a04>${ssrInterpolate(patient.phone || "—")}</bdi></td><td data-v-50883a04>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(patient.age))}</td><td data-v-50883a04>${ssrInterpolate(patient.gender)}</td><td data-v-50883a04>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(patient.visits))}</td><td data-v-50883a04><bdi data-v-50883a04>${ssrInterpolate(patient.address || "—")}</bdi></td></tr>`);
        });
        _push(`<!--]-->`);
        if (!unref(data).patients.length) {
          _push(`<tr data-v-50883a04><td colspan="7" class="empty-report" data-v-50883a04>No patients are registered.</td></tr>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</tbody></table></div><p class="report-footnote" data-v-50883a04>The model stores patient age but not date of birth or registration date, so this report does not estimate either.</p></section><section class="${ssrRenderClass([{ "print-target": unref(activePrint) === "notes" }, "panel report-section"])}" aria-labelledby="notes-report-title" data-v-50883a04><header class="report-section-heading" data-v-50883a04><div data-v-50883a04><span class="report-section-icon green" data-v-50883a04>`);
        _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-notebook-pen" }, null, _parent));
        _push(`</span><div data-v-50883a04><h2 id="notes-report-title" data-v-50883a04>Clinical notes report</h2><p data-v-50883a04>Saved note library ranked by use on treatments in this period.</p></div></div>`);
        _push(ssrRenderComponent(_component_PvButton, {
          class: "print-action",
          type: "button",
          color: "neutral",
          variant: "outline",
          icon: "i-lucide-printer",
          onClick: ($event) => printReport("notes")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Print / PDF`);
            } else {
              return [
                createTextVNode("Print / PDF")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</header><div class="report-table-wrap" data-v-50883a04><table data-v-50883a04><thead data-v-50883a04><tr data-v-50883a04><th data-v-50883a04>#</th><th data-v-50883a04>Clinical note</th><th data-v-50883a04>Uses in period</th></tr></thead><tbody data-v-50883a04><!--[-->`);
        ssrRenderList([...unref(data).clinicalNotes].sort((a, b) => b.uses - a.uses || a.text.localeCompare(b.text)), (item, index) => {
          _push(`<tr data-v-50883a04><td data-v-50883a04>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(index + 1))}</td><th scope="row" data-v-50883a04><bdi data-v-50883a04>${ssrInterpolate(item.text)}</bdi></th><td data-v-50883a04>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.uses))}</td></tr>`);
        });
        _push(`<!--]-->`);
        if (!unref(data).clinicalNotes.length) {
          _push(`<tr data-v-50883a04><td colspan="3" class="empty-report" data-v-50883a04>No clinical notes have been saved.</td></tr>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</tbody></table></div></section><section class="${ssrRenderClass([{ "print-target": unref(activePrint) === "instructions" }, "panel report-section"])}" aria-labelledby="instructions-report-title" data-v-50883a04><header class="report-section-heading" data-v-50883a04><div data-v-50883a04><span class="report-section-icon orange" data-v-50883a04>`);
        _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-list-checks" }, null, _parent));
        _push(`</span><div data-v-50883a04><h2 id="instructions-report-title" data-v-50883a04>Additional instructions report</h2><p data-v-50883a04>Saved instruction library ranked by use on treatments in this period.</p></div></div>`);
        _push(ssrRenderComponent(_component_PvButton, {
          class: "print-action",
          type: "button",
          color: "neutral",
          variant: "outline",
          icon: "i-lucide-printer",
          onClick: ($event) => printReport("instructions")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Print / PDF`);
            } else {
              return [
                createTextVNode("Print / PDF")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</header><div class="report-table-wrap" data-v-50883a04><table data-v-50883a04><thead data-v-50883a04><tr data-v-50883a04><th data-v-50883a04>#</th><th data-v-50883a04>Additional instruction</th><th data-v-50883a04>Uses in period</th></tr></thead><tbody data-v-50883a04><!--[-->`);
        ssrRenderList([...unref(data).additionalInstructions].sort((a, b) => b.uses - a.uses || a.text.localeCompare(b.text)), (item, index) => {
          _push(`<tr data-v-50883a04><td data-v-50883a04>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(index + 1))}</td><th scope="row" data-v-50883a04><bdi data-v-50883a04>${ssrInterpolate(item.text)}</bdi></th><td data-v-50883a04>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.uses))}</td></tr>`);
        });
        _push(`<!--]-->`);
        if (!unref(data).additionalInstructions.length) {
          _push(`<tr data-v-50883a04><td colspan="3" class="empty-report" data-v-50883a04>No additional instructions have been saved.</td></tr>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</tbody></table></div></section><section class="${ssrRenderClass([{ "print-target": unref(activePrint) === "diagnostics" }, "panel report-section"])}" aria-labelledby="diagnostics-report-title" data-v-50883a04><header class="report-section-heading" data-v-50883a04><div data-v-50883a04><span class="report-section-icon blue" data-v-50883a04>`);
        _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-microscope" }, null, _parent));
        _push(`</span><div data-v-50883a04><h2 id="diagnostics-report-title" data-v-50883a04>Diagnostics report</h2><p data-v-50883a04>Saved diagnostics ranked by use on treatments in this period.</p></div></div>`);
        _push(ssrRenderComponent(_component_PvButton, {
          class: "print-action",
          type: "button",
          color: "neutral",
          variant: "outline",
          icon: "i-lucide-printer",
          onClick: ($event) => printReport("diagnostics")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Print / PDF`);
            } else {
              return [
                createTextVNode("Print / PDF")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</header><div class="report-table-wrap" data-v-50883a04><table data-v-50883a04><thead data-v-50883a04><tr data-v-50883a04><th data-v-50883a04>#</th><th data-v-50883a04>Diagnostic</th><th data-v-50883a04>Uses in period</th></tr></thead><tbody data-v-50883a04><!--[-->`);
        ssrRenderList([...unref(data).diagnostics].sort((a, b) => b.uses - a.uses || a.text.localeCompare(b.text)), (item, index) => {
          _push(`<tr data-v-50883a04><td data-v-50883a04>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(index + 1))}</td><th scope="row" data-v-50883a04><bdi data-v-50883a04>${ssrInterpolate(item.text)}</bdi></th><td data-v-50883a04>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.uses))}</td></tr>`);
        });
        _push(`<!--]-->`);
        if (!unref(data).diagnostics.length) {
          _push(`<tr data-v-50883a04><td colspan="3" class="empty-report" data-v-50883a04>No diagnostics have been saved.</td></tr>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</tbody></table></div></section><section class="${ssrRenderClass([{ "print-target": unref(activePrint) === "investigations" }, "panel report-section"])}" aria-labelledby="investigations-report-title" data-v-50883a04><header class="report-section-heading" data-v-50883a04><div data-v-50883a04><span class="report-section-icon green" data-v-50883a04>`);
        _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-microscope" }, null, _parent));
        _push(`</span><div data-v-50883a04><h2 id="investigations-report-title" data-v-50883a04>Investigations report</h2><p data-v-50883a04>Saved investigations ranked by use on treatments in this period.</p></div></div>`);
        _push(ssrRenderComponent(_component_PvButton, {
          class: "print-action",
          type: "button",
          color: "neutral",
          variant: "outline",
          icon: "i-lucide-printer",
          onClick: ($event) => printReport("investigations")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Print / PDF`);
            } else {
              return [
                createTextVNode("Print / PDF")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</header><div class="report-table-wrap" data-v-50883a04><table data-v-50883a04><thead data-v-50883a04><tr data-v-50883a04><th data-v-50883a04>#</th><th data-v-50883a04>Investigation</th><th data-v-50883a04>Uses in period</th></tr></thead><tbody data-v-50883a04><!--[-->`);
        ssrRenderList([...unref(data).investigations].sort((a, b) => b.uses - a.uses || a.text.localeCompare(b.text)), (item, index) => {
          _push(`<tr data-v-50883a04><td data-v-50883a04>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(index + 1))}</td><th scope="row" data-v-50883a04><bdi data-v-50883a04>${ssrInterpolate(item.text)}</bdi></th><td data-v-50883a04>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.uses))}</td></tr>`);
        });
        _push(`<!--]-->`);
        if (!unref(data).investigations.length) {
          _push(`<tr data-v-50883a04><td colspan="3" class="empty-report" data-v-50883a04>No investigations have been saved.</td></tr>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</tbody></table></div></section><p class="reports-disclaimer" data-v-50883a04>Reports contain records for your account only. Use “Print / PDF” on a section, then choose a printer or “Save as PDF” in the browser print dialog.</p><!--]-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reports.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reports = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-50883a04"]]);

export { reports as default };;globalThis.__timing__.logEnd('Load chunks/build/reports-C3kv4jev');
//# sourceMappingURL=reports-C3kv4jev.mjs.map
