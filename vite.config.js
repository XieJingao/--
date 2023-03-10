import {
	defineConfig
} from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import Components from 'unplugin-vue-components/vite';
import {
	VantResolver
} from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
	plugins: [
		uni(),
		AutoImport({
			dts: 'runtime/auto-imports.d.ts',
			imports: [
				'vue',
				'vue-router'
			],
			dirs:[
				'./stores',
				'./model'
			],
		}),
		Components({
			dts: 'runtime/components.d.ts',
			resolvers: [VantResolver()],
		}),
	],
});
