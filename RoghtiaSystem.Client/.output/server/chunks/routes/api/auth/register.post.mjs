globalThis.__timing__.logStart('Load chunks/routes/api/auth/register.post');import { c as defineEventHandler, r as readBody } from '../../../_/nitro.mjs';
import { a as assertAuthMutation, b as readAuthCredentials, d as requestAuthApi, e as establishAuthSession } from '../../../_/auth.mjs';
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

const register_post = defineEventHandler(async (event) => {
  assertAuthMutation(event);
  const credentials = readAuthCredentials(await readBody(event), true);
  const response = await requestAuthApi(event, "register", { body: credentials });
  return establishAuthSession(event, response, false);
});

export { register_post as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/auth/register.post');
//# sourceMappingURL=register.post.mjs.map
