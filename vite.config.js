import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from '@rollup/plugin-eslint';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		{
			...eslint({
				include: 'src/**/*.+(js)',
			}),
			enforce: 'pre',
			apply: 'build',
		},
		AutoImport({
			/* options */
			imports: ['vue'],
			dirs: [],
			// dts: true
		}),
		Components({
			dirs: ['src/views', 'src/components'],
			// dts: true
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
