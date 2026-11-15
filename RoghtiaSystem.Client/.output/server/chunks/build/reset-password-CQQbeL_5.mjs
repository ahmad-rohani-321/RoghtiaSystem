globalThis.__timing__.logStart('Load chunks/build/reset-password-CQQbeL_5');import { a as __nuxt_component_1, _ as __nuxt_component_5 } from './PvButton-5I-3PpYG.mjs';
import { _ as __nuxt_component_1$1 } from './PvForm-Cood2pqT.mjs';
import { _ as __nuxt_component_2 } from './PvFormField-Cv2Q-Mwy.mjs';
import { _ as __nuxt_component_3 } from './PvInput-q91fCord.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-Ca5hbmYf.mjs';
import { reactive, ref, mergeProps, unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useHead } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-8jYXDYbZ.mjs';
import 'lucide-vue-next';
import './inputtext-BSmculv6.mjs';
import '@primeuix/utils';
import './index-C7uVuEHH.mjs';
import './index-CF4f6bc-.mjs';
import '@primeuix/styles/inputtext';
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
import './iconfield-15oSaR08.mjs';
import './inputicon-CGOzj3pd.mjs';

const _sfc_main = {
  __name: "reset-password",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Reset password — RoghtiaSystem" });
    const verification = reactive({ userName: "", pinCode: "" });
    const replacement = reactive({ newPassword: "", confirmPassword: "" });
    const step = ref("verify");
    const pending = ref(false);
    const message = ref("");
    const showPassword = ref(false);
    function validateVerification(state) {
      const errors = [];
      if (!state.userName?.trim() || state.userName.trim().length > 64) errors.push({ name: "userName", message: "Enter a valid username." });
      if (!/^[0-9]{6,10}$/.test(state.pinCode)) errors.push({ name: "pinCode", message: "PIN must contain 6 to 10 digits." });
      return errors;
    }
    function validateReplacement(state) {
      const errors = [];
      if (state.newPassword.length < 8 || state.newPassword.length > 128) errors.push({ name: "newPassword", message: "New password must contain 8 to 128 characters." });
      if (state.newPassword === verification.pinCode) errors.push({ name: "newPassword", message: "Password must differ from the PIN code." });
      if (state.confirmPassword !== state.newPassword) errors.push({ name: "confirmPassword", message: "Passwords do not match." });
      return errors;
    }
    function showRequestError(error) {
      const code = error?.data?.data?.code || error?.data?.code || ((error?.statusCode || error?.status) === 401 ? "INVALID_PIN" : "");
      const messages = {
        INVALID_PIN: "Username or PIN is incorrect. Please try again.",
        VALIDATION_ERROR: "Check the information and try again.",
        TOO_MANY_REQUESTS: "Too many attempts. Please try again later.",
        RESET_CONFLICT: "Unable to change password. Please try again.",
        INVALID_ORIGIN: "Refresh the page and try again."
      };
      if (code === "INVALID_PIN") {
        step.value = "verify";
        verification.pinCode = "";
        replacement.newPassword = "";
        replacement.confirmPassword = "";
      }
      message.value = messages[code] || "Unable to connect to the server. Please try again.";
    }
    async function verify() {
      if (pending.value) return;
      pending.value = true;
      message.value = "";
      try {
        await $fetch("/api/auth/verify-pin", {
          method: "POST",
          body: { userName: verification.userName.trim(), pinCode: verification.pinCode },
          headers: { "x-roghtiasystem-request": "1" },
          retry: 0
        });
        step.value = "replace";
      } catch (error) {
        showRequestError(error);
      } finally {
        pending.value = false;
      }
    }
    async function resetPassword2() {
      if (pending.value) return;
      pending.value = true;
      message.value = "";
      try {
        await $fetch("/api/auth/reset-password", {
          method: "POST",
          body: { userName: verification.userName.trim(), pinCode: verification.pinCode, newPassword: replacement.newPassword },
          headers: { "x-roghtiasystem-request": "1" },
          retry: 0
        });
        verification.pinCode = "";
        replacement.newPassword = "";
        replacement.confirmPassword = "";
        step.value = "done";
      } catch (error) {
        showRequestError(error);
      } finally {
        pending.value = false;
      }
    }
    function focusError(event) {
      if (event.errors?.[0]?.id) (void 0).getElementById(event.errors[0].id)?.focus();
    }
    function updatePIN(value) {
      verification.pinCode = String(value || "").replace(/[^0-9]/g, "").slice(0, 10);
      message.value = "";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PvIcon = __nuxt_component_1;
      const _component_PvForm = __nuxt_component_1$1;
      const _component_PvFormField = __nuxt_component_2;
      const _component_PvInput = __nuxt_component_3;
      const _component_PvButton = __nuxt_component_5;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({
        class: "reset-page",
        "aria-labelledby": "reset-title"
      }, _attrs))} data-v-1c4af583><section class="reset-card" data-v-1c4af583><div class="reset-intro" data-v-1c4af583><span class="brand-icon reset-logo" aria-hidden="true" data-v-1c4af583>`);
      _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-heart-pulse" }, null, _parent));
      _push(`</span><span class="reset-brand" data-v-1c4af583>RoghtiaSystem<span data-v-1c4af583>.</span></span><h1 id="reset-title" data-v-1c4af583>Reset password</h1>`);
      if (unref(step) === "verify") {
        _push(`<p data-v-1c4af583>Enter your username and the PIN you chose when creating your account.</p>`);
      } else if (unref(step) === "replace") {
        _push(`<p data-v-1c4af583>PIN verified. Choose a new password.</p>`);
      } else {
        _push(`<p data-v-1c4af583>Your password has changed. Sign in with your new password.</p>`);
      }
      _push(`</div>`);
      if (unref(step) === "verify") {
        _push(ssrRenderComponent(_component_PvForm, {
          state: unref(verification),
          validate: validateVerification,
          disabled: unref(pending),
          novalidate: "",
          class: "reset-form",
          onSubmit: verify,
          onError: focusError
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_PvFormField, {
                label: "Username",
                name: "userName",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_PvInput, {
                      modelValue: unref(verification).userName,
                      "onUpdate:modelValue": [($event) => unref(verification).userName = $event, ($event) => message.value = ""],
                      name: "userName",
                      autocomplete: "username",
                      autocapitalize: "none",
                      spellcheck: false,
                      placeholder: "Enter your username",
                      icon: "i-lucide-user-round",
                      size: "xl",
                      class: "w-full",
                      ui: { base: "reset-input" }
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_PvInput, {
                        modelValue: unref(verification).userName,
                        "onUpdate:modelValue": [($event) => unref(verification).userName = $event, ($event) => message.value = ""],
                        name: "userName",
                        autocomplete: "username",
                        autocapitalize: "none",
                        spellcheck: false,
                        placeholder: "Enter your username",
                        icon: "i-lucide-user-round",
                        size: "xl",
                        class: "w-full",
                        ui: { base: "reset-input" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_PvFormField, {
                label: "PIN",
                name: "pinCode",
                required: "",
                help: "6 to 10 digits"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_PvInput, {
                      modelValue: unref(verification).pinCode,
                      "onUpdate:modelValue": [($event) => unref(verification).pinCode = $event, updatePIN],
                      name: "pinCode",
                      type: "text",
                      inputmode: "numeric",
                      dir: "ltr",
                      autocomplete: "off",
                      pattern: "[0-9]*",
                      maxlength: "10",
                      placeholder: "Enter your PIN",
                      icon: "i-lucide-key-round",
                      size: "xl",
                      class: "w-full",
                      ui: { base: "reset-input" }
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_PvInput, {
                        modelValue: unref(verification).pinCode,
                        "onUpdate:modelValue": [($event) => unref(verification).pinCode = $event, updatePIN],
                        name: "pinCode",
                        type: "text",
                        inputmode: "numeric",
                        dir: "ltr",
                        autocomplete: "off",
                        pattern: "[0-9]*",
                        maxlength: "10",
                        placeholder: "Enter your PIN",
                        icon: "i-lucide-key-round",
                        size: "xl",
                        class: "w-full",
                        ui: { base: "reset-input" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (unref(message)) {
                _push2(`<p class="reset-message" role="alert" data-v-1c4af583${_scopeId}>${ssrInterpolate(unref(message))}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_PvButton, {
                type: "submit",
                size: "xl",
                block: "",
                loading: unref(pending),
                disabled: unref(pending),
                "trailing-icon": "i-lucide-arrow-right",
                class: "reset-submit"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Verify PIN`);
                  } else {
                    return [
                      createTextVNode("Verify PIN")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_PvFormField, {
                  label: "Username",
                  name: "userName",
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_PvInput, {
                      modelValue: unref(verification).userName,
                      "onUpdate:modelValue": [($event) => unref(verification).userName = $event, ($event) => message.value = ""],
                      name: "userName",
                      autocomplete: "username",
                      autocapitalize: "none",
                      spellcheck: false,
                      placeholder: "Enter your username",
                      icon: "i-lucide-user-round",
                      size: "xl",
                      class: "w-full",
                      ui: { base: "reset-input" }
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
                      modelValue: unref(verification).pinCode,
                      "onUpdate:modelValue": [($event) => unref(verification).pinCode = $event, updatePIN],
                      name: "pinCode",
                      type: "text",
                      inputmode: "numeric",
                      dir: "ltr",
                      autocomplete: "off",
                      pattern: "[0-9]*",
                      maxlength: "10",
                      placeholder: "Enter your PIN",
                      icon: "i-lucide-key-round",
                      size: "xl",
                      class: "w-full",
                      ui: { base: "reset-input" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                unref(message) ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "reset-message",
                  role: "alert"
                }, toDisplayString(unref(message)), 1)) : createCommentVNode("", true),
                createVNode(_component_PvButton, {
                  type: "submit",
                  size: "xl",
                  block: "",
                  loading: unref(pending),
                  disabled: unref(pending),
                  "trailing-icon": "i-lucide-arrow-right",
                  class: "reset-submit"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Verify PIN")
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (unref(step) === "replace") {
        _push(ssrRenderComponent(_component_PvForm, {
          state: unref(replacement),
          validate: validateReplacement,
          disabled: unref(pending),
          novalidate: "",
          class: "reset-form",
          onSubmit: resetPassword2,
          onError: focusError
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_PvFormField, {
                label: "New password",
                name: "newPassword",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_PvInput, {
                      modelValue: unref(replacement).newPassword,
                      "onUpdate:modelValue": [($event) => unref(replacement).newPassword = $event, ($event) => message.value = ""],
                      name: "newPassword",
                      type: unref(showPassword) ? "text" : "password",
                      autocomplete: "new-password",
                      placeholder: "Enter new password",
                      icon: "i-lucide-lock-keyhole",
                      size: "xl",
                      class: "w-full",
                      ui: { base: "reset-input" }
                    }, {
                      trailing: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_PvButton, {
                            type: "button",
                            color: "neutral",
                            variant: "ghost",
                            size: "sm",
                            icon: unref(showPassword) ? "i-lucide-eye-off" : "i-lucide-eye",
                            "aria-label": unref(showPassword) ? "Hide password" : "Show password",
                            "aria-pressed": unref(showPassword),
                            onClick: ($event) => showPassword.value = !unref(showPassword)
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_PvButton, {
                              type: "button",
                              color: "neutral",
                              variant: "ghost",
                              size: "sm",
                              icon: unref(showPassword) ? "i-lucide-eye-off" : "i-lucide-eye",
                              "aria-label": unref(showPassword) ? "Hide password" : "Show password",
                              "aria-pressed": unref(showPassword),
                              onClick: ($event) => showPassword.value = !unref(showPassword)
                            }, null, 8, ["icon", "aria-label", "aria-pressed", "onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_PvInput, {
                        modelValue: unref(replacement).newPassword,
                        "onUpdate:modelValue": [($event) => unref(replacement).newPassword = $event, ($event) => message.value = ""],
                        name: "newPassword",
                        type: unref(showPassword) ? "text" : "password",
                        autocomplete: "new-password",
                        placeholder: "Enter new password",
                        icon: "i-lucide-lock-keyhole",
                        size: "xl",
                        class: "w-full",
                        ui: { base: "reset-input" }
                      }, {
                        trailing: withCtx(() => [
                          createVNode(_component_PvButton, {
                            type: "button",
                            color: "neutral",
                            variant: "ghost",
                            size: "sm",
                            icon: unref(showPassword) ? "i-lucide-eye-off" : "i-lucide-eye",
                            "aria-label": unref(showPassword) ? "Hide password" : "Show password",
                            "aria-pressed": unref(showPassword),
                            onClick: ($event) => showPassword.value = !unref(showPassword)
                          }, null, 8, ["icon", "aria-label", "aria-pressed", "onClick"])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "type"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_PvFormField, {
                label: "Confirm new password",
                name: "confirmPassword",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_PvInput, {
                      modelValue: unref(replacement).confirmPassword,
                      "onUpdate:modelValue": [($event) => unref(replacement).confirmPassword = $event, ($event) => message.value = ""],
                      name: "confirmPassword",
                      type: unref(showPassword) ? "text" : "password",
                      autocomplete: "new-password",
                      placeholder: "Confirm new password",
                      icon: "i-lucide-lock-keyhole",
                      size: "xl",
                      class: "w-full",
                      ui: { base: "reset-input" }
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_PvInput, {
                        modelValue: unref(replacement).confirmPassword,
                        "onUpdate:modelValue": [($event) => unref(replacement).confirmPassword = $event, ($event) => message.value = ""],
                        name: "confirmPassword",
                        type: unref(showPassword) ? "text" : "password",
                        autocomplete: "new-password",
                        placeholder: "Confirm new password",
                        icon: "i-lucide-lock-keyhole",
                        size: "xl",
                        class: "w-full",
                        ui: { base: "reset-input" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "type"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (unref(message)) {
                _push2(`<p class="reset-message" role="alert" data-v-1c4af583${_scopeId}>${ssrInterpolate(unref(message))}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_PvButton, {
                type: "submit",
                size: "xl",
                block: "",
                loading: unref(pending),
                disabled: unref(pending),
                "trailing-icon": "i-lucide-arrow-right",
                class: "reset-submit"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Change password`);
                  } else {
                    return [
                      createTextVNode("Change password")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_PvButton, {
                type: "button",
                color: "neutral",
                variant: "ghost",
                size: "lg",
                block: "",
                disabled: unref(pending),
                onClick: ($event) => step.value = "verify"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Back to PIN verification`);
                  } else {
                    return [
                      createTextVNode("Back to PIN verification")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_PvFormField, {
                  label: "New password",
                  name: "newPassword",
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_PvInput, {
                      modelValue: unref(replacement).newPassword,
                      "onUpdate:modelValue": [($event) => unref(replacement).newPassword = $event, ($event) => message.value = ""],
                      name: "newPassword",
                      type: unref(showPassword) ? "text" : "password",
                      autocomplete: "new-password",
                      placeholder: "Enter new password",
                      icon: "i-lucide-lock-keyhole",
                      size: "xl",
                      class: "w-full",
                      ui: { base: "reset-input" }
                    }, {
                      trailing: withCtx(() => [
                        createVNode(_component_PvButton, {
                          type: "button",
                          color: "neutral",
                          variant: "ghost",
                          size: "sm",
                          icon: unref(showPassword) ? "i-lucide-eye-off" : "i-lucide-eye",
                          "aria-label": unref(showPassword) ? "Hide password" : "Show password",
                          "aria-pressed": unref(showPassword),
                          onClick: ($event) => showPassword.value = !unref(showPassword)
                        }, null, 8, ["icon", "aria-label", "aria-pressed", "onClick"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "type"])
                  ]),
                  _: 1
                }),
                createVNode(_component_PvFormField, {
                  label: "Confirm new password",
                  name: "confirmPassword",
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_PvInput, {
                      modelValue: unref(replacement).confirmPassword,
                      "onUpdate:modelValue": [($event) => unref(replacement).confirmPassword = $event, ($event) => message.value = ""],
                      name: "confirmPassword",
                      type: unref(showPassword) ? "text" : "password",
                      autocomplete: "new-password",
                      placeholder: "Confirm new password",
                      icon: "i-lucide-lock-keyhole",
                      size: "xl",
                      class: "w-full",
                      ui: { base: "reset-input" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "type"])
                  ]),
                  _: 1
                }),
                unref(message) ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "reset-message",
                  role: "alert"
                }, toDisplayString(unref(message)), 1)) : createCommentVNode("", true),
                createVNode(_component_PvButton, {
                  type: "submit",
                  size: "xl",
                  block: "",
                  loading: unref(pending),
                  disabled: unref(pending),
                  "trailing-icon": "i-lucide-arrow-right",
                  class: "reset-submit"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Change password")
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                createVNode(_component_PvButton, {
                  type: "button",
                  color: "neutral",
                  variant: "ghost",
                  size: "lg",
                  block: "",
                  disabled: unref(pending),
                  onClick: ($event) => step.value = "verify"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Back to PIN verification")
                  ]),
                  _: 1
                }, 8, ["disabled", "onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div class="reset-done" role="status" data-v-1c4af583>`);
        _push(ssrRenderComponent(_component_PvIcon, {
          name: "i-lucide-circle-check",
          "aria-hidden": "true"
        }, null, _parent));
        _push(`<p data-v-1c4af583>New password saved. Previous sessions have ended.</p></div>`);
      }
      _push(`<p class="reset-switch" data-v-1c4af583>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/login" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Return to sign in`);
          } else {
            return [
              createTextVNode("Return to sign in")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reset-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const resetPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1c4af583"]]);

export { resetPassword as default };;globalThis.__timing__.logEnd('Load chunks/build/reset-password-CQQbeL_5');
//# sourceMappingURL=reset-password-CQQbeL_5.mjs.map
