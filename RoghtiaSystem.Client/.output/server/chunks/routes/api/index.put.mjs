globalThis.__timing__.logStart('Load chunks/routes/api/index.put');import { c as defineEventHandler } from '../../_/nitro.mjs';
import { s as saveDoctorInformation } from '../../_/owned-api.mjs';
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

const index_put = defineEventHandler((event) => saveDoctorInformation(event, "PUT"));

export { index_put as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/index.put');
//# sourceMappingURL=index.put.mjs.map
