globalThis.__timing__.logStart('Load chunks/routes/api/auth/change-password.post');import { c as defineEventHandler, e as createError, f as sendNoContent } from '../../../_/nitro.mjs';
import { a as assertAuthMutation, r as requireAuthToken, c as clearAuthCookie } from '../../../_/auth.mjs';
import { a as readLimitedBody, r as requestOwnedApi } from '../../../_/owned-api.mjs';
import 'unhead/server';
import 'vue';
import 'unhead/legacy';
import 'unhead/plugins';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';

const changePassword_post = defineEventHandler(async (event) => {
  assertAuthMutation(event);
  requireAuthToken(event);
  let body;
  try {
    body = JSON.parse((await readLimitedBody(event, 16384)).toString("utf8"));
  } catch {
    throw createError({ statusCode: 400, data: { code: "VALIDATION_ERROR" } });
  }
  if (!body || typeof body.currentPassword !== "string" || typeof body.newPassword !== "string" || !body.currentPassword || body.currentPassword.length > 128 || body.newPassword.length < 8 || body.newPassword.length > 128 || body.currentPassword === body.newPassword) {
    throw createError({ statusCode: 400, data: { code: "VALIDATION_ERROR" } });
  }
  await requestOwnedApi(event, "/api/auth/change-password", { method: "POST", body: { currentPassword: body.currentPassword, newPassword: body.newPassword } });
  clearAuthCookie(event);
  return sendNoContent(event);
});

export { changePassword_post as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/auth/change-password.post');
//# sourceMappingURL=change-password.post.mjs.map
