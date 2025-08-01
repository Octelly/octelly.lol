import * as globals from '$lib/globals'
import type { Post } from '$lib/types'

export const prerender = true

export async function GET({ fetch }) {
	const response = await fetch('api/posts')
	const posts: Post[] = await response.json()

	const headers = { 'Content-Type': 'application/xml' }

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${globals.title}</title>
				<description>${globals.description}</description>
				<link>${globals.url}</link>
				<atom:link href="${globals.url}/rss.xml" rel="self" type="application/rss+xml"/>
				<language>en</language>
				<generator>SvelteKit</generator>
				<follow_challenge>
					<feedId>174086832009560112</feedId>
					<userId>174086236416574464</userId>
				</follow_challenge>
				<docs>https://validator.w3.org/feed/docs/rss2.html</docs>
				${posts
			.map(
				(post) => `
						<item>
							<title>${post.title}</title>
							<description><![CDATA[${post.content}]]></description>
							<link>${globals.url}/posts/${post.timestamp}</link>
							<guid isPermaLink="true">${globals.url}/posts/${post.timestamp}</guid>
							<pubDate>${new Date(post.timestamp * 1000).toUTCString()}</pubDate>
							${post.tags.map((tag) => `<category>${tag}</category>`).join('')}
						</item>
					`
			)
			.join('')}
			</channel>
		</rss>
	`.trim()

	return new Response(xml, { headers })
}
