import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	root: join(__dirname, 'src/demo'),
	plugins: [vue()],
	build: {
		// lib: {
		// 	entry: join(__dirname, 'src/index.ts'),
		// 	name: 'multiline-text',
		// },
		rollupOptions: {
			input: {
				main: join(__dirname, 'src/demo/index.html'),
			},
		},
	},
})
