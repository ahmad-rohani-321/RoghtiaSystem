globalThis.__timing__.logStart('Load chunks/routes/api/index3.post');import { c as defineEventHandler, r as readBody, e as createError } from '../../_/nitro.mjs';
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

const index_post = defineEventHandler(async (event) => {
  assertAuthMutation(event);
  const body = await readBody(event);
  if (typeof (body == null ? void 0 : body.text) !== "string" || !body.text.trim() || body.text.length > 300 || body.kind !== "Diagnostic" && body.kind !== "Investigation") {
    throw createError({ statusCode: 400, data: { code: "VALIDATION_ERROR" } });
  }
  return (await requestOwnedApi(event, "/api/diagnostics-investigations", {
    method: "POST",
    body: { text: body.text.trim(), kind: body.kind }
  }))._data;
});

export { index_post as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/index3.post');
//# sourceMappingURL=index3.post.mjs.map
