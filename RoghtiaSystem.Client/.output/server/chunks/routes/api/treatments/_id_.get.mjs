globalThis.__timing__.logStart('Load chunks/routes/api/treatments/_id_.get');import { c as defineEventHandler } from '../../../_/nitro.mjs';
import { r as requireAuthToken } from '../../../_/auth.mjs';
import { r as requestOwnedApi } from '../../../_/owned-api.mjs';
import { a as readTreatmentId } from '../../../_/treatments.mjs';
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
import '../../../_/treatment.mjs';

const _id__get = defineEventHandler(async (event) => {
  requireAuthToken(event);
  return (await requestOwnedApi(event, `/api/treatments/${readTreatmentId(event)}`))._data;
});

export { _id__get as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/treatments/_id_.get');
//# sourceMappingURL=_id_.get.mjs.map
