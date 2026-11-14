globalThis.__timing__.logStart('Load chunks/routes/api/index7.post');import { c as defineEventHandler, k as setResponseStatus } from '../../_/nitro.mjs';
import { b as readTreatmentInput } from '../../_/treatments.mjs';
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
import '../../_/treatment.mjs';

const index_post = defineEventHandler(async (event) => {
  const input = await readTreatmentInput(event);
  const response = await requestOwnedApi(event, "/api/treatments", { method: "POST", body: { ...input } });
  setResponseStatus(event, 201);
  return response._data;
});

export { index_post as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/index7.post');
//# sourceMappingURL=index7.post.mjs.map
