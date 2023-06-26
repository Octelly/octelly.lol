import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex'
import underline from 'remark-underline';
import * as fs from 'fs';

const posts = fs.readdirSync('./src/posts').map(post => {
	return '/posts/' + post.replace('.md', '')
})

/** @type {import('@sveltejs/kit').Config} */
export default {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex({
		extensions: ['.md'],
		layout: './src/mdsvex_layout.svelte',
		remarkPlugins: [
			underline
		]
	})],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			strict: false
		}),
		prerender: {
			entries: posts
		}
	}
}