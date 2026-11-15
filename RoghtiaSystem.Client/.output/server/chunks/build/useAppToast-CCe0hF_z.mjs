globalThis.__timing__.logStart('Load chunks/build/useAppToast-CCe0hF_z');import { h as useToast } from './server.mjs';

function useAppToast() {
  const toast = useToast();
  return { add(message) {
    toast.add({ severity: message.color === "error" ? "error" : message.color === "warning" ? "warn" : message.color === "success" ? "success" : "info", summary: message.title, detail: message.description, life: message.duration || 4e3 });
  } };
}

export { useAppToast as u };;globalThis.__timing__.logEnd('Load chunks/build/useAppToast-CCe0hF_z');
//# sourceMappingURL=useAppToast-CCe0hF_z.mjs.map
