<script context="module">
	import { getPostsDescByDate } from '../blog/markdownFilesToPosts';

	const dateFormaOptions = { year: 'numeric', month: 'short', day: 'numeric' };

	export async function load() {
		const posts = getPostsDescByDate();
		return { props: { posts: posts } };
	}
</script>

<script>
	export let posts;
	let searchValue = '';

	function postMeetsSearchCriteria(postMetadata, searchCriteria) {
		if (searchValue === '') return true;
		return (
			postMetadata.title.toUpperCase().includes(searchCriteria.toUpperCase()) ||
			postMetadata.date.toUpperCase().includes(searchCriteria.toUpperCase()) ||
			(postMetadata.tags != undefined &&
				postMetadata.tags.some((_) => _.toUpperCase().includes(searchCriteria.toUpperCase())))
		);
	}
</script>

<div>
	<div class="mb-2 text-center">
		<input class="border rounded" type="text" placeholder="Filter" bind:value={searchValue} />
	</div>

	<div class="grid grid-cols-6 w-2/3 mx-auto gap-y-1">
		{#each posts as post}
			{#if post.metadata != undefined && post.metadata.title != undefined && post.metadata.date != undefined && post.route != undefined && postMeetsSearchCriteria(post.metadata, searchValue)}
				<div class="col-span-1">
					{new Date(post.metadata.date).toLocaleDateString('en-US', dateFormaOptions)}
				</div>
				<div class="col-span-5"><a href={post.route}>{post.metadata.title}</a></div>
			{/if}
		{/each}
	</div>
</div>
