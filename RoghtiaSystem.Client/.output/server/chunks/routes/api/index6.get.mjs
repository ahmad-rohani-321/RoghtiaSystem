globalThis.__timing__.logStart('Load chunks/routes/api/index6.get');import { c as defineEventHandler } from '../../_/nitro.mjs';
import { r as requireAuthToken } from '../../_/auth.mjs';
import { r as requestOwnedApi } from '../../_/owned-api.mjs';
import { b as readPatientQuery } from '../../_/patients.mjs';
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
  return (await requestOwnedApi(event, "/api/patients", { query: readPatientQuery(event) }))._data;
});

export { index_get as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/index6.get');
//# sourceMappingURL=index6.get.mjs.map
