<script context="module">
	import { getPostsDescByDate } from '../blog/posts';
	export async function load() {
		const posts = getPostsDescByDate();
		return { props: { posts: posts } };
	}
</script>

<script>
	export let posts;
</script>

<div>
	<div class="w-2/3 mx-auto">
		<h1 class="text-3xl mb-5">posts</h1>
		<div class="ml-5">
			{#each posts as post}
				{#if post.metadata != undefined && post.metadata.title != undefined && post.metadata.date != undefined && post.route != undefined}
					<li>
						<a class="font-semibold" href={post.route}>{post.metadata.title}</a>
						<span>{new Date(post.metadata.date).toLocaleDateString()}</span>
					</li>
				{/if}
			{/each}
		</div>
	</div>
</div>
