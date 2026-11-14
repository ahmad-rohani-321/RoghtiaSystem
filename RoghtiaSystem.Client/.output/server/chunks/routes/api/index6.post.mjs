globalThis.__timing__.logStart('Load chunks/routes/api/index6.post');import { c as defineEventHandler, k as setResponseStatus } from '../../_/nitro.mjs';
import { a as readPatientInput } from '../../_/patients.mjs';
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

const index_post = defineEventHandler(async (event) => {
  const input = await readPatientInput(event);
  const response = await requestOwnedApi(event, "/api/patients", { method: "POST", body: { ...input } });
  setResponseStatus(event, 201);
  return response._data;
});

export { index_post as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/index6.post');
//# sourceMappingURL=index6.post.mjs.map
