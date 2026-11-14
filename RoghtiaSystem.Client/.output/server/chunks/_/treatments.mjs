globalThis.__timing__.logStart('Load chunks/_/treatments');import { a as assertAuthMutation, r as requireAuthToken } from './auth.mjs';
import { a as readLimitedBody } from './owned-api.mjs';
import { l as getHeader, h as getRouterParam, e as createError, g as getQuery } from './nitro.mjs';
import { p as prescriptionFrequencies } from './treatment.mjs';

const invalid = () => createError({ statusCode: 400, data: { code: "VALIDATION_ERROR" } });
const allowedFrequencies = new Set(prescriptionFrequencies);
function readTreatmentId(event) {
  const value = getRouterParam(event, "id") || "";
  const id = Number(value);
  if (!/^\d+$/.test(value) || !Number.isSafeInteger(id) || id < 1 || id > 2147483647) {
    throw createError({ statusCode: 404, data: { code: "NOT_FOUND" } });
  }
  return id;
}
function readTreatmentQuery(event) {
  var _a;
  const query = getQuery(event);
  function integer(value, fallback, max) {
    if (value === void 0) return fallback;
    if (typeof value !== "string" || !/^\d+$/.test(value)) throw invalid();
    const number = Number(value);
    if (!Number.isSafeInteger(number) || number < 1 || number > max) throw invalid();
    return number;
  }
  const patientName = (_a = query.patientName) != null ? _a : "";
  if (typeof patientName !== "string" || patientName.length > 200) throw invalid();
  const patientId = query.patientId === void 0 ? void 0 : integer(query.patientId, 1, 2147483647);
  const fromUtc = query.fromUtc;
  const toUtc = query.toUtc;
  if (fromUtc === void 0 !== (toUtc === void 0)) throw invalid();
  if (fromUtc !== void 0 && (typeof fromUtc !== "string" || typeof toUtc !== "string" || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(fromUtc) || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(toUtc) || !Number.isFinite(Date.parse(fromUtc)) || !Number.isFinite(Date.parse(toUtc)) || Date.parse(fromUtc) >= Date.parse(toUtc) || Date.parse(toUtc) - Date.parse(fromUtc) > 32 * 864e5)) throw invalid();
  return {
    page: integer(query.page, 1, 2147483647),
    pageSize: integer(query.pageSize, 20, 100),
    patientName: patientName.trim(),
    ...patientId === void 0 ? {} : { patientId },
    ...fromUtc === void 0 ? {} : { fromUtc, toUtc }
  };
}
async function readTreatmentInput(event) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  assertAuthMutation(event);
  requireAuthToken(event);
  if (((_b = (_a = getHeader(event, "content-type")) == null ? void 0 : _a.split(";")[0]) == null ? void 0 : _b.trim().toLowerCase()) !== "application/json") throw invalid();
  const raw = await readLimitedBody(event, 32 * 1024, "VALIDATION_ERROR");
  let value;
  try {
    value = JSON.parse(raw.toString("utf8"));
  } catch {
    throw invalid();
  }
  const legacyDiagnosticIds = value == null ? void 0 : value.diagnosticInvestigationIds;
  const hasSplitDiagnosticFields = (value == null ? void 0 : value.diagnosticIds) !== void 0 || (value == null ? void 0 : value.investigationIds) !== void 0;
  if (!value || value.diagnosticIds !== void 0 && !Array.isArray(value.diagnosticIds) || value.investigationIds !== void 0 && !Array.isArray(value.investigationIds) || legacyDiagnosticIds !== void 0 && !Array.isArray(legacyDiagnosticIds)) throw invalid();
  const diagnosticIds = hasSplitDiagnosticFields ? (_c = value.diagnosticIds) != null ? _c : [] : Array.isArray(legacyDiagnosticIds) ? legacyDiagnosticIds : [];
  const investigationIds = hasSplitDiagnosticFields ? (_d = value.investigationIds) != null ? _d : [] : [];
  const allDiagnosticIds = [...diagnosticIds, ...investigationIds];
  const bloodPressure = (_e = value == null ? void 0 : value.bloodPressure) != null ? _e : "120/80";
  const additionalInstructionIds = (_f = value == null ? void 0 : value.additionalInstructionIds) != null ? _f : [];
  if (!value || !Number.isInteger(value.patientId) || value.patientId < 1 || value.patientId > 2147483647 || typeof value.bloodPressure !== "string" || !/^(?:|[1-9][0-9]{1,2}\/[1-9][0-9]{1,2})$/.test(value.bloodPressure.trim()) || value.additionalInstructions !== void 0 && (typeof value.additionalInstructions !== "string" || value.additionalInstructions.trim().length > 2e3) || !Array.isArray(value.clinicalNoteIds) || value.clinicalNoteIds.length > 20 || value.clinicalNoteIds.some((id) => !Number.isInteger(id) || id < 1 || id > 2147483647) || new Set(value.clinicalNoteIds).size !== value.clinicalNoteIds.length || !Array.isArray(additionalInstructionIds) || additionalInstructionIds.length > 20 || additionalInstructionIds.some((id) => !Number.isInteger(id) || id < 1 || id > 2147483647) || diagnosticIds.some((id) => !Number.isInteger(id) || id < 1 || id > 2147483647) || investigationIds.some((id) => !Number.isInteger(id) || id < 1 || id > 2147483647) || allDiagnosticIds.length > 20 || new Set(allDiagnosticIds).size !== allDiagnosticIds.length || new Set(additionalInstructionIds).size !== additionalInstructionIds.length || !Array.isArray(value.prescriptionItems) || value.prescriptionItems.length > 30 || value.prescriptionItems.some((item) => !item || !Number.isInteger(item.medicationId) || item.medicationId < 1 || item.medicationId > 2147483647 || !Number.isInteger(item.dose) || item.dose < 1 || item.dose > 2147483647 || item.frequency !== void 0 && (typeof item.frequency !== "string" || !allowedFrequencies.has(item.frequency)) || typeof item.duration !== "string" || !item.duration.trim() || item.duration.trim().length > 100) || value.allowInsufficientStock !== void 0 && typeof value.allowInsufficientStock !== "boolean" || value.saveAsTemplate !== void 0 && typeof value.saveAsTemplate !== "boolean" || value.templateId !== void 0 && value.templateId !== null && (!Number.isInteger(value.templateId) || value.templateId < 1 || value.templateId > 2147483647) || value.templateName !== void 0 && (typeof value.templateName !== "string" || value.templateName.trim().length > 100)) throw invalid();
  return {
    patientId: value.patientId,
    bloodPressure: bloodPressure.trim(),
    additionalInstructions: (_h = (_g = value.additionalInstructions) == null ? void 0 : _g.trim()) != null ? _h : "",
    clinicalNoteIds: [...value.clinicalNoteIds],
    additionalInstructionIds: [...additionalInstructionIds],
    diagnosticIds: [...diagnosticIds],
    investigationIds: [...investigationIds],
    prescriptionItems: value.prescriptionItems.map((item) => {
      var _a2;
      return { medicationId: item.medicationId, dose: item.dose, frequency: (_a2 = item.frequency) != null ? _a2 : "Once daily", duration: item.duration.trim() };
    }),
    allowInsufficientStock: value.allowInsufficientStock === true,
    saveAsTemplate: value.saveAsTemplate === true,
    templateId: (_i = value.templateId) != null ? _i : null,
    ...value.templateName === void 0 ? {} : { templateName: value.templateName.trim() }
  };
}
async function readClinicalNoteInput(event) {
  var _a, _b;
  assertAuthMutation(event);
  requireAuthToken(event);
  if (((_b = (_a = getHeader(event, "content-type")) == null ? void 0 : _a.split(";")[0]) == null ? void 0 : _b.trim().toLowerCase()) !== "application/json") throw invalid();
  const raw = await readLimitedBody(event, 2048, "VALIDATION_ERROR");
  let value;
  try {
    value = JSON.parse(raw.toString("utf8"));
  } catch {
    throw invalid();
  }
  if (!value || typeof value.text !== "string" || !value.text.trim() || value.text.trim().length > 300) throw invalid();
  return { text: value.text.trim() };
}

export { readTreatmentId as a, readTreatmentInput as b, readTreatmentQuery as c, readClinicalNoteInput as r };;globalThis.__timing__.logEnd('Load chunks/_/treatments');
//# sourceMappingURL=treatments.mjs.map
