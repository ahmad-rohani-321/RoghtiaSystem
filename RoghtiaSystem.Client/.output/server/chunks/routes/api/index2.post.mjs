globalThis.__timing__.logStart('Load chunks/routes/api/index2.post');import { c as defineEventHandler } from '../../_/nitro.mjs';
import { r as readClinicalNoteInput } from '../../_/treatments.mjs';
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
  const input = await readClinicalNoteInput(event);
  return (await requestOwnedApi(event, "/api/clinical-notes", { method: "POST", body: input }))._data;
});

export { index_post as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/index2.post');
//# sourceMappingURL=index2.post.mjs.map
