globalThis.__timing__.logStart('Load chunks/routes/api/doctor-information/reset.post');import { c as defineEventHandler } from '../../../_/nitro.mjs';
import { a as assertAuthMutation } from '../../../_/auth.mjs';
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

const reset_post = defineEventHandler(async (event) => {
  assertAuthMutation(event);
  return (await requestOwnedApi(event, "/api/doctor-information/reset", { method: "POST" }))._data;
});

export { reset_post as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/doctor-information/reset.post');
//# sourceMappingURL=reset.post.mjs.map
