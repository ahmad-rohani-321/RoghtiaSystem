globalThis.__timing__.logStart('Load chunks/routes/api/doctor-information/media/_kind_.get');import { c as defineEventHandler, h as getRouterParam, e as createError, i as setHeader, j as send } from '../../../../_/nitro.mjs';
import { r as requestOwnedApi } from '../../../../_/owned-api.mjs';
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
import '../../../../_/auth.mjs';

const _kind__get = defineEventHandler(async (event) => {
  const kind = getRouterParam(event, "kind");
  if (!["doctor-photo", "doctor-logo", "hospital-logo"].includes(kind || "")) {
    throw createError({ statusCode: 404, data: { code: "NOT_FOUND" } });
  }
  const response = await requestOwnedApi(event, `/api/doctor-information/media/${kind}`, { binary: true });
  setHeader(event, "Content-Type", response.headers.get("content-type") || "application/octet-stream");
  setHeader(event, "X-Content-Type-Options", "nosniff");
  setHeader(event, "Content-Security-Policy", "default-src 'none'; sandbox");
  return send(event, Buffer.from(response._data));
});

export { _kind__get as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/doctor-information/media/_kind_.get');
//# sourceMappingURL=_kind_.get.mjs.map
