import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Usamos 'import.meta.url' y 'fileURLToPath' para obtener el directorio actual
      '~bootstrap': path.resolve(fileURLToPath(new URL('.', import.meta.url)), 'node_modules/bootstrap'),
    }
  },
})
