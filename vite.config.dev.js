import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; // Use @vitejs/plugin-vue for Vue 3

export default defineConfig({
    root: './playground',
    plugins: [vue()], // Replace createVuePlugin() with vue()
    server: {
        port: 3000,
        open: true,
    },
});