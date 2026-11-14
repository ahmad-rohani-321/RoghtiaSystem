globalThis.__timing__.logStart('Load chunks/routes/api/auth/me.get');import { c as defineEventHandler } from '../../../_/nitro.mjs';
import { r as requireAuthToken, d as requestAuthApi, g as getVerifiedTokenExpiry } from '../../../_/auth.mjs';
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

const me_get = defineEventHandler(async (event) => {
  const token = requireAuthToken(event);
  const user = await requestAuthApi(event, "me", { token });
  return { user, expiresAt: getVerifiedTokenExpiry(token) };
});

export { me_get as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/auth/me.get');
//# sourceMappingURL=me.get.mjs.map
