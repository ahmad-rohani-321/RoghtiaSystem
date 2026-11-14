globalThis.__timing__.logStart('Load chunks/routes/api/auth/set-pin.post');import { c as defineEventHandler, e as createError, f as sendNoContent } from '../../../_/nitro.mjs';
import { a as assertAuthMutation, r as requireAuthToken } from '../../../_/auth.mjs';
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

const setPin_post = defineEventHandler(async (event) => {
  assertAuthMutation(event);
  requireAuthToken(event);
  let body;
  try {
    body = JSON.parse((await readLimitedBody(event, 16384)).toString("utf8"));
  } catch {
    throw createError({ statusCode: 400, data: { code: "VALIDATION_ERROR" } });
  }
  if (!body || typeof body.currentPassword !== "string" || !body.currentPassword || body.currentPassword.length > 128 || typeof body.pinCode !== "string" || !/^[0-9]{6,10}$/.test(body.pinCode)) {
    throw createError({ statusCode: 400, data: { code: "VALIDATION_ERROR" } });
  }
  await requestOwnedApi(event, "/api/auth/set-pin", { method: "POST", body: { currentPassword: body.currentPassword, pinCode: body.pinCode } });
  return sendNoContent(event);
});

export { setPin_post as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/auth/set-pin.post');
//# sourceMappingURL=set-pin.post.mjs.map
