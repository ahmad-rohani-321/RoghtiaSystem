globalThis.__timing__.logStart('Load chunks/build/AccountForm-DTmd0G7y');import { a as __nuxt_component_1, _ as __nuxt_component_5 } from './PvButton-5I-3PpYG.mjs';
import { _ as __nuxt_component_1$1 } from './PvForm-Cood2pqT.mjs';
import { _ as __nuxt_component_2 } from './PvFormField-Cv2Q-Mwy.mjs';
import { _ as __nuxt_component_3 } from './PvInput-q91fCord.mjs';
import { _ as __nuxt_component_8 } from './PvCheckbox-BYapV9Gx.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-Ca5hbmYf.mjs';
import { computed, reactive, ref, watch, mergeProps, unref, withCtx, createVNode, isRef, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as useAuth, q as useRoute, n as navigateTo } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-8jYXDYbZ.mjs';

const _sfc_main = {
  __name: "AccountForm",
  __ssrInlineRender: true,
  props: { mode: { type: String, default: "login" } },
  setup(__props) {
    const props = __props;
    const isRegister = computed(() => props.mode === "register");
    const credentials = reactive({ username: "", password: "", pinCode: "" });
    const showPassword = ref(false);
    const serviceMessage = ref("");
    const rememberMe = ref(false);
    const auth = useAuth();
    const route = useRoute();
    const { pending } = auth;
    function validate(state) {
      const errors = [];
      if (!state.username?.trim()) errors.push({ name: "username", message: "Enter your username." });
      if (!state.password) errors.push({ name: "password", message: "Enter your password." });
      else if (isRegister.value && state.password.length < 8) errors.push({ name: "password", message: "Password must contain at least 8 characters." });
      if (state.username?.trim().length > 64) errors.push({ name: "username", message: "Username must not exceed 64 characters." });
      if (state.password?.length > 128) errors.push({ name: "password", message: "Password must not exceed 128 characters." });
      if (isRegister.value && !/^[0-9]{6,10}$/.test(state.pinCode)) errors.push({ name: "pinCode", message: "PIN must contain 6 to 10 digits." });
      return errors;
    }
    async function submit() {
      serviceMessage.value = "";
      try {
        await auth.authenticate(isRegister.value ? "register" : "login", {
          userName: credentials.username.trim(),
          password: credentials.password,
          ...isRegister.value ? { pinCode: credentials.pinCode } : {},
          ...!isRegister.value ? { rememberMe: rememberMe.value } : {}
        });
        credentials.password = "";
        credentials.pinCode = "";
        const redirect = route.query.redirect;
        const destination = typeof redirect === "string" && /^\/(?!\/)/.test(redirect) && !redirect.includes("\\") && !/^\/(login|register)(?:[/?#]|$)/.test(redirect) ? redirect : "/";
        await navigateTo(destination);
      } catch (error) {
        const code = error?.data?.data?.code || error?.data?.code;
        const messages = {
          INVALID_CREDENTIALS: "Incorrect username or password.",
          USERNAME_TAKEN: "This username is already taken. Choose another.",
          VALIDATION_ERROR: "Check your username, password and PIN and try again.",
          TOO_MANY_REQUESTS: "Too many attempts. Please try again later.",
          INVALID_ORIGIN: "Request rejected. Refresh the page and try again."
        };
        serviceMessage.value = messages[code] || "Unable to connect to the server. Please try again.";
      }
    }
    function focusError(event) {
      if (event.errors?.[0]?.id) (void 0).getElementById(event.errors[0].id)?.focus();
    }
    watch(credentials, () => {
      serviceMessage.value = "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PvIcon = __nuxt_component_1;
      const _component_PvForm = __nuxt_component_1$1;
      const _component_PvFormField = __nuxt_component_2;
      const _component_PvInput = __nuxt_component_3;
      const _component_PvButton = __nuxt_component_5;
      const _component_PvCheckbox = __nuxt_component_8;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<main${ssrRenderAttrs(mergeProps({
        class: "login-page",
        "aria-labelledby": "login-title"
      }, _attrs))} data-v-256c21b0><section class="login-card" data-v-256c21b0><div class="login-intro" data-v-256c21b0><span class="brand-icon login-logo" aria-hidden="true" data-v-256c21b0>`);
      _push(ssrRenderComponent(_component_PvIcon, { name: "i-lucide-heart-pulse" }, null, _parent));
      _push(`</span><span class="login-brand" data-v-256c21b0>RoghtiaSystem<span data-v-256c21b0>.</span></span><h1 id="login-title" data-v-256c21b0>${ssrInterpolate(unref(isRegister) ? "Create an account" : "Sign in to your account")}</h1><p data-v-256c21b0>${ssrInterpolate(unref(isRegister) ? "Choose a username, password and recovery PIN for your new account." : "Enter your username and password to sign in.")}</p></div>`);
      _push(ssrRenderComponent(_component_PvForm, {
        state: unref(credentials),
        validate,
        disabled: unref(pending),
        novalidate: "",
        class: "login-form",
        onSubmit: submit,
        onError: focusError
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PvFormField, {
              label: "Username",
              name: "username",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PvInput, {
                    modelValue: unref(credentials).username,
                    "onUpdate:modelValue": ($event) => unref(credentials).username = $event,
                    name: "username",
                    autocomplete: "username",
                    autocapitalize: "none",
                    spellcheck: false,
                    placeholder: "Enter your username",
                    icon: "i-lucide-user-round",
                    size: "xl",
                    class: "w-full",
                    ui: { base: "login-input" }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PvInput, {
                      modelValue: unref(credentials).username,
                      "onUpdate:modelValue": ($event) => unref(credentials).username = $event,
                      name: "username",
                      autocomplete: "username",
                      autocapitalize: "none",
                      spellcheck: false,
                      placeholder: "Enter your username",
                      icon: "i-lucide-user-round",
                      size: "xl",
                      class: "w-full",
                      ui: { base: "login-input" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PvFormField, {
              label: "Password",
              name: "password",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PvInput, {
                    modelValue: unref(credentials).password,
                    "onUpdate:modelValue": ($event) => unref(credentials).password = $event,
                    name: "password",
                    type: unref(showPassword) ? "text" : "password",
                    autocomplete: unref(isRegister) ? "new-password" : "current-password",
                    placeholder: "Enter your password",
                    icon: "i-lucide-lock-keyhole",
                    size: "xl",
                    class: "w-full",
                    ui: { base: "login-input" }
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
                      modelValue: unref(credentials).password,
                      "onUpdate:modelValue": ($event) => unref(credentials).password = $event,
                      name: "password",
                      type: unref(showPassword) ? "text" : "password",
                      autocomplete: unref(isRegister) ? "new-password" : "current-password",
                      placeholder: "Enter your password",
                      icon: "i-lucide-lock-keyhole",
                      size: "xl",
                      class: "w-full",
                      ui: { base: "login-input" }
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
                    }, 8, ["modelValue", "onUpdate:modelValue", "type", "autocomplete"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(isRegister)) {
              _push2(ssrRenderComponent(_component_PvFormField, {
                label: "Password recovery PIN",
                name: "pinCode",
                required: "",
                help: "6 to 10 digits. Keep this PIN in a safe place."
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_PvInput, {
                      modelValue: unref(credentials).pinCode,
                      "onUpdate:modelValue": [($event) => unref(credentials).pinCode = $event, (value) => unref(credentials).pinCode = String(value || "").replace(/[^0-9]/g, "").slice(0, 10)],
                      name: "pinCode",
                      type: "text",
                      inputmode: "numeric",
                      dir: "ltr",
                      autocomplete: "off",
                      pattern: "[0-9]*",
                      maxlength: "10",
                      placeholder: "6–10 digits",
                      icon: "i-lucide-key-round",
                      size: "xl",
                      class: "w-full",
                      ui: { base: "login-input" }
                    }, null, _parent3, _scopeId2));
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
                        placeholder: "6–10 digits",
                        icon: "i-lucide-key-round",
                        size: "xl",
                        class: "w-full",
                        ui: { base: "login-input" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (!unref(isRegister)) {
              _push2(ssrRenderComponent(_component_PvCheckbox, {
                modelValue: unref(rememberMe),
                "onUpdate:modelValue": ($event) => isRef(rememberMe) ? rememberMe.value = $event : null,
                label: "Remember me",
                name: "rememberMe"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (!unref(isRegister)) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "/reset-password",
                class: "forgot-link"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Forgot password?`);
                  } else {
                    return [
                      createTextVNode("Forgot password?")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(serviceMessage)) {
              _push2(`<p class="login-message" role="alert" data-v-256c21b0${_scopeId}>${ssrInterpolate(unref(serviceMessage))}</p>`);
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
              class: "login-submit"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(isRegister) ? "Create account" : "Sign in")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(isRegister) ? "Create account" : "Sign in"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PvFormField, {
                label: "Username",
                name: "username",
                required: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_PvInput, {
                    modelValue: unref(credentials).username,
                    "onUpdate:modelValue": ($event) => unref(credentials).username = $event,
                    name: "username",
                    autocomplete: "username",
                    autocapitalize: "none",
                    spellcheck: false,
                    placeholder: "Enter your username",
                    icon: "i-lucide-user-round",
                    size: "xl",
                    class: "w-full",
                    ui: { base: "login-input" }
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_PvFormField, {
                label: "Password",
                name: "password",
                required: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_PvInput, {
                    modelValue: unref(credentials).password,
                    "onUpdate:modelValue": ($event) => unref(credentials).password = $event,
                    name: "password",
                    type: unref(showPassword) ? "text" : "password",
                    autocomplete: unref(isRegister) ? "new-password" : "current-password",
                    placeholder: "Enter your password",
                    icon: "i-lucide-lock-keyhole",
                    size: "xl",
                    class: "w-full",
                    ui: { base: "login-input" }
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
                  }, 8, ["modelValue", "onUpdate:modelValue", "type", "autocomplete"])
                ]),
                _: 1
              }),
              unref(isRegister) ? (openBlock(), createBlock(_component_PvFormField, {
                key: 0,
                label: "Password recovery PIN",
                name: "pinCode",
                required: "",
                help: "6 to 10 digits. Keep this PIN in a safe place."
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
                    placeholder: "6–10 digits",
                    icon: "i-lucide-key-round",
                    size: "xl",
                    class: "w-full",
                    ui: { base: "login-input" }
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              !unref(isRegister) ? (openBlock(), createBlock(_component_PvCheckbox, {
                key: 1,
                modelValue: unref(rememberMe),
                "onUpdate:modelValue": ($event) => isRef(rememberMe) ? rememberMe.value = $event : null,
                label: "Remember me",
                name: "rememberMe"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
              !unref(isRegister) ? (openBlock(), createBlock(_component_NuxtLink, {
                key: 2,
                to: "/reset-password",
                class: "forgot-link"
              }, {
                default: withCtx(() => [
                  createTextVNode("Forgot password?")
                ]),
                _: 1
              })) : createCommentVNode("", true),
              unref(serviceMessage) ? (openBlock(), createBlock("p", {
                key: 3,
                class: "login-message",
                role: "alert"
              }, toDisplayString(unref(serviceMessage)), 1)) : createCommentVNode("", true),
              createVNode(_component_PvButton, {
                type: "submit",
                size: "xl",
                block: "",
                loading: unref(pending),
                disabled: unref(pending),
                "trailing-icon": "i-lucide-arrow-right",
                class: "login-submit"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(isRegister) ? "Create account" : "Sign in"), 1)
                ]),
                _: 1
              }, 8, ["loading", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="login-switch" data-v-256c21b0><span data-v-256c21b0>${ssrInterpolate(unref(isRegister) ? "Already have an account?" : "Need an account?")}</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(isRegister) ? "/login" : "/register"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(isRegister) ? "Sign in to your account" : "Create an account")}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(isRegister) ? "Sign in to your account" : "Create an account"), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AccountForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-256c21b0"]]), { __name: "AccountForm" });

export { __nuxt_component_0 as _ };;globalThis.__timing__.logEnd('Load chunks/build/AccountForm-DTmd0G7y');
//# sourceMappingURL=AccountForm-DTmd0G7y.mjs.map
