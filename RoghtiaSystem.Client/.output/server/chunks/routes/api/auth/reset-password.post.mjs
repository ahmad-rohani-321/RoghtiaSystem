globalThis.__timing__.logStart('Load chunks/routes/api/auth/reset-password.post');import { c as defineEventHandler, e as createError, f as sendNoContent } from '../../../_/nitro.mjs';
import { a as assertAuthMutation, d as requestAuthApi, c as clearAuthCookie } from '../../../_/auth.mjs';
import { a as readLimitedBody } from '../../../_/owned-api.mjs';
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

const resetPassword_post = defineEventHandler(async (event) => {
  assertAuthMutation(event);
  let body;
  try {
    body = JSON.parse((await readLimitedBody(event, 16384)).toString("utf8"));
  } catch {
    throw createError({ statusCode: 400, data: { code: "VALIDATION_ERROR" } });
  }
  if (!body || typeof body.userName !== "string" || !body.userName.trim() || body.userName.trim().length > 64 || typeof body.pinCode !== "string" || !/^[0-9]{6,10}$/.test(body.pinCode) || typeof body.newPassword !== "string" || body.newPassword.length < 8 || body.newPassword.length > 128 || body.newPassword === body.pinCode) {
    throw createError({ statusCode: 400, data: { code: "VALIDATION_ERROR" } });
  }
  await requestAuthApi(event, "reset-password", { body: { userName: body.userName.trim(), pinCode: body.pinCode, newPassword: body.newPassword } });
  clearAuthCookie(event);
  return sendNoContent(event);
});

export { resetPassword_post as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/auth/reset-password.post');
//# sourceMappingURL=reset-password.post.mjs.map
