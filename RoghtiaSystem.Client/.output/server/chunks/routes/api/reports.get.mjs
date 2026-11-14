globalThis.__timing__.logStart('Load chunks/routes/api/reports.get');import { c as defineEventHandler, g as getQuery, e as createError } from '../../_/nitro.mjs';
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
import '../../_/auth.mjs';

const reports_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const fromUtc = query.fromUtc;
  const toUtc = query.toUtc;
  const isoUtc = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
  if (typeof fromUtc !== "string" || typeof toUtc !== "string" || !isoUtc.test(fromUtc) || !isoUtc.test(toUtc) || !Number.isFinite(Date.parse(fromUtc)) || !Number.isFinite(Date.parse(toUtc)) || Date.parse(fromUtc) >= Date.parse(toUtc) || Date.parse(toUtc) - Date.parse(fromUtc) > 367 * 864e5) {
    throw createError({ statusCode: 400, data: { code: "VALIDATION_ERROR" } });
  }
  const response = await requestOwnedApi(event, "/api/reports", { query: { fromUtc, toUtc } });
  return response._data;
});

export { reports_get as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/reports.get');
//# sourceMappingURL=reports.get.mjs.map
