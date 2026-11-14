globalThis.__timing__.logStart('Load chunks/routes/api/medications/bulk.post');import { c as defineEventHandler } from '../../../_/nitro.mjs';
import { b as readBulkMedicationInput } from '../../../_/medications.mjs';
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
import '../../../_/auth.mjs';

const bulk_post = defineEventHandler(async (event) => {
  const items = await readBulkMedicationInput(event);
  const response = await requestOwnedApi(event, "/api/medications/bulk", { method: "POST", body: { items } });
  return response._data;
});

export { bulk_post as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/medications/bulk.post');
//# sourceMappingURL=bulk.post.mjs.map
