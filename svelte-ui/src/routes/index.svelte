<script context="module">
	import { getPostsDescByDate } from '../lib/markdownFilesToPosts';

	const dateFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };

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
    <div class="text-center" title="Readings should be simple">Simple notes. Fits within a ☕ break.</div>
	<div class="mt-4 text-black text-center mb-4">
		<input class="border rounded text-center" type="text" placeholder="Search" bind:value={searchValue} />
	</div>
	<div class="flex flex-wrap mx-auto justify-center gap-4 w-2/3">
		{#each posts as post}
			{#if post.metadata != undefined && post.metadata.title != undefined && post.metadata.date != undefined && post.route != undefined && postMeetsSearchCriteria(post.metadata, searchValue)}
				<a class="no-underline" href={post.route}>
					<div class="w-64 h-full border border-solid border-opacity-50 hover:border-opacity-100 transition-all rounded p-2">
						<div class="col-span-4 md:col-span-5">
							{post.metadata.title}
						</div>
						<div class="col-span-2 md:col-span-1 text-xs opacity-50">
							{new Date(post.metadata.date).toLocaleDateString('en-US', dateFormatOptions)}
						</div>
					</div>
				</a>
			{/if}
		{/each}
	</div>
</div>
