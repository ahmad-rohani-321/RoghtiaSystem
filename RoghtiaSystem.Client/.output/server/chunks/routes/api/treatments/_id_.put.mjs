globalThis.__timing__.logStart('Load chunks/routes/api/treatments/_id_.put');import { c as defineEventHandler } from '../../../_/nitro.mjs';
import { a as readTreatmentId, b as readTreatmentInput } from '../../../_/treatments.mjs';
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
import '../../../_/treatment.mjs';

const _id__put = defineEventHandler(async (event) => {
  const id = readTreatmentId(event);
  const input = await readTreatmentInput(event);
  return (await requestOwnedApi(event, `/api/treatments/${id}`, { method: "PUT", body: { ...input } }))._data;
});

export { _id__put as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/treatments/_id_.put');
//# sourceMappingURL=_id_.put.mjs.map
