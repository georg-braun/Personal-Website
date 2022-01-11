import adapter from '@sveltejs/adapter-auto';
import copy from 'rollup-plugin-copy';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import rehypeExternalLinks from 'rehype-external-links';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// an array of file extensions that should be treated as Svelte components
	extensions: ['.svelte', '.md'],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: '/src/blog-post.svelte',
			rehypePlugins: [rehypeExternalLinks]
		})
	],

	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		// vite and rollup plugins
		vite: () => ({
			plugins: [
				copy({
					// copy images from the markdown posts folder to the static folder during build time
					// advantage: images can reside with the markdown files
					targets: [{ src: 'src/routes/blog/images', dest: 'static/blog' }]
				})
			]
		})
	}
};

export default config;
