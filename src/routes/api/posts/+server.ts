import { json } from '@sveltejs/kit'
import type { Post } from '$lib/types'

export const prerender = true

async function getPosts() {
	let posts: Post[] = []

	const paths = import.meta.glob('/src/posts/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
        
        const filename = path.replace(/^.*[\\/]/, '')
        const timestamp = parseInt((filename.endsWith('.md')) ? filename.slice(0, -3) : path)

		if (file && typeof file === 'object' && 'metadata' in file && 'default' in file) {
			const metadata = file.metadata as Omit<Post, 'timestamp'>
            const content = file.default
			const post = { ...metadata, timestamp, content } satisfies Post
			posts.push(post)
		}
	}

	posts = posts.sort((first, second) =>
        second.timestamp - first.timestamp
	)

	return posts
}

export async function GET() {
	const posts = await getPosts()
	return json(posts.map((post: Post) => ({ ...post, content: post.content.render().html })))
}
