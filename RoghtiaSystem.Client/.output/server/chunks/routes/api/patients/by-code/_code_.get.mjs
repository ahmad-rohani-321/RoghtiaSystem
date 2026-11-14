globalThis.__timing__.logStart('Load chunks/routes/api/patients/by-code/_code_.get');import { c as defineEventHandler, h as getRouterParam, e as createError } from '../../../../_/nitro.mjs';
import { r as requireAuthToken } from '../../../../_/auth.mjs';
import { r as requestOwnedApi } from '../../../../_/owned-api.mjs';
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

const _code__get = defineEventHandler(async (event) => {
  requireAuthToken(event);
  const code = getRouterParam(event, "code") || "";
  if (!/^RT-[1-9][0-9]*$/.test(code) || code.length > 32) {
    throw createError({ statusCode: 404, data: { code: "NOT_FOUND" } });
  }
  return (await requestOwnedApi(event, `/api/patients/by-code/${encodeURIComponent(code)}`))._data;
});

export { _code__get as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/patients/by-code/_code_.get');
//# sourceMappingURL=_code_.get.mjs.map
