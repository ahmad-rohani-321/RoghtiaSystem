globalThis.__timing__.logStart('Load chunks/build/TreatmentEditor-CX1LTrZh');import { _ as __nuxt_component_5, a as __nuxt_component_1 } from './PvButton-5I-3PpYG.mjs';
import { _ as __nuxt_component_2 } from './PvFormField-Cv2Q-Mwy.mjs';
import { _ as __nuxt_component_3 } from './PvInput-q91fCord.mjs';
import { _ as __nuxt_component_4 } from './PvSelect-DVoANLH5.mjs';
import { _ as __nuxt_component_6 } from './PvTextarea-BrsvKHQ-.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-Ca5hbmYf.mjs';
import { u as useMedications, _ as __nuxt_component_3$1 } from './useMedications-sVQ_F9YE.mjs';
import { _ as __nuxt_component_8 } from './PvCheckbox-BYapV9Gx.mjs';
import { _ as __nuxt_component_2$1 } from './PrescriptionPrintOptions-CUKcSpBc.mjs';
import { _ as __nuxt_component_0$2 } from './PvModal-DEtZu0U3.mjs';
import { l as localNumber, f as formatDateTime } from './useDateFormatting-C8ULAVEm.mjs';
import { defineComponent, computed, ref, reactive, watch, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, isRef, createVNode, toDisplayString, withKeys, openBlock, createBlock, Fragment, renderList, createCommentVNode, withModifiers, useModel, mergeModels, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { u as useTreatments } from './useTreatments-DdP0boja.mjs';
import { u as useHead, a as useAuth, n as navigateTo } from './server.mjs';
import { u as useAppToast } from './useAppToast-CCe0hF_z.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-8jYXDYbZ.mjs';
import { a7 as prescriptionFrequencies, a8 as prescriptionFrequencyCodes } from '../_/nitro.mjs';
import { u as usePatients } from './usePatients-Dx8VPMJC.mjs';
import { u as useDoctorInformation } from './useDoctorInformation-D_vqrEJe.mjs';

const pageSize = 8;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PatientTreatmentHistoryModal",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    patient: {}
  }, {
    "open": { type: Boolean, ...{ default: false } },
    "openModifiers": {}
  }),
  emits: ["update:open"],
  setup(__props) {
    const open = useModel(__props, "open");
    const props = __props;
    const api = useTreatments();
    const auth = useAuth();
    const toast = useAppToast();
    const result = ref({ items: [], total: 0, page: 1, pageSize });
    const loading = ref(false);
    const detailLoadingId = ref(null);
    const selectedTreatment = ref(null);
    const errorMessage = ref("");
    const totalPages = computed(() => Math.max(1, Math.ceil(result.value.total / pageSize)));
    const genders = { Male: "Male", Female: "Female", Other: "Other" };
    let requestSequence = 0;
    async function load(page = 1) {
      const request = ++requestSequence;
      const patientId = props.patient.id;
      loading.value = true;
      errorMessage.value = "";
      selectedTreatment.value = null;
      try {
        const response = await api.list({ patientId, page, pageSize });
        if (request !== requestSequence || patientId !== props.patient.id) return;
        result.value = response;
      } catch (failure) {
        if (request !== requestSequence || patientId !== props.patient.id) return;
        const response = failure;
        if ((response.statusCode || response.status) === 401) {
          await auth.refresh();
          await navigateTo("/login");
          return;
        }
        errorMessage.value = "Unable to load this patient’s treatment history.";
      } finally {
        if (request === requestSequence) loading.value = false;
      }
    }
    async function showDetails(item) {
      if (detailLoadingId.value !== null) return;
      const patientId = props.patient.id;
      detailLoadingId.value = item.id;
      try {
        selectedTreatment.value = await api.get(item.id);
        if (patientId !== props.patient.id || selectedTreatment.value.patient.id !== patientId) selectedTreatment.value = null;
      } catch {
        toast.add({ title: "Unable to load treatment details", description: "Please try again.", color: "error" });
      } finally {
        detailLoadingId.value = null;
      }
    }
    watch(open, (visible) => {
      if (visible) void load(1);
      else {
        ++requestSequence;
        selectedTreatment.value = null;
      }
    });
    watch(() => props.patient.id, () => {
      if (open.value) void load(1);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PvModal = __nuxt_component_0$2;
      const _component_PvIcon = __nuxt_component_1;
      const _component_PvButton = __nuxt_component_5;
      _push(ssrRenderComponent(_component_PvModal, mergeProps({
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event,
        title: `${__props.patient.name} · treatment history`,
        description: "Previous visits and saved treatment details.",
        dir: "ltr",
        ui: { content: "w-[min(960px,calc(100vw-1.5rem))] max-w-none min-w-0", body: "min-w-0" }
      }, _attrs), {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="history-modal" data-v-d9e031f3${_scopeId}><div class="history-patient" data-v-d9e031f3${_scopeId}><span class="history-avatar" data-v-d9e031f3${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-user-round" }, null, _parent2, _scopeId));
            _push2(`</span><div data-v-d9e031f3${_scopeId}><strong data-v-d9e031f3${_scopeId}><bdi data-v-d9e031f3${_scopeId}>${ssrInterpolate(__props.patient.name)}</bdi></strong><span data-v-d9e031f3${_scopeId}>${ssrInterpolate(__props.patient.code)} `);
            if (__props.patient.phone) {
              _push2(`<!--[-->· <bdi dir="ltr" data-v-d9e031f3${_scopeId}>${ssrInterpolate(__props.patient.phone)}</bdi><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</span></div><span class="history-total" data-v-d9e031f3${_scopeId}>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(result).total))} visits</span></div>`);
            if (unref(errorMessage)) {
              _push2(`<div class="history-state history-error" role="alert" data-v-d9e031f3${_scopeId}>`);
              _push2(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-circle-alert" }, null, _parent2, _scopeId));
              _push2(`<span data-v-d9e031f3${_scopeId}>${ssrInterpolate(unref(errorMessage))}</span>`);
              _push2(ssrRenderComponent(_component_PvButton, {
                type: "button",
                color: "neutral",
                variant: "outline",
                loading: unref(loading),
                onClick: ($event) => load(unref(result).page)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Try again`);
                  } else {
                    return [
                      createTextVNode("Try again")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else if (unref(loading)) {
              _push2(`<div class="history-state" role="status" data-v-d9e031f3${_scopeId}>`);
              _push2(ssrRenderComponent(_component_PvIcon, {
                name: "i-lucide-loader-circle",
                class: "animate-spin"
              }, null, _parent2, _scopeId));
              _push2(`<span data-v-d9e031f3${_scopeId}>Loading treatment history…</span></div>`);
            } else if (unref(result).items.length) {
              _push2(`<div class="history-list" data-v-d9e031f3${_scopeId}><!--[-->`);
              ssrRenderList(unref(result).items, (item) => {
                _push2(`<article class="history-visit" data-v-d9e031f3${_scopeId}><div class="visit-main" data-v-d9e031f3${_scopeId}><div class="visit-heading" data-v-d9e031f3${_scopeId}><strong data-v-d9e031f3${_scopeId}>${ssrInterpolate(("formatDateTime" in _ctx ? _ctx.formatDateTime : unref(formatDateTime))(item.recordedAtUtc))}</strong><span data-v-d9e031f3${_scopeId}>Treatment #${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.id))}</span></div><div class="visit-summary" data-v-d9e031f3${_scopeId}><span data-v-d9e031f3${_scopeId}>BP: <bdi dir="ltr" data-v-d9e031f3${_scopeId}>${ssrInterpolate(item.bloodPressure || "—")}</bdi></span><span data-v-d9e031f3${_scopeId}>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.medicationCount))} medications</span><span data-v-d9e031f3${_scopeId}>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.clinicalNoteCount))} clinical notes</span></div></div>`);
                _push2(ssrRenderComponent(_component_PvButton, {
                  type: "button",
                  color: "neutral",
                  variant: "outline",
                  icon: "i-lucide-eye",
                  loading: unref(detailLoadingId) === item.id,
                  disabled: unref(detailLoadingId) !== null,
                  onClick: ($event) => showDetails(item)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`Details`);
                    } else {
                      return [
                        createTextVNode("Details")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</article>`);
              });
              _push2(`<!--]-->`);
              if (unref(totalPages) > 1) {
                _push2(`<nav class="history-pagination" aria-label="Treatment history pages" data-v-d9e031f3${_scopeId}><span data-v-d9e031f3${_scopeId}>Page ${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(result).page))} of ${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(totalPages)))}</span><div data-v-d9e031f3${_scopeId}>`);
                _push2(ssrRenderComponent(_component_PvButton, {
                  type: "button",
                  color: "neutral",
                  variant: "outline",
                  icon: "i-lucide-chevron-left",
                  "aria-label": "Previous page",
                  disabled: unref(result).page <= 1 || unref(loading),
                  onClick: ($event) => load(unref(result).page - 1)
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_PvButton, {
                  type: "button",
                  color: "neutral",
                  variant: "outline",
                  icon: "i-lucide-chevron-right",
                  "aria-label": "Next page",
                  disabled: unref(result).page >= unref(totalPages) || unref(loading),
                  onClick: ($event) => load(unref(result).page + 1)
                }, null, _parent2, _scopeId));
                _push2(`</div></nav>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<div class="history-state history-empty" data-v-d9e031f3${_scopeId}>`);
              _push2(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-clipboard-list" }, null, _parent2, _scopeId));
              _push2(`<strong data-v-d9e031f3${_scopeId}>No previous treatments</strong><span data-v-d9e031f3${_scopeId}>This patient has no saved treatment history yet.</span></div>`);
            }
            if (unref(selectedTreatment)) {
              _push2(`<section class="history-details" aria-live="polite" data-v-d9e031f3${_scopeId}><header data-v-d9e031f3${_scopeId}><div data-v-d9e031f3${_scopeId}><span class="detail-eyebrow" data-v-d9e031f3${_scopeId}>Visit details</span><h3 data-v-d9e031f3${_scopeId}>Treatment #${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(selectedTreatment).id))}</h3></div>`);
              _push2(ssrRenderComponent(_component_PvButton, {
                type: "button",
                color: "neutral",
                variant: "ghost",
                icon: "i-lucide-x",
                "aria-label": "Close treatment details",
                onClick: ($event) => selectedTreatment.value = null
              }, null, _parent2, _scopeId));
              _push2(`</header><dl class="detail-facts" data-v-d9e031f3${_scopeId}><div data-v-d9e031f3${_scopeId}><dt data-v-d9e031f3${_scopeId}>Date and time</dt><dd data-v-d9e031f3${_scopeId}>${ssrInterpolate(("formatDateTime" in _ctx ? _ctx.formatDateTime : unref(formatDateTime))(unref(selectedTreatment).recordedAtUtc))}</dd></div><div data-v-d9e031f3${_scopeId}><dt data-v-d9e031f3${_scopeId}>Patient code</dt><dd data-v-d9e031f3${_scopeId}>${ssrInterpolate(unref(selectedTreatment).patient.code)}</dd></div><div data-v-d9e031f3${_scopeId}><dt data-v-d9e031f3${_scopeId}>Age / gender</dt><dd data-v-d9e031f3${_scopeId}>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(selectedTreatment).patient.age))} years · ${ssrInterpolate(genders[unref(selectedTreatment).patient.gender] || unref(selectedTreatment).patient.gender)}</dd></div><div data-v-d9e031f3${_scopeId}><dt data-v-d9e031f3${_scopeId}>Phone</dt><dd dir="ltr" data-v-d9e031f3${_scopeId}>${ssrInterpolate(unref(selectedTreatment).patient.phone || "—")}</dd></div><div data-v-d9e031f3${_scopeId}><dt data-v-d9e031f3${_scopeId}>Blood pressure</dt><dd dir="ltr" data-v-d9e031f3${_scopeId}>${ssrInterpolate(unref(selectedTreatment).bloodPressure || "—")}</dd></div><div data-v-d9e031f3${_scopeId}><dt data-v-d9e031f3${_scopeId}>Address</dt><dd data-v-d9e031f3${_scopeId}><bdi data-v-d9e031f3${_scopeId}>${ssrInterpolate(unref(selectedTreatment).patient.address || "—")}</bdi></dd></div></dl><div class="detail-group" data-v-d9e031f3${_scopeId}><h4 data-v-d9e031f3${_scopeId}>Medications and prescription</h4>`);
              if (unref(selectedTreatment).prescriptionItems.length) {
                _push2(`<div class="detail-table-wrap" data-v-d9e031f3${_scopeId}><table data-v-d9e031f3${_scopeId}><thead data-v-d9e031f3${_scopeId}><tr data-v-d9e031f3${_scopeId}><th data-v-d9e031f3${_scopeId}>No.</th><th data-v-d9e031f3${_scopeId}>Medication</th><th data-v-d9e031f3${_scopeId}>Type</th><th data-v-d9e031f3${_scopeId}>Dose</th><th data-v-d9e031f3${_scopeId}>Frequency</th><th data-v-d9e031f3${_scopeId}>Duration</th></tr></thead><tbody data-v-d9e031f3${_scopeId}><!--[-->`);
                ssrRenderList(unref(selectedTreatment).prescriptionItems, (medicine) => {
                  _push2(`<tr data-v-d9e031f3${_scopeId}><td data-v-d9e031f3${_scopeId}>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(medicine.position))}</td><td data-v-d9e031f3${_scopeId}><bdi data-v-d9e031f3${_scopeId}>${ssrInterpolate(medicine.medicationName)}</bdi></td><td data-v-d9e031f3${_scopeId}>${ssrInterpolate(medicine.medicationType)}</td><td data-v-d9e031f3${_scopeId}>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(medicine.dose))}</td><td data-v-d9e031f3${_scopeId}>${ssrInterpolate(medicine.frequency)}</td><td data-v-d9e031f3${_scopeId}>${ssrInterpolate(medicine.duration)}</td></tr>`);
                });
                _push2(`<!--]--></tbody></table></div>`);
              } else {
                _push2(`<p class="detail-muted" data-v-d9e031f3${_scopeId}>No medications were prescribed.</p>`);
              }
              _push2(`</div>`);
              if (unref(selectedTreatment).clinicalNotes.length) {
                _push2(`<div class="detail-group" data-v-d9e031f3${_scopeId}><h4 data-v-d9e031f3${_scopeId}>Clinical notes</h4><p data-v-d9e031f3${_scopeId}>${ssrInterpolate(unref(selectedTreatment).clinicalNotes.map((note) => note.text).join(", "))}</p></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(selectedTreatment).additionalInstructionItems.length || unref(selectedTreatment).additionalInstructions) {
                _push2(`<div class="detail-group" data-v-d9e031f3${_scopeId}><h4 data-v-d9e031f3${_scopeId}>Additional instructions</h4><p data-v-d9e031f3${_scopeId}>${ssrInterpolate([...unref(selectedTreatment).additionalInstructionItems.map((item) => item.text), ...unref(selectedTreatment).additionalInstructions ? [unref(selectedTreatment).additionalInstructions] : []].join(", "))}</p></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(selectedTreatment).diagnostics?.length || !unref(selectedTreatment).investigations?.length && unref(selectedTreatment).diagnosticInvestigations.length) {
                _push2(`<div class="detail-group" data-v-d9e031f3${_scopeId}><h4 data-v-d9e031f3${_scopeId}>Diagnostics</h4><p data-v-d9e031f3${_scopeId}>${ssrInterpolate((unref(selectedTreatment).diagnostics?.length ? unref(selectedTreatment).diagnostics : unref(selectedTreatment).diagnosticInvestigations).map((item) => item.text).join(", "))}</p></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(selectedTreatment).investigations?.length) {
                _push2(`<div class="detail-group" data-v-d9e031f3${_scopeId}><h4 data-v-d9e031f3${_scopeId}>Investigations</h4><p data-v-d9e031f3${_scopeId}>${ssrInterpolate(unref(selectedTreatment).investigations.map((item) => item.text).join(", "))}</p></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</section>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "history-modal" }, [
                createVNode("div", { class: "history-patient" }, [
                  createVNode("span", { class: "history-avatar" }, [
                    createVNode(_component_PvIcon, { name: "i-lucide-user-round" })
                  ]),
                  createVNode("div", null, [
                    createVNode("strong", null, [
                      createVNode("bdi", null, toDisplayString(__props.patient.name), 1)
                    ]),
                    createVNode("span", null, [
                      createTextVNode(toDisplayString(__props.patient.code) + " ", 1),
                      __props.patient.phone ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createTextVNode("· "),
                        createVNode("bdi", { dir: "ltr" }, toDisplayString(__props.patient.phone), 1)
                      ], 64)) : createCommentVNode("", true)
                    ])
                  ]),
                  createVNode("span", { class: "history-total" }, toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(result).total)) + " visits", 1)
                ]),
                unref(errorMessage) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "history-state history-error",
                  role: "alert"
                }, [
                  createVNode(_component_PvIcon, { name: "i-lucide-circle-alert" }),
                  createVNode("span", null, toDisplayString(unref(errorMessage)), 1),
                  createVNode(_component_PvButton, {
                    type: "button",
                    color: "neutral",
                    variant: "outline",
                    loading: unref(loading),
                    onClick: ($event) => load(unref(result).page)
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Try again")
                    ]),
                    _: 1
                  }, 8, ["loading", "onClick"])
                ])) : unref(loading) ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "history-state",
                  role: "status"
                }, [
                  createVNode(_component_PvIcon, {
                    name: "i-lucide-loader-circle",
                    class: "animate-spin"
                  }),
                  createVNode("span", null, "Loading treatment history…")
                ])) : unref(result).items.length ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "history-list"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(result).items, (item) => {
                    return openBlock(), createBlock("article", {
                      key: item.id,
                      class: "history-visit"
                    }, [
                      createVNode("div", { class: "visit-main" }, [
                        createVNode("div", { class: "visit-heading" }, [
                          createVNode("strong", null, toDisplayString(("formatDateTime" in _ctx ? _ctx.formatDateTime : unref(formatDateTime))(item.recordedAtUtc)), 1),
                          createVNode("span", null, "Treatment #" + toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.id)), 1)
                        ]),
                        createVNode("div", { class: "visit-summary" }, [
                          createVNode("span", null, [
                            createTextVNode("BP: "),
                            createVNode("bdi", { dir: "ltr" }, toDisplayString(item.bloodPressure || "—"), 1)
                          ]),
                          createVNode("span", null, toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.medicationCount)) + " medications", 1),
                          createVNode("span", null, toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(item.clinicalNoteCount)) + " clinical notes", 1)
                        ])
                      ]),
                      createVNode(_component_PvButton, {
                        type: "button",
                        color: "neutral",
                        variant: "outline",
                        icon: "i-lucide-eye",
                        loading: unref(detailLoadingId) === item.id,
                        disabled: unref(detailLoadingId) !== null,
                        onClick: ($event) => showDetails(item)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Details")
                        ]),
                        _: 1
                      }, 8, ["loading", "disabled", "onClick"])
                    ]);
                  }), 128)),
                  unref(totalPages) > 1 ? (openBlock(), createBlock("nav", {
                    key: 0,
                    class: "history-pagination",
                    "aria-label": "Treatment history pages"
                  }, [
                    createVNode("span", null, "Page " + toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(result).page)) + " of " + toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(totalPages))), 1),
                    createVNode("div", null, [
                      createVNode(_component_PvButton, {
                        type: "button",
                        color: "neutral",
                        variant: "outline",
                        icon: "i-lucide-chevron-left",
                        "aria-label": "Previous page",
                        disabled: unref(result).page <= 1 || unref(loading),
                        onClick: ($event) => load(unref(result).page - 1)
                      }, null, 8, ["disabled", "onClick"]),
                      createVNode(_component_PvButton, {
                        type: "button",
                        color: "neutral",
                        variant: "outline",
                        icon: "i-lucide-chevron-right",
                        "aria-label": "Next page",
                        disabled: unref(result).page >= unref(totalPages) || unref(loading),
                        onClick: ($event) => load(unref(result).page + 1)
                      }, null, 8, ["disabled", "onClick"])
                    ])
                  ])) : createCommentVNode("", true)
                ])) : (openBlock(), createBlock("div", {
                  key: 3,
                  class: "history-state history-empty"
                }, [
                  createVNode(_component_PvIcon, { name: "i-lucide-clipboard-list" }),
                  createVNode("strong", null, "No previous treatments"),
                  createVNode("span", null, "This patient has no saved treatment history yet.")
                ])),
                unref(selectedTreatment) ? (openBlock(), createBlock("section", {
                  key: 4,
                  class: "history-details",
                  "aria-live": "polite"
                }, [
                  createVNode("header", null, [
                    createVNode("div", null, [
                      createVNode("span", { class: "detail-eyebrow" }, "Visit details"),
                      createVNode("h3", null, "Treatment #" + toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(selectedTreatment).id)), 1)
                    ]),
                    createVNode(_component_PvButton, {
                      type: "button",
                      color: "neutral",
                      variant: "ghost",
                      icon: "i-lucide-x",
                      "aria-label": "Close treatment details",
                      onClick: ($event) => selectedTreatment.value = null
                    }, null, 8, ["onClick"])
                  ]),
                  createVNode("dl", { class: "detail-facts" }, [
                    createVNode("div", null, [
                      createVNode("dt", null, "Date and time"),
                      createVNode("dd", null, toDisplayString(("formatDateTime" in _ctx ? _ctx.formatDateTime : unref(formatDateTime))(unref(selectedTreatment).recordedAtUtc)), 1)
                    ]),
                    createVNode("div", null, [
                      createVNode("dt", null, "Patient code"),
                      createVNode("dd", null, toDisplayString(unref(selectedTreatment).patient.code), 1)
                    ]),
                    createVNode("div", null, [
                      createVNode("dt", null, "Age / gender"),
                      createVNode("dd", null, toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(selectedTreatment).patient.age)) + " years · " + toDisplayString(genders[unref(selectedTreatment).patient.gender] || unref(selectedTreatment).patient.gender), 1)
                    ]),
                    createVNode("div", null, [
                      createVNode("dt", null, "Phone"),
                      createVNode("dd", { dir: "ltr" }, toDisplayString(unref(selectedTreatment).patient.phone || "—"), 1)
                    ]),
                    createVNode("div", null, [
                      createVNode("dt", null, "Blood pressure"),
                      createVNode("dd", { dir: "ltr" }, toDisplayString(unref(selectedTreatment).bloodPressure || "—"), 1)
                    ]),
                    createVNode("div", null, [
                      createVNode("dt", null, "Address"),
                      createVNode("dd", null, [
                        createVNode("bdi", null, toDisplayString(unref(selectedTreatment).patient.address || "—"), 1)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "detail-group" }, [
                    createVNode("h4", null, "Medications and prescription"),
                    unref(selectedTreatment).prescriptionItems.length ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "detail-table-wrap"
                    }, [
                      createVNode("table", null, [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", null, "No."),
                            createVNode("th", null, "Medication"),
                            createVNode("th", null, "Type"),
                            createVNode("th", null, "Dose"),
                            createVNode("th", null, "Frequency"),
                            createVNode("th", null, "Duration")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedTreatment).prescriptionItems, (medicine) => {
                            return openBlock(), createBlock("tr", {
                              key: medicine.id
                            }, [
                              createVNode("td", null, toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(medicine.position)), 1),
                              createVNode("td", null, [
                                createVNode("bdi", null, toDisplayString(medicine.medicationName), 1)
                              ]),
                              createVNode("td", null, toDisplayString(medicine.medicationType), 1),
                              createVNode("td", null, toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(medicine.dose)), 1),
                              createVNode("td", null, toDisplayString(medicine.frequency), 1),
                              createVNode("td", null, toDisplayString(medicine.duration), 1)
                            ]);
                          }), 128))
                        ])
                      ])
                    ])) : (openBlock(), createBlock("p", {
                      key: 1,
                      class: "detail-muted"
                    }, "No medications were prescribed."))
                  ]),
                  unref(selectedTreatment).clinicalNotes.length ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "detail-group"
                  }, [
                    createVNode("h4", null, "Clinical notes"),
                    createVNode("p", null, toDisplayString(unref(selectedTreatment).clinicalNotes.map((note) => note.text).join(", ")), 1)
                  ])) : createCommentVNode("", true),
                  unref(selectedTreatment).additionalInstructionItems.length || unref(selectedTreatment).additionalInstructions ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "detail-group"
                  }, [
                    createVNode("h4", null, "Additional instructions"),
                    createVNode("p", null, toDisplayString([...unref(selectedTreatment).additionalInstructionItems.map((item) => item.text), ...unref(selectedTreatment).additionalInstructions ? [unref(selectedTreatment).additionalInstructions] : []].join(", ")), 1)
                  ])) : createCommentVNode("", true),
                  unref(selectedTreatment).diagnostics?.length || !unref(selectedTreatment).investigations?.length && unref(selectedTreatment).diagnosticInvestigations.length ? (openBlock(), createBlock("div", {
                    key: 2,
                    class: "detail-group"
                  }, [
                    createVNode("h4", null, "Diagnostics"),
                    createVNode("p", null, toDisplayString((unref(selectedTreatment).diagnostics?.length ? unref(selectedTreatment).diagnostics : unref(selectedTreatment).diagnosticInvestigations).map((item) => item.text).join(", ")), 1)
                  ])) : createCommentVNode("", true),
                  unref(selectedTreatment).investigations?.length ? (openBlock(), createBlock("div", {
                    key: 3,
                    class: "detail-group"
                  }, [
                    createVNode("h4", null, "Investigations"),
                    createVNode("p", null, toDisplayString(unref(selectedTreatment).investigations.map((item) => item.text).join(", ")), 1)
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PatientTreatmentHistoryModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-d9e031f3"]]), { __name: "PatientTreatmentHistoryModal" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TreatmentEditor",
  __ssrInlineRender: true,
  props: {
    treatmentId: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const editing = computed(() => props.treatmentId !== void 0);
    useHead({ title: editing.value ? "Edit treatment — RoghtiaSystem" : "New treatment — RoghtiaSystem" });
    const patientsApi = usePatients();
    const medicationsApi = useMedications();
    const treatmentsApi = useTreatments();
    const auth = useAuth();
    const doctorInformation = useDoctorInformation();
    const toast = useAppToast();
    const selectedPatient = ref(null);
    const patientCode = ref("");
    const patientDraft = reactive({ name: "", phone: "", age: "", gender: "Male", address: "" });
    const patientCodeMessage = ref("");
    const patientCodeStatus = ref("idle");
    const patientLookupPending = ref(false);
    const patientModalOpen = ref(false);
    const historyOpen = ref(false);
    const patientFilters = reactive({ name: "", phone: "", gender: "all" });
    const patientResults = ref({ items: [], total: 0, page: 1, pageSize: 10 });
    const patientSearchPage = ref(1);
    const patientSearchLoading = ref(false);
    const patientSearchError = ref("");
    const medications = ref([]);
    const notes = ref([]);
    const selectedNoteIds = ref([]);
    const instructionOptions = ref([]);
    const selectedInstructionIds = ref([]);
    const diagnosticOptions = ref([]);
    const selectedDiagnosticIds = ref([]);
    const investigationOptions = ref([]);
    const selectedInvestigationIds = ref([]);
    const treatmentTemplates = ref([]);
    const selectedTemplateId = ref(null);
    const templatesReady = ref(false);
    const templateLoadMessage = ref("");
    const saveAsTemplate = ref(false);
    const newTemplateName = ref("");
    const bloodPressure = ref("120/80");
    const legacyAdditionalInstructions = ref("");
    const rows = ref([{ key: 1, medicationId: null, dose: "1", frequency: "Once daily", duration: "" }]);
    const noteOpen = ref(false);
    const noteText = ref("");
    const noteSaving = ref(false);
    const instructionOpen = ref(false);
    const instructionText = ref("");
    const instructionSaving = ref(false);
    const diagnosticOpen = ref(false);
    const diagnosticKind = ref("Diagnostic");
    const diagnosticText = ref("");
    const diagnosticSaving = ref(false);
    const pending = ref(false);
    const loading = ref(true);
    const ready = ref(false);
    const errorMessage = ref("");
    const serviceMessage = ref("");
    const insufficientStockOpen = ref(false);
    const insufficientStockPrint = ref(false);
    const printAsA5 = ref(false);
    const printGrayscale = ref(false);
    let rowKey = 1;
    let patientRequest = 0;
    let patientLookupRequest = 0;
    let patientLookupTask = null;
    let printPreferencesSaveTask = Promise.resolve();
    const medicationOptions = computed(() => medications.value.map((medication) => ({ id: medication.id, label: `${medication.name} · ${localNumber(medication.quantity)}` })));
    const medicationMap = computed(() => new Map(medications.value.map((medication) => [medication.id, medication])));
    const frequencyOptions = prescriptionFrequencies.map((value) => ({ label: prescriptionFrequencyCodes[value] ? `${prescriptionFrequencyCodes[value]} · ${value}` : value, value }));
    const templateOptions = computed(() => [{ label: "No template selected", value: 0 }, ...treatmentTemplates.value.map((template) => ({ label: template.name, value: template.id }))]);
    const genders = { Male: "Male", Female: "Female", Other: "Other" };
    const genderOptions = [{ label: "All genders", value: "all" }, { label: "Male", value: "Male" }, { label: "Female", value: "Female" }, { label: "Other", value: "Other" }];
    const patientTotalPages = computed(() => Math.max(1, Math.ceil(patientResults.value.total / 10)));
    function normalizeFrequency(value) {
      if (value === "Once weekly") return "Weekly";
      return prescriptionFrequencies.includes(value) ? value : "Once daily";
    }
    function populatePatient(patient, cancelLookup = true) {
      if (cancelLookup) {
        ++patientLookupRequest;
        patientLookupPending.value = false;
        patientLookupTask = null;
      }
      selectedPatient.value = patient;
      historyOpen.value = false;
      patientCode.value = patient.code;
      Object.assign(patientDraft, { name: patient.name, phone: patient.phone, age: String(patient.age), gender: patient.gender, address: patient.address });
      patientCodeMessage.value = "";
      patientCodeStatus.value = "found";
      serviceMessage.value = "";
      patientModalOpen.value = false;
    }
    function clearPatient() {
      ++patientLookupRequest;
      patientLookupPending.value = false;
      patientLookupTask = null;
      selectedPatient.value = null;
      historyOpen.value = false;
      patientCode.value = "";
      Object.assign(patientDraft, { name: "", phone: "", age: "", gender: "Male", address: "" });
      patientCodeMessage.value = "";
      patientCodeStatus.value = "idle";
    }
    function onPatientCodeChange(value) {
      const next = String(value ?? "");
      if (selectedPatient.value && next.trim().toUpperCase() !== selectedPatient.value.code) {
        selectedPatient.value = null;
        Object.assign(patientDraft, { name: "", phone: "", age: "", gender: "Male", address: "" });
      }
      ++patientLookupRequest;
      patientLookupPending.value = false;
      patientLookupTask = null;
      patientCodeMessage.value = "";
      patientCodeStatus.value = "idle";
    }
    function lookupPatientCode() {
      if (patientLookupPending.value && patientLookupTask) return patientLookupTask;
      const task = runPatientCodeLookup();
      patientLookupTask = task;
      void task.finally(() => {
        if (patientLookupTask === task) patientLookupTask = null;
      });
      return task;
    }
    async function runPatientCodeLookup() {
      const code = patientCode.value.trim().toUpperCase();
      if (!code) {
        patientCodeMessage.value = "";
        patientCodeStatus.value = "idle";
        return false;
      }
      if (selectedPatient.value?.code === code) return true;
      const request = ++patientLookupRequest;
      patientCode.value = code;
      selectedPatient.value = null;
      if (!/^RT-[1-9][0-9]*$/.test(code) || code.length > 32) {
        patientCodeMessage.value = "Enter a code such as RT-1 or leave it blank to generate a new one.";
        patientCodeStatus.value = "error";
        return false;
      }
      patientLookupPending.value = true;
      patientCodeMessage.value = "";
      patientCodeStatus.value = "idle";
      try {
        const patient = await patientsApi.getByCode(code);
        if (request !== patientLookupRequest || code !== patientCode.value) return false;
        populatePatient(patient, false);
        return true;
      } catch (error) {
        if (request !== patientLookupRequest || code !== patientCode.value) return false;
        const failure = error;
        const status = failure.statusCode || failure.status;
        if (status === 401) {
          await navigateTo("/login");
          return false;
        }
        patientCodeMessage.value = status === 404 ? "Code not found. Enter the new patient details; a new code will be generated." : "Unable to look up patient code. Please try again.";
        patientCodeStatus.value = status === 404 ? "missing" : "error";
        return false;
      } finally {
        if (request === patientLookupRequest) patientLookupPending.value = false;
      }
    }
    async function searchPatients() {
      const request = ++patientRequest;
      patientSearchLoading.value = true;
      patientSearchError.value = "";
      try {
        const result = await patientsApi.list({
          page: patientSearchPage.value,
          pageSize: 10,
          name: patientFilters.name.trim(),
          phone: patientFilters.phone.trim(),
          gender: patientFilters.gender === "all" ? "" : patientFilters.gender
        });
        if (request === patientRequest) patientResults.value = result;
      } catch (error) {
        if (request !== patientRequest) return;
        const failure = error;
        if ((failure.statusCode || failure.status) === 401) return await navigateTo("/login");
        patientSearchError.value = "Unable to load patients. Please try again.";
      } finally {
        if (request === patientRequest) patientSearchLoading.value = false;
      }
    }
    function openPatientSearch() {
      patientSearchPage.value = 1;
      patientModalOpen.value = true;
      void searchPatients();
    }
    function changePatientPage(page) {
      if (page < 1 || page > patientTotalPages.value || patientSearchLoading.value) return;
      patientSearchPage.value = page;
      void searchPatients();
    }
    function validatePatientDraft() {
      if (!patientDraft.name.trim() || patientDraft.name.trim().length > 200 || patientDraft.phone.length > 32 || patientDraft.address.length > 1e3 || !["Male", "Female", "Other"].includes(patientDraft.gender) || String(patientDraft.age).trim() === "" || !Number.isInteger(Number(patientDraft.age)) || Number(patientDraft.age) < 0 || Number(patientDraft.age) > 150) {
        serviceMessage.value = "Check the patient name, age, gender, phone and address.";
        return null;
      }
      return {
        name: patientDraft.name.trim(),
        phone: patientDraft.phone.trim(),
        age: Number(patientDraft.age),
        gender: patientDraft.gender,
        address: patientDraft.address.trim()
      };
    }
    async function createPatient() {
      if (pending.value || patientLookupPending.value || selectedPatient.value) return;
      serviceMessage.value = "";
      if (patientCode.value.trim()) {
        const checkedCode = patientCode.value.trim().toUpperCase();
        await lookupPatientCode();
        if (selectedPatient.value || patientCode.value !== checkedCode || patientCodeStatus.value !== "missing") return;
      }
      const input = validatePatientDraft();
      if (!input) return;
      pending.value = true;
      try {
        const created = await patientsApi.create(input);
        populatePatient(created);
        toast.add({ title: "New patient registered", description: `Code: ${created.code}`, color: "success" });
      } catch (error) {
        const failure = error;
        if ((failure.statusCode || failure.status) === 401) return await navigateTo("/login");
        serviceMessage.value = "Unable to register patient. Check the information and try again.";
        toast.add({ title: "Patient registration failed", description: serviceMessage.value, color: "error" });
      } finally {
        pending.value = false;
      }
    }
    async function loadExisting() {
      if (!props.treatmentId) return;
      const treatment = await treatmentsApi.get(props.treatmentId);
      populatePatient(await patientsApi.get(treatment.patient.id));
      bloodPressure.value = treatment.bloodPressure;
      legacyAdditionalInstructions.value = treatment.additionalInstructions;
      selectedNoteIds.value = treatment.clinicalNotes.map((note) => note.id);
      selectedInstructionIds.value = treatment.additionalInstructionItems.map((item) => item.id);
      const savedDiagnostics = treatment.diagnostics?.length || treatment.investigations?.length ? treatment.diagnostics || [] : treatment.diagnosticInvestigations || [];
      selectedDiagnosticIds.value = savedDiagnostics.map((item) => item.id);
      selectedInvestigationIds.value = (treatment.investigations || []).map((item) => item.id);
      rows.value = treatment.prescriptionItems.map((item) => ({ key: ++rowKey, medicationId: item.medicationId, dose: String(item.dose), frequency: normalizeFrequency(item.frequency), duration: item.duration }));
    }
    function selectTreatmentTemplate(value) {
      selectedTemplateId.value = value && value > 0 ? value : null;
      const template = treatmentTemplates.value.find((item) => item.id === selectedTemplateId.value);
      if (!template) return;
      bloodPressure.value = template.bloodPressure || "120/80";
      legacyAdditionalInstructions.value = template.additionalInstructions || "";
      selectedNoteIds.value = [...template.clinicalNoteIds];
      selectedInstructionIds.value = [...template.additionalInstructionIds];
      selectedDiagnosticIds.value = [...template.diagnosticIds || template.diagnosticInvestigationIds || []];
      selectedInvestigationIds.value = [...template.investigationIds || []];
      rows.value = template.prescriptionItems.length ? template.prescriptionItems.map((item) => ({ key: ++rowKey, medicationId: item.medicationId, dose: String(item.dose), frequency: normalizeFrequency(item.frequency), duration: item.duration })) : [{ key: ++rowKey, medicationId: null, dose: "1", frequency: "Once daily", duration: "" }];
      serviceMessage.value = "";
    }
    async function loadOptions() {
      loading.value = true;
      ready.value = false;
      errorMessage.value = "";
      templateLoadMessage.value = "";
      templatesReady.value = false;
      try {
        const [first, clinicalNotes, savedInstructions, savedDiagnostics, savedInvestigations, doctorInfo] = await Promise.all([medicationsApi.list({ page: 1, pageSize: 100 }), treatmentsApi.clinicalNotes(), treatmentsApi.additionalInstructions(), treatmentsApi.diagnosticsAndInvestigations("Diagnostic"), treatmentsApi.diagnosticsAndInvestigations("Investigation"), doctorInformation.load().catch(() => null)]);
        printAsA5.value = !!doctorInfo?.printOnA5;
        printGrayscale.value = !!doctorInfo?.printGrayscale;
        const all = [...first.items];
        const totalPages = Math.ceil(first.total / 100);
        for (let page = 2; page <= totalPages; page++) {
          const response = await medicationsApi.list({ page, pageSize: 100 });
          all.push(...response.items);
        }
        medications.value = all;
        notes.value = clinicalNotes;
        instructionOptions.value = savedInstructions;
        diagnosticOptions.value = savedDiagnostics;
        investigationOptions.value = savedInvestigations;
        try {
          treatmentTemplates.value = await treatmentsApi.templates();
          templatesReady.value = true;
        } catch (templateError) {
          const templateFailure = templateError;
          const status = templateFailure.statusCode || templateFailure.status;
          if (status === 401) return await navigateTo("/login");
          treatmentTemplates.value = [];
          templateLoadMessage.value = status === 404 ? "The treatment-template API route is missing. Restart the RoghtiaSystem server after rebuilding the client." : status === 503 ? "The server could not load treatment templates. Check the server and database logs, then retry." : `Unable to load treatment templates${status ? ` (HTTP ${status})` : ""}. Retry or check the server logs.`;
        }
        await loadExisting();
        ready.value = true;
      } catch (error) {
        const failure = error;
        if ((failure.statusCode || failure.status) === 401) return await navigateTo("/login");
        errorMessage.value = "Unable to load required information. Please try again.";
      } finally {
        loading.value = false;
      }
    }
    function addRow() {
      if (rows.value.length < 30) rows.value.push({ key: ++rowKey, medicationId: null, dose: "1", frequency: "Once daily", duration: "" });
    }
    function removeRow(key) {
      rows.value = rows.value.filter((row) => row.key !== key);
    }
    async function continueWithoutStockDeduction() {
      insufficientStockOpen.value = false;
      await save(insufficientStockPrint.value, true);
    }
    async function addNote() {
      const text = noteText.value.trim();
      if (!text || text.length > 300 || noteSaving.value) {
        serviceMessage.value = "Clinical note must contain 1 to 300 characters.";
        return;
      }
      noteSaving.value = true;
      serviceMessage.value = "";
      try {
        const saved = await treatmentsApi.addClinicalNote(text);
        if (!notes.value.some((note) => note.id === saved.id)) notes.value.push(saved);
        if (!selectedNoteIds.value.includes(saved.id)) selectedNoteIds.value.push(saved.id);
        noteText.value = "";
        noteOpen.value = false;
        toast.add({ title: "Clinical note added", color: "success" });
      } catch (error) {
        const failure = error;
        if ((failure.statusCode || failure.status) === 401) return await navigateTo("/login");
        serviceMessage.value = "Unable to save note. Please try again.";
      } finally {
        noteSaving.value = false;
      }
    }
    async function addInstruction() {
      const text = instructionText.value.trim();
      if (!text || text.length > 300 || instructionSaving.value) {
        serviceMessage.value = "Additional instruction must contain 1 to 300 characters.";
        return;
      }
      instructionSaving.value = true;
      serviceMessage.value = "";
      try {
        const saved = await treatmentsApi.addAdditionalInstruction(text);
        if (!instructionOptions.value.some((item) => item.id === saved.id)) instructionOptions.value.push(saved);
        if (!selectedInstructionIds.value.includes(saved.id)) selectedInstructionIds.value.push(saved.id);
        instructionText.value = "";
        instructionOpen.value = false;
        toast.add({ title: "Additional instruction added", color: "success" });
      } catch (error) {
        const failure = error;
        if ((failure.statusCode || failure.status) === 401) return await navigateTo("/login");
        serviceMessage.value = "Unable to save instruction. Please try again.";
      } finally {
        instructionSaving.value = false;
      }
    }
    function openDiagnosticLibrary(kind) {
      diagnosticKind.value = kind;
      diagnosticText.value = "";
      diagnosticOpen.value = true;
    }
    async function addDiagnosticInvestigation() {
      const text = diagnosticText.value.trim();
      if (!text || text.length > 300 || diagnosticSaving.value) {
        serviceMessage.value = `${diagnosticKind.value} must contain 1 to 300 characters.`;
        return;
      }
      diagnosticSaving.value = true;
      serviceMessage.value = "";
      try {
        const saved = await treatmentsApi.addDiagnosticInvestigation(text, diagnosticKind.value);
        if (diagnosticKind.value === "Diagnostic") {
          if (!diagnosticOptions.value.some((item) => item.id === saved.id)) diagnosticOptions.value.push(saved);
          if (!selectedDiagnosticIds.value.includes(saved.id)) selectedDiagnosticIds.value.push(saved.id);
        } else {
          if (!investigationOptions.value.some((item) => item.id === saved.id)) investigationOptions.value.push(saved);
          if (!selectedInvestigationIds.value.includes(saved.id)) selectedInvestigationIds.value.push(saved.id);
        }
        diagnosticText.value = "";
        diagnosticOpen.value = false;
        toast.add({ title: `${diagnosticKind.value} added`, color: "success" });
      } catch (error) {
        const failure = error;
        if ((failure.statusCode || failure.status) === 401) return await navigateTo("/login");
        serviceMessage.value = `Unable to save ${diagnosticKind.value.toLowerCase()}. Please try again.`;
      } finally {
        diagnosticSaving.value = false;
      }
    }
    async function save(printAfter = false, allowInsufficientStock = false) {
      if (pending.value) return;
      serviceMessage.value = "";
      if (patientLookupPending.value && patientLookupTask) await patientLookupTask;
      if (patientLookupPending.value) {
        serviceMessage.value = "Please wait for the patient code lookup to finish.";
        return;
      }
      if (patientCode.value.trim() && selectedPatient.value?.code !== patientCode.value.trim().toUpperCase()) {
        const checkedCode = patientCode.value.trim().toUpperCase();
        if (patientCodeStatus.value === "idle") await lookupPatientCode();
        if (patientLookupPending.value || patientCode.value !== checkedCode) return;
        if (patientCodeStatus.value === "error" || patientCode.value && !selectedPatient.value && patientCodeStatus.value !== "missing") {
          serviceMessage.value = patientCodeMessage.value;
          return;
        }
      }
      const newPatient = selectedPatient.value ? null : validatePatientDraft();
      if (!selectedPatient.value && !newPatient) return;
      if (saveAsTemplate.value && selectedTemplateId.value === null && !newTemplateName.value.trim()) {
        serviceMessage.value = "Enter a name for the new treatment template.";
        return;
      }
      if (saveAsTemplate.value && selectedTemplateId.value === null && newTemplateName.value.trim().length > 100) {
        serviceMessage.value = "Treatment template name cannot exceed 100 characters.";
        return;
      }
      if (bloodPressure.value.trim() && !/^[1-9][0-9]{1,2}\/[1-9][0-9]{1,2}$/.test(bloodPressure.value.trim())) {
        serviceMessage.value = "Enter blood pressure in the format 120/80.";
        return;
      }
      if (rows.value.some((row) => row.medicationId === null || !medicationMap.value.has(row.medicationId) || String(row.dose).trim() === "" || !Number.isInteger(Number(row.dose)) || Number(row.dose) < 1 || Number(row.dose) > 2147483647 || !frequencyOptions.some((option) => option.value === row.frequency) || !row.duration.trim() || row.duration.trim().length > 100)) {
        serviceMessage.value = "Check the medication, dose, frequency and duration in each row. Remove empty rows.";
        return;
      }
      pending.value = true;
      try {
        await printPreferencesSaveTask;
        if (!selectedPatient.value && newPatient) {
          const created = await patientsApi.create(newPatient);
          populatePatient(created);
          toast.add({ title: "New patient registered", description: `Code: ${created.code}`, color: "success" });
        }
        const input = {
          patientId: selectedPatient.value.id,
          bloodPressure: bloodPressure.value.trim(),
          additionalInstructions: legacyAdditionalInstructions.value,
          clinicalNoteIds: selectedNoteIds.value,
          additionalInstructionIds: selectedInstructionIds.value,
          diagnosticIds: selectedDiagnosticIds.value,
          investigationIds: selectedInvestigationIds.value,
          prescriptionItems: rows.value.map((row) => ({ medicationId: row.medicationId, dose: Number(row.dose), frequency: row.frequency, duration: row.duration.trim() })),
          saveAsTemplate: saveAsTemplate.value,
          templateId: selectedTemplateId.value,
          templateName: selectedTemplateId.value === null ? newTemplateName.value.trim() : void 0,
          allowInsufficientStock
        };
        const saved = editing.value ? await treatmentsApi.update(props.treatmentId, input) : await treatmentsApi.create(input);
        toast.add({ title: editing.value ? "Treatment updated" : "Treatment recorded", description: saveAsTemplate.value ? "Treatment and template saved." : "Treatment and prescription saved.", color: "success", icon: "i-lucide-circle-check" });
        await navigateTo(printAfter ? { path: `/treatments/${saved.id}/print`, query: { auto: "1", a5: printAsA5.value ? "1" : "0", grayscale: printGrayscale.value ? "1" : "0" } } : "/treatments");
      } catch (error) {
        const failure = error;
        if ((failure.statusCode || failure.status) === 401) return await navigateTo("/login");
        const code = failure.data?.data?.code || failure.data?.code;
        if ((failure.statusCode || failure.status) === 409 && code === "INSUFFICIENT_STOCK") {
          insufficientStockPrint.value = printAfter;
          insufficientStockOpen.value = true;
          return;
        }
        if ((failure.statusCode || failure.status) === 409 && code === "TEMPLATE_NAME_EXISTS") {
          serviceMessage.value = "A treatment template with this name already exists. Choose another name.";
          toast.add({ title: "Template name already exists", description: serviceMessage.value, color: "error" });
          return;
        }
        serviceMessage.value = (failure.statusCode || failure.status) === 404 ? "Patient or treatment not found. Refresh the list." : code === "VALIDATION_ERROR" ? "Invalid information, or the selected patient, medication or note is no longer available." : "Unable to save treatment. Please try again.";
        toast.add({ title: "Treatment could not be saved", description: serviceMessage.value, color: "error" });
      } finally {
        pending.value = false;
      }
    }
    watch(() => auth.user.value?.id, () => {
      clearPatient();
      ++patientRequest;
      patientModalOpen.value = false;
      insufficientStockOpen.value = false;
      patientResults.value = { items: [], total: 0, page: 1, pageSize: 10 };
      medications.value = [];
      notes.value = [];
      selectedNoteIds.value = [];
      instructionOptions.value = [];
      selectedInstructionIds.value = [];
      diagnosticOptions.value = [];
      selectedDiagnosticIds.value = [];
      investigationOptions.value = [];
      selectedInvestigationIds.value = [];
      treatmentTemplates.value = [];
      selectedTemplateId.value = null;
      saveAsTemplate.value = false;
      newTemplateName.value = "";
      bloodPressure.value = "120/80";
      legacyAdditionalInstructions.value = "";
      rows.value = [{ key: ++rowKey, medicationId: null, dose: "1", frequency: "Once daily", duration: "" }];
      void loadOptions();
    });
    watch([printAsA5, printGrayscale], ([printOnA5, printGrayscaleValue]) => {
      if (!ready.value) return;
      printPreferencesSaveTask = printPreferencesSaveTask.then(async () => {
        try {
          await doctorInformation.savePrintPreferences({ printOnA5, printGrayscale: printGrayscaleValue });
        } catch {
          toast.add({ title: "Print preferences not saved", description: "Your prescription was not saved as a default. Please try again.", color: "error" });
        }
      });
    });
    [__temp, __restore] = withAsyncContext(() => loadOptions()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PvButton = __nuxt_component_5;
      const _component_PvIcon = __nuxt_component_1;
      const _component_PvFormField = __nuxt_component_2;
      const _component_PvInput = __nuxt_component_3;
      const _component_PvSelect = __nuxt_component_4;
      const _component_PvTextarea = __nuxt_component_6;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_PvSelectMenu = __nuxt_component_3$1;
      const _component_PvCheckbox = __nuxt_component_8;
      const _component_PrescriptionPrintOptions = __nuxt_component_2$1;
      const _component_PatientTreatmentHistoryModal = __nuxt_component_10;
      const _component_PvModal = __nuxt_component_0$2;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "new-treatment",
        "aria-labelledby": "new-treatment-title"
      }, _attrs))} data-v-afbd8d7c><header class="page-heading" data-v-afbd8d7c><div data-v-afbd8d7c><div class="eyebrow" data-v-afbd8d7c><span data-v-afbd8d7c></span> Record a patient visit</div><h1 id="new-treatment-title" data-v-afbd8d7c>${ssrInterpolate(unref(editing) ? "Edit treatment" : "New treatment")}</h1><p data-v-afbd8d7c>Select or register a patient, then enter the prescription and treatment details.</p></div>`);
      _push(ssrRenderComponent(_component_PvButton, {
        to: "/treatments",
        color: "neutral",
        variant: "outline",
        icon: "i-lucide-arrow-left",
        size: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Treatment list`);
          } else {
            return [
              createTextVNode("Treatment list")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header>`);
      if (unref(errorMessage)) {
        _push(`<div class="page-error" role="alert" data-v-afbd8d7c>`);
        _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-circle-alert" }, null, _parent));
        _push(`<span data-v-afbd8d7c>${ssrInterpolate(unref(errorMessage))}</span>`);
        _push(ssrRenderComponent(_component_PvButton, {
          color: "neutral",
          variant: "outline",
          loading: unref(loading),
          onClick: loadOptions
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
      if (unref(loading)) {
        _push(`<div class="page-loading" role="status" data-v-afbd8d7c>`);
        _push(ssrRenderComponent(_component_PvIcon, {
          name: "i-lucide-loader-circle",
          class: "animate-spin"
        }, null, _parent));
        _push(`Loading information…</div>`);
      } else if (unref(ready)) {
        _push(`<form class="treatment-form" data-v-afbd8d7c><section class="panel form-section" aria-labelledby="patient-title" data-v-afbd8d7c><header class="section-heading" data-v-afbd8d7c><span class="section-icon" data-v-afbd8d7c>`);
        _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-user-round" }, null, _parent));
        _push(`</span><div data-v-afbd8d7c><h2 id="patient-title" data-v-afbd8d7c>Patient information</h2><p data-v-afbd8d7c>Enter a code and leave the field, or use search to select a patient.</p></div></header><div class="patient-toolbar" data-v-afbd8d7c>`);
        if (unref(selectedPatient)) {
          _push(`<p class="selected-hint" data-v-afbd8d7c>`);
          _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-circle-check" }, null, _parent));
          _push(` Selected patient · ID ${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(selectedPatient).id))}</p>`);
        } else {
          _push(`<p class="selected-hint" data-v-afbd8d7c>A new patient code is generated when you save.</p>`);
        }
        _push(`<div class="patient-toolbar-actions" data-v-afbd8d7c>`);
        if (unref(selectedPatient)) {
          _push(ssrRenderComponent(_component_PvButton, {
            type: "button",
            color: "neutral",
            variant: "outline",
            icon: "i-lucide-history",
            disabled: unref(pending),
            onClick: ($event) => historyOpen.value = true
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Treatment history`);
              } else {
                return [
                  createTextVNode("Treatment history")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_PvButton, {
          type: "button",
          color: "neutral",
          variant: "outline",
          icon: "i-lucide-search",
          disabled: unref(pending),
          onClick: openPatientSearch
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Find patient`);
            } else {
              return [
                createTextVNode("Find patient")
              ];
            }
          }),
          _: 1
        }, _parent));
        if (unref(selectedPatient)) {
          _push(ssrRenderComponent(_component_PvButton, {
            type: "button",
            color: "neutral",
            variant: "ghost",
            icon: "i-lucide-user-plus",
            disabled: unref(pending),
            onClick: clearPatient
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`New patient`);
              } else {
                return [
                  createTextVNode("New patient")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(ssrRenderComponent(_component_PvButton, {
            type: "button",
            color: "neutral",
            variant: "outline",
            icon: "i-lucide-user-plus",
            loading: unref(pending),
            disabled: unref(pending) || unref(patientLookupPending),
            onClick: createPatient
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Register patient`);
              } else {
                return [
                  createTextVNode("Register patient")
                ];
              }
            }),
            _: 1
          }, _parent));
        }
        _push(`</div></div>`);
        if (unref(selectedPatient)) {
          _push(`<div class="patient-fields selected-patient-details" aria-label="Selected patient information" data-v-afbd8d7c><div data-v-afbd8d7c><span data-v-afbd8d7c>Patient code</span><bdi dir="ltr" data-v-afbd8d7c>${ssrInterpolate(unref(selectedPatient).code)}</bdi></div><div data-v-afbd8d7c><span data-v-afbd8d7c>Patient name</span><bdi data-v-afbd8d7c>${ssrInterpolate(unref(selectedPatient).name)}</bdi></div><div data-v-afbd8d7c><span data-v-afbd8d7c>Phone</span><bdi dir="ltr" data-v-afbd8d7c>${ssrInterpolate(unref(selectedPatient).phone || "—")}</bdi></div><div data-v-afbd8d7c><span data-v-afbd8d7c>Age (years)</span><bdi data-v-afbd8d7c>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(selectedPatient).age))}</bdi></div><div data-v-afbd8d7c><span data-v-afbd8d7c>Gender</span><bdi data-v-afbd8d7c>${ssrInterpolate(genders[unref(selectedPatient).gender] || unref(selectedPatient).gender)}</bdi></div><div class="patient-address" data-v-afbd8d7c><span data-v-afbd8d7c>Address</span><bdi data-v-afbd8d7c>${ssrInterpolate(unref(selectedPatient).address || "—")}</bdi></div></div>`);
        } else {
          _push(`<div class="patient-fields" data-v-afbd8d7c>`);
          _push(ssrRenderComponent(_component_PvFormField, {
            label: "Patient code",
            name: "patientCode",
            help: "For example RT-1; leave blank for a new patient"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_PvInput, {
                  modelValue: unref(patientCode),
                  "onUpdate:modelValue": [($event) => isRef(patientCode) ? patientCode.value = $event : null, onPatientCodeChange],
                  name: "patientCode",
                  dir: "ltr",
                  autocomplete: "off",
                  maxlength: 32,
                  placeholder: "RT-1",
                  size: "xl",
                  class: "w-full",
                  loading: unref(patientLookupPending),
                  onBlur: lookupPatientCode
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_PvInput, {
                    modelValue: unref(patientCode),
                    "onUpdate:modelValue": [($event) => isRef(patientCode) ? patientCode.value = $event : null, onPatientCodeChange],
                    name: "patientCode",
                    dir: "ltr",
                    autocomplete: "off",
                    maxlength: 32,
                    placeholder: "RT-1",
                    size: "xl",
                    class: "w-full",
                    loading: unref(patientLookupPending),
                    onBlur: lookupPatientCode
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "loading"])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_PvFormField, {
            label: "Patient name",
            name: "patientName",
            required: ""
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_PvInput, {
                  modelValue: unref(patientDraft).name,
                  "onUpdate:modelValue": ($event) => unref(patientDraft).name = $event,
                  name: "patientName",
                  dir: "auto",
                  maxlength: 200,
                  size: "xl",
                  class: "w-full"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_PvInput, {
                    modelValue: unref(patientDraft).name,
                    "onUpdate:modelValue": ($event) => unref(patientDraft).name = $event,
                    name: "patientName",
                    dir: "auto",
                    maxlength: 200,
                    size: "xl",
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_PvFormField, {
            label: "Phone",
            name: "patientPhone",
            hint: "Optional"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_PvInput, {
                  modelValue: unref(patientDraft).phone,
                  "onUpdate:modelValue": ($event) => unref(patientDraft).phone = $event,
                  name: "patientPhone",
                  type: "tel",
                  dir: "ltr",
                  maxlength: 32,
                  size: "xl",
                  class: "w-full"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_PvInput, {
                    modelValue: unref(patientDraft).phone,
                    "onUpdate:modelValue": ($event) => unref(patientDraft).phone = $event,
                    name: "patientPhone",
                    type: "tel",
                    dir: "ltr",
                    maxlength: 32,
                    size: "xl",
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_PvFormField, {
            label: "Age (years)",
            name: "patientAge",
            required: ""
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_PvInput, {
                  modelValue: unref(patientDraft).age,
                  "onUpdate:modelValue": ($event) => unref(patientDraft).age = $event,
                  name: "patientAge",
                  type: "number",
                  inputmode: "numeric",
                  min: 0,
                  max: 150,
                  step: 1,
                  size: "xl",
                  class: "w-full"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_PvInput, {
                    modelValue: unref(patientDraft).age,
                    "onUpdate:modelValue": ($event) => unref(patientDraft).age = $event,
                    name: "patientAge",
                    type: "number",
                    inputmode: "numeric",
                    min: 0,
                    max: 150,
                    step: 1,
                    size: "xl",
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_PvFormField, {
            label: "Gender",
            name: "patientGender",
            required: ""
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_PvSelect, {
                  modelValue: unref(patientDraft).gender,
                  "onUpdate:modelValue": ($event) => unref(patientDraft).gender = $event,
                  name: "patientGender",
                  items: genderOptions.slice(1),
                  placeholder: "Select gender",
                  size: "xl",
                  class: "w-full"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_PvSelect, {
                    modelValue: unref(patientDraft).gender,
                    "onUpdate:modelValue": ($event) => unref(patientDraft).gender = $event,
                    name: "patientGender",
                    items: genderOptions.slice(1),
                    placeholder: "Select gender",
                    size: "xl",
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_PvFormField, {
            label: "Address",
            name: "patientAddress",
            hint: "Optional",
            class: "patient-address"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_PvTextarea, {
                  modelValue: unref(patientDraft).address,
                  "onUpdate:modelValue": ($event) => unref(patientDraft).address = $event,
                  name: "patientAddress",
                  dir: "auto",
                  maxlength: 1e3,
                  rows: 2,
                  size: "xl",
                  class: "w-full"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_PvTextarea, {
                    modelValue: unref(patientDraft).address,
                    "onUpdate:modelValue": ($event) => unref(patientDraft).address = $event,
                    name: "patientAddress",
                    dir: "auto",
                    maxlength: 1e3,
                    rows: 2,
                    size: "xl",
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        }
        if (unref(patientCodeMessage)) {
          _push(`<p class="patient-code-message" role="status" data-v-afbd8d7c>${ssrInterpolate(unref(patientCodeMessage))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</section><section class="panel form-section template-section" aria-labelledby="treatment-template-title" data-v-afbd8d7c><header class="section-heading" data-v-afbd8d7c><span class="section-icon" data-v-afbd8d7c>`);
        _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-copy-check" }, null, _parent));
        _push(`</span><div data-v-afbd8d7c><h2 id="treatment-template-title" data-v-afbd8d7c>Treatment template</h2><p data-v-afbd8d7c>Load saved treatment details to fill the medication and treatment fields.</p></div></header>`);
        _push(ssrRenderComponent(_component_PvFormField, {
          label: "Choose a treatment template",
          name: "treatmentTemplate"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_PvSelect, {
                "model-value": unref(selectedTemplateId) ?? void 0,
                items: unref(templateOptions),
                placeholder: "Select a treatment template",
                size: "xl",
                class: "w-full",
                disabled: !unref(templatesReady),
                "onUpdate:modelValue": selectTreatmentTemplate
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_PvSelect, {
                  "model-value": unref(selectedTemplateId) ?? void 0,
                  items: unref(templateOptions),
                  placeholder: "Select a treatment template",
                  size: "xl",
                  class: "w-full",
                  disabled: !unref(templatesReady),
                  "onUpdate:modelValue": selectTreatmentTemplate
                }, null, 8, ["model-value", "items", "disabled"])
              ];
            }
          }),
          _: 1
        }, _parent));
        if (unref(templateLoadMessage)) {
          _push(`<div class="template-unavailable" role="status" data-v-afbd8d7c><span data-v-afbd8d7c>${ssrInterpolate(unref(templateLoadMessage))}</span>`);
          _push(ssrRenderComponent(_component_PvButton, {
            type: "button",
            size: "sm",
            color: "neutral",
            variant: "outline",
            loading: unref(loading),
            onClick: loadOptions
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Retry`);
              } else {
                return [
                  createTextVNode("Retry")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else if (unref(templatesReady) && !unref(treatmentTemplates).length) {
          _push(`<p class="template-help" data-v-afbd8d7c>No treatment templates have been saved yet.</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</section><section class="panel form-section" aria-labelledby="prescription-title" data-v-afbd8d7c><header class="section-heading" data-v-afbd8d7c><span class="section-icon" data-v-afbd8d7c>`);
        _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-pill" }, null, _parent));
        _push(`</span><div data-v-afbd8d7c><h2 id="prescription-title" data-v-afbd8d7c>Medications and prescription</h2><p data-v-afbd8d7c>Select a medication; its type is filled automatically.</p></div></header>`);
        if (!unref(medications).length) {
          _push(`<div class="picker-state" data-v-afbd8d7c>No medications registered. `);
          _push(ssrRenderComponent(_component_NuxtLink, { to: "/medications" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Open medications`);
              } else {
                return [
                  createTextVNode("Open medications")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`.</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="prescription-table-wrap" data-v-afbd8d7c><table class="prescription-table" data-v-afbd8d7c><thead data-v-afbd8d7c><tr data-v-afbd8d7c><th data-v-afbd8d7c>No.</th><th data-v-afbd8d7c>Medications</th><th data-v-afbd8d7c>Type</th><th data-v-afbd8d7c>Dose</th><th data-v-afbd8d7c>Frequency</th><th data-v-afbd8d7c>Duration</th><th data-v-afbd8d7c><span class="sr-only" data-v-afbd8d7c>Remove</span></th></tr></thead><tbody data-v-afbd8d7c><!--[-->`);
        ssrRenderList(unref(rows), (row, index) => {
          _push(`<tr data-v-afbd8d7c><td data-label="No." class="row-number" data-v-afbd8d7c>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(index + 1))}</td><td data-label="Medications" data-v-afbd8d7c>`);
          _push(ssrRenderComponent(_component_PvSelectMenu, {
            "model-value": row.medicationId ?? void 0,
            items: unref(medicationOptions),
            "value-key": "id",
            "label-key": "label",
            searchable: "",
            "searchable-placeholder": "Search medications",
            placeholder: "Select medication",
            size: "lg",
            class: "w-full",
            "aria-label": `Row ${index + 1} medication`,
            "onUpdate:modelValue": (value) => row.medicationId = value ?? null
          }, null, _parent));
          _push(`</td><td data-label="Type" data-v-afbd8d7c><span class="type-value" data-v-afbd8d7c>${ssrInterpolate(row.medicationId ? unref(medicationMap).get(row.medicationId)?.type || "—" : "—")}</span></td><td data-label="Dose" data-v-afbd8d7c>`);
          _push(ssrRenderComponent(_component_PvInput, {
            modelValue: row.dose,
            "onUpdate:modelValue": ($event) => row.dose = $event,
            type: "number",
            inputmode: "numeric",
            min: 1,
            max: 2147483647,
            step: 1,
            size: "lg",
            class: "w-full",
            "aria-label": `Row ${index + 1} dose`
          }, null, _parent));
          _push(`</td><td data-label="Frequency" data-v-afbd8d7c>`);
          _push(ssrRenderComponent(_component_PvSelect, {
            modelValue: row.frequency,
            "onUpdate:modelValue": ($event) => row.frequency = $event,
            items: unref(frequencyOptions),
            size: "lg",
            class: "w-full",
            "aria-label": `Row ${index + 1} frequency`
          }, null, _parent));
          _push(`</td><td data-label="Duration" data-v-afbd8d7c>`);
          _push(ssrRenderComponent(_component_PvInput, {
            modelValue: row.duration,
            "onUpdate:modelValue": ($event) => row.duration = $event,
            maxlength: 100,
            placeholder: "e.g. 7 days",
            size: "lg",
            class: "w-full",
            "aria-label": `Row ${index + 1} duration`
          }, null, _parent));
          _push(`</td><td data-label="Remove" data-v-afbd8d7c>`);
          _push(ssrRenderComponent(_component_PvButton, {
            type: "button",
            color: "error",
            variant: "ghost",
            icon: "i-lucide-trash-2",
            "aria-label": `Row ${index + 1} remove row`,
            onClick: ($event) => removeRow(row.key)
          }, null, _parent));
          _push(`</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
        _push(ssrRenderComponent(_component_PvButton, {
          type: "button",
          color: "neutral",
          variant: "outline",
          icon: "i-lucide-plus",
          disabled: unref(rows).length >= 30 || !unref(medications).length,
          onClick: addRow
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Add medication row`);
            } else {
              return [
                createTextVNode("Add medication row")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</section><section class="panel form-section treatment-information-section" aria-labelledby="treatment-title" data-v-afbd8d7c><header class="section-heading" data-v-afbd8d7c><span class="section-icon" data-v-afbd8d7c>`);
        _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-heart-pulse" }, null, _parent));
        _push(`</span><div data-v-afbd8d7c><h2 id="treatment-title" data-v-afbd8d7c>Treatment information</h2><p data-v-afbd8d7c>Record blood pressure, notes, instructions, diagnostics and investigations.</p></div></header><div class="treatment-fields" data-v-afbd8d7c>`);
        _push(ssrRenderComponent(_component_PvFormField, {
          label: "Blood pressure (BP)",
          name: "bloodPressure",
          help: "e.g. 120/80"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_PvInput, {
                modelValue: unref(bloodPressure),
                "onUpdate:modelValue": ($event) => isRef(bloodPressure) ? bloodPressure.value = $event : null,
                name: "bloodPressure",
                dir: "ltr",
                inputmode: "numeric",
                maxlength: 16,
                placeholder: "120/80",
                size: "xl",
                class: "w-full"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_PvInput, {
                  modelValue: unref(bloodPressure),
                  "onUpdate:modelValue": ($event) => isRef(bloodPressure) ? bloodPressure.value = $event : null,
                  name: "bloodPressure",
                  dir: "ltr",
                  inputmode: "numeric",
                  maxlength: 16,
                  placeholder: "120/80",
                  size: "xl",
                  class: "w-full"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="notes-field" data-v-afbd8d7c>`);
        _push(ssrRenderComponent(_component_PvFormField, {
          label: "Clinical notes",
          name: "clinicalNotes"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_PvSelectMenu, {
                modelValue: unref(selectedNoteIds),
                "onUpdate:modelValue": ($event) => isRef(selectedNoteIds) ? selectedNoteIds.value = $event : null,
                items: unref(notes),
                "value-key": "id",
                "label-key": "text",
                multiple: "",
                searchable: "",
                "searchable-placeholder": "Search notes",
                placeholder: "Select notes",
                size: "xl",
                class: "w-full"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_PvSelectMenu, {
                  modelValue: unref(selectedNoteIds),
                  "onUpdate:modelValue": ($event) => isRef(selectedNoteIds) ? selectedNoteIds.value = $event : null,
                  items: unref(notes),
                  "value-key": "id",
                  "label-key": "text",
                  multiple: "",
                  searchable: "",
                  "searchable-placeholder": "Search notes",
                  placeholder: "Select notes",
                  size: "xl",
                  class: "w-full"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_PvButton, {
          type: "button",
          color: "neutral",
          variant: "outline",
          icon: "i-lucide-plus",
          onClick: ($event) => noteOpen.value = true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`New note`);
            } else {
              return [
                createTextVNode("New note")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="notes-field instructions-field" data-v-afbd8d7c>`);
        _push(ssrRenderComponent(_component_PvFormField, {
          label: "Additional instructions",
          name: "additionalInstructions"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_PvSelectMenu, {
                modelValue: unref(selectedInstructionIds),
                "onUpdate:modelValue": ($event) => isRef(selectedInstructionIds) ? selectedInstructionIds.value = $event : null,
                items: unref(instructionOptions),
                "value-key": "id",
                "label-key": "text",
                multiple: "",
                searchable: "",
                "searchable-placeholder": "Search instructions",
                placeholder: "Select instructions",
                size: "xl",
                class: "w-full"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_PvSelectMenu, {
                  modelValue: unref(selectedInstructionIds),
                  "onUpdate:modelValue": ($event) => isRef(selectedInstructionIds) ? selectedInstructionIds.value = $event : null,
                  items: unref(instructionOptions),
                  "value-key": "id",
                  "label-key": "text",
                  multiple: "",
                  searchable: "",
                  "searchable-placeholder": "Search instructions",
                  placeholder: "Select instructions",
                  size: "xl",
                  class: "w-full"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_PvButton, {
          type: "button",
          color: "neutral",
          variant: "outline",
          icon: "i-lucide-plus",
          onClick: ($event) => instructionOpen.value = true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Add instruction`);
            } else {
              return [
                createTextVNode("Add instruction")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><p class="instructions-help" data-v-afbd8d7c>Select one or more saved instructions to print with the prescription.</p><div class="notes-field instructions-field diagnostic-field" data-v-afbd8d7c>`);
        _push(ssrRenderComponent(_component_PvFormField, {
          label: "Diagnostics",
          name: "diagnostics"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_PvSelectMenu, {
                modelValue: unref(selectedDiagnosticIds),
                "onUpdate:modelValue": ($event) => isRef(selectedDiagnosticIds) ? selectedDiagnosticIds.value = $event : null,
                items: unref(diagnosticOptions),
                "value-key": "id",
                "label-key": "text",
                multiple: "",
                searchable: "",
                "searchable-placeholder": "Search diagnostics",
                placeholder: "Select diagnostics (optional)",
                size: "xl",
                class: "w-full"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_PvSelectMenu, {
                  modelValue: unref(selectedDiagnosticIds),
                  "onUpdate:modelValue": ($event) => isRef(selectedDiagnosticIds) ? selectedDiagnosticIds.value = $event : null,
                  items: unref(diagnosticOptions),
                  "value-key": "id",
                  "label-key": "text",
                  multiple: "",
                  searchable: "",
                  "searchable-placeholder": "Search diagnostics",
                  placeholder: "Select diagnostics (optional)",
                  size: "xl",
                  class: "w-full"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_PvButton, {
          type: "button",
          color: "neutral",
          variant: "outline",
          icon: "i-lucide-plus",
          onClick: ($event) => openDiagnosticLibrary("Diagnostic")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Add diagnostic`);
            } else {
              return [
                createTextVNode("Add diagnostic")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="notes-field instructions-field diagnostic-field" data-v-afbd8d7c>`);
        _push(ssrRenderComponent(_component_PvFormField, {
          label: "Investigations",
          name: "investigations"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_PvSelectMenu, {
                modelValue: unref(selectedInvestigationIds),
                "onUpdate:modelValue": ($event) => isRef(selectedInvestigationIds) ? selectedInvestigationIds.value = $event : null,
                items: unref(investigationOptions),
                "value-key": "id",
                "label-key": "text",
                multiple: "",
                searchable: "",
                "searchable-placeholder": "Search investigations",
                placeholder: "Select investigations (optional)",
                size: "xl",
                class: "w-full"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_PvSelectMenu, {
                  modelValue: unref(selectedInvestigationIds),
                  "onUpdate:modelValue": ($event) => isRef(selectedInvestigationIds) ? selectedInvestigationIds.value = $event : null,
                  items: unref(investigationOptions),
                  "value-key": "id",
                  "label-key": "text",
                  multiple: "",
                  searchable: "",
                  "searchable-placeholder": "Search investigations",
                  placeholder: "Select investigations (optional)",
                  size: "xl",
                  class: "w-full"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_PvButton, {
          type: "button",
          color: "neutral",
          variant: "outline",
          icon: "i-lucide-plus",
          onClick: ($event) => openDiagnosticLibrary("Investigation")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Add investigation`);
            } else {
              return [
                createTextVNode("Add investigation")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></section>`);
        if (unref(serviceMessage)) {
          _push(`<div class="page-error" role="alert" data-v-afbd8d7c>`);
          _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-circle-alert" }, null, _parent));
          _push(`${ssrInterpolate(unref(serviceMessage))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<section class="panel template-save-panel" data-v-afbd8d7c>`);
        _push(ssrRenderComponent(_component_PvCheckbox, {
          modelValue: unref(saveAsTemplate),
          "onUpdate:modelValue": ($event) => isRef(saveAsTemplate) ? saveAsTemplate.value = $event : null,
          label: "Save this treatment as a reusable template",
          name: "saveAsTemplate",
          disabled: !unref(templatesReady)
        }, null, _parent));
        if (unref(saveAsTemplate) && unref(selectedTemplateId) === null) {
          _push(ssrRenderComponent(_component_PvFormField, {
            label: "New treatment template name",
            name: "templateName",
            required: "",
            help: "Patient information is never included in a treatment template."
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_PvInput, {
                  modelValue: unref(newTemplateName),
                  "onUpdate:modelValue": ($event) => isRef(newTemplateName) ? newTemplateName.value = $event : null,
                  name: "templateName",
                  maxlength: 100,
                  placeholder: "Enter a name for this template",
                  size: "xl",
                  class: "w-full"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_PvInput, {
                    modelValue: unref(newTemplateName),
                    "onUpdate:modelValue": ($event) => isRef(newTemplateName) ? newTemplateName.value = $event : null,
                    name: "templateName",
                    maxlength: 100,
                    placeholder: "Enter a name for this template",
                    size: "xl",
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else if (unref(saveAsTemplate)) {
          _push(`<p class="template-help" data-v-afbd8d7c>Saving will update “${ssrInterpolate(unref(treatmentTemplates).find((item) => item.id === unref(selectedTemplateId))?.name)}” with the current medication and treatment details.</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</section>`);
        _push(ssrRenderComponent(_component_PrescriptionPrintOptions, {
          a5: unref(printAsA5),
          "onUpdate:a5": ($event) => isRef(printAsA5) ? printAsA5.value = $event : null,
          grayscale: unref(printGrayscale),
          "onUpdate:grayscale": ($event) => isRef(printGrayscale) ? printGrayscale.value = $event : null
        }, null, _parent));
        _push(`<div class="form-actions" data-v-afbd8d7c>`);
        _push(ssrRenderComponent(_component_PvButton, {
          type: "submit",
          icon: "i-lucide-save",
          size: "lg",
          loading: unref(pending),
          disabled: unref(pending)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(editing) ? "Save changes" : "Save treatment")}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(editing) ? "Save changes" : "Save treatment"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_PvButton, {
          type: "button",
          color: "neutral",
          variant: "outline",
          icon: "i-lucide-printer",
          size: "lg",
          disabled: unref(pending),
          onClick: ($event) => save(true)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Save and print`);
            } else {
              return [
                createTextVNode("Save and print")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_PvButton, {
          to: "/treatments",
          color: "neutral",
          variant: "ghost",
          size: "lg"
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
        _push(`</div></form>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(selectedPatient)) {
        _push(ssrRenderComponent(_component_PatientTreatmentHistoryModal, {
          open: unref(historyOpen),
          "onUpdate:open": ($event) => isRef(historyOpen) ? historyOpen.value = $event : null,
          patient: unref(selectedPatient)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_PvModal, {
        open: unref(patientModalOpen),
        "onUpdate:open": ($event) => isRef(patientModalOpen) ? patientModalOpen.value = $event : null,
        title: "Find patient",
        description: "Search by name, phone or gender, then select a patient.",
        dir: "ltr",
        ui: { content: "w-[min(940px,calc(100vw-1.5rem))] max-w-none min-w-0", body: "min-w-0" }
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="patient-search-modal" data-v-afbd8d7c${_scopeId}><div class="patient-search-filters" data-v-afbd8d7c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PvFormField, { label: "Name" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PvInput, {
                    modelValue: unref(patientFilters).name,
                    "onUpdate:modelValue": ($event) => unref(patientFilters).name = $event,
                    maxlength: 200,
                    placeholder: "Name",
                    size: "lg",
                    class: "w-full",
                    onKeyup: ($event) => {
                      patientSearchPage.value = 1;
                      searchPatients();
                    }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PvInput, {
                      modelValue: unref(patientFilters).name,
                      "onUpdate:modelValue": ($event) => unref(patientFilters).name = $event,
                      maxlength: 200,
                      placeholder: "Name",
                      size: "lg",
                      class: "w-full",
                      onKeyup: withKeys(($event) => {
                        patientSearchPage.value = 1;
                        searchPatients();
                      }, ["enter"])
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PvFormField, { label: "Phone" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PvInput, {
                    modelValue: unref(patientFilters).phone,
                    "onUpdate:modelValue": ($event) => unref(patientFilters).phone = $event,
                    type: "tel",
                    dir: "ltr",
                    maxlength: 32,
                    placeholder: "Phone",
                    size: "lg",
                    class: "w-full",
                    onKeyup: ($event) => {
                      patientSearchPage.value = 1;
                      searchPatients();
                    }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PvInput, {
                      modelValue: unref(patientFilters).phone,
                      "onUpdate:modelValue": ($event) => unref(patientFilters).phone = $event,
                      type: "tel",
                      dir: "ltr",
                      maxlength: 32,
                      placeholder: "Phone",
                      size: "lg",
                      class: "w-full",
                      onKeyup: withKeys(($event) => {
                        patientSearchPage.value = 1;
                        searchPatients();
                      }, ["enter"])
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PvFormField, { label: "Gender" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PvSelect, {
                    modelValue: unref(patientFilters).gender,
                    "onUpdate:modelValue": ($event) => unref(patientFilters).gender = $event,
                    items: genderOptions,
                    size: "lg",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PvSelect, {
                      modelValue: unref(patientFilters).gender,
                      "onUpdate:modelValue": ($event) => unref(patientFilters).gender = $event,
                      items: genderOptions,
                      size: "lg",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PvButton, {
              type: "button",
              icon: "i-lucide-search",
              loading: unref(patientSearchLoading),
              onClick: ($event) => {
                patientSearchPage.value = 1;
                searchPatients();
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Search`);
                } else {
                  return [
                    createTextVNode("Search")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (unref(patientSearchError)) {
              _push2(`<p role="alert" class="patient-code-message" data-v-afbd8d7c${_scopeId}>${ssrInterpolate(unref(patientSearchError))}</p>`);
            } else if (unref(patientSearchLoading)) {
              _push2(`<div class="picker-state" role="status" data-v-afbd8d7c${_scopeId}>Loading patients…</div>`);
            } else if (unref(patientResults).items.length) {
              _push2(`<div class="patient-modal-table-wrap" data-v-afbd8d7c${_scopeId}><table class="patient-modal-table" data-v-afbd8d7c${_scopeId}><thead data-v-afbd8d7c${_scopeId}><tr data-v-afbd8d7c${_scopeId}><th scope="col" data-v-afbd8d7c${_scopeId}>Code</th><th scope="col" data-v-afbd8d7c${_scopeId}>Name</th><th scope="col" data-v-afbd8d7c${_scopeId}>Phone</th><th scope="col" data-v-afbd8d7c${_scopeId}>Age</th><th scope="col" data-v-afbd8d7c${_scopeId}>Gender</th><th scope="col" data-v-afbd8d7c${_scopeId}>Address</th><th scope="col" data-v-afbd8d7c${_scopeId}><span class="sr-only" data-v-afbd8d7c${_scopeId}>Select</span></th></tr></thead><tbody data-v-afbd8d7c${_scopeId}><!--[-->`);
              ssrRenderList(unref(patientResults).items, (patient) => {
                _push2(`<tr data-v-afbd8d7c${_scopeId}><td data-v-afbd8d7c${_scopeId}><bdi data-v-afbd8d7c${_scopeId}>${ssrInterpolate(patient.code)}</bdi></td><th scope="row" data-v-afbd8d7c${_scopeId}><bdi data-v-afbd8d7c${_scopeId}>${ssrInterpolate(patient.name)}</bdi></th><td data-v-afbd8d7c${_scopeId}><bdi dir="ltr" data-v-afbd8d7c${_scopeId}>${ssrInterpolate(patient.phone || "—")}</bdi></td><td data-v-afbd8d7c${_scopeId}>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(patient.age))}</td><td data-v-afbd8d7c${_scopeId}>${ssrInterpolate(genders[patient.gender] || patient.gender)}</td><td data-v-afbd8d7c${_scopeId}><bdi data-v-afbd8d7c${_scopeId}>${ssrInterpolate(patient.address || "—")}</bdi></td><td data-v-afbd8d7c${_scopeId}>`);
                _push2(ssrRenderComponent(_component_PvButton, {
                  type: "button",
                  size: "sm",
                  "aria-label": `${patient.name} Select`,
                  onClick: ($event) => populatePatient(patient)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`Select`);
                    } else {
                      return [
                        createTextVNode("Select")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</td></tr>`);
              });
              _push2(`<!--]--></tbody></table></div>`);
            } else {
              _push2(`<p class="picker-state" data-v-afbd8d7c${_scopeId}>No patient found. Change the search criteria or register a new patient.</p>`);
            }
            if (unref(patientResults).total > 10 && !unref(patientSearchError)) {
              _push2(`<footer class="patient-modal-pagination" data-v-afbd8d7c${_scopeId}><span data-v-afbd8d7c${_scopeId}>${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(patientResults).total))} patients · ${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(patientSearchPage)))} / ${ssrInterpolate(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(patientTotalPages)))}</span><div data-v-afbd8d7c${_scopeId}>`);
              _push2(ssrRenderComponent(_component_PvButton, {
                type: "button",
                color: "neutral",
                variant: "outline",
                icon: "i-lucide-chevron-left",
                "aria-label": "Previous page",
                disabled: unref(patientSearchPage) <= 1 || unref(patientSearchLoading),
                onClick: ($event) => changePatientPage(unref(patientSearchPage) - 1)
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_PvButton, {
                type: "button",
                color: "neutral",
                variant: "outline",
                icon: "i-lucide-chevron-right",
                "aria-label": "Next page",
                disabled: unref(patientSearchPage) >= unref(patientTotalPages) || unref(patientSearchLoading),
                onClick: ($event) => changePatientPage(unref(patientSearchPage) + 1)
              }, null, _parent2, _scopeId));
              _push2(`</div></footer>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "patient-search-modal" }, [
                createVNode("div", { class: "patient-search-filters" }, [
                  createVNode(_component_PvFormField, { label: "Name" }, {
                    default: withCtx(() => [
                      createVNode(_component_PvInput, {
                        modelValue: unref(patientFilters).name,
                        "onUpdate:modelValue": ($event) => unref(patientFilters).name = $event,
                        maxlength: 200,
                        placeholder: "Name",
                        size: "lg",
                        class: "w-full",
                        onKeyup: withKeys(($event) => {
                          patientSearchPage.value = 1;
                          searchPatients();
                        }, ["enter"])
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_PvFormField, { label: "Phone" }, {
                    default: withCtx(() => [
                      createVNode(_component_PvInput, {
                        modelValue: unref(patientFilters).phone,
                        "onUpdate:modelValue": ($event) => unref(patientFilters).phone = $event,
                        type: "tel",
                        dir: "ltr",
                        maxlength: 32,
                        placeholder: "Phone",
                        size: "lg",
                        class: "w-full",
                        onKeyup: withKeys(($event) => {
                          patientSearchPage.value = 1;
                          searchPatients();
                        }, ["enter"])
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_PvFormField, { label: "Gender" }, {
                    default: withCtx(() => [
                      createVNode(_component_PvSelect, {
                        modelValue: unref(patientFilters).gender,
                        "onUpdate:modelValue": ($event) => unref(patientFilters).gender = $event,
                        items: genderOptions,
                        size: "lg",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_PvButton, {
                    type: "button",
                    icon: "i-lucide-search",
                    loading: unref(patientSearchLoading),
                    onClick: ($event) => {
                      patientSearchPage.value = 1;
                      searchPatients();
                    }
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Search")
                    ]),
                    _: 1
                  }, 8, ["loading", "onClick"])
                ]),
                unref(patientSearchError) ? (openBlock(), createBlock("p", {
                  key: 0,
                  role: "alert",
                  class: "patient-code-message"
                }, toDisplayString(unref(patientSearchError)), 1)) : unref(patientSearchLoading) ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "picker-state",
                  role: "status"
                }, "Loading patients…")) : unref(patientResults).items.length ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "patient-modal-table-wrap"
                }, [
                  createVNode("table", { class: "patient-modal-table" }, [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", { scope: "col" }, "Code"),
                        createVNode("th", { scope: "col" }, "Name"),
                        createVNode("th", { scope: "col" }, "Phone"),
                        createVNode("th", { scope: "col" }, "Age"),
                        createVNode("th", { scope: "col" }, "Gender"),
                        createVNode("th", { scope: "col" }, "Address"),
                        createVNode("th", { scope: "col" }, [
                          createVNode("span", { class: "sr-only" }, "Select")
                        ])
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(patientResults).items, (patient) => {
                        return openBlock(), createBlock("tr", {
                          key: patient.id
                        }, [
                          createVNode("td", null, [
                            createVNode("bdi", null, toDisplayString(patient.code), 1)
                          ]),
                          createVNode("th", { scope: "row" }, [
                            createVNode("bdi", null, toDisplayString(patient.name), 1)
                          ]),
                          createVNode("td", null, [
                            createVNode("bdi", { dir: "ltr" }, toDisplayString(patient.phone || "—"), 1)
                          ]),
                          createVNode("td", null, toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(patient.age)), 1),
                          createVNode("td", null, toDisplayString(genders[patient.gender] || patient.gender), 1),
                          createVNode("td", null, [
                            createVNode("bdi", null, toDisplayString(patient.address || "—"), 1)
                          ]),
                          createVNode("td", null, [
                            createVNode(_component_PvButton, {
                              type: "button",
                              size: "sm",
                              "aria-label": `${patient.name} Select`,
                              onClick: ($event) => populatePatient(patient)
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Select")
                              ]),
                              _: 1
                            }, 8, ["aria-label", "onClick"])
                          ])
                        ]);
                      }), 128))
                    ])
                  ])
                ])) : (openBlock(), createBlock("p", {
                  key: 3,
                  class: "picker-state"
                }, "No patient found. Change the search criteria or register a new patient.")),
                unref(patientResults).total > 10 && !unref(patientSearchError) ? (openBlock(), createBlock("footer", {
                  key: 4,
                  class: "patient-modal-pagination"
                }, [
                  createVNode("span", null, toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(patientResults).total)) + " patients · " + toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(patientSearchPage))) + " / " + toDisplayString(("localNumber" in _ctx ? _ctx.localNumber : unref(localNumber))(unref(patientTotalPages))), 1),
                  createVNode("div", null, [
                    createVNode(_component_PvButton, {
                      type: "button",
                      color: "neutral",
                      variant: "outline",
                      icon: "i-lucide-chevron-left",
                      "aria-label": "Previous page",
                      disabled: unref(patientSearchPage) <= 1 || unref(patientSearchLoading),
                      onClick: ($event) => changePatientPage(unref(patientSearchPage) - 1)
                    }, null, 8, ["disabled", "onClick"]),
                    createVNode(_component_PvButton, {
                      type: "button",
                      color: "neutral",
                      variant: "outline",
                      icon: "i-lucide-chevron-right",
                      "aria-label": "Next page",
                      disabled: unref(patientSearchPage) >= unref(patientTotalPages) || unref(patientSearchLoading),
                      onClick: ($event) => changePatientPage(unref(patientSearchPage) + 1)
                    }, null, 8, ["disabled", "onClick"])
                  ])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_PvModal, {
        open: unref(insufficientStockOpen),
        "onUpdate:open": ($event) => isRef(insufficientStockOpen) ? insufficientStockOpen.value = $event : null,
        title: "Insufficient medication stock",
        description: "The dose exceeds the available quantity for one or more medications.",
        dismissible: !unref(pending),
        dir: "ltr"
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="stock-warning" data-v-afbd8d7c${_scopeId}><p data-v-afbd8d7c${_scopeId}>If you select «Yes» , the treatment will be saved without deducting medications with insufficient stock. If you select «No» , the treatment will not be saved.</p><div data-v-afbd8d7c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PvButton, {
              type: "button",
              loading: unref(pending),
              onClick: continueWithoutStockDeduction
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Yes, continue`);
                } else {
                  return [
                    createTextVNode("Yes, continue")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PvButton, {
              type: "button",
              color: "neutral",
              variant: "outline",
              disabled: unref(pending),
              onClick: ($event) => insufficientStockOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`No`);
                } else {
                  return [
                    createTextVNode("No")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "stock-warning" }, [
                createVNode("p", null, "If you select «Yes» , the treatment will be saved without deducting medications with insufficient stock. If you select «No» , the treatment will not be saved."),
                createVNode("div", null, [
                  createVNode(_component_PvButton, {
                    type: "button",
                    loading: unref(pending),
                    onClick: continueWithoutStockDeduction
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Yes, continue")
                    ]),
                    _: 1
                  }, 8, ["loading"]),
                  createVNode(_component_PvButton, {
                    type: "button",
                    color: "neutral",
                    variant: "outline",
                    disabled: unref(pending),
                    onClick: ($event) => insufficientStockOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode("No")
                    ]),
                    _: 1
                  }, 8, ["disabled", "onClick"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_PvModal, {
        open: unref(noteOpen),
        "onUpdate:open": ($event) => isRef(noteOpen) ? noteOpen.value = $event : null,
        title: "New clinical note",
        description: "This note will also be available for future treatments.",
        dismissible: !unref(noteSaving),
        dir: "ltr"
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="note-form" data-v-afbd8d7c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PvFormField, {
              label: "Remarks",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PvTextarea, {
                    modelValue: unref(noteText),
                    "onUpdate:modelValue": ($event) => isRef(noteText) ? noteText.value = $event : null,
                    maxlength: 300,
                    rows: 3,
                    class: "w-full",
                    placeholder: "Enter a clinical note"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PvTextarea, {
                      modelValue: unref(noteText),
                      "onUpdate:modelValue": ($event) => isRef(noteText) ? noteText.value = $event : null,
                      maxlength: 300,
                      rows: 3,
                      class: "w-full",
                      placeholder: "Enter a clinical note"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(serviceMessage)) {
              _push2(`<p role="alert" data-v-afbd8d7c${_scopeId}>${ssrInterpolate(unref(serviceMessage))}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div data-v-afbd8d7c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PvButton, {
              type: "submit",
              loading: unref(noteSaving)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Save`);
                } else {
                  return [
                    createTextVNode("Save")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PvButton, {
              type: "button",
              color: "neutral",
              variant: "ghost",
              disabled: unref(noteSaving),
              onClick: ($event) => noteOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Back`);
                } else {
                  return [
                    createTextVNode("Back")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                class: "note-form",
                onSubmit: withModifiers(addNote, ["prevent"])
              }, [
                createVNode(_component_PvFormField, {
                  label: "Remarks",
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_PvTextarea, {
                      modelValue: unref(noteText),
                      "onUpdate:modelValue": ($event) => isRef(noteText) ? noteText.value = $event : null,
                      maxlength: 300,
                      rows: 3,
                      class: "w-full",
                      placeholder: "Enter a clinical note"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                unref(serviceMessage) ? (openBlock(), createBlock("p", {
                  key: 0,
                  role: "alert"
                }, toDisplayString(unref(serviceMessage)), 1)) : createCommentVNode("", true),
                createVNode("div", null, [
                  createVNode(_component_PvButton, {
                    type: "submit",
                    loading: unref(noteSaving)
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Save")
                    ]),
                    _: 1
                  }, 8, ["loading"]),
                  createVNode(_component_PvButton, {
                    type: "button",
                    color: "neutral",
                    variant: "ghost",
                    disabled: unref(noteSaving),
                    onClick: ($event) => noteOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Back")
                    ]),
                    _: 1
                  }, 8, ["disabled", "onClick"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_PvModal, {
        open: unref(instructionOpen),
        "onUpdate:open": ($event) => isRef(instructionOpen) ? instructionOpen.value = $event : null,
        title: "New additional instruction",
        description: "This instruction will be available for future treatments.",
        dismissible: !unref(instructionSaving),
        dir: "ltr"
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="note-form" data-v-afbd8d7c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PvFormField, {
              label: "Instruction",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PvTextarea, {
                    modelValue: unref(instructionText),
                    "onUpdate:modelValue": ($event) => isRef(instructionText) ? instructionText.value = $event : null,
                    maxlength: 300,
                    rows: 3,
                    class: "w-full",
                    placeholder: "Enter an instruction for the patient"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PvTextarea, {
                      modelValue: unref(instructionText),
                      "onUpdate:modelValue": ($event) => isRef(instructionText) ? instructionText.value = $event : null,
                      maxlength: 300,
                      rows: 3,
                      class: "w-full",
                      placeholder: "Enter an instruction for the patient"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(serviceMessage)) {
              _push2(`<p role="alert" data-v-afbd8d7c${_scopeId}>${ssrInterpolate(unref(serviceMessage))}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div data-v-afbd8d7c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PvButton, {
              type: "submit",
              loading: unref(instructionSaving)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Save instruction`);
                } else {
                  return [
                    createTextVNode("Save instruction")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PvButton, {
              type: "button",
              color: "neutral",
              variant: "ghost",
              disabled: unref(instructionSaving),
              onClick: ($event) => instructionOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Back`);
                } else {
                  return [
                    createTextVNode("Back")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                class: "note-form",
                onSubmit: withModifiers(addInstruction, ["prevent"])
              }, [
                createVNode(_component_PvFormField, {
                  label: "Instruction",
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_PvTextarea, {
                      modelValue: unref(instructionText),
                      "onUpdate:modelValue": ($event) => isRef(instructionText) ? instructionText.value = $event : null,
                      maxlength: 300,
                      rows: 3,
                      class: "w-full",
                      placeholder: "Enter an instruction for the patient"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                unref(serviceMessage) ? (openBlock(), createBlock("p", {
                  key: 0,
                  role: "alert"
                }, toDisplayString(unref(serviceMessage)), 1)) : createCommentVNode("", true),
                createVNode("div", null, [
                  createVNode(_component_PvButton, {
                    type: "submit",
                    loading: unref(instructionSaving)
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Save instruction")
                    ]),
                    _: 1
                  }, 8, ["loading"]),
                  createVNode(_component_PvButton, {
                    type: "button",
                    color: "neutral",
                    variant: "ghost",
                    disabled: unref(instructionSaving),
                    onClick: ($event) => instructionOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Back")
                    ]),
                    _: 1
                  }, 8, ["disabled", "onClick"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_PvModal, {
        open: unref(diagnosticOpen),
        "onUpdate:open": ($event) => isRef(diagnosticOpen) ? diagnosticOpen.value = $event : null,
        title: `Add ${unref(diagnosticKind).toLowerCase()}`,
        description: "This item will be available for future treatments.",
        dismissible: !unref(diagnosticSaving),
        dir: "ltr"
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="note-form" data-v-afbd8d7c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PvFormField, {
              label: unref(diagnosticKind),
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PvTextarea, {
                    modelValue: unref(diagnosticText),
                    "onUpdate:modelValue": ($event) => isRef(diagnosticText) ? diagnosticText.value = $event : null,
                    maxlength: 300,
                    rows: 3,
                    class: "w-full",
                    placeholder: `Enter a ${unref(diagnosticKind).toLowerCase()}`
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PvTextarea, {
                      modelValue: unref(diagnosticText),
                      "onUpdate:modelValue": ($event) => isRef(diagnosticText) ? diagnosticText.value = $event : null,
                      maxlength: 300,
                      rows: 3,
                      class: "w-full",
                      placeholder: `Enter a ${unref(diagnosticKind).toLowerCase()}`
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(serviceMessage)) {
              _push2(`<p role="alert" data-v-afbd8d7c${_scopeId}>${ssrInterpolate(unref(serviceMessage))}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div data-v-afbd8d7c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PvButton, {
              type: "submit",
              loading: unref(diagnosticSaving)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Save`);
                } else {
                  return [
                    createTextVNode("Save")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PvButton, {
              type: "button",
              color: "neutral",
              variant: "ghost",
              disabled: unref(diagnosticSaving),
              onClick: ($event) => diagnosticOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Back`);
                } else {
                  return [
                    createTextVNode("Back")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                class: "note-form",
                onSubmit: withModifiers(addDiagnosticInvestigation, ["prevent"])
              }, [
                createVNode(_component_PvFormField, {
                  label: unref(diagnosticKind),
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_PvTextarea, {
                      modelValue: unref(diagnosticText),
                      "onUpdate:modelValue": ($event) => isRef(diagnosticText) ? diagnosticText.value = $event : null,
                      maxlength: 300,
                      rows: 3,
                      class: "w-full",
                      placeholder: `Enter a ${unref(diagnosticKind).toLowerCase()}`
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                unref(serviceMessage) ? (openBlock(), createBlock("p", {
                  key: 0,
                  role: "alert"
                }, toDisplayString(unref(serviceMessage)), 1)) : createCommentVNode("", true),
                createVNode("div", null, [
                  createVNode(_component_PvButton, {
                    type: "submit",
                    loading: unref(diagnosticSaving)
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Save")
                    ]),
                    _: 1
                  }, 8, ["loading"]),
                  createVNode(_component_PvButton, {
                    type: "button",
                    color: "neutral",
                    variant: "ghost",
                    disabled: unref(diagnosticSaving),
                    onClick: ($event) => diagnosticOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Back")
                    ]),
                    _: 1
                  }, 8, ["disabled", "onClick"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TreatmentEditor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-afbd8d7c"]]), { __name: "TreatmentEditor" });

export { __nuxt_component_0 as _ };;globalThis.__timing__.logEnd('Load chunks/build/TreatmentEditor-CX1LTrZh');
//# sourceMappingURL=TreatmentEditor-CX1LTrZh.mjs.map
