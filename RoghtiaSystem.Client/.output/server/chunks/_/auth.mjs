globalThis.__timing__.logStart('Load chunks/_/auth');import { m as getCookie, e as createError, l as getHeader, n as getRequestURL, o as deleteCookie, u as useRuntimeConfig, p as setCookie, i as setHeader } from './nitro.mjs';

const AUTH_COOKIE = "roghtiasystem_auth";
function preventAuthCaching(event) {
  setHeader(event, "Cache-Control", "no-store");
  setHeader(event, "Vary", "Cookie");
}
function assertAuthMutation(event) {
  preventAuthCaching(event);
  const origin = getHeader(event, "origin");
  if (getHeader(event, "x-roghtiasystem-request") !== "1" || origin && origin !== getRequestURL(event).origin) {
    throw createError({ statusCode: 403, data: { code: "INVALID_ORIGIN" } });
  }
}
function readAuthCredentials(value, register = false) {
  const body = value;
  if (!body || typeof body.userName !== "string" || typeof body.password !== "string" || !body.userName.trim() || body.userName.trim().length > 64 || body.password.length < (register ? 8 : 1) || body.password.length > 128 || register && (typeof body.pinCode !== "string" || !/^[0-9]{6,10}$/.test(body.pinCode)) || body.rememberMe !== void 0 && typeof body.rememberMe !== "boolean") {
    throw createError({ statusCode: 400, data: { code: "VALIDATION_ERROR" } });
  }
  return { userName: body.userName.trim(), password: body.password, ...register ? { pinCode: body.pinCode } : { rememberMe: body.rememberMe === true } };
}
async function requestAuthApi(event, path, options = {}) {
  var _a;
  preventAuthCaching(event);
  const config = useRuntimeConfig(event);
  try {
    return await $fetch(`/api/auth/${path}`, {
      baseURL: config.authApiBase,
      method: options.body ? "POST" : "GET",
      body: options.body,
      headers: options.token ? { Authorization: `Bearer ${options.token}` } : void 0,
      redirect: "error",
      timeout: 1e4,
      retry: 0
    });
  } catch (error) {
    const failure = error;
    const status = (_a = failure.statusCode) != null ? _a : 503;
    if (path === "me" && status === 401) clearAuthCookie(event);
    const publicStatus = [400, 401, 403, 409, 429].includes(status) ? status : 503;
    const codes = { 400: "VALIDATION_ERROR", 401: path === "me" ? "UNAUTHENTICATED" : path === "verify-pin" || path === "reset-password" ? "INVALID_PIN" : "INVALID_CREDENTIALS", 403: "FORBIDDEN", 409: path === "reset-password" ? "RESET_CONFLICT" : "USERNAME_TAKEN", 429: "TOO_MANY_REQUESTS", 503: "SERVICE_UNAVAILABLE" };
    throw createError({ statusCode: publicStatus, data: { code: codes[publicStatus] } });
  }
}
function authCookieOptions(event) {
  const secure = useRuntimeConfig(event).authCookieSecure;
  return { httpOnly: true, secure: secure !== false && String(secure) !== "false", sameSite: "strict", path: "/" };
}
function establishAuthSession(event, response, rememberMe) {
  var _a;
  const expiresAt = Date.parse(response == null ? void 0 : response.expiresAt);
  if (!(response == null ? void 0 : response.token) || !((_a = response.user) == null ? void 0 : _a.userName) || !Number.isFinite(expiresAt) || expiresAt <= Date.now()) {
    throw createError({ statusCode: 502, data: { code: "INVALID_AUTH_RESPONSE" } });
  }
  setCookie(event, AUTH_COOKIE, response.token, {
    ...authCookieOptions(event),
    ...rememberMe ? { maxAge: Math.max(1, Math.floor((expiresAt - Date.now()) / 1e3)), expires: new Date(expiresAt) } : {}
  });
  return { user: response.user, expiresAt: response.expiresAt };
}
function requireAuthToken(event) {
  preventAuthCaching(event);
  const token = getCookie(event, AUTH_COOKIE);
  if (!token) throw createError({ statusCode: 401, data: { code: "UNAUTHENTICATED" } });
  return token;
}
function clearAuthCookie(event) {
  deleteCookie(event, AUTH_COOKIE, authCookieOptions(event));
}
function getVerifiedTokenExpiry(token) {
  try {
    const claims = JSON.parse(Buffer.from(token.split(".")[1], "base64url").toString("utf8"));
    if (typeof claims.exp !== "number") throw new Error("Missing expiry");
    return new Date(claims.exp * 1e3).toISOString();
  } catch {
    throw createError({ statusCode: 401, data: { code: "UNAUTHENTICATED" } });
  }
}

export { assertAuthMutation as a, readAuthCredentials as b, clearAuthCookie as c, requestAuthApi as d, establishAuthSession as e, getVerifiedTokenExpiry as g, requireAuthToken as r };;globalThis.__timing__.logEnd('Load chunks/_/auth');
//# sourceMappingURL=auth.mjs.map
