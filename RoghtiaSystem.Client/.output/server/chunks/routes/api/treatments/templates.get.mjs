globalThis.__timing__.logStart('Load chunks/routes/api/treatments/templates.get');import { c as defineEventHandler } from '../../../_/nitro.mjs';
import { r as requireAuthToken } from '../../../_/auth.mjs';
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

const templates_get = defineEventHandler(async (event) => {
  requireAuthToken(event);
  return (await requestOwnedApi(event, "/api/treatments/templates"))._data;
});

export { templates_get as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/treatments/templates.get');
//# sourceMappingURL=templates.get.mjs.map
