import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	/** files to treat as svelte component */
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			/** insted of only treating .svx files, also consider .md files */
			extensions: ['.md']
		})
	],

	kit: {
		/** Run when vite build is run. Determines how the output is converted for different platforms. */
		adapter: adapter(),

	}

};

export default config;
