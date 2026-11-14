globalThis.__timing__.logStart('Load chunks/routes/api/medications/_id_.put');import { c as defineEventHandler } from '../../../_/nitro.mjs';
import { a as readMedicationInput, r as readMedicationId } from '../../../_/medications.mjs';
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

const _id__put = defineEventHandler(async (event) => {
  const input = await readMedicationInput(event);
  return (await requestOwnedApi(event, `/api/medications/${readMedicationId(event)}`, { method: "PUT", body: { ...input } }))._data;
});

export { _id__put as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/medications/_id_.put');
//# sourceMappingURL=_id_.put.mjs.map
