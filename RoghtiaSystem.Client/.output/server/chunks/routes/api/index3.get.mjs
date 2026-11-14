globalThis.__timing__.logStart('Load chunks/routes/api/index3.get');import { c as defineEventHandler, g as getQuery, e as createError } from '../../_/nitro.mjs';
import { r as requireAuthToken } from '../../_/auth.mjs';
import { r as requestOwnedApi } from '../../_/owned-api.mjs';
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

const index_get = defineEventHandler(async (event) => {
  requireAuthToken(event);
  const kind = getQuery(event).kind;
  if (kind !== "Diagnostic" && kind !== "Investigation") throw createError({ statusCode: 400, data: { code: "VALIDATION_ERROR" } });
  return (await requestOwnedApi(event, "/api/diagnostics-investigations", { query: { kind } }))._data;
});

export { index_get as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/index3.get');
//# sourceMappingURL=index3.get.mjs.map
