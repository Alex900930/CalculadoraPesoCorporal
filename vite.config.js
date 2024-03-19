import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno desde el archivo .env

export default defineConfig({
  plugins: [react()],
  publicDir: 'public', // Asegura que Vite sirva los archivos estáticos desde la carpeta 'public'
});