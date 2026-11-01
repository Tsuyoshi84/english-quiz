import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			// Consult https://kit.svelte.dev/docs/integrations#preprocessors
			// for more information about preprocessors
			preprocess: [preprocess({})],

			adapter: adapter({
				// default options are shown. On some platforms
				// these options are set automatically — see below
				pages: 'build',
				assets: 'build',
				precompress: false,
				strict: true
			})
		})
	],
	server: {
		host: '0.0.0.0' /* Allow external connections */,
		port: 5173,
		strictPort: true /* Fail if port is already in use */
	}
});
