import { useToast } from 'primevue/usetoast'
export function useAppToast() {
  const toast = useToast()
  return { add(message: { title?: string; description?: string; color?: string; duration?: number; icon?: string }) { toast.add({ severity: message.color === 'error' ? 'error' : message.color === 'warning' ? 'warn' : message.color === 'success' ? 'success' : 'info', summary: message.title, detail: message.description, life: message.duration || 4000 }) } }
}