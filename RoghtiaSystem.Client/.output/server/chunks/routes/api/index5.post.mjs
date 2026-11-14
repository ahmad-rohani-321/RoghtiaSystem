globalThis.__timing__.logStart('Load chunks/routes/api/index5.post');import { c as defineEventHandler, k as setResponseStatus } from '../../_/nitro.mjs';
import { a as readMedicationInput } from '../../_/medications.mjs';
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
  const input = await readMedicationInput(event);
  const response = await requestOwnedApi(event, "/api/medications", { method: "POST", body: { ...input } });
  setResponseStatus(event, 201);
  return response._data;
});

export { index_post as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/index5.post');
//# sourceMappingURL=index5.post.mjs.map
