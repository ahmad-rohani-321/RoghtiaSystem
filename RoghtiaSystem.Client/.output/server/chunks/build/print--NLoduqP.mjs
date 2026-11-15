globalThis.__timing__.logStart('Load chunks/build/print--NLoduqP');import { a as __nuxt_component_1, _ as __nuxt_component_5 } from './PvButton-5I-3PpYG.mjs';
import { _ as __nuxt_component_2 } from './PrescriptionPrintOptions-CUKcSpBc.mjs';
import { f as formatDateTime, l as localNumber } from './useDateFormatting-C8ULAVEm.mjs';
import { defineComponent, ref, computed, watch, mergeProps, unref, withCtx, createTextVNode, isRef, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { q as useRoute, w as createError, a as useAuth, u as useHead, n as navigateTo } from './server.mjs';
import { u as useTreatments } from './useTreatments-DdP0boja.mjs';
import { u as useDoctorInformation } from './useDoctorInformation-D_vqrEJe.mjs';
import { u as useAppToast } from './useAppToast-CCe0hF_z.mjs';
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
import './PvCheckbox-BYapV9Gx.mjs';
import './checkbox-DFdV5SYi.mjs';
import '@primeuix/utils';
import './index-DwchBqek.mjs';
import './index-C7uVuEHH.mjs';
import './index-CF4f6bc-.mjs';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/styles/base';
import '@primeuix/utils/dom';
import '@primeuix/utils/zindex';
import '@primeuix/utils/uuid';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import '@internationalized/date';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "print",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const id = Number(route.params.id);
    if (!Number.isInteger(id) || id < 1 || id > 2147483647) throw createError({ statusCode: 404 });
    const api = useTreatments();
    const doctor = useDoctorInformation();
    const auth = useAuth();
    const treatment = ref(null);
    const loading = ref(true);
    const loadError = ref("");
    const requestPending = ref(false);
    const printPending = ref(false);
    const printAsA5 = ref(route.query.a5 === "1");
    const printGrayscale = ref(route.query.grayscale === "1");
    const printPreferencesReady = ref(false);
    const toast = useAppToast();
    let printPreferencesSaveTask = Promise.resolve();
    const info = computed(() => doctor.information.value);
    const doctorName = computed(() => info.value?.doctorNameEnglish || auth.user.value?.userName || "Doctor");
    const doctorNamePashto = computed(() => info.value?.doctorNamePashto?.trim() || "");
    const profession = computed(() => info.value?.doctorProfessionEnglish || "");
    const professionPashto = computed(() => info.value?.doctorProfessionPashto?.trim() || "");
    const hospitalLogo = computed(() => info.value?.hospitalLogo || null);
    const hospitalName = computed(() => info.value?.hospitalNamePashto?.trim() || "");
    const hospitalAddress = computed(() => info.value?.hospitalAddress?.trim() || "");
    const hospitalPhoneNumbers = computed(() => info.value?.hospitalPhoneNumbers?.trim() || "");
    const doctorLogo = computed(() => info.value?.doctorLogo || null);
    const genders = { Male: "Male", Female: "Female", Other: "Other" };
    const dateParts = computed(() => (treatment.value ? formatDateTime(treatment.value.recordedAtUtc) : "").split(", "));
    const prescriptionNumber = computed(() => {
      if (!treatment.value) return "";
      const year = new Date(treatment.value.recordedAtUtc).getUTCFullYear();
      return `RX-${year}-${String(treatment.value.id).padStart(6, "0")}`;
    });
    const clinicalNotesText = computed(() => treatment.value?.clinicalNotes.map((note) => note.text.trim()).filter(Boolean).join(", ") || "");
    const additionalInstructionsText = computed(() => {
      const items = treatment.value?.additionalInstructionItems.map((item) => item.text.trim()).filter(Boolean) || [];
      const legacy = treatment.value?.additionalInstructions?.trim().replace(/\s*[\r\n]+\s*/g, ", ");
      if (legacy) items.push(legacy);
      return items.join(", ");
    });
    const diagnosticsText = computed(() => {
      const hasSeparatedItems = Boolean(treatment.value?.diagnostics?.length || treatment.value?.investigations?.length);
      const items = hasSeparatedItems ? treatment.value?.diagnostics || [] : treatment.value?.diagnosticInvestigations || [];
      return items.map((item) => item.text.trim()).filter(Boolean).join(", ");
    });
    const investigationsText = computed(() => treatment.value?.investigations.map((item) => item.text.trim()).filter(Boolean).join(", ") || "");
    async function printDocument() {
      if (!treatment.value || loading.value || loadError.value || printPending.value) return;
      printPending.value = true;
      await printPreferencesSaveTask;
      const pageStyle = (void 0).createElement("style");
      pageStyle.textContent = `@media print { @page { size: ${printAsA5.value ? "A5" : "A4"} portrait; margin: ${printAsA5.value ? "7mm" : "0 0 30mm 0"}; } }`;
      (void 0).head.append(pageStyle);
      try {
        await nextTick();
        await (void 0).fonts.ready;
        await Promise.all(Array.from((void 0).querySelectorAll(".print-sheet img")).map((image) => image.decode().catch(() => {
        })));
        await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
        (void 0).print();
      } finally {
        pageStyle.remove();
        printPending.value = false;
      }
    }
    async function loadTreatment() {
      if (requestPending.value) return;
      requestPending.value = true;
      loading.value = true;
      loadError.value = "";
      try {
        treatment.value = await api.get(id);
        try {
          const savedPreferences = await doctor.load(true);
          if (route.query.a5 === void 0) printAsA5.value = !!savedPreferences?.printOnA5;
          if (route.query.grayscale === void 0) printGrayscale.value = !!savedPreferences?.printGrayscale;
        } catch {
        }
        printPreferencesReady.value = true;
      } catch (error) {
        const failure = error;
        const status = failure.statusCode || failure.status;
        if (status === 401) {
          await navigateTo({ path: "/login", query: { redirect: route.fullPath } });
          return;
        }
        loadError.value = status === 404 ? "This treatment was not found or is no longer available to your account." : "The treatment could not be loaded. Check that the server is running, then try again.";
      } finally {
        requestPending.value = false;
        loading.value = false;
      }
      if (route.query.auto === "1" && treatment.value && !loadError.value) {
        await printDocument();
      }
    }
    watch([printAsA5, printGrayscale], ([printOnA5, printGrayscaleValue]) => {
      if (!printPreferencesReady.value) return;
      printPreferencesSaveTask = printPreferencesSaveTask.then(async () => {
        try {
          await doctor.savePrintPreferences({ printOnA5, printGrayscale: printGrayscaleValue });
        } catch {
          toast.add({ title: "Print preferences not saved", description: "Please try again.", color: "error" });
        }
      });
    });
    useHead({ title: `Prescription ${prescriptionNumber.value} — RoghtiaSystem` });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PvIcon = __nuxt_component_1;
      const _component_PvButton = __nuxt_component_5;
      const _component_PrescriptionPrintOptions = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["print-page", { "print-page-a5": unref(printAsA5) }]
      }, _attrs))} data-v-cacec218>`);
      if (unref(loading)) {
        _push(`<div class="print-state" role="status" data-v-cacec218>`);
        _push(ssrRenderComponent(_component_PvIcon, {
          name: "i-lucide-loader-circle",
          class: "animate-spin"
        }, null, _parent));
        _push(`Loading treatment…</div>`);
      } else if (unref(loadError)) {
        _push(`<div class="print-state print-error" role="alert" data-v-cacec218><span data-v-cacec218>${ssrInterpolate(unref(loadError))}</span>`);
        _push(ssrRenderComponent(_component_PvButton, {
          type: "button",
          color: "neutral",
          variant: "outline",
          icon: "i-lucide-refresh-cw",
          onClick: loadTreatment
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
        _push(ssrRenderComponent(_component_PvButton, {
          to: "/treatments",
          color: "neutral",
          variant: "ghost"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Back`);
            } else {
              return [
                createTextVNode("Back")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else if (unref(treatment)) {
        _push(`<!--[--><div class="print-toolbar" data-v-cacec218>`);
        _push(ssrRenderComponent(_component_PvButton, {
          to: "/treatments",
          color: "neutral",
          variant: "outline",
          icon: "i-lucide-arrow-left"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Back`);
            } else {
              return [
                createTextVNode("Back")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="print-toolbar-actions" data-v-cacec218>`);
        _push(ssrRenderComponent(_component_PvButton, {
          to: "/treatments/new",
          color: "primary",
          variant: "soft",
          icon: "i-lucide-plus"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`New`);
            } else {
              return [
                createTextVNode("New")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_PrescriptionPrintOptions, {
          a5: unref(printAsA5),
          "onUpdate:a5": ($event) => isRef(printAsA5) ? printAsA5.value = $event : null,
          grayscale: unref(printGrayscale),
          "onUpdate:grayscale": ($event) => isRef(printGrayscale) ? printGrayscale.value = $event : null
        }, null, _parent));
        _push(ssrRenderComponent(_component_PvButton, {
          type: "button",
          icon: "i-lucide-printer",
          loading: unref(printPending),
          onClick: printDocument
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Print`);
            } else {
              return [
                createTextVNode("Print")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><article class="${ssrRenderClass([{ "print-sheet-a5": unref(printAsA5), "print-sheet-grayscale": unref(printGrayscale) }, "print-sheet"])}" dir="ltr" aria-label="Printable treatment prescription" data-v-cacec218>`);
        if (unref(doctorLogo)) {
          _push(`<img class="doctor-watermark"${ssrRenderAttr("src", unref(doctorLogo))} alt="" aria-hidden="true" data-v-cacec218>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<header class="sheet-header" data-v-cacec218><div class="doctor-brand doctor-brand-en" data-v-cacec218>`);
        if (unref(hospitalLogo)) {
          _push(`<img class="hospital-logo"${ssrRenderAttr("src", unref(hospitalLogo))} alt="Hospital logo" data-v-cacec218>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="doctor-credentials" data-v-cacec218><h2 data-v-cacec218><bdi data-v-cacec218>${ssrInterpolate(unref(doctorName))}</bdi></h2>`);
        if (unref(profession)) {
          _push(`<p data-v-cacec218><bdi data-v-cacec218>${ssrInterpolate(unref(profession))}</bdi></p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="doctor-logo-frame" data-v-cacec218>`);
        if (unref(doctorLogo)) {
          _push(`<img${ssrRenderAttr("src", unref(doctorLogo))} alt="Doctor logo" data-v-cacec218>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="doctor-brand doctor-brand-ps" dir="rtl" data-v-cacec218>`);
        if (unref(hospitalName)) {
          _push(`<h2 class="hospital-name" data-v-cacec218><bdi data-v-cacec218>${ssrInterpolate(unref(hospitalName))}</bdi></h2>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(doctorNamePashto)) {
          _push(`<p class="doctor-name-ps" data-v-cacec218><bdi data-v-cacec218>${ssrInterpolate(unref(doctorNamePashto))}</bdi></p>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(professionPashto)) {
          _push(`<p data-v-cacec218><bdi data-v-cacec218>${ssrInterpolate(unref(professionPashto))}</bdi></p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></header><section class="patient-box" data-v-cacec218><h2 data-v-cacec218>`);
        _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-user-round" }, null, _parent));
        _push(` Patient information</h2><div class="patient-grid" data-v-cacec218><dl data-v-cacec218><div data-v-cacec218><dt data-v-cacec218>Name</dt><dd data-v-cacec218><bdi data-v-cacec218>${ssrInterpolate(unref(treatment).patient.name)}</bdi></dd></div><div data-v-cacec218><dt data-v-cacec218>Code</dt><dd dir="ltr" data-v-cacec218>${ssrInterpolate(unref(treatment).patient.code)}</dd></div><div data-v-cacec218><dt data-v-cacec218>Age / Gender</dt><dd data-v-cacec218>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(treatment).patient.age))} years / ${ssrInterpolate(genders[unref(treatment).patient.gender] || unref(treatment).patient.gender)}</dd></div><div data-v-cacec218><dt data-v-cacec218>Phone</dt><dd dir="ltr" data-v-cacec218>${ssrInterpolate(unref(treatment).patient.phone || "—")}</dd></div></dl><dl data-v-cacec218><div data-v-cacec218><dt data-v-cacec218>Date</dt><dd data-v-cacec218>${ssrInterpolate(unref(dateParts)[0])}</dd></div><div data-v-cacec218><dt data-v-cacec218>Time</dt><dd dir="ltr" data-v-cacec218>${ssrInterpolate(unref(dateParts)[1])}</dd></div><div data-v-cacec218><dt data-v-cacec218>Blood pressure</dt><dd dir="ltr" data-v-cacec218>${ssrInterpolate(unref(treatment).bloodPressure || "—")}</dd></div><div data-v-cacec218><dt data-v-cacec218>Address</dt><dd data-v-cacec218><bdi data-v-cacec218>${ssrInterpolate(unref(treatment).patient.address || "—")}</bdi></dd></div></dl></div></section>`);
        if (unref(treatment).prescriptionItems.length) {
          _push(`<!--[--><div class="rx-heading" data-v-cacec218><div class="rx-title" data-v-cacec218><span class="rx-mark" data-v-cacec218>R<sub data-v-cacec218>x</sub></span><h2 data-v-cacec218>Prescription</h2></div></div><section class="prescription-section" aria-label="Prescription medications" data-v-cacec218><table data-v-cacec218><thead data-v-cacec218><tr data-v-cacec218><th data-v-cacec218>#</th><th data-v-cacec218>Medications</th><th data-v-cacec218>Type</th><th data-v-cacec218>Dose</th><th data-v-cacec218>Frequency</th><th data-v-cacec218>Duration</th></tr></thead><tbody data-v-cacec218><!--[-->`);
          ssrRenderList(unref(treatment).prescriptionItems, (item) => {
            _push(`<tr data-v-cacec218><td data-v-cacec218><span class="number-circle" data-v-cacec218>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.position))}</span></td><td class="medicine-name" data-v-cacec218><bdi data-v-cacec218>${ssrInterpolate(item.medicationName)}</bdi></td><td data-v-cacec218>${ssrInterpolate(item.medicationType)}</td><td data-v-cacec218>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.dose))}</td><td data-v-cacec218>${ssrInterpolate(item.frequency)}</td><td data-v-cacec218>${ssrInterpolate(item.duration)}</td></tr>`);
          });
          _push(`<!--]--></tbody></table></section><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (unref(clinicalNotesText) || unref(additionalInstructionsText) || unref(diagnosticsText) || unref(investigationsText)) {
          _push(`<div class="prescription-notes-grid" data-v-cacec218>`);
          if (unref(clinicalNotesText)) {
            _push(`<section class="notes-box rx-note-box" data-v-cacec218><h2 data-v-cacec218>`);
            _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-clipboard-list" }, null, _parent));
            _push(` Clinical notes</h2><p data-v-cacec218><bdi data-v-cacec218>${ssrInterpolate(unref(clinicalNotesText))}</bdi></p></section>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(additionalInstructionsText)) {
            _push(`<section class="instructions-box rx-note-box" aria-label="Additional instructions" data-v-cacec218><h2 data-v-cacec218>`);
            _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-info" }, null, _parent));
            _push(` Additional instructions</h2><p data-v-cacec218><bdi data-v-cacec218>${ssrInterpolate(unref(additionalInstructionsText))}</bdi></p></section>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(diagnosticsText)) {
            _push(`<section class="instructions-box rx-note-box" aria-label="Diagnostics" data-v-cacec218><h2 data-v-cacec218>`);
            _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-microscope" }, null, _parent));
            _push(` Diagnostics</h2><p data-v-cacec218><bdi data-v-cacec218>${ssrInterpolate(unref(diagnosticsText))}</bdi></p></section>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(investigationsText)) {
            _push(`<section class="instructions-box rx-note-box" aria-label="Investigations" data-v-cacec218><h2 data-v-cacec218>`);
            _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-microscope" }, null, _parent));
            _push(` Investigations</h2><p data-v-cacec218><bdi data-v-cacec218>${ssrInterpolate(unref(investigationsText))}</bdi></p></section>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<footer class="sheet-footer" data-v-cacec218><div class="signature-block" data-v-cacec218><strong data-v-cacec218>Free follow up upto 3 days</strong></div><div class="footer-date" data-v-cacec218><span data-v-cacec218>Doctor signature: ________________</span></div>`);
        if (unref(hospitalAddress) || unref(hospitalPhoneNumbers)) {
          _push(`<div class="hospital-footer" data-v-cacec218>`);
          if (unref(hospitalAddress)) {
            _push(`<span data-v-cacec218>Address: <bdi data-v-cacec218>${ssrInterpolate(unref(hospitalAddress))}</bdi></span>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(hospitalPhoneNumbers)) {
            _push(`<span dir="ltr" data-v-cacec218>Phone: ${ssrInterpolate(unref(hospitalPhoneNumbers))}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</footer><div class="green-wave" aria-hidden="true" data-v-cacec218></div></article><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/treatments/[id]/print.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const print = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cacec218"]]);

export { print as default };;globalThis.__timing__.logEnd('Load chunks/build/print--NLoduqP');
//# sourceMappingURL=print--NLoduqP.mjs.map
