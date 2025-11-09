import { sveltekit } from '@sveltejs/kit/vite';
import copy from 'rollup-plugin-copy';
import { defineConfig } from 'vite';

export default defineConfig({
        plugins: [
                sveltekit(),
                copy({
                        // copy images from the markdown posts folder to the static folder during build time
                        // advantage: images can reside with the markdown files
                        targets: [{ src: 'src/lib/blog/images', dest: 'static/blog' }]
                })
        ]
});
