<script context="module">
	import { getLatestFivePostsDescByDate } from '../blog/markdownFilesToPosts';
	// execute before the component is initialized
	export async function load() {
		const postsByDescDate = getLatestFivePostsDescByDate();
		// pass the post data as props to the component
		return { props: { posts: postsByDescDate } };
	}
</script>

<script>
	import Projects from '../components/projects.svelte';

	export let posts;
</script>

<div>
	<h1 class="text-3xl mb-5">Content?</h1>
	<div class="mx-auto">
		<div>Information and opinions about software development, personal projects and things I don't want to write twice.</div>
		<div class="text-gray-400">Architecture, C#, DevOps, bits and bytes</div>
	</div>

	<h1 class="text-3xl mt-10 mb-5">Recent posts</h1>
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
	<h1 class="text-3xl mt-10 mb-5">Projects</h1>
	<Projects />
</div>
