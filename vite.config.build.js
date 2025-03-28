import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; // Use @vitejs/plugin-vue for Vue 3

export default defineConfig({
    plugins: [vue()], // Replace createVuePlugin() with vue()
    build: {
        minify: 'terser',
        assetsDir: '',
        emptyOutDir: true,
        lib: {
            entry: './src/index.js',
            formats: ['es', 'cjs', 'umd'],
            name: 'CoolLightBox',
            fileName: (format) => {
                const extension = (() => {
                    if (format === 'umd') return `umd.js`;
                    if (format === 'cjs') return `cjs`;
                    return `esm.js`;
                })();
                return `vue-cool-lightbox.${extension}`;
            },
        },
        cssCodeSplit: true,
        rollupOptions: {
            external: ['vue', 'body-scroll-lock'],
            output: {
                dir: './dist',
                globals: {
                    'vue': 'Vue',
                    'body-scroll-lock': 'bodyScrollLock',
                },
                assetFileNames: (chunkInfo) => {
                    return chunkInfo.name === 'index.css'
                        ? `vue-cool-lightbox.min.css`
                        : `'[name].[ext]'`;
                },
            },
        },
    },
});