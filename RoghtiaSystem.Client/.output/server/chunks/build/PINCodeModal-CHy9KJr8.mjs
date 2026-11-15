globalThis.__timing__.logStart('Load chunks/build/PINCodeModal-CHy9KJr8');import { _ as __nuxt_component_0 } from './PvModal-DEtZu0U3.mjs';
import { _ as __nuxt_component_1 } from './PvForm-Cood2pqT.mjs';
import { _ as __nuxt_component_2 } from './PvFormField-Cv2Q-Mwy.mjs';
import { _ as __nuxt_component_3 } from './PvInput-q91fCord.mjs';
import { _ as __nuxt_component_5 } from './PvButton-5I-3PpYG.mjs';
import { defineComponent, useModel, useTemplateRef, ref, reactive, watch, mergeProps, unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as useAuth, n as navigateTo } from './server.mjs';
import { u as useAppToast } from './useAppToast-CCe0hF_z.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-8jYXDYbZ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PINCodeModal",
  __ssrInlineRender: true,
  props: {
    "open": { type: Boolean, ...{ default: false } },
    "openModifiers": {}
  },
  emits: ["update:open"],
  setup(__props) {
    const open = useModel(__props, "open");
    const auth = useAuth();
    const toast = useAppToast();
    const form = useTemplateRef("pinForm");
    const pending = ref(false);
    const serviceMessage = ref("");
    const credentials = reactive({ currentPassword: "", pinCode: "" });
    function validate(state) {
      const errors = [];
      if (!state.currentPassword || state.currentPassword.length > 128) errors.push({ name: "currentPassword", message: "Enter your current password." });
      if (!/^[0-9]{6,10}$/.test(state.pinCode)) errors.push({ name: "pinCode", message: "PIN must contain 6 to 10 digits." });
      return errors;
    }
    function focusError(event) {
      if (event.errors[0]?.id) (void 0).getElementById(event.errors[0].id)?.focus();
    }
    async function submit() {
      if (pending.value) return;
      pending.value = true;
      serviceMessage.value = "";
      try {
        await $fetch("/api/auth/set-pin", {
          method: "POST",
          body: { currentPassword: credentials.currentPassword, pinCode: credentials.pinCode },
          headers: { "x-roghtiasystem-request": "1" },
          retry: 0
        });
        Object.assign(credentials, { currentPassword: "", pinCode: "" });
        open.value = false;
        toast.add({ title: "PIN saved", description: "You can now use this PIN to reset a forgotten password.", color: "success", icon: "i-lucide-shield-check" });
      } catch (error) {
        const failure = error;
        const code = failure.data?.data?.code || failure.data?.code;
        const status = failure.statusCode || failure.status;
        const messages = {
          PASSWORD_INCORRECT: "Current password is incorrect.",
          VALIDATION_ERROR: "Check your password and PIN and try again.",
          TOO_MANY_REQUESTS: "Too many attempts. Please try again later.",
          INVALID_ORIGIN: "Refresh the page and try again."
        };
        if (status === 401 && code !== "PASSWORD_INCORRECT") {
          open.value = false;
          await auth.refresh();
          await navigateTo("/login");
          return;
        }
        serviceMessage.value = messages[code || ""] || "PIN could not be saved. Please try again.";
        if (code === "PASSWORD_INCORRECT") form.value?.setErrors([{ name: "currentPassword", message: messages.PASSWORD_INCORRECT }]);
      } finally {
        pending.value = false;
      }
    }
    watch(open, (value) => {
      if (!value) {
        Object.assign(credentials, { currentPassword: "", pinCode: "" });
        serviceMessage.value = "";
        form.value?.clear();
      }
    });
    watch(credentials, () => {
      serviceMessage.value = "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PvModal = __nuxt_component_0;
      const _component_PvForm = __nuxt_component_1;
      const _component_PvFormField = __nuxt_component_2;
      const _component_PvInput = __nuxt_component_3;
      const _component_PvButton = __nuxt_component_5;
      _push(ssrRenderComponent(_component_PvModal, mergeProps({
        open: open.value,
        title: "Recovery PIN",
        description: "Enter your current password and choose a PIN with 6 to 10 digits. Keep this PIN in a safe place.",
        close: !unref(pending),
        dismissible: !unref(pending),
        dir: "ltr",
        ui: { content: "max-w-lg min-w-0", wrapper: "min-w-0 pe-8", body: "min-w-0 min-h-0", title: "text-lg break-words", description: "text-base leading-7 break-words" },
        "onUpdate:open": (value) => {
          if (!unref(pending)) open.value = value;
        }
      }, _attrs), {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PvForm, {
              ref: "pinForm",
              state: unref(credentials),
              validate,
              disabled: unref(pending),
              novalidate: "",
              class: "pin-form",
              onSubmit: submit,
              onError: focusError
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PvFormField, {
                    label: "Current password",
                    name: "currentPassword",
                    required: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_PvInput, {
                          modelValue: unref(credentials).currentPassword,
                          "onUpdate:modelValue": ($event) => unref(credentials).currentPassword = $event,
                          name: "currentPassword",
                          type: "password",
                          autocomplete: "current-password",
                          placeholder: "Enter your current password",
                          icon: "i-lucide-lock-keyhole",
                          size: "xl",
                          class: "w-full",
                          ui: { base: "pin-input" }
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_PvInput, {
                            modelValue: unref(credentials).currentPassword,
                            "onUpdate:modelValue": ($event) => unref(credentials).currentPassword = $event,
                            name: "currentPassword",
                            type: "password",
                            autocomplete: "current-password",
                            placeholder: "Enter your current password",
                            icon: "i-lucide-lock-keyhole",
                            size: "xl",
                            class: "w-full",
                            ui: { base: "pin-input" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_PvFormField, {
                    label: "PIN",
                    name: "pinCode",
                    required: "",
                    help: "6 to 10 digits"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_PvInput, {
                          modelValue: unref(credentials).pinCode,
                          "onUpdate:modelValue": [($event) => unref(credentials).pinCode = $event, (value) => unref(credentials).pinCode = String(value || "").replace(/[^0-9]/g, "").slice(0, 10)],
                          name: "pinCode",
                          type: "text",
                          inputmode: "numeric",
                          dir: "ltr",
                          autocomplete: "off",
                          pattern: "[0-9]*",
                          maxlength: "10",
                          placeholder: "Enter new PIN",
                          icon: "i-lucide-key-round",
                          size: "xl",
                          class: "w-full",
                          ui: { base: "pin-input" }
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_PvInput, {
                            modelValue: unref(credentials).pinCode,
                            "onUpdate:modelValue": [($event) => unref(credentials).pinCode = $event, (value) => unref(credentials).pinCode = String(value || "").replace(/[^0-9]/g, "").slice(0, 10)],
                            name: "pinCode",
                            type: "text",
                            inputmode: "numeric",
                            dir: "ltr",
                            autocomplete: "off",
                            pattern: "[0-9]*",
                            maxlength: "10",
                            placeholder: "Enter new PIN",
                            icon: "i-lucide-key-round",
                            size: "xl",
                            class: "w-full",
                            ui: { base: "pin-input" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (unref(serviceMessage)) {
                    _push3(`<p class="pin-message" role="alert" data-v-aca50a1a${_scopeId2}>${ssrInterpolate(unref(serviceMessage))}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="pin-actions" data-v-aca50a1a${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_PvButton, {
                    type: "submit",
                    size: "lg",
                    icon: "i-lucide-save",
                    loading: unref(pending),
                    disabled: unref(pending)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Save PIN`);
                      } else {
                        return [
                          createTextVNode("Save PIN")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_PvButton, {
                    type: "button",
                    size: "lg",
                    color: "neutral",
                    variant: "outline",
                    disabled: unref(pending),
                    onClick: ($event) => open.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Cancel`);
                      } else {
                        return [
                          createTextVNode("Cancel")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_PvFormField, {
                      label: "Current password",
                      name: "currentPassword",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_PvInput, {
                          modelValue: unref(credentials).currentPassword,
                          "onUpdate:modelValue": ($event) => unref(credentials).currentPassword = $event,
                          name: "currentPassword",
                          type: "password",
                          autocomplete: "current-password",
                          placeholder: "Enter your current password",
                          icon: "i-lucide-lock-keyhole",
                          size: "xl",
                          class: "w-full",
                          ui: { base: "pin-input" }
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_PvFormField, {
                      label: "PIN",
                      name: "pinCode",
                      required: "",
                      help: "6 to 10 digits"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_PvInput, {
                          modelValue: unref(credentials).pinCode,
                          "onUpdate:modelValue": [($event) => unref(credentials).pinCode = $event, (value) => unref(credentials).pinCode = String(value || "").replace(/[^0-9]/g, "").slice(0, 10)],
                          name: "pinCode",
                          type: "text",
                          inputmode: "numeric",
                          dir: "ltr",
                          autocomplete: "off",
                          pattern: "[0-9]*",
                          maxlength: "10",
                          placeholder: "Enter new PIN",
                          icon: "i-lucide-key-round",
                          size: "xl",
                          class: "w-full",
                          ui: { base: "pin-input" }
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    unref(serviceMessage) ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "pin-message",
                      role: "alert"
                    }, toDisplayString(unref(serviceMessage)), 1)) : createCommentVNode("", true),
                    createVNode("div", { class: "pin-actions" }, [
                      createVNode(_component_PvButton, {
                        type: "submit",
                        size: "lg",
                        icon: "i-lucide-save",
                        loading: unref(pending),
                        disabled: unref(pending)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Save PIN")
                        ]),
                        _: 1
                      }, 8, ["loading", "disabled"]),
                      createVNode(_component_PvButton, {
                        type: "button",
                        size: "lg",
                        color: "neutral",
                        variant: "outline",
                        disabled: unref(pending),
                        onClick: ($event) => open.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Cancel")
                        ]),
                        _: 1
                      }, 8, ["disabled", "onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PvForm, {
                ref: "pinForm",
                state: unref(credentials),
                validate,
                disabled: unref(pending),
                novalidate: "",
                class: "pin-form",
                onSubmit: submit,
                onError: focusError
              }, {
                default: withCtx(() => [
                  createVNode(_component_PvFormField, {
                    label: "Current password",
                    name: "currentPassword",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_PvInput, {
                        modelValue: unref(credentials).currentPassword,
                        "onUpdate:modelValue": ($event) => unref(credentials).currentPassword = $event,
                        name: "currentPassword",
                        type: "password",
                        autocomplete: "current-password",
                        placeholder: "Enter your current password",
                        icon: "i-lucide-lock-keyhole",
                        size: "xl",
                        class: "w-full",
                        ui: { base: "pin-input" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_PvFormField, {
                    label: "PIN",
                    name: "pinCode",
                    required: "",
                    help: "6 to 10 digits"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_PvInput, {
                        modelValue: unref(credentials).pinCode,
                        "onUpdate:modelValue": [($event) => unref(credentials).pinCode = $event, (value) => unref(credentials).pinCode = String(value || "").replace(/[^0-9]/g, "").slice(0, 10)],
                        name: "pinCode",
                        type: "text",
                        inputmode: "numeric",
                        dir: "ltr",
                        autocomplete: "off",
                        pattern: "[0-9]*",
                        maxlength: "10",
                        placeholder: "Enter new PIN",
                        icon: "i-lucide-key-round",
                        size: "xl",
                        class: "w-full",
                        ui: { base: "pin-input" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  unref(serviceMessage) ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "pin-message",
                    role: "alert"
                  }, toDisplayString(unref(serviceMessage)), 1)) : createCommentVNode("", true),
                  createVNode("div", { class: "pin-actions" }, [
                    createVNode(_component_PvButton, {
                      type: "submit",
                      size: "lg",
                      icon: "i-lucide-save",
                      loading: unref(pending),
                      disabled: unref(pending)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Save PIN")
                      ]),
                      _: 1
                    }, 8, ["loading", "disabled"]),
                    createVNode(_component_PvButton, {
                      type: "button",
                      size: "lg",
                      color: "neutral",
                      variant: "outline",
                      disabled: unref(pending),
                      onClick: ($event) => open.value = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Cancel")
                      ]),
                      _: 1
                    }, 8, ["disabled", "onClick"])
                  ])
                ]),
                _: 1
              }, 8, ["state", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PINCodeModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-aca50a1a"]]), { __name: "PINCodeModal" });

export { __nuxt_component_9 as _ };;globalThis.__timing__.logEnd('Load chunks/build/PINCodeModal-CHy9KJr8');
//# sourceMappingURL=PINCodeModal-CHy9KJr8.mjs.map
