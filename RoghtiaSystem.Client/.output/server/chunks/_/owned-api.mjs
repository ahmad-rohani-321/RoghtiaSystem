globalThis.__timing__.logStart('Load chunks/_/owned-api');import { r as requireAuthToken, c as clearAuthCookie, a as assertAuthMutation } from './auth.mjs';
import { u as useRuntimeConfig, e as createError, l as getHeader, q as getRequestWebStream } from './nitro.mjs';

async function readLimitedBody(event, limit, errorCode = "IMAGE_TOO_LARGE") {
  var _a;
  if (Number(getHeader(event, "content-length")) > limit) {
    throw createError({ statusCode: 413, data: { code: errorCode } });
  }
  const reader = (_a = getRequestWebStream(event)) == null ? void 0 : _a.getReader();
  if (!reader) return Buffer.alloc(0);
  const chunks = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > limit) {
        await reader.cancel();
        throw createError({ statusCode: 413, data: { code: errorCode } });
      }
      chunks.push(value);
    }
    return Buffer.concat(chunks);
  } finally {
    reader.releaseLock();
  }
}
async function requestOwnedApi(event, path, options = {}) {
  var _a;
  const token = requireAuthToken(event);
  try {
    return await $fetch.raw(path, {
      baseURL: useRuntimeConfig(event).authApiBase,
      method: options.method || "GET",
      body: options.body,
      query: options.query,
      headers: { Authorization: `Bearer ${token}`, ...options.contentType ? { "Content-Type": options.contentType } : {} },
      ...options.binary ? { responseType: "arrayBuffer" } : {},
      redirect: "error",
      timeout: 15e3,
      retry: 0
    });
  } catch (error) {
    const failure = error;
    const status = [400, 401, 403, 404, 409, 413, 415, 429].includes(failure.statusCode || 0) ? failure.statusCode : 503;
    if (status === 401) clearAuthCookie(event);
    const allowedCodes = ["VALIDATION_ERROR", "UNAUTHENTICATED", "FORBIDDEN", "NOT_FOUND", "DUPLICATE_MEDICATION", "DOCTOR_INFORMATION_EXISTS", "TEMPLATE_NAME_EXISTS", "INSUFFICIENT_STOCK", "INVALID_IMAGE", "IMAGE_TOO_LARGE", "PASSWORD_INCORRECT", "TOO_MANY_REQUESTS"];
    const fallback = { 400: "VALIDATION_ERROR", 401: "UNAUTHENTICATED", 403: "FORBIDDEN", 404: "NOT_FOUND", 409: "DOCTOR_INFORMATION_EXISTS", 413: "IMAGE_TOO_LARGE", 415: "INVALID_IMAGE", 429: "TOO_MANY_REQUESTS", 503: "SERVICE_UNAVAILABLE" };
    throw createError({ statusCode: status, data: { code: allowedCodes.includes(((_a = failure.data) == null ? void 0 : _a.code) || "") ? failure.data.code : fallback[status] } });
  }
}
async function saveDoctorInformation(event, method) {
  assertAuthMutation(event);
  requireAuthToken(event);
  const contentType = getHeader(event, "content-type") || "";
  if (!contentType.toLowerCase().startsWith("multipart/form-data;")) {
    throw createError({ statusCode: 415, data: { code: "VALIDATION_ERROR" } });
  }
  const body = await readLimitedBody(event, 7 * 1024 * 1024);
  return (await requestOwnedApi(event, "/api/doctor-information", { method, body, contentType }))._data;
}

export { readLimitedBody as a, requestOwnedApi as r, saveDoctorInformation as s };;globalThis.__timing__.logEnd('Load chunks/_/owned-api');
//# sourceMappingURL=owned-api.mjs.map
