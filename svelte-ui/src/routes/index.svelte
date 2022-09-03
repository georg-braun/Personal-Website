<script context="module">
	import { getLatestFivePostsDescByDate } from '../blog/markdownFilesToPosts';
	import { pageContainerDefaultClasses } from '../constants';
	// execute before the component is initialized
	export async function load() {
		const postsByDescDate = getLatestFivePostsDescByDate();
		// pass the post data as props to the component
		return { props: { posts: postsByDescDate } };
	}
</script>

<script>
	export let posts;
</script>

<div class={pageContainerDefaultClasses}>
	<h1 class="text-3xl mb-5">Recent posts</h1>
	<div class="ml-5">
		{#each posts as post}
			{#if post.metadata != undefined && post.metadata.title != undefined && post.metadata.date != undefined && post.route != undefined}
				<li>
					<a href={post.route}
						>{post.metadata.title} ({new Date(post.metadata.date).toLocaleDateString()})</a
					>
				</li>
			{/if}
		{/each}
	</div>
</div>
