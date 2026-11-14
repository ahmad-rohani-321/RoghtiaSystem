globalThis.__timing__.logStart('Load chunks/_/medications');import { a as assertAuthMutation, r as requireAuthToken } from './auth.mjs';
import { a as readLimitedBody } from './owned-api.mjs';
import { h as getRouterParam, e as createError, l as getHeader, g as getQuery } from './nitro.mjs';

function invalidMedication() {
  return createError({ statusCode: 400, data: { code: "VALIDATION_ERROR" } });
}
function readMedicationId(event) {
  const value = getRouterParam(event, "id") || "";
  const id = Number(value);
  if (!/^\d+$/.test(value) || !Number.isSafeInteger(id) || id < 1 || id > 2147483647) {
    throw createError({ statusCode: 404, data: { code: "NOT_FOUND" } });
  }
  return id;
}
function readMedicationQuery(event) {
  var _a;
  const query = getQuery(event);
  function integer(value, fallback, max) {
    if (value === void 0) return fallback;
    if (typeof value !== "string" || !/^\d+$/.test(value)) throw invalidMedication();
    const number = Number(value);
    if (!Number.isSafeInteger(number) || number < 1 || number > max) throw invalidMedication();
    return number;
  }
  const search = (_a = query.search) != null ? _a : "";
  if (typeof search !== "string" || search.length > 200) throw invalidMedication();
  return { page: integer(query.page, 1, 2147483647), pageSize: integer(query.pageSize, 20, 100), search: search.trim() };
}
async function readMedicationInput(event) {
  var _a, _b, _c;
  assertAuthMutation(event);
  requireAuthToken(event);
  if (((_b = (_a = getHeader(event, "content-type")) == null ? void 0 : _a.split(";")[0]) == null ? void 0 : _b.trim().toLowerCase()) !== "application/json") throw invalidMedication();
  const raw = await readLimitedBody(event, 16384, "VALIDATION_ERROR");
  let value;
  try {
    value = JSON.parse(raw.toString("utf8"));
  } catch {
    throw invalidMedication();
  }
  const quantity = value == null ? void 0 : value.quantity;
  if (!value || typeof value.name !== "string" || !value.name.trim() || value.name.length > 200 || typeof value.type !== "string" || !value.type.trim() || value.type.length > 100 || typeof quantity !== "number" || !Number.isInteger(quantity) || quantity < 0 || quantity > 2147483647 || value.remarks != null && (typeof value.remarks !== "string" || value.remarks.length > 1e3)) {
    throw invalidMedication();
  }
  return { name: value.name.trim(), type: value.type.trim(), quantity, remarks: ((_c = value.remarks) == null ? void 0 : _c.trim()) || "" };
}
async function readBulkMedicationInput(event) {
  var _a, _b;
  assertAuthMutation(event);
  requireAuthToken(event);
  if (((_b = (_a = getHeader(event, "content-type")) == null ? void 0 : _a.split(";")[0]) == null ? void 0 : _b.trim().toLowerCase()) !== "application/json") throw invalidMedication();
  const raw = await readLimitedBody(event, 512 * 1024, "VALIDATION_ERROR");
  let value;
  try {
    value = JSON.parse(raw.toString("utf8"));
  } catch {
    throw invalidMedication();
  }
  if (!value || !Array.isArray(value.items) || value.items.length < 1 || value.items.length > 50) throw invalidMedication();
  return value.items.map((item) => {
    var _a2;
    const quantity = item == null ? void 0 : item.quantity;
    if (!item || typeof item.name !== "string" || !item.name.trim() || item.name.length > 200 || typeof item.type !== "string" || !item.type.trim() || item.type.length > 100 || typeof quantity !== "number" || !Number.isInteger(quantity) || quantity < 0 || quantity > 2147483647 || item.remarks != null && (typeof item.remarks !== "string" || item.remarks.length > 1e3)) throw invalidMedication();
    return { name: item.name.trim(), type: item.type.trim(), quantity, remarks: ((_a2 = item.remarks) == null ? void 0 : _a2.trim()) || "" };
  });
}

export { readMedicationInput as a, readBulkMedicationInput as b, readMedicationQuery as c, readMedicationId as r };;globalThis.__timing__.logEnd('Load chunks/_/medications');
//# sourceMappingURL=medications.mjs.map
