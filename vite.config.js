import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/Portfolio_/', // Remplacez 'Portfolio' par le nom de votre dépôt GitHub
  plugins: [react()],
});
