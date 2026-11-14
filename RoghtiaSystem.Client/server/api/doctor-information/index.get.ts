import type { DoctorInformation } from '#shared/types/doctor-information'

export default defineEventHandler(async event => (await requestOwnedApi<DoctorInformation>(event, '/api/doctor-information'))._data)
