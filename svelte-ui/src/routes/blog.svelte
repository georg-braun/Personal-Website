<script context="module">
	import { getPostsDescByDate } from '../blog/markdownFilesToPosts';
	import { pageContainerDefaultClasses } from '../constants';

	export async function load() {
		const posts = getPostsDescByDate();
		return { props: { posts: posts } };
	}
</script>

<script>
	export let posts;
</script>

<div class={pageContainerDefaultClasses}>
	<div class="w-2/3">
		<h1 class="text-3xl mb-5">Blog</h1>
		<div class="ml-5">
			{#each posts as post}
				{#if post.metadata != undefined && post.metadata.title != undefined && post.metadata.date != undefined && post.route != undefined}
					<a href={post.route}>
						<div class="mb-2 p-2 border flex flex-nowrap place-content-between hover:bg-slate-100" href={post.route}>
							<div>{post.metadata.title}</div>
							<div class="my-auto">{new Date(post.metadata.date).toLocaleDateString()}</div>
						</div>
					</a>
				{/if}
			{/each}
		</div>
	</div>
</div>
