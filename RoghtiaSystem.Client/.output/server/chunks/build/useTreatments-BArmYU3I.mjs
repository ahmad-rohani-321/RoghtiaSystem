globalThis.__timing__.logStart('Load chunks/build/useTreatments-BArmYU3I');import { d as useRequestFetch, $ as $fetch$1 } from '../virtual/entry.mjs';

// app/composables/useTreatments.ts
function useTreatments() {
	const requestFetch = useRequestFetch();
	const list = (query = {}) => requestFetch("/api/treatments", {
		query: { ...query },
		retry: 0
	});
	const dashboard = (date, period) => requestFetch("/api/treatments/dashboard", {
		query: {
			date,
			period
		},
		retry: 0
	});
	const get = (id) => requestFetch(`/api/treatments/${encodeURIComponent(id)}`, { retry: 0 });
	const templates = () => requestFetch("/api/treatments/templates", { retry: 0 });
	const create = async (input) => {
		return await $fetch$1("/api/treatments", {
			method: "POST",
			body: input,
			headers: { "x-roghtiasystem-request": "1" },
			retry: 0
		});
	};
	const update = async (id, input) => {
		return await $fetch$1(`/api/treatments/${encodeURIComponent(id)}`, {
			method: "PUT",
			body: input,
			headers: { "x-roghtiasystem-request": "1" },
			retry: 0
		});
	};
	const clinicalNotes = () => requestFetch("/api/clinical-notes", { retry: 0 });
	const addClinicalNote = (text) => $fetch$1("/api/clinical-notes", {
		method: "POST",
		body: { text },
		headers: { "x-roghtiasystem-request": "1" },
		retry: 0
	});
	const additionalInstructions = () => requestFetch("/api/additional-instructions", { retry: 0 });
	const addAdditionalInstruction = (text) => $fetch$1("/api/additional-instructions", {
		method: "POST",
		body: { text },
		headers: { "x-roghtiasystem-request": "1" },
		retry: 0
	});
	const diagnosticsAndInvestigations = (kind) => requestFetch("/api/diagnostics-investigations", {
		query: { kind },
		retry: 0
	});
	const addDiagnosticInvestigation = (text, kind) => $fetch$1("/api/diagnostics-investigations", {
		method: "POST",
		body: {
			text,
			kind
		},
		headers: { "x-roghtiasystem-request": "1" },
		retry: 0
	});
	return {
		list,
		get,
		dashboard,
		templates,
		create,
		update,
		clinicalNotes,
		addClinicalNote,
		additionalInstructions,
		addAdditionalInstruction,
		diagnosticsAndInvestigations,
		addDiagnosticInvestigation
	};
}

export { useTreatments as u };;globalThis.__timing__.logEnd('Load chunks/build/useTreatments-BArmYU3I');
//# sourceMappingURL=useTreatments-BArmYU3I.mjs.map
