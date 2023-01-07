import { sveltekit } from '@sveltejs/kit/vite';
import copy from 'rollup-plugin-copy';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		copy({
			// copy images from the markdown posts folder to the static folder during build time
			// advantage: images can reside with the markdown files
			targets: [{ src: 'src/lib/blog/images', dest: 'static/blog' }]
		})
	]
};

export default config;
