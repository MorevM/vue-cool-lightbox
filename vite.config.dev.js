import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import vitePluginRequire from 'vite-plugin-require';

export default defineConfig({
	root: './playground',
	plugins: [
		createVuePlugin(),
		vitePluginRequire.default(),
	],
	server: {
		port: 3000,
		open: true,
	},
});
