import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/hex2rgb/', // Используем точное имя репозитория
  plugins: [react()],
});
