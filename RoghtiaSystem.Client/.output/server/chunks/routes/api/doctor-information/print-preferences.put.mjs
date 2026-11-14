globalThis.__timing__.logStart('Load chunks/routes/api/doctor-information/print-preferences.put');import { c as defineEventHandler, r as readBody, e as createError } from '../../../_/nitro.mjs';
import { a as assertAuthMutation } from '../../../_/auth.mjs';
import { r as requestOwnedApi } from '../../../_/owned-api.mjs';
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

const printPreferences_put = defineEventHandler(async (event) => {
  assertAuthMutation(event);
  const body = await readBody(event);
  if (typeof (body == null ? void 0 : body.printOnA5) !== "boolean" || typeof (body == null ? void 0 : body.printGrayscale) !== "boolean") {
    throw createError({ statusCode: 400, data: { code: "VALIDATION_ERROR" } });
  }
  return (await requestOwnedApi(event, "/api/doctor-information/print-preferences", {
    method: "PUT",
    body: { printOnA5: body.printOnA5, printGrayscale: body.printGrayscale },
    contentType: "application/json"
  }))._data;
});

export { printPreferences_put as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/doctor-information/print-preferences.put');
//# sourceMappingURL=print-preferences.put.mjs.map
