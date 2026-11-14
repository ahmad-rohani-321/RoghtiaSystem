globalThis.__timing__.logStart('Load chunks/routes/api/index.delete');import { c as defineEventHandler, f as sendNoContent } from '../../_/nitro.mjs';
import { a as assertAuthMutation } from '../../_/auth.mjs';
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

const index_delete = defineEventHandler(async (event) => {
  assertAuthMutation(event);
  await requestOwnedApi(event, "/api/doctor-information", { method: "DELETE" });
  return sendNoContent(event);
});

export { index_delete as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/index.delete');
//# sourceMappingURL=index.delete.mjs.map
