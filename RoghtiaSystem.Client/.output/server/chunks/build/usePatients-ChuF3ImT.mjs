globalThis.__timing__.logStart('Load chunks/build/usePatients-ChuF3ImT');import { d as useRequestFetch, $ as $fetch$1 } from '../virtual/entry.mjs';

// app/composables/usePatients.ts
function usePatients() {
	const requestFetch = useRequestFetch();
	function list(query = {}) {
		return requestFetch("/api/patients", {
			query: { ...query },
			retry: 0
		});
	}
	function get(id) {
		return requestFetch(`/api/patients/${encodeURIComponent(id)}`, { retry: 0 });
	}
	function getByCode(code) {
		return requestFetch(`/api/patients/by-code/${encodeURIComponent(code)}`, { retry: 0 });
	}
	function inputBody(input) {
		return {
			name: input.name,
			phone: input.phone,
			age: input.age,
			gender: input.gender,
			address: input.address
		};
	}
	async function create(input) {
		return await $fetch$1("/api/patients", {
			method: "POST",
			body: inputBody(input),
			headers: { "x-roghtiasystem-request": "1" },
			retry: 0
		});
	}
	async function update(id, input) {
		return await $fetch$1(`/api/patients/${encodeURIComponent(id)}`, {
			method: "PUT",
			body: inputBody(input),
			headers: { "x-roghtiasystem-request": "1" },
			retry: 0
		});
	}
	return {
		list,
		get,
		getByCode,
		create,
		update
	};
}

export { usePatients as u };;globalThis.__timing__.logEnd('Load chunks/build/usePatients-ChuF3ImT');
//# sourceMappingURL=usePatients-ChuF3ImT.mjs.map
