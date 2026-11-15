globalThis.__timing__.logStart('Load chunks/build/useDoctorInformation-D_vqrEJe');import { a as useAuth, b as useRequestFetch, v as useState } from './server.mjs';
import { computed } from 'vue';

function useDoctorInformation() {
  const auth = useAuth();
  const requestFetch = useRequestFetch();
  const stored = useState("doctor.information", () => null);
  const information = computed(() => stored.value?.loggedInUserId === auth.user.value?.id ? stored.value : null);
  function accept(value) {
    if (value.loggedInUserId === auth.user.value?.id) stored.value = value;
  }
  async function load(force = false) {
    if (!auth.user.value) {
      stored.value = null;
      return null;
    }
    if (!force && information.value) return information.value;
    const value = await requestFetch("/api/doctor-information", { retry: 0 });
    accept(value);
    return information.value;
  }
  async function save(body) {
    const value = await $fetch("/api/doctor-information", {
      method: information.value?.exists ? "PUT" : "POST",
      body,
      headers: { "x-roghtiasystem-request": "1" },
      retry: 0
    });
    accept(value);
    return value;
  }
  async function savePrintPreferences(preferences) {
    const value = await $fetch("/api/doctor-information/print-preferences", {
      method: "PUT",
      body: preferences,
      headers: { "x-roghtiasystem-request": "1" },
      retry: 0
    });
    accept(value);
    return value;
  }
  async function reset() {
    const value = await $fetch("/api/doctor-information/reset", {
      method: "POST",
      headers: { "x-roghtiasystem-request": "1" },
      retry: 0
    });
    accept(value);
    return value;
  }
  return { information, load, save, savePrintPreferences, reset };
}

export { useDoctorInformation as u };;globalThis.__timing__.logEnd('Load chunks/build/useDoctorInformation-D_vqrEJe');
//# sourceMappingURL=useDoctorInformation-D_vqrEJe.mjs.map
