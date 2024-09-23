import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';

export default defineConfig({
	root: './playground',
	plugins: [
		createVuePlugin(),
	],
	server: {
		port: 3000,
		open: true,
	},
});
