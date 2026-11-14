globalThis.__timing__.logStart('Load chunks/routes/api/auth/logout.post');import { c as defineEventHandler } from '../../../_/nitro.mjs';
import { a as assertAuthMutation, c as clearAuthCookie } from '../../../_/auth.mjs';
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

const logout_post = defineEventHandler((event) => {
  assertAuthMutation(event);
  clearAuthCookie(event);
  return { success: true };
});

export { logout_post as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/auth/logout.post');
//# sourceMappingURL=logout.post.mjs.map
