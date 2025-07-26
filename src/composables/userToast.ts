import { ref } from 'vue';

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

const toasts = ref<Toast[]>([]);

function addToast(message: string, type: Toast['type']) {
  const id = Date.now() + Math.random();
  toasts.value.push({ id, message, type });
  setTimeout(() => removeToast(id), 3000);
}

function removeToast(id: number) {
  toasts.value = toasts.value.filter(t => t.id !== id);
}

function success(message: string) {
  addToast(message, 'success');
}

function error(message: string) {
  addToast(message, 'error');
}

function info(message: string) {
  addToast(message, 'info');
}

export function useToast() {
  return {
    toasts,
    addToast,
    removeToast,
    success,
    error,
    info,
  };
}
